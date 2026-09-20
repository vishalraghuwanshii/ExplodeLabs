import React from 'react';
import { AuditorTool } from '@/components/tools/AuditorTool';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Free SEO & AI Citability Auditor | Explode Labs',
  description: 'Evaluate your website for Core Web Vitals, Schema.org entity relationships, and SearchGPT / Perplexity GEO citability.',
};

export default function SeoAuditorPage() {
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Explode Labs SEO & AI Citability Auditor',
    url: 'https://explodelabs.com/tools/seo-auditor',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free technical audit scanner evaluating website speed, schema markup, and generative AI search readiness.'
  };

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={toolSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="orange" className="mb-3">
            Entity & Web Performance Scanner
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            SEO & AI Citability Auditor.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Scan your website to evaluate Core Web Vitals (LCP, INP, CLS), Schema.org entity relationships, and GEO content readiness.
          </p>
        </div>

        <AuditorTool />
      </div>
    </div>
  );
}
