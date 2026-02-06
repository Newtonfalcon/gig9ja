'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/libs/firebase-config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';

export default function Recruiter() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        if (currentUser.displayName && !formData.name) {
          setFormData(prev => ({
            ...prev,
            name: currentUser.displayName
          }));
        }
      } else {
       
        router.push('/login');
      }
    });


    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    if (!user) {
      setError('You must be logged in to continue.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      
      await addDoc(collection(db, "users"), {
        name: formData.name || user.displayName || "Anonymous",
        company: formData.company || "",
        jobRole: formData.role || "", 
        userRole: "recruiter", 
        email: user.email,
        profileImage: user.photoURL || "",
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

     
      router.push('/dashboard');
    } catch (err) {
      console.error('Error saving recruiter data:', err);
      setError('Failed to save your information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = async () => {
    
    if (!user) {
      router.push('/login');
      return;
    }

    setLoading(true);

    try {
      
      await addDoc(collection(db, "users"), {
        name: user.displayName || "Anonymous",
        company: "",
        jobRole: "",
        userRole: "recruiter",
        email: user.email,
        profileImage: user.photoURL || "",
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      console.error('Error creating user record:', err);
      setError('Failed to continue. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 font-['Outfit',sans-serif]">
            gig<span className="text-green-500">9ja</span>
          </h1>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 font-['Outfit',sans-serif]">
            Welcome, Recruiter!
          </h2>
          <p className="text-sm text-[#666666]">
            The following information will help us tailor your experience and connect you with the best freelancers for your projects.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-[#fff5f5] border border-[#ff6b6b] text-[#c92a2a] px-4 py-3 rounded-sm text-sm mb-5">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={user?.displayName || "John Doe"}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
              disabled={loading}
            />
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
              disabled={loading}
            />
          </div>

          {/* Role Field */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-black mb-2">
              Your Role
            </label>
            <input
              id="role"
              name="role"
              type="text"
              placeholder="Hiring Manager"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
              disabled={loading}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !user}
            className="w-full bg-black text-white px-6 py-3.5 text-[15px] font-semibold rounded-sm hover:bg-[#1a1a1a] active:translate-y-0 hover:translate-y-[-1px] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Continue'
            )}
          </button>

          {/* Skip Button */}
          <button
            type="button"
            onClick={handleSkip}
            disabled={loading || !user}
            className="w-full text-[#666666] px-6 py-3 text-[15px] font-medium hover:text-black transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Skip for now
          </button>
        </form>

        {/* Info Text */}
        <p className="text-center text-xs text-[#999999] mt-6">
          You can always update this information later in your profile settings.
        </p>
      </div>
    </main>
  );
}