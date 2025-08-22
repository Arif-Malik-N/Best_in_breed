import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationTopBar from "../components/NavigationTopBar";

const FAQs = () => {
  const navigate = useNavigate();
  return <NavigationTopBar name="FAQs" onClick={() => navigate(-1)} />;
};

export default FAQs;
