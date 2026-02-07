'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { COMPANY_INFO, CONTACT_INFO } from '@/libs/constants';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  const router = useRouter();
  const lastUpdated = 'February 2024';

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
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3 font-['Outfit',sans-serif]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#666666]">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-[15px] text-[#666666] leading-relaxed">
            At <strong className="text-black">{COMPANY_INFO.name}</strong>, we take your privacy seriously. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you use our platform. Please read this policy carefully.
          </p>
        </section>

        {/* Sections */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-[15px] text-[#666666] leading-relaxed">
              <div>
                <h3 className="font-semibold text-black mb-2">Personal Information</h3>
                <p>
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Profile information (bio, skills, experience)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication data (messages, support requests)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">Automatically Collected Information</h3>
                <p>
                  When you use our platform, we automatically collect:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              2. How We Use Your Information
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed">
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                <li>Personalize your experience on our platform</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              3. Information Sharing and Disclosure
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed">
              <p className="mb-3">
                We do not sell your personal information. We may share your information in the 
                following situations:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong className="text-black">With other users:</strong> Your public profile information is visible to other users</li>
                <li><strong className="text-black">With service providers:</strong> We share information with vendors who perform services on our behalf</li>
                <li><strong className="text-black">For legal purposes:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-black">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-black">With your consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              4. Data Security
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the Internet is 100% secure. While 
              we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              5. Your Rights and Choices
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed">
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our platform and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent. However, some features may not function properly 
              without cookies.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              7. Third-Party Links
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              Our platform may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review their privacy 
              policies before providing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              8. Children's Privacy
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              Our services are not intended for users under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a 
              child, please contact us immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last updated" date. You are advised 
              to review this policy periodically for any changes.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              10. Contact Us
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed">
              <p className="mb-3">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-[#f8f8f8] rounded-sm p-4 space-y-2">
                <p><strong className="text-black">Email:</strong> {CONTACT_INFO.email}</p>
                <p><strong className="text-black">WhatsApp:</strong> {CONTACT_INFO.whatsapp}</p>
                <p><strong className="text-black">Twitter:</strong> {CONTACT_INFO.twitter}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 pt-8 border-t border-[#e8e8e8]">
          <p className="text-sm text-[#999999] text-center">
            By using {COMPANY_INFO.name}, you agree to this Privacy Policy
          </p>
        </div>
      </div>
    </main>
  );
}