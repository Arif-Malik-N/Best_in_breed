import React from "react";
import Button from "../../buttons/Button";
import { cifStep1Fields } from "../../../utils/arrays";
import Input from "../../fields/Input";
import TextArea from "../../fields/TextArea";
import type { StepFormProps } from "../../../utils/interfaces";

const Step1: React.FC<StepFormProps> = ({
  setStep,
  formData,
  handleFieldChange,
}) => {
  return (
    <div>
      {/* All Fields */}
      <div className="border rounded-xl bg-white my-8 pt-3 sm:pt-18 pb-4 xxs:px-2 sm:px-6">
        <h1 className=" xxs:text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-center">
          Best in Breed Dog Training
        </h1>
        <div className="grid sm:grid-cols-4 gap-2 sm:gap-4 items-center xxs:mt-6 sm:mt-0 mb-1 sm:my-8 lg:my-18">
          {/* Left: Address text */}
          <div className="xxs:text-sm sm:text-lg lg:text-2xl">
            Matt Bramlett 224 Brown Industrial Pkwy Suite 101 Canton, GA 30114
          </div>
          <div></div>
          {/* Right: Mailing Address input */}
          <div className="col-span-2 ">
            <TextArea
              rows={4}
              value={formData["Mailing Address"] || ""}
              placeholder="Mailing Address"
              className="w-full bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none pt-3"
              setValue={(val) => handleFieldChange("Mailing Address", val)}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 sm:gap-4">
          {cifStep1Fields.map((field, index) => {
            switch (field.elementType) {
              case "input":
                return (
                  <div key={index} className={field.colSpan}>
                    <Input
                      type={field.type || "text"}
                      value={formData[field.name] || ""}
                      placeholder={field.placeholder}
                      className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
                      setValue={(val) => handleFieldChange(field.name, val)}
                    />
                  </div>
                );

              case "textarea":
                return (
                  <div key={index} className={field.colSpan}>
                    <TextArea
                      rows={field.rows || 3}
                      value={formData[field.name] || ""}
                      placeholder={field.placeholder}
                      className="w-full bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none pt-3"
                      setValue={(val) => handleFieldChange(field.name, val)}
                    />
                  </div>
                );

              case "select":
                return (
                  <div key={index} className={field.colSpan}>
                    <select
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        handleFieldChange(field.name, e.target.value)
                      }
                      className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>

      {/* Next Button */}
      <Button
        name="Next"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white text-base"
        onClick={() => setStep((prev: number) => prev + 1)}
      />
    </div>
  );
};

export default Step1;
