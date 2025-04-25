
import { testimonials } from '@/data/tourData';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-turquoise-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute top-0 translate-x-16'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="text-gold mb-6 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-current" size={20} />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm opacity-75">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
