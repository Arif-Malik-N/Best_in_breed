import React from "react";
import { Route, Routes } from "react-router";
import { Home, Clients, Contracts, AboutUs, Profile, SignIn } from "../pages";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { AppRoute } from "../utils/interfaces";

const Routing = React.memo(() => {
  const routes: AppRoute[] = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/schedule",
      component: <Clients />,
    },
    {
      path: "/clients",
      component: <Clients />,
    },
    {
      path: "/contracts",
      component: <Contracts />,
    },
    {
      path: "/about-us",
      component: <AboutUs />,
    },
    {
      path: "/profile",
      component: <Profile />,
    },
  ];

  const token: boolean = true; // Temporarily set for testing

  return (
    <div>
      {token ? (
        <div>
          <div className="bg-brand-grayBg min-h-screen flex flex-col">
            <div className=""></div>
            {/* top header */}
            <Header />

            {/* main content */}
            <main className="flex-grow pt-10 sm:p-4 xxs:pt-[90px] xs:pt-[100px] sm:pt-[130px] lg:pt-[150px] xl:pt-[200px] xxs:pb-[20px] sm:pb-[60px] xxs:px-[8px] sm:px-[30px] lg:px-[60px] xl:px-[152px]">
              <Routes>
                {routes.map(({ path, component }) => (
                  <Route path={path} element={component} />
                ))}
              </Routes>
            </main>

            {/* below footer */}
            <Footer />
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
});

export default Routing;
