import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import type { NavigationTopBarProp } from "../utils/interfaces";

const NavigationTopBar: React.FC<NavigationTopBarProp> = ({
  name,
  onClick,
}) => {
  return (
    <div className="flex gap-2 sm:gap-5 sm:mt-5">
      <div className="cursor-pointer" onClick={onClick}>
        <AiOutlineLeft className="font-bold mt-1 sm:w-6 sm:h-6" />
      </div>
      <span className="xxs:text-lg xs:text-xl sm:text-2xl font-bold">
        {name}
      </span>
    </div>
  );
};

export default NavigationTopBar;
