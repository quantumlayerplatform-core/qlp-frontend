"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Audience from '../components/Audience';
import Architecture from '../components/Architecture';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Security from '../components/Security';

function HomeContent() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Check for referral parameter
    const ref = searchParams.get('ref');
    if (ref) {
      try {
        localStorage.setItem('waitlistReferral', ref);
      } catch (error) {
        console.error('Error storing referral:', error);
      }
    }
  }, [searchParams]);

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <Security />
      <Audience />
      <Architecture />
      <Partners />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <main>
        <Header />
        <div className="min-h-screen bg-dark-bg flex items-center justify-center">
          <div className="text-white text-center">
            <div className="mb-4">
              <div className="inline-block animate-spin h-8 w-8 border-4 border-t-transparent border-white rounded-full"></div>
            </div>
            <p>Loading...</p>
          </div>
        </div>
      </main>
    }>
      <HomeContent />
    </Suspense>
  );
}
