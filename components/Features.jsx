"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Features = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      category: "Core Platform",
      items: [
        {
          title: "Natural Language Interface",
          description: "Describe what you need in plain English. Our AI understands complex requirements and technical specifications with 99.7% accuracy.",
          technical: "GPT-4 + Custom NLP Models",
          icon: "🧠",
          glowColor: "rgba(59, 130, 246, 0.3)"
        },
        {
          title: "Multi-Stack Generation",
          description: "Generate applications in any framework or language. From React to Python, we support 50+ technology stacks with enterprise-grade quality.",
          technical: "Cross-Platform Code Synthesis",
          icon: "⚡",
          glowColor: "rgba(139, 92, 246, 0.3)"
        },
        {
          title: "Real-Time Collaboration",
          description: "Teams can collaborate on generated code with live editing, version control, and deployment pipelines integrated seamlessly.",
          technical: "WebSocket + Git Integration",
          icon: "🤝",
          glowColor: "rgba(20, 184, 166, 0.3)"
        }
      ]
    },
    {
      category: "Enterprise Features",
      items: [
        {
          title: "SOC 2 Compliance",
          description: "Enterprise-grade security with encryption at rest and in transit. Full audit logs, access controls, and compliance monitoring.",
          technical: "AES-256 + Zero-Trust Architecture",
          icon: "🛡️",
          glowColor: "rgba(245, 158, 11, 0.3)"
        },
        {
          title: "Custom Model Training",
          description: "Train AI models on your codebase and patterns for organization-specific development standards and best practices.",
          technical: "Fine-tuned Transformers",
          icon: "🎯",
          glowColor: "rgba(239, 68, 68, 0.3)"
        },
        {
          title: "API-First Architecture",
          description: "Integrate with existing tools via REST APIs, webhooks, and SDKs for seamless workflow automation and CI/CD integration.",
          technical: "OpenAPI 3.0 + GraphQL",
          icon: "🔗",
          glowColor: "rgba(168, 85, 247, 0.3)"
        }
      ]
    }
  ];

  const integrations = [
    { name: "GitHub", type: "Version Control", logo: "🐙" },
    { name: "AWS", type: "Cloud Platform", logo: "☁️" },
    { name: "Docker", type: "Containerization", logo: "🐋" },
    { name: "Kubernetes", type: "Orchestration", logo: "⚓" },
    { name: "Terraform", type: "Infrastructure", logo: "🏗️" },
    { name: "Jenkins", type: "CI/CD", logo: "🔧" },
    { name: "Jira", type: "Project Management", logo: "📋" },
    { name: "Slack", type: "Communication", logo: "💬" }
  ];

  return (
    <section id="features" className="section-glass bg-dark-void" ref={containerRef}>
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
            Enterprise-Grade Platform
            <span className="bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent"> Built for Scale</span>
          </h2>
          <p className="text-body-glass">
            From startups to Fortune 500 companies, QuantumLayer provides the tools, 
            security, and scalability needed for mission-critical development workflows.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-32 mb-32">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <div className="mb-12">
                <h3 className="text-headline-glass text-glass-white mb-4">
                  {category.category}
                </h3>
                <div className="accent-line-glass"></div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {category.items.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="glass-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                    onMouseEnter={() => setHoveredFeature(`${categoryIndex}-${index}`)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    style={{
                      boxShadow: hoveredFeature === `${categoryIndex}-${index}` 
                        ? `var(--shadow-glass-lg), 0 0 40px ${feature.glowColor}` 
                        : 'var(--shadow-glass-md)'
                    }}
                  >
                    {/* Icon */}
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-semibold text-pure-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-glass-light mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="text-xs text-electric-blue font-mono bg-dark-matter px-3 py-2 rounded-lg">
                      {feature.technical}
                    </div>
                    
                    {/* Hover glow effect */}
                    <div 
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                      style={{
                        background: `radial-gradient(circle at center, ${feature.glowColor} 0%, transparent 70%)`
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-hero p-12 mb-32 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-headline-glass text-pure-white mb-4">Technical Architecture</h3>
                <p className="text-glass-light">
                  Built on a microservices architecture with global CDN distribution, 
                  auto-scaling infrastructure, and 99.99% uptime SLA.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "Distributed Processing", desc: "Global infrastructure with edge computing capabilities" },
                  { title: "Real-Time Collaboration", desc: "WebSocket-based live editing and synchronization" },
                  { title: "Enterprise Security", desc: "Zero-trust architecture with end-to-end encryption" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 glow-effect"></div>
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
                <div className="text-electric-blue font-bold">// System Architecture</div>
                <div className="pl-4 space-y-1">
                  <div className="text-glass-light">├── AI Processing Layer</div>
                  <div className="text-glass-light">├── Code Generation Engine</div>
                  <div className="text-glass-light">├── Security & Compliance</div>
                  <div className="text-glass-light">├── Real-time Collaboration</div>
                  <div className="text-glass-light">├── Global CDN Distribution</div>
                  <div className="text-glass-light">└── Enterprise Integrations</div>
                </div>
                <div className="pt-4 text-green-400">
                  ✓ 99.99% Uptime SLA
                </div>
                <div className="text-green-400">
                  ✓ SOC 2 Type II Certified
                </div>
                <div className="text-green-400">
                  ✓ GDPR Compliant
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-headline-glass text-pure-white mb-4">Seamless Integrations</h3>
            <p className="text-glass-light max-w-2xl mx-auto">
              Connect with your existing development tools and workflows. 
              No disruption to your current processes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.05) }}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <div className="font-medium text-pure-white mb-1 group-hover:text-electric-blue transition-colors duration-300">
                  {integration.name}
                </div>
                <div className="text-glass-muted text-sm">
                  {integration.type}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;