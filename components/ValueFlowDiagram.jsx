"use client";
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ValueFlowDiagram = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);
  
  // Animation variants for the value flow steps
  const flowItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.2 + (custom * 0.15)
      }
    })
  };
  
  const connectingLineVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };
  
  const metricsVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 1.2 + (custom * 0.2)
      }
    })
  };

  return (
    <div ref={ref} className="bg-dark-elevated p-8 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-dark/20 via-transparent to-transparent"></div>
      
      <h3 className="text-xl font-bold mb-6 text-center">QuantumLayer Platform Value Flow</h3>
      
      <div className="value-flow relative flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-8">
        {/* Flow steps */}
        {[
          { 
            id: 'input', 
            icon: '💬', 
            title: 'Natural Language Input',
            desc: 'User requests in plain language'
          },
          { 
            id: 'intent', 
            icon: '🧠', 
            title: 'Intent Classification',
            desc: 'Extract parameters and use cases'
          },
          { 
            id: 'agent', 
            icon: '🤖', 
            title: 'Agent Orchestration',
            desc: 'Coordinate specialized agents for complex tasks'
          },
          { 
            id: 'validation', 
            icon: '✓', 
            title: 'Validation Framework',
            desc: 'Detect & correct hallucinations'
          },
          { 
            id: 'output', 
            icon: '✨', 
            title: 'Intelligent Output',
            desc: 'Trustworthy, validated results'
          }
        ].map((step, index) => (
          <motion.div
            key={step.id}
            className="step-container z-10 w-full md:w-48 flex flex-col items-center text-center"
            custom={index}
            variants={flowItemVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="icon-container bg-dark-surface w-16 h-16 rounded-full flex items-center justify-center mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 via-transparent to-transparent"></div>
              <span className="text-2xl relative z-10">{step.icon}</span>
              <div className="absolute inset-0 border border-primary-light/30 rounded-full"></div>
              
              {/* Pulsing effect */}
              <div className="absolute w-full h-full rounded-full bg-primary-light/10 animate-ping opacity-30"></div>
            </div>
            
            <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
            <p className="text-xs text-text-secondary">{step.desc}</p>
            
            {/* Connecting dots */}
            {index < 4 && (
              <div className="hidden md:block absolute right-0 top-8 h-[2px] bg-primary-light/30 w-8 transform translate-x-full"></div>
            )}
          </motion.div>
        ))}
        
        {/* SVG connector lines (visible on larger screens) */}
        <svg className="absolute top-16 left-0 w-full h-6 z-0 hidden md:block" viewBox="0 0 1000 20">
          <motion.path
            d="M100,10 C150,40 250,-20 300,10 C350,40 450,-20 500,10 C550,40 650,-20 700,10 C750,40 850,-20 900,10"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="0 1"
            variants={connectingLineVariants}
            initial="hidden"
            animate={controls}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(112, 19, 250, 0.7)" />
              <stop offset="100%" stopColor="rgba(0, 226, 195, 0.7)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Metrics section */}
      <div className="metrics-container flex justify-around mt-8 pt-6 border-t border-white/10">
        {[
          { label: 'Accuracy', value: '99.9%' },
          { label: 'Latency', value: '50ms' },
          { label: 'Hallucination Rate', value: '<0.1%' }
        ].map((metric, index) => (
          <motion.div 
            key={metric.label}
            className="metric text-center"
            custom={index}
            variants={metricsVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="metric-value font-bold text-xl text-gradient mb-1">{metric.value}</div>
            <div className="metric-label text-xs text-text-tertiary">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValueFlowDiagram;