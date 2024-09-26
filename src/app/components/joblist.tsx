'use client';

import { useState } from 'react';
import { Job } from '../../../types/job';
import { getJobs } from '../lib/getJobs';
// import FilterComponent from './filter';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>(jobs || []);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getJobs(searchQuery);

      if (!response) throw new Error('Failed to fetch jobs');
      
      const data: Job[] = response;
      setDisplayedJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch jobs', err);
      setError('Failed to fetch jobs. Please try again.');
      setDisplayedJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchJobs(query); // Use placeholder if query is empty
  };

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for jobs (e.g., Node.js developer in New-York, USA)"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>
      {/* <FilterComponent/> */}

     
      {/* Display Loading Indicator */}
      {loading && <p className="text-center text-blue-500">Loading jobs...</p>}

      {/* Display Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display Jobs */}
      {displayedJobs.length === 0 && !loading && !error && (
        <p className="text-gray-500 text-center mt-4">No jobs found.</p>
      )}

      <ul className="space-y-4">
        {displayedJobs.map((job, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{job.job_title || 'No title available'}</h3>
              <p className="text-sm text-gray-500">{job.job_country || 'No location available'}</p>
            </div>
            <p className="text-gray-700">{job.employer_name || 'No company name available'}</p>
            <p className="text-gray-500">{job.job_description?.substring(0, 100) || 'No description available'}...</p>
            <a
              href={job.job_google_link}
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Job
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
