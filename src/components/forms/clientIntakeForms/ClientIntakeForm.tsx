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
  addDogAgaintsClient,
  createClientIntake,
  uploadClientAndDogImg,
} from "../../../store/client/clientAction";
import { cifStep1Fields, cifStep2Fields } from "../../../utils/arrays";
import { useNavigate } from "react-router-dom";

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
  "ownerAgreementDate",
  "trainingToStartWeekOf",
];

const ClientIntakeForm: React.FC<clientIntakeProp> = React.memo(
  ({ setRenderPage, selectedClientInfo }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<ClientIntakeForm>({
      client: {},
      dog: {},
      contract: {},
    });

    const [sign, setSign] = useState({
      dogOwner: { file: {}, url: "" },
      representative: { file: {}, url: "" },
    });

    const [image, setImage] = useState({
      client: { id: "", src: "" },
      dog: { id: "", src: "" },
    });

    // to run when user type in fields (along with images (after they uploaded))
    const handleFieldChange = (
      section: keyof ClientIntakeForm,
      name: string,
      value: string | number | Date | boolean | string[]
    ) => {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]:
            name === "selectProblems"
              ? [value]
              : ["age", "trainingFee"].includes(name)
              ? Number(value)
              : value,
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

    // to handle field empty validation
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

    // to upload profile image for dog and client
    const handleProfileImg = async (
      e: React.ChangeEvent<HTMLInputElement>,
      name: string
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        const formDataImg = new FormData();
        formDataImg.append("file", file);

        const response = await dispatch(
          uploadClientAndDogImg({ formDataImg, name })
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

    // to submit all three forms data hit after client on third's form submit button
    const handleSubmit = async () => {
      if (
        !formData?.contract?.dogOwnerSignaturePictureId ||
        !formData?.contract?.representativeSignaturePictureId
      ) {
        toast.error("Please sign both signature fields");
        return;
      }
      if (!validateStep(3)) {
        toast.error("Please fill all fields");
        return;
      }

      try {
        const clientId = selectedClientInfo?.client?._id;
        const isEditMode = Boolean(clientId);

        const payload = {
          ...formData,
          clientId,
        };

        // is editmode means new dog is edit against already created client
        const response = isEditMode
          ? await dispatch(addDogAgaintsClient(payload)).unwrap()
          : await dispatch(createClientIntake(formData)).unwrap();

        if (response?.success) {
          toast.success(
            isEditMode
              ? "Dog added successfully!"
              : "Form submitted successfully!"
          );

          defaultAllState();
          if (isEditMode) {
            navigate("/clients", {
              state: { data: response?.data },
            });
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Submission failed:", error);
        toast.error("Something went wrong. Please try again.");
      }
    };

    // empty all state
    const defaultAllState = () => {
      setRenderPage("home");
      setStep(1);
      setFormData({ client: {}, dog: {}, contract: {} });
      setSign({
        dogOwner: { file: {}, url: "" },
        representative: { file: {}, url: "" },
      });
      setErrors({});
    };

    // to update client field in form 1 at the time of new dog added to client
    useEffect(() => {
      if (selectedClientInfo?.client) {
        const selectedClient = selectedClientInfo.client as any; // Optional: create proper type later

        const updatedClient = {
          name: selectedClient.name || "",
          date: selectedClient.date || "",
          address: selectedClient.address || "",
          subdivision: selectedClient.subdivision || "",
          phone1: selectedClient.phones?.[0]?.number || "",
          phone2: selectedClient.phones?.[1]?.number || "",
          email: selectedClient.email || "",
          primaryPhone: selectedClient.primaryPhone || "",
          referral: selectedClient.referral || "",
          evaluationSchedule: selectedClient.evaluationSchedule || "",
          problem: selectedClient.problem || "",
        };

        setFormData((prev) => ({
          ...prev,
          client: updatedClient,
        }));
      }
    }, []);

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
            selectedClientInfo={selectedClientInfo}
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
            sign={sign}
            setSign={setSign}
          />
        )}
      </div>
    );
  }
);

export default ClientIntakeForm;
