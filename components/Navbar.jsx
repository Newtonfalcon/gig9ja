'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  IoHomeOutline,
  IoSearchOutline, 
  IoAddCircleOutline,
  IoPersonOutline,
  IoSettingsOutline
} from 'react-icons/io5';
import { useAuth } from '@/libs/context/AuthContext';


export default function BottomNavIsland({Cpath}) {
  const pathname = usePathname();
  const router = useRouter();
  
 

  
  // Navigation items data
  const navItems = [
    {
      label: 'Home',
      path: Cpath,
      icon: IoHomeOutline
    },
    {
      label: 'Search',
      path: '/dashboard/search',
      icon: IoSearchOutline
    },
    {
      label: 'Post',
      path: '/dashboard/post',
      icon: IoAddCircleOutline
    },
    {
      label: 'Profile',
      path: '/dashboard/profile',
      icon: IoPersonOutline
    },
    {
      label: 'Settings',
      path: '/dashboard/settings',
      icon: IoSettingsOutline
    }
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 px-5 pb-5 z-50 pointer-events-none">
      <nav className="max-w-sm mx-auto bg-black rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] pointer-events-auto">
        <div className="flex items-center justify-around h-16 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="flex flex-col items-center justify-center gap-1 flex-1 group relative"
              >
                {/* Icon with green circle outline when active */}
                <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'bg-green-500/10 ring-2 ring-green-500' 
                    : 'group-hover:bg-white/5'
                }`}>
                  <Icon className={`text-[23px] transition-all duration-200 ${
                    isActive 
                      ? 'text-green-500' 
                      : 'text-white/70 group-hover:text-white group-hover:scale-110'
                  }`} />
                </div>
                
                {/* Label - only show for active */}
                {isActive && (
                  <span className="text-[9px] font-semibold text-green-500 tracking-wide">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}