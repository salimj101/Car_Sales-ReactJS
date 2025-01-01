import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Cars from "./components/Cars";
import TestimonialsSection from "./components/Testimonials";
import Footer from "./components/Footer";
import CarGallery from "./components/CarsGallary";
import CarBrands from "./components/CarBrands";

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="font-sans">
      <Navbar cartItems={cartItems} />
      <Hero />
      <About />
      <Services />
      <Cars setCartItems={setCartItems} />
      <CarGallery />
      <TestimonialsSection />
      <CarBrands />
      <Footer />
    </div>
  );
}

export default App;
