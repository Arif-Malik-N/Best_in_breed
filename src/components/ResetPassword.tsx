import React, { useRef } from "react";
import Button from "./buttons/Button";
import Input from "./fields/Input";
import ResetPasswordDialog from "./dialog/ResetPasswordDialog";
import type { ResetPsdProps } from "../utils/interfaces";

const ResetPassword: React.FC<ResetPsdProps> = ({
  email,
  setEmail,
  setFormType,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal(); // open modal
  };

  const closeDialog = () => {
    dialogRef.current?.close(); // close modal
  };

  return (
    <div className="w-full xxs:p-4 md:p-5 lg:pr-10">
      {/* title and description  */}
      <div className="font-bold xxs:text-2xl xs:text-3xl sm:text-4xl text-center">
        Reset Password
      </div>
      <div className="my-2 text-gray-700 xxs:text-sm xs:text-base sm:text-lg text-center">
        Please enter the email you use to sign in and we will send you resent
        link.{" "}
      </div>

      {/* email fields */}
      <div>
        <div className="mt-5 mx-1 font-bold text-base">Email</div>
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="w-full xxs:h-[50px] sm:h-[62px] bg-brand-pink rounded-lg px-4 my-5 text-gray-700 placeholder-gray-700 focus=outline-none"
          setValue={setEmail}
        />
      </div>

      {/* reset button */}
      <Button
        name="Get Reset Link"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white my-4"
        onClick={openDialog}
      />

      {/* back button */}
      <Button
        name="Back To Login"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-pink rounded-lg text-brand-blue"
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
