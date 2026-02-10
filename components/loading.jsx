'use client';

import React from 'react';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex items-center gap-1">
        {/* "gig" text with bouncing animation */}
        <div className="flex">
          {['g', 'i', 'g'].map((letter, index) => (
            <span
              key={`gig-${index}`}
              className="text-5xl font-bold text-black font-['Outfit',sans-serif] inline-block animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '0.6s'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* "9ja" text with bouncing animation */}
        <div className="flex">
          {['9', 'j', 'a'].map((letter, index) => (
            <span
              key={`9ja-${index}`}
              className="text-5xl font-bold text-green-500 font-['Outfit',sans-serif] inline-block animate-bounce"
              style={{
                animationDelay: `${(index + 3) * 0.1}s`,
                animationDuration: '0.6s'
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}