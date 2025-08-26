import React from "react";
import NavigationTopBar from "../components/NavigationTopBar";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavigationTopBar name="Privacy Policy" onClick={() => navigate(-1)} />

      {/* Content */}
      <div className="py-6 text-xs sm:text-sm lg:text-base">
        <p className="mb-4">
          At Best in Breed Dog Training, we are committed to protecting your
          privacy. Our privacy policy outlines how we collect, use, and
          safeguard your personal information:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Information Collection:</strong> We collect personal details
            such as names, contact information, and dog-related information to
            provide our services effectively.
          </li>
          <li>
            <strong>Use of Information:</strong> Your information is used solely
            for communication regarding training sessions, scheduling, and
            updates.
          </li>
          <li>
            <strong>Data Protection:</strong> We implement security measures to
            protect your information from unauthorized access or disclosure.
          </li>
          <li>
            <strong>Third-Party Sharing:</strong> Your personal information will
            not be shared with third parties without your consent, except as
            required by law.
          </li>
          <li>
            <strong>Cookies:</strong> Our website may use cookies to enhance
            user experience. You can adjust your browser settings to manage
            cookie preferences.
          </li>
          <li>
            <strong>Access & Control:</strong> You have the right to access,
            correct, or delete your personal information by contacting us
            directly.
          </li>
          <li>
            <strong>Policy Updates:</strong> Any changes to this policy will be
            communicated through our website.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
