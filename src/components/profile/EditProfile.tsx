import React, { useState } from "react";
import Button from "../buttons/Button";
import { check, location } from "../../assets/images";
import Input from "../fields/Input";
import type { field, Props } from "../../utils/interfaces";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toast } from "react-toastify";
import { updateProfile, updateProfileImg } from "../../store/auth/authAction";
import NavigationTopBar from "../NavigationTopBar";
import ImageUpload from "../forms/ImageUpload";
import Loader from "../Loader";

const EditProfile: React.FC<Props> = ({ setType }) => {
  const dispatch = useAppDispatch();
  const { userData, profileImg } = useAppSelector((state) => state.authSlices);
  const { isLoading } = useAppSelector((state) => state.commonSlice);

  const [email, setEmail] = useState(userData?.email);
  const [loc, setLoc] = useState(userData?.location);
  const [phoneNo, setPhoneNo] = useState(userData?.phone);

  const handleProfileImgUpdate = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await dispatch(updateProfileImg(formData));
      if (response?.payload?.success) {
        toast.success(`Profile Updated`);
      }
    }
  };

  const handleProfileUpdate = async () => {
    try {
      // Object to send to API
      const dataToSend = {
        email: email,
        phoneNumber: phoneNo,
        location: loc,
      };

      // API call through Redux
      const response = await dispatch(updateProfile(dataToSend)).unwrap();
      // Toaster after API success
      if (response?.success) {
        toast.success("Profile Updated");
      }
    } catch (error) {
      // Empty catch block (no error handling)
    }
  };

  const fields: field[] = [
    {
      value: email,
      name: "Email Address",
      type: "email",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setEmail,
      endIcon: check,
    },
    {
      value: phoneNo,
      name: "Phone Number",
      type: "text",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setPhoneNo,
      endIcon: undefined,
    },
    {
      value: loc,
      name: "Location",
      type: "text",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setLoc,
      endIcon: location,
    },
  ];

  return (
    <div>
      {/* Top Bar */}
      <NavigationTopBar name="Profile Update" onClick={() => setType("menu")} />

      {/* Profile Image */}
      <ImageUpload
        image={profileImg}
        name={userData?.name}
        handleImageUpdate={handleProfileImgUpdate}
      />

      <div className="my-8 sm:my-[50px]">
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
        name={isLoading ? <Loader /> : "Save Changes"}
        disabled={isLoading}
        className={`w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white outline-none ${
          isLoading && "cursor-not-allowed"
        }`}
        onClick={handleProfileUpdate}
      />
    </div>
  );
};

export default EditProfile;
