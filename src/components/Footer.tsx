import React from "react";
import { email, logoWhiteText, phone } from "../assets/images";
import { Link, useLocation } from "react-router-dom";
import type { link } from "../utils/interfaces";

const Footer = () => {
  const location = useLocation();

  // for links
  const links: link[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Schedule",
      url: "/schedule",
    },
    {
      name: "Clients",
      url: "/clients",
    },
    {
      name: "Reports",
      url: "/reports",
    },
    {
      name: "Contracts",
      url: "/contracts",
    },
  ];

  // for legal
  const legals: link[] = [
    {
      name: "About App",
      url: "/about-app",
    },
    {
      name: "Terms & Conditions",
      url: "/term-and-conditions",
    },
    {
      name: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      name: "FAQs",
      url: "/faqs",
    },
  ];

  return (
    <footer className="mt-5 mx-2">
      <div className="bg-black xxs:h-full md:h-[362px] w-full rounded-4xl">
        <div className="grid xxs:grid-cols-1 md:grid-cols-3 gap-5 xxs:p-4 md:p-6 place-items-center h-full">
          {/* logo and description at left side */}
          <div className="col-span-1 w-full h-full p-3 bg-gray-850 rounded-2xl">
            <img
              src={logoWhiteText}
              alt={`paw-logo`}
              className="xxs:m-0 md:m-4 lg:m-8 mb-3 xxs:w-[80%] xs:w-[60%] sm:w-[40%] md:w-[80%]"
            />
            <div className="mt-4 text-gray-600 xxs:mx-0 md:mx-4 lg:mx-8 xxs:text-xs xs:text-sm sm:text-base">
              Scale efficiently with every workload. Handle increasing demands
              effortlessly, while ensuring speed and reliability.
            </div>
          </div>

          {/* navigations at left side */}
          <div className="xxs:col-span-1 md:col-span-2 w-full h-full p-0 bg-gray-850 rounded-2xl">
            <div className="grid xxs:grid-cols-2 sm:grid-cols-3 justify-items-center xxs:p-3 md:p-6 h-full">
              {/* links */}
              <div className="">
                <h1 className="text-white xxs:text-lg xs:text-xl sm:text-2xl my-4">
                  Links
                </h1>
                {links.map(({ name, url }) => (
                  <div key={url} className="my-3">
                    <Link
                      to={url}
                      className={`xxs:text-xs xs:text-sm sm:text-base outline-none ${
                        location.pathname === url
                          ? "text-white font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* legals */}
              <div className="">
                <h1 className="text-white xxs:text-lg xs:text-xl sm:text-2xl my-4">
                  Legal
                </h1>
                {legals.map(({ name, url }) => (
                  <div key={url} className="my-3">
                    <Link
                      to={url}
                      className={`xxs:text-xs xs:text-sm sm:text-base outline-none ${
                        location.pathname === url
                          ? "text-white font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="xxs:col-span-2 sm:col-span-1">
                <h1 className="text-white xxs:text-lg xs:text-xl sm:text-2xl my-4">
                  Contact Us
                </h1>
                <div className="my-3 xxs:text-xs xs:text-sm sm:text-base text-gray-600 flex items-center gap-2">
                  <img src={email} alt="email" />
                  Help@email.com
                </div>
                <div className="my-3 xxs:text-xs xs:text-sm sm:text-base text-gray-600 flex items-center gap-2">
                  <img src={phone} alt="phone" />
                  +1 234 456 678
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
