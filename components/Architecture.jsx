"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Architecture = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      name: "Meta-Orchestrator",
      description: "Decomposes natural language into atomic development tasks with intelligent planning and resource allocation.",
      icon: "🧠",
      glowColor: "rgba(139, 92, 246, 0.3)",
      technical: "GPT-4 + Custom NLP Pipeline"
    },
    {
      name: "Agent Factory",
      description: "Multi-tier AI agents (T0-T3) for different complexity levels, from simple scripts to enterprise applications.",
      icon: "🤖",
      glowColor: "rgba(59, 130, 246, 0.3)",
      technical: "Hierarchical Agent Architecture"
    },
    {
      name: "Validation Mesh",
      description: "5-stage validation pipeline ensuring production-quality code with automated testing and security scanning.",
      icon: "✅",
      glowColor: "rgba(34, 197, 94, 0.3)",
      technical: "Multi-Layer Validation System"
    },
    {
      name: "Vector Memory",
      description: "Semantic search and intelligent code reuse with knowledge graph integration for optimal solutions.",
      icon: "🔍",
      glowColor: "rgba(245, 158, 11, 0.3)",
      technical: "Qdrant + Embedding Models"
    },
    {
      name: "Execution Sandbox",
      description: "Secure Docker-based code testing environment with complete isolation and resource monitoring.",
      icon: "🔒",
      glowColor: "rgba(239, 68, 68, 0.3)",
      technical: "Containerized Execution Environment"
    }
  ];

  const techStack = [
    { category: "AI/ML Core", tech: "GPT-4, Claude, Llama 2", icon: "🤖", details: ["Natural Language Processing", "Code Generation", "Pattern Recognition"] },
    { category: "Backend Infrastructure", tech: "Python/FastAPI, Node.js", icon: "⚡", details: ["Microservices Architecture", "High-Performance APIs", "Real-time Processing"] },
    { category: "Cloud Platform", tech: "Docker, Kubernetes, AWS", icon: "☁️", details: ["Auto-scaling Infrastructure", "Global Distribution", "99.99% Uptime"] },
    { category: "Data Systems", tech: "PostgreSQL, Redis, Vector DB", icon: "💾", details: ["Semantic Search", "Caching Layer", "Knowledge Graph"] }
  ];

  return (
    <section id="architecture" className="section-glass bg-dark-void" ref={containerRef}>
      <div className="container-glass">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="accent-line-glass mb-8 mx-auto"></div>
          <h2 className="text-display-glass mb-8">
            <span className="bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent">Architecture</span>
          </h2>
          <p className="text-body-glass max-w-3xl mx-auto">
            A microservices architecture designed for scale, reliability, and enterprise deployment
            with AI-powered orchestration at every layer.
          </p>
        </motion.div>

        {/* 5-Layer Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-hero p-12 mb-32 relative overflow-hidden"
        >
          <div className="text-center mb-12">
            <h3 className="text-headline-glass text-pure-white mb-4">
              5-Layer Microservices Architecture
            </h3>
            <p className="text-glass-light max-w-2xl mx-auto">
              Each layer is independently scalable with dedicated AI agents optimized for specific tasks
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  boxShadow: hoveredService === index 
                    ? `var(--shadow-glass-lg), 0 0 40px ${service.glowColor}` 
                    : 'var(--shadow-glass-md)'
                }}
              >
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-semibold text-pure-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {service.name}
                </h4>
                
                <p className="text-glass-light text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Technical Detail */}
                <div className="text-xs text-electric-blue font-mono bg-dark-matter px-3 py-2 rounded-lg">
                  {service.technical}
                </div>
                
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at center, ${service.glowColor} 0%, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-headline-glass text-pure-white mb-4">
              Enterprise Technology Stack
            </h3>
            <p className="text-glass-light max-w-2xl mx-auto">
              Built on proven technologies with enterprise-grade reliability, security, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stack.icon}
                </div>
                
                <h4 className="text-lg font-semibold text-pure-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {stack.category}
                </h4>
                
                <p className="text-electric-blue font-medium mb-4 text-sm">
                  {stack.tech}
                </p>
                
                <div className="space-y-2">
                  {stack.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-electric-blue rounded-full glow-effect"></div>
                      <span className="text-glass-light text-xs">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-hero p-12 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-headline-glass text-pure-white mb-4">
                  High-Level System Flow
                </h3>
                <p className="text-glass-light">
                  Natural language requests flow through our intelligent orchestration system, 
                  generating production-ready code with enterprise-grade validation.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { step: "1", title: "Natural Language Input", desc: "User describes requirements in plain English" },
                  { step: "2", title: "AI Orchestration", desc: "Meta-orchestrator plans and delegates tasks" },
                  { step: "3", title: "Code Generation", desc: "Specialized agents generate optimized code" },
                  { step: "4", title: "Validation Pipeline", desc: "5-stage quality and security validation" },
                  { step: "5", title: "Production Deployment", desc: "Automated deployment with monitoring" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center text-white font-bold text-sm glow-effect">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium text-pure-white mb-1">{item.title}</div>
                      <div className="text-glass-light text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="glass-terminal p-8 font-mono text-sm">
              <div className="space-y-3">
                <div className="text-electric-blue font-bold">// System Architecture Flow</div>
                <div className="pl-4 space-y-1">
                  <div className="text-glass-light">User Input → Meta-Orchestrator</div>
                  <div className="text-glass-light">    ↓</div>
                  <div className="text-glass-light">Task Decomposition → Agent Factory</div>
                  <div className="text-glass-light">    ↓</div>
                  <div className="text-glass-light">Code Generation → Validation Mesh</div>
                  <div className="text-glass-light">    ↓</div>
                  <div className="text-glass-light">Quality Assurance → Execution Sandbox</div>
                  <div className="text-glass-light">    ↓</div>
                  <div className="text-glass-light">Production Code → Deployment</div>
                </div>
                <div className="pt-4 text-green-400">
                  ✓ End-to-end automation
                </div>
                <div className="text-green-400">
                  ✓ Enterprise-grade quality
                </div>
                <div className="text-green-400">
                  ✓ Sub-30 second generation
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;