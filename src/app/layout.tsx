

import {
  ClerkProvider,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Writers Hub - Get Writing Job, Quickly",
  description: "A writers app for job application Secured by Clerk.",
  openGraph: { images: ["/og.png"] },
};

interface RootLayoutProps {
  children: React.ReactNode; // Only include children
}

export default function RootLayout({ children }: RootLayoutProps) {
  
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} min-h-screen flex flex-col  overflow-y-auto w-full`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          
          <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/">
                <Image
                  src="/writer.png"
                  alt="Writers Hub Logo"
                  width={102}
                  height={32}
                  priority
                />
              </Link>
            </div>
            <div className="flex-grow flex justify-center">
              {/* Header will handle pathname internally */}
              <Header />
            </div>
            <div>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </header>

          <main className="grow overflow-y-auto">{children}</main>

          <footer className="flex items-center bg-blue-500 w-full h-10 gap-1 px-8 font-medium border-t md:px-20 fixed bottom-0">
            <nav className="flex justify-end grow sm:gap-2">
              <a
                className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
                href="https://clerk.com/docs"
              >
                <div className="m-auto">
                  <Docs />
                </div>
                <span className="hidden sm:inline"> Visit Clerk Docs</span>
              </a>
              <a
                className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
                href="https://github.com/clerk"
              >
                <div className="m-auto">
                  <Github />
                </div>
              </a>
              <a
                className="flex flex-col justify-center p-2 hover:underline"
                href="https://twitter.com/ClerkDev"
              >
                <Twitter />
              </a>
              <a
                className="flex flex-col justify-center p-2 hover:underline"
                href="https://discord.com/invite/b5rXHjAg7A"
              >
                <Discord />
              </a>
            
            </nav>
          </footer>
        </body>
      </ClerkProvider>
    </html>
  );
}

// SVG Icon Components
function Docs() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 9l10.5 10.5m0-21L9 21"
      />
    </svg>
  );
}

function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19.5v-6m-1.5 0H9m1.5 0V6m0 13.5h3m-3-13.5h3m0 0a1.5 1.5 0 00-1.5-1.5m0 0A1.5 1.5 0 0012 4.5"
      />
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 10h.01M12 10h.01M16 10h.01M12 14h.01M12 18h.01M15 18h.01M18 18h.01"
      />
    </svg>
  );
}

function Discord() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.5 3.75v15.5M19.5 3.75v15.5"
      />
    </svg>
  );
}
