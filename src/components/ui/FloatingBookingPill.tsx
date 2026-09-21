'use client';

import React, { useState, useEffect } from 'react';
import { openCalendly } from './CalendlyModal';
import { ArrowRight, X, Sparkles } from 'lucide-react';

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
      aria-label="Quick consultation booking"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-md w-auto animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="bg-[#0f0f0f]/90 hover:bg-[#121212]/95 backdrop-blur-xl border border-[#282828] hover:border-[#383838] shadow-[0_12px_40px_rgba(0,0,0,0.85)] rounded-full px-3.5 sm:px-4 py-2 flex items-center justify-between gap-3 text-xs transition-all">
        
        {/* Left: Indicator & Headline */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative flex items-center justify-center shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="absolute w-3.5 h-3.5 rounded-full bg-emerald-400/40 animate-ping" />
          </div>
          
          <div className="truncate hidden xs:block">
            <span className="text-[#f5f5f0] font-medium">Ready to build or scale?</span>
          </div>
        </div>

        {/* Right: Booking Action & Close */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => openCalendly()}
            className="bg-[#ff5500] hover:bg-[#e04a00] active:scale-[0.98] text-white font-medium px-3.5 py-1.5 rounded-full text-xs flex items-center gap-1.5 shadow-sm shadow-[#ff5500]/25 transition-all cursor-pointer"
          >
            <span>Book 30-Min Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleDismiss}
            className="w-6 h-6 rounded-full bg-[#1c1c1c] hover:bg-[#282828] text-[#71717a] hover:text-[#f5f5f0] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Dismiss booking reminder"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
