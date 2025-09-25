import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../components/fields/Input";
import ClientDetails from "../components/ClientDetails";
import ClientIntakeForm from "../components/forms/clientIntakeForms/ClientIntakeForm";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getClients, getClientWithDog } from "../store/client/clientAction";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";

function Clients() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.commonSlice);
  const { clients } = useAppSelector((state) => state.clientSlices);

  const [renderPage, setRenderPage] = useState("client");
  const [selectedClientInfo, setSelectedClientInfo] = useState({});
  const [search, setSearch] = useState("");

  const handleClientClick = async (_id: string) => {
    const response = await dispatch(getClientWithDog(_id)).unwrap();

    if (response?.success) {
      setSelectedClientInfo(response?.data);
      setRenderPage("clientDetails");
    }
  };

  useEffect(() => {
    const { data } = location.state || {};
    setSelectedClientInfo(data);
  }, [location]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(getClients(search));
    }, 300);

    return () => clearTimeout(delayDebounce); // Cleanup function to cleartimeout on unmount
  }, [search, dispatch]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return renderPage === "clientIntakeForm" ? (
    <ClientIntakeForm
      renderPage={renderPage}
      setRenderPage={setRenderPage}
      selectedClientInfo={selectedClientInfo}
    />
  ) : selectedClientInfo && Object.keys(selectedClientInfo)?.length > 0 ? (
    <ClientDetails
      selectedClientInfo={selectedClientInfo}
      setSelectedClientInfo={setSelectedClientInfo}
      setRenderPage={setRenderPage}
    />
  ) : (
    <div className="bg-white rounded-xl px-4 py-10">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Input
          value={search}
          type={"text"}
          placeholder="Search Clients"
          className={
            "w-full xxs:h-[50px] sm:h-[56px] bg-gray-150 rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none"
          }
          setValue={setSearch}
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <AiOutlineSearch className="w-5 h-5 text-gray-750" />
        </div>
      </div>

      {/* Clients Cards */}
      {isLoading ? (
        <Loader isNormal={true} />
      ) : clients?.result?.length > 0 ? (
        <div className="grid xxs:grid-cols-1 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-3 sm:gap-6 pt-4 lg:pt-8">
          {clients?.result?.map(({ _id, name, role }) => {
            const [fName, ...rest] = name.split(" "); // Split the name into first name and the rest (last name or multiple names)
            const lName = rest.join(" "); // Join the remaining parts into a last name (if any)

            return (
              <div
                key={_id}
                className="place-content-center h-[92px] border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => handleClientClick(_id)}
              >
                <h3 className="xxs:text-sm sm:text-base font-semibold text-center">
                  {fName} {lName && <div>{lName}</div>}
                </h3>
                <p className="xxs:text-xs sm:text-sm text-gray-550 text-sm text-center">
                  {role || "Dog Owner"}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <h3 className="xxs:text-sm sm:text-base text-red-400 py-5 font-semibold text-center">
          No Record Found
        </h3>
      )}
    </div>
  );
}

export default Clients;
