import { useState } from "react";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    author: "Annie Rudy",
    location: "Las Vegas",
    text: "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    rating: 5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    author: "John Smith",
    location: "New York",
    text: "Outstanding experience from start to finish. The team went above and beyond to ensure I found exactly what I was looking for. The process was smooth and transparent.",
    rating: 5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    author: "Sarah Johnson",
    location: "Miami",
    text: "The attention to detail and customer service is unmatched. I appreciate how they took the time to understand my needs and preferences before making any recommendations.",
    rating: 5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    author: "Michael Chen",
    location: "San Francisco",
    text: "Professional, efficient, and truly customer-focused. The follow-up service has been excellent, and I couldn't be happier with my purchase.",
    rating: 5,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-[#12273D] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Testimonials
        </h2>

        <div className="relative">
          <div className="transition-opacity duration-500">
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-4"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
