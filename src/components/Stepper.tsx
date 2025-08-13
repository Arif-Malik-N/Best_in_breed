import React from "react";

const Stepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [1, 2, 3];

  return (
    <div className="flex justify-center xxs:my-5 sm:my-10 mx-10">
      <div className="flex items-center w-full lg:w-[550px]">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div
              className={`flex items-center justify-center rounded-full border-4 font-bold xxs:w-[35px] xxs:h-[35px] sm:w-[55px] sm:h-[55px] lg:w-[75px] lg:h-[75px] xxs:text-base sm:text-lg lg:text-2xl
              ${
                currentStep === step
                  ? "border-brand-blue text-brand-blue font-bold"
                  : "border-gray-450 text-gray-450"
              }`}
            >
              {step}
            </div>

            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 lg:h-1 bg-gray-450`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
