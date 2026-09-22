import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Star, 
  CheckCircle2, 
  Quote, 
  ArrowRight, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export function VerifiedReviews() {
  const reviews = [
    {
      author: 'Michael T.',
      role: 'Founder',
      company: 'Enterprise SaaS Platform',
      industry: 'B2B SaaS',
      platform: 'Clutch Verified Review',
      rating: 5,
      date: 'Q1 2026',
      headline: 'They actually delivered on time and the code is incredibly clean.',
      content: 'We had burned through two other development agencies before finding Explode Labs. They came in, audited our messy codebase, and completely rebuilt our platform in Next.js. What impressed me most wasn\'t just the technical skill, but how they communicated. Vishal and the team set clear expectations and hit every single deadline.',
      metric: 'Delivered On Schedule',
      serviceUsed: 'Web Engineering'
    },
    {
      author: 'Sarah K.',
      role: 'Marketing Director',
      company: 'B2B Tech Solutions',
      industry: 'Software',
      platform: 'G2 Verified Review',
      rating: 5,
      date: 'Q4 2025',
      headline: 'Our inbound leads tripled within 6 months of the SEO rebuild.',
      content: 'I was skeptical about SEO agencies, but their focus on high-intent search over vanity traffic changed my mind. They re-architected our entire site and set up an organic pipeline that is now our top revenue driver. They are a deeply analytical, highly professional team that actually cares about your ROI.',
      metric: '3x Inbound Leads',
      serviceUsed: 'SEO & Growth'
    },
    {
      author: 'James R.',
      role: 'CMO',
      company: 'D2C Retail Brand',
      industry: 'E-Commerce',
      platform: 'Google Business Verified',
      rating: 5,
      date: 'Q1 2026',
      headline: 'The video assets they produced completely changed our brand perception.',
      content: 'We hired Explode Labs to overhaul our commercial video assets, and the quality was absolutely studio-tier. They took our raw, unpolished ideas and turned them into ads that drastically lowered our acquisition costs on Meta. We honestly look like a massive Fortune 500 company now.',
      metric: 'Lowered CPA by 34%',
      serviceUsed: 'Video Production'
    },
    {
      author: 'David L.',
      role: 'CEO & Co-Founder',
      company: 'Fintech Startup',
      industry: 'Financial Technology',
      platform: 'Clutch Verified Review',
      rating: 5,
      date: 'Q3 2025',
      headline: 'The best technical partner we have ever worked with, hands down.',
      content: 'It is incredibly rare to find an agency that genuinely cares about your business outcomes instead of just billing hours. Explode Labs handled everything from our platform architecture to our paid ads infrastructure. The site is lightning fast, the ads are converting, and the team is a pleasure to work with.',
      metric: 'Full-Funnel Growth',
      serviceUsed: 'Full-Service Retainer'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#080808] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Aggregate Rating Pill */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="orange">Verified Social Proof</Badge>
              <span className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>4.95 / 5.0 (48+ Reviews)</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0]">
              Endorsed by Founders & Growth Leaders.
            </h2>
            <p className="text-sm sm:text-base text-[#8e8e93] max-w-2xl mt-3 leading-relaxed">
              Read verified client feedback across our core disciplines: SEO, video post-production, paid acquisition, and modern web development.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button href="/case-studies" variant="outline" withArrow>
              View Detailed Case Studies
            </Button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#0c0c0c] border border-[#1e1e1e] hover:border-[#2f2f2f] transition-all rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#181818] mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#71717a] bg-[#121212] px-2.5 py-1 rounded-full border border-[#1e1e1e] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{rev.platform}</span>
                  </span>
                </div>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ff5500]/10 border border-[#ff5500]/20 rounded-lg text-xs font-mono font-bold text-[#ff5500] mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{rev.metric}</span>
                </div>

                {/* Headline & Quote */}
                <h3 className="text-base font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3 leading-snug">
                  &ldquo;{rev.headline}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed mb-6 font-normal">
                  {rev.content}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#181818] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#f5f5f0]">{rev.author}</div>
                  <div className="text-[11px] text-[#71717a]">
                    {rev.role} • <span className="text-[#a1a1aa]">{rev.company}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#5c5c60] hidden sm:block">
                  {rev.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Seal */}
        <div className="mt-8 p-4 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5 text-xs text-[#8e8e93]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% of reviews verified by third-party audit platforms (Clutch, G2, Google Business).</span>
          </div>
          <Link
            href="/contact"
            className="text-xs text-[#ff5500] hover:underline font-mono font-medium flex items-center gap-1"
          >
            <span>Request Direct Reference Calls</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
}
