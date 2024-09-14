import React from 'react';

function Rates() {
  return (
    <div className="relative min-h-screen bg-blue-600 overflow-hidden">
      {/* Slanted background */}
      <div className="absolute top-0 left-0 w-full h-full transform rotate-[-40deg] origin-bottom-left bg-blue-500"></div>

      <div className="relative max-w-8xl mx-auto flex flex-col md:flex-row gap-6 pt-24">
        <div className=" p-6  shadow-lg flex-1 z-10 isolate aspect-video w-96 rounded-xl bg-white/80 ring-1 ring-black/5">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">From</h2>
          <p className="text-xl font-semibold text-white mb-4">600 Kenyan Shillings</p>
          <p className="text-gray-700 mb-6">
            Per 1000 words written.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Request a Demo</button>
        </div>
        <div className="bg-black p-6 rounded-lg shadow-lg flex-1 z-10 bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <h2 className="text-2xl font-bold  text-gold  mb-4">Average Monthly Earnings</h2>
          <p className="text-xl font-semibold  text-white mb-4">Kshs. 35,000 Kenyan Shillings</p>
          <ul className="text-white mb-6 space-y-2">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Consistent Work
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Support Available
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Request a Demo</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 z-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Top Monthly Earnings</h2>
          <p className="text-xl font-semibold text-blue-500 mb-4">Kshs. 100,000 Kenyan Shillings</p>
          <ul className="text-black mb-6 space-y-2">
            <li className="flex items-center">
              <svg className="w-6 h-6  mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              High Demand Projects
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Maximum Earnings
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Request a Demo</button>
        </div>
      </div>
    </div>
  );
}

export default Rates;
