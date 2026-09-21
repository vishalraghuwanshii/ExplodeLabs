'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { openCalendly } from './CalendlyModal';
import { ArrowRight, X, FileText } from 'lucide-react';

export function FloatingBookingPill() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('explode_floating_pill_dismissed');
      if (dismissed === 'true') {
        setIsDismissed(true);
        return;
      }
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const totalHeight = document.documentElement.scrollHeight;
          const viewportHeight = window.innerHeight;
          const distanceFromBottom = totalHeight - (scrollY + viewportHeight);

          // Show when scrolled past 450px AND at least 320px away from bottom banner
          if (scrollY > 450 && distanceFromBottom > 320 && !isDismissed) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('explode_floating_pill_dismissed', 'true');
    }
  };

  if (isDismissed || !isVisible) return null;

  return (
    <aside 
      aria-label="Quick consultation and inquiry actions"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] sm:max-w-xl w-auto animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="bg-[#0e0e0e]/95 hover:bg-[#111111] backdrop-blur-2xl border border-[#262626] hover:border-[#383838] shadow-[0_16px_48px_rgba(0,0,0,0.9)] rounded-full px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sm:gap-3 text-xs transition-all">
        
        {/* Left: Clean Solid Status Indicator */}
        <div className="flex items-center gap-2 shrink-0 pl-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-mono text-[#8e8e93] hidden md:inline">
            Fast Response
          </span>
        </div>

        {/* Dual Actions: Call (Primary) + Form (Secondary) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Action 1: Book Meeting Call */}
          <button
            type="button"
            onClick={() => openCalendly()}
            className="bg-[#ff5500] hover:bg-[#e04a00] active:scale-[0.98] text-white font-medium px-3.5 py-1.5 rounded-full text-xs flex items-center gap-1.5 shadow-sm shadow-[#ff5500]/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Book 30-Min Call</span>
            <span className="sm:hidden">Book Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Action 2: Fill Form / Request Proposal */}
          <Link
            href="/contact"
            className="bg-[#181818] hover:bg-[#222222] active:scale-[0.98] text-[#e4e4e7] hover:text-white font-medium px-3.5 py-1.5 rounded-full text-xs border border-[#2b2b2b] hover:border-[#3d3d3d] flex items-center gap-1.5 transition-all whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-[#8e8e93]" />
            <span className="hidden sm:inline">Request Proposal</span>
            <span className="sm:hidden">Fill Form</span>
          </Link>

          {/* Dismiss button */}
          <button
            type="button"
            onClick={handleDismiss}
            className="w-6 h-6 rounded-full bg-[#181818] hover:bg-[#262626] text-[#71717a] hover:text-[#f5f5f0] flex items-center justify-center transition-colors cursor-pointer ml-0.5"
            aria-label="Dismiss booking bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
