import React from 'react';
import { Star } from 'lucide-react';

function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

function MetaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5C8.2 5 5.2 7.7 4 10.6 2.8 13.3 3.1 16 4.7 17.7c1.4 1.5 3.5 2.2 5.5 1.7 2.1-.5 3.8-2.2 4.8-3.7.8 1.2 2.3 2.7 4.2 3.3 1.8.6 3.8.2 5.1-1.1 1.6-1.6 1.9-4.2.8-6.9-1.2-2.9-4.2-6-7.1-6zm5.7 2.5c2.1 0 4.3 2.3 5.2 4.5.8 1.9.5 3.6-.5 4.6-.8.8-2 .9-3.2.5-1.5-.5-2.8-2-3.6-3.3 1.1-3 1.4-5.4 2.1-6.3zm-11.4 0c2.1 0 3.4 1.3 4.7 3.6-.8 1.4-2.1 3-3.6 3.6-1.2.5-2.5.3-3.3-.6-1-1.1-1.2-2.8-.4-4.7.8-2.2 2.9-4.4 4.9-4.4z" fill="#0081FB"/>
    </svg>
  );
}

function ShopifyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.4 6.6L18 6.1c-.1 0-.2-.1-.2-.2-.2-.5-.5-1.1-.8-1.5-1.1-1.3-2.6-1.8-4.2-1.4-.4.1-.7.2-1 .4-.2.1-.4.1-.5 0L9.8 4c-.3-.2-.7-.1-.9.2L4.6 20c-.1.3 0 .7.3.9l11 3.1c.1 0 .2.1.3.1.1 0 .2 0 .3-.1l5.5-3.1c.3-.2.4-.5.3-.8L19.4 6.6zm-5.7-2.3c.7-.2 1.4-.1 2 .3.3.3.5.7.7 1.1l-3.2-.8c.2-.3.3-.5.5-.6zm-.8 1.7l3.2.8c-.3.8-.8 2-1.7 3.6-1.5-2.4-1.9-3.7-1.5-4.4zm-1.8.4l1.2.3c-.4.8 0 2.3 1.4 4.5-.9 1.5-2 3.1-3.3 4.5l.7-9.3zm-4.7.9l2.8.7-.7 9c-1-1.3-1.8-2.8-2.4-4.3l.3-5.4zm9.6 13l-4.3 2.5-7.3-2.1 1.7-2.1c1.2-1.5 2.3-3.1 3.2-4.7.9 1.1 1.9 2.1 3.1 2.9l3.6 3.5zm1.3-1.5l-3.1-3.3c.9-.7 1.7-1.5 2.4-2.5l1.6 4.9-.9.9z" fill="#95BF47"/>
    </svg>
  );
}

function DaVinciLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#18181B" stroke="#27272A" strokeWidth="1"/>
      <path d="M12 4.5v7.5l6.5-3.75L12 4.5z" fill="#FF3B30"/>
      <path d="M5.5 15.75L12 12v7.5l-6.5-3.75z" fill="#34C759"/>
      <path d="M18.5 15.75L12 12l6.5-3.75v7.5z" fill="#007AFF"/>
      <circle cx="12" cy="12" r="2.5" fill="#FFCC00"/>
    </svg>
  );
}

function VercelLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L23 21H1L12 2Z" fill="#FFFFFF"/>
    </svg>
  );
}

function ClutchLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#1C1C1E" stroke="#2E2E32" strokeWidth="1"/>
      <path d="M15.8 15.2c-1 .9-2.3 1.5-3.8 1.5-3 0-5.5-2.4-5.5-5.5s2.4-5.5 5.5-5.5c1.5 0 2.8.6 3.8 1.5l-1.5 1.5c-.6-.6-1.4-1-2.3-1-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3c.9 0 1.7-.4 2.3-1l1.5 1.4z" fill="#ED4343"/>
      <circle cx="12" cy="11.2" r="1.3" fill="#FFB800"/>
    </svg>
  );
}

export function TrustBadges() {
  const badges = [
    {
      company: 'Google',
      partnerLevel: 'Premier Partner',
      year: '2026',
      specialty: 'Search & Performance Ads',
      tier: 'Top 3% Agency Tier',
      Logo: GoogleLogo,
      badgeColor: 'border-[#4285F4]/30 hover:border-[#4285F4]',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(66,133,244,0.15)]'
    },
    {
      company: 'Meta',
      partnerLevel: 'Business Partner',
      year: 'Certified',
      specialty: 'Paid Social & CAPI Tracking',
      tier: 'Enterprise Ads Studio',
      Logo: MetaLogo,
      badgeColor: 'border-[#0081FB]/30 hover:border-[#0081FB]',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(0,129,251,0.15)]'
    },
    {
      company: 'Shopify Plus',
      partnerLevel: 'Official Partner',
      year: 'Certified',
      specialty: 'Hydrogen & Headless Storefronts',
      tier: 'Sub-Second Commerce',
      Logo: ShopifyLogo,
      badgeColor: 'border-[#95BF47]/30 hover:border-[#95BF47]',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(149,191,71,0.15)]'
    },
    {
      company: 'Blackmagic Design',
      partnerLevel: 'DaVinci Studio',
      year: 'Post House',
      specialty: 'ACES 4K Color Grading',
      tier: 'Cinema Post-Production',
      Logo: DaVinciLogo,
      badgeColor: 'border-[#FF3B30]/30 hover:border-[#FF3B30]',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(255,59,48,0.15)]'
    },
    {
      company: 'Vercel',
      partnerLevel: 'Enterprise Partner',
      year: 'Next.js 15',
      specialty: 'Edge Deployment & SSR',
      tier: '100/100 Core Web Vitals',
      Logo: VercelLogo,
      badgeColor: 'border-white/30 hover:border-white',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]'
    },
    {
      company: 'Clutch.co',
      partnerLevel: 'Top 1% Agency',
      year: '4.9 / 5.0',
      specialty: 'Verified Client Reviews',
      tier: '48+ Verified Audits',
      Logo: ClutchLogo,
      badgeColor: 'border-[#ED4343]/30 hover:border-[#ED4343]',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(237,67,67,0.15)]'
    }
  ];

  return (
    <section className="py-10 bg-[#080808] border-y border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] font-semibold">
              Official Platform Certifications & Enterprise Accreditations
            </span>
          </div>
          <div className="text-xs font-mono text-[#71717a] hidden sm:block">
            Verified Partner Standards • Continuous Compliance Audited
          </div>
        </div>

        {/* Official Partner Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {badges.map((b, idx) => {
            const LogoComponent = b.Logo;
            return (
              <div
                key={idx}
                className={`p-4 bg-[#0d0d0d] border ${b.badgeColor} ${b.glowColor} transition-all duration-300 rounded-xl flex flex-col justify-between group shadow-lg`}
              >
                <div>
                  {/* Official Header Lockup */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#181818]">
                    <div className="p-1.5 rounded-lg bg-[#141414] border border-[#222]">
                      <LogoComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#f5f5f0] bg-[#161616] px-2 py-0.5 rounded border border-[#262626]">
                      {b.year}
                    </span>
                  </div>

                  {/* Company & Partner Level */}
                  <div className="text-[11px] font-mono uppercase text-[#8e8e93] tracking-wide">
                    {b.company}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#f5f5f0] group-hover:text-white transition-colors leading-tight mt-0.5">
                    {b.partnerLevel}
                  </div>
                  <div className="text-[10px] text-[#71717a] mt-1 line-clamp-1">
                    {b.specialty}
                  </div>
                </div>

                {/* Tier Footer */}
                <div className="mt-3 pt-2 border-t border-[#161616] flex items-center justify-between text-[9px] font-mono text-[#5c5c60]">
                  <span className="text-[#a1a1aa] font-medium">{b.tier}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
