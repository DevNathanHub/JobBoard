'use client';

import { useRouter } from "next/navigation";

const Header: React.FC = () => {

  const router = useRouter();
  const navigateToHelp = () => {
    router.push('/dashboard/help');
  };
  return (
    <header className="text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8">
        {/* <nav>
          <ul className="flex space-x-6 sm:space-x-8">
            <li>
              <Link href="/" className="hover:text-blue-800 transition duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link href="#rates" className="hover:text-blue-400 transition duration-300 ease-in-out">
                Rates
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-400 transition duration-300 ease-in-out">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-400 transition duration-300 ease-in-out">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#faqs" className="hover:text-blue-400 transition duration-300 ease-in-out">
                FAQs
              </Link>
            </li>
          </ul>
        </nav> */}
          <button onClick={navigateToHelp} aria-label="Help" className="w-12 h-12 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 fixed right-0 bottom-20">
            ? 
          </button>

      </div>

    </header>
  );
};

export default Header;
