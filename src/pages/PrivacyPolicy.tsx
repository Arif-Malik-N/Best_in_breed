import React from "react";
import NavigationTopBar from "../components/NavigationTopBar";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <NavigationTopBar name="Privacy Policy" onClick={() => navigate(-1)} />
  );
};

export default PrivacyPolicy;
