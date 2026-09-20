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
      <path
        d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
        fill="#0081FB"
      />
    </svg>
  );
}

function ShopifyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="15 315 140 165" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#95BF47"
        d="M131.5 341.9c-.1-.9-.9-1.3-1.5-1.3s-13.7-1-13.7-1-9.1-9.1-10.2-10c-1-1-2.9-.7-3.7-.5-.1 0-2 .6-5.1 1.6-3.1-8.9-8.4-17-17.9-17h-.9c-2.6-3.4-6-5-8.8-5-22 0-32.6 27.5-35.9 41.5-8.6 2.7-14.7 4.5-15.4 4.8-4.8 1.5-4.9 1.6-5.5 6.1-.5 3.4-13 100.1-13 100.1l97.3 18.2L150 468c.1-.2-18.4-125.2-18.5-126.1zm-39.6-9.8c-2.4.7-5.3 1.6-8.2 2.6v-1.8c0-5.4-.7-9.8-2-13.3 5 .6 8.1 6.1 10.2 12.5zm-16.3-11.4c1.3 3.4 2.2 8.2 2.2 14.8v1c-5.4 1.7-11.1 3.4-17 5.3 3.3-12.6 9.6-18.8 14.8-21.1zm-6.4-6.2c1 0 2 .4 2.8 1-7.1 3.3-14.6 11.6-17.7 28.4-4.7 1.5-9.2 2.8-13.5 4.2 3.6-12.8 12.6-33.6 28.4-33.6z"
      />
      <path
        fill="#5E8E3E"
        d="M130 340.4c-.6 0-13.7-1-13.7-1s-9.1-9.1-10.2-10c-.4-.4-.9-.6-1.3-.6l-7.3 150.6 52.8-11.4s-18.5-125.2-18.6-126.1c-.4-.9-1.1-1.3-1.7-1.5z"
      />
      <path
        fill="#FFFFFF"
        d="M79.4 369.6L73 388.9s-5.8-3.1-12.7-3.1c-10.3 0-10.8 6.5-10.8 8.1 0 8.8 23 12.2 23 32.9 0 16.3-10.3 26.8-24.2 26.8-16.8 0-25.2-10.4-25.2-10.4l4.5-14.8s8.8 7.6 16.2 7.6c4.9 0 6.9-3.8 6.9-6.6 0-11.5-18.8-12-18.8-31 0-15.9 11.4-31.3 34.5-31.3 8.6-.1 13 2.5 13 2.5z"
      />
    </svg>
  );
}

function DaVinciLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#141416" stroke="#2c2c30" strokeWidth="0.75" />
      {/* Top Red Petal */}
      <path
        d="M12 3.8C13.5 3.8 14.8 5.1 14.8 6.6C14.8 8.8 12.6 10.8 12 11.4C11.4 10.8 9.2 8.8 9.2 6.6C9.2 5.1 10.5 3.8 12 3.8Z"
        fill="#FF3B30"
      />
      {/* Bottom Right Blue Petal */}
      <path
        d="M19.2 16.2C18.3 17.5 16.6 18.0 15.2 17.2C13.3 16.1 12.6 13.5 12.7 12.6C13.5 13.1 16.1 14.0 17.8 14.9C18.8 15.4 19.4 15.7 19.2 16.2Z"
        fill="#0A84FF"
      />
      {/* Bottom Left Green Petal */}
      <path
        d="M4.8 16.2C4.6 15.7 5.2 15.4 6.2 14.9C7.9 14.0 10.5 13.1 11.3 12.6C11.4 13.5 10.7 16.1 8.8 17.2C7.4 18.0 5.7 17.5 4.8 16.2Z"
        fill="#30D158"
      />
      {/* Center Yellow Aperture */}
      <circle cx="12" cy="12" r="1.8" fill="#FFD60A" />
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
      <rect width="24" height="24" rx="5" fill="#1A1A1E" stroke="#333338" strokeWidth="0.75" />
      <path
        d="M15.5 8.2C14.6 7.4 13.4 7 12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C13.4 17 14.6 16.6 15.5 15.8L14.2 14.3C13.6 14.8 12.8 15.1 12 15.1C10.29 15.1 8.9 13.71 8.9 12C8.9 10.29 10.29 8.9 12 8.9C12.8 8.9 13.6 9.2 14.2 9.7L15.5 8.2Z"
        fill="#ED4343"
      />
      <circle cx="12" cy="12" r="1.5" fill="#FFB800" />
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
