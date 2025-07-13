"use client";
import { useEffect } from 'react';

const HowItWorks = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const steps = document.querySelectorAll('.process-step');
      
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function animateOnScroll() {
        steps.forEach((step, index) => {
          if (isInViewport(step)) {
            // Add a staggered delay based on index
            setTimeout(() => {
              step.classList.add('fade-in-element');
            }, index * 150);
          }
        });
      }

      window.addEventListener('scroll', animateOnScroll);
      setTimeout(animateOnScroll, 300);

      return () => {
        window.removeEventListener('scroll', animateOnScroll);
      };
    }
  }, []);

  const steps = [
    {
      number: 1,
      title: "Submit Task via Natural Language",
      description: "Describe what you need in plain language. Our intent classifier analyzes your request to understand requirements, constraints, and goals."
    },
    {
      number: 2,
      title: "Platform Spawns Specialized Agents",
      description: "Based on your task, the platform dynamically creates and orchestrates specialized agents with the exact capabilities needed for optimal execution."
    },
    {
      number: 3,
      title: "Receive Validated Output with Memory",
      description: "Get high-quality results that pass through our validation framework, while the platform remembers context for future interactions, creating a seamless experience."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <ol className="space-y-6 max-w-3xl mx-auto text-lg text-gray-300 list-decimal list-inside px-4">
        {steps.map((step) => (
          <li key={step.number} className="process-step p-4 rounded-lg bg-gray-900 bg-opacity-50">
            <div className="ml-2">
              <h3 className="text-xl font-semibold inline-block">{step.title}</h3>
              <p className="mt-2">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
