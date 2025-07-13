"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "Security", href: "#security" },
        { name: "Architecture", href: "#architecture" },
        { name: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise", href: "#enterprise" },
        { name: "Startups", href: "#startups" },
        { name: "Developers", href: "#developers" },
        { name: "Use Cases", href: "#for-who" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Support", href: "#support" },
        { name: "Status", href: "#status" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#twitter" },
    { name: "LinkedIn", icon: "💼", href: "#linkedin" },
    { name: "GitHub", icon: "🐙", href: "#github" },
    { name: "Discord", icon: "💬", href: "#discord" }
  ];

  return (
    <footer className="relative overflow-hidden bg-dark-void border-t border-glass-white border-opacity-5">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute glass-floating opacity-20"
            style={{
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 60 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container-glass relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="glass-card w-12 h-12 flex items-center justify-center mr-4 glow-effect">
                  <span className="text-electric-blue font-bold text-xl">Q</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-pure-white">
                    QuantumLayer
                  </h2>
                  <p className="text-glass-muted text-sm">Universal AI Platform</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-glass-light leading-relaxed mb-8 max-w-md">
                Transforming natural language into production-ready solutions with 
                enterprise-grade AI technology. Build anything, deploy everywhere.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="glass-card w-10 h-10 flex items-center justify-center group hover:scale-110 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-pure-white font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-glass-muted hover:text-electric-blue transition-colors duration-300 text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-hero p-8 mb-16"
        >
          <div className="text-center">
            <h3 className="text-headline-glass text-pure-white mb-4">
              Stay Updated
            </h3>
            <p className="text-glass-light mb-6 max-w-2xl mx-auto">
              Get the latest updates on new features, security improvements, and platform developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-glass flex-1"
              />
              <button className="btn-glass-primary px-6">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-glass-white border-opacity-10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-glass-muted text-sm">
              © {currentYear} QuantumLayer. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link href="#privacy" className="text-glass-muted hover:text-electric-blue transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-glass-muted hover:text-electric-blue transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#security" className="text-glass-muted hover:text-electric-blue transition-colors duration-300">
                Security
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-glass-muted text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;