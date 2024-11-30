import { Job } from "./job";

export interface Account{
    id: string;
    email: string;
    wallet_balance: number;
    applied_jobs: Job[];
    saved_jobs: Job[];
    subscription_type: string;
    created_at: string;
}