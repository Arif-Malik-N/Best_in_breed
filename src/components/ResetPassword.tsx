import React, { use, useEffect, useRef, useState } from "react";
import Button from "./buttons/Button";
import Input from "./fields/Input";
import ResetPasswordDialog from "./dialog/ResetPasswordDialog";
import type { ResetPsdProps } from "../utils/interfaces";
import { resetPassword } from "../store/auth/authAction";
import { useAppDispatch } from "../store/store";
// import { toast } from "react-toastify";

const ResetPassword: React.FC<ResetPsdProps> = ({
  email,
  setEmail,
  setFormType,
}) => {
  const dispatch = useAppDispatch();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [errors, setErrors] = useState("");

  const handleResetPsd = async () => {
    // show error if email is empty or not valid
    if (!email) {
      setErrors("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrors("Please enter a valid email address");
      return;
    }

    try {
      // api call through redux
      const response = await dispatch(resetPassword(email)).unwrap();

      // reset modal after api success
      if (response?.success) {
        dialogRef.current?.showModal(); // open modal
        setErrors("");
        // toast(`The password reset link has been sent to ${email}`);
      }
    } catch (error) {
      console.error(error);
      // Empty catch block (no error handling)
    }
  };

  const closeDialog = () => {
    dialogRef.current?.close(); // close modal
    setFormType("login");
  };

  useEffect(() => {
    return () => {
      setEmail("");
    };
  }, []);

  return (
    <div
      className="w-full xxs:p-4 md:p-5 lg:pr-10"
      // onClick={() => {
      //   if (dialogRef.current?.open) {
      //     // Dialog is open, run your function here
      //     dialogRef.current.close(); // Close the dialog
      //   }
      // }}
    >
      {/* title and description  */}
      <div className="font-bold xxs:text-2xl xs:text-3xl sm:text-4xl text-center">
        Reset Password
      </div>
      <div className="my-2 text-gray-700 xxs:text-sm xs:text-base sm:text-lg text-center">
        Please enter the email you use to sign in and we will send you reset
        link.{" "}
      </div>

      {/* email fields */}
      <div>
        <div className="mt-5 mb-4 mx-1 font-bold text-base">Email</div>
        <Input
          type="email"
          placeholder="Enter Your Email"
          className={`w-full xxs:h-[50px] sm:h-[62px] bg-brand-pink rounded-lg px-4 placeholder-gray-700 focus-outline-none ${
            !email && errors ? "border border-red-500" : "border-gray-300"
          }`}
          error={errors || undefined}
          setValue={setEmail}
        />
      </div>

      {/* reset button */}
      <Button
        name="Get Reset Link"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white mt-10 mb-4 outline-none"
        onClick={handleResetPsd}
      />

      {/* back button */}
      <Button
        name="Back To Login"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-pink rounded-lg text-brand-blue outline-none"
        onClick={() => setFormType("login")}
      />

      {/* modal */}
      <ResetPasswordDialog
        email={email}
        dialogRef={dialogRef}
        closeDialog={closeDialog}
      />
    </div>
  );
};

export default ResetPassword;
