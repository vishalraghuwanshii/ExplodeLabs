'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
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
  Clock,
  Film,
  Code2,
  Bot,
  Layers,
  ArrowUpRight,
  Activity,
  Sliders,
  Check
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
    const clean = websiteUrl.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();
    router.push(`/tools/seo-auditor?domain=${encodeURIComponent(clean)}`);
  };

  const quickGoals = [
    { label: 'AI Search & SEO (GEO/AEO)', path: '/services/ai-search-optimization' },
    { label: 'Video Editing & Creative', path: '/services/video-editing' },
    { label: 'Website & App Development', path: '/services/website-development' },
    { label: 'Google & Meta Paid Ads', path: '/services/google-ads' },
  ];

  const proofPills = [
    { label: 'Client Pipeline Generated', val: '$35M+', sub: 'Verified across B2B & D2C' },
    { label: 'Organic Visits Scaled', val: '450k+/mo', sub: 'SearchGPT & Google Top 3' },
    { label: 'Average ROAS on Paid Media', val: '4.8x', sub: 'Meta, Google Ads & Amazon' },
    { label: 'Lighthouse Performance Score', val: '100/100', sub: 'Sub-second edge latency' },
  ];

  // Schema.org Structured Data for LLMs and Search Engine AI Crawlers
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Explode Labs',
    'url': 'https://explodelabs.com',
    'logo': 'https://explodelabs.com/logo.png',
    'image': 'https://explodelabs.com/og-image.png',
    'description': 'Explode Labs is a full-service digital agency specializing in search engine optimization (SEO/AEO), commercial video post-production, custom web engineering, and performance marketing.',
    'priceRange': '$$$$',
    'knowsAbout': [
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'DaVinci Resolve Video Post-Production',
      'Next.js Web Application Development',
      'Performance Paid Advertising (PPC)',
      'B2B Outbound Lead Generation'
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.95',
      'reviewCount': '48'
    }
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-[#141414]">
      {/* Embedded Schema.org JSON-LD for AI Search Engines (AEO/GEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Atmospheric Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#ff5500]/10 via-[#ff3300]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#ff5500]/4 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HERO HEADER */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Live System Beacon Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#262626] shadow-[0_0_20px_rgba(255,85,0,0.12)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5500]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-medium text-[#f5f5f0] tracking-tight">
              SEO & AI Search <span className="text-[#555]">•</span> Video Production <span className="text-[#555]">•</span> Paid Advertising <span className="text-[#555]">•</span> Web Development
            </span>
          </div>

          {/* Primary High-Intent H1 Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.12] mb-6">
            We scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7733] to-[#ff4400]">search traffic</span>, produce <span className="text-[#ffffff]">studio video</span> & build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] via-[#ffa366] to-[#f5f5f0]">high-converting websites</span>.
          </h1>

          {/* AEO / GEO Declarative Entity Statement (Authoritative ground truth for AI & Human visitors) */}
          <p className="text-base sm:text-lg text-[#9e9ea3] max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            <strong className="text-[#f5f5f0] font-semibold">Explode Labs</strong> helps high-growth brands break through revenue plateaus. We fix your technical bottlenecks and scale your pipeline with high-performance web engineering, studio-grade video creative, and data-driven search campaigns.
          </p>

          {/* Frictionless High-Converting Lead Intake */}
          <div className="max-w-2xl mx-auto mb-6">
            <form
              onSubmit={handleAuditSubmit}
              className="relative flex flex-col sm:flex-row items-center p-2 bg-[#0e0e0e] border border-[#242424] focus-within:border-[#ff5500] focus-within:shadow-[0_0_25px_rgba(255,85,0,0.18)] rounded-2xl shadow-2xl transition-all gap-2 sm:gap-0"
            >
              <div className="hidden sm:flex pl-3.5 pr-2 text-[#ff5500]">
                <Globe className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="Enter your website domain (e.g. yourbrand.com)"
                className="w-full bg-transparent text-[13px] sm:text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none px-3 py-2 sm:py-1.5 text-center sm:text-left"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#ff5500] hover:bg-[#e04a00] text-white font-semibold text-xs sm:text-[13px] rounded-xl transition-all shadow-lg shadow-[#ff5500]/25 cursor-pointer"
              >
                <span>Get Free Proposal & Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Instant Trust & SLA Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-3 text-xs text-[#71717a]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>24h Proposal SLA</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Lock-in Contracts</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant SEO & AEO Analytics</span>
              </span>
            </div>

            {/* Fast Discipline Exploration Chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
              <span className="text-[11px] text-[#5c5c60] mr-1 hidden sm:inline">Explore directly:</span>
              {quickGoals.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => router.push(g.path)}
                  className="text-[11px] font-mono text-[#8e8e93] hover:text-[#f5f5f0] bg-[#121212] hover:bg-[#181818] border border-[#202020] hover:border-[#333333] px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* INTERACTIVE LIVE ANALYTICS BENTO SHOWCASE (Luxury Visual Showstopper) */}
        <div className="mt-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* CARD 1: AI Search & AEO Citation Engine */}
            <div className="p-5 sm:p-6 bg-[#0c0c0c] border border-[#1f1f1f] hover:border-[#ff5500]/40 rounded-2xl transition-all group shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/5 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ff5500]/10 transition-colors" />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#ff5500]">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#f5f5f0]">AI Search & SEO</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/25">
                    #1 CITATION
                  </span>
                </div>

                <div className="p-3 bg-[#121212] border border-[#1e1e1e] rounded-xl mb-3">
                  <div className="text-[10px] font-mono text-[#71717a] mb-1">PROMPT QUERY:</div>
                  <div className="text-xs text-[#f5f5f0] font-medium leading-snug">
                    "Top full-service digital agency for high-growth B2B SaaS in 2026"
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#1a1a1a] flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span>Perplexity & SearchGPT Source: Explode Labs</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#181818] flex items-center justify-between">
                <span className="text-xs text-[#71717a]">Avg AI Demand Surge</span>
                <span className="text-sm font-bold font-mono text-[#f5f5f0]">+340% Lift</span>
              </div>
            </div>

            {/* CARD 2: Studio Video & DaVinci ACES Pipeline */}
            <div className="p-5 sm:p-6 bg-[#0c0c0c] border border-[#1f1f1f] hover:border-[#ff5500]/40 rounded-2xl transition-all group shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/5 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ff5500]/10 transition-colors" />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#ff5500]">
                      <Film className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#f5f5f0]">Video Production</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    ACES COLOR
                  </span>
                </div>

                <div className="p-3 bg-[#121212] border border-[#1e1e1e] rounded-xl mb-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#71717a] mb-1.5">
                    <span>TIMELINE: 00:00:24:18</span>
                    <span className="text-emerald-400 font-bold">4K 60FPS</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1e1e1e] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-[#ff5500] to-amber-400 w-3/4 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#8e8e93]">
                    <span>High-Retention Hooks</span>
                    <span className="text-[#f5f5f0] font-semibold">10M+ Views</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#181818] flex items-center justify-between">
                <span className="text-xs text-[#71717a]">Video Post-Production</span>
                <span className="text-sm font-bold font-mono text-[#f5f5f0]">Sub-48h Sprints</span>
              </div>
            </div>

            {/* CARD 3: Next.js 15 Web & Revenue Engine */}
            <div className="p-5 sm:p-6 bg-[#0c0c0c] border border-[#1f1f1f] hover:border-[#ff5500]/40 rounded-2xl transition-all group shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/5 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ff5500]/10 transition-colors" />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#141414] border border-[#2a2a2a] flex items-center justify-center text-[#ff5500]">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#f5f5f0]">Web Development</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25">
                    100/100 SPEED
                  </span>
                </div>

                <div className="p-3 bg-[#121212] border border-[#1e1e1e] rounded-xl mb-3">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-[#8e8e93]">Edge Response Latency:</span>
                    <span className="text-emerald-400 font-mono font-bold">24ms TTFB</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-[#8e8e93]">Paid Media ROAS Target:</span>
                    <span className="text-[#ff5500] font-mono font-bold">4.8x ROAS</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#8e8e93]">Conversion Architecture:</span>
                    <span className="text-[#f5f5f0] font-semibold">Postgres RLS + ISR</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#181818] flex items-center justify-between">
                <span className="text-xs text-[#71717a]">Client Pipeline Generated</span>
                <span className="text-sm font-bold font-mono text-[#f5f5f0]">$45M+ Scaled</span>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SOCIAL PROOF METRICS BAR */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl max-w-5xl mx-auto shadow-xl">
          {proofPills.map((p, i) => (
            <div key={i} className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#f5f5f0] mb-0.5">
                {p.val}
              </div>
              <div className="text-xs font-semibold text-[#8e8e93] mb-0.5">
                {p.label}
              </div>
              <div className="text-[10px] text-[#555555]">
                {p.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
