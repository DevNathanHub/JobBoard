// lib/getJobs.ts
import axios from 'axios';
import { Job } from '../../../types/job';

export async function getJobs(query = 'Node.js developer in New-York, USA'): Promise<Job[]> {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query,
      page: '1',
      num_pages: '1',
      date_posted: 'all',
    },
    headers: {
      'x-rapidapi-key': '482b17a595msh24113b27b19c305p1a9114jsn48d19f1123ed',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data as Job[];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch job data');
  }
}
