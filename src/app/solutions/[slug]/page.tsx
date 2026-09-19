import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getSolutionBySlug, getCaseStudyBySlug, getServiceBySlug, solutions } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, ArrowRight, Target, Clock, DollarSign, Cpu, ArrowUpRight } from 'lucide-react';

export function generateStaticParams() {
  return solutions.map((s) => ({
    slug: s.slug,
  }));
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const caseStudy = getCaseStudyBySlug(solution.caseStudySlug);

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6">
          <Link href="/solutions" className="hover:text-[#f5f5f0]">Solutions</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">{solution.title}</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1a1a1a]">
          <div className="lg:col-span-8 space-y-6">
            <Badge variant="orange">Outcome Bundle</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
              {solution.title}
            </h1>
            <p className="text-xl text-[#a1a1aa] leading-relaxed font-normal">
              {solution.tagline}
            </p>

            <div className="p-6 bg-[#111111] border border-[#222222] rounded-xl">
              <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold mb-2 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>Target Business Outcome</span>
              </div>
              <p className="text-base text-[#f5f5f0] font-medium leading-relaxed">
                {solution.outcome}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" size="lg" variant="primary" withArrow>
                Deploy This Solution
              </Button>
              <Button href="/architect" size="lg" variant="outline">
                Customize in AI Architect
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 bg-[#0e0e0e] border border-[#222222] rounded-xl space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-semibold">
                Solution Specifications
              </h3>
              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[#71717a] mb-1">Engagement Investment</div>
                  <div className="text-base font-bold font-mono text-[#ff5500]">{solution.pricingRange}</div>
                </div>
                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-1">Estimated Timeline</div>
                  <div className="text-sm font-semibold font-mono text-[#f5f5f0]">{solution.timeline}</div>
                </div>
                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-2">Ideal Profile</div>
                  <div className="text-xs text-[#a1a1aa] leading-relaxed">{solution.idealFor}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Phase Delivery Framework */}
        <div className="py-16 border-b border-[#1a1a1a]">
          <SectionHeader
            badge="Phase-by-Phase Execution"
            title="How this solution is delivered."
            description="Our structured milestone execution model guarantees predictable results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.framework.map((fw, idx) => (
              <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1c1c1c] rounded-xl">
                <div className="text-xs font-mono font-bold text-[#ff5500] mb-2">{fw.duration}</div>
                <h3 className="text-base font-semibold text-[#f5f5f0] mb-2">{fw.phase}</h3>
                <p className="text-xs text-[#8e8e93] leading-relaxed">{fw.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bundled Capabilities & Case Study */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-[#f5f5f0]">Bundled Capabilities Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solution.bundledServiceSlugs.map((slug) => {
                const srv = getServiceBySlug(slug);
                if (!srv) return null;
                return (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="p-4 bg-[#0e0e0e] hover:bg-[#141414] border border-[#1e1e1e] hover:border-[#333333] rounded-xl transition-all group"
                  >
                    <div className="text-sm font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-1">
                      {srv.name}
                    </div>
                    <div className="text-xs text-[#8e8e93] line-clamp-1">{srv.tagline}</div>
                  </Link>
                );
              })}
            </div>
          </div>

          {caseStudy && (
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold text-[#f5f5f0] mb-6">Proven Implementation</h2>
              <Card className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{caseStudy.industry}</Badge>
                  <span className="text-xs font-mono text-[#ff5500] font-bold">
                    {caseStudy.heroMetric.value} {caseStudy.heroMetric.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#f5f5f0]">
                  {caseStudy.client}: {caseStudy.title}
                </h3>
                <p className="text-xs text-[#8e8e93] leading-relaxed">{caseStudy.tagline}</p>
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-[#ff5500] font-medium hover:underline pt-2"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
