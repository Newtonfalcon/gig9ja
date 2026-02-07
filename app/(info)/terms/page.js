'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { COMPANY_INFO, CONTACT_INFO } from '@/libs/constants';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-[#666666]">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-[15px] text-[#666666] leading-relaxed">
            Welcome to <strong className="text-black">{COMPANY_INFO.name}</strong>. By accessing or 
            using our platform, you agree to be bound by these Terms of Service. Please read them 
            carefully before using our services.
          </p>
        </section>

        {/* Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              1. Acceptance of Terms
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              By creating an account or using {COMPANY_INFO.name}, you agree to comply with and be 
              legally bound by these Terms of Service. If you do not agree to these terms, you may 
              not access or use our platform. We reserve the right to modify these terms at any time, 
              and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              2. Eligibility
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>To use {COMPANY_INFO.name}, you must:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Not be prohibited from using the platform under applicable laws</li>
                <li>Not have been previously suspended or banned from the platform</li>
              </ul>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              3. User Accounts
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>When you create an account, you agree to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
                <li>Not share your account with others or create multiple accounts</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate accounts that violate these terms or 
                engage in fraudulent, abusive, or illegal activities.
              </p>
            </div>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              4. User Conduct
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>You agree NOT to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Post false, misleading, or fraudulent information</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Use the platform for spam or unauthorized advertising</li>
                <li>Attempt to hack, disrupt, or compromise platform security</li>
                <li>Scrape, data mine, or use automated tools without permission</li>
                <li>Impersonate others or misrepresent your affiliation</li>
              </ul>
            </div>
          </section>

          {/* Services and Fees */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              5. Services and Fees
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>
                {COMPANY_INFO.name} connects freelancers with clients. We may charge service fees 
                for certain transactions, which will be clearly disclosed before you complete any 
                payment.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change our fee structure with notice</li>
                <li>Payment processing is handled by secure third-party providers</li>
                <li>You are responsible for any taxes applicable to your transactions</li>
              </ul>
            </div>
          </section>

          {/* Freelancer Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              6. Freelancer Obligations
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>As a freelancer, you agree to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide services professionally and competently</li>
                <li>Complete work as agreed with clients</li>
                <li>Communicate promptly and professionally</li>
                <li>Maintain accurate skill and experience representations</li>
                <li>Comply with all applicable tax and legal requirements</li>
                <li>Not solicit clients to work outside the platform to avoid fees</li>
              </ul>
            </div>
          </section>

          {/* Client Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              7. Client Obligations
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>As a client, you agree to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide clear project requirements and expectations</li>
                <li>Pay freelancers promptly according to agreed terms</li>
                <li>Communicate professionally and respectfully</li>
                <li>Not request work that violates laws or platform policies</li>
                <li>Provide honest feedback and reviews</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              8. Intellectual Property
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>
                <strong className="text-black">Platform Content:</strong> All content, features, 
                and functionality of {COMPANY_INFO.name} are owned by us and protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p>
                <strong className="text-black">User Content:</strong> You retain ownership of content 
                you post, but grant us a license to use, display, and distribute it on our platform. 
                Work product and intellectual property rights between freelancers and clients should 
                be agreed upon separately.
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              9. Dispute Resolution
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>
                While we facilitate connections between freelancers and clients, {COMPANY_INFO.name} 
                is not a party to agreements between users. We encourage users to resolve disputes 
                amicably. If needed, we may provide mediation support, but we are not obligated to 
                resolve disputes or provide refunds.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              10. Limitation of Liability
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>
                {COMPANY_INFO.name} is provided "as is" without warranties of any kind. We are not 
                liable for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Quality, timeliness, or completion of services between users</li>
                <li>Conduct or actions of users on the platform</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Issues arising from third-party services or payment processors</li>
              </ul>
            </div>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              11. Indemnification
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              You agree to indemnify and hold {COMPANY_INFO.name} harmless from any claims, damages, 
              losses, or expenses arising from your use of the platform, violation of these terms, 
              or infringement of any rights of others.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              12. Termination
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed space-y-3">
              <p>
                We reserve the right to suspend or terminate your account at any time for violation 
                of these terms, suspicious activity, or at our discretion. You may also terminate 
                your account at any time by contacting us.
              </p>
              <p>
                Upon termination, your right to use the platform ceases immediately. Provisions that 
                should survive termination (including payment obligations and intellectual property 
                rights) will remain in effect.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              13. Governing Law
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              These Terms of Service are governed by the laws of the Federal Republic of Nigeria. 
              Any disputes arising from these terms will be subject to the exclusive jurisdiction 
              of Nigerian courts.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              14. Changes to Terms
            </h2>
            <p className="text-[15px] text-[#666666] leading-relaxed">
              We may update these Terms of Service from time to time. We will notify you of significant 
              changes by posting the new terms on this page and updating the "Last updated" date. Your 
              continued use of the platform after changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 font-['Outfit',sans-serif]">
              15. Contact Us
            </h2>
            <div className="text-[15px] text-[#666666] leading-relaxed">
              <p className="mb-3">
                If you have questions about these Terms of Service, please contact us:
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
            By using {COMPANY_INFO.name}, you acknowledge that you have read, understood, and agree 
            to be bound by these Terms of Service
          </p>
        </div>
      </div>
    </main>
  );
}