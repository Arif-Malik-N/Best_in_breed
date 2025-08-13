import React from "react";
import type { InputProps } from "../../utils/interfaces";

const TextArea: React.FC<InputProps> = ({
  value,
  type,
  placeholder = "",
  className = "",
  setValue,
  startIcon = undefined,
  endIcon = undefined,
  rows = 3, // default 3
}) => {
  return (
    <div className="relative">
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
