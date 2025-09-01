import { useState } from "react";

interface HeroProps {
  cart: any[];
  onCartClick: () => void;
}

const Hero = ({ cart, onCartClick }: HeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative bg-gray-900 h-screen overflow-hidden">
      {/* Background image and overlay at top level */}
      <img
        src="/resorces/Background.jpg"
        alt="Luxury sports car"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg white bg-opacity-60 z-10" />
      {/* Content (Navbar + Hero) above background */}
      <div className="relative z-20 h-full">
        {/* Navbar */}
        <nav className="bg-transparent shadow-md w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-white">YourCar</span>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="px-3 py-2 text-white bg-[#741906] rounded"
                >
                  Home
                </a>
                <a href="#about" className="px-3 py-2 text-white">
                  About
                </a>
                <a href="#Services" className="px-3 py-2 text-white">
                  Services
                </a>
                <a href="#Cars" className="px-3 py-2 text-white">
                  Cars
                </a>
                <a href="#ContactUs" className="px-3 py-2 text-white">
                  Contact us
                </a>
                {/* Cart Icon */}
                <div className="relative cursor-pointer">
                  <button onClick={onCartClick} className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
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
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cart.length}
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
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
        </nav>
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-end text-white px-12 h-[calc(100vh-4rem)]">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-right drop-shadow-lg">
            Find the perfect car
            <br />
            <span className="text-gray-300">for you at YourCar.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-4 text-right w-[15rem] drop-shadow">
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car.
          </p>
          <div className="flex justify-end w-full">
            <button className="border border-white text-white px-6 py-2 rounded-lg text-base font-bold hover:bg-red-700 hover:border-red-700 transition duration-300 flex items-center gap-2 shadow-lg">
              Discover
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
