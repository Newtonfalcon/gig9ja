'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-black font-['Outfit',sans-serif]">
            gig<span className="text-green-500">9ja</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Link 
              href="/login"
              className="px-5 py-2 text-sm font-medium text-black hover:text-[#FF6B35] transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link 
              href="/register"
              className="px-5 py-2 text-sm font-semibold bg-black text-white rounded-sm hover:bg-[#1a1a1a] transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 max-sm:py-12">
        <div className="text-center mb-16">
          {/* Logo Space - Replace with your actual logo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32  flex items-center justify-center">
              {/* Uncomment and use your logo */}
              <Image 
                src="/logo.png" 
                alt="gig9ja logo" 
                width={128} 
                height={128}
                className="cover object-contain justify-center items-center"
              /> 
          
            </div>
          </div>

          <h1 className="text-5xl font-bold text-black mb-6 font-['Outfit',sans-serif] max-sm:text-4xl">
            Welcome to gig<span className="text-green-500">9ja</span>
          </h1>
          
          <p className="text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed mb-4">
            Nigeria's Premier Freelancing Platform
          </p>
          
          <p className="text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
            Connect with skilled Nigerian freelancers or find your next gig. 
            We're building the future of work, one opportunity at a time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white border border-[#e8e8e8] rounded-sm p-8 text-center hover:border-black transition-colors duration-200">
            <div className="w-14 h-14 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Trusted Freelancers
            </h3>
            <p className="text-sm text-[#666666]">
              Access a curated network of verified Nigerian professionals ready to bring your projects to life.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-[#e8e8e8] rounded-sm p-8 text-center hover:border-black transition-colors duration-200">
            <div className="w-14 h-14 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Secure Platform
            </h3>
            <p className="text-sm text-[#666666]">
              Your projects and payments are protected with industry-standard security measures.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-[#e8e8e8] rounded-sm p-8 text-center hover:border-black transition-colors duration-200">
            <div className="w-14 h-14 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Quick Matches
            </h3>
            <p className="text-sm text-[#666666]">
              Find the perfect freelancer or gig in minutes with our smart matching system.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl font-bold text-black mb-6 font-['Outfit',sans-serif]">
            Built for Nigerians, By Nigerians
          </h2>
          <p className="text-base text-[#666666] leading-relaxed mb-4">
            gig9ja is more than just a freelancing platform—it's a community. We understand 
            the unique challenges and opportunities in the Nigerian market, and we've built 
            a platform that works for you.
          </p>
          <p className="text-base text-[#666666] leading-relaxed">
            Whether you're a business looking for talented professionals or a freelancer 
            seeking your next opportunity, gig9ja connects you with trusted partners who 
            speak your language and understand your needs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 text-center">
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2 font-['Outfit',sans-serif]">
              1000+
            </div>
            <div className="text-sm text-[#666666] font-medium">
              Trusted Freelancers
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2 font-['Outfit',sans-serif]">
              500+
            </div>
            <div className="text-sm text-[#666666] font-medium">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2 font-['Outfit',sans-serif]">
              98%
            </div>
            <div className="text-sm text-[#666666] font-medium">
              Client Satisfaction
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-[#fafafa] border border-[#e8e8e8] rounded-sm p-12 max-sm:p-8">
          <h2 className="text-3xl font-bold text-black mb-4 font-['Outfit',sans-serif]">
            Ready to Get Started?
          </h2>
          <p className="text-base text-[#666666] mb-8">
            Join thousands of Nigerians building their future on gig9ja.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-black text-white text-base font-semibold rounded-sm hover:bg-[#1a1a1a] hover:translate-y-[-2px] transition-all duration-200 inline-block"
            >
              Create Free Account
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-white text-black text-base font-semibold border border-[#d0d0d0] rounded-sm hover:bg-[#f8f8f8] hover:border-black transition-all duration-200 inline-block"
            >
              Sign In
            </Link>
          </div>
          
          <p className="text-xs text-[#999999] mt-6">
            No credit card required • Get started in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e8e8] mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-black font-['Outfit',sans-serif]">
              gig<span className="text-green-500">9ja</span>
            </div>
            
            <div className="flex gap-6 text-sm text-[#666666]">
              <Link href="/about" className="hover:text-black transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-black transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-black transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-black transition-colors">
                Terms
              </Link>
            </div>
            
            <div className="text-sm text-[#999999]">
              © 2024 gig9ja. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}