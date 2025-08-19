import React, { useEffect, useState } from "react";
import NavigationTopBar from "./NavigationTopBar";
import type { clientIntakeProp } from "../utils/interfaces";
import {
  AiOutlineDelete,
  AiOutlineDown,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlinePlusCircle,
  AiOutlineUp,
} from "react-icons/ai";
import { client1, dog1, dog2, pdf } from "../assets/images";
import Button from "./buttons/Button";
import ReportForm from "./forms/clientIntakeForms/ReportForm";

const ClientDetails: React.FC<clientIntakeProp> = ({ setRenderPage }) => {
  const [isReportFormRender, setIsReportFormRender] = useState(false);
  const [openDog, setOpenDog] = useState<string | null>("Penny");

  const toggleDog = (name: string) => {
    setOpenDog(openDog === name ? null : name);
  };

  const defaultAllState = () => {
    setRenderPage("home");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return isReportFormRender ? (
    <ReportForm setIsReportFormRender={setIsReportFormRender} />
  ) : (
    <div className="bg-white rounded-xl m-1 p-2 md:p-5 md:m-0">
      {/* Top Bar */}
      <NavigationTopBar name="Details" onClick={defaultAllState} />

      <div className="py-0 sm:py-10 pt-4 sm:pt-0 space-y-4 sm:space-y-7 mt-6 sm:mt-12">
        <div className="rounded-xl border p-3 lg:p-6 space-y-4 sm:space-y-10 lg:space-y-18">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left side: Profile */}
            <div className="flex items-center gap-2 sm:gap-5">
              <img
                src={client1}
                alt="profile"
                className="w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] rounded-full"
              />
              <h2 className="text-base sm:text-lg md:text-xl font-bold">
                Kristin Watson
              </h2>
            </div>

            {/* Right side: Contacts */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="flex items-center gap-2 text-sm sm:text-base md:text-base">
                <div className="w-9 h-9 p-2 rounded-lg bg-gray-350">
                  <AiOutlinePhone className="rotate-90 w-5 h-5" />
                </div>
                +15556789012
              </span>
              <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                <div className="w-9 h-9 p-2 rounded-lg bg-gray-350">
                  <AiOutlineMail className="w-5 h-5" />
                </div>
                igerrin@gmail.com
              </span>
              <div className="flex items-center gap-2 cursor-pointer">
                <AiOutlinePlusCircle
                  className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue"
                  onClick={() => setRenderPage("clientIntakeForm")}
                />
                <span className="sm:hidden text-sm">Add New Dog</span>
              </div>
            </div>
          </div>

          {/* About Dogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Penny",
                img: dog1,
                desc: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
              },
              {
                name: "Tuffy",
                img: dog2,
                desc: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
              },
            ].map(({ name, img, desc }) => (
              <div className="flex gap-2 sm:gap-4">
                <img
                  src={img}
                  alt={name}
                  className="w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] rounded-full"
                />
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                    About {name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-550">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dog Accordion */}
        {[
          {
            name: "Penny",
            age: "1 year",
            breed: "Poodle (Standard, Miniature, Toy)",
          },
          {
            name: "Rocky",
            age: "1 year",
            breed: "Poodle (Standard, Miniature, Toy)",
          },
        ].map((dog) => (
          <div
            key={dog.name}
            className="bg-white rounded-xl border px-2 sm:px-4 lg:px-6"
          >
            <div
              onClick={() => toggleDog(dog.name)}
              className="w-full text-left py-4 flex justify-between items-center font-medium cursor-pointer"
            >
              <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-6 text-xs sm:text-sm md:text-base">
                <div>
                  Dog name: <b>{dog.name}</b>
                </div>{" "}
                <div>
                  Dog Age: <b>{dog.age}</b>
                </div>{" "}
                <div>
                  {" "}
                  Breed: <b>{dog.breed}</b>
                </div>
              </div>
              <span>
                {openDog === dog.name ? (
                  <AiOutlineUp className="text-bold" />
                ) : (
                  <AiOutlineDown />
                )}
              </span>
            </div>

            {openDog === dog.name && (
              <div className="pb-3 sm:pb-6 space-y-6">
                {/* Contract */}
                <div>
                  <h4 className="font-semibold mb-2 text-xs sm:text-sm md:text-base">
                    Contract
                  </h4>
                  <div className="flex items-center gap-3 border rounded-lg p-2 sm:p-3">
                    <img src={pdf} />
                    <div>
                      <div className="text-xs sm:text-sm md:text-base">
                        Contract 04-08-25.pdf
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
                      className="w-[110px] sm:w-[200px] xxs:h-[45px] sm:h-[56px] text-xs sm:text-base bg-brand-blue rounded-xl text-white font-semibold"
                      onClick={() => setIsReportFormRender(true)}
                    />
                  </div>
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border rounded-lg p-2 sm:p-3 mb-2"
                    >
                      <img src={pdf} />
                      <div>
                        <div className="text-xs sm:text-sm md:text-base">
                          Report {i}.pdf
                        </div>
                        <div className="text-xs sm:text-sm text-gray-250 mt-1">
                          94 KB
                        </div>
                      </div>
                      <AiOutlineDelete className="ml-auto cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDetails;
