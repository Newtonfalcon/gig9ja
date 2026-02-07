'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CONTACT_INFO, SUPPORT_HOURS, COMPANY_INFO } from '@/libs/constants';
import { ArrowLeft, Mail, Phone, Twitter, Clock } from 'lucide-react';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Send contact form to backend
    console.log('Contact form:', formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header with Back Button */}
      <div className="border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6 py-4">
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
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 font-['Outfit',sans-serif]">
            Get in Touch
          </h1>
          <p className="text-lg text-[#666666]">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-['Outfit',sans-serif]">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 border border-[#e8e8e8] rounded-sm hover:border-black transition-colors duration-200">
                <div className="bg-black text-white p-3 rounded-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-[#666666] hover:text-green-500 transition-colors duration-200"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 border border-[#e8e8e8] rounded-sm hover:border-black transition-colors duration-200">
                <div className="bg-black text-white p-3 rounded-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666666] hover:text-green-500 transition-colors duration-200"
                  >
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* Twitter */}
              <div className="flex items-start gap-4 p-4 border border-[#e8e8e8] rounded-sm hover:border-black transition-colors duration-200">
                <div className="bg-black text-white p-3 rounded-sm">
                  <Twitter className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Twitter</h3>
                  <a
                    href={CONTACT_INFO.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666666] hover:text-green-500 transition-colors duration-200"
                  >
                    {CONTACT_INFO.twitter}
                  </a>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start gap-4 p-4 bg-[#f8f8f8] rounded-sm">
                <div className="bg-black text-white p-3 rounded-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Support Hours</h3>
                  <p className="text-sm text-[#666666]">
                    Weekdays: {SUPPORT_HOURS.weekdays}
                  </p>
                  <p className="text-sm text-[#666666]">
                    Weekend: {SUPPORT_HOURS.weekend}
                  </p>
                  <p className="text-xs text-[#999999] mt-1">
                    {SUPPORT_HOURS.timezone}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-sm">
              <p className="text-sm text-green-800">
                <strong>Fast Response Time:</strong> We typically respond to all inquiries 
                within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 font-['Outfit',sans-serif]">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white px-6 py-3.5 text-[15px] font-semibold rounded-sm hover:bg-[#1a1a1a] active:translate-y-0 hover:translate-y-[-1px] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}