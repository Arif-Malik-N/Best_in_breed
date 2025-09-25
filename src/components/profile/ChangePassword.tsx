import React, { useState } from "react";
import Button from "../buttons/Button";
import { lock2 } from "../../assets/images";
import Input from "../fields/Input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import type { field, Props } from "../../utils/interfaces";
import NavigationTopBar from "../NavigationTopBar";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toast } from "react-toastify";
import { changePassword } from "../../store/auth/authAction";
import Loader from "../Loader";

const ChangePassword: React.FC<Props> = ({ setType }) => {
  const dispatch = useAppDispatch();
  const [currentPsd, setCurrentPsd] = useState("");
  const [newPsd, setNewPsd] = useState("");
  const [confirmPsd, setConfirmPsd] = useState("");
  const [showPassword, setShowPassword] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
  });

  const { isLoading } = useAppSelector((state) => state.commonSlice);

  // Function to toggle password visibility
  const togglePassword = (index: number) =>
    setShowPassword((prev) => ({
      ...prev,
      [index]: !prev[index], // toggle
    }));

  const fields: field[] = [
    {
      value: currentPsd,
      name: "Current Password",
      placeholder: "Current Password",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setCurrentPsd,
      startIcon: lock2,
    },
    {
      value: newPsd,
      name: "New Password",
      placeholder: "New Password",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setNewPsd,
      startIcon: lock2,
    },
    {
      value: confirmPsd,
      name: "Confirm New Password",
      placeholder: "Retype New Password",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setConfirmPsd,
      startIcon: lock2,
    },
  ];

  const handleChangePsd = async () => {
    try {
      // Object to send to API
      const dataToSend = {
        currentPassword: currentPsd,
        newPassword: newPsd,
        confirmNewPassword: confirmPsd,
      };

      // API call through Redux
      const response = await dispatch(changePassword(dataToSend)).unwrap();

      // Toaster after API success
      if (response?.success) {
        toast.success(response?.data?.message);
        setCurrentPsd("");
        setNewPsd("");
        setConfirmPsd("");
      }
    } catch (error) {
      // Empty catch block (no error handling)
    }
  };

  return (
    <div>
      {/* Top Bar */}
      <NavigationTopBar
        name="Change Password"
        onClick={() => setType("menu")}
      />
      <div className="my-[50px]">
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 xxs:gap-4 sm:gap-5">
          {fields.map(
            (
              { value, name, placeholder, className, setValue, startIcon },
              index
            ) => (
              <div key={name}>
                <div className="xxs:mb-1 sm:mb-3 mx-1 font-bold xxs:text-sm sm:text-base">
                  {name}
                </div>
                <div className="relative">
                  <Input
                    value={value}
                    type={showPassword[index] ? "text" : "password"}
                    placeholder={placeholder}
                    className={className}
                    setValue={setValue}
                    startIcon={startIcon}
                  />
                  {/* Eye endIcon to toggle password visibility */}
                  <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => togglePassword(index)}
                  >
                    {showPassword[index] ? (
                      <AiOutlineEye className="w-5 h-5 text-gray-750" />
                    ) : (
                      <AiOutlineEyeInvisible className="w-5 h-5 text-gray-750" />
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Button
        name={isLoading ? <Loader /> : "Save Changes"}
        disabled={isLoading}
        className={`w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white outline-none ${
          isLoading && "cursor-not-allowed"
        }`}
        onClick={handleChangePsd}
      />
    </div>
  );
};

export default ChangePassword;
