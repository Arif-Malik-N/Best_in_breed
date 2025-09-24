import React, { useEffect, useState } from "react";
import type {
  clientIntakeProp,
  ClientIntakeForm,
} from "../../../utils/interfaces";
import NavigationTopBar from "../../NavigationTopBar";
import Stepper from "../../Stepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../store/store";
import {
  createClientIntake,
  uploadClientAndDogImg,
} from "../../../store/client/clientAction";
import { cifStep1Fields, cifStep2Fields } from "../../../utils/arrays";

const requiredContractFields = [
  "weeksOnLeash",
  "weeksOnOffLeash",
  "houseBreakingChecklist1",
  "personalProtectionOptions",
  "maintainPreviouslyEnrolled",
  "startDate",
  "endDate",
  "startTime",
  "endTime",
  "trainingFee",
  "notesAndTerms",
  "ownerOfDogName",
  "ownerSignatureName",
  "ownerAgreementDate",
  "trainingToStartWeekOf",
  "representativeSignatureName",
];

const ClientIntakeForm: React.FC<clientIntakeProp> = ({ setRenderPage }) => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<ClientIntakeForm>({
    client: {},
    dog: {},
    contract: {},
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [image, setImage] = useState({
    client: { id: "", src: "" },
    dog: { id: "", src: "" },
  });

  const handleFieldChange = (
    section: keyof ClientIntakeForm,
    name: string,
    value: string | number | Date | boolean | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));

    // clear error if exists
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      cifStep1Fields.forEach(({ name }) => {
        if (!formData.client?.[name]) {
          newErrors[name] = `This field is required`;
        }
      });
    }

    if (step === 2) {
      cifStep2Fields.forEach(({ name }) => {
        if (!formData.dog?.[name]) {
          newErrors[name] = `This field is required`;
        }
      });
    }

    if (step === 3) {
      requiredContractFields.forEach((field) => {
        if (!formData.contract?.[field]) {
          newErrors[field] = `This field is required`;
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProfileImg = async (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await dispatch(
        uploadClientAndDogImg({ formData, name })
      ).unwrap();

      if (response?.success) {
        setImage((prev) => ({
          ...prev,
          [name]: {
            id: response?.data?.uploadId,
            src: response?.data?.url,
          },
        }));
        handleFieldChange(
          name as keyof ClientIntakeForm,
          `${name}PhotoUploadId`,
          response?.data?.uploadId
        );
        toast.success(response?.data?.message);
      }
    }
  };

  const defaultAllState = () => {
    setRenderPage("home");
    setStep(1);
    setFormData({ client: {}, dog: {}, contract: {} });
    setErrors({});
  };

  const handleSubmit = async () => {
    if (
      !formData?.contract?.ownerSignature ||
      !formData?.contract?.repSignature
    ) {
      toast.error("Please sign both sign field");
      return;
    }
    if (!validateStep(3)) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      console.log("Submitting", formData);
      // const response = await dispatch(createClientIntake(formData)).unwrap();
      // if (response?.success) {
      //   toast.success("Form submitted successfully!");
      //   defaultAllState();
      // }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <div>
      <NavigationTopBar
        name={`Client Intake Form Step ${step} of 3`}
        onClick={
          step === 1 ? defaultAllState : () => setStep((prev) => prev - 1)
        }
      />
      <Stepper currentStep={step} />

      {step === 1 ? (
        <Step1
          image={image.client.src}
          handleImageUpdate={handleProfileImg}
          setStep={setStep}
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
          validateStep={validateStep}
        />
      ) : step === 2 ? (
        <Step2
          image={image.dog.src}
          handleImageUpdate={handleProfileImg}
          setStep={setStep}
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
          validateStep={validateStep}
        />
      ) : (
        <Step3
          handleSubmit={handleSubmit}
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default ClientIntakeForm;
