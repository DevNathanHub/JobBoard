// app/layouts/Layout.tsx or app/layouts/Layout.jsx

import JobList from '@/app/components/joblist';
import Head from 'next/head';

export const metadata = {
  metadataBase: new URL('http://localhost:3000/dashboard/jobs/'),
  title: 'Jobs',
  description: 'Job Listings ',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Additional head content */}
      </Head>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
        <div className="flex-none w-1/3">
          <JobList />
        </div>
        <div className="flex-grow overflow-y-auto p-2 ml-4">{children}</div>
      </div>
    </>
  );
}
