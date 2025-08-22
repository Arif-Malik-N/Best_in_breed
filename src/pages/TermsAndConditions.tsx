import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationTopBar from "../components/NavigationTopBar";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  return (
    <NavigationTopBar
      name="Terms And Conditions"
      onClick={() => navigate(-1)}
    />
  );
};

export default TermsAndConditions;
