import React, { useEffect, useState } from "react";
import NavigationTopBar from "../../NavigationTopBar";
import Input from "../../fields/Input";
import Button from "../../buttons/Button";
import type { field, ReportFormProps } from "../../../utils/interfaces";
import TextArea from "../../fields/TextArea";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { addReport } from "../../../store/client/clientAction";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

const ReportForm: React.FC<ReportFormProps> = ({
  openDogId,
  setIsReportFormRender,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.commonSlice);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [goal, setGoal] = useState("");
  const [behavior, setBehavior] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");

  const handleAddReport = async () => {
    try {
      // Object to send to API
      const dataToSend = {
        dogId: openDogId,
        goal: goal,
        behavior: behavior,
        sessionNotes: sessionNotes,
      };

      // API call through Redux
      const response = await dispatch(addReport(dataToSend)).unwrap();

      // Toaster after API success
      if (response?.success) {
        navigate("/clients");
        setTimeout(() => {
          toast.success(response?.data?.message || "Report Added Successfully");
          setGoal("");
          setBehavior("");
          setSessionNotes("");
          setIsReportFormRender(false);
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fields: field[] = [
    {
      name: "Goal",
      type: "text",
      placeholder: "Enter Goal",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      value: goal,
      setValue: setGoal,
      elementType: "input",
    },
    {
      name: "Behavior",
      type: "text",
      placeholder: "Enter Behavior",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      value: behavior,
      setValue: setBehavior,
      elementType: "input",
    },
    {
      name: "Session Notes",
      type: "text",
      placeholder: "Enter Session Notes",
      className:
        "w-full xxs:h-[50px] sm:h-[56px] bg-white rounded-lg px-4 xxs:text-sm sm:text-base placeholder-gray-700 border border-gray-300 focus:outline-none",
      value: sessionNotes,
      setValue: setSessionNotes,
      elementType: "textarea",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

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
            ({
              value,
              name,
              type,
              placeholder,
              className,
              setValue,
              elementType,
            }) => (
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
                      value={value}
                      rows={10}
                      placeholder={placeholder}
                      className="w-full bg-white rounded-lg px-4 placeholder-gray-750 border border-gray-300 xxs:text-sm sm:text-base focus:outline-none pt-3"
                      setValue={setValue}
                    />
                  ) : (
                    <Input
                      value={value}
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
        name={isLoading ? <Loader /> : "Save"}
        disabled={isLoading}
        className={`w-full xxs:h-[45px] sm:h-[56px] bg-brand-blue rounded-lg text-white outline-none ${
          isLoading && "cursor-not-allowed"
        }`}
        onClick={handleAddReport}
      />
    </div>
  );
};

export default ReportForm;
