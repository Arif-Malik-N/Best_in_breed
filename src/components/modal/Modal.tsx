import React from "react";
import Button from "../buttons/Button";
import type { ModalProps } from "../../utils/interfaces";

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  buttonText,
  buttonColor,
  onConfirm,
  icon,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center">
      <div className="bg-white rounded-lg p-2 max-w-xl w-full shadow-lg text-center relative">
        {/* Icon */}
        <div className="flex justify-center my-4">
          <img src={icon} alt="" />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        {/* Description */}
        <p className="text-sm mb-6">{description}</p>

        <div className="flex justify-between gap-5">
          {/* Action Buttons */}

          <Button
            name="Cancel"
            className={`w-full font-normal text-white py-3 rounded-lg bg-gray-250`}
            onClick={onClose}
          />
          <Button
            name={buttonText}
            className={`w-full font-normal text-white py-3 rounded-lg ${buttonColor}`}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
