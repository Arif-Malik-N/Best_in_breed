import React, { useState } from "react";
import Button from "../buttons/Button";
import { check, location } from "../../assets/images";
import Input from "../fields/Input";
import type { field, Props } from "../../utils/interfaces";

const EditProfile: React.FC<Props> = ({ setType }) => {
  const [email, setEmail] = useState("brucenelson@demomail.com");
  const [loc, setLoc] = useState("Theron Branch Suite 920");
  const [phoneNo, setPhoneNo] = useState("+1 (027) 266-7137");

  const fields: field[] = [
    {
      value: email,
      name: "Email Address",
      type: "email",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base text-gray-750 border border-gray-300 focus:outline-none",
      setValue: setEmail,
      endIcon: check,
    },
    {
      value: phoneNo,
      name: "Phone Number",
      type: "text",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base text-gray-750 border border-gray-300 focus:outline-none",
      setValue: setPhoneNo,
      endIcon: undefined,
    },
    {
      value: loc,
      name: "Location",
      type: "text",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base text-gray-750 border border-gray-300 focus:outline-none",
      setValue: setLoc,
      endIcon: location,
    },
  ];

  return (
    <div>
      <div className="my-[50px]">
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 xxs:gap-4 sm:gap-5">
          {fields.map(({ value, name, type, className, setValue, endIcon }) => (
            <div key={name}>
              <div className="xxs:mb-1 sm:mb-3 mx-1 font-bold xxs:text-sm sm:text-base">
                {name}
              </div>
              <div className="relative">
                <Input
                  value={value}
                  type={type}
                  className={className}
                  setValue={setValue}
                  endIcon={endIcon}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        name="Save Changes"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white"
        onClick={() => setType("menu")}
      />
    </div>
  );
};

export default EditProfile;
