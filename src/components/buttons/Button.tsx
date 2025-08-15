import React from "react";
import type { ButtonProps } from "../../utils/interfaces";

const Button: React.FC<ButtonProps> = ({ name, className = "", onClick }) => {
  return (
    <button
      type="button"
      className={`xxs:h-[45px] sm:h-[56px] font-bold ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
