import React from "react";
import type { InputProps } from "../../utils/interfaces";
import { HiChevronDown } from "react-icons/hi";

const Select: React.FC<InputProps> = ({
  value,
  options,
  placeholder,
  className,
  setValue,
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
        {options.map(({ value, label, fontColor }, index) => (
          <option key={index} value={value} className={fontColor}>
            {label}
          </option>
        ))}
      </select>
      <HiChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default Select;
