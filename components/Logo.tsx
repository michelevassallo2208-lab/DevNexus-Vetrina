
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative group flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" className="w-full h-full transform transition-transform duration-500 group-hover:rotate-12">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path 
        d="M20,20 L80,20 L80,80 L20,80 Z" 
        fill="none" 
        stroke="url(#logoGrad)" 
        strokeWidth="6" 
        strokeLinejoin="round"
        className="opacity-20"
      />
      <path 
        d="M25,25 L50,50 L25,75" 
        fill="none" 
        stroke="url(#logoGrad)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M55,25 L80,50 L55,75" 
        fill="none" 
        stroke="url(#logoGrad)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="opacity-60"
      />
    </svg>
    <div className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:bg-blue-500/40 transition-colors rounded-full"></div>
  </div>
);

export default Logo;
