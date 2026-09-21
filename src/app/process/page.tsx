import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Layers, 
  GitBranch, 
  Lock, 
  Check, 
  Video, 
  Search, 
  TrendingUp, 
  Layout, 
  FileCheck,
  MessageSquare,
  BarChart3
} from 'lucide-react';

export const metadata = {
  title: 'Our Delivery Process | The Explode Studio Methodology',
  description: 'How Explode Labs delivers high-performance digital growth, creative video systems, and modern web development with fixed-price certainty and zero junior handoffs.',
  openGraph: {
    title: 'Explode Delivery System | Transparent Sprints & Predictable Milestones',
    description: 'A 4-phase agile delivery methodology designed for high-velocity execution, full IP ownership, and measurable revenue outcomes.',
    url: 'https://explodelabs.com/process',
  },
};

export default function ProcessPage() {
  const processSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'The Explode Labs Delivery System',
    description: 'A 4-phase agile methodology for delivering AI search optimization, commercial video editing, performance paid media, and modern web development.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Architecture & Strategy Blueprint',
        text: 'Comprehensive growth and technical audit, competitor analysis, entity mapping, and fixed-price milestone roadmap.'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Sprint Execution & Asset Production',
        text: 'Bi-weekly sprint deliveries covering video editing, 3D CGI, Next.js web development, and search engine optimization.'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Quality Assurance & Performance Benchmarking',
        text: 'Lighthouse 100/100 Core Web Vitals optimization, responsive testing, and conversion tracking validation.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Launch, Growth Activation & Asset Transfer',
        text: 'Zero-downtime deployment, live ad campaign activation, complete source asset IP transfer, and 30-day warranty.'
      }
    ]
  };

  const deliveryPhases = [
    {
      phase: '01',
      title: 'Strategy, Architecture & Scoping',
      timeframe: 'Days 1 to 5',
      badge: 'Discovery & Blueprint',
      summary: 'We audit your existing funnel, search visibility, creative assets, and tech stack to define a clear, fixed-price milestone roadmap.',
      deliverables: [
        'Growth & Technical Funnel Audit (SEO, Creative, Paid Ads, Web)',
        'Entity Keyword Graph & Audience Intent Blueprint',
        'Transparent Milestone Breakdown with Agreed Delivery Dates',
        'Dedicated Private Slack Channel Setup with Senior Leads'
      ]
    },
    {
      phase: '02',
      title: 'Sprint Execution & Production',
      timeframe: 'Weeks 2 to 6+',
      badge: 'Agile Build Cycles',
      summary: 'We work in focused, bi-weekly sprints where you receive deployable assets, video cuts, or functional staging environments every week.',
      deliverables: [
        'Commercial Video Post-Production & DaVinci Resolve Color Grading',
        'Modern Next.js 15 & Shopify Plus Web Engineering',
        'Search Engine Optimization & Generative AI Citations (GEO/AEO)',
        'Weekly Video Loom Teardowns & Live Staging Demos'
      ]
    },
    {
      phase: '03',
      title: 'QA, Security & Performance Hardening',
      timeframe: 'Pre-Launch Week',
      badge: 'Rigorous Verification',
      summary: 'Before anything goes live, every asset, page, and campaign undergoes exhaustive cross-device testing and performance benchmarking.',
      deliverables: [
        'Lighthouse 100/100 Core Web Vitals & Sub-Second Latency Tuning',
        'Cross-Browser & Multi-Device Mobile Responsiveness Audits',
        'Server-Side CAPI Attribution & Pixel Tracking Verification',
        'Zero-Downtime 301 Redirect Mapping & SEO Migration Safeguards'
      ]
    },
    {
      phase: '04',
      title: 'Launch, Growth Activation & IP Transfer',
      timeframe: 'Launch Day & Beyond',
      badge: 'Production & Sovereignty',
      summary: 'We execute a seamless launch, turn on customer acquisition campaigns, and transfer 100% ownership of all source code, assets, and accounts.',
      deliverables: [
        'Zero-Downtime Production Deployment on Vercel / Cloudflare Edge',
        'Live Campaign Activation across Google Ads, Meta, and Cold Email',
        '100% Full IP Transfer: Raw DaVinci Files, Figma Tokens & Git Repos',
        '30-Day Post-Launch Technical & Growth Warranty with Slack Support'
      ]
    }
  ];

  const slaGuarantees = [
    {
      label: 'Senior Talent Only',
      explodeStandard: '100% Senior Specialists & Directors',
      traditionalAgency: 'Executives pitch; juniors execute',
      icon: CheckCircle2
    },
    {
      label: 'Pricing & Contracts',
      explodeStandard: 'Fixed-Price Milestones (Zero hidden fees)',
      traditionalAgency: 'Vague retainers & hourly bill creep',
      icon: Zap
    },
    {
      label: 'Delivery Velocity',
      explodeStandard: 'Sprints start in <48 hours; weekly drops',
      traditionalAgency: '3 to 6 weeks of onboarding delays',
      icon: Clock
    },
    {
      label: 'Asset & IP Ownership',
      explodeStandard: '100% Full IP & Source File Sovereignty',
      traditionalAgency: 'Withheld project files or licensing fees',
      icon: Lock
    },
    {
      label: 'Communication Cadence',
      explodeStandard: 'Direct Slack Access + Weekly Video Demos',
      traditionalAgency: 'Buffered through junior account managers',
      icon: MessageSquare
    },
    {
      label: 'Post-Launch Support',
      explodeStandard: '30-Day Built-in Warranty & Monitoring',
      traditionalAgency: 'Immediate billing for every minor tweak',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={processSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-8">
          <Link href="/" className="hover:text-[#f5f5f0] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">Studio Delivery Process</span>
        </div>

        {/* HERO SECTION */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-[#181818]">
          <Badge variant="orange">Studio Methodology & Cadence</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
            The Explode Delivery System: Transparent Sprints, Tangible Milestones, Zero Agency Bloat.
          </h1>
          <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed font-normal">
            We replaced the outdated agency model of endless status meetings, junior handoffs, and vague hourly billing with an agile, milestone-driven execution system built for speed, transparency, and measurable commercial results.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Start a Project Sprint
            </Button>
            <Button href="https://calendly.com/vishal-invokeiq/30min" size="lg" variant="outline">
              Book 30-Min Strategy Call
            </Button>
          </div>
        </div>

        {/* 4-PHASE DETAILED BREAKDOWN */}
        <div className="py-16 border-b border-[#181818]">
          <div className="max-w-3xl mb-12">
            <Badge variant="orange" className="mb-2">4-Phase Methodology</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
              From Initial Blueprint to Autonomous Execution.
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8e93] mt-2">
              Every phase is designed with clear deliverables, transparent checkpoints, and zero ambiguity.
            </p>
          </div>

          <div className="space-y-8">
            {deliveryPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#0c0c0c] border border-[#1e1e1e] hover:border-[#2e2e2e] transition-all rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#181818] mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold font-mono text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-3 py-1 rounded-xl">
                      {phase.phase}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-[#f5f5f0]">{phase.title}</h3>
                      <p className="text-xs text-[#71717a] font-mono mt-0.5">{phase.badge}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#a1a1aa] bg-[#141414] px-3 py-1 rounded-full border border-[#222222] self-start md:self-auto">
                    {phase.timeframe}
                  </span>
                </div>

                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                  {phase.summary}
                </p>

                <div>
                  <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold mb-3">Key Phase Deliverables:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {phase.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#8e8e93] bg-[#111111] p-3 rounded-lg border border-[#1c1c1c]">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                        <span className="text-[#f5f5f0] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLA & CLIENT COMMITMENTS TABLE */}
        <div className="py-16 border-b border-[#181818]">
          <div className="max-w-3xl mb-12">
            <Badge variant="orange" className="mb-2">Client Commitments</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
              The Explode Studio Guarantee.
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8e93] mt-2">
              How our agile studio model compares directly against traditional marketing and development agencies.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#1e1e1e] rounded-2xl bg-[#0c0c0c]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#121212] border-b border-[#1e1e1e] text-[#8e8e93] font-semibold text-xs">
                  <th className="p-4 sm:p-5 w-1/3">Evaluation Criterion</th>
                  <th className="p-4 sm:p-5 w-1/3 text-[#ff5500] font-bold bg-[#161616]">
                    Explode Labs Delivery Standard
                  </th>
                  <th className="p-4 sm:p-5 w-1/3">Traditional Agency Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#161616]">
                {slaGuarantees.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">
                      {row.label}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/60 border-x border-[#1e1e1e]">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                        <span>{row.explodeStandard}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#71717a]">
                      {row.traditionalAgency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FREE DIAGNOSTIC TOOLS BANNER */}
        <div className="py-16 border-b border-[#181818]">
          <div className="p-8 sm:p-10 bg-gradient-to-r from-[#111111] via-[#0c0c0c] to-[#121212] border border-[#222222] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <Badge variant="orange">Transparent Planning</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
                Ready to scope your project with architectural clarity?
              </h2>
              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed">
                Schedule a direct 30-minute discovery call with our leadership team to map your milestones, or audit your site for AI search citability.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Button href="https://calendly.com/vishal-invokeiq/30min" size="lg" variant="primary" withArrow>
                Book 30-Min Strategy Call
              </Button>
              <Button href="/tools/seo-auditor" size="lg" variant="outline">
                Run Free SEO Audit
              </Button>
            </div>
          </div>
        </div>

        {/* FINAL CALL TO ACTION */}
        <div className="pt-16 text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="orange">Get Started</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0]">
            Let&apos;s build and scale your next revenue engine.
          </h2>
          <p className="text-sm text-[#8e8e93] leading-relaxed">
            Schedule a 30-minute discovery call with our principal team. We will review your goals and deliver a fixed-scope milestone proposal within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="https://calendly.com/vishal-invokeiq/30min" size="lg" variant="primary" withArrow>
              Book 30-Min Strategy Call
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Send Project Brief
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

