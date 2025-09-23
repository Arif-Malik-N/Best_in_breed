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
