import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-surface py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="font-display text-xl font-semibold gradient-text">KKS</span>
              <span className="ml-2 font-display font-medium text-lg text-text">Portfolio</span>
            </a>
            <p className="text-text-muted mt-2 max-w-md">
              Transforming ideas into captivating visual narratives through design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center mb-4 text-text-muted hover:text-primary-light transition-colors duration-300"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUpCircle className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/kannu-krishna-sharma-6146b0293/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/_kannu_k_sharma_" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:kannukrishnasharma@gmail.com" className="text-text-muted hover:text-primary-light transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-text/10 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Kannu Krishna Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;