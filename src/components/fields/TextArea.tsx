import React from "react";
import type { InputProps } from "../../utils/interfaces";

const TextArea: React.FC<InputProps> = ({
  value,
  placeholder = "",
  className = "",
  setValue,
  rows = 3, // default 3
  error,
}) => {
  return (
    <>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* Error message */}
      {error && <p className="text-red-500 text-xs mt-[-2px]">{error}</p>}
    </>
  );
};

export default TextArea;
