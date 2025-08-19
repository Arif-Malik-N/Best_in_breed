import React, { useRef } from "react";
import Button from "../../buttons/Button";
import { cifStep2CheckBoxes } from "../../../utils/arrays";
import Input from "../../fields/Input";
import type { StepFormProps } from "../../../utils/interfaces";
import SignatureCanvas from "react-signature-canvas";

const Step2: React.FC<StepFormProps> = ({
  setStep,
  formData,
  handleFieldChange,
}) => {
  const ownerSigRef = useRef(null);
  const repSigRef = useRef(null);

  const clearSignature = (ref: React.RefObject<SignatureCanvas | null>) => {
    if (ref.current) ref.current.clear();
  };

  const saveSignature = (
    ref: React.RefObject<SignatureCanvas | null>,
    fieldName: string
  ) => {
    if (ref.current && !ref.current.isEmpty()) {
      const dataURL = ref.current.getTrimmedCanvas().toDataURL("image/png");
      handleFieldChange(fieldName, dataURL); // Save signature as data URL
    }
  };
  return (
    <div className="my-8 md:pt-10 xl:pt-18 pb-4">
      {/* Title */}
      <div>
        <h1 className=" xxs:text-xl xs:text-2xl md:text-3xl lg:text-4xl text-center">
          Best in Breed Dog Training
        </h1>
        <h1 className="font-semibold xxs:text-base xs:text-lg sm:text-xl lg:text-2xl text-center my-2">
          Training Agreement
        </h1>
      </div>

      {/* Client Fields */}
      <div className="sm:grid sm:grid-cols-2 gap-2 md:gap-4 mt-6 md:mt-18 space-y-3 sm:space-y-0">
        <p className="col-span-2 xxs:text-xs xs:xxs:text-md md:text-xl">
          IN CONSIDERATION of the payment of the training fee set forth below
          BEST IN BREED DOG TRAINING agrees to provide a Training Course to:
        </p>
        <div className="col-span-2">
          <Input
            value={formData["Client Name"] || ""}
            type="text"
            className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
            setValue={(val) => handleFieldChange("Client Name", val)}
          />
        </div>
        <Input
          value={formData["Client Name"] || ""}
          type="text"
          placeholder="Address"
          className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
          setValue={(val) => handleFieldChange("Client Address", val)}
        />{" "}
        <Input
          value={formData["Client Phone"] || ""}
          type="number"
          placeholder="Phone"
          className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
          setValue={(val) => handleFieldChange("Client Phone", val)}
        />
      </div>

      {/* Checkbox Fields */}
      <div className="my-8">
        <p className="col-span-2 xxs:text-xs xs:xxs:text-md md:text-xl">
          Consisting of the following checked below:
        </p>
        {cifStep2CheckBoxes.map((field, index) => (
          <div key={index} className="grid grid-cols-6 gap-2 sm:gap-5 my-6">
            <div className="col-span-6 sm:col-span-2 lg:col-span-1 place-content-center">
              <div className="bg-gray-300 rounded-lg p-3">
                {field.name !== "8 Weeks on leash" && (
                  <Input
                    value={formData[field.name] || ""}
                    type="number"
                    className="w-full h-[26px] bg-white rounded-md px-1 text-gray-750 border border-gray-300 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
                    setValue={(val) => handleFieldChange(field.name, val)}
                  />
                )}
                <span className="font-medium xxs:text-md sm:text-base md:text-lg">
                  {field.name}
                </span>
              </div>
            </div>
            <div
              className={`col-span-6 sm:col-span-4 lg:col-span-5 place-content-center`}
            >
              {field.label && (
                <p className="font-semibold sm:mb-2 xxs:text-md sm:text-base md:text-lg">
                  {field.label}
                </p>
              )}
              <div className="flex flex-wrap gap-x-4">
                {field.options?.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 md:gap-4 xxs:text-xs sm:text-md md:text-base xxs:py-1 md:py-0"
                  >
                    <input
                      type="checkbox"
                      checked={formData[field.name]?.includes(opt) || false}
                      onChange={(e) => {
                        const current = formData[field.name] || [];
                        handleFieldChange(
                          field.name,
                          e.target.checked
                            ? [...current, opt]
                            : current.filter((o: string) => o !== opt)
                        );
                      }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <Input
          value={formData["trainingFee"] || ""}
          type="number"
          placeholder="Training Fee"
          className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
          setValue={(val) => handleFieldChange("trainingFee", val)}
        />{" "}
        <Input
          value={formData["notesAndTerms"] || ""}
          type="text"
          placeholder="Notes & Terms"
          className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
          setValue={(val) => handleFieldChange("notesAndTerms", val)}
        />
      </div>

      {/* Agreement Text */}
      <div className="space-y-6 py-10 xxs:text-xs xs:xxs:text-xs xs:xxs:text-md md:text-xl">
        <section className="space-y-3">
          <p className="text-slate-700 leading-7">
            During the training course, the client will gain access to
            proprietary information and trade secrets belonging exclusively to
            Best In Breed Dog Training. All written, verbal, or recorded
            materials are the sole property of Best In Breed Dog Training and
            are to be used by the client solely to enhance their own training
            skills. These materials may not be shared, reproduced, or
            distributed on social media or any other platform without prior
            written consent from Best In Breed.
          </p>
          <p className="text-slate-700 leading-7">
            I agree not to share any media or information obtained from Best In
            Breed Dog Training with any third party unless I have received
            written permission from Best In Breed.
          </p>
        </section>

        <section className="space-y-3">
          <p className="text-slate-700 leading-7">
            It is further mentioned and agreed that:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li>Owner agrees to cooperate with trainer’s instruction.</li>
            <li>Lessons to be given at a minimum of one (1) hour per week.</li>
            <li>
              Courtesy lessons will be given at BEST IN BREED’S discretion.
            </li>
            <li>
              Owner agrees to work with their dog a minimum of 30 minutes per
              day or as advised by trainer.
            </li>
            <li>This is a non-refund agreement.</li>
            <li>
              24 hours notice by owner is required for cancellation of training
              class, and only two cancellations allowed during training course.
            </li>
            <li>
              Owner agrees to take notes as trainer dictates to improve in the
              efficiency, success and happiness of the dog.
            </li>
            <li>Maintenance programs given one (1) hour per month.</li>
            <li>
              All programs are to be completed within a period of twelve (12)
              months from the time contract is signed.
            </li>
          </ol>
          <p className="text-slate-700 leading-7">
            It is understood and agreed that the aforementioned Training Course
            handled or trained by BEST IN BREED DOG TRAINING personnel are,
            without liability on the part of BEST IN BREED for loss or damage,
            for death, dog or owner’s inability to respond to training, running
            away, theft, change of ownership, injury to persons other than
            personnel of BEST IN BREED DOG TRAINING, other animals or property
            by below mentioned dog or other unavoidable causes. The entire
            agreement between parties is set out in this page and there have
            been no oral representations that do not appear herein and no
            warranties, either expressed or implied, other than the above
            contained herein. It is understood that the above named purchaser
            shall hold BEST IN BREED DOG TRAINING harmless from any liabilities
            incurred by the dog during or after training.
          </p>
        </section>
      </div>

      {/* Signature Fields */}
      <div className="pb-4 md:py-10 space-y-6">
        {/* Owner Agreement */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4">
          <label className="whitespace-nowrap xxs:text-xs sm:text-md md:text-base">
            As owner of
          </label>
          <div className="w-[100%] md:w-[50%] lg:w-[60%]">
            <Input
              value={formData["ownerName"] || ""}
              type="text"
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
              setValue={(val) => handleFieldChange("ownerName", val)}
            />
          </div>
          <span className="xxs:text-xs sm:text-md md:text-base">
            I hereby agree to the above.
          </span>
        </div>

        {/* Date */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4">
          <label className="whitespace-nowrap xxs:text-xs sm:text-md md:text-base">
            Date
          </label>
          <div className="w-[100%]">
            <Input
              value={formData["date"] || ""}
              type="date"
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
              setValue={(val) => handleFieldChange("date", val)}
            />
          </div>
        </div>

        {/* Owner of Dog Signature */}
        <div className="relative">
          <label className="block mb-2 xxs:text-xs sm:text-md md:text-base">
            Owner of Dog (Signature)
          </label>
          <SignatureCanvas
            ref={ownerSigRef}
            penColor="black"
            canvasProps={{
              className:
                "w-full h-[115px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none",
            }}
            onEnd={() => saveSignature(ownerSigRef, "ownerSignature")}
          />
          <div className="absolute right-2 top-[40px] md:top-1/2 transform -translate-y-1/2">
            <Button
              name="Clear"
              className="w-[45px] md:w-[60px] bg-red-400 rounded-lg text-white font-semibold text-xs md:text-base py-0.5 md:py-1"
              onClick={() => clearSignature(ownerSigRef)}
            />
          </div>
        </div>

        {/* Training Start Week */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4">
          <label className="whitespace-nowrap xxs:text-xs sm:text-md md:text-base">
            Training to start week of
          </label>
          <div className="w-[100%]">
            <Input
              value={formData["trainigStart"] || ""}
              type="date"
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none"
              setValue={(val) => handleFieldChange("trainigStart", val)}
            />
          </div>
        </div>

        {/* Representative of BEST IN BREED Signature */}
        <div className="relative">
          <label className="block mb-2 xxs:text-xs sm:text-md md:text-base">
            Representative of BEST IN BREED (Signature)
          </label>
          <SignatureCanvas
            ref={repSigRef}
            penColor="black"
            canvasProps={{
              className:
                "w-full h-[115px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none",
            }}
            onEnd={() => saveSignature(repSigRef, "repSignature")}
          />
          <div className="absolute right-2 top-[40px] md:top-1/2 transform -translate-y-1/2">
            <Button
              name="Clear"
              className="w-[45px] md:w-[60px] bg-red-400 rounded-lg text-white font-semibold text-xs md:text-base py-0.5 md:py-1"
              onClick={() => clearSignature(repSigRef)}
            />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <Button
        name="Next"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white font-semibold"
        onClick={() => setStep((prev: number) => prev + 1)}
      />
    </div>
  );
};

export default Step2;
