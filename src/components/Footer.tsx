import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Brain, Mail, Phone, MapPin } from 'lucide-react';

const FooterLink: React.FC<{href: string; children: React.ReactNode}> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-[#3D5AFE] transition-colors duration-300 mb-2 block"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center text-[#3D5AFE] mb-4">
              <Brain className="w-8 h-8 mr-2" />
              <span className="font-bold text-xl">SoutienAI</span>
            </div>
            <p className="text-gray-600 mb-6">
              Empowering students with direct access to curated, high-quality learning resources powered by AI.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#3D5AFE] transition-colors duration-300"
                  aria-label={`Social media link ${i + 1}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Resources</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <FooterLink href="#">Mathematics</FooterLink>
              <FooterLink href="#">Science</FooterLink>
              <FooterLink href="#">Languages</FooterLink>
              <FooterLink href="#">History</FooterLink>
              <FooterLink href="#">Technology</FooterLink>
              <FooterLink href="#">Art & Music</FooterLink>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={18} className="text-[#3D5AFE] mt-1 mr-2" />
                <span className="text-gray-600">contact@soutienai.com</span>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="text-[#3D5AFE] mt-1 mr-2" />
                <span className="text-gray-600">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-[#3D5AFE] mt-1 mr-2" />
                <span className="text-gray-600">123 Education Street, 75001 Paris, France</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D5AFE] focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="bg-[#3D5AFE] text-white px-4 py-2 rounded-r-md hover:bg-[#2952E3] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SoutienAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#3D5AFE] text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#3D5AFE] text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-[#3D5AFE] text-sm">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;