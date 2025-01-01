export default function CarGallery() {
  const cars = [
    {
      url: "/resorces/Car.png",
      alt: "Black Bugatti at sunset",
    },
    {
      url: "/resorces/Car (1).png",
      alt: "Bugatti Chiron in motion",
    },
    {
      url: "/resorces/Car (2).png",
      alt: "Blue Aston Martin",
    },
    {
      url: "/resorces/Car (3).png",
      alt: "Light blue Porsche",
    },
    {
      url: "/resorces/Rectangle 2.png",
      alt: "Dark grey Aston Martin",
    },
    {
      url: "/resorces/Car (4).png",
      alt: "Tesla Model 3",
    },
    {
      url: "/resorces/Car (5).png",
      alt: "Green Aston Martin",
    },
    {
      url: "/resorces/Car (6).png",
      alt: "Bronze Bugatti",
    },
    {
      url: "/resorces/Car (7).png",
      alt: "Black and orange Bugatti Chiron",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 w-full h-full">
      {cars.map((car, index) => (
        <div
          key={index}
          className="relative group overflow-hidden aspect-video"
        >
          {/* Center tile with special styling */}
          {index === 4 ? (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-4 z-10">
                <h2 className="text-3xl font-bold mb-2">Tesla Model 3</h2>
                <p className="text-center mb-4">
                  Disruptive, avant-garde, futuristic, innovative.
                </p>
                <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded">
                  Contact
                </button>
              </div>
              <img
                src={car.url}
                alt={car.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            // Other tiles with hover effect
            <>
              <img
                src={car.url}
                alt={car.alt}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
