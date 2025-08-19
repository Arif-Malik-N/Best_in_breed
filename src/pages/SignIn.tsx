import { useContext, useState } from "react";
import SignInBackground from "../components/SignInBackground";
import { logo } from "../assets/images";
import Input from "../components/fields/Input";
import Button from "../components/buttons/Button";
import ResetPassword from "../components/ResetPassword";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import type { field } from "../utils/interfaces";
import { AuthContext } from "../router/Index";

const SignIn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formType, setFormType] = useState("login");

  // Function to toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);

  // login function
  const handleLogin = () => setIsAuthenticated(true);

  const fields: field[] = [
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Your Email",
      className:
        "w-full xxs:h-[50px] sm:h-[62px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 focus:outline-none",
      setValue: setEmail,
      endIcon: undefined,
    },
    {
      name: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Enter Your Password",
      className:
        "w-full xxs:h-[50px] sm:h-[62px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 focus:outline-none",
      setValue: setPassword,
      endIcon: showPassword ? (
        <AiOutlineEye className="w-5 h-5 text-gray-750" />
      ) : (
        <AiOutlineEyeInvisible className="w-5 h-5 text-gray-750" />
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Background (blue area with paw images) */}
      <SignInBackground />
      {/* Foreground: login form over the background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white xxs:pb-4 sm:h-[65vh] xxs:w-[92vw] md:w-[85vw] lg:w-[70vw] rounded-4xl shadow-lg">
          <div className="grid xxs:grid-cols-1 sm:grid-cols-2 place-items-center sm:h-full">
            {/* logo at left side */}
            <img src={logo} alt={`paw-logo`} className="xxs:p-5 sm:px-2" />

            {/* form at right side */}
            {formType === "login" ? (
              <div className="w-full xxs:p-4 md:p-5 lg:pr-10">
                <div className="font-bold xxs:text-2xl xs:text-3xl sm:text-4xl text-center">
                  Welcome
                </div>
                <div className="my-2 text-gray-700 xxs:text-sm xs:text-base sm:text-lg text-center">
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
                            <div
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                              onClick={togglePassword}
                            >
                              {endIcon}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="my-5 xxs:text-sm xs:text-base sm:text-lg text-center">
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
                  className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white"
                  onClick={handleLogin}
                />
              </div>
            ) : (
              <ResetPassword
                email={email}
                setEmail={setEmail}
                setFormType={setFormType}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
