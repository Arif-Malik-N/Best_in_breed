import React, { useRef, useState } from "react";
import Button from "../../buttons/Button";
import {
  cifStep3CheckBoxes,
  cifStep3DateTime,
  weeksOptions,
} from "../../../utils/arrays";
import Input from "../../fields/Input";
import type { Step3FormProps } from "../../../utils/interfaces";
import SignatureCanvas from "react-signature-canvas";
import TextArea from "../../fields/TextArea";
import Select from "../../fields/Select";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { uploadSignatureImg } from "../../../store/client/clientAction";
import { toast } from "react-toastify";
import Loader from "../../Loader";

const Step3: React.FC<Step3FormProps> = ({
  handleSubmit,
  formData,
  handleFieldChange,
  errors,
  sign,
  setSign,
}) => {
  const dispatch = useAppDispatch();
  const ownerSigRef: any = useRef(null);
  const repSigRef: any = useRef(null);
  const { isLoading } = useAppSelector((state) => state.commonSlice);
  const [representativeLoading, setRepresentativeLoading] = useState(false);
  const [dogOwnerLoading, setDogOwnerLoading] = useState(false);

  // to make sign empty
  const handleClearSign = (
    ref: React.RefObject<SignatureCanvas | null>,
    fieldName: string
  ) => {
    if (ref.current) {
      ref.current.clear();
      setSign((prev) => ({
        ...prev,
        [fieldName]: { file: {}, url: "" },
      }));
      handleFieldChange("contract", `${fieldName}SignaturePictureId`, "");
    }
  };

  // to stored image url and its file after converting into blob
  const onEndSign = (
    ref: React.RefObject<SignatureCanvas | null>,
    fieldName: string
  ) => {
    if (ref.current && !ref.current.isEmpty()) {
      const dataURL = ref.current.getCanvas().toDataURL("image/png");

      // Convert base64 -> Blob/ file type
      const byteString = atob(dataURL.split(",")[1]);
      const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      // Optional: Convert to File (if you need file-like upload)
      const file = new File([blob], `${fieldName}Signature.png`, {
        type: mimeString,
      });

      setSign((prev) => ({
        ...prev,
        [fieldName]: { file: file, url: dataURL },
      })); // Store File instead of base64
    }
  };

  // to up,load sign image in db
  const handleSignUpload = async (name: string) => {
    try {
      if (name === "representative") {
        setRepresentativeLoading(true);
      } else {
        setDogOwnerLoading(true);
      }
      const file = sign?.[name]?.file;
      if (file) {
        const formDataImg = new FormData();
        formDataImg.append("file", file);

        const response = await dispatch(
          uploadSignatureImg({ formDataImg, name })
        ).unwrap();

        if (response?.success) {
          handleFieldChange(
            "contract",
            `${name}SignaturePictureId`,
            response?.data?.uploadId
          );
          toast.success(response?.data?.message);
        }
      }
    } catch (error) {
      setRepresentativeLoading(false);
      setDogOwnerLoading(false);
      console.log(error, "error");
    } finally {
      setRepresentativeLoading(false);
      setDogOwnerLoading(false);
    }
  };

  // to get the sign if user change the form step
  React.useEffect(() => {
    if (sign?.dogOwner?.url && ownerSigRef.current) {
      ownerSigRef.current.fromDataURL(sign?.dogOwner?.url);
    }
    if (sign?.representative?.url && repSigRef.current) {
      repSigRef.current.fromDataURL(sign?.representative?.url);
    }
  }, []);

  return (
    <div className="my-8 md:pt-10 xl:pt-18 pb-4">
      {/* Title */}
      <div>
        <h1 className=" xxs:text-xl xs:text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
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
            value={formData?.client?.["name"] || ""}
            type="text"
            readOnly={true}
            className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none`}
            setValue={(val: string) =>
              handleFieldChange("contract", "name", val)
            }
          />
        </div>
        <Input
          value={formData?.client?.["address"] || ""}
          type="text"
          readOnly={true}
          placeholder="Address"
          className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none`}
          setValue={(val: string) =>
            handleFieldChange("contract", "address", val)
          }
        />{" "}
        <Input
          value={formData?.client?.["phone1"] || ""}
          type="number"
          readOnly={true}
          placeholder="Phone"
          className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none`}
          setValue={(val: string) =>
            handleFieldChange("contract", "phone1", val)
          }
        />
      </div>
      {/* Checkbox Fields */}
      <div className="my-8">
        <p className="col-span-2 xxs:text-xs xs:xxs:text-md md:text-xl">
          Consisting of the following checked below:
        </p>
        <div className="mt-5 space-y-2">
          <label className="font-bold">Weeks On Leash </label>
          <Select
            options={weeksOptions}
            value={formData?.contract?.["weeksOnLeash"] || ""}
            placeholder={"Select Weeks on Leash"}
            className="appearance-none w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 xxs:text-sm sm:text-base focus:outline-none"
            setValue={(val: string) =>
              handleFieldChange("contract", "weeksOnLeash", val)
            }
            error={errors["weeksOnLeash"]}
          />
        </div>
        <div className="mt-5 space-y-2">
          <label className="font-bold">Weeks On/off Leash </label>
          <Select
            options={weeksOptions}
            value={formData?.contract?.["weeksOnOffLeash"] || ""}
            placeholder={"Weeks On/off Leash"}
            className="appearance-none w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 xxs:text-sm sm:text-base focus:outline-none"
            setValue={(val: string) =>
              handleFieldChange("contract", "weeksOnOffLeash", val)
            }
            error={errors["weeksOnOffLeash"]}
          />
        </div>
        {cifStep3CheckBoxes.map((field, index) => (
          <div key={index} className="space-y-4 my-6">
            <div>
              {field.label && (
                <p className="font-semibold sm:mb-2 xxs:text-md sm:text-base md:text-lg">
                  {field.label}
                </p>
              )}
              <div className="grid grid-cols-4 gap-x-4">
                {field.options?.map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 md:gap-4 xxs:text-xs sm:text-md md:text-base xxs:py-1 md:py-0"
                  >
                    <input
                      type="checkbox"
                      checked={
                        field.name === "maintainPreviouslyEnrolled"
                          ? Boolean(formData.contract?.[field.name])
                          : Array.isArray(formData.contract?.[field.name]) &&
                            (
                              formData.contract?.[field.name] as string[]
                            ).includes(opt)
                      }
                      className="outline-none"
                      onChange={(e) => {
                        if (field.name === "maintainPreviouslyEnrolled") {
                          //  single boolean
                          handleFieldChange(
                            "contract",
                            field.name,
                            e.target.checked,
                            field.label
                          );
                        } else {
                          // multi checkbox group (string[])
                          const current = Array.isArray(
                            formData.contract?.[field.name]
                          )
                            ? (formData.contract?.[field.name] as string[])
                            : [];

                          handleFieldChange(
                            "contract",
                            field.name,
                            e.target.checked
                              ? [...current, opt]
                              : current.filter((o: string) => o !== opt),
                            field.label
                          );
                        }
                      }}
                    />

                    {opt}
                  </label>
                ))}
              </div>
              {/* Error message */}
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 my-3 sm:my-5">
        {cifStep3DateTime.map((field, index) => (
          <div key={index}>
            <label className="font-bold">{field.label}</label>
            <Input
              type={field.type}
              value={formData.contract?.[field.name] || ""}
              placeholder=""
              className="w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none"
              setValue={(val: string) =>
                handleFieldChange("contract", field.name, val, field.label)
              }
              error={errors[field.name]}
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <Input
          value={formData?.contract?.["trainingFee"] || ""}
          type="number"
          placeholder="Training Fee"
          className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none  ${
            errors["trainingFee"] && "border border-red-500"
          }`}
          setValue={(val: string) =>
            handleFieldChange("contract", "trainingFee", val, "Training Fee")
          }
          error={errors["trainingFee"]}
        />
      </div>
      <TextArea
        rows={5}
        value={formData?.contract?.["notesAndTerms"] || ""}
        placeholder="Notes & Terms"
        className={`w-full bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none pt-3 ${
          errors["trainingFee"] && "border border-red-500"
        } `}
        setValue={(val: string) =>
          handleFieldChange("contract", "notesAndTerms", val, "Notes & Terms")
        }
        error={errors["notesAndTerms"]}
      />
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
              value={formData?.contract?.["ownerOfDogName"] || ""}
              type="text"
              className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none  ${
                errors["ownerOfDogName"] && "border border-red-500"
              }`}
              setValue={(val: string) =>
                handleFieldChange(
                  "contract",
                  "ownerOfDogName",
                  val,
                  "Owner of Dog Name"
                )
              }
              error={errors["ownerOfDogName"]}
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
              value={formData?.contract?.["ownerAgreementDate"] || ""}
              type="date"
              className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none  ${
                errors["ownerAgreementDate"] && "border border-red-500"
              }`}
              setValue={(val: string) =>
                handleFieldChange("contract", "ownerAgreementDate", val, "Date")
              }
              error={errors["ownerAgreementDate"]}
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
                "w-full h-[115px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none",
            }}
            onEnd={() => onEndSign(ownerSigRef, "dogOwner")}
          />
          <div className="absolute right-2 top-[120px] md:top-[85%] transform -translate-y-1/2">
            <Button
              name="Clear"
              className="w-[45px] md:w-[60px] bg-red-400 rounded-lg text-white font-semibold text-xs md:text-sm py-0.5 md:py-1 outline-none"
              onClick={() => handleClearSign(ownerSigRef, "dogOwner")}
            />
          </div>

          <div className="absolute right-16 md:right-20 top-[120px] md:top-[85%] transform -translate-y-1/2">
            <Button
              name={dogOwnerLoading ? <Loader isSmall={true} /> : "Save"}
              disabled={dogOwnerLoading}
              className={`w-[45px] md:w-[60px] bg-brand-blue rounded-lg text-white font-semibold text-xs md:text-sm py-0.5 md:py-1 outline-none ${
                dogOwnerLoading && "cursor-not-allowed"
              }`}
              onClick={() => handleSignUpload("dogOwner")}
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
              value={formData?.contract?.["trainingToStartWeekOf"] || ""}
              type="date"
              className={`w-full xxs:h-[50px] sm:h-[56px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-sm sm:text-base focus:outline-none  ${
                errors["trainingToStartWeekOf"] && "border border-red-500"
              }`}
              setValue={(val: string) =>
                handleFieldChange(
                  "contract",
                  "trainingToStartWeekOf",
                  val,
                  "Training to start week of"
                )
              }
              error={errors["trainingToStartWeekOf"]}
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
                "w-full h-[115px] bg-gray-50 rounded-lg px-4 placeholder-gray-700 xxs:text-xs xs:text-sm sm:text-base focus:outline-none",
            }}
            onEnd={() => onEndSign(repSigRef, "representative")}
          />
          <div className="absolute right-2 top-[120px] md:top-[85%] transform -translate-y-1/2">
            <Button
              name="Clear"
              className="w-[45px] md:w-[60px] bg-red-400 rounded-lg text-white font-semibold text-xs md:text-sm py-0.5 md:py-1 outline-none"
              onClick={() => handleClearSign(repSigRef, "representative")}
            />
          </div>
          <div className="absolute right-16 md:right-20 top-[120px] md:top-[85%] transform -translate-y-1/2">
            <Button
              name={representativeLoading ? <Loader isSmall={true} /> : "Save"}
              disabled={representativeLoading}
              className={`w-[45px] md:w-[60px] bg-brand-blue rounded-lg text-white font-semibold text-xs md:text-sm py-0.5 md:py-1 outline-none ${
                representativeLoading && "cursor-not-allowed"
              }`}
              onClick={() => handleSignUpload("representative")}
            />
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <Button
        name={isLoading ? <Loader /> : "Submit"}
        disabled={isLoading}
        className={`w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-xl text-white font-semibold outline-none ${
          isLoading && "cursor-not-allowed"
        }`}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Step3;
