import React from "react";
import { unlock1 } from "../../assets/images"; // Ensure this path is correct
import Button from "../buttons/Button";

interface DialogProps {
  dialogRef: React.RefObject<HTMLDialogElement>;
  closeDialog: React.MouseEventHandler<HTMLButtonElement>;
}

const ResetPasswordDialog: React.FC<DialogProps> = ({
  dialogRef,
  closeDialog,
}) => {
  return (
    <dialog
      ref={dialogRef}
      className="rounded-3xl xxs:p-3 xxs:pb-5 sm:p-6 xxs:w-[70vw] md:w-[60vw] lg:w-[50vw] text-center shadow-2xl"
    >
      <div className="flex flex-col items-center space-y-4 sm:mt-5">
        {/* Lock Icon */}
        <img src={unlock1} alt="Unlock Icon" />

        {/* Title */}
        <h2 className="xxs:text-lg xs:text-xl sm:text-2xl font-bold text-black">
          Reset Link Sent!
        </h2>

        {/* Description */}
        <p className="xxs:text-sm xs:text-base sm:text-lg pb-5">
          Password reset link has been sent to bru*****n@gmail.com please check
          your email and follow the instructions
        </p>

        {/* Okay Button */}
        <Button
          name="Okay"
          className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-2xl text-white font-semibold text-base"
          onClick={closeDialog}
        />
      </div>
    </dialog>
  );
};

export default ResetPasswordDialog;
