import React from 'react';
import { EstimatorCalculator } from '@/components/tools/EstimatorCalculator';
import { Badge } from '@/components/ui/Badge';
import { Calculator } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Interactive Project Scope & Cost Estimator | Explode Labs',
  description: 'Calculate transparent project timelines and investment benchmarks for video editing, SEO sprints, and Next.js web development.',
};

export default function ProjectEstimatorPage() {
  const estimatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Explode Labs Project Scope & Cost Estimator',
    url: 'https://explodelabs.com/tools/project-estimator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Interactive cost and timeline calculator for software engineering, video post-production, and digital growth services.'
  };

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={estimatorSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Real-Time Scope & Budget Engine
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Project Scope & Cost Estimator.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Select your discipline, architecture tier, and required feature modules to calculate transparent timeline and investment benchmarks.
          </p>
        </div>

        <EstimatorCalculator />
      </div>
    </div>
  );
}
