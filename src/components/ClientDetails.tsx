import React, { useEffect } from "react";
import NavigationTopBar from "./NavigationTopBar";
import type { clientIntakeProp } from "../utils/interfaces";

const ClientDetails: React.FC<clientIntakeProp> = ({ setRenderPage }) => {
  const defaultAllState = () => {
    setRenderPage("home");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return (
    <div className="bg-white rounded-xl p-4">
      {/* Top Bar */}
      <NavigationTopBar name="Details" onClick={defaultAllState} />
    </div>
  );
};

export default ClientDetails;
