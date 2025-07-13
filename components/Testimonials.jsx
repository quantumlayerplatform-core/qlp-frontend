"use client";
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      quote: "QuantumLayer transformed our AI operations. We reduced solution time from days to minutes while maintaining industry-leading accuracy.",
      author: "Sarah Chen",
      title: "CTO, TechVision Labs",
      avatar: "/img/testimonials/avatar1.svg", // You'll need to add these to your public directory
      company: "TechVision Labs",
      companyLogo: "/img/testimonials/company1.svg"
    },
    {
      quote: "The multi-agent orchestration capabilities have completely changed how we approach complex data tasks. It's truly next generation technology.",
      author: "Michael Rodriguez",
      title: "AI Director, DataFlow Systems",
      avatar: "/img/testimonials/avatar2.svg",
      company: "DataFlow Systems",
      companyLogo: "/img/testimonials/company2.svg"
    },
    {
      quote: "What impressed us most was the validation framework. In our financial services industry, accuracy is everything - and QuantumLayer delivers.",
      author: "Alex Morgan",
      title: "Head of Innovation, FinTech Global",
      avatar: "/img/testimonials/avatar3.svg",
      company: "FinTech Global",
      companyLogo: "/img/testimonials/company3.svg"
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-dark-surface relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-light blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-secondary-color blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Industry leaders rely on QuantumLayer to power their most complex AI workflows
          </p>
        </motion.div>
        
        <div className="testimonials-slider relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <motion.div 
            className="testimonial-card bg-dark-elevated rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden mb-10"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={testimonialVariants}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-color to-secondary-color"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary-color/10 blur-3xl"></div>
            
            {/* Quote icon */}
            <div className="quote-icon text-4xl text-primary-light/20 mb-4">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            
            {/* Quote text */}
            <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
              "{testimonials[activeTestimonial].quote}"
            </p>
            
            {/* Author info */}
            <div className="author-info flex items-center">
              <div className="relative w-14 h-14 mr-4 rounded-full overflow-hidden border-2 border-primary-light/30">
                {/* This is a placeholder. You'll need to create avatar SVGs */}
                <div className="w-full h-full bg-primary-dark/50 rounded-full flex items-center justify-center text-xl">
                  {testimonials[activeTestimonial].author.split(' ').map(part => part[0]).join('')}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonials[activeTestimonial].author}</h4>
                <p className="text-text-secondary text-sm">{testimonials[activeTestimonial].title}</p>
              </div>
              
              {/* Company logo placeholder - replace with actual logo */}
              <div className="ml-auto opacity-70 hover:opacity-100 transition-opacity">
                <div className="company-logo-placeholder h-8 px-4 py-1 rounded bg-dark-surface text-xs flex items-center">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-primary-color scale-125' : 'bg-dark-elevated hover:bg-primary-color/50'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Logo cloud */}
        <motion.div 
          className="logo-cloud mt-16 flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            'Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5', 'Company 6'
          ].map((company, index) => (
            <motion.div 
              key={index}
              className="logo-item h-12 px-6 py-2 flex items-center justify-center rounded-md bg-dark-elevated/50 backdrop-blur-sm"
              variants={itemVariants}
            >
              {/* Replace with actual logos */}
              <div className="text-text-secondary font-medium">{company}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;