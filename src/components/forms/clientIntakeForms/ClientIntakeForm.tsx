import React, { useEffect, useState } from "react";
import type {
  clientIntakeProp,
  ClientIntakeFormProp,
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
  getClientsWithContract,
  uploadClientAndDogImg,
} from "../../../store/client/clientAction";
import {
  cifStep1Fields,
  cifStep2Fields,
  requiredContractFields,
} from "../../../utils/arrays";
import { useNavigate } from "react-router-dom";
import { getMetrices } from "../../../store/session/sessionAction";
import {
  emailRegex,
  isPastDate,
  mailingAddressRegex,
  phoneRegex,
} from "../../../utils/utilities";

const ClientIntakeForm: React.FC<clientIntakeProp> = React.memo(
  ({ setRenderPage, selectedClientInfo }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<ClientIntakeFormProp>({
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
      section: ClientIntakeFormProp,
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
              : ["trainingFee"].includes(name)
              ? Number(value)
              : value,
        },
      }));

      // clear error if exists
      if (value) {
        setErrors((prev) => {
          const newErrors = { ...prev };

          const startDate =
            name === "startDate" ? value : formData?.contract?.startDate;
          const endDate =
            name === "endDate" ? value : formData?.contract?.endDate;
          const startTime =
            name === "startTime" ? value : formData?.contract?.startTime;
          const endTime =
            name === "endTime" ? value : formData?.contract?.endTime;

          if (["startDate", "endDate"].includes(name)) {
            if (isPastDate(value as string)) {
              newErrors[name] = "Date cannot be in the past";
            } else {
              delete newErrors[name];
            }
          }

          if (["startDate", "endDate", "startTime", "endTime"].includes(name)) {
            // 1. Check if End Date is before Start Date
            if (startDate > endDate) {
              newErrors["endDate"] =
                "End Date cannot be earlier than Start Date";
            } else {
              delete newErrors["endDate"];
            }

            // 2. Check if End Time is before Start Time (only if dates match)
            if (startTime > endTime) {
              newErrors["endTime"] =
                "End Time cannot be earlier than Start Time";
            } else {
              delete newErrors["endTime"];
            }
          }

          if (
            ![
              "startDate",
              "endDate",
              "startTime",
              "endTime",
              "mailingAddress",
              "email",
              "phone2",
              "phone1",
              "cellPhone",
              "homePhone",
              "workPhone",
            ]?.includes(name)
          ) {
            delete newErrors[name];
          } else {
            if (name === "email") {
              if (emailRegex.test(value)) {
                delete newErrors[name];
              } else {
                newErrors[name] = "Invalid email address";
              }
            } else if (name === "mailingAddress") {
              if (mailingAddressRegex.test(value)) {
                delete newErrors[name];
              } else {
                newErrors[name] = "Invalid mailing address";
              }
            } else if (
              [
                "phone2",
                "phone1",
                "cellPhone",
                "homePhone",
                "workPhone",
              ]?.includes(name)
            ) {
              if (phoneRegex.test(value)) {
                delete newErrors[name];
              } else {
                newErrors[name] = "Invalid phone number";
              }
            }
          }

          return newErrors;
        });
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          newErrors[name] = `This field is required`;
          return newErrors;
        });
      }
    };

    // to handle field empty validation
    const validateStep = (step: number): boolean => {
      const newErrors: Record<string, string> = {};

      if (step === 1) {
        cifStep1Fields.forEach(({ name, label }) => {
          if (!formData.client?.[name]) {
            newErrors[name] = `${label} is required field`;
          } // empty validation
        });
      }

      if (step === 2) {
        // for mailing address field
        if (!formData.dog?.["mailingAddress"]) {
          newErrors["mailingAddress"] = `Mailing address is required field`;
        } // empty validation

        // for remainig fields
        cifStep2Fields.forEach(({ name, placeholder }) => {
          if (!formData.dog?.[name]) {
            newErrors[name] = `${placeholder} is required field`;
          } // empty validation
        });
      }

      if (step === 3) {
        requiredContractFields.forEach(({ name, label }) => {
          if (!formData.contract?.[name]) {
            newErrors[name] = `${label} is required field`;
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
      const { dogOwnerSignaturePictureId, representativeSignaturePictureId } =
        formData?.contract || {};

      if (!dogOwnerSignaturePictureId && !representativeSignaturePictureId) {
        toast.error("Please sign both signature fields");
        return;
      } else if (!dogOwnerSignaturePictureId) {
        toast.error("Please sign the Dog Owner field");
        return;
      } else if (!representativeSignaturePictureId) {
        toast.error("Please sign the Representative field");
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
          clientId,
          dog: formData?.dog,
          contract: formData?.contract,
        };

        // is editmode means new dog is edit against already created client
        const response = isEditMode
          ? await dispatch(addDogAgaintsClient(payload)).unwrap()
          : await dispatch(createClientIntake(formData)).unwrap();

        if (response?.success) {
          defaultAllState();
          if (isEditMode) {
            navigate("/clients", {
              state: { data: response?.data },
            });
          } else {
            const data = { searchName: "", page: 1, perPage: 10 };
            await dispatch(getClientsWithContract(data)); // get updated clients
            await dispatch(getMetrices()); // get updated metrics
            navigate("/");
          }
          toast.success(
            isEditMode
              ? "Dog added successfully!"
              : "Form submitted successfully!"
          );
        }
      } catch (error) {
        console.error("Submission failed:", error);
        // toast.error("There is a network issue. Please try again.");
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

      window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
    }, []);

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
