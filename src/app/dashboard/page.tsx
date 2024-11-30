import React from 'react';
import { auth } from '@clerk/nextjs';
import { Job } from '../../../types/job';
import { Account } from '../../../types/account';

export default function Dashboard() {
  const { userId, sessionClaims } = auth();

  // Mock data for demonstration; replace with real API or state management
  const account: Account = {
    id: '1234',
    email: 'example@jobseeker.com',
    wallet_balance: 105.75,
    applied_jobs: [
      { id: '1', title: 'Frontend Developer', company: 'TechCorp', status: 'Applied' },
      { id: '2', title: 'Backend Engineer', company: 'Innovatech', status: 'Interviewing' },
    ],
    saved_jobs: [
      { id: '3', title: 'UI/UX Designer', company: 'Creative Studios', status: 'Saved' },
    ],
    subscription_type: 'Premium',
    created_at: '2023-10-01',
  };

  return (
    <div>
      <header className="bg-white py-6 px-8 shadow">
        <h1 className="text-3xl font-semibold text-gray-800">
          👋 Hello, {sessionClaims?.firstName || 'User'}
        </h1>
        <p className="text-gray-500 mt-2">Welcome back to your dashboard!</p>
      </header>

      <main className="px-8 py-12 sm:py-16 md:px-20">
        {userId && (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border border-blue-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-blue-800">Wallet Balance</h2>
                <p className="text-2xl font-semibold text-gray-700">${account.wallet_balance}</p>
              </div>
              <div className="border border-green-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-green-800">Applied Jobs</h2>
                <p className="text-2xl font-semibold text-gray-700">{account.applied_jobs.length}</p>
              </div>
              <div className="border border-yellow-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-yellow-800">Saved Jobs</h2>
                <p className="text-2xl font-semibold text-gray-700">{account.saved_jobs.length}</p>
              </div>
              <div className="border border-purple-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-purple-800">Subscription</h2>
                <p className="text-lg text-gray-700">{account.subscription_type}</p>
              </div>
            </div>

            {/* Recent Activity Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800">Recent Activity</h2>
              <div className="mt-6 bg-white shadow rounded-lg p-6">
                {account.applied_jobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex justify-between items-center py-4 border-b last:border-b-0"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded ${
                        job.status === 'Applied'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Saved Jobs Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800">Saved Jobs</h2>
              <div className="mt-6 bg-white shadow rounded-lg p-6">
                {account.saved_jobs.length > 0 ? (
                  account.saved_jobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex justify-between items-center py-4 border-b last:border-b-0"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                      <span className="text-sm font-medium px-3 py-1 rounded bg-gray-100 text-gray-800">
                        {job.status}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No saved jobs yet.</p>
                )}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
