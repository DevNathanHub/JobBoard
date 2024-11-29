import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Header from "./components/header";
import AboutPage from "./components/aboutus";
import Contact from "./components/contact";
import Faqs from "./components/faqs";
import Rates from "./components/rates";

export default function Home() {
  return (
    <main className="">
      <article className="grid relative min-h-screen  overflow-hidden">
        <div className="px-8 py-20 md:px-20 lg:py-48 text-center">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient md:leading-[1.5em]">
            Writers Hub - Join Us Today
          </h1>
          <p className="mt-2 text-lg">
            A simple writers app simple job application process, Secure credentials by Clerk.
          </p>

          <SignedIn>
            <div className="mt-8 inline-block">
              <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Go to Dashboard
              </Link>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="mt-8 inline-block">
              <SignInButton afterSignInUrl="/dashboard">
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Sign in</button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </article>
      <article id="rates" className="grid">
        <Rates/>
      </article>
      <article id="about" className="grid">
        <AboutPage/>
      </article>
      <article id="contact" className="grid">
        <Contact/>
      </article>
      <article id="faqs" className="grid relative min-h-screen  overflow-hidden">
        <Faqs/>
      </article>
    </main>
  );
}
