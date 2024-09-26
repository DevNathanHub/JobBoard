import { auth } from '@clerk/nextjs';
import React, { Suspense, lazy } from 'react';


export default function Dashboard() {
  const { userId, sessionClaims } = auth();

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      {userId && (
        <>
          <h1 className="text-3xl font-semibold text-black">
            👋 Hello, {sessionClaims?.firstName || 'User'}
          </h1>
         
        </>
      )}
    </div>
  );
}
