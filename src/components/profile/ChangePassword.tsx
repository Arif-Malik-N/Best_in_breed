import React, { useState } from "react";
import Button from "../buttons/Button";
import { lock2 } from "../../assets/images";
import Input from "../fields/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface field {
  name: string;
  type: string;
  className: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  startIcon: string | undefined;
}

interface Props {
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const ChangePassword: React.FC<Props> = ({ setType }) => {
  const [currentPsd, setCurrentPsd] = useState("");
  const [newPsd, setNewPsd] = useState("");
  const [confirmPsd, setConfirmPsd] = useState("");

  const fields: field[] = [
    {
      name: "Current Password",
      type: "password",
      placeholder: "Current Password",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setCurrentPsd,
      startIcon: lock2,
    },
    {
      name: "New Password",
      type: "password",
      placeholder: "New Password",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setNewPsd,
      startIcon: lock2,
    },
    {
      name: "Confirm New Password",
      type: "password",
      placeholder: "Retype New Password",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setConfirmPsd,
      startIcon: lock2,
    },
  ];

  return (
    <div>
      <div className="flex gap-5 mt-5">
        <div className="cursor-pointer" onClick={() => setType("menu")}>
          <AiOutlineArrowLeft className="mt-1 w-6 h-6" />
        </div>
        <span className="xxs:text-lg xs:text-xl sm:text-2xl font-bold">
          Change Password
        </span>
      </div>
      <div className="my-[50px]">
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 xxs:gap-4 sm:gap-5">
          {fields.map(
            ({ name, type, placeholder, className, setValue, startIcon }) => (
              <div key={name}>
                <div className="xxs:mb-1 sm:mb-3 mx-1 font-bold xxs:text-sm sm:text-base">
                  {name}
                </div>
                <div className="relative">
                  <Input
                    type={type}
                    placeholder={placeholder}
                    className={className}
                    setValue={setValue}
                    startIcon={startIcon}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Button
        name="Save Changes"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white font-bold"
        onClick={() => setType("menu")}
      />
    </div>
  );
};

export default ChangePassword;
