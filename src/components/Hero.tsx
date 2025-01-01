const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen">
      <img
        src="/resorces/Background.jpg"
        alt="Luxury sports car"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 w-full text-end mr-16">
          Find the perfect car
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 w-full text-end mr-16">
          for you at YourCar.
        </h1>
        <p className="text-xl md:text-2xl mb-8 w-full text-end mr-16">
          We offer a wide range of
        </p>
        <p className="text-xl md:text-2xl mb-8 w-full text-end mr-16">
          luxury vehicles to cater to your{" "}
        </p>
        <p className="text-xl md:text-2xl mb-8 w-full text-end mr-16">
          needs and budget.Visit
        </p>
        <p className="text-xl md:text-2xl mb-8 w-full text-end mr-16">
          us today and drive away
        </p>
        <p className="text-xl md:text-2xl mb-8 w-full text-end mr-16">
          with your dream car!
        </p>
        <div className="w-full flex justify-end mr-16">
          <button className="border text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
