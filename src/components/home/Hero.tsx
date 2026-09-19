'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Globe,
  CheckCircle2,
  Lock,
  Clock
} from 'lucide-react';

export function Hero() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const router = useRouter();

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl.trim()) {
      router.push('/contact');
      return;
    }
    const clean = websiteUrl.replace(/^https?:\/\//i, '').trim();
    router.push(`/tools/seo-auditor?domain=${encodeURIComponent(clean)}`);
  };

  const proofPills = [
    { label: 'Client Pipeline Generated', val: '$45M+' },
    { label: 'Organic Visits Scaled', val: '450k+/mo' },
    { label: 'Average ROAS on Paid Ads', val: '4.8x' },
    { label: 'Lighthouse Speed Score', val: '99/100' },
  ];

  const quickGoals = [
    { label: 'Rank on SearchGPT & SEO', path: '/services/generative-engine-optimization-aeo' },
    { label: 'Produce High-Retention Video Ads', path: '/services/video-editing-and-post-production' },
    { label: 'High-Converting Web Development', path: '/services/custom-web-application-development' },
    { label: 'B2B Outbound SDR & Lead Engine', path: '/services/b2b-outbound-sdr-and-lead-generation' },
  ];

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden border-b border-[#141414]">
      {/* Background Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff5500]/6 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="orange" className="py-1 px-3.5">
              Full-Service Digital Growth & Creative Agency
            </Badge>
          </div>

          {/* Large Hero Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#f5f5f0] leading-[1.08] mb-6">
            We scale search traffic, produce cinematic video & build high-converting websites.
          </h1>

          <p className="text-lg sm:text-xl text-[#8e8e93] max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Explode Labs is your end-to-end growth partner. We combine AI-driven search (SEO & GEO), performance advertising, studio-grade video post-production, and modern web development to generate predictable revenue.
          </p>

          {/* High-Converting Frictionless Lead Intake (WebFX / Thrive Style) */}
          <div className="max-w-2xl mx-auto mb-8">
            <form
              onSubmit={handleAuditSubmit}
              className="relative flex flex-col sm:flex-row items-center p-2 bg-[#0f0f0f] border border-[#282828] focus-within:border-[#ff5500]/70 rounded-2xl shadow-2xl transition-all gap-2 sm:gap-0"
            >
              <div className="hidden sm:flex pl-3 pr-2 text-[#ff5500]">
                <Globe className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="Enter your website URL (e.g. yourcompany.com)"
                className="w-full bg-transparent text-sm sm:text-base text-[#f5f5f0] placeholder-[#666666] outline-none px-3 py-2.5 sm:py-2 text-center sm:text-left"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-[#ff5500] hover:bg-[#e04a00] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-[#ff5500]/25 cursor-pointer"
              >
                <span>Get Free Proposal & Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-center gap-6 mt-3 text-xs text-[#71717a]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>24h Turnaround SLA</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Spam Guarantee</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant SEO & AI Audit</span>
              </span>
            </div>

            {/* Quick Solution Chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5">
              <span className="text-xs text-[#5c5c60] mr-1 hidden sm:inline">Or explore:</span>
              {quickGoals.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => router.push(g.path)}
                  className="text-xs text-[#8e8e93] hover:text-[#f5f5f0] bg-[#121212] hover:bg-[#181818] border border-[#1e1e1e] hover:border-[#333333] px-3 py-1 rounded-md transition-colors cursor-pointer"
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Proof & Metrics Counter Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-[#0c0c0c] border border-[#1a1a1a] rounded-2xl max-w-4xl mx-auto shadow-xl">
            {proofPills.map((p, i) => (
              <div key={i} className="text-center p-2">
                <div className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] mb-0.5">
                  {p.val}
                </div>
                <div className="text-xs text-[#71717a]">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
