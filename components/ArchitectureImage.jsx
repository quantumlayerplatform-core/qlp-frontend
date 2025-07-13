"use client";
import { useEffect, useRef } from 'react';

const ArchitectureImage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const container = containerRef.current;
      
      // Add hover effect for 3D perspective tilt
      const handleMouseMove = (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        // Calculate rotation based on mouse position (limited rotation range)
        const rotateX = ((y - height / 2) / height) * -5; // -2.5 to 2.5 degrees
        const rotateY = ((x - width / 2) / width) * 5; // -2.5 to 2.5 degrees
        
        // Apply the transformation with smooth transition
        container.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      const handleMouseLeave = () => {
        container.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      };
      
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
      style={{
        transition: 'transform 0.3s ease',
        boxShadow: '0 25px 50px -12px rgba(112, 19, 250, 0.25)',
        border: '1px solid rgba(112, 19, 250, 0.1)',
      }}
    >
      <img 
        src="/img/quantum-architecture-simple.svg"
        alt="QuantumLayer Platform Architecture Diagram"
        width="900"
        height="600"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
      
      {/* Glowing overlay effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-transparent to-primary-light opacity-10"></div>
    </div>
  );
};

export default ArchitectureImage;
