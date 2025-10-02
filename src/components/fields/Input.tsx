import React from "react";
import type { InputProps } from "../../utils/interfaces";

const Input: React.FC<InputProps> = ({
  value,
  type,
  readOnly,
  placeholder = "",
  className = "",
  setValue,
  startIcon = undefined,
  endIcon = undefined,
  error,
}) => {
  return (
    <div>
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
          readOnly={readOnly}
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
      {/* Error message */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
