import React, { type JSX } from "react";
import { Route, Routes } from "react-router";
import { Clients, Home } from "../pages";
import SignIn from "../pages/SignIn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../pages/Profile";

interface Route {
  path: string;
  component: JSX.Element;
}

const Routing = React.memo(() => {
  const routes: Route[] = [
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
      component: <Clients />,
    },
    {
      path: "/about-us",
      component: <Clients />,
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
          <div className="min-h-screen flex flex-col">
            <div className=""></div>
            {/* top header */}
            <Header />

            {/* main content */}
            <main className="flex-grow pt-10 p-4 xxs:pt-[90px] xs:pt-[100px] sm:pt-[130px] lg:pt-[170px] pb-[40px] xxs:px-[15px] sm:px-[30px] lg:px-[152px]">
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
