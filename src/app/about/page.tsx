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
  ArrowUpRight, 
  Video, 
  Search, 
  TrendingUp, 
  Layout, 
  Bot, 
  Users, 
  Lock, 
  Check, 
  Flame,
  Award,
  Globe2,
  Cpu
} from 'lucide-react';

export const metadata = {
  title: 'About Explode Labs | Founder Story, Principles & Studio Model',
  description: 'Learn about Explode Labs, founded by Vishal Raghuwanshi. An anti-agency studio uniting AI search (GEO/AEO), studio video post-production, performance paid media, and modern web development.',
  openGraph: {
    title: 'About Explode Labs | Studio Philosophy & Executive Leadership',
    description: 'Founded by Vishal Raghuwanshi to eliminate agency bloat. High-impact creative, organic search, and web development with zero junior handoffs.',
    url: 'https://explodelabs.com/about',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Explode Labs',
    url: 'https://explodelabs.com/about',
    description: 'Explode Labs is a digital growth, creative systems, and modern web development studio founded by Vishal Raghuwanshi.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Explode Labs',
      founder: {
        '@type': 'Person',
        name: 'Vishal Raghuwanshi',
        jobTitle: 'Founder & Principal Director',
        url: 'https://www.linkedin.com/in/vishal-raghu/',
        sameAs: ['https://www.linkedin.com/in/vishal-raghu/']
      },
      url: 'https://explodelabs.com',
      logo: 'https://explodelabs.com/logo.png',
      knowsAbout: [
        'Generative Engine Optimization (GEO)',
        'Answer Engine Optimization (AEO)',
        'Technical SEO & Programmatic Search',
        'Commercial Video Editing & Post-Production',
        '3D Product CGI & Modeling',
        'Performance Paid Media (PPC)',
        'B2B Outbound SDR Systems',
        'Modern Web Development (Next.js & Shopify Plus)'
      ]
    }
  };

  const corePillars = [
    {
      title: 'AI Search & Organic Authority',
      badge: 'GEO / AEO / Technical SEO',
      icon: Search,
      desc: 'Positioning your brand as the primary cited answer in ChatGPT Search, Perplexity AI, Claude, Google AI Overviews, and traditional search engine rankings.',
      highlights: ['SearchGPT & Perplexity Citability', 'Programmatic Directory Architectures', 'Digital PR & Editorial Authority', 'Conversion Rate Optimization (CRO)']
    },
    {
      title: 'Studio Creative & Video Systems',
      badge: 'DaVinci 4K / 3D CGI / Design',
      icon: Video,
      desc: 'High-craft visual assets that build instant brand prestige - from commercial DaVinci Resolve color grading and motion VFX to photorealistic 3D product renders.',
      highlights: ['Commercial Video Post-Production', 'ACES Color Grading & Master Audio', '3D Product CGI & Modeling', 'Figma Scalable Design Systems']
    },
    {
      title: 'Paid Media & Outbound Pipelines',
      badge: 'High-ROAS Funnels & SDR',
      icon: TrendingUp,
      desc: 'Capturing bottom-of-funnel customer demand through high-intent search ads, short-form paid social, and multi-domain B2B outbound cold email engines.',
      highlights: ['Google Ads & Exact-Match Search', 'Meta & TikTok Paid Social Funnels', 'Multi-Domain Cold Email SDR Fleets', 'Lifecycle Email & Klaviyo Flows']
    },
    {
      title: 'Modern Web & E-Commerce',
      badge: 'Next.js 15 & Shopify Plus',
      icon: Layout,
      desc: 'Fast, responsive, conversion-focused websites and e-commerce stores built on modern Next.js App Router and Shopify Plus with sub-second page load times.',
      highlights: ['Next.js React Web Development', 'Custom Shopify Plus Storefronts', '100/100 Mobile Lighthouse Audits', 'Zero-Downtime Data Migrations']
    }
  ];

  const operatingPrinciples = [
    {
      icon: Users,
      title: '100% Senior Specialist Execution',
      desc: 'You work directly with experienced practitioners who actually execute your campaigns, edit your videos, and write your code. We do not use account managers to shield junior staff.'
    },
    {
      icon: Zap,
      title: 'Agile Milestone Sprints',
      desc: 'We operate in structured, bi-weekly delivery sprints with transparent milestone deliverables. You see continuous tangible progress and deployable assets every single week.'
    },
    {
      icon: Lock,
      title: 'Full Asset & IP Sovereignty',
      desc: 'You maintain 100% ownership of all deliverables. We provide raw DaVinci project files, 4K ProRes exports, Figma design files, clean GitHub repositories, and direct ad account ownership.'
    },
    {
      icon: ShieldCheck,
      title: 'Fixed-Price Certainty',
      desc: 'No vague hourly billing or unexpected scope creep. Every project scope and milestone is clearly documented upfront with agreed delivery schedules.'
    }
  ];

  const studioBenchmarks = [
    { label: 'Client Pipeline Generated', value: '$35M+', sub: 'Verifiable B2B & D2C Revenue' },
    { label: 'Monthly Organic Reach', value: '450k+', sub: 'SearchGPT, Perplexity & Google' },
    { label: 'Average Paid Ad ROAS', value: '4.8x', sub: 'Across Meta, Google & Amazon' },
    { label: 'Average Mobile Page Speed', value: '1.1s', sub: 'Lighthouse 98+ Performance' },
  ];

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={aboutSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-8">
          <Link href="/" className="hover:text-[#f5f5f0] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">About Explode Labs</span>
        </div>

        {/* HERO SECTION */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-[#181818]">
          <Badge variant="orange">Studio Philosophy & Origin</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
            The Anti-Agency for Digital Growth, Creative Craft & High-Speed Web Development.
          </h1>
          <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed font-normal">
            Explode Labs is an independent execution studio founded by Vishal Raghuwanshi. We bring together AI search optimization (GEO/AEO), high-craft commercial video editing, performance paid acquisition, and modern Next.js web development into one unified, senior-led delivery model.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Work With Our Team
            </Button>
            <Button href="/portfolio" size="lg" variant="outline">
              Explore Production Portfolio
            </Button>
          </div>
        </div>

        {/* FOUNDER STORY / LETTER */}
        <div className="py-16 border-b border-[#181818]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Founder Profile Card */}
            <div className="lg:col-span-4 bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-6 sm:p-8 space-y-6 sticky top-24">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#ff5500] to-[#ff8833] flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#ff5500]/20">
                VR
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f5f5f0]">Vishal Raghuwanshi</h3>
                <p className="text-xs font-mono text-[#ff5500] mt-0.5">Founder & Principal Director</p>
              </div>
              <p className="text-xs text-[#8e8e93] leading-relaxed">
                Directing growth strategy, organic search architecture, and creative execution across all Explode Labs client engagements.
              </p>
              <div className="pt-4 border-t border-[#181818] flex items-center justify-between">
                <span className="text-xs text-[#71717a]">Connect on LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/vishal-raghu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#f5f5f0] hover:text-[#ff5500] transition-colors font-mono font-medium"
                >
                  <span>vishal-raghu</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Col: Authentic Letter / Mission */}
            <div className="lg:col-span-8 space-y-6 text-[#a1a1aa] leading-relaxed text-sm sm:text-base">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff5500] uppercase tracking-wider font-semibold">
                <Flame className="w-4 h-4" />
                <span>Why Explode Labs Was Built</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] leading-snug">
                Eliminating the friction between creative craft, customer acquisition, and web execution.
              </h2>

              <p>
                When growing a modern brand or product, most companies face a frustrating reality: you are forced to manage four or five separate agencies simultaneously.
              </p>

              <p>
                You hire an SEO agency that understands keywords but cannot produce high-quality video or design. You hire a video editor who creates artistic reels but knows nothing about conversion rates or ad hooks. You hire a paid media agency that burns ad spend on generic landing pages. And you hire a web development agency that builds heavy, slow sites that hurt your search rankings.
              </p>

              <div className="p-6 bg-[#111111] border-l-2 border-[#ff5500] rounded-r-xl my-6 space-y-2">
                <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold">Our Studio Philosophy</div>
                <p className="text-sm sm:text-base text-[#f5f5f0] font-medium leading-relaxed italic">
                  &ldquo;A great digital presence is not created in silos. When your SEO search intent, video creative hooks, paid media funnels, and web development are engineered by the same focused team, your acquisition costs drop and your brand authority compounds.&rdquo;
                </p>
              </div>

              <p>
                At Explode Labs, we cut out the agency overhead, the layers of junior account managers, and the endless slide decks. Every project is handled directly by senior specialists who take ownership of the end result - whether that means getting your brand cited at the top of ChatGPT Search and Google, producing commercial 4K video ads in DaVinci Resolve, or launching a lightning-fast Next.js web application.
              </p>

              <p>
                We focus relentlessly on practical, revenue-generating services that drive real commercial outcomes for our partners.
              </p>
            </div>
          </div>
        </div>

        {/* VERIFIABLE PERFORMANCE BENCHMARKS */}
        <div className="py-16 border-b border-[#181818]">
          <div className="max-w-3xl mb-10">
            <Badge variant="orange" className="mb-2">Grounded Impact</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
              Measured in pipeline, traffic, and revenue.
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8e93] mt-2">
              We do not track vanity metrics. Every engagement is benchmarked against real commercial key performance indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioBenchmarks.map((b, idx) => (
              <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-2">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-[#ff5500]">{b.value}</div>
                <div className="text-xs font-bold text-[#f5f5f0]">{b.label}</div>
                <div className="text-[11px] text-[#71717a]">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 CORE DISCIPLINES */}
        <div className="py-16 border-b border-[#181818]">
          <div className="max-w-3xl mb-12">
            <Badge variant="orange" className="mb-2">Core Focus Areas</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
              Four High-Leverage Growth & Creative Disciplines.
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8e93] mt-2">
              We concentrate our efforts where they create the highest commercial leverage for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-8 bg-[#0c0c0c] border border-[#1e1e1e] hover:border-[#2e2e2e] transition-all rounded-2xl flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-[#ff5500] group-hover:border-[#ff5500]/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-[#71717a] bg-[#111111] px-2.5 py-1 rounded-full border border-[#1c1c1c]">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
                      {p.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#181818]">
                      <div className="text-[11px] font-mono uppercase text-[#71717a] font-semibold">Key Capabilities:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#a1a1aa]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#181818]">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs text-[#ff5500] font-semibold hover:underline"
                    >
                      <span>Explore {p.title} Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* THE ANTI-AGENCY PRINCIPLES */}
        <div className="py-16 border-b border-[#181818]">
          <div className="max-w-3xl mb-12">
            <Badge variant="orange" className="mb-2">How We Work</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
              The Explode Operating Standard.
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8e93] mt-2">
              Designed from the ground up to give founders, executives, and marketing leaders total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingPrinciples.map((op, idx) => {
              const Icon = op.icon;
              return (
                <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1c1c1c] rounded-xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-[#ff5500]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#f5f5f0]">{op.title}</h3>
                  <p className="text-xs text-[#8e8e93] leading-relaxed">{op.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FREE DIAGNOSTIC TOOLS BANNER */}
        <div className="py-16 border-b border-[#181818]">
          <div className="p-8 sm:p-10 bg-gradient-to-r from-[#111111] via-[#0c0c0c] to-[#121212] border border-[#222222] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <Badge variant="orange">Free Strategic Tools</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
                Evaluate your search citability & estimate project scope in 60 seconds.
              </h2>
              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed">
                Use our interactive diagnostic tools to audit your website for AI search visibility (GEO/AEO) or calculate transparent milestone investment estimates.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Button href="/tools/seo-auditor" size="lg" variant="primary" withArrow>
                Run Free SEO/AEO Audit
              </Button>
              <Button href="/tools/project-estimator" size="lg" variant="outline">
                Instant Project Estimator
              </Button>
            </div>
          </div>
        </div>

        {/* FINAL CALL TO ACTION */}
        <div className="pt-16 text-center space-y-6 max-w-3xl mx-auto">
          <Badge variant="orange">Get in Touch</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0]">
            Ready to accelerate your growth and creative execution?
          </h2>
          <p className="text-sm text-[#8e8e93] leading-relaxed">
            Schedule a direct discovery call with Vishal Raghuwanshi and our senior studio team. We will review your current growth funnels and provide a tailored execution roadmap within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Schedule Discovery Call
            </Button>
            <Button href="/services" size="lg" variant="outline">
              View All Services
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
