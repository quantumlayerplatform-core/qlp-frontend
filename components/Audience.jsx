"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Audience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const audiences = [
    {
      icon: "🏢",
      title: "Enterprises",
      description: "Accelerate digital transformation, modernize legacy systems, and reduce development costs by 70% while maintaining enterprise-grade security and compliance.",
      glowColor: "rgba(59, 130, 246, 0.3)",
      stats: [
        { metric: "70%", label: "Cost Reduction" },
        { metric: "10x", label: "Faster Delivery" }
      ]
    },
    {
      icon: "🚀",
      title: "Startups & Scale-ups",
      description: "Build MVPs in days not months, iterate rapidly on product ideas, and compete with larger teams by leveraging AI-powered development.",
      glowColor: "rgba(139, 92, 246, 0.3)",
      stats: [
        { metric: "Days", label: "MVP to Market" },
        { metric: "5x", label: "Team Efficiency" }
      ]
    },
    {
      icon: "👨‍💻",
      title: "Development Teams",
      description: "Eliminate repetitive coding tasks, focus on high-value work, and deliver projects 10x faster with consistent quality and best practices.",
      glowColor: "rgba(20, 184, 166, 0.3)",
      stats: [
        { metric: "90%", label: "Less Boilerplate" },
        { metric: "100%", label: "Code Quality" }
      ]
    }
  ];

  const useCases = [
    {
      category: "Web Applications",
      examples: ["E-commerce Platforms", "SaaS Dashboards", "Content Management", "Social Networks"]
    },
    {
      category: "Mobile Solutions", 
      examples: ["iOS & Android Apps", "React Native", "Progressive Web Apps", "Hybrid Applications"]
    },
    {
      category: "Enterprise Systems",
      examples: ["CRM Platforms", "ERP Solutions", "Analytics Dashboards", "Workflow Automation"]
    },
    {
      category: "AI & ML Integration",
      examples: ["Recommendation Engines", "Predictive Analytics", "Computer Vision", "Natural Language Processing"]
    }
  ];

  return (
    <section id="for-who" className="section-glass bg-dark-matter" ref={containerRef}>
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
            Built for Every 
            <span className="bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent"> Development Team</span>
          </h2>
          <p className="text-body-glass max-w-3xl mx-auto">
            From Fortune 500 enterprises to innovative startups, QuantumLayer adapts to your needs, 
            scale, and development practices while maintaining the highest standards of quality and security.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
              style={{
                boxShadow: `var(--shadow-glass-md)`
              }}
            >
              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {audience.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-headline-glass text-pure-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {audience.title}
              </h3>
              
              <p className="text-glass-light leading-relaxed mb-8">
                {audience.description}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-glass-white border-opacity-10">
                {audience.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-electric-blue mb-1">
                      {stat.metric}
                    </div>
                    <div className="text-xs text-glass-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at center, ${audience.glowColor} 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-hero p-12 relative overflow-hidden"
        >
          <div className="text-center mb-12">
            <h3 className="text-headline-glass text-pure-white mb-4">
              What Can You Build?
            </h3>
            <p className="text-glass-light max-w-2xl mx-auto">
              QuantumLayer supports any type of application or system you can imagine. 
              Here are just a few examples of what our customers are building.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6"
              >
                <h4 className="text-lg font-semibold text-pure-white mb-4">
                  {useCase.category}
                </h4>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-electric-blue rounded-full glow-effect"></div>
                      <span className="text-glass-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-24"
        >
          <div className="glass-card p-12 max-w-3xl mx-auto">
            <h3 className="text-headline-glass text-pure-white mb-6">
              Ready to Transform Your Development Process?
            </h3>
            <p className="text-glass-light mb-8 text-lg">
              Join thousands of teams who have already discovered the future of software development. 
              Start building with AI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-glass-primary"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="btn-glass-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Audience;