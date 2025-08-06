import React, { useRef } from "react";
import Button from "./buttons/Button";
import Input from "./fields/Input";
import ResetPasswordDialog from "./dialog/ResetPasswordDialog";

interface Props {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
}
const ResetPassword: React.FC<Props> = ({ setEmail, setFormType }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal(); // open modal
  };

  const closeDialog = () => {
    dialogRef.current?.close(); // close modal
  };

  return (
    <div className="w-full xxs:p-4 md:p-5 lg:pr-10">
      <div className="font-bold text-4xl text-center">Reset Password</div>
      <div className="my-2 text-brand-lightGray text-lg text-center">
        Please enter the email you use to sign in and we will send you resent
        link.{" "}
      </div>

      <div>
        <div className="mt-5 mb-3 mx-1 font-bold text-base">Email</div>
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="w-full h-[62px] bg-brand-pink rounded-lg px-4 my-5 text-gray-600 placeholder-gray-500 focus=outline-none"
          setValue={setEmail}
        />
      </div>

      <Button
        name="Get Reset Link"
        className="w-full h-[56px] bg-brand-blue rounded-lg text-white font-bold my-4"
        onClick={openDialog}
      />
      <Button
        name="Back To Login"
        className="w-full h-[56px] bg-brand-pink rounded-lg text-brand-blue font-bold"
        onClick={() => setFormType("login")}
      />
      {/* <ResetPasswordDialog dialogRef={dialogRef} closeDialog={closeDialog} /> */}
      <ResetPasswordDialog dialogRef={dialogRef} closeDialog={closeDialog} />
    </div>
  );
};

export default ResetPassword;
