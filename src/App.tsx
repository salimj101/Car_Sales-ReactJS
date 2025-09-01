import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Cars from "./components/Cars";
import TestimonialsSection from "./components/Testimonials";
import Footer from "./components/Footer";
import CarGallery from "./components/CarsGallary";
import CarBrands from "./components/CarBrands";

// Import the Car type/interface, not the component
import type { Car } from "./components/Cars";

function App() {
  const [cart, setCart] = useState<Car[]>([]);

  return (
    <div className="font-sans">
      <Hero cart={cart} />
      <About />
      <Services />
      <Cars cart={cart} setCart={setCart} />
      <CarGallery />
      <TestimonialsSection />
      <CarBrands />
      <Footer />
    </div>
  );
}

export default App;
