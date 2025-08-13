import React, { useState } from "react";
import { group } from "../assets/images";
import CardWithDog from "../components/cards/CardWithDog";
import Button from "../components/buttons/Button";
import Table from "../components/Table";
import type { card } from "../utils/interfaces";
import { clientsSampleData, columns } from "../utils/arrays";
import UpcomminSession from "../components/UpcomminSession";
import ClientIntakeForm from "../components/forms/ClientIntakeForm";

function Home() {
  const [renderPage, setRenderPage] = useState("home");

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

  return (
    <div>
      {renderPage === "clientIntakeForm" ? (
        <ClientIntakeForm
          renderPage={renderPage}
          setRenderPage={setRenderPage}
        />
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
          <div className="rounded-xl bg-white my-8 py-6">
            <div className="flex justify-between place-items-center px-3">
              <div className="xxs:text-base xl:text-lg font-semibold ml-4">
                Client
              </div>
              <Button
                name="View All"
                className="w-[65px] h-[40px] bg-gray-100 rounded-xl font-semibold text-xs text-brand-blue"
                onClick={() => {}}
              />
            </div>
            <Table columns={columns} dataSource={clientsSampleData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
