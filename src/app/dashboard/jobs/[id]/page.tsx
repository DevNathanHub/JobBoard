'use client';

import { fetchJobDetails } from '@/app/lib/getJobDetails';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const JobPage: React.FC = () => {
  const params = useParams();
  console.log('Params:', params);

  // Safely handle `params.id` and ensure it is sliced and converted to a string
  const jobId = Array.isArray(params.id)
    ? params.id.join('').slice(0, 22)
    : params.id?.slice(0, 22) || '';
  console.log('Job ID:', jobId);

  const [jobDetails, setJobDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (jobId) fetchJob(jobId);
  }, [jobId]);

  const fetchJob = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchJobDetails(id);
      if (response?.status === 'OK' && response?.data?.length > 0) {
        setJobDetails(response.data[0]);
      } else {
        setError('No job details found.');
      }
    } catch (err) {
      setError('Failed to fetch job details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-2">
      <div className=" mx-auto bg-white  p-2">
        {isLoading && <p className="text-gray-600">Loading job details...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {jobDetails ? (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{jobDetails.job_title}</h1>
            <div className="mb-6">
              <p className="text-gray-600">
                <strong>Employer:</strong> {jobDetails.employer_name || 'N/A'}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {jobDetails.job_location || 'N/A'}
              </p>
              <p className="text-gray-600">
                <strong>Posted:</strong> {jobDetails.job_posted_human_readable || 'N/A'}
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{jobDetails.job_description || 'N/A'}</p>
            </div>
            {jobDetails.employer_website && (
              <p className="text-blue-500 underline">
                <a href={jobDetails.employer_website} target="_blank" rel="noopener noreferrer">
                  Visit Employer Website
                </a>
              </p>
            )}
            {jobDetails.job_apply_link && (
              <div className="mt-6">
                <a
                  href={jobDetails.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Apply Now
                </a>
              </div>
            )}
          </div>
        ) : (
          !isLoading && <p className="text-gray-600">No job details available.</p>
        )}
      </div>
    </div>
  );
};

export default JobPage;
