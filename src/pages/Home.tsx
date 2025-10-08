import React, { useEffect, useState } from "react";
import { group } from "../assets/images";
import CardWithDog from "../components/cards/CardWithDog";
import Button from "../components/buttons/Button";
import Table from "../components/table/Table";
import type { card } from "../utils/interfaces";
import UpcomminSession from "../components/UpcomminSession";
import ClientIntakeForm from "../components/forms/clientIntakeForms/ClientIntakeForm";
import Input from "../components/fields/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getMetrices } from "../store/session/sessionAction";
import {
  getClientsWithContract,
  getClientWithDog,
} from "../store/client/clientAction";
import { clientcolumns } from "../utils/arrays";
import Loader from "../components/Loader";
import ClientDetails from "../components/ClientDetails";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.commonSlice);

  const [renderPage, setRenderPage] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedClientInfo, setSelectedClientInfo] = useState({});
  const [isClientClicked, setIsClientClicked] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState("");

  const { metrics } = useAppSelector((state) => state.sessionSlices);
  const { clientsWithContract } = useAppSelector((state) => state.clientSlices);

  const cards: card[] = [
    {
      icon: group,
      name: "Active Clients",
      number: metrics?.activeClients,
    },
    {
      icon: group,
      name: "Appointments",
      number: metrics?.appointments,
    },
    {
      icon: group,
      name: "Pending Contracts",
      number: metrics?.pendingContracts,
    },
  ];

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
  }, [selectedClientId, isClientClicked]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const data = { searchName: search, page: 1, perPage: 10 };
      dispatch(getClientsWithContract(data));
    }, 500);

    return () => clearTimeout(delayDebounce); // Cleanup function to cleartimeout on unmount
  }, [search]);

  useEffect(() => {
    dispatch(getMetrices());
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return (
    <div>
      {renderPage === "clientIntakeForm" ? (
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
          <div className="bg-white rounded-xl py-10 mt-5 sm:mt-10">
            <div className="flex justify-between place-items-center px-3">
              <div className="xxs:text-base xl:text-lg font-semibold ml-1.5">
                Clients
              </div>
              <Button
                name="View All"
                className="w-[65px] h-[40px] bg-gray-100 rounded-xl font-semibold text-xs text-brand-blue outline-none"
                onClick={() => {
                  // const data = { searchName: search };
                  // dispatch(getClientsWithContract(data));
                  navigate('/clients')
                }}
              />
            </div>
            {/* Search Bar */}
            <div className="relative px-4 my-4">
              <Input
                value={search}
                type={"text"}
                placeholder="Search By Client or Dog Name"
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
                columns={clientcolumns}
                dataSource={clientsWithContract?.result}
                pagination={clientsWithContract?.pagination}
                handleClientClick={handleClientClick}
                // setRenderPage={setRenderPage}
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
