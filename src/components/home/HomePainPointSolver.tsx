'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  TrendingDown, 
  Video, 
  MousePointerClick, 
  MailWarning, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';

interface PainPoint {
  id: string;
  problemBadge: string;
  icon: any;
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
  deliverables: string[];
  impactMetric: string;
  targetServiceUrl: string;
  targetServiceName: string;
}

export function HomePainPointSolver() {
  const [selectedId, setSelectedId] = useState<string>('traffic');

  const painPoints: PainPoint[] = [
    {
      id: 'traffic',
      problemBadge: 'Organic Search & AI Citability',
      icon: TrendingDown,
      problemTitle: 'Traffic is dropping or invisible in AI search.',
      problemDesc: 'Traditional keyword stuffing is losing traffic to Google AI Overviews, SearchGPT, and Perplexity answer engines.',
      solutionTitle: 'Generative Engine Optimization (GEO) & Programmatic SEO Architecture',
      solutionDesc: 'We structure bold 45-word direct answer blocks, Schema.org entity graphs, and database-driven landing pages that AI engines parse and cite as authoritative sources.',
      deliverables: [
        'SearchGPT & Perplexity citation engineering',
        'Next.js 15 Programmatic SEO landing page engine',
        'Schema.org JSON-LD Knowledge Graph integration',
        'Sub-second Core Web Vitals (100/100 Lighthouse)'
      ],
      impactMetric: '340% increase in qualified organic search pipeline in 90 days',
      targetServiceUrl: '/services/generative-engine-optimization-aeo',
      targetServiceName: 'Explore Generative Engine SEO'
    },
    {
      id: 'creative',
      problemBadge: 'Creative & Video Ads',
      icon: Video,
      problemTitle: 'Video ads are fatiguing with high CPA on Meta/TikTok.',
      problemDesc: 'Generic video edits and dry product demos fail to stop the scroll, leading to low retention and declining ROAS.',
      solutionTitle: 'Studio-Grade DaVinci Resolve Post-Production & High-Velocity Ad Sprints',
      solutionDesc: 'We execute retention-paced assembly, DaVinci ACES color grading, custom sound design (-14 LUFS), and modular 3-second hook variations to maximize watch time.',
      deliverables: [
        'Batch 15–30 high-converting ad variations per sprint',
        'DaVinci Resolve Studio color grading & ACES workflows',
        'Multi-format mastering (9:16 vertical, 16:9 widescreen, 1:1)',
        'Full .drp / .prproj project files and stems included'
      ],
      impactMetric: '58% lower Cost per Acquisition (CPA); 4.8x average ROAS',
      targetServiceUrl: '/services/video-editing-and-post-production',
      targetServiceName: 'Explore Video Post-Production'
    },
    {
      id: 'conversion',
      problemBadge: 'Website Conversion Rate',
      icon: MousePointerClick,
      problemTitle: 'Website receives traffic but fails to convert leads.',
      problemDesc: 'Slow load times, confusing navigation, and heavy form friction cause high-intent buyers to bounce without booking.',
      solutionTitle: 'Full-Stack Next.js Replatforming & High-Converting CRO Funnels',
      solutionDesc: 'We re-architect your digital experience in Next.js 15 and Tailwind CSS with sub-1.2s mobile page loads, atomic design systems, and frictionless micro-intakes.',
      deliverables: [
        'Sub-second edge-rendered web application in Next.js 15',
        'Headless Shopify Plus or custom SaaS dashboard architecture',
        'Quantitative A/B testing & heatmaps (PostHog / Clarity)',
        '100% full intellectual property and GitHub repository transfer'
      ],
      impactMetric: '42% lift in lead-to-demo conversion; sub-200ms TTFB speed',
      targetServiceUrl: '/services/custom-web-application-development',
      targetServiceName: 'Explore Web Application Development'
    },
    {
      id: 'outbound',
      problemBadge: 'Cold Outbound & Pipeline',
      icon: MailWarning,
      problemTitle: 'Cold emails land in spam and miss decision-makers.',
      problemDesc: 'Sending from primary domains risks blacklisting, while single-source scraped lists suffer 20%+ bounce rates.',
      solutionTitle: 'Isolated Secondary Domain Fleet & 5-Tier Clay Waterfall SDR Engine',
      solutionDesc: 'We deploy 10–50 dedicated secondary domains with full SPF, DKIM, and DMARC (p=reject) alignment, automated warmup pools, and verified B2B prospect waterfalls.',
      deliverables: [
        '25+ authenticated sending inboxes with 0% risk to primary domain',
        '5-tier Clay waterfall lead enrichment (<1.5% bounce rate guarantee)',
        'Dynamic spintax copywriting and trigger-based personalization',
        'Bi-directional CRM sync (HubSpot/Salesforce) & Slack alert bots'
      ],
      impactMetric: '20–45 qualified executive sales meetings booked per month',
      targetServiceUrl: '/services/b2b-outbound-sdr-and-lead-generation',
      targetServiceName: 'Explore B2B Outbound SDR Engine'
    }
  ];

  const current = painPoints.find((p) => p.id === selectedId) || painPoints[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 sm:py-28 bg-[#090909] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Problem-to-Solution Engine"
          title="What is holding your growth back?"
          description="Select your primary growth bottleneck to reveal the exact engineered execution roadmap."
        />

        {/* 4 Pain Point Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {painPoints.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141414] border-[#ff5500] shadow-xl shadow-[#ff5500]/10 scale-102'
                    : 'bg-[#0d0d0d] hover:bg-[#121212] border-[#1e1e1e] hover:border-[#333333]'
                }`}
              >
                <div>
                  <div className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center ${
                    isSelected ? 'bg-[#ff5500] text-black font-bold' : 'bg-[#181818] text-[#8e8e93]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] font-mono text-[#71717a] uppercase mb-1">{p.problemBadge}</div>
                  <h3 className="text-sm font-bold text-[#f5f5f0] leading-snug">
                    {p.problemTitle}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-[#181818] flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-[#ff5500] font-semibold' : 'text-[#71717a]'}>
                    {isSelected ? 'Viewing Roadmap' : 'Click to Solve'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#ff5500]' : 'text-[#5c5c60]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Dynamic Solution Panel */}
        <div className="p-6 sm:p-10 bg-[#0e0e0e] border border-[#222222] rounded-2xl shadow-2xl animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <Badge variant="orange" className="mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>The Explode Labs Execution Fix</span>
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] mb-3 leading-tight">
                  {current.solutionTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#8e8e93] leading-relaxed">
                  {current.solutionDesc}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-[#71717a] font-semibold mb-3">
                  Core Deliverables & SLA Guarantees
                </div>
                <div className="space-y-2.5">
                  {current.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c4c4c8]">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-[#141414] border border-[#262626] rounded-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono text-[#71717a] uppercase mb-1">Expected ROI Benchmark</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mb-4 leading-tight">
                  {current.impactMetric}
                </div>
                <p className="text-xs text-[#8e8e93] leading-relaxed">
                  Every engagement is scoped around measurable milestone outcomes with transparent pricing and zero long-term retainer traps.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#202020]">
                <Button href="/contact" size="md" variant="primary" className="w-full text-center" withArrow>
                  Get Custom Scope Proposal
                </Button>
                <Button href={current.targetServiceUrl} size="sm" variant="outline" className="w-full text-center text-xs">
                  {current.targetServiceName}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
