import React from "react";
import Button from "../buttons/Button";
import { changePassword, edit, lock, terms } from "../../assets/images";

interface menu {
  key: string;
  icon: string;
  name: string;
}

interface Props {
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<Props> = ({ setType }) => {
  const profileMenu: menu[] = [
    {
      key: "editProfile",
      icon: edit,
      name: "Edit Profile",
    },
    {
      key: "changePassword",
      icon: changePassword,
      name: "Change Password",
    },
    {
      key: "privacyPolicy",
      icon: lock,
      name: "Privacy Policy",
    },
    {
      key: "termsAndCond",
      icon: terms,
      name: "Terms & Conditions",
    },
  ];

  return (
    <div>
      <div className="my-[50px]">
        {profileMenu.map(({ key, name, icon }) => (
          <div
            key={key}
            className="flex items-center w-full my-5 cursor-pointer"
            onClick={() => setType(key)}
          >
            <div className="flex w-[90%]">
              <img src={icon} alt={key} className="w-4 h-5 my-1" />
              <span className="ml-5 xxs:text-base md:text-lg">{name}</span>
            </div>
            <div className="w-[10%] text-right">
              <span className="text-xs">▶</span>
            </div>
          </div>
        ))}
      </div>

      <Button
        name="Log Out"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white font-bold"
        onClick={() => {}}
      />
    </div>
  );
};

export default Menu;
