import Link from "next/link";

const Header: React.FC = () => {
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
      </div>
    </header>
  );
};

export default Header;
