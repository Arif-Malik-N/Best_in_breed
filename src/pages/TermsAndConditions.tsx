import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationTopBar from "../components/NavigationTopBar";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Navigation */}
      <NavigationTopBar
        name="Terms & Conditions"
        onClick={() => navigate(-1)}
      />

      {/* Content */}
      <div className="py-6 text-xs sm:text-sm lg:text-base">
        <p className="mb-4">
          Best in Breed Dog Training provides comprehensive training services
          for dogs of all breeds and sizes. By utilizing our services, you agree
          to the following terms:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Eligibility:</strong> Clients must be at least 18 years old
            and legally capable of entering into a contract.
          </li>
          <li>
            <strong>Training Services:</strong> We offer various training
            programs, including obedience, behavior modification, and
            specialized training.
          </li>
          <li>
            <strong>Payments & Refunds:</strong> A deposit is required to secure
            a spot in a training program. Full payment is due before the
            commencement of services. Refunds are not provided once services
            have begun.
          </li>
          <li>
            <strong>Liability:</strong> While we take precautions to ensure
            safety, clients acknowledge that training involves inherent risks.
            Clients agree to hold Best in Breed Dog Training harmless for any
            injuries or damages that may occur.
          </li>
          <li>
            <strong>Conduct:</strong> Clients are expected to follow all
            instructions provided by trainers and to maintain control of their
            dogs during sessions.
          </li>
          <li>
            <strong>Media Release:</strong> By participating in our programs,
            clients grant permission for photos and videos of their dogs to be
            used for promotional purposes.
          </li>
          <li>
            <strong>Modifications:</strong> Best in Breed Dog Training reserves
            the right to modify these terms at any time. Continued use of
            services constitutes acceptance of the updated terms.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
