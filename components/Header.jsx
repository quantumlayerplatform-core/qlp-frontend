"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Platform', href: '#features' },
    { name: 'Solutions', href: '#for-who' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Security', href: '#security' },
    { name: 'Docs', href: '#docs' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
        scrolled 
          ? 'glass-header backdrop-blur-glass-medium' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-glass">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Glass logo container */}
              <div className="w-10 h-10 glass-card flex items-center justify-center glow-effect">
                <span className="text-electric-blue font-bold text-lg">Q</span>
              </div>
            </motion.div>
            
            <span className="text-xl font-semibold text-pure-white">
              QuantumLayer
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link 
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-glass-light hover:text-pure-white transition-all duration-300 font-medium text-sm relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 glass-floating opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="#login"
              className="text-glass-light hover:text-pure-white transition-colors duration-200 font-medium text-sm"
            >
              Sign In
            </Link>
            
            <Link 
              href="#contact"
              className="btn-glass-primary px-6 py-2 text-sm"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden glass-card w-10 h-10 flex flex-col justify-center items-center gap-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-0.5 bg-glass-white"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-glass-white"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-glass-white"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -4 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden absolute w-full glass-header backdrop-blur-glass-heavy border-t border-glass-white border-opacity-10"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ overflow: 'hidden' }}
      >
        <nav className="container-glass py-6">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: mobileMenuOpen ? 1 : 0, 
                  x: mobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link 
                  href={item.href}
                  className="block text-glass-light hover:text-pure-white transition-colors duration-200 font-medium text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <div className="pt-6 border-t border-glass-white border-opacity-10 space-y-4">
              <Link 
                href="#login"
                className="block text-glass-light hover:text-pure-white transition-colors duration-200 font-medium"
              >
                Sign In
              </Link>
              
              <Link 
                href="#contact"
                className="btn-glass-primary px-6 py-3 inline-block text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;