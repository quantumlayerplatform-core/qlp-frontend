"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const capabilities = [
    {
      title: "Natural Language Processing",
      description: "Advanced AI that understands complex requirements and translates them into production-ready code with unprecedented accuracy.",
      metric: "99.7%",
      metricLabel: "Accuracy",
      icon: "🧠",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      title: "Universal Platform",
      description: "Build applications, automations, integrations, and complete systems from a single interface across any technology stack.",
      metric: "50+",
      metricLabel: "Frameworks",
      icon: "🎯",
      glowColor: "rgba(139, 92, 246, 0.3)"
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption, zero-trust architecture, and enterprise-grade access controls.",
      metric: "100%",
      metricLabel: "Compliance",
      icon: "🛡️",
      glowColor: "rgba(20, 184, 166, 0.3)"
    }
  ];

  const stats = [
    { number: "10M+", label: "Lines of Code Generated", trend: "+340%" },
    { number: "500+", label: "Enterprise Customers", trend: "+180%" },
    { number: "99.99%", label: "Platform Uptime", trend: "↑" },
    { number: "23s", label: "Average Generation Time", trend: "-60%" }
  ];

  return (
    <section id="about" className="section-glass bg-dark-space" ref={containerRef}>
      <div className="container-glass">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <div className="accent-line-glass mb-8"></div>
          <h2 className="text-display-glass mb-8">
            The Universal AI Platform for 
            <span className="bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent"> Enterprise Development</span>
          </h2>
          <p className="text-body-glass">
            QuantumLayer transforms how organizations build software. Our AI platform 
            understands natural language requirements and generates production-ready 
            solutions across any technology stack, reducing development time from months to minutes.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
              style={{
                boxShadow: `var(--shadow-glass-md), 0 0 40px ${capability.glowColor}`
              }}
            >
              {/* Floating icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {capability.icon}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-headline-glass text-pure-white mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-glass-light leading-relaxed">
                    {capability.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-glass-white border-opacity-10">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-electric-blue">
                      {capability.metric}
                    </span>
                    <span className="text-glass-muted text-sm mb-1">
                      {capability.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at center, ${capability.glowColor} 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Platform Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-hero p-12 mb-32 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-xs text-glass-muted mb-4 font-medium tracking-wider uppercase">
                  Natural Language Input
                </div>
                <div className="glass-card p-6">
                  <p className="text-glass-white font-mono leading-relaxed">
                    "Create a customer management system with AI-powered lead scoring, 
                    automated follow-ups, and real-time analytics dashboard"
                  </p>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-glass-muted mb-4 font-medium tracking-wider uppercase">
                  Generated Output
                </div>
                <div className="space-y-3">
                  {[
                    "React.js Frontend Application",
                    "Node.js API Backend", 
                    "PostgreSQL Database Schema",
                    "AI Model Integration",
                    "Authentication & Security"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 text-sm glass-card p-3"
                    >
                      <div className="w-2 h-2 bg-electric-blue rounded-full glow-effect"></div>
                      <span className="text-glass-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="glass-terminal p-8 font-mono text-sm">
              <div className="space-y-3">
                <div className="text-electric-blue font-bold">
                  quantum-ai@platform:~$
                </div>
                <div className="text-glass-muted">Analyzing requirements...</div>
                <div className="text-glass-muted">Generating architecture...</div>
                <div className="text-glass-muted">Building components...</div>
                <div className="text-glass-muted">Setting up database...</div>
                <div className="text-glass-muted">Implementing AI features...</div>
                <div className="text-green-400 mt-6 font-bold">
                  ✓ Application deployed successfully
                </div>
                <div className="text-glass-muted text-xs">
                  Generation time: 23.4 seconds
                </div>
                <div className="text-glass-muted text-xs">
                  Quality score: 98.7%
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-pure-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-glass-muted mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-electric-blue font-medium">
                {stat.trend}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;