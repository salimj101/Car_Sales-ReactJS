const About = () => {
  return (
    <div className="bg-white py-16 gap-40 flex flex-row-reverse" id="about">
      <img
        src="/resorces/Group 1127.png"
        alt="Luxury sports car"
        className="max-h-[542px] object-contain"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="mt-10">
          <p className="text-lg text-gray-700 mb-4">
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We have an extensive selection of high-end vehicles, ranging from
            sports cars to SUVs, all of which are maintained to the highest
            standards of quality and safety.
          </p>
          <p className="text-lg text-gray-700">
            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
