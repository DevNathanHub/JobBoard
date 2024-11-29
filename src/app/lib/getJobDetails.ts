import axios from 'axios';
import { Job } from '../../../types/job';

// Define the async function
export const fetchJobDetails = async (job_id: string, country: string = 'us', extendedDetails: boolean = false): Promise<Job | null> => {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/job-details',
    params: {
      job_id,
      country,
      extended_publisher_details: String(extendedDetails),
    },
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
      'x-rapidapi-host': process.env.RAPIDAPI_HOST || 'jsearch.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log('Job Details:', response.data);
    return response.data as Job;
  } catch (error) {
    console.error('Error fetching job details:', error);
    return null;
  }
};
