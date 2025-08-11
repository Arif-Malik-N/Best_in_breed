import React, { useState } from "react";
import type { ClientCards } from "../utils/interfaces";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
} from "../assets/images";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../components/fields/Input";

const clientsData: ClientCards[] = [
  {
    name: "Kristin Watson",
    role: "Dog Owner",
    image: client1,
  },
  {
    name: "Guy Hawkins",
    role: "Dog Owner",
    image: client2,
  },
  {
    name: "Cody Fisher",
    role: "Dog Owner",
    image: client3,
  },
  {
    name: "Darrell Steward",
    role: "Dog Owner",
    image: client4,
  },
  {
    name: "Esther Howard",
    role: "Dog Owner",
    image: client5,
  },
  {
    name: "Jane Cooper",
    role: "Dog Owner",
    image: client6,
  },
  {
    name: "Devon Lane",
    role: "Dog Owner",
    image: client7,
  },
  {
    name: "Dianne Russell",
    role: "Dog Owner",
    image: client8,
  },
  {
    name: "Jacob Jones",
    role: "Dog Owner",
    image: client9,
  },
  {
    name: "Kathryn Murphy",
    role: "Dog Owner",
    image: client10,
  },
  {
    name: " Albert Flores",
    role: "Dog Owner",
    image: client11,
  },
  {
    name: "Courtney Henry",
    role: "Dog Owner",
    image: client12,
  },
  {
    name: "Floyd Miles",
    role: "Dog Owner",
    image: client13,
  },
  {
    name: "Jerome Bell",
    role: "Dog Owner",
    image: client14,
  },
];

function Clients() {
  const [search, setSearch] = useState("");

  const filteredClients = clientsData.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
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
      {filteredClients?.length > 0 ? (
        <div className="grid xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 pt-4 lg:pt-8">
          {filteredClients.map(({ name, role, image }, index) => (
            <div
              key={name}
              className="place-content-center h-[225px] border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={image}
                alt={name + index}
                className="w-[125px] h-[125px] rounded-full object-cover mb-3 justify-self-center"
              />
              <h3 className="xxs:text-sm sm:text-base font-semibold text-center">
                {name}
              </h3>
              <p className="xxs:text-xs sm:text-sm text-gray-550 text-sm text-center">
                {role}
              </p>
            </div>
          ))}
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
