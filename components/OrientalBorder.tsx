import React from 'react';

export const OrientalBorder: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center opacity-40 my-8 ${className}`}>
      <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10H200" stroke="currentColor" strokeWidth="1" />
        <rect x="95" y="5" width="10" height="10" transform="rotate(45 95 5)" stroke="currentColor" strokeWidth="1" />
        <rect x="80" y="7.5" width="5" height="5" transform="rotate(45 80 7.5)" fill="currentColor" />
        <rect x="115" y="7.5" width="5" height="5" transform="rotate(45 115 7.5)" fill="currentColor" />
      </svg>
    </div>
  );
};

export const CloudPattern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute -z-10 opacity-10 pointer-events-none ${className}`}>
      <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20 60C15 60 10 55 10 50C10 40 20 40 25 45C30 35 45 35 50 45C55 35 70 35 75 45C80 40 90 40 90 50C90 55 85 60 80 60H20Z" />
      </svg>
    </div>
  );
};