import React, { useEffect, useRef, useState } from "react";
import { cifStep1Fields } from "../../../utils/arrays";
import Input from "../../fields/Input";
import Button from "../../buttons/Button";
import type { StepFormProps } from "../../../utils/interfaces";
import ImageUpload from "../ImageUpload";
import { toast } from "react-toastify";
import { fetchPlaceDetails, fetchPlaces } from "../../../utils/utilities";
import { useAppSelector } from "../../../store/store";
import Loader from "../../Loader";

type Prediction = {
  description: string;
  place_id: string;
};

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
    const addressRef = useRef<HTMLInputElement>(null);
    const { isLoading } = useAppSelector((state) => state.commonSlice);
    const [options, setOptions] = useState<Prediction[]>([]);
    const [placeId, setPlaceId] = useState<string>(""); // place_id
    const [isTyping, setIsTyping] = useState<boolean>(false);

    const isAddDog = selectedClientInfo?.client?._id; // add the time of new dog added against already created cleint

    const handleNext = () => {
      if (image || isAddDog) {
        if (validateStep(1)) {
          setStep((prev: number) => prev + 1);
        } else {
          toast.error(
            "Please fill in all required fields in the correct format."
          );
        }
      } else {
        toast.error(
          "Please upload an image before proceeding to the next step."
        );
      }
    };

    useEffect(() => {
      if (isTyping && formData?.client?.address) {
        fetchPlaces(formData.client.address).then((e) => {
          setOptions(e || []);
        });
      }
      if (placeId) {
        fetchPlaceDetails(placeId).then((state) => {
          handleFieldChange("client", "subdivision", state);
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData?.client?.address, isTyping]);
    // console.log(isLoading, image);

    return (
      <div>
        {isAddDog ? (
          <div className="place-items-center">
            <img
              src={selectedClientInfo?.client?.imageUrl || null}
              className="bg-brand-blue rounded-full xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px]"
            />
          </div>
        ) : isLoading ? (
          <Loader isBlue={true} padding={10} />
        ) : (
          <ImageUpload
            image={image}
            handleImageUpdate={(e) => handleImageUpdate(e, "client")}
          />
        )}

        <div className="grid grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-8">
          {cifStep1Fields.map((field, index) => (
            <div key={index} className={field.colSpan}>
              <div className="sm:mb-1 font-semibold xxs:text-sm sm:text-base">
                {field.label}
              </div>

              <div className="relative">
                <Input
                  ref={field.name === "address" ? addressRef : undefined}
                  type={field.type || "text"}
                  value={formData.client?.[field.name] || ""}
                  readOnly={isAddDog}
                  placeholder={field.placeholder}
                  className={`w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none  ${
                    errors[field.name] ? "border-red-500" : "border-gray-300"
                  }`}
                  setValue={(val: string) => {
                    handleFieldChange("client", field.name, val, field.label);
                    if (field.name === "address") {
                      setIsTyping(true);
                    }
                  }}
                  error={errors[field.name]}
                />

                {/* Suggestions dropdown only for address */}
                {field.name === "address" && options.length > 0 && (
                  <ul className="absolute z-50 bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
                    {options.map((p) => (
                      <li
                        key={p.place_id}
                        onClick={() => {
                          handleFieldChange("client", "address", p.description);
                          setPlaceId(p.place_id);
                          setOptions([]); // hide dropdown immediately
                          setIsTyping(false); // prevent reopening until typing again
                        }}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        {p.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
