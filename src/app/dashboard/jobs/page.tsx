// app/job/page.tsx
import JobList from '@/app/components/joblist';
import { getJobs } from '../../lib/getJobs';
import { Job } from '../../../../types/job';

export default async function JobPage() {
  const jobs: Job[] = await getJobs();

  return (
    <div>
      <h1>Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
