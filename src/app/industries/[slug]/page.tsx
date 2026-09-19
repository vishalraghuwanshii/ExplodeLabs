import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIndustryBySlug, getCaseStudyBySlug, getServiceBySlug, industries } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

export function generateStaticParams() {
  return industries.map((i) => ({
    slug: i.slug,
  }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6">
          <Link href="/industries" className="hover:text-[#f5f5f0]">Industries</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">{industry.name}</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-[#1a1a1a]">
          <Badge variant="orange">Industry Architecture</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
            {industry.name}
          </h1>
          <p className="text-xl text-[#a1a1aa] leading-relaxed font-normal">
            {industry.tagline}
          </p>
          <p className="text-base text-[#8e8e93] leading-relaxed">
            {industry.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Schedule an {industry.name} Consultation
            </Button>
            <Button href="/architect" size="lg" variant="outline">
              AI Project Architect
            </Button>
          </div>
        </div>

        {/* Compliance, Challenges & Solutions */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#1a1a1a]">
          <div className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-4">
            <h3 className="text-base font-bold text-[#f5f5f0] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compliance & Security</span>
            </h3>
            <div className="space-y-2 text-xs text-[#a1a1aa]">
              {industry.complianceAndRegulations.map((c, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-4">
            <h3 className="text-base font-bold text-[#f5f5f0] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Industry Bottlenecks</span>
            </h3>
            <div className="space-y-2 text-xs text-[#a1a1aa]">
              {industry.keyChallenges.map((ch, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-4">
            <h3 className="text-base font-bold text-[#f5f5f0] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
              <span>Tailored Solutions</span>
            </h3>
            <div className="space-y-2 text-xs text-[#a1a1aa]">
              {industry.tailoredSolutions.map((sol, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#ff5500] font-bold">•</span>
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Capabilities */}
        <div className="py-16">
          <SectionHeader
            badge="Recommended Capabilities"
            title={`Tailored services for ${industry.name}.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.recommendedServiceSlugs.map((slug) => {
              const srv = getServiceBySlug(slug);
              if (!srv) return null;
              return (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className="p-6 bg-[#0e0e0e] hover:bg-[#141414] border border-[#1e1e1e] hover:border-[#333333] rounded-xl transition-all group block"
                >
                  <div className="text-xs font-mono uppercase text-[#ff5500] mb-2">{srv.pillar}</div>
                  <h4 className="text-base font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2">
                    {srv.name}
                  </h4>
                  <p className="text-xs text-[#8e8e93] line-clamp-2">{srv.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
