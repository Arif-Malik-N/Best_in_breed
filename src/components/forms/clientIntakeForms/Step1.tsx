import React from "react";
import { cifStep1Fields } from "../../../utils/arrays";
import Input from "../../fields/Input";
import Button from "../../buttons/Button";
import type { StepFormProps } from "../../../utils/interfaces";

const Step1: React.FC<StepFormProps> = ({
  setStep,
  formData,
  handleFieldChange,
}) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-3 sm:gap-4 my-6 sm:my-14">
        {cifStep1Fields.map((field, index) => (
          <div key={index} className={field.colSpan}>
            <div className="mx-1 sm:mb-1 font-semibold xxs:text-sm sm:text-base">
              {field.label}
            </div>
            <Input
              type={field.type || "text"}
              value={formData[field.name] || ""}
              placeholder={field.placeholder}
              // className="w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
              className={`w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none ${
                field.endIcon && "pr-10"
              }`}
              setValue={(val) => handleFieldChange(field.name, val)}
              endIcon={field.endIcon}
            />
          </div>
        ))}
      </div>

      {/* Next Button */}
      <Button
        name="Next"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white font-semibold"
        // onClick={() => defaultAllState?.()}
        onClick={() => setStep((prev: number) => prev + 1)}
      />
    </div>
  );
};

export default Step1;
