import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Show the CTA after 5 seconds
    const timer = setTimeout(() => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      }
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isDismissed]);
  
  const dismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-orange-500 text-white p-4 rounded-lg shadow-lg max-w-xs">
            <button
              className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors duration-300"
              onClick={dismiss}
              aria-label="Close promotion"
            >
              <X size={16} />
            </button>
            <div className="mb-3">
              <h3 className="font-bold text-lg">Limited Time Offer</h3>
              <p className="text-sm text-white/90">Get 30% off your first 3 months when you sign up today!</p>
            </div>
            <button className="w-full bg-white text-orange-500 font-medium py-2 rounded hover:bg-orange-50 transition-colors duration-300">
              Claim Your Discount
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;