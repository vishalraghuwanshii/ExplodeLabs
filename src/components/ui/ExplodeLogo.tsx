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
        className="absolute inset-0 rounded-lg blur-md opacity-25 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 60, 0, 0.7) 0%, rgba(255, 85, 0, 0) 70%)'
        }}
      />

      {/* SVG Icon: 4-Quadrant Inward-Curving Explosion / Negative Space X-Star Mark */}
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

        {/* TOP QUADRANT */}
        <path
          d="M 14 8 H 86 A 6 6 0 0 1 92 14 Q 50 47 8 14 A 6 6 0 0 1 14 8 Z"
          fill="url(#quadGradTop)"
        />
        <path
          d="M 14 8 H 86 A 6 6 0 0 1 92 14 Q 50 47 8 14 A 6 6 0 0 1 14 8 Z"
          fill="url(#quadSpecular)"
        />

        {/* BOTTOM QUADRANT */}
        <path
          d="M 14 92 H 86 A 6 6 0 0 0 92 86 Q 50 53 8 86 A 6 6 0 0 0 14 92 Z"
          fill="url(#quadGradBottom)"
        />

        {/* LEFT QUADRANT */}
        <path
          d="M 8 14 V 86 A 6 6 0 0 0 14 92 Q 47 50 14 8 A 6 6 0 0 0 8 14 Z"
          fill="url(#quadGradLeft)"
        />
        <path
          d="M 8 14 V 86 A 6 6 0 0 0 14 92 Q 47 50 14 8 A 6 6 0 0 0 8 14 Z"
          fill="url(#quadSpecular)"
        />

        {/* RIGHT QUADRANT */}
        <path
          d="M 92 14 V 86 A 6 6 0 0 1 86 92 Q 53 50 86 8 A 6 6 0 0 1 92 14 Z"
          fill="url(#quadGradRight)"
        />
      </svg>
    </div>
  );
}

