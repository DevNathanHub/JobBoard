import { auth } from '@clerk/nextjs';
import React from 'react';

export default function Dashboard() {
  const { userId, sessionClaims } = auth();

  return (
    <div >
      <header className="bg-white py-6 px-8">
        <h1 className="text-3xl font-semibold text-black">
          👋 Hello, {sessionClaims?.firstName || 'Job Seeker'}
        </h1>
      </header>

      <main className="px-8 py-12 sm:py-16 md:px-20">
        {userId && (
          <>
            {/* Section with stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800">Total Applications</h2>
                <p className="text-3xl font-bold text-indigo-600 mt-4">245</p>
              </div>

              <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800">Pending Interviews</h2>
                <p className="text-3xl font-bold text-indigo-600 mt-4">12</p>
              </div>

              <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800">Job Offers</h2>
                <p className="text-3xl font-bold text-indigo-600 mt-4">5</p>
              </div>
            </div>

            {/* Recent Activity */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg text-gray-900">Interview with XYZ Corp</div>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                  </li>
                  <li className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-lg text-gray-900">Application submitted to ABC Ltd</div>
                      <span className="text-sm text-gray-500">1 week ago</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
