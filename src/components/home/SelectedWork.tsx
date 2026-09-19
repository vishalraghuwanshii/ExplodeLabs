import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { caseStudies } from '@/data/knowledge-graph';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function SelectedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            badge="Verified Proof"
            title="Engineered for measurable revenue."
            description="Real architectures, verifiable performance benchmarks, and transformative business outcomes."
            className="mb-0"
          />
          <Button href="/case-studies" variant="outline" withArrow>
            View All Case Studies ({caseStudies.length})
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#333333] transition-all group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="outline">{cs.industry}</Badge>
                  <span className="text-xs font-mono text-[#71717a]">{cs.timeline}</span>
                </div>

                {/* Hero Metric Block */}
                <div className="my-6 p-4 rounded-lg bg-[#141414] border border-[#222222]">
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-[#ff5500] tracking-tight">
                    {cs.heroMetric.value}
                  </div>
                  <div className="text-xs text-[#8e8e93] uppercase font-mono tracking-wider mt-1">
                    {cs.heroMetric.label}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3 leading-snug">
                  <Link href={`/case-studies/${cs.slug}`}>
                    {cs.client}: {cs.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
                  {cs.tagline}
                </p>

                {/* Key Takeaways / Secondary Metrics */}
                <div className="space-y-2 mb-6">
                  {cs.secondaryMetrics.map((sec, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-[#181818]">
                      <span className="text-[#71717a]">{sec.label}</span>
                      <span className="font-mono text-[#f5f5f0] font-medium">{sec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-4 border-t border-[#181818] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {cs.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono text-[#71717a] bg-[#121212] px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="flex items-center gap-1 text-xs text-[#ff5500] font-medium group-hover:underline shrink-0 ml-2"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
