import React, { useEffect, useState } from "react";
import type { clientIntakeProp } from "../../../utils/interfaces";
import NavigationTopBar from "../../NavigationTopBar";
import Stepper from "../../Stepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const ClientIntakeForm: React.FC<clientIntakeProp> = ({ setRenderPage }) => {
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, [step]);

  return (
    <div>
      {/* Top Bar */}
      <NavigationTopBar
        name={`Client Intake Form Step ${step} of 3`}
        onClick={
          step === 1 ? defaultAllState : () => setStep((prev) => prev - 1)
        } // if page is first step than run default state otherwise go to previous step
      />
      {/* Stepper */}
      <Stepper currentStep={step} />

      {/* First Forms */}
      {step === 1 ? (
        <Step1
          setStep={setStep}
          formData={formData}
          handleFieldChange={handleFieldChange}
        />
      ) : step === 2 ? (
        <Step2
          setStep={setStep}
          formData={formData}
          handleFieldChange={handleFieldChange}
        />
      ) : (
        <Step3
          defaultAllState={defaultAllState}
          formData={formData}
          handleFieldChange={handleFieldChange}
        />
      )}
    </div>
  );
};

export default ClientIntakeForm;
