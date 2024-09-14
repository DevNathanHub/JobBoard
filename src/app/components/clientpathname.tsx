"use client"; // This directive makes this file a client component

import { usePathname } from "next/navigation";
import RootLayout from "../layout";

export default function ClientPathname({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return <RootLayout pathname={pathname}>{children}</RootLayout>;
}
