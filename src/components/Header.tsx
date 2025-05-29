import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(true), 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);
  
  return (
    <header
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } py-4`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center text-[#3D5AFE]">
            <Brain className="w-8 h-8 mr-2" />
            <span className="font-bold text-xl">SoutienAI</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Resources', 'How It Works', 'Testimonials', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`font-medium transition-colors duration-300 hover:text-[#3D5AFE] ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="px-4 py-2 font-medium text-[#3D5AFE] hover:text-[#2952E3] transition-colors duration-300">
            Login
          </Link>
          <Link to="/register" className="btn-primary">
            Sign Up Free
          </Link>
        </div>
        
        <button 
          className="md:hidden text-gray-800" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Resources', 'How It Works', 'Testimonials', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium text-gray-800 hover:text-[#3D5AFE] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <Link to="/login" className="px-4 py-2 font-medium text-[#3D5AFE] hover:text-[#2952E3] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="btn-primary" onClick={() => setIsMenuOpen(false)}>
                Sign Up Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;