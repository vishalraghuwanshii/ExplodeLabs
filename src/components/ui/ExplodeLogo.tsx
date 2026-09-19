import React from 'react';

interface ExplodeLogoProps {
  className?: string;
  size?: number;
}

export function ExplodeLogo({ className = '', size = 30 }: ExplodeLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Subtle Ambient Red-Orange Glow on Hover */}
      <div 
        className="absolute inset-0 blur-md opacity-25 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 60, 0, 0.7) 0%, rgba(255, 85, 0, 0) 70%)'
        }}
      />

      {/* SVG Icon: 4 Sharp Corners with Bold, Thick Negative Space X Channels */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Top Quadrant Gradient */}
          <radialGradient id="quadGradTop" cx="50%" cy="20%" r="75%">
            <stop offset="0%" stopColor="#FF5500" />
            <stop offset="55%" stopColor="#E61000" />
            <stop offset="100%" stopColor="#990000" />
          </radialGradient>

          {/* Bottom Quadrant Gradient */}
          <radialGradient id="quadGradBottom" cx="50%" cy="80%" r="75%">
            <stop offset="0%" stopColor="#FF5500" />
            <stop offset="55%" stopColor="#E61000" />
            <stop offset="100%" stopColor="#990000" />
          </radialGradient>

          {/* Left Quadrant Gradient */}
          <radialGradient id="quadGradLeft" cx="20%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#FF5500" />
            <stop offset="55%" stopColor="#E61000" />
            <stop offset="100%" stopColor="#990000" />
          </radialGradient>

          {/* Right Quadrant Gradient */}
          <radialGradient id="quadGradRight" cx="80%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#FF5500" />
            <stop offset="55%" stopColor="#E61000" />
            <stop offset="100%" stopColor="#990000" />
          </radialGradient>

          {/* Subtle Top-Left Specular Surface Sheen */}
          <linearGradient id="quadSpecular" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* TOP QUADRANT (Sharp outer corners, bold negative space X) */}
        <path
          d="M 10 4 H 90 L 85 9 Q 50 45 15 9 L 10 4 Z"
          fill="url(#quadGradTop)"
        />
        <path
          d="M 10 4 H 90 L 85 9 Q 50 45 15 9 L 10 4 Z"
          fill="url(#quadSpecular)"
        />

        {/* BOTTOM QUADRANT */}
        <path
          d="M 10 96 H 90 L 85 91 Q 50 55 15 91 L 10 96 Z"
          fill="url(#quadGradBottom)"
        />

        {/* LEFT QUADRANT */}
        <path
          d="M 4 10 V 90 L 9 85 Q 45 50 9 15 L 4 10 Z"
          fill="url(#quadGradLeft)"
        />
        <path
          d="M 4 10 V 90 L 9 85 Q 45 50 9 15 L 4 10 Z"
          fill="url(#quadSpecular)"
        />

        {/* RIGHT QUADRANT */}
        <path
          d="M 96 10 V 90 L 91 85 Q 55 50 91 15 L 96 10 Z"
          fill="url(#quadGradRight)"
        />
      </svg>
    </div>
  );
}
