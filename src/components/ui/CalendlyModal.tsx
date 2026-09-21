'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { X, Loader2, Calendar, ShieldCheck, User } from 'lucide-react';

export function openCalendly() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-calendly'));
  }
}

export function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsLoading(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onOpen = () => handleOpen();
    window.addEventListener('open-calendly', onOpen);

    // Global helper for direct window calls
    (window as any).openCalendlyModal = handleOpen;

    return () => {
      window.removeEventListener('open-calendly', onOpen);
    };
  }, [handleOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-[#242424] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh] z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="px-5 py-4 bg-[#111111] border-b border-[#1f1f1f] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff5500]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#f5f5f0] flex items-center gap-2">
                <span>Book a 30-Minute Architecture & Strategy Call</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Slots Available
                </span>
              </div>
              <div className="text-xs text-[#8e8e93]">
                Direct consultation with Vishal Raghuwanshi and senior engineering leads.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-lg bg-[#181818] hover:bg-[#222222] border border-[#2a2a2a] text-[#a1a1aa] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reassurance Banner */}
        <div className="px-5 py-2.5 bg-[#0f0f0f] border-b border-[#1c1c1c] flex flex-wrap items-center justify-between gap-3 text-xs text-[#71717a]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Mutual NDA before kickoff</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Zero junior sales reps</span>
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#8e8e93]">
            Fixed-Price Milestone Estimates
          </span>
        </div>

        {/* Embedded Iframe Container */}
        <div className="relative flex-1 w-full bg-[#0c0c0c] min-h-[580px] sm:min-h-[640px]">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0c0c0c] text-[#8e8e93] z-10">
              <Loader2 className="w-7 h-7 text-[#ff5500] animate-spin" />
              <span className="text-xs font-mono">Loading availability calendar...</span>
            </div>
          )}

          <iframe
            src="https://calendly.com/vishal-invokeiq/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0c0c0c&text_color=f5f5f0&primary_color=ff5500"
            className="w-full h-full border-0 absolute inset-0"
            onLoad={() => setIsLoading(false)}
            title="Book a Discovery Call with Explode Labs"
          />
        </div>
      </div>
    </div>
  );
}
