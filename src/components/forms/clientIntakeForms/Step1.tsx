import React from "react";
import { cifStep1Fields } from "../../../utils/arrays";
import Input from "../../fields/Input";
import Button from "../../buttons/Button";
import type { StepFormProps } from "../../../utils/interfaces";
import ImageUpload from "../ImageUpload";
import { toast } from "react-toastify";

const Step1: React.FC<StepFormProps> = React.memo(
  ({
    setStep,
    formData,
    handleFieldChange,
    image,
    handleImageUpdate,
    selectedClientInfo,
    errors,
    validateStep,
  }) => {
    const isAddDog = selectedClientInfo?.client?._id; // add the time of new dog added against already created cleint

    const handleNext = () => {
      // if (image || isAddDog) {
      //   if (validateStep(1)) {
      setStep((prev: number) => prev + 1);
      //   } else {
      //     toast.error("Please fill all required fields");
      //   }
      // } else {
      //   toast.error("Please select image");
      // }
    };

    return (
      <div>
        {isAddDog ? (
          <div className="place-items-center">
            <img
              src={selectedClientInfo?.client?.imageUrl || null}
              className="bg-brand-blue rounded-full xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px]"
            />
          </div>
        ) : (
          <ImageUpload
            image={image}
            handleImageUpdate={(e) => handleImageUpdate(e, "client")}
          />
        )}

        <div className="grid grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-8">
          {cifStep1Fields.map((field, index) => (
            <div key={index} className={field.colSpan}>
              <div className="mx-1 sm:mb-1 font-semibold xxs:text-sm sm:text-base">
                {field.label}
              </div>

              <Input
                type={field.type || "text"}
                value={formData.client?.[field.name] || ""}
                readOnly={isAddDog}
                placeholder={field.placeholder}
                className={`w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none  ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
                setValue={(val) => handleFieldChange("client", field.name, val)}
                error={errors[field.name]}
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <Button
          name="Next"
          className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white font-semibold outline-none"
          onClick={handleNext}
        />
      </div>
    );
  }
);

export default Step1;
