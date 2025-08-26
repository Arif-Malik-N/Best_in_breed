import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationTopBar from "../components/NavigationTopBar";
import { AiOutlineDown } from "react-icons/ai";

const faqs = [
  {
    question: "What should I bring to a training session?",
    answer:
      "Please bring your dog's leash, collar, and any relevant medical records. Treats and toys are also encouraged to facilitate positive reinforcement.",
  },
  {
    question: "Where do the training sessions take place?",
    answer:
      "Training sessions are conducted at various locations, including our facility and designated public areas. Specific locations will be provided upon booking.",
  },
  {
    question: "What age can my puppy start training?",
    answer:
      "Puppies can begin training as early as 8 weeks old. Early socialization and basic obedience are crucial for development.",
  },
  {
    question: "Can I attend classes if my dog is in season?",
    answer:
      "We recommend rescheduling classes if your female dog is in season, as it may affect her behavior and focus during training.",
  },
  {
    question: "What happens if there is a lockdown or restriction?",
    answer:
      "In the event of a lockdown, we will provide online training sessions to ensure continuity of your dog's education.",
  },
  {
    question: "How can I reschedule a session?",
    answer:
      "Rescheduling can be done through your account on our website, within the permitted number of changes for your booking.",
  },
];

const FAQs = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-gray-800">
      {/* Top Bar */}
      <NavigationTopBar name="FAQs" onClick={() => navigate(-1)} />

      {/* Content */}
      <div className="py-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg py-2 px-4 shadow-sm cursor-pointer text-xs sm:text-sm lg:text-base"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="font-medium">{faq.question}</h2>
                <AiOutlineDown
                  className={`w-4 h-4 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-1 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
