import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ClientsSection from './components/ClientsSection';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Kannu Krishna Sharma | Graphic Designer';
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark relative overflow-hidden">
      <CustomCursor />
      <div className="absolute top-0 right-0 w-full h-full bg-noise opacity-[0.03] pointer-events-none z-0"></div>
      
      <Navbar />
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <WorkSection />
          <ClientsSection />
          <ExperienceSection />
          <AboutSection />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;