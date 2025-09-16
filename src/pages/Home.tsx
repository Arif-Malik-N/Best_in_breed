import React, { useState } from "react";
import { group } from "../assets/images";
import CardWithDog from "../components/cards/CardWithDog";
import Button from "../components/buttons/Button";
import Table from "../components/Table";
import type { card } from "../utils/interfaces";
import { clientsSampleData, columns } from "../utils/arrays";
import UpcomminSession from "../components/UpcomminSession";
import ClientIntakeForm from "../components/forms/clientIntakeForms/ClientIntakeForm";
import ClientDetails from "../components/ClientDetails";
import Input from "../components/fields/Input";
import { AiOutlineSearch } from "react-icons/ai";

function Home() {
  const [renderPage, setRenderPage] = useState("home");
  const [search, setSearch] = useState("");

  const filteredClients = clientsSampleData.filter((client) =>
    columns.some(({ key }) =>
      client[key].toLowerCase().includes(search.toLowerCase())
    )
  );

  const cards: card[] = [
    {
      icon: group,
      name: "Active Clients",
      number: 150,
    },
    {
      icon: group,
      name: "Appointments",
      number: 12,
    },
    {
      icon: group,
      name: "Pending Contracts",
      number: 9,
    },
  ];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, [renderPage]);

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
        <div>
          {/* Top Section */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3 lg:col-span-2 gap-5">
              {/* Top Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {cards.map(({ icon, name, number }) => (
                  <div
                    key={name}
                    className="flex rounded-xl bg-white border place-items-center xxs:h-[80px] sm:h-[110px] pl-3 pr-1"
                  >
                    <div className="bg-gray-400 rounded-2xl px-2 py-3">
                      <img src={icon} alt={name} />
                    </div>
                    <div className="text-base xxs:ml-4 sm:ml-2">
                      <h1 className="font-bold">{name}</h1>
                      <h1>{number}</h1>
                    </div>
                  </div>
                ))}
              </div>

              {/* Heading With Dog Image  */}
              <CardWithDog setRenderPage={setRenderPage} />
            </div>

            {/* Upcomming Session */}
            <UpcomminSession />
          </div>

          {/* Client Table Section */}
          <div className="bg-white rounded-xl py-10">
            <div className="flex justify-between place-items-center px-3">
              <div className="xxs:text-base xl:text-lg font-semibold ml-4">
                Clients
              </div>
              <Button
                name="View All"
                className="w-[65px] h-[40px] bg-gray-100 rounded-xl font-semibold text-xs text-brand-blue"
                onClick={() => {}}
              />
            </div>
            {/* Search Bar */}
            <div className="relative px-4 my-4">
              <Input
                value={search}
                type={"text"}
                placeholder="Search Client or Dog"
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
        </div>
      )}
    </div>
  );
}

export default Home;
