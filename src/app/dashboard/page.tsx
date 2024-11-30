import React from 'react';
import { auth } from '@clerk/nextjs';
import { Job } from './job';
import { Account } from './account';

export default function Dashboard() {
  const { userId, sessionClaims } = auth();

  // Mock data for demonstration; replace with real API or state management
  const account: Account = {
    id: '1234',
    email: 'example@jobseeker.com',
    wallet_balance: 105.75,
    applied_jobs: [
      {
        job_id: '1',
        employer_name: 'TechCorp',
        job_title: 'Frontend Developer',
        job_employment_type: 'Full-time',
        job_is_remote: true,
        job_location: 'New York, NY',
        job_city: 'New York',
        job_country: 'USA',
        job_posted_human_readable: '2 days ago',
        job_apply_link: 'https://apply.example.com',
        job_min_salary: 60000,
        job_max_salary: 80000,
        job_salary_currency: 'USD',
        job_description: 'Develop and maintain web interfaces...',
        job_benefits: 'Health insurance, 401k match',
        job_required_skills: ['JavaScript', 'React', 'CSS'],
        job_posting_language: 'en',
        job_google_link: 'https://jobsearch.google.com',
        job_offer_expiration_datetime_utc: '2024-12-01T23:59:59Z',
        job_apply_is_direct: true,
        job_salary_period: 'yearly',
      },
    ],
    saved_jobs: [
      {
        job_id: '2',
        employer_name: 'Innovatech',
        job_title: 'Backend Engineer',
        job_employment_type: 'Contract',
        job_is_remote: false,
        job_location: 'San Francisco, CA',
        job_city: 'San Francisco',
        job_country: 'USA',
        job_posted_human_readable: '5 days ago',
        job_apply_link: 'https://apply.innovatech.com',
        job_min_salary: 70000,
        job_max_salary: 95000,
        job_salary_currency: 'USD',
        job_description: 'Build scalable backend systems...',
        job_benefits: 'Remote work flexibility',
        job_required_skills: ['Node.js', 'Express', 'MongoDB'],
        job_posting_language: 'en',
        job_google_link: 'https://jobsearch.google.com',
        job_offer_expiration_datetime_utc: '2024-11-30T23:59:59Z',
        job_apply_is_direct: false,
        job_salary_period: 'yearly',
      },
    ],
    subscription_type: 'Premium',
    created_at: '2023-10-01',
  };

  return (
    <div>
      <header className="bg-white py-6 px-8 shadow">
        <h1 className="text-3xl font-semibold text-gray-800">
          👋 Hello, {sessionClaims?.firstName || 'Job Seeker'}
        </h1>
        <p className="text-gray-500 mt-2">Welcome back to your dashboard!</p>
      </header>

      <main className="px-8 py-12 sm:py-16 md:px-20">
        {userId && (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-blue-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-blue-800">Wallet Balance</h2>
                <p className="text-2xl font-semibold text-gray-700">${account.wallet_balance}</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-green-800">Applied Jobs</h2>
                <p className="text-2xl font-semibold text-gray-700">{account.applied_jobs.length}</p>
              </div>
              <div className="bg-yellow-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-yellow-800">Saved Jobs</h2>
                <p className="text-2xl font-semibold text-gray-700">{account.saved_jobs.length}</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-purple-800">Subscription</h2>
                <p className="text-lg text-gray-700">{account.subscription_type}</p>
              </div>
            </div>

            {/* Applied Jobs Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800">Applied Jobs</h2>
              <div className="mt-6 bg-white shadow rounded-lg p-6">
                {account.applied_jobs.map((job) => (
                  <div
                    key={job.job_id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b last:border-b-0"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{job.job_title}</h3>
                      <p className="text-gray-600">{job.employer_name}</p>
                      <p className="text-sm text-gray-500">{job.job_location}</p>
                      <p className="text-sm text-gray-500">{job.job_posted_human_readable}</p>
                    </div>
                    <a
                      href={job.job_apply_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 sm:mt-0 text-sm text-blue-600 hover:underline"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Saved Jobs Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800">Saved Jobs</h2>
              <div className="mt-6 bg-white shadow rounded-lg p-6">
                {account.saved_jobs.map((job) => (
                  <div
                    key={job.job_id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b last:border-b-0"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{job.job_title}</h3>
                      <p className="text-gray-600">{job.employer_name}</p>
                      <p className="text-sm text-gray-500">{job.job_location}</p>
                      <p className="text-sm text-gray-500">{job.job_posted_human_readable}</p>
                    </div>
                    <a
                      href={job.job_apply_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 sm:mt-0 text-sm text-blue-600 hover:underline"
                    >
                      View Job
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
