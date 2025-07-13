"use client";

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function WaitlistContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Get the referral email from the URL
    const referralEmail = searchParams.get('ref');
    
    if (referralEmail) {
      try {
        // Store the referral information in localStorage
        localStorage.setItem('waitlistReferral', referralEmail);
        
        // Add a small delay to ensure localStorage is set
        setTimeout(() => {
          // Check if we're on the correct domain
          if (window.location.hostname === 'quantumlayerplatform.com') {
            window.location.href = '/#contact';
          } else {
            // For local development or other domains
            router.replace('/#contact');
          }
        }, 100);
      } catch (error) {
        console.error('Error storing referral:', error);
        // Fallback to direct navigation
        window.location.href = '/#contact';
      }
    } else {
      // No referral, just redirect to homepage
      window.location.href = '/';
    }
  }, [router, searchParams]);
  
  return (
    <div className="text-white text-center">
      <div className="mb-4">
        <div className="inline-block animate-spin h-8 w-8 border-4 border-t-transparent border-white rounded-full"></div>
      </div>
      <p>Redirecting you to our waitlist...</p>
    </div>
  );
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <Suspense fallback={
        <div className="text-white text-center">
          <div className="mb-4">
            <div className="inline-block animate-spin h-8 w-8 border-4 border-t-transparent border-white rounded-full"></div>
          </div>
          <p>Loading...</p>
        </div>
      }>
        <WaitlistContent />
      </Suspense>
    </div>
  );
} 