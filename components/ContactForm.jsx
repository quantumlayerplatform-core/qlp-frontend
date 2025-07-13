"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Confetti from 'react-confetti';

const ContactForm = () => {
  const router = useRouter();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    referredBy: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [hasReferral, setHasReferral] = useState(false);

  useEffect(() => {
    if ((showConfetti || showSuccess) && typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    
    // Check for referral in localStorage
    if (typeof window !== 'undefined') {
      const referral = localStorage.getItem('waitlistReferral');
      if (referral) {
        setFormData(prev => ({ ...prev, referredBy: referral }));
        setHasReferral(true);
      }
    }
  }, [showConfetti, showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }
      
      const result = await response.json();
      console.log('Success:', result);
      
      // Clear localStorage referral after successful submission
      if (typeof window !== 'undefined') {
        localStorage.removeItem('waitlistReferral');
      }
      
      // Show success state
      setShowSuccess(true);
      setShowConfetti(true);
      
      // Hide confetti after 5 seconds but keep success message
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        interest: '',
        referredBy: ''
      });
      
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <section id="contact" className="section-glass bg-dark-space" ref={containerRef}>
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
          />
        )}
        
        <div className="container-glass">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass-hero p-12">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-display-glass text-pure-white mb-6">
                Thank You!
              </h2>
              <p className="text-body-glass mb-8">
                We've received your demo request. Our team will reach out within 24 hours 
                to schedule your personalized QuantumLayer demonstration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="btn-glass-primary"
                >
                  Submit Another Request
                </button>
                <button 
                  onClick={() => router.push('/')}
                  className="btn-glass-secondary"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-glass bg-dark-space" ref={containerRef}>
      <div className="container-glass">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="accent-line-glass mb-8 mx-auto"></div>
          <h2 className="text-display-glass mb-8">
            Request a <span className="bg-gradient-to-r from-electric-blue to-electric-blue-bright bg-clip-text text-transparent">Demo</span>
          </h2>
          <p className="text-body-glass max-w-3xl mx-auto">
            See how QuantumLayer can accelerate your software development by 10x. Join 
            enterprises already transforming their development process.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-hero p-12 space-y-8">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-glass-light text-sm font-medium mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input-glass"
                  required
                />
              </div>
              
              <div>
                <label className="block text-glass-light text-sm font-medium mb-3">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                  className="input-glass"
                  required
                />
              </div>
            </div>

            {/* Company and Role Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-glass-light text-sm font-medium mb-3">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="input-glass"
                  required
                />
              </div>
              
              <div>
                <label className="block text-glass-light text-sm font-medium mb-3">
                  Your Role *
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Your Role"
                  className="input-glass"
                  required
                />
              </div>
            </div>

            {/* Interest Textarea */}
            <div>
              <label className="block text-glass-light text-sm font-medium mb-3">
                Tell us about your development challenges or use cases...
              </label>
              <textarea
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="For example: API development, legacy modernization, rapid prototyping, internal tools, etc."
                rows={4}
                className="input-glass resize-none"
              ></textarea>
            </div>

            {/* Referral Field (if has referral) */}
            {hasReferral && (
              <div>
                <label className="block text-glass-light text-sm font-medium mb-3">
                  Referred By
                </label>
                <input
                  type="text"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleChange}
                  className="input-glass"
                  readOnly
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-glass-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Request...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Request Demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Help Text */}
            <p className="text-glass-muted text-sm text-center">
              <em>For example: API development, legacy modernization, rapid prototyping, internal tools, etc.</em>
            </p>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: "🚀",
              title: "Quick Setup",
              description: "Get started in minutes, not months"
            },
            {
              icon: "🛡️",
              title: "Enterprise Security",
              description: "SOC 2 compliant with enterprise controls"
            },
            {
              icon: "💬",
              title: "Expert Support",
              description: "Dedicated success team and 24/7 support"
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-pure-white mb-2">
                {feature.title}
              </h3>
              <p className="text-glass-light text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;