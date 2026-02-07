'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/libs/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';


export default function Freelancer() {

  const [user, setUser] = useState(null);
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
          setUser(user);
        }else{
          setUser(null);
        }

      })

      return () => unsubscribe();

    },[])
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Form data that will be collected from user
  const [formData, setFormData] = useState({
    fullName: '',
    professionalTitle: '',
    bio: '',
    primarySkills: '',
    location: '',
    availability: '',
    experienceLevel: '',
    role: 'freelancer', 
    portfolioLinks: ''
  });

  
  const [accountDetails] = useState({
    bankName: '',
    accountNumber: '',
    accountName: '',
    paymentMethod: '',
    taxId: '',
    businessRegistration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.professionalTitle.trim()) {
      newErrors.professionalTitle = 'Professional title is required';
    }

    if (!formData.bio.trim()) {
      newErrors.bio = 'Bio is required';
    } else if (formData.bio.trim().length < 50) {
      newErrors.bio = 'Bio should be at least 50 characters';
    }

    if (!formData.primarySkills.trim()) {
      newErrors.primarySkills = 'At least one skill is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.availability.trim()) {
      newErrors.availability = 'Availability is required';
    }

    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Experience level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Combine form data with account details
    const completeData = {
      ...formData,
      accountDetails
    };


    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      email: user.email,
      profileImage: user.photoURL || "",
      userId: user.uid,
      trustedRating: 0,

      
      ...completeData
    });

   

    // Redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-white text-black py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 font-['Outfit',sans-serif]">
            gig<span className="text-green-500">9ja</span>
          </h1>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 font-['Outfit',sans-serif]">
            Create Your Freelancer Profile
          </h2>
          <p className="text-[15px] text-[#666666] max-w-xl mx-auto">
            Tell us about yourself and showcase your skills. This information will help clients find and connect with you for exciting projects.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
              Full Name <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="e.g., Chioma Adebayo"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-[15px] border ${errors.fullName ? 'border-[#ff6b6b]' : 'border-[#d0d0d0]'} rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200`}
              disabled={loading}
            />
            {errors.fullName && (
              <p className="text-xs text-[#ff6b6b] mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Professional Title */}
          <div>
            <label htmlFor="professionalTitle" className="block text-sm font-medium text-black mb-2">
              Professional Title <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="professionalTitle"
              name="professionalTitle"
              type="text"
              placeholder="e.g., Full-Stack Developer, Graphic Designer, Content Writer"
              value={formData.professionalTitle}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-[15px] border ${errors.professionalTitle ? 'border-[#ff6b6b]' : 'border-[#d0d0d0]'} rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200`}
              disabled={loading}
            />
            {errors.professionalTitle && (
              <p className="text-xs text-[#ff6b6b] mt-1">{errors.professionalTitle}</p>
            )}
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-black mb-2">
              Professional Bio <span className="text-[#FF6B35]">*</span>
            </label>
            <textarea
              id="bio"
              name="bio"
              rows="5"
              placeholder="Tell clients about yourself, your expertise, and what makes you unique. Include your background, specializations, and what you're passionate about. (Minimum 50 characters)"
              value={formData.bio}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-[15px] border ${errors.bio ? 'border-[#ff6b6b]' : 'border-[#d0d0d0]'} rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 resize-none`}
              disabled={loading}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.bio ? (
                <p className="text-xs text-[#ff6b6b]">{errors.bio}</p>
              ) : (
                <p className="text-xs text-[#999999]">
                  {formData.bio.length} / 50 characters minimum
                </p>
              )}
            </div>
          </div>

          {/* Primary Skills */}
          <div>
            <label htmlFor="primarySkills" className="block text-sm font-medium text-black mb-2">
              Primary Skills <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="primarySkills"
              name="primarySkills"
              type="text"
              placeholder="e.g., React, Node.js, UI/UX Design, SEO, Video Editing (separate with commas)"
              value={formData.primarySkills}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-[15px] border ${errors.primarySkills ? 'border-[#ff6b6b]' : 'border-[#d0d0d0]'} rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200`}
              disabled={loading}
            />
            {errors.primarySkills ? (
              <p className="text-xs text-[#ff6b6b] mt-1">{errors.primarySkills}</p>
            ) : (
              <p className="text-xs text-[#999999] mt-1">List your top skills, separated by commas</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-black mb-2">
              Location <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g., Lagos, Abuja, Remote - Nigeria"
              value={formData.location}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-[15px] border ${errors.location ? 'border-[#ff6b6b]' : 'border-[#d0d0d0]'} rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200`}
              disabled={loading}
            />
            {errors.location && (
              <p className="text-xs text-[#ff6b6b] mt-1">{errors.location}</p>
            )}
          </div>

          {/* Availability */}
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-black mb-2">
              Availability <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="availability"
              name="availability"
              type="text"
              placeholder="e.g., Full-time, Part-time (20hrs/week), Available immediately, Starting in 2 weeks"
              value={formData.availability}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-[15px] border ${errors.availability ? 'border-[#ff6b6b]' : 'border-[#d0d0d0]'} rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200`}
              disabled={loading}
            />
            {errors.availability && (
              <p className="text-xs text-[#ff6b6b] mt-1">{errors.availability}</p>
            )}
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-black mb-3">
              Experience Level <span className="text-[#FF6B35]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Beginner Option */}
              <label
                className={`relative flex items-center justify-center px-4 py-4 border-2 rounded-sm cursor-pointer transition-all duration-200 ${
                  formData.experienceLevel === 'beginner'
                    ? 'border-black bg-black text-white'
                    : 'border-[#d0d0d0] bg-white text-black hover:border-black'
                } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <input
                  type="radio"
                  name="experienceLevel"
                  value="beginner"
                  checked={formData.experienceLevel === 'beginner'}
                  onChange={handleChange}
                  className="sr-only"
                  disabled={loading}
                />
                <div className="text-center">
                  <div className="font-semibold text-[15px]">Beginner</div>
                  <div className={`text-xs mt-1 ${formData.experienceLevel === 'beginner' ? 'text-white/80' : 'text-[#666666]'}`}>
                    0-2 years
                  </div>
                </div>
              </label>

              {/* Intermediate Option */}
              <label
                className={`relative flex items-center justify-center px-4 py-4 border-2 rounded-sm cursor-pointer transition-all duration-200 ${
                  formData.experienceLevel === 'intermediate'
                    ? 'border-black bg-black text-white'
                    : 'border-[#d0d0d0] bg-white text-black hover:border-black'
                } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <input
                  type="radio"
                  name="experienceLevel"
                  value="intermediate"
                  checked={formData.experienceLevel === 'intermediate'}
                  onChange={handleChange}
                  className="sr-only"
                  disabled={loading}
                />
                <div className="text-center">
                  <div className="font-semibold text-[15px]">Intermediate</div>
                  <div className={`text-xs mt-1 ${formData.experienceLevel === 'intermediate' ? 'text-white/80' : 'text-[#666666]'}`}>
                    2-5 years
                  </div>
                </div>
              </label>

              {/* Expert Option */}
              <label
                className={`relative flex items-center justify-center px-4 py-4 border-2 rounded-sm cursor-pointer transition-all duration-200 ${
                  formData.experienceLevel === 'expert'
                    ? 'border-black bg-black text-white'
                    : 'border-[#d0d0d0] bg-white text-black hover:border-black'
                } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <input
                  type="radio"
                  name="experienceLevel"
                  value="expert"
                  checked={formData.experienceLevel === 'expert'}
                  onChange={handleChange}
                  className="sr-only"
                  disabled={loading}
                />
                <div className="text-center">
                  <div className="font-semibold text-[15px]">Expert</div>
                  <div className={`text-xs mt-1 ${formData.experienceLevel === 'expert' ? 'text-white/80' : 'text-[#666666]'}`}>
                    5+ years
                  </div>
                </div>
              </label>
            </div>
            {errors.experienceLevel && (
              <p className="text-xs text-[#ff6b6b] mt-2">{errors.experienceLevel}</p>
            )}
          </div>

          {/* Portfolio/Project Links */}
          <div>
            <label htmlFor="portfolioLinks" className="block text-sm font-medium text-black mb-2">
              Portfolio & Project Links
            </label>
            <textarea
              id="portfolioLinks"
              name="portfolioLinks"
              rows="4"
              placeholder="Share links to your portfolio, GitHub, Behance, Dribbble, or completed projects. One link per line:
https://github.com/yourusername
https://yourportfolio.com
https://behance.net/yourprofile"
              value={formData.portfolioLinks}
              onChange={handleChange}
              className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 resize-none"
              disabled={loading}
            />
            <p className="text-xs text-[#999999] mt-1">Optional but highly recommended - helps clients see your work</p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white px-6 py-4 text-[15px] font-semibold rounded-sm hover:bg-[#1a1a1a] active:translate-y-0 hover:translate-y-[-1px] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating your profile...</span>
                </>
              ) : (
                'Create Profile & Continue'
              )}
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#999999]">
            You can update your profile information anytime from your dashboard settings.
          </p>
        </div>
      </div>
    </main>
  );
}