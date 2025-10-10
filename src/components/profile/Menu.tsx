import React from "react";
import Button from "../buttons/Button";
import {
  changePassword,
  edit,
  lock,
  profile2,
  terms,
} from "../../assets/images";
import { AiOutlineRight } from "react-icons/ai";
import type { menu, Props } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { resetUserState } from "../../store/auth/authReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";

const Menu: React.FC<Props> = ({ setType }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userData, profileImg } = useAppSelector((state) => state.authSlices);

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
      <div className="place-items-center">
        <div className="bg-brand-blue xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full">
          <img
            src={profileImg}
            // alt="profile2"
            className="xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full"
          />
        </div>
        <div className="xxs:text-lg sm:text-xl lg:text-2xl font-bold mt-3">
          {userData?.name}
        </div>
      </div>
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
          dispatch(resetUserState());
          navigate("/");
        }}
      />
    </div>
  );
};

export default Menu;
