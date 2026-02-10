'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile, sendEmailVerification } from 'firebase/auth';
import { auth, googleProvider } from '../../../libs/firebase-config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      const user = userCredential.user;
      const token = await user.getIdToken();
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      await sendEmailVerification(user);
      
      
      // Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: name
      });
      
      router.push('/onboardingselect');
    } catch (err) {
      let errorMessage = 'An error occurred. Please try again.';
      
      switch (err.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password accounts are not enabled.';
          break;
        default:
          errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const token = await userCredential.user.getIdToken();
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      router.push('/onboardingselect');
    } catch (err) {
      let errorMessage = 'An error occurred with Google sign-in.';
      
      if (err.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Sign-in cancelled.';
      } else if (err.code === 'auth/account-exists-with-different-credential') {
        errorMessage = 'An account already exists with this email.';
      } else {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5 font-['DM_Sans',sans-serif]">
      <div className="w-full max-w-[440px] bg-white border border-[#e8e8e8] rounded-sm p-12 max-sm:p-8">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="text-[42px] font-bold text-black tracking-tight mb-2 font-['Outfit',sans-serif] max-sm:text-4xl">
            gig<span className="text-green-500 ">9ja</span>
          </div>
          <div className="text-[15px] text-[#666666]">Find gigs, build your future</div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-black mb-2 font-['Outfit',sans-serif] max-sm:text-2xl">
            Create account
          </h1>
          <p className="text-[15px] text-[#666666]">
            Get started with your free account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-[#fff5f5] border border-[#ff6b6b] text-[#c92a2a] px-4 py-3 rounded-sm text-sm mb-5">
            {error}
          </div>
        )}

        {/* Register Form */}
        <form onSubmit={handleEmailRegister}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 text-[15px] border border-[#d0d0d0] rounded-sm bg-white text-black placeholder:text-[#999999] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200"
              placeholder="Create a password (min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white px-6 py-3.5 text-[15px] font-semibold rounded-sm hover:bg-[#1a1a1a] active:translate-y-0 hover:translate-y-[-1px] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center text-center my-6">
          <div className="flex-1 border-b border-[#e8e8e8]" />
          <span className="px-4 text-[13px] text-[#999999] font-medium">OR</span>
          <div className="flex-1 border-b border-[#e8e8e8]" />
        </div>

        {/* Google Sign Up */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          disabled={loading}
          className="w-full bg-white text-black border border-[#d0d0d0] px-6 py-3.5 text-[15px] font-semibold rounded-sm hover:bg-[#f8f8f8] hover:border-[#b0b0b0] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
          ) : (
            <>
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </>
          )}
        </button>

        {/* Terms */}
        <p className="text-center text-[13px] text-[#999999] mt-4">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="text-black hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-black hover:underline">
            Privacy Policy
          </Link>
        </p>

        {/* Toggle to Login */}
        <div className="text-center mt-6 text-sm text-[#666666]">
          Already have an account?{' '}
          <Link 
            href="/login" 
            className="text-black font-semibold hover:border-b hover:border-black transition-all duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}