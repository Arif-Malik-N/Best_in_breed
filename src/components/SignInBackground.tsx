import React from "react";
import { largePaw, midPaw, smallPaw } from "../assets/images";

interface ImageItem {
  className: string;
  image: string;
}

const SignInBackground = () => {
  const firstImageRow: ImageItem[] = [
    {
      className: "rotate-[190deg] row-start-1 col-start-1 place-self-start",
      image: largePaw,
    },
    {
      className: "rotate-[340deg] row-start-3 col-start-2 place-self-center",
      image: smallPaw,
    },
    {
      className: "rotate-0 row-start-3 col-start-3 place-self-center",
      image: midPaw,
    },
    {
      className: "rotate-0 row-start-6 col-start-4 place-self-end",
      image: largePaw,
    },
  ];

  const secondImageRow: ImageItem[] = [
    {
      className: "rotate-[240deg] col-start-1 place-self-center",
      image: smallPaw,
    },
    {
      className: "rotate-[280deg] col-start-4 place-self-center",
      image: smallPaw,
    },
  ];

  const ThirdImageRow: ImageItem[] = [
    {
      className: "rotate-[70deg] row-start-5 col-start-1 place-self-center",
      image: largePaw,
    },
    {
      className: "rotate-[10deg] row-start-6 col-start-2 place-self-center",
      image: smallPaw,
    },
    {
      className: "rotate-320 row-start-6 col-start-3 place-self-center",
      image: midPaw,
    },
    {
      className: "rotate-0 row-start-6 col-start-4 place-self-center",
      image: largePaw,
    },
  ];

  return (
    <div className="bg-[#0052FF] h-screen">
      <div className="w-full h-[35vh] grid grid-cols-4 grid-rows-6 relative">
        {firstImageRow.map(({ className, image }, index) => (
          <img
            key={index}
            src={image}
            alt={`paw-${index}`}
            className={`object-contain ${className}`}
          />
        ))}
      </div>
      <div className="w-full h-[25vh] grid grid-cols-4 relative">
        {secondImageRow.map(({ className, image }, index) => (
          <img
            key={index}
            src={image}
            alt={`paw-${index}`}
            className={`object-contain ${className}`}
          />
        ))}
      </div>
      <div className="w-full h-[30vh] grid grid-cols-4 grid-rows-6 relative">
        {ThirdImageRow.map(({ className, image }, index) => (
          <img
            key={index}
            src={image}
            alt={`paw-${index}`}
            className={`object-contain ${className}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SignInBackground;
