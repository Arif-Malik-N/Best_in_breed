import React, { useState } from "react";
import SignInBackground from "../components/SignInBackground";
import { logo } from "../assets/images";
import Input from "../components/fields/Input";

interface field {
  name: string;
  type: string;
  placeholder: string;
  className: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fields: field[] = [
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Your Email",
      className:
        "w-full h-[62px] bg-[#f0f0f0] rounded-lg px-4 text-gray-600 placeholder-gray-500 focus:outline-none",
      setValue: setEmail,
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      className:
        "w-full h-[62px] bg-[#f0f0f0] rounded-lg px-4 text-gray-600 placeholder-gray-500 focus:outline-none",
      setValue: setPassword,
    },
  ];

  return (
    <div className="relative">
      {/* Background (blue area with paw images) */}
      <SignInBackground />
      {/* Foreground: login form over the background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white h-[65vh] w-[70vw] rounded-4xl shadow-lg">
          <div className="grid grid-cols-2 place-items-center h-full">
            {/* logo at left side */}
            <img src={logo} alt={`paw-logo`} />
            {/* form at right side */}
            <div className="w-full px-5">
              <div className="font-bold text-[36px] text-center">Welcome</div>
              <div className="mt-2 text-[#64748B] text-[18px] text-center">
                Please enter your credentials to continue
              </div>

              <div>
                {fields.map((item) => (
                  <div key={item.name}>
                    <div className="mt-5 mb-3 mx-1 font-bold text-[16px]">
                      {item.name}
                    </div>
                    <Input
                      type={item.type}
                      placeholder={item.placeholder}
                      className={item.className}
                      setValue={item.setValue}
                    />
                  </div>
                ))}
              </div>

              <div className="my-4 text-[18px] text-center">
                Forgot your password?{" "}
                <span className="text-[#0052FF]">Reset Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
