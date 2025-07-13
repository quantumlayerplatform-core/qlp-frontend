"use client";
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Security = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const securityFeatures = [
    {
      icon: "🛡️",
      title: "Secure Code Generation",
      description: "Generated code follows OWASP best practices with built-in protection against common vulnerabilities like SQL injection, XSS, and CSRF attacks.",
      glowColor: "rgba(34, 197, 94, 0.3)",
      details: ["OWASP Top 10 Protection", "Static Analysis", "Vulnerability Scanning"]
    },
    {
      icon: "🔒",
      title: "Sandboxed Execution", 
      description: "All code validation runs in isolated Docker containers with strict resource limits, no network access, and complete process isolation.",
      glowColor: "rgba(59, 130, 246, 0.3)",
      details: ["Docker Isolation", "Resource Limits", "Zero Network Access"]
    },
    {
      icon: "👁️",
      title: "Data Privacy",
      description: "Your code and requirements are encrypted at rest and in transit using AES-256. We never train AI models on customer data or store proprietary information.",
      glowColor: "rgba(139, 92, 246, 0.3)",
      details: ["AES-256 Encryption", "Zero Data Retention", "Privacy by Design"]
    },
    {
      icon: "📋",
      title: "Compliance Ready",
      description: "SOC 2 Type II certified with GDPR, HIPAA, and PCI DSS compliance. Complete audit trails and access logging for enterprise governance.",
      glowColor: "rgba(245, 158, 11, 0.3)",
      details: ["SOC 2 Type II", "GDPR Compliant", "Audit Trails"]
    }
  ];

  const complianceItems = [
    { name: "SOC 2 Type II", status: "Certified", icon: "✓" },
    { name: "GDPR", status: "Compliant", icon: "✓" },
    { name: "HIPAA", status: "Ready", icon: "✓" },
    { name: "PCI DSS", status: "Level 1", icon: "✓" },
    { name: "ISO 27001", status: "In Progress", icon: "⏳" },
    { name: "FedRAMP", status: "Planned", icon: "📋" }
  ];

  const securityTabs = [
    {
      title: "Infrastructure",
      content: {
        title: "Enterprise-Grade Infrastructure Security",
        points: [
          "Zero-trust network architecture with microsegmentation",
          "Multi-region deployment with automated failover",
          "24/7 SOC monitoring with threat detection",
          "Regular penetration testing and vulnerability assessments"
        ]
      }
    },
    {
      title: "Data Protection", 
      content: {
        title: "Advanced Data Protection & Privacy",
        points: [
          "End-to-end encryption for all data in transit and at rest",
          "Customer-controlled encryption keys (BYOK) available",
          "Automatic data classification and labeling",
          "Data residency controls for international compliance"
        ]
      }
    },
    {
      title: "Access Control",
      content: {
        title: "Granular Access Control & Identity Management", 
        points: [
          "Multi-factor authentication with SSO integration",
          "Role-based access control with least privilege principle",
          "API key management with rotation and monitoring",
          "Session management with automatic timeout"
        ]
      }
    }
  ];

  return (
    <section id="security" className="section-glass bg-dark-space" ref={containerRef}>
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
            Enterprise-Grade 
            <span className="bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent"> Security</span>
          </h2>
          <p className="text-body-glass max-w-3xl mx-auto">
            Security isn't an afterthought—it's built into every layer of our platform. 
            From code generation to data handling, we maintain the highest security standards 
            to protect your most valuable assets.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8 group hover:scale-102 transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-pure-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-glass-light leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Details */}
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
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
                  background: `radial-gradient(circle at center, ${feature.glowColor} 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Security Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-hero p-12 mb-32 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Tab Navigation */}
            <div className="space-y-4">
              <h3 className="text-headline-glass text-pure-white mb-6">Security Deep Dive</h3>
              {securityTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeTab === index 
                      ? 'glass-card text-pure-white' 
                      : 'text-glass-muted hover:text-glass-light'
                  }`}
                >
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8"
              >
                <h4 className="text-xl font-semibold text-pure-white mb-6">
                  {securityTabs[activeTab].content.title}
                </h4>
                <div className="space-y-4">
                  {securityTabs[activeTab].content.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 glow-effect"></div>
                      <span className="text-glass-light">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Compliance Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-headline-glass text-pure-white mb-4">
              Compliance & Certifications
            </h3>
            <p className="text-glass-light max-w-2xl mx-auto">
              We maintain the highest standards of compliance to meet enterprise requirements 
              and regulatory obligations across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-medium text-pure-white mb-1 group-hover:text-electric-blue transition-colors duration-300">
                  {item.name}
                </div>
                <div className="text-glass-muted text-sm">
                  {item.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;