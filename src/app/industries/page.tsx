import React from 'react';
import Link from 'next/link';
import { industries } from '@/data/knowledge-graph';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Industry Vertical Solutions | Explode Labs',
  description: 'Specialized digital growth, video creative, and web engineering architectures built for B2B SaaS, Healthcare, E-Commerce, and FinTech.',
};

export default function IndustriesPage() {
  const industriesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Explode Labs Industry Solutions',
    url: 'https://explodelabs.com/industries',
    description: 'Industry-specific digital architectures, compliance frameworks, and growth systems.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: industries.map((ind, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: ind.name,
        url: `https://explodelabs.com/industries/${ind.slug}`,
        description: ind.tagline
      }))
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={industriesSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Vertical Domain Expertise
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Specialized Industries.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Every industry has unique compliance, regulatory, and UX realities. We engineer tailored solutions built specifically for your vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <Card key={ind.id} className="p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Building2 className="w-3 h-3" />
                    <span>Vertical Specialization</span>
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3">
                  <Link href={`/industries/${ind.slug}`} className="flex items-center justify-between">
                    <span>{ind.name}</span>
                    <ArrowRight className="w-5 h-5 text-[#5c5c60] group-hover:text-[#ff5500] group-hover:translate-x-1 transition-all" />
                  </Link>
                </h2>

                <p className="text-sm text-[#8e8e93] leading-relaxed mb-6 font-normal">
                  {ind.tagline}
                </p>

                {/* Benchmark Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#141414] border border-[#202020] rounded-xl mb-6 text-center">
                  {ind.benchmarkMetrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-lg font-bold font-mono text-[#ff5500]">{m.value}</div>
                      <div className="text-[10px] text-[#71717a] line-clamp-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Compliance & Standards */}
                <div className="space-y-1.5 mb-6 text-xs text-[#a1a1aa]">
                  {ind.complianceAndRegulations.map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-6 border-t border-[#1a1a1a]">
                  <Button href={`/industries/${ind.slug}`} variant="outline" size="sm" className="w-full" withArrow>
                    Explore {ind.name} Architecture
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
