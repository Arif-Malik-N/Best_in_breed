import React from "react";
import { cifStep3Fields } from "../../../utils/arrays";
import Input from "../../fields/Input";
import Button from "../../buttons/Button";
import type { StepFormProps } from "../../../utils/interfaces";

const Step3: React.FC<StepFormProps> = ({
  defaultAllState,
  formData,
  handleFieldChange,
}) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-3 sm:gap-4 my-6 sm:my-14">
        {cifStep3Fields.map((field, index) => (
          <div key={index} className={field.colSpan}>
            <div className="mx-1 sm:mb-1 font-semibold xxs:text-sm sm:text-base">
              {field.label}
            </div>
            <Input
              type={field.type || "text"}
              value={formData[field.name] || ""}
              placeholder={field.placeholder}
              // className="w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
              className={`w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none ${
                field.endIcon && "pr-10"
              }`}
              setValue={(val) => handleFieldChange(field.name, val)}
              endIcon={field.endIcon}
            />
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <Button
        name="Submit"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white font-semibold"
        onClick={() => defaultAllState?.()}
      />
    </div>
  );
};

export default Step3;
