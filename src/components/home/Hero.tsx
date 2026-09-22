'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2,
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
  const router = useRouter();

  const quickGoals = [
    { label: 'AI Search & SEO (GEO/AEO)', path: '/services/ai-search-optimization' },
    { label: 'Video Editing & Creative', path: '/services/video-editing' },
    { label: 'Website & App Development', path: '/services/website-development' },
    { label: 'Google & Meta Paid Ads', path: '/services/google-ads' },
  ];

  const proofPills = [
    { label: 'Client Pipeline Generated', val: '$35M+', sub: 'Verified across B2B & enterprise' },
    { label: 'Organic Visits Scaled', val: '450k+/mo', sub: 'SearchGPT & Google Top 3' },
    { label: 'Average ROAS on Paid Media', val: '4.8x', sub: 'Meta, Google Ads & LinkedIn' },
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
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#141414]">
      {/* Embedded Schema.org JSON-LD for AI Search Engines (AEO/GEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Atmospheric Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[480px] bg-gradient-to-b from-[#ff5500]/14 via-[#ff4400]/6 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#ff5500]/6 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-white/[0.02] blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HERO HEADER */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Sleek Glassmorphic Eyebrow Badge (Prestigious, no pulsing radar, crisp glow) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d0d0d]/90 border border-[#222222] shadow-[0_0_20px_rgba(255,85,0,0.10)] mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] shadow-[0_0_8px_#ff5500]" />
            <span className="text-xs font-mono font-medium text-[#e4e4e7] tracking-tight">
              Full-Service Growth & Digital Engineering Studio
            </span>
          </div>

          {/* Primary High-Intent Commercial H1 Typography with Luxury Flame Gradients */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f5f0] leading-[1.08] mb-6">
            We scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7733] to-[#ffaa40]">search traffic</span>, produce <span className="text-[#ffffff]">studio video</span> & build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff8833] to-[#ffaa40]">high-converting websites</span>.
          </h1>

          {/* AEO / GEO Declarative Entity Statement (Authoritative ground truth for AI & Human visitors) */}
          <p className="text-base sm:text-lg text-[#9e9ea3] max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            <strong className="text-[#f5f5f0] font-semibold">Explode Labs</strong> helps high-growth brands break through revenue plateaus. We eliminate technical bottlenecks and scale pipeline through high-performance web engineering, studio-grade video creative, and data-driven search campaigns.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Start a Project
            </Button>
            <Button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).openCalendlyModal) {
                  (window as any).openCalendlyModal();
                }
              }}
              size="lg"
              variant="outline"
            >
              Book 30-Min Strategy Call
            </Button>
          </div>

          {/* Fast Discipline Exploration Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="text-xs font-mono text-[#5c5c60] mr-1 hidden sm:inline">Explore capabilities:</span>
            {quickGoals.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => router.push(g.path)}
                className="text-xs font-mono text-[#8e8e93] hover:text-[#f5f5f0] bg-[#0d0d0d] hover:bg-[#141414] border border-[#1e1e1e] hover:border-[#ff5500]/40 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* INTERACTIVE CAPABILITY BENTO SHOWCASE (Clickable Studio Architecture) */}
        <div className="mt-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* CARD 1: AI Search & AEO Citation Engine */}
            <Link
              href="/services/ai-search-optimization"
              className="p-6 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#1c1c1c] hover:border-[#ff5500]/40 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,85,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden flex flex-col justify-between block"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/40 transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[#f5f5f0]">AI Search & SEO</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/25">
                    GEO & AEO
                  </span>
                </div>

                <p className="text-xs text-[#8e8e93] leading-relaxed mb-4">
                  Entity-grounded Schema graphs and structured content engineered to rank #1 on Google, ChatGPT, SearchGPT, and Perplexity.
                </p>

                <div className="space-y-2 p-3 bg-[#111111] border border-[#1e1e1e] rounded-xl mb-4 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span>Citation Indexing:</span>
                    <span className="text-emerald-400 font-semibold">Active & Grounded</span>
                  </div>
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span>Organic Growth:</span>
                    <span className="text-[#f5f5f0] font-semibold">+340% Target</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#181818] flex items-center justify-between text-xs">
                <span className="text-[#71717a]">Capability Model</span>
                <span className="font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors flex items-center gap-1">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>

            {/* CARD 2: Studio Video & DaVinci ACES Pipeline */}
            <Link
              href="/services/video-editing"
              className="p-6 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#1c1c1c] hover:border-[#ff5500]/40 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,85,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden flex flex-col justify-between block"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/40 transition-colors">
                      <Film className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[#f5f5f0]">Commercial Video</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    4K DA VINCI
                  </span>
                </div>

                <p className="text-xs text-[#8e8e93] leading-relaxed mb-4">
                  Cinematic post-production, ACES color grading, sound design, and high-retention commercial video ads for global brands.
                </p>

                <div className="space-y-2 p-3 bg-[#111111] border border-[#1e1e1e] rounded-xl mb-4 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span>Workflow Sprint:</span>
                    <span className="text-emerald-400 font-semibold">48h Delivery</span>
                  </div>
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span>Color Management:</span>
                    <span className="text-[#f5f5f0] font-semibold">ACEScc Studio</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#181818] flex items-center justify-between text-xs">
                <span className="text-[#71717a]">Capability Model</span>
                <span className="font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors flex items-center gap-1">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>

            {/* CARD 3: Next.js 15 Web & Revenue Engine */}
            <Link
              href="/services/website-development"
              className="p-6 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#1c1c1c] hover:border-[#ff5500]/40 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,85,0,0.08)] hover:-translate-y-0.5 group relative overflow-hidden flex flex-col justify-between block"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/40 transition-colors">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[#f5f5f0]">Web Engineering</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25">
                    NEXT.JS 15
                  </span>
                </div>

                <p className="text-xs text-[#8e8e93] leading-relaxed mb-4">
                  High-converting web platforms and custom applications built with React 19, sub-50ms edge latency, and conversion architectures.
                </p>

                <div className="space-y-2 p-3 bg-[#111111] border border-[#1e1e1e] rounded-xl mb-4 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span>Core Web Vitals:</span>
                    <span className="text-emerald-400 font-semibold">100/100 Score</span>
                  </div>
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span>Edge Response:</span>
                    <span className="text-[#f5f5f0] font-semibold">&lt; 30ms TTFB</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#181818] flex items-center justify-between text-xs">
                <span className="text-[#71717a]">Capability Model</span>
                <span className="font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors flex items-center gap-1">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>

          </div>
        </div>

        {/* BOTTOM SOCIAL PROOF METRICS BAR */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-2xl max-w-5xl mx-auto shadow-xl">
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
