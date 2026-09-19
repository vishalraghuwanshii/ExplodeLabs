import React from 'react';
import { AuditorTool } from '@/components/tools/AuditorTool';
import { Badge } from '@/components/ui/Badge';

export default function SeoAuditorPage() {
  return (
    <div className="py-16 sm:py-24">
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
