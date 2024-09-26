// app/job/page.tsx
import JobList from '@/app/components/joblist';

export default async function JobPage() {
 
  return (
    <div>
      <h1>Job Listings</h1>
      <JobList  />
    </div>
  );
}
