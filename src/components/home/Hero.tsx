'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
  Sparkles, 
  ArrowRight, 
  Film,
  Code2
} from 'lucide-react';

export function Hero() {
  const router = useRouter();

  const quickGoals = [
    { label: 'AI Search & SEO (GEO)', path: '/services/ai-search-optimization' },
    { label: 'Video Editing & Creative', path: '/services/video-editing' },
    { label: 'Website & App Development', path: '/services/website-development' },
    { label: 'Google & Meta Paid Ads', path: '/services/google-ads' },
  ];

  const proofPills = [
    { label: 'Pipeline Generated', val: '$35M+', sub: 'Verified across B2B & enterprise' },
    { label: 'Organic Visits Scaled', val: '450k+/mo', sub: 'SearchGPT & Google Top 3' },
    { label: 'Average Return on Ad Spend', val: '4.8x', sub: 'Meta, Google Ads & LinkedIn' },
    { label: 'Core Web Vitals (LCP)', val: '100/100', sub: 'Sub-second edge latency' },
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
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden bg-black border-b border-zinc-900">
      {/* Embedded Schema.org JSON-LD for AI Search Engines (AEO/GEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Absolute Dark Minimalist Grid Background (CSS Only, Zero CLS/LCP penalty) */}
      <div 
        className="absolute inset-0 -z-10 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 70% at 50% 0%, #000 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 0%, #000 0%, transparent 100%)'
        }}
      />
      {/* Subtle ambient highlight at the absolute top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HERO HEADER */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Sleek Minimalist Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/80 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span className="text-xs font-mono font-medium text-zinc-300 tracking-tight">
              B2B Growth & Engineering Studio
            </span>
          </div>

          {/* Primary High-Intent Commercial H1 Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-100 leading-[1.08] mb-6">
            B2B Web Engineering & <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-600">AI Search Optimization.</span>
          </h1>

          {/* AEO / GEO Declarative Entity Statement (Authoritative ground truth) */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            <strong className="text-zinc-200 font-medium">Explode Labs</strong> eliminates technical bottlenecks. We scale enterprise pipeline through high-performance Next.js web development, cinematic video creative, and data-driven generative search (GEO/AEO) campaigns.
          </p>

          {/* Primary Action Buttons (Monochromatic Overrides) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button 
              href="/contact" 
              size="lg" 
              className="bg-zinc-100 text-zinc-950 hover:bg-white shadow-none border border-transparent font-medium rounded-lg"
              withArrow
            >
              Start a Project
            </Button>
            <Button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).openCalendlyModal) {
                  (window as any).openCalendlyModal();
                }
              }}
              size="lg"
              className="bg-zinc-950 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 rounded-lg shadow-none"
            >
              Book 30-Min Strategy Call
            </Button>
          </div>

          {/* Fast Discipline Exploration Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            <span className="text-xs font-mono text-zinc-600 mr-1 hidden sm:inline">Explore capabilities:</span>
            {quickGoals.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => router.push(g.path)}
                className="text-xs font-mono text-zinc-400 hover:text-zinc-200 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* INTERACTIVE CAPABILITY BENTO SHOWCASE (Linear.app Style Grid) */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-black/50">
            
            {/* Card 1: AI Search & AEO Citation Engine */}
            <Link href="/services/ai-search-optimization" className="block bg-[#09090b] p-8 hover:bg-[#121214] transition-colors group">
              <div className="w-8 h-8 rounded-lg mb-6 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors border border-zinc-800 bg-zinc-900/50">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">AI Search & SEO</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Entity-grounded Schema architectures designed to rank #1 across Google, ChatGPT, and Perplexity.
              </p>
              <div className="flex items-center text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>Explore capability</span>
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Studio Video & DaVinci ACES Pipeline */}
            <Link href="/services/video-editing" className="block bg-[#09090b] p-8 hover:bg-[#121214] transition-colors group">
              <div className="w-8 h-8 rounded-lg mb-6 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors border border-zinc-800 bg-zinc-900/50">
                <Film className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">Commercial Video</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Cinematic post-production, ACES color grading, and high-retention ad creative for tech brands.
              </p>
              <div className="flex items-center text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>Explore capability</span>
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Next.js 15 Web & Revenue Engine */}
            <Link href="/services/website-development" className="block bg-[#09090b] p-8 hover:bg-[#121214] transition-colors group">
              <div className="w-8 h-8 rounded-lg mb-6 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors border border-zinc-800 bg-zinc-900/50">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">Web Engineering</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Next.js 15 architectures engineered for sub-30ms latency and maximum B2B conversion rates.
              </p>
              <div className="flex items-center text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>Explore capability</span>
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>

        {/* Sleek Minimalist Proof Metrics */}
        <div className="mt-20 max-w-5xl mx-auto border-t border-zinc-800/80 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proofPills.map((p, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-mono font-semibold text-zinc-200 mb-1 tracking-tight">
                  {p.val}
                </div>
                <div className="text-xs font-medium text-zinc-500 mb-0.5">
                  {p.label}
                </div>
                <div className="text-[10px] text-zinc-600 hidden md:block">
                  {p.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

