import React, { useEffect, useState } from "react";
import NavigationTopBar from "../../NavigationTopBar";
import Input from "../../fields/Input";
import Button from "../../buttons/Button";
import type { field } from "../../../utils/interfaces";
import TextArea from "../../fields/TextArea";

export interface Props {
  setIsReportFormRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportForm: React.FC<Props> = ({ setIsReportFormRender }) => {
  const [goal, setGoal] = useState("");
  const [behavior, setBehavior] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  const fields: field[] = [
    {
      name: "Goal",
      type: "text",
      placeholder: "Enter Goal",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setGoal,
      elementType: "input",
    },
    {
      name: "Behavior",
      type: "text",
      placeholder: "Enter Behavior",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setBehavior,
      elementType: "input",
    },
    {
      name: "Session Notes",
      type: "text",
      placeholder: "Enter Session Notes",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none",
      setValue: setSessionNotes,
      elementType: "textarea",
    },
  ];

  return (
    <div>
      {/* Top Bar */}
      <NavigationTopBar
        name="Add New Report"
        onClick={() => setIsReportFormRender(false)}
      />
      <div className="mt-[70px] mb-[50px]">
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 xxs:gap-4 sm:gap-7">
          {fields.map(
            ({ name, type, placeholder, className, setValue, elementType }) => (
              <div
                key={name}
                className={`col-span-${elementType === "textarea" ? "2" : "1"}`}
              >
                <div className="xxs:mb-1 sm:mb-2 mx-1 font-bold xxs:text-base sm:text-lg">
                  {name}
                </div>
                <div className="relative">
                  {elementType === "textarea" ? (
                    <TextArea
                      rows={10}
                      placeholder={placeholder}
                      className="w-full bg-white rounded-lg px-4 text-gray-750 placeholder-gray-750 border border-gray-300 xxs:text-sm sm:text-base focus:outline-none pt-3"
                      setValue={setValue}
                    />
                  ) : (
                    <Input
                      type={type}
                      placeholder={placeholder}
                      className={className}
                      setValue={setValue}
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Button
        name="Save"
        className="w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white"
        onClick={() => setIsReportFormRender(false)}
      />
    </div>
  );
};

export default ReportForm;
