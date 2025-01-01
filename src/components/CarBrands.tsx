import React from "react";

const CarBrands: React.FC = () => {
  const brands = [
    {
      name: "BMW",
      logo: "/resorces/BMW.png",
    },
    {
      name: "Volvo",
      logo: "/resorces/Volvo_logo1 1.png",
    },
    {
      name: "Suzuki",
      logo: "/resorces/layer1.png",
    },
    {
      name: "Toyota",
      logo: "/resorces/Toyota_EU 1.png",
    },
    {
      name: "Nissan",
      logo: "/resorces/Nissan_2020_logo.png",
    },
    {
      name: "Mercedes-Benz",
      logo: "/resorces/Mercedes-Benz_free_logo.png",
    },
    {
      name: "Subaru",
      logo: "/resorces/image 262.png",
    },
    {
      name: "Mitsubishi",
      logo: "/resorces/Vector (1).png",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4" id="car-brands">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="w-24 h-24 flex items-center justify-center transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarBrands;
