import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import {
  Home,
  Schedule,
  Clients,
  AboutUs,
  Contracts,
  Profile,
  SignIn,
  TermsAndConditions,
  PrivacyPolicy,
  FAQs,
  Notifications,
  Reports,
  Review,
} from "../pages";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { AppRoute } from "../utils/interfaces";
import { useAppSelector } from "../store/store";
// import { io } from "socket.io-client";
// import { baseURL } from "../apiRoutes/apiRoutes";

const Routing = React.memo(() => {
  // const socket = io(baseURL);
  const token = useAppSelector((state) => state.authSlices?.token);

  const routes: AppRoute[] = [
    { path: "/", component: <Home /> },
    { path: "/schedule", component: <Schedule /> },
    { path: "/clients", component: <Clients /> },
    { path: "/contracts", component: <Contracts /> },
    { path: "/about-us", component: <AboutUs /> },
    { path: "/review", component: <Review /> },
    { path: "/profile", component: <Profile /> },
    { path: "/term-and-conditions", component: <TermsAndConditions /> },
    { path: "/privacy-policy", component: <PrivacyPolicy /> },
    { path: "/faqs", component: <FAQs /> },
    { path: "/reports", component: <Reports /> },
    { path: "/notification", component: <Notifications /> },
  ];

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to socket server:", socket.id);
  //   });

  //   socket.on("notification", (data) => {
  //     console.log("Received notification:", data);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <div>
      {token ? (
        <div className="bg-brand-grayBg min-h-screen flex flex-col">
          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="flex-grow pt-10 sm:p-4 xxs:pt-[90px] xs:pt-[100px] sm:pt-[130px] lg:pt-[150px] xl:pt-[200px] xxs:pb-[20px] sm:pb-[60px] xxs:px-[8px] sm:px-[30px] lg:px-[60px] xl:px-[152px]">
            <Routes>
              {routes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
              ))}
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
});

export default Routing;
