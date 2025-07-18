import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image side */}
          <motion.div 
            className="w-full md:w-5/12 mb-8 md:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-[460px] md:h-[580px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="k2.png" 
                  alt="Kannu Krishna Sharma" 
                  className="object-cover h-full max-w-full rounded-2xl"
                />
                {/* Gradient overlay */}
                
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-accent/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.6, 0.8, 0.6] 
                }}
                transition={{ 
                  duration: 4, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-primary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1], 
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{ 
                  duration: 5, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              ></motion.div>
            </div>
          </motion.div>
          
          {/* Text side */}
          <motion.div 
            className="w-full md:w-7/12 md:pl-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-lg md:text-xl font-medium text-primary-light mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Kannu Krishna <span className="gradient-text">Sharma</span>
            </motion.h1>
            
            <motion.h3 
              className="text-lg md:text-xl font-medium text-text-muted mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Graphic Designer & Visual Storyteller
            </motion.h3>
            
            <motion.p 
              className="text-base text-text-muted mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I transform ideas into captivating visual narratives through graphic design, 
              video editing, and brand design. With a passion for aesthetics and storytelling, 
              I create designs that connect, engage, and inspire.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a 
                href="#work" 
                className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors duration-300"
              >
                View My Work
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 border border-text/20 hover:border-text/40 text-text font-medium rounded-lg transition-colors duration-300"
              >
                About Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <p className="text-sm text-text-muted mb-2">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;