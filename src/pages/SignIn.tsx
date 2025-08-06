import React, { useState } from "react";
import SignInBackground from "../components/SignInBackground";
import { logo, eyeSlashIcon } from "../assets/images";
import Input from "../components/fields/Input";
import Button from "../components/buttons/Button";
import ResetPassword from "../components/ResetPassword";

interface field {
  name: string;
  type: string;
  placeholder: string;
  className: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  endIcon: string | undefined;
}

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formType, setFormType] = useState("login");

  // Function to toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);

  // login function
  const handleLogin = () => {};

  const fields: field[] = [
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Your Email",
      className:
        "w-full h-[62px] bg-brand-gray rounded-lg px-4 text-gray-600 placeholder-gray-500 focus:outline-none",
      setValue: setEmail,
      endIcon: undefined,
    },
    {
      name: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Enter Your Password",
      className:
        "w-full h-[62px] bg-brand-gray rounded-lg px-4 text-gray-600 placeholder-gray-500 focus:outline-none",
      setValue: setPassword,
      // endIcon: showPassword ? "◎" : eyeSlashIcon,
      endIcon: eyeSlashIcon,
    },
  ];

  return (
    <div className="relative">
      {/* Background (blue area with paw images) */}
      <SignInBackground />
      {/* Foreground: login form over the background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white xxs:h-[75vh] sm:h-[65vh] xxs:w-[92vw] md:w-[85vw] lg:w-[70vw] rounded-4xl shadow-lg">
          <div className="grid xxs:grid-cols-1 sm:grid-cols-2 place-items-center h-full">
            {/* logo at left side */}
            <img src={logo} alt={`paw-logo`} className="xxs:px-5 sm:px-0" />

            {/* form at right side */}
            {formType === "login" ? (
              <div className="w-full xxs:p-4 md:p-5 lg:pr-10">
                <div className="font-bold text-4xl text-center">Welcome</div>
                <div className="my-2 text-brand-lightGray text-lg text-center">
                  Please enter your credentials to continue
                </div>

                <div>
                  {fields.map(
                    ({
                      name,
                      type,
                      placeholder,
                      className,
                      setValue,
                      endIcon,
                    }) => (
                      <div key={name}>
                        <div className="mt-5 mb-3 mx-1 font-bold text-base">
                          {name}
                        </div>
                        <div className="relative">
                          <Input
                            type={type}
                            placeholder={placeholder}
                            className={className}
                            setValue={setValue}
                          />
                          {/* Eye endIcon to toggle password visibility */}
                          {name === "Password" && (
                            <img
                              src={endIcon}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                              onClick={togglePassword}
                            />
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="my-5 text-lg text-center">
                  Forgot your password?{" "}
                  <span
                    className="text-brand-blue cursor-pointer"
                    onClick={() => setFormType("resetPassword")}
                  >
                    Reset Now
                  </span>
                </div>

                <Button
                  name="Sign In"
                  className="w-full h-[56px] bg-brand-blue rounded-lg text-white font-bold"
                  onClick={handleLogin}
                />
              </div>
            ) : (
              <ResetPassword setEmail={setEmail} setFormType={setFormType} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
