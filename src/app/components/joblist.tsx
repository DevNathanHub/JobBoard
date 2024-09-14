'use client';

import { useState } from 'react';
import { Job } from '../../../types/job';
import JobFilters from './filters';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>(jobs || []);
  const [query, setQuery] = useState<string>('');

  const fetchJobs = async (searchQuery: string) => {
    try {
      const response = await fetch(`/api/job?query=${searchQuery}`);
      const data: Job[] = await response.json();
      setDisplayedJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch jobs', error);
      setDisplayedJobs([]);
    }
  };

  const handleFilterChange = (searchQuery: string) => {
    setQuery(searchQuery);
    fetchJobs(searchQuery);
  };

  if (displayedJobs.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No jobs found.</p>;
  }

  return (
    <div className="space-y-6">
      <JobFilters onFilterChange={handleFilterChange} />
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
