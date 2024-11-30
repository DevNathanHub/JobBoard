import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Job } from '../../../types/job';

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const router = useRouter();

  return (
    <li className="p-4 hover:shadow-lg transition-shadow duration-300 border border-blue-500 rounded-lg mr-4">
      <div className="flex justify-between items-center mb-2">
        <Link href={`/dashboard/jobs/${job.job_id}`}>
          <h3 className="text-lg font-semibold">{job.job_title || 'No title available'}</h3>
        </Link>
        <p className="text-sm text-gray-500">{job.job_country || 'No location available'}</p>
      </div>
      <p className="text-gray-700">{job.employer_name || 'No company name available'}</p>
      <p className="text-gray-500">
        {job.job_description?.substring(0, 100) || 'No description available'}...
      </p>
      <button
        type="button"
        onClick={() => router.push(`/dashboard/jobs/${job.job_id}`)}
        className="text-blue-500 hover:underline"
      >
        View Job
      </button>
    </li>
  );
};

export default JobItem;
