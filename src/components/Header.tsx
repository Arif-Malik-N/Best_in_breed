import React, { useState } from "react";
import { logo } from "../assets/images";
import { Link, useLocation } from "react-router-dom";
import ProfileAndNotification from "./ProfileAndNotification";

interface link {
  name: string;
  url: string;
  className: string;
}

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links: link[] = [
    { name: "Home", url: "/", className: "" },
    { name: "Schedule", url: "/schedule", className: "" },
    { name: "Clients", url: "/clients", className: "" },
    { name: "Contracts", url: "/contracts", className: "" },
    { name: "About us", url: "/about-us", className: "" },
    { name: "Profile", url: "/profile", className: "xxs:block sm:hidden" },
    {
      name: "Notification",
      url: "/notification",
      className: "xxs:block sm:hidden",
    },
  ];

  return (
    <header
      className={`fixed top-0 xxs:py-[20px] lg:pt-[70px] xxs:px-[15px] sm:px-[30px] lg:px-[152px] w-full bg-white z-50 ${
        menuOpen ? "border-b-2 border-gray-400 shadow-xl" : "md:border-none"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="xxs:w-[50%] xs:w-[40%] sm:w-[30%] lg:w-[22%] xl:w-[20%]"
        />
        <div className="flex items-center xxs:gap-2 xs:gap-4 md:hidden">
          {/* profile and notification  */}
          <ProfileAndNotification className={"xxs:hidden sm:block md:hidden"} />

          {/* Hamburger (three line menu)  */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden focus:outline-none"
          >
            <div className="xxs:space-y-0.5 sm:space-y-1">
              <span className="block w-5 h-0.5 bg-gray-800"></span>
              <span className="block w-5 h-0.5 bg-gray-800"></span>
              <span className="block w-5 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>

        {/* Navigation Links For Desktop */}
        <nav className="hidden md:flex md:gap-4 lg:gap-5 xl:gap-7 2xl:gap-12 items-center">
          {links.map(({ name, url, className }) => (
            <Link
              key={url}
              to={url}
              className={`${className} text-sm lg:text-base transition-colors ${
                location.pathname === url ? "text-brand-blue" : "text-black"
              }`}
            >
              {name}
            </Link>
          ))}

          {/* profile and notification  */}
          <ProfileAndNotification className={"hidden md:block"} />
        </nav>
      </div>

      {/* Dropdown Menu (Mobile) */}
      <div
        className={`md:hidden transform transition-all duration-500 ease-in-out origin-top ${
          menuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {menuOpen && (
          <div className="border-t border-gray-200 mt-3 pt-3 xxs:space-y-3 sm:space-y-3">
            {links.map(({ name, url, className }) => (
              <Link
                key={url}
                to={url}
                className={`${className} block xxs:text-xs sm:text-sm text-center bg-white border-b border-gray-200 xxs:pb-1 sm:pb-2 ${
                  location.pathname === url
                    ? "text-brand-blue font-semibold"
                    : "text-black"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
