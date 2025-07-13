"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Build Anything";
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const words = [
    "Applications",
    "Automations", 
    "Integrations",
    "Solutions",
    "Systems",
    "Platforms"
  ];
  
  // Mouse tracking for interactive glass effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Professional typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-dark-space flex flex-col justify-center relative overflow-hidden">
      {/* Floating glass elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute glass-floating animate-float-glass opacity-30"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * (index % 2 === 0 ? 1 : -1),
              y: mousePosition.y * (index % 2 === 0 ? 1 : -1),
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
        ))}
      </div>
      
      <div className="container-glass relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-screen py-24">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 glass-card"
            >
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse glow-effect"></div>
              <span className="text-sm font-medium text-glass-light tracking-wide">
                Universal AI Platform • Enterprise Ready
              </span>
            </motion.div>
            
            {/* Massive Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-massive-glass font-black tracking-tighter">
                {typedText}
                <span className="text-electric-blue animate-pulse">|</span>
              </h1>
              
              <div className="text-hero-glass font-light text-glass-light">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </div>
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-glass max-w-2xl leading-relaxed"
            >
              Transform natural language into production-ready solutions. 
              QuantumLayer's AI platform builds anything you can describe—from 
              complex enterprise applications to simple automations.
            </motion.p>
            
            {/* Glass CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToContact}
                className="btn-glass-primary group flex items-center justify-center gap-2"
              >
                <span>Request Demo</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="btn-glass-secondary">
                View Documentation
              </button>
            </motion.div>
            
            {/* Enterprise Metrics in Glass Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-12"
            >
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-pure-white mb-2">50x</div>
                <div className="text-sm text-glass-muted font-medium">Faster Development</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-electric-blue mb-2">99.9%</div>
                <div className="text-sm text-glass-muted font-medium">Uptime SLA</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-pure-white mb-2">∞</div>
                <div className="text-sm text-glass-muted font-medium">Possibilities</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Glass Terminal Demo */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Main Glass Terminal */}
              <div className="glass-terminal font-mono text-sm relative overflow-hidden">
                {/* Terminal Header */}
                <div className="glass-header px-6 py-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                  </div>
                  <span className="text-glass-light font-medium">quantum-ai-terminal</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-electric-blue font-bold">$</span>
                    <span className="text-glass-white">quantum create</span>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-glass-muted">&gt;</span>
                    <span className="text-glass-light">What would you like to build?</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="pl-4 text-glass-white italic"
                  >
                    "A complete CRM system with AI recommendations"
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-glass-light">Analyzing requirements...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-glass-light">Generating architecture...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-glass-light">Building frontend...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-glass-light">Creating APIs...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-glass-light">Setting up database...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-glass-light">Implementing AI features...</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="pt-4 border-t border-glass-white border-opacity-10"
                  >
                    <div className="text-electric-blue font-bold mb-2">
                      🚀 Application deployed successfully!
                    </div>
                    <div className="text-glass-muted text-xs">
                      → https://your-crm.quantum.app
                    </div>
                    <div className="text-glass-muted text-xs mt-1">
                      Generation time: 23.4 seconds
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Glass Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="absolute -right-8 top-1/4 glass-card p-4"
              >
                <div className="text-xs text-glass-muted mb-1">Generation Time</div>
                <div className="text-2xl font-bold text-electric-blue">23s</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
                className="absolute -left-8 bottom-1/4 glass-card p-4"
              >
                <div className="text-xs text-glass-muted mb-1">Quality Score</div>
                <div className="text-2xl font-bold text-pure-white">98%</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-card p-3"
              >
                <div className="text-xs text-glass-muted mb-1">Lines of Code</div>
                <div className="text-lg font-bold text-electric-blue">2,847</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Glass Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="glass-floating w-6 h-10 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-electric-blue rounded-full animate-bounce glow-effect"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;