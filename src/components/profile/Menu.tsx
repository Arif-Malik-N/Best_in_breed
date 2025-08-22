import React, { useContext } from "react";
import Button from "../buttons/Button";
import { changePassword, edit, lock, terms } from "../../assets/images";
import { AiOutlineRight } from "react-icons/ai";
import type { menu, Props } from "../../utils/interfaces";
import { AuthContext } from "../../router/Index";
import { useNavigate } from "react-router-dom";

const Menu: React.FC<Props> = ({ setType }) => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

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
      path: "/privacy-policy",
    },
    {
      key: "termsAndCond",
      icon: terms,
      name: "Terms & Conditions",
      path: "/term-and-conditions",
    },
  ];

  return (
    <div>
      <div className="my-[50px]">
        {profileMenu.map(({ key, name, icon, path }) => {
          const isSamePage: boolean = [
            "changePassword",
            "editProfile",
          ].includes(key);
          return (
            <div
              key={key}
              className={`flex items-center w-full my-5 cursor-pointer`}
              onClick={() => (isSamePage ? setType(key) : navigate(path))}
            >
              <div className="flex w-[90%]">
                <img src={icon} alt={key} className="w-4 h-5 my-1" />
                <span className="ml-5 xxs:text-base md:text-lg">{name}</span>
              </div>
              <div className="w-[10%] place-items-end">
                <AiOutlineRight className="ml-1 mt-4" />
              </div>
            </div>
          );
        })}
      </div>

      <Button
        name="Log Out"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white"
        onClick={() => {
          setIsAuthenticated(false);
          navigate("/");
        }}
      />
    </div>
  );
};

export default Menu;
