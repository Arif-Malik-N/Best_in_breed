import React from "react";
import type { InputProps } from "../../utils/interfaces";

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
        min="0"
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
