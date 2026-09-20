import React from 'react';
import Link from 'next/link';
import { solutions } from '@/data/knowledge-graph';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Target, ArrowRight, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Outcome-Driven Solutions | Explode Labs',
  description: 'Multi-disciplinary digital solutions designed for predictable business outcomes: launching SaaS MVPs, scaling e-commerce brands, and automating sales pipelines.',
};

export default function SolutionsPage() {
  const solutionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Explode Labs Outcome Solutions',
    url: 'https://explodelabs.com/solutions',
    description: 'Strategic outcome bundles engineered for rapid execution and revenue generation.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: solutions.map((sol, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: sol.title,
        url: `https://explodelabs.com/solutions/${sol.slug}`,
        description: sol.tagline
      }))
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={solutionsSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Outcome-Driven Bundles
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Strategic Solutions.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Multi-disciplinary bundles engineered to achieve specific business milestones: launching MVPs, automating ops, or scaling enterprise revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <Card key={sol.id} className="p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Target className="w-3 h-3" />
                    <span>Outcome Solution</span>
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">{sol.timeline}</span>
                </div>

                <h2 className="text-2xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3">
                  <Link href={`/solutions/${sol.slug}`} className="flex items-center justify-between">
                    <span>{sol.title}</span>
                    <ArrowRight className="w-5 h-5 text-[#5c5c60] group-hover:text-[#ff5500] group-hover:translate-x-1 transition-all" />
                  </Link>
                </h2>

                <p className="text-sm text-[#8e8e93] leading-relaxed mb-6 font-normal">
                  {sol.tagline}
                </p>

                {/* Outcome Callout */}
                <div className="p-4 rounded-xl bg-[#141414] border border-[#202020] mb-6">
                  <div className="text-[11px] font-mono uppercase text-[#ff5500] font-semibold mb-1">
                    Predictable Engagement Outcome
                  </div>
                  <p className="text-xs text-[#f5f5f0] leading-relaxed">
                    {sol.outcome}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  {sol.deliverables.slice(0, 3).map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-6 border-t border-[#1a1a1a] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-[#5c5c60]">Investment:</div>
                    <div className="text-sm font-semibold font-mono text-[#f5f5f0]">{sol.pricingRange}</div>
                  </div>
                  <Button href={`/solutions/${sol.slug}`} variant="outline" size="sm" withArrow>
                    View Framework
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
