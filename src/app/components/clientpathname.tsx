"use client"; // This directive makes this file a client component

import RootLayout from "../layout";

export default function ClientPathname({ children }: { children: React.ReactNode }) {
  
  
  return <RootLayout>{children}</RootLayout>;
}
