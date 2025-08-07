import React from "react";

interface InputProps {
  value: string | number;
  type: string;
  placeholder?: string;
  className?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: string | undefined;
  endIcon?: string | undefined;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  placeholder = "",
  className = "",
  setValue,
  startIcon = undefined,
  endIcon = undefined,
}) => {
  return (
    <div className="relative">
      {/* Icon at the start of field */}
      {startIcon && (
        <img
          src={startIcon}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      )}

      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Icon at the end of field */}
      {endIcon && (
        <img
          src={endIcon}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        />
      )}
    </div>
  );
};

export default Input;
