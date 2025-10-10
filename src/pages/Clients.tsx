import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../components/fields/Input";
import ClientDetails from "../components/ClientDetails";
import ClientIntakeForm from "../components/forms/clientIntakeForms/ClientIntakeForm";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getClients, getClientWithDog } from "../store/client/clientAction";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";
import Pagination from "../components/table/Pagination";

function Clients() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.commonSlice);
  const { clients } = useAppSelector((state) => state.clientSlices);

  const [renderPage, setRenderPage] = useState("client");
  const [isClientClicked, setIsClientClicked] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedClientInfo, setSelectedClientInfo] = useState({});
  const [search, setSearch] = useState("");

  const handleClientClick = async (_id: string) => {
    setSelectedClientId(_id);
    setIsClientClicked(!isClientClicked);
  };

  useEffect(() => {
    (async () => {
      if (selectedClientId) {
        const response = await dispatch(
          getClientWithDog(selectedClientId)
        ).unwrap();
        if (response?.success) {
          setSelectedClientInfo(response?.data);
          setRenderPage("clientDetails");
        }
      }
    })();
  }, [location, dispatch, selectedClientId, isClientClicked]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const data = { searchName: search, page: 1, perPage: 20 };
      dispatch(getClients(data));
    }, 500);

    return () => clearTimeout(delayDebounce); // Cleanup function to cleartimeout on unmount
  }, [search, dispatch]);

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
        <Loader isBlue={true} padding={10} />
      ) : clients?.result?.length > 0 ? (
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-4 lg:pt-8">
          {clients?.result?.map(
            ({
              _id,
              name,
              role,
            }: {
              _id: string;
              name?: string;
              role?: string;
            }) => {
              const [fName, ...rest] = (name ?? "").split(" ");
              const lName = rest.join(" ");

              return (
                <div
                  key={_id}
                  className="place-content-center h-[92px] border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => handleClientClick(_id)}
                >
                  <h3 className="xxs:text-sm sm:text-base font-semibold text-center overflow-hidden text-ellipsis whitespace-nowrap">
                    {fName} {lName && <div>{lName}</div>}
                  </h3>
                  <p className="xxs:text-xs sm:text-sm text-gray-550 text-sm text-center overflow-hidden text-ellipsis whitespace-nowrap">
                    {role || "Dog Owner"}
                  </p>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <h3 className="xxs:text-sm sm:text-base text-red-400 py-5 font-semibold text-center">
          No Record Found
        </h3>
      )}
      {/* Pagination */}
      <Pagination
        currentPage={clients?.pagination?.page}
        totalPages={clients?.pagination?.totalPages}
        pageName="clients"
      />
    </div>
  );
}

export default Clients;
