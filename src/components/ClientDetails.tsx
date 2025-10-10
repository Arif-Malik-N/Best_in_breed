import React, { useEffect, useState } from "react";
import NavigationTopBar from "./NavigationTopBar";
import type { clientDetailProp } from "../utils/interfaces";
import {
  AiOutlineDelete,
  AiOutlineDown,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUp,
} from "react-icons/ai";
import { deleteIcon, pdf } from "../assets/images";
import Button from "./buttons/Button";
import ReportForm from "./forms/clientIntakeForms/ReportForm";
import { FaPlusCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/store";
import { deleteReport } from "../store/report/reportAction";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import Modal from "./modal/Modal";

const ClientDetails: React.FC<clientDetailProp> = React.memo(
  ({ selectedClientInfo, setSelectedClientInfo, setRenderPage }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.commonSlice);
    const [isModalOpen, setIsModalOpen] = useState(false); // for modal

    const [isReportFormRender, setIsReportFormRender] = useState(false);
    const [openDogId, setOpenDogId] = useState<string | null>(
      selectedClientInfo?.dogs[0]?._id
    );

    const toggleDog = (_id: string) => {
      setOpenDogId(openDogId === _id ? null : _id);
    };

    const defaultAllState = () => {
      setSelectedClientInfo?.({});
    };

    const handleDeleteReport = async (dogId: string) => {
      try {
        // API call through Redux
        const response = await dispatch(deleteReport(dogId)).unwrap();
        // Toaster after API success
        if (response?.success) {
          navigate("/clients");
          setTimeout(() => {
            toast.success(
              response?.data?.message || "Report Deleted Successfully"
            );
          }, 1000);
        } else {
          toast.success("Unable to delete the report. Please try again later.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
    }, []);

    return isReportFormRender ? (
      <ReportForm
        openDogId={openDogId}
        setIsReportFormRender={setIsReportFormRender}
      />
    ) : (
      <div className="bg-white rounded-xl m-1 p-2 md:p-5 md:m-0">
        {/* Top Bar */}
        <NavigationTopBar name="Client Details" onClick={defaultAllState} />

        <div className="py-0 sm:py-10 pt-4 sm:pt-0 space-y-4 sm:space-y-7 mt-6 sm:mt-12">
          <div className="rounded-xl border p-3 lg:p-6 space-y-2 sm:space-y-5 lg:space-y-8">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Left side: Profile */}
              <div className="flex items-center gap-2 sm:gap-5">
                <img
                  src={selectedClientInfo?.client?.imageUrl}
                  // alt="profile"
                  className="w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] rounded-full"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold">
                  {selectedClientInfo?.client?.name}
                </h2>
              </div>

              {/* Right side: Contacts */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="flex items-center gap-2 text-sm sm:text-base md:text-base">
                  <div className="w-9 h-9 p-2 rounded-lg bg-gray-350">
                    <AiOutlinePhone className="rotate-90 w-5 h-5" />
                  </div>
                  {selectedClientInfo?.client?.phones[1]?.number}
                </span>
                <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  <div className="w-9 h-9 p-2 rounded-lg bg-gray-350">
                    <AiOutlineMail className="w-5 h-5" />
                  </div>
                  {selectedClientInfo?.client?.email}
                </span>
                <button
                  className="flex items-center gap-1.5 bg-brand-blue text-white pl-1 pr-2 sm:pr-3 py-1 rounded-full text-sm outline-none"
                  onClick={() => setRenderPage("clientIntakeForm")}
                >
                  <FaPlusCircle className="text-white w-6 h-6" />
                  <span>Add Dog</span>
                </button>
              </div>
            </div>

            {/* About Dogs */}
            <h2 className="text-base sm:text-lg md:text-xl font-bold">
              Owned Dogs
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
              {selectedClientInfo?.dogs?.map(({ name, imageUrl, desc }) => (
                <div
                  key={imageUrl}
                  className="flex items-center gap-2 sm:gap-4"
                >
                  <img
                    src={imageUrl}
                    className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] rounded-full"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                      {name}
                    </h3>
                    {/* <p className="text-xs sm:text-sm md:text-base text-gray-550">
                    {desc}
                  </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dog Accordion */}
          {selectedClientInfo?.dogs?.map(
            ({ _id, name, age, breed, contract, reports }) => (
              <div
                key={_id}
                className="bg-white rounded-xl border px-2 sm:px-4 lg:px-6"
              >
                <div
                  onClick={() => toggleDog(_id)}
                  className="w-full text-left py-4 flex justify-between items-center font-medium cursor-pointer"
                >
                  <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-6 text-xs sm:text-sm md:text-base">
                    <div>
                      Dog name: <b>{name}</b>
                    </div>{" "}
                    <div>
                      Dog Age: <b>{age}</b>
                    </div>{" "}
                    <div>
                      {" "}
                      Breed: <b>{breed}</b>
                    </div>
                  </div>

                  <span>
                    {openDogId === name ? (
                      <AiOutlineUp className="text-bold" />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </span>
                </div>

                {openDogId === _id && (
                  <div className="pb-3 sm:pb-6 space-y-6">
                    {/* Contract */}
                    <div>
                      <h4 className="font-semibold mb-2 text-xs sm:text-sm md:text-base">
                        Contract
                      </h4>
                      <div
                        className="flex items-center gap-3 border rounded-lg p-2 sm:p-3 cursor-pointer"
                        onClick={() => {
                          if (contract?.agreementPdfUrl) {
                            window.open(contract.agreementPdfUrl, "_blank");
                          }
                        }}
                      >
                        <img src={pdf} />
                        <div>
                          <div className="text-xs sm:text-sm md:text-base">
                            Contract {contract?.createdAt?.split("T")[0]}.pdf
                            {/* Contract 04-08-25.pdf */}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-250 mt-1">
                            94 KB
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feedback Reports */}
                    <div>
                      <div className="flex justify-between items-center my-6">
                        <h4 className="font-semibold text-xs sm:text-sm md:text-base">
                          Feedback Reports
                        </h4>
                        <Button
                          name="Add new report"
                          className="w-[110px] sm:w-[200px] xxs:h-[45px] sm:h-[56px] text-xs sm:text-base bg-brand-blue rounded-xl text-white font-semibold outline-none"
                          onClick={() => setIsReportFormRender(true)}
                        />
                      </div>
                      {reports?.map(({ _id, reportPdfUrl, createdAt }) => (
                        <div
                          key={_id}
                          className="flex items-center gap-3 border rounded-lg p-2 sm:p-3 mb-2"
                        >
                          <img src={pdf} />
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              if (reportPdfUrl) {
                                window.open(reportPdfUrl, "_blank");
                              }
                            }}
                          >
                            <div className="text-xs sm:text-sm md:text-base">
                              Report {createdAt?.split("T")[0]}.pdf
                              {/* Report {i}.pdf */}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-250 mt-1">
                              94 KB
                            </div>
                          </div>
                          <div className="ml-auto ">
                            {isLoading ? (
                              <Loader isBlue={true} />
                            ) : (
                              <AiOutlineDelete
                                className="cursor-pointer"
                                color="red"
                                onClick={() => setIsModalOpen(true)}
                              />
                            )}
                            <Modal
                              isOpen={isModalOpen}
                              onClose={() => setIsModalOpen(false)}
                              title="Delete Report?"
                              description="Are you sure you want to delete this report? This action cannot be undone."
                              buttonText="Yes, Delete Report"
                              buttonColor="bg-brand-blue"
                              onConfirm={() => handleDeleteReport(_id)}
                              icon={deleteIcon}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    );
  }
);

export default ClientDetails;
