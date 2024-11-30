import { Job } from "./job";

export interface FetchJobDetailsResponse {
    status: string;
    data: Job[] | null;
  }