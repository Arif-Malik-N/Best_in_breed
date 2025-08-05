import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className = "",
  setValue,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
