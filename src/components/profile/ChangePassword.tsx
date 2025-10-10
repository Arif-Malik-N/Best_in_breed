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
import { resetUserState } from "../../store/auth/authReducer";
import { useNavigate } from "react-router-dom";
import { passwordRegex } from "../../utils/utilities";

// ✅ define type for error keys
type FieldErrorKeys = "currentPsd" | "newPsd" | "confirmPsd";

const ChangePassword: React.FC<Props> = ({ setType }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.commonSlice);

  // Manage passwords
  const [currentPsd, setCurrentPsd] = useState("");
  const [newPsd, setNewPsd] = useState("");
  const [confirmPsd, setConfirmPsd] = useState("");

  // Manage psd errors
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Record<FieldErrorKeys, string>
  >({
    currentPsd: "",
    newPsd: "",
    confirmPsd: "",
  });

  // Manage password visibility
  const [showPassword, setShowPassword] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
  });

  const isButtonDisabled =
    isLoading ||
    !!formError ||
    !currentPsd ||
    !newPsd ||
    !confirmPsd ||
    Object.values(fieldErrors).some((err) => err !== "");

  // Toggle password visibility
  const togglePassword = (index: number) =>
    setShowPassword((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

  // Define fields for rendering
  const fields: field[] = [
    {
      value: currentPsd,
      name: "currentPsd",
      placeholder: "Current Password",
      className:
        "w-full h-[56px] bg-white rounded-lg pr-2 pl-12 text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setCurrentPsd,
      startIcon: lock2,
    },
    {
      value: newPsd,
      name: "newPsd",
      placeholder: "New Password",
      className:
        "w-full h-[56px] bg-white rounded-lg pr-2 pl-12 text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setNewPsd,
      startIcon: lock2,
    },
    {
      value: confirmPsd,
      name: "confirmPsd",
      placeholder: "Retype New Password",
      className:
        "w-full h-[56px] bg-white rounded-lg pr-2 pl-12 text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setConfirmPsd,
      startIcon: lock2,
    },
  ];

  // Handle field changes and validations
  const handleChangeFields = (index: number, value: string) => {
    const newErrors = { ...fieldErrors };

    if (index === 0) {
      setCurrentPsd(value);
      newErrors.currentPsd = !value ? "Current password is required" : "";
    } else if (index === 1) {
      setNewPsd(value);
      if (!value) {
        newErrors.newPsd = "New password is required";
      } else if (value === currentPsd) {
        newErrors.newPsd = "New password cannot be same as current password";
      } else if (!passwordRegex.test(value)) {
        newErrors.newPsd =
          "Password must be at least 8 chars with upper/lowercase, number, and special character";
      } else {
        newErrors.newPsd = "";
      }
    } else if (index === 2) {
      setConfirmPsd(value);
      if (!value) {
        newErrors.confirmPsd = "Confirm password is required";
      } else if (value !== newPsd) {
        newErrors.confirmPsd = "Passwords do not match";
      } else {
        newErrors.confirmPsd = "";
      }
    }

    setFieldErrors(newErrors);
    setFormError(""); // clear top-level form error on typing
  };

  // Handle change password submission
  const handleChangePsd = async () => {
    try {
      const dataToSend = {
        currentPassword: currentPsd,
        newPassword: newPsd,
        confirmNewPassword: confirmPsd,
      };
      const response = await dispatch(changePassword(dataToSend)).unwrap();

      if (response?.success) {
        toast.success(`${response?.data?.message} Login Again`);
        dispatch(resetUserState());
        navigate("/");
        setFormError("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavigationTopBar
        name="Change Password"
        onClick={() => setType("menu")}
      />

      <div className="my-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fields.map(
            ({ value, name, placeholder, className, startIcon }, index) => {
              const typedName = name as FieldErrorKeys;

              return (
                <div key={name}>
                  <div className="mb-2 mx-1 font-bold text-base">
                    {index === 2 ? "Retype New Password" : placeholder}
                  </div>
                  <div className="relative">
                    <Input
                      value={value}
                      type={showPassword[index] ? "text" : "password"}
                      placeholder={placeholder}
                      className={`${className} ${
                        fieldErrors[typedName]
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      setValue={(val: string) => handleChangeFields(index, val)}
                      startIcon={startIcon}
                      error={fieldErrors[typedName] || undefined}
                    />

                    <div
                      className={`absolute right-4 
                      ${
                        fieldErrors[typedName] ? "top-7" : "top-1/2"
                      } transform -translate-y-1/2 cursor-pointer`}
                      onClick={() => togglePassword(index)}
                    >
                      {showPassword[index] ? (
                        <AiOutlineEye className="w-5 h-5 text-gray-700" />
                      ) : (
                        <AiOutlineEyeInvisible className="w-5 h-5 text-gray-700" />
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {formError && (
          <p className="text-red-600 text-sm mt-3 text-center">{formError}</p>
        )}
      </div>

      <Button
        name={isLoading ? <Loader /> : "Save Changes"}
        disabled={isButtonDisabled}
        className={`w-full h-[56px] bg-brand-blue rounded-lg text-white outline-none ${
          isButtonDisabled && "cursor-not-allowed"
        }`}
        onClick={handleChangePsd}
      />
    </div>
  );
};

export default ChangePassword;
