import React from "react";

interface ButtonProps {
  name: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ name, className = "", onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
