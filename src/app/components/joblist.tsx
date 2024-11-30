'use client'
import { useState, useEffect, useCallback } from 'react';
import { Job } from '../../../types/job';
import { getJobs } from '../lib/getJobs';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/navigation';
import SearchForm from './SearchForm';
import JobItem from './JobItem';

export default function JobList() {
  const [query, setQuery] = useState<string>('Writing Jobs Remote, New York, USA');
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fetchJobs = useCallback(
    debounce(async (searchQuery: string) => {
      setLoading(true);
      setError(null);

      try {
        const response = await getJobs(searchQuery);
        if (!response) throw new Error('Failed to fetch jobs');
        setDisplayedJobs(Array.isArray(response) ? response : []);
      } catch (err) {
        console.error('Failed to fetch jobs', err);
        setError('Failed to fetch jobs. Please try again.');
        setDisplayedJobs([]);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    if (query.trim()) {
      fetchJobs(query);
    }
  }, [query, fetchJobs]);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchJobs(query);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="max-h-[70vh] overflow-y-auto  ">
      <SearchForm 
        query={query} 
        handleSearchSubmit={handleSearchSubmit} 
        handleQueryChange={handleQueryChange} 
      />

      {loading && <p className="text-center text-blue-500">Loading jobs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && displayedJobs.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No jobs found.</p>
      )}

      <ul className="space-y-4 ">
        {displayedJobs.map((job) => (
          <JobItem key={job.job_id} job={job} />
        ))}
      </ul>
    </div>
  );
}
