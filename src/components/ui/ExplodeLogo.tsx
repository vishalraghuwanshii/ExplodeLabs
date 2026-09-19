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

      {/* SVG Icon: 4-Quadrant Inward-Curving Explosion / Negative Space X-Star Mark with 50% Slimmer X */}
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

        {/* TOP QUADRANT (50% Slimmer Negative Space X) */}
        <path
          d="M 12 6 H 88 A 6 6 0 0 1 94 12 L 89 17 Q 50 48.5 11 17 L 6 12 A 6 6 0 0 1 12 6 Z"
          fill="url(#quadGradTop)"
        />
        <path
          d="M 12 6 H 88 A 6 6 0 0 1 94 12 L 89 17 Q 50 48.5 11 17 L 6 12 A 6 6 0 0 1 12 6 Z"
          fill="url(#quadSpecular)"
        />

        {/* BOTTOM QUADRANT */}
        <path
          d="M 12 94 H 88 A 6 6 0 0 0 94 88 L 89 83 Q 50 51.5 11 83 L 6 88 A 6 6 0 0 0 12 94 Z"
          fill="url(#quadGradBottom)"
        />

        {/* LEFT QUADRANT */}
        <path
          d="M 6 12 V 88 A 6 6 0 0 0 12 94 L 17 89 Q 48.5 50 17 11 L 12 6 A 6 6 0 0 0 6 12 Z"
          fill="url(#quadGradLeft)"
        />
        <path
          d="M 6 12 V 88 A 6 6 0 0 0 12 94 L 17 89 Q 48.5 50 17 11 L 12 6 A 6 6 0 0 0 6 12 Z"
          fill="url(#quadSpecular)"
        />

        {/* RIGHT QUADRANT */}
        <path
          d="M 94 12 V 88 A 6 6 0 0 1 88 94 L 83 89 Q 51.5 50 83 11 L 88 6 A 6 6 0 0 1 94 12 Z"
          fill="url(#quadGradRight)"
        />
      </svg>
    </div>
  );
}
