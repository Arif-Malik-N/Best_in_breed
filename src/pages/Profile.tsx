import React, { useState } from "react";
import { profile2 } from "../assets/images";
import Menu from "../components/profile/Menu";
import EditProfile from "../components/profile/EditProfile";
import ChangePassword from "../components/profile/ChangePassword";

const Profile = () => {
  const [type, setType] = useState("menu");

  return (
    <div>
      {type === "changePassword" ? (
        <ChangePassword setType={setType} />
      ) : (
        <div>
          <div className="place-items-center">
            <div className="bg-brand-blue xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full">
              <img
                src={profile2}
                alt="profile2"
                className="xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full"
              />
            </div>
            <div className="xxs:text-lg sm:text-xl lg:text-2xl font-bold mt-3">
              Bruce Nelson
            </div>
          </div>

          {type === "menu" ? (
            <Menu setType={setType} />
          ) : type === "editProfile" ? (
            <EditProfile setType={setType} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Profile;
