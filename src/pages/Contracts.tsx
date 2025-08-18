import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../components/fields/Input";
import { clientsSampleData, columns } from "../utils/arrays";
import Table from "../components/Table";
import ClientIntakeForm from "../components/forms/clientIntakeForms/ClientIntakeForm";
import ClientDetails from "../components/ClientDetails";

function Contracts() {
  const [renderPage, setRenderPage] = useState("contract");
  const [search, setSearch] = useState("");

  const filteredClients = clientsSampleData.filter((client) =>
    columns.some(({ key }) =>
      client[key].toLowerCase().includes(search.toLowerCase())
    )
  );

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return (
    <div>
      {renderPage === "clientIntakeForm" ? (
        <ClientIntakeForm
          renderPage={renderPage}
          setRenderPage={setRenderPage}
        />
      ) : renderPage === "clientDetails" ? (
        <ClientDetails renderPage={renderPage} setRenderPage={setRenderPage} />
      ) : (
        <div className="bg-white rounded-xl py-10">
          {/* Search Bar */}
          <div className="relative px-4 mb-6">
            <Input
              value={search}
              type={"text"}
              placeholder="Search Clients"
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
          {filteredClients?.length > 0 ? (
            <Table
              columns={columns}
              dataSource={filteredClients}
              setRenderPage={setRenderPage}
            />
          ) : (
            <h3 className="xxs:text-sm sm:text-base text-red-400 py-5 font-semibold text-center">
              No Record Found
            </h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Contracts;
