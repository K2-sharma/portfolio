import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mouse move listener with no throttling for zero latency
    document.addEventListener('mousemove', updateMousePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      // Restore default cursor on cleanup
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px)`,
          transition: 'none', // Zero latency
        }}
      >
        <div
          className={`w-3 h-3 rounded-full bg-white transition-transform duration-150 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>

      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
          transition: 'transform 0.1s ease-out', // Slight delay for trailing effect
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-primary-light transition-all duration-200 ${
            isHovering 
              ? 'scale-150 border-accent-light opacity-80' 
              : 'scale-100 opacity-60'
          }`}
        />
      </div>

      {/* Glow effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate(${mousePosition.x - 15}px, ${mousePosition.y - 15}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full bg-gradient-to-r from-primary-light to-accent-light opacity-20 blur-sm transition-all duration-200 ${
            isHovering ? 'scale-200 opacity-30' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;