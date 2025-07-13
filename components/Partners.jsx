"use client";
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Partners = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredPartner, setHoveredPartner] = useState(null);
  
  const ecosystemPartners = [
    {
      icon: "🤖",
      name: "AI/LLM Providers",
      description: "OpenAI, Anthropic, Google, Meta Llama",
      glowColor: "rgba(139, 92, 246, 0.3)",
      details: ["GPT-4 Integration", "Claude API", "Gemini Pro", "Llama 2"]
    },
    {
      icon: "☁️",
      name: "Cloud Infrastructure", 
      description: "AWS, Azure, Google Cloud Platform",
      glowColor: "rgba(59, 130, 246, 0.3)",
      details: ["Auto-scaling", "Global CDN", "Multi-region", "Edge Computing"]
    },
    {
      icon: "🔗",
      name: "Version Control",
      description: "GitHub, GitLab, Bitbucket integration",
      glowColor: "rgba(34, 197, 94, 0.3)",
      details: ["Seamless Git Flow", "Branch Protection", "PR Integration", "Code Review"]
    },
    {
      icon: "⚙️",
      name: "CI/CD Platforms",
      description: "Jenkins, GitHub Actions, GitLab CI",
      glowColor: "rgba(245, 158, 11, 0.3)",
      details: ["Automated Testing", "Deploy Pipelines", "Quality Gates", "Release Management"]
    },
    {
      icon: "💻",
      name: "Development Tools",
      description: "VS Code, JetBrains, Docker, Kubernetes",
      glowColor: "rgba(236, 72, 153, 0.3)",
      details: ["IDE Extensions", "Container Support", "Local Development", "Debugging Tools"]
    },
    {
      icon: "🏢",
      name: "Enterprise Systems",
      description: "Jira, ServiceNow, Slack, Teams",
      glowColor: "rgba(99, 102, 241, 0.3)",
      details: ["Workflow Integration", "Notifications", "Project Tracking", "Team Collaboration"]
    }
  ];

  const integrationFeatures = [
    {
      title: "Flexible Architecture",
      description: "Our microservices architecture supports custom integrations with any tool in your development stack.",
      icon: "🔧"
    },
    {
      title: "API-First Design",
      description: "RESTful APIs and GraphQL endpoints make it easy to integrate QuantumLayer into existing workflows.",
      icon: "🔌"
    },
    {
      title: "Webhook Support",
      description: "Real-time notifications and automated triggers keep your team synchronized across all platforms.",
      icon: "⚡"
    }
  ];

  return (
    <section id="partners" className="section-glass bg-dark-matter" ref={containerRef}>
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
            <span className="bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-body-glass max-w-3xl mx-auto">
            QuantumLayer integrates seamlessly with your existing development stack. 
            Connect with the tools and platforms your team already uses.
          </p>
        </motion.div>

        {/* Integration Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {ecosystemPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{
                boxShadow: hoveredPartner === index 
                  ? `var(--shadow-glass-lg), 0 0 40px ${partner.glowColor}` 
                  : 'var(--shadow-glass-md)'
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {partner.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-pure-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {partner.name}
              </h3>
              
              <p className="text-glass-light leading-relaxed mb-6">
                {partner.description}
              </p>
              
              {/* Integration Details */}
              <div className="space-y-2">
                {partner.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-electric-blue rounded-full glow-effect"></div>
                    <span className="text-glass-muted text-sm">{detail}</span>
                  </div>
                ))}
              </div>
              
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at center, ${partner.glowColor} 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-hero p-12 mb-32 relative overflow-hidden"
        >
          <div className="text-center mb-12">
            <h3 className="text-headline-glass text-pure-white mb-4">
              Built for Integration
            </h3>
            <p className="text-glass-light max-w-2xl mx-auto">
              Our platform is designed from the ground up to work with your existing tools and workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-pure-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-glass-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom Integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-12 max-w-3xl mx-auto">
            <h3 className="text-headline-glass text-pure-white mb-6">
              Need a Custom Integration?
            </h3>
            <p className="text-glass-light mb-8 text-lg">
              Using other tools? QuantumLayer's flexible architecture supports custom integrations. 
              Our team can help you connect with any platform in your development ecosystem.
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
                  Let's discuss your needs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="btn-glass-secondary">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;