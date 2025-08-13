import React, { useRef, useState } from "react";
import type { clientIntakeProp } from "../../utils/interfaces";
import NavigationTopBar from "../NavigationTopBar";
import Stepper from "../Stepper";
import Input from "../fields/Input";
import TextArea from "../fields/TextArea";
import { cifCheckBox, cifFirstSectionFields } from "../../utils/arrays";
import Button from "../buttons/Button";
import SignatureCanvas from "react-signature-canvas";

const ClientIntakeForm: React.FC<clientIntakeProp> = ({
  renderPage,
  setRenderPage,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const defaultAllState = () => {
    setRenderPage("home");
    setStep(1);
    setFormData({});
  };

  const ownerSigRef = useRef(null);
  const repSigRef = useRef(null);

  const clearSignature = (ref) => {
    if (ref.current) ref.current.clear();
  };

  const saveSignature = (ref, fieldName) => {
    if (ref.current && !ref.current.isEmpty()) {
      const dataURL = ref.current.getTrimmedCanvas().toDataURL("image/png");
      handleFieldChange(fieldName, dataURL); // Save signature as data URL
    }
  };

  return (
    <div>
      {/* Top Bar */}
      <NavigationTopBar
        name={`Client Intake Form Step ${step} of 3`}
        onClick={defaultAllState}
      />
      {/* Stepper */}
      <Stepper currentStep={step} />

      {/* First Forms */}
      {step === 1 ? (
        <div>
          {/* All Fields */}
          <div className="border rounded-xl bg-white my-8 pt-18 pb-4 px-6">
            <h1 className="font-bold xxs:text-2xl xs:text-3xl sm:text-4xl text-center">
              Best in Breed Dog Training
            </h1>
            <div className="grid grid-cols-4 gap-4 items-center my-18">
              {/* Left: Address text */}
              <div className="xxs:text-lg sm:text-xl lg:text-2xl">
                Matt Bramlett 224 Brown Industrial Pkwy Suite 101 Canton, GA
                30114
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
            <div className="grid grid-cols-12 gap-4">
              {cifFirstSectionFields.map((field, index) => {
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
            className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white font-semibold text-base"
            onClick={() => setStep((prev) => prev + 1)}
          />
        </div>
      ) : step === 2 ? (
        <div className="my-8 pt-18 pb-4 px-6">
          {/* Title */}
          <div>
            <h1 className="font-bold xxs:text-2xl xs:text-3xl sm:text-4xl text-center">
              Best in Breed Dog Training
            </h1>
            <h1 className="font-semibold xxs:text-lg xs:text-xl sm:text-2xl text-center my-2">
              Training Agreement
            </h1>
          </div>

          {/* Client Fields */}
          <div className="grid grid-cols-2 gap-4 mt-18">
            <p className="col-span-2 xxs:text-lg sm:text-xl">
              IN CONSIDERATION of the payment of the training fee set forth
              below BEST IN BREED DOG TRAINING agrees to provide a Training
              Course to:
            </p>
            <div className="col-span-2">
              <Input
                value={formData["Client Name"] || ""}
                className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
                setValue={(val) => handleFieldChange("Client Name", val)}
              />
            </div>
            <Input
              value={formData["Client Name"] || ""}
              placeholder="Address"
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
              setValue={(val) => handleFieldChange("Client Address", val)}
            />{" "}
            <Input
              value={formData["Client Phone"] || ""}
              placeholder="Phone"
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
              setValue={(val) => handleFieldChange("Client Phone", val)}
            />
          </div>

          {/* Checkbox Fields */}
          <div className="my-8">
            <p className="col-span-2 xxs:text-lg sm:text-xl">
              Consisting of the following checked below:
            </p>
            {cifCheckBox.map((field, index) => (
              <div key={index} className="grid grid-cols-6 gap-5 my-6">
                <div className="place-content-center">
                  <div className="bg-gray-300 rounded-lg p-3">
                    {field.name !== "8 Weeks on leash" && (
                      <Input
                        value={formData[field.name] || ""}
                        type="number"
                        className="w-full h-[26px] bg-white rounded-md px-1 text-gray-750 border border-gray-300 xxs:text-sm sm:text-base focus:outline-none"
                        setValue={(val) => handleFieldChange(field.name, val)}
                      />
                    )}
                    <span className="font-medium">{field.name}</span>
                  </div>
                </div>
                <div className={`col-span-5 place-content-center`}>
                  {field.label && (
                    <p className="font-semibold mb-2">{field.label}</p>
                  )}
                  <div className="flex flex-wrap gap-x-4">
                    {field.options?.map((opt, i) => (
                      <label key={i} className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          checked={formData[field.name]?.includes(opt) || false}
                          onChange={(e) => {
                            const current = formData[field.name] || [];
                            handleChange(
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
              placeholder="Training Fee"
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
              setValue={(val) => handleFieldChange("trainingFee", val)}
            />{" "}
            <Input
              value={formData["notesAndTerms"] || ""}
              placeholder="Notes & Terms"
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
              setValue={(val) => handleFieldChange("notesAndTerms", val)}
            />
          </div>

          {/* Agreement Text */}
          <div className="space-y-6 py-10 text-xl">
            <section className="space-y-3">
              <p className="text-slate-700 leading-7">
                During the training course, the client will gain access to
                proprietary information and trade secrets belonging exclusively
                to Best In Breed Dog Training. All written, verbal, or recorded
                materials are the sole property of Best In Breed Dog Training
                and are to be used by the client solely to enhance their own
                training skills. These materials may not be shared, reproduced,
                or distributed on social media or any other platform without
                prior written consent from Best In Breed.
              </p>
              <p className="text-slate-700 leading-7">
                I agree not to share any media or information obtained from Best
                In Breed Dog Training with any third party unless I have
                received written permission from Best In Breed.
              </p>
            </section>

            <section className="space-y-3">
              <p className="text-slate-700 leading-7">
                It is further mentioned and agreed that:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                <li>Owner agrees to cooperate with trainer’s instruction.</li>
                <li>
                  Lessons to be given at a minimum of one (1) hour per week.
                </li>
                <li>
                  Courtesy lessons will be given at BEST IN BREED’S discretion.
                </li>
                <li>
                  Owner agrees to work with their dog a minimum of 30 minutes
                  per day or as advised by trainer.
                </li>
                <li>This is a non-refund agreement.</li>
                <li>
                  24 hours notice by owner is required for cancellation of
                  training class, and only two cancellations allowed during
                  training course.
                </li>
                <li>
                  Owner agrees to take notes as trainer dictates to improve in
                  the efficiency, success and happiness of the dog.
                </li>
                <li>Maintenance programs given one (1) hour per month.</li>
                <li>
                  All programs are to be completed within a period of twelve
                  (12) months from the time contract is signed.
                </li>
              </ol>
              <p className="text-slate-700 leading-7">
                It is understood and agreed that the aforementioned Training
                Course handled or trained by BEST IN BREED DOG TRAINING
                personnel are, without liability on the part of BEST IN BREED
                for loss or damage, for death, dog or owner’s inability to
                respond to training, running away, theft, change of ownership,
                injury to persons other than personnel of BEST IN BREED DOG
                TRAINING, other animals or property by below mentioned dog or
                other unavoidable causes. The entire agreement between parties
                is set out in this page and there have been no oral
                representations that do not appear herein and no warranties,
                either expressed or implied, other than the above contained
                herein. It is understood that the above named purchaser shall
                hold BEST IN BREED DOG TRAINING harmless from any liabilities
                incurred by the dog during or after training.
              </p>
            </section>
          </div>

          {/* Signature Fields */}
          <div className="py-10 space-y-6">
            {/* Owner Agreement */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className=" whitespace-nowrap">As owner of</label>
              <input
                value={formData["ownerName"] || ""}
                className="flex-1 w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
                onChange={(val) => handleFieldChange("ownerName", val)}
              />
              <span className="">I hereby agree to the above.</span>
            </div>

            {/* Date */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="whitespace-nowrap">Date</label>
              <input
                value={formData["date"] || ""}
                type="date"
                className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
                onChange={(val) => handleFieldChange("date", val)}
              />
            </div>

            {/* Owner of Dog Signature */}
            <div className="relative">
              <label className="block mb-2">Owner of Dog (Signature)</label>
              <SignatureCanvas
                ref={ownerSigRef}
                penColor="black"
                canvasProps={{
                  className:
                    "w-full h-[115px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none",
                }}
                onEnd={() => saveSignature(ownerSigRef, "ownerSignature")}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Button
                  name="Clear"
                  className="w-[60px] bg-red-400 rounded-lg text-white font-semibold text-base py-1"
                  onClick={() => clearSignature(ownerSigRef)}
                />
              </div>
            </div>

            {/* Training Start Week */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="whitespace-nowrap">
                Training to start week of
              </label>
              <input
                value={formData["trainigStart"] || ""}
                type="date"
                className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
                onChange={(val) => handleFieldChange("trainigStart", val)}
              />
            </div>

            {/* Representative of BEST IN BREED Signature */}
            <div className="relative">
              <label className="block mb-2">
                Representative of BEST IN BREED (Signature)
              </label>
              <SignatureCanvas
                ref={repSigRef}
                penColor="black"
                canvasProps={{
                  className:
                    "w-full h-[115px] bg-gray-50 rounded-lg px-4 text-gray-700 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none",
                }}
                onEnd={() => saveSignature(repSigRef, "repSignature")}
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Button
                  name="Clear"
                  className="w-[60px] bg-red-400 rounded-lg text-white font-semibold text-base py-1"
                  onClick={() => clearSignature(repSigRef)}
                />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <Button
            name="Next"
            className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white font-semibold text-base"
            onClick={() => setStep((prev) => prev + 1)}
          />
        </div>
      ) : (
        <div>Else</div>
      )}
    </div>
  );
};

export default ClientIntakeForm;
