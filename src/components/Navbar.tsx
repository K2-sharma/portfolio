import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'My Work', href: '#work', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Previous Clients', href: '#clients', icon: <Users className="w-5 h-5" /> },
    { name: 'Experience', href: '#experience', icon: <Clock className="w-5 h-5" /> },
    { name: 'About Info', href: '#about', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-darker/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#" className="flex items-center">
              <span className="font-display text-xl font-semibold gradient-text">KKS</span>
              <span className="ml-2 font-display font-medium text-lg text-text">Portfolio</span>
            </a>
          </motion.div>
          
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="ml-10 flex items-center space-x-8"
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-text-muted hover:text-text transition-colors duration-300 text-sm font-medium"
                >
                  <span className="inline-block mr-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary-light hover:bg-surface-light transition-colors duration-300"
            >
              {isOpen ? (
                <X className="block h-6 w-6\" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6\" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-surface-light/90 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-3 rounded-md text-base font-medium text-text hover:bg-surface-light hover:text-primary-light transition-colors duration-300"
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;