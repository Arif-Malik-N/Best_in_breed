import React from "react";
import Button from "../buttons/Button";
import { mainDog } from "../../assets/images";

const CardWithDog = () => {
  return (
    <div className="mt-5 sm:mt-[70px]">
      <div className="relative sm:h-[348px] rounded-xl bg-brand-blue text-white">
        {/* Ellipses container - clips overflowing ellipses */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Top Left Ellipses */}
          <div className="absolute -top-[250px] -left-[126px] w-[320px] h-[295px] bg-[#C4DEFF] rounded-full"></div>
          <div className="hidden sm:block absolute -top-[165px] right-[100px] w-[270px] h-[260px] bg-[#C4DEFF] rounded-full"></div>
          <div className="absolute -top-[190px] -right-[150px] w-[300px] h-[260px] bg-[#C4DEFF] rounded-full"></div>

          {/* Bottom Right Ellipses */}
          <div className="absolute xxs:-bottom-[320px] sm:-bottom-[255px] -left-[160px] w-[375px] h-[345px] bg-[#C4DEFF] rounded-full"></div>
          <div className="hidden sm:block absolute -bottom-[265px] left-[50px] w-[320px] h-[295px] bg-[#C4DEFF] rounded-full"></div>
          <div className="absolute xxs:-bottom-[320px] sm:-bottom-[172px] -right-20 w-[375px] h-[345px] bg-[#C4DEFF] rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 grid grid-cols-3 sm:grid-cols-5 h-full">
          <div className="col-span-3 xxs:space-y-3 sm:space-y-5 xxs:p-[30px] sm:p-0 sm:pl-[50px] sm:pt-[50px] xl:pt-[30px]">
            <h1 className="xxs:text-xl sm:text-2xl xl:text-3xl font-bold text-white">
              Smart Training for Every Breed’s Strengths
            </h1>
            <h2 className="xxs:text-sm sm:text-base xl:text-lg text-white">
              Best in Breed Dog Training offers tailored training programs that
              recognize and adapt to the unique traits of each dog breed.
            </h2>

            {/* Client Button */}
            <Button
              name="Client Intake Form"
              className="w-[200px] xxs:h-[45px] sm:h-[56px] bg-black rounded-lg text-white font-bold"
              onClick={() => {}}
            />
          </div>

          {/* Dog Image */}
          <div className="hidden sm:block col-span-2 relative">
            <img
              src={mainDog}
              alt="mainDog"
              className="absolute top-[-80px] right-0 w-[310px] h-[410px] z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithDog;
