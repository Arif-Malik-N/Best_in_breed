import React from "react";
import type { InputProps } from "../../utils/interfaces";
import { HiChevronDown } from "react-icons/hi";

const Select: React.FC<InputProps> = ({
  value,
  options,
  placeholder,
  className,
  setValue,
  error,
}) => {
  return (
    <div className="relative">
      <select
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`appearance-none ${className}`}
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
      <HiChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      {/* Error message */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Select;
