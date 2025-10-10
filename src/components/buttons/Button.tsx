import React from "react";
import type { ButtonProps } from "../../utils/interfaces";

const Button: React.FC<ButtonProps> = ({
  name,
  disabled,
  className = "",
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`font-bold ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
