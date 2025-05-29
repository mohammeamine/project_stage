import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PhoneModel from './3D/PhoneModel';
import { Brain, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const typingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && typingRef.current) {
          typingRef.current.style.width = '100%';
        }
      });
    }, options);
    
    if (typingRef.current) {
      observer.observe(typingRef.current);
    }
    
    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gray-50 relative">
      {/* Vague SVG décorative en haut */}
      <div className="absolute top-0 left-0 w-full z-0" style={{ pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32">
          <path fill="#E3EDFF" d="M0,80 C360,160 1080,0 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <React.Fragment key={i}>
            <div
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
            <div
              className="neural-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                transform: `rotate(${Math.random() * 360}deg)` ,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Brain size={18} className="text-[#3D5AFE] mr-2 rotating-icon" />
              <span className="text-sm font-medium text-[#3D5AFE]">AI-Powered Learning</span>
            </motion.div>
            
            <h1 className="hero-headline overflow-hidden text-2xl md:text-3xl font-extrabold mb-6 leading-tight">
              <span 
                ref={typingRef} 
                className="inline-block w-0 whitespace-nowrap overflow-hidden"
                style={{ 
                  animation: 'typing 3.5s steps(40, end) forwards 0.5s, blink-caret 0.75s step-end infinite' 
                }}
              >
                <span className="text-[#2962FF]">Master</span> Your Subjects, Your Way
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-subheadline mx-auto lg:mx-0 text-sm md:text-base text-gray-600 mb-8 md:mb-12"
            >
              Direct access to curated learning resources — no middleman, just progress. Let AI guide your educational journey.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                className="btn-primary group relative flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                  animation: 'glow 2s ease-in-out infinite',
                  boxShadow: '0 0 15px rgba(61, 90, 254, 0.7)'
                }}></span>
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Resources
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-gray-600"
            >
              <motion.div 
                className="flex -space-x-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {[1, 2, 3, 4].map((i, index) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
              <motion.span 
                className="text-sm"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                Join <span className="font-bold text-[#3D5AFE]">5,000+</span> students
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] flex justify-center"
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#3D5AFE] opacity-5 filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <div className="relative z-10">
              <PhoneModel />
            </div>
            
            {[
              { top: '10%', left: '0%', size: 'w-12 h-12', delay: 0 },
              { top: '20%', right: '5%', size: 'w-16 h-16', delay: 1 },
              { bottom: '15%', left: '5%', size: 'w-10 h-10', delay: 2 },
              { bottom: '10%', right: '10%', size: 'w-14 h-14', delay: 0.5 }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`absolute ${item.size} bg-gray-200 bg-opacity-30 rounded-lg backdrop-blur-sm flex items-center justify-center floating-element`}
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 * i }}
              >
                {i % 2 === 0 ? (
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-[#3D5AFE] bg-opacity-30 ai-glow"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                ) : (
                  <motion.div 
                    className="w-8 h-1 bg-gray-400 rounded-full mb-1"
                    animate={{
                      width: ["2rem", "1.5rem", "2rem"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;