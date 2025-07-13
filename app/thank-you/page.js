"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYou() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Add 3D particles animation
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;

      // Create 60 particles (more for better effect)
      for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const posZ = Math.random() * 500 - 250; // Add Z dimension
        const size = Math.random() * 12 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Random colors from quantum theme
        const colors = [
          'rgba(112, 19, 250, 0.4)', // Purple
          'rgba(0, 226, 195, 0.4)',  // Teal
          'rgba(189, 0, 255, 0.4)',  // Magenta
          'rgba(255, 0, 153, 0.3)',  // Pink
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Set particle styles with 3D transforms
        particle.style.cssText = `
          position: absolute;
          top: ${posY}%;
          left: ${posX}%;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, ${color} 0%, rgba(0, 0, 0, 0) 70%);
          border-radius: 50%;
          opacity: ${Math.random() * 0.8 + 0.2};
          filter: blur(${Math.random() * 2}px);
          transform: translateZ(${posZ}px) scale(${1 + Math.abs(posZ) / 1000});
          animation: float-particle-3d ${duration}s ease-in-out infinite;
          animation-delay: -${delay}s;
          box-shadow: 0 0 ${size * 2}px ${color};
        `;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    // Counter animation
    const countTo = 100;
    const duration = 2500; // ms
    const increment = countTo / (duration / 30); // for 30ms intervals
    const timer = setInterval(() => {
      setCounter(prev => {
        const newValue = prev + increment;
        if (newValue >= countTo) {
          clearInterval(timer);
          return countTo;
        }
        return newValue;
      });
    }, 30);

    createParticles();

    // Inject LinkedIn script for Follow Company button
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/in.js';
    script.type = 'text/javascript';
    script.innerHTML = 'lang: en_US';
    document.body.appendChild(script);
    return () => {
      // Clean up script if needed
      document.body.removeChild(script);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center text-white p-4 relative overflow-hidden perspective-1000 font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      {/* Animated background elements */}
      <div className="parallax-bg"></div>
      <div className="grid-lines"></div>
      <div className="particles absolute inset-0 z-0"></div>
      
      {/* Decorative blobs */}
      <div className="blob" style={{ top: '20%', left: '15%', opacity: 0.4 }}></div>
      <div className="blob" style={{ bottom: '10%', right: '15%', opacity: 0.3, animationDelay: '-5s' }}></div>
      
      {/* Main content card */}
      <div className="thank-you-container z-10 max-w-xl text-center glass-panel p-8 rounded-2xl shadow-2xl">
        {/* Success icon with animated ring */}
        <div className="thank-you-icon relative mb-8 mx-auto w-24 h-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-secondary-color rounded-full animate-ping opacity-30"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
          <div className="relative flex items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        {/* Animated counter */}
        <div className="mb-2 flex justify-center items-baseline">
          <span className="text-5xl font-bold text-gradient">{Math.floor(counter)}%</span>
          <span className="ml-1 text-lg text-text-secondary">Complete</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-cyan-300">
          Welcome to QuantumLayer!
        </h1>
        
        <p className="text-xl mb-6 animated-text">
          {"You're on the waitlist!".split('').map((char, i) => (
            <span key={i} style={{ '--i': i }}>{char}</span>
          ))}
        </p>
        
        <p className="mb-8 text-text-secondary">
          We're building the future of AI orchestration and you'll be among the first to experience it.
          We'll notify you when early access is available (estimated Q2 2025).
        </p>
        
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-8">
          <h3 className="font-semibold mb-2">What happens next?</h3>
          <ol className="text-sm text-text-secondary list-decimal pl-5 space-y-1">
            <li>You'll receive a confirmation email shortly</li>
            <li>We'll send occasional updates about our progress (max twice/month)</li>
            <li>You'll get priority access when we launch our beta</li>
          </ol>
        </div>
        
        {/* Social sharing buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20QuantumLayer%20waitlist%20for%20the%20next%20generation%20of%20AI%20orchestration!%20&url=https://quantumlayerplatform.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-button rounded-full hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://quantumlayerplatform.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-button rounded-full hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
        </div>
        
        {/* LinkedIn Follow Company Button */}
        <div className="flex justify-center mb-8">
          {/* Replace YOUR_COMPANY_ID with your actual LinkedIn company ID */}
          <script type="IN/FollowCompany" data-id="YOUR_COMPANY_ID" data-counter="right"></script>
        </div>
        
        <Link 
          href="/"
          className="inline-block glass-button text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Return to Homepage
        </Link>
      </div>
      
      <style jsx>{`
        @keyframes float-particle-3d {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          33% {
            transform: translate3d(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 180}deg);
          }
          66% {
            transform: translate3d(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 180}deg);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(112, 19, 250, 0.6);
          }
          50% {
            box-shadow: 0 0 50px rgba(112, 19, 250, 0.8);
          }
        }
        
        .thank-you-container {
          animation: fadeInUp 1s ease-out forwards, glowPulse 4s infinite;
        }
        
        .thank-you-icon {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .parallax-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: radial-gradient(circle at center, rgba(24, 10, 74, 0.8) 0%, rgba(10, 5, 28, 1) 70%);
        }
        
        .grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(112, 19, 250, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(112, 19, 250, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          perspective: 1000px;
          transform-style: preserve-3d;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        
        .animated-text span {
          display: inline-block;
          animation: textWave 2s ease-in-out infinite;
          animation-delay: calc(0.1s * var(--i));
        }
        
        @keyframes textWave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
            text-shadow: 0 15px 25px rgba(112, 19, 250, 0.8);
          }
        }
        
        .blob {
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(112, 19, 250, 0.2);
          border-radius: 43% 57% 70% 30% / 46% 50% 50% 54%;
          filter: blur(20px);
          animation: blob-morph 15s ease-in-out infinite alternate;
          z-index: 0;
          opacity: 0.7;
        }
        
        @keyframes blob-morph {
          0% {
            border-radius: 43% 57% 70% 30% / 46% 50% 50% 54%;
            transform: translate(0%, 0%) rotate(0deg);
          }
          25% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: translate(5%, 5%) rotate(180deg);
          }
          75% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          100% {
            border-radius: 43% 57% 70% 30% / 46% 50% 50% 54%;
            transform: translate(0%, 0%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}