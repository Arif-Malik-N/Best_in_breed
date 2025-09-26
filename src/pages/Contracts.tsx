import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../components/fields/Input";
import Table from "../components/table/Table";
// import ClientIntakeForm from "../components/forms/clientIntakeForms/ClientIntakeForm";
// import ClientDetails from "../components/ClientDetails";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getClientsWithContract } from "../store/client/clientAction";
import { contractColumns } from "../utils/arrays";
import Loader from "../components/Loader";

function Contracts() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.commonSlice);
  const { clientsWithContract } = useAppSelector((state) => state.clientSlices);

  // const [renderPage, setRenderPage] = useState("contract");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const data = { searchName: search, page: 1, perPage: 10 };
      dispatch(getClientsWithContract(data));
    }, 300);

    return () => clearTimeout(delayDebounce); // Cleanup function to cleartimeout on unmount
  }, [search, dispatch]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return (
    <div>
      <div className="bg-white rounded-xl py-10">
        {/* Search Bar */}
        <div className="relative px-4 mb-6">
          <Input
            value={search}
            type={"text"}
            placeholder="Search Contracts"
            className={
              "w-full xxs:h-[50px] sm:h-[56px] bg-gray-150 rounded-lg pr-2 pl-12 xxs:text-sm sm:text-base text-gray-750 placeholder-gray-700 border border-gray-300 focus:outline-none"
            }
            setValue={setSearch}
          />
          <div className="absolute left-9 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <AiOutlineSearch className="w-5 h-5 text-gray-750" />
          </div>
        </div>

        {/* Clients Table */}
        {isLoading ? (
          <Loader isBlue={true} padding={10} />
        ) : clientsWithContract?.result?.length > 0 ? (
          <Table
            columns={contractColumns}
            dataSource={clientsWithContract?.result}
            pagination={clientsWithContract?.pagination}
          />
        ) : (
          <h3 className="xxs:text-sm sm:text-base text-red-400 py-5 font-semibold text-center">
            No Record Found
          </h3>
        )}
      </div>
    </div>
  );
}

export default Contracts;
