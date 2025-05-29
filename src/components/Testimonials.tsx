import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'High School Student',
    school: 'Lycée Henri-IV',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'This app simplified my learning process. The AI recommendations were spot-on, and I aced my exams!',
    rating: 5
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'University Student',
    school: 'Sorbonne Université',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'As a university student, finding quality resources was always a challenge. This app changed everything for me.',
    rating: 5
  },
  {
    id: 3,
    name: 'Camille Bernard',
    role: 'High School Student',
    school: 'Lycée Louis-le-Grand',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The progress tracking feature helped me identify my weak points and focus my studying more effectively.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Students Say</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 text-[#3D5AFE] opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#3D5AFE]/20">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl italic mb-4 text-gray-700">{testimonials[activeIndex].quote}</p>
                    
                    <div>
                      <h4 className="text-lg font-bold">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                      <p className="text-[#3D5AFE] font-medium text-sm">{testimonials[activeIndex].school}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-[#3D5AFE] w-4' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;