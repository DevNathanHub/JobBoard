// app/api/job/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getJobs } from '@/app/lib/getJobs';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query') || 'Writing';
  try {
    const jobs = await getJobs(query);
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}
