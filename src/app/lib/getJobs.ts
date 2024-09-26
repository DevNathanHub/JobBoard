import axios from 'axios';
import { Job } from '../../../types/job';

export async function getJobs(query: string): Promise<Job[]> {
  console.log("query++++++++++++++", query);
  if(!query){
    query = 'java';
  }
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
      'x-rapidapi-key': "482b17a595msh24113b27b19c305p1a9114jsn48d19f1123ed",
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
    },
  };
  // process.env.X_RAPID_API_KEY
  try {
    const response = await axios.request(options);
    return response.data.data as Job[];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch job data');
  }
}
