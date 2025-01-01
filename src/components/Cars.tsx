import { useState } from "react";

interface CarsProps {
  setCartItems: React.Dispatch<React.SetStateAction<number>>;
}

const Cars: React.FC<CarsProps> = ({ setCartItems }) => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "SUV",
      model: "Mercedes M class",
      quantity: 0,
      image: "/resorces/car1.png",
    },
    {
      id: 2,
      name: "BUSINESS CLASS",
      model: "Mercedes G - wagon",
      quantity: 0,
      image: "/resorces/car2.png",
    },
    {
      id: 2,
      name: "BUSINESS CLASS",
      model: "Mercedes G - wagon",
      quantity: 0,
      image: "/resorces/car3.png",
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCars(
      cars.map((car) =>
        car.id === id
          ? { ...car, quantity: Math.max(0, car.quantity + change) }
          : car
      )
    );
  };

  const addToCart = (id: number) => {
    const car = cars.find((car) => car.id === id);
    if (car && car.quantity > 0) {
      setCartItems((prev) => prev + car.quantity);
      updateQuantity(id, -car.quantity);
    }
  };

  return (
    <div className="bg-white py-16" id="Cars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb- text-[#741906]">
          Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-gray-100 rounded-lg p-6">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-4">{car.model}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(car.id, -1)}
                    className="bg-[#741906] text-white px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-4">{car.quantity}</span>
                  <button
                    onClick={() => updateQuantity(car.id, 1)}
                    className="bg-[#741906] text-white px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCart(car.id)}
                  className="bg-[#741906] text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
