// app/layouts/Layout.tsx or app/layouts/Layout.jsx

import SideNav from '../UI/Dashboard/sidenav';
import Head from 'next/head';

export const metadata = {
  metadataBase: new URL('http://localhost:3000/dashboard'),
  title: 'Dashboard Layout Title',
  description: 'Description of the dashboard layout',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Additional head content */}
      </Head>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-36">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </>
  );
}
