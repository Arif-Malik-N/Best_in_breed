import React from "react";
import type { ButtonProps } from "../../utils/interfaces";

const Button: React.FC<ButtonProps> = ({ name, className = "", onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
