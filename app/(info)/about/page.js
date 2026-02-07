'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { COMPANY_INFO, CONTACT_INFO } from '@/libs/constants';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header with Back Button */}
      <div className="border-b border-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#666666] hover:text-black transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3 font-['Outfit',sans-serif]">
            gig<span className="text-green-500">9ja</span>
          </h1>
          <p className="text-lg text-[#666666]">{COMPANY_INFO.tagline}</p>
        </div>

        {/* About Content */}
        <div className="space-y-8">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              Our Mission
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              {COMPANY_INFO.description} We're on a mission to democratize access to opportunities 
              and empower Nigerian talent to compete on a global stage. Whether you're a freelancer 
              looking for your next gig or a business seeking skilled professionals, gig9ja is your 
              trusted partner in success.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#e8e8e8] rounded-sm p-6">
                <h3 className="text-lg font-semibold mb-2">For Freelancers</h3>
                <p className="text-sm text-[#666666]">
                  Access a wide range of opportunities, build your portfolio, connect with 
                  reputable clients, and grow your career on your own terms.
                </p>
              </div>
              <div className="border border-[#e8e8e8] rounded-sm p-6">
                <h3 className="text-lg font-semibold mb-2">For Businesses</h3>
                <p className="text-sm text-[#666666]">
                  Find vetted, talented professionals for your projects, scale your team 
                  efficiently, and access Nigeria's best freelance talent pool.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              Why Choose gig9ja?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-[15px] text-[#666666]">
                  <strong className="text-black">Local Expertise:</strong> We understand the Nigerian market and its unique dynamics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-[15px] text-[#666666]">
                  <strong className="text-black">Verified Talent:</strong> All freelancers are carefully vetted for quality and professionalism
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-[15px] text-[#666666]">
                  <strong className="text-black">Secure Payments:</strong> Safe and reliable payment processing for peace of mind
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-[15px] text-[#666666]">
                  <strong className="text-black">24/7 Support:</strong> Our team is always here to help you succeed
                </span>
              </li>
            </ul>
          </section>

          {/* Company Info */}
          <section className="bg-[#f8f8f8] rounded-sm p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#666666]">Founded</h3>
                <p className="text-lg font-medium">{COMPANY_INFO.foundedYear}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2 text-[#666666]">Location</h3>
                <p className="text-lg font-medium">{COMPANY_INFO.location}</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              Ready to Get Started?
            </h2>
            <p className="text-[#666666] mb-6">
              Join thousands of freelancers and businesses already using gig9ja
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/register')}
                className="px-8 py-3 bg-black text-white font-semibold rounded-sm hover:bg-[#1a1a1a] transition-colors duration-200"
              >
                Sign Up Now
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-3 border border-[#d0d0d0] text-black font-semibold rounded-sm hover:bg-[#f8f8f8] transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}