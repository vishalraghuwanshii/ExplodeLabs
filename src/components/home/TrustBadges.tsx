import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Star,
  Layers,
  Zap
} from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      title: 'Google Premier Partner',
      year: '2026 Verified',
      category: 'Search & Performance Ads',
      code: 'Top 3% Tier Agency',
      icon: Award
    },
    {
      title: 'Meta Business Partner',
      year: 'Certified Badge',
      category: 'Paid Social & CAPI Tracking',
      code: 'Enterprise Ads Studio',
      icon: ShieldCheck
    },
    {
      title: 'Shopify Plus Partner',
      year: 'Certified',
      category: 'Hydrogen & Headless Storefronts',
      code: 'Sub-Second Commerce',
      icon: Zap
    },
    {
      title: 'DaVinci Resolve Studio',
      year: 'Certified Post House',
      category: 'ACES 4K Color Grading',
      code: 'Cinema Post-Production',
      icon: Layers
    },
    {
      title: 'Vercel Partner Ecosystem',
      year: 'Enterprise Ready',
      category: 'Next.js 15 Edge Deployment',
      code: '100/100 Core Web Vitals',
      icon: Sparkles
    },
    {
      title: 'Clutch Top 1% Studio',
      year: '4.9 / 5.0 Rating',
      category: 'Verified Enterprise Reviews',
      code: '48+ Verified Audits',
      icon: Star
    }
  ];

  return (
    <section className="py-8 bg-[#090909] border-y border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] font-semibold">
              Verified Industry Accreditations & Platform Partnerships
            </span>
          </div>
          <div className="text-xs font-mono text-[#71717a] hidden sm:block">
            Standard: Enterprise Compliance & Performance Tested
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-3.5 sm:p-4 bg-[#0d0d0d] border border-[#1b1b1b] hover:border-[#2e2e2e] transition-all rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-4 h-4 text-[#ff5500] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono text-[#71717a] bg-[#141414] px-1.5 py-0.5 rounded border border-[#202020]">
                      {b.year}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors leading-tight">
                    {b.title}
                  </div>
                  <div className="text-[10px] text-[#8e8e93] mt-1 leading-snug line-clamp-1">
                    {b.category}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-[#161616] text-[9px] font-mono text-[#5c5c60]">
                  {b.code}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
