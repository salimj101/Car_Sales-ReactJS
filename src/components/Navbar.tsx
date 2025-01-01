import { useState } from "react";

interface NavbarProps {
  cartItems: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-navy-blue">YourCar</span>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="px-3 py-2 text-navy-blue bg-[#741906] rounded text-white"
            >
              Home
            </a>
            <a href="#about" className="px-3 py-2 text-navy-blue">
              About
            </a>
            <a href="#Services" className="px-3 py-2 text-navy-blue">
              Services
            </a>
            <a href="#Cars" className="px-3 py-2 text-navy-blue">
              Cars
            </a>
            <a href="#ContactUs" className="px-3 py-2 text-navy-blue">
              Contact us
            </a>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-navy-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-navy-blue hover:text-navy-blue-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-navy-blue">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-navy-blue">
              About
            </a>
            <a href="#" className="block px-3 py-2 text-navy-blue">
              Services
            </a>
            <a href="#" className="block px-3 py-2 text-navy-blue">
              Cars
            </a>
            <a href="#" className="block px-3 py-2 text-navy-blue">
              Contact us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
