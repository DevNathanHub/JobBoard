import React from 'react';

function Rates() {
  return (
    <div className="relative min-h-screen bg-blue-600 overflow-hidden px-4">
      {/* Slanted background */}
      <div className="absolute top-0 left-0 w-full h-full transform rotate-[-40deg] origin-bottom-left bg-blue-500"></div>

      <div className="relative max-w-8xl mx-auto flex flex-col md:flex-row gap-6 pt-24">
        {/* Basic Tier */}
        <div className="p-6 shadow-lg flex-1 z-10 isolate aspect-video w-96 rounded-xl bg-white/80 ring-1 ring-black/5">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Basic Tier</h2>
          <p className="text-xl font-semibold text-blue-900 mb-4">Ksh 1,000 per month</p>
          <p className="text-gray-700 mb-6">
            Apply for up to <strong>5 jobs</strong> per month.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Subscribe Now
          </button>
        </div>

        {/* Mid Tier */}
        <div className="bg-black p-6 rounded-lg shadow-lg flex-1 z-10 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Mid Tier</h2>
          <p className="text-xl font-semibold text-yellow-400 mb-4">Ksh 2,500 per month</p>
          <p className="text-gray-300 mb-6">
            Apply for up to <strong>20 jobs</strong> per month, with personalized support from our team.
          </p>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-yellow-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Personalized Job Matching
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-yellow-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Dedicated Support
            </li>
          </ul>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500">
            Subscribe Now
          </button>
        </div>

        {/* Premium Tier */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 z-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Premium Tier</h2>
          <p className="text-xl font-semibold text-blue-500 mb-4">Ksh 5,000 per month</p>
          <p className="text-gray-700 mb-6">
            Enjoy a <strong>guaranteed job placement</strong> or a full refund if unsuccessful.
          </p>
          <ul className="text-black mb-6 space-y-2">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-900 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Priority Applications
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-900 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Guaranteed Placement or Refund
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rates;
