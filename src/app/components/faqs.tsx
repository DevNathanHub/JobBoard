"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for dropdown

const faqData = [
  {
    question: "Is Writer’s Thrive the best fit for me?",
    answer:
      "If you are passionate about writing, looking for a way to monetize that passion, and need a flexible work schedule, then yes, Writer’s Thrive is the platform for you.",
  },
  {
    question: "What is required to join Writer’s Thrive?",
    answer:
      "All you need is a computer, access to a stable internet, and to have successfully completed the onboarding process. Of course, you also need the willingness to work and openness to learn and grow, to succeed on the platform.",
  },
  {
    question: "How long do I have to complete the Writing tests? Will I be paid for it?",
    answer:
      "You have 96 hours (4 days) to complete and submit all three writing tests. You will not be paid for the writing test as they are part of the onboarding process to assess your writing skill and fit for the platform.",
  },
  {
    question: "What if I fail the writing tests, can I take them again?",
    answer:
      "Yes, you can take the test again, you, however, have to wait for 90 days before your next attempt. Kindly use the same account to take the test again, avoid creating multiple accounts as this would lead to you being banned from the platform.",
  },
  {
    question: "What makes Writer’s Thrive different from other online job platforms?",
    answer:
      "Writer's Thrive assures you of constant jobs, guaranteed weekly payment with no hidden or extra fees or charges. There is also a great support team to help and guide you whenever you need assistance. Unlike other platforms, Writer's Thrive aims to give you as much freedom as possible over your work, schedule, and earnings.",
  },
  {
    question: "Do I need to come to an office location?",
    answer:
      "No, once you have successfully completed the onboarding process you will only need to log in to your account to access the jobs and start working. In case there is any revision for the work you’ve done, the feedback will be sent to you remotely and you can always revise the work and send it back. No need to leave the comfort of your home.",
  },
];

const FaqItem = ({
  question,
  answer,
  onClick,
  isOpen,
}: {
  question: string;
  answer: string;
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <div className="border border-gray-300 p-2 rounded-lg  bg-white hover:shadow-md transition-shadow duration-200">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <h2 className="text-md font-semibold text-gray-800">{question}</h2>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </div>
      {isOpen && (
        <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 sm:py-16 md:px-20">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
