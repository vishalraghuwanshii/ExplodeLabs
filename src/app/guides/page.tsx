import React from 'react';
import Link from 'next/link';
import { guides } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Guides & Strategy Knowledge Base | Explode Labs',
  description: 'In-depth architectural breakdowns, cost benchmarks, and technical playbooks written by senior practitioners.',
};

export default function GuidesPage() {
  const guidesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Explode Labs Technical Guides & Playbooks',
    url: 'https://explodelabs.com/guides',
    description: 'In-depth guides, playbooks, and architectural blueprints for SEO, SaaS engineering, and AI systems.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: guides.map((g, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: g.title,
        url: `https://explodelabs.com/guides/${g.slug}`,
        description: g.summary
      }))
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={guidesSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <Badge variant="orange">
            Engineering & Strategy Knowledge Base
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0]">
            Guides & Research.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            In-depth architectural breakdowns, cost benchmarks, and technical playbooks written by senior practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((g) => (
            <Card key={g.id} className="p-8 flex flex-col justify-between group hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{g.category}</Badge>
                  <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{g.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3 leading-snug">
                  <Link href={`/guides/${g.slug}`}>
                    {g.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
                  {g.summary}
                </p>

                <div className="space-y-2 mb-6 p-4 bg-[#111111] rounded-xl border border-[#1f1f1f]">
                  <div className="text-[11px] font-mono text-[#ff5500] uppercase font-semibold">
                    Core Insights:
                  </div>
                  {g.takeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa] leading-relaxed">
                      <span className="text-[#ff5500] font-bold">•</span>
                      <span className="line-clamp-2">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-6 border-t border-[#1a1a1a] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#5c5c60]">Published: {g.publishedDate}</span>
                  <Button href={`/guides/${g.slug}`} variant="outline" size="sm" withArrow>
                    Read Guide
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Strategy Consultation Banner */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-[#141414] via-[#0e0e0e] to-[#080808] border border-[#222222] rounded-3xl text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="orange">Direct Strategy Session</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] leading-tight">
            Have a specific product or growth initiative?
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call directly with Vishal Raghuwanshi and our senior architecture team to review your objectives and map out a fixed-price delivery plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button 
              href="https://calendly.com/vishal-invokeiq/30min" 
              size="lg" 
              variant="primary" 
              withArrow
            >
              Book 30-Min Strategy Call
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact Team
            </Button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#71717a]">
            <span>✓ Direct senior partner access</span>
            <span>✓ Transparent pricing & scope</span>
            <span>✓ 100% intellectual property ownership</span>
          </div>
        </div>
      </div>
    </div>
  );
}
