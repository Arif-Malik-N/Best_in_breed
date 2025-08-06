import React, { type JSX } from "react";
import { Route, Routes } from "react-router";
import { Clients, Home } from "../pages";
import SignIn from "../pages/SignIn";

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
      path: "/clients",
      component: <Clients />,
    },
  ];

  const token: boolean = false; // Temporarily set to false for testing

  return (
    <div>
      {token ? (
        <Routes>
          {routes.map(({ path, component }) => (
            <>
              {/* // <React.Fragment index={path}> */}
              <Route path={path} element={component} />
              {/* </React.Fragment> */}
            </>
          ))}
        </Routes>
      ) : (
        <SignIn />
      )}
    </div>
  );
});

export default Routing;
