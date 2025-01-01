import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Car selling",
      description:
        "We offer a wide selection of premium vehicles for sale, catering to various preferences and budgets.",
      image: "/resorces/image1.png",
    },
    {
      title: "Car rental",
      description:
        "Experience luxury with our short-term and long-term car rental services.",
      image: "/resorces/Group.png",
    },
    {
      title: "Car sales",
      description:
        "Our expert team assists you in finding the perfect car that meets your needs and desires.",
      image: "/resorces/Vector.png",
    },
  ];

  return (
    <div
      className="bg-gray-100  py-36 "
      id="Services"
      style={{ backgroundImage: "url('/resorces/CTA BG.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative top-14">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-lg flex flex-col items-center shadow-md p-6 transition duration-300 hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
