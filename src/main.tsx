// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persister, store } from "./store/store.ts";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <StrictMode> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          transition={Slide}
          // toastClassName="whitespace-nowrap text-ellipsis"
        />
        <App />
      </PersistGate>
    </Provider>
    {/* </StrictMode> */}
  </BrowserRouter>
);
