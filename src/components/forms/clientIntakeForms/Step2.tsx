import React from "react";
import Button from "../../buttons/Button";
import { cifStep2Fields } from "../../../utils/arrays";
import Input from "../../fields/Input";
import TextArea from "../../fields/TextArea";
import type { StepFormProps } from "../../../utils/interfaces";
import Select from "../../fields/Select";
import ImageUpload from "../ImageUpload";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../store/store";
import Loader from "../../Loader";

const Step2: React.FC<StepFormProps> = ({
  setStep,
  formData,
  handleFieldChange,
  image,
  handleImageUpdate,
  errors,
  validateStep,
}) => {
  const { isLoading } = useAppSelector((state) => state.commonSlice);

  const handleNext = () => {
    if (image) {
      if (validateStep(2)) {
        setStep((prev: number) => prev + 1);
      } else {
        toast.error("Please fill all required fields");
      }
    } else {
      toast.error("Please upload an image before proceeding to the next step.");
    }
  };

  return (
    <div>
      {/* All Fields */}
      <div className="border rounded-xl bg-white my-8 pt-3 sm:pt-18 pb-4 xxs:px-2 sm:px-6">
        {/* <h1 className="xxs:text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-center font-semibold"> */}
        <h1 className="xxs:text-xl xs:text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
          Best in Breed Dog Training
        </h1>
        <div className="my-5 sm:my-10">
          {isLoading ? (
            <Loader isBlue={true} padding={10} />
          ) : (
            <ImageUpload
              image={image}
              handleImageUpdate={(e) => handleImageUpdate(e, "dog")}
            />
          )}
        </div>
        <div className="grid sm:grid-cols-4 gap-2 sm:gap-4 items-center xxs:mt-6 sm:mt-0 mb-1 sm:my-8 lg:my-12">
          {/* Left: Address text */}
          <div className="xxs:text-sm sm:text-lg lg:text-2xl">
            Matt Bramlett 224 Brown Industrial Pkwy Suite 101 Canton, GA 30114
          </div>
          <div></div>
          {/* Right: Mailing Address input */}
          <div className="col-span-2 ">
            <TextArea
              rows={4}
              value={formData.dog?.["mailingAddress"] || ""}
              placeholder="Mailing Address"
              className={`w-full bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none pt-3 
                        ${errors["mailingAddress"] && "border border-red-500"}`}
              setValue={(val: string) =>
                handleFieldChange(
                  "dog",
                  "mailingAddress",
                  val,
                  "Mailing Address"
                )
              }
              error={errors["mailingAddress"]}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 sm:gap-4">
          {cifStep2Fields.map((field, index) => {
            switch (field.elementType) {
              case "input":
                return (
                  <div key={index} className={field.colSpan}>
                    <Input
                      type={field.type || "text"}
                      value={formData.dog?.[field.name] || ""}
                      placeholder={field.placeholder}
                      className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none  ${
                        errors[field.name] && "border border-red-500"
                      }`}
                      setValue={(val: string) =>
                        handleFieldChange("dog", field.name, val, field.label)
                      }
                      error={errors[field.name]}
                    />
                  </div>
                );

              case "textarea":
                return (
                  <div key={index} className={field.colSpan}>
                    <TextArea
                      rows={field.rows || 3}
                      value={formData.dog?.[field.name] || ""}
                      placeholder={field.placeholder}
                      className={`w-full bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none pt-3 
                        ${errors[field.name] && "border border-red-500"}
                        `}
                      setValue={(val: string) =>
                        handleFieldChange("dog", field.name, val, field.label)
                      }
                      error={errors[field.name]}
                    />
                  </div>
                );

              case "select":
                return (
                  <div key={index} className={`${field.colSpan}`}>
                    <Select
                      options={field.options}
                      value={formData.dog?.[field.name] || ""}
                      placeholder={field.placeholder}
                      className={`appearance-none w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 xxs:text-sm sm:text-base focus:outline-none 
                        ${errors[field.name] && "border border-red-500"}
                        `}
                      setValue={(val: string) =>
                        handleFieldChange("dog", field.name, val)
                      }
                      error={errors[field.name]}
                    />
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
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white text-base outline-none"
        onClick={handleNext}
      />
    </div>
  );
};

export default Step2;
