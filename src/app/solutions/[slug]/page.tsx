import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getSolutionBySlug, getCaseStudyBySlug, getServiceBySlug, solutions } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Clock, 
  DollarSign, 
  Cpu, 
  ArrowUpRight, 
  ShieldCheck, 
  HelpCircle, 
  Check, 
  Sparkles, 
  Layers, 
  AlertCircle 
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export function generateStaticParams() {
  return solutions.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: 'Solution Not Found | Explode Labs' };

  return {
    title: `${solution.title} | Explode Labs Turnkey Solutions`,
    description: solution.tagline,
    openGraph: {
      title: `${solution.title} | Explode Labs`,
      description: solution.tagline,
      url: `https://explodelabs.com/solutions/${solution.slug}`,
      siteName: 'Explode Labs',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${solution.title} | Explode Labs`,
      description: solution.tagline,
    },
    alternates: {
      canonical: `/solutions/${solution.slug}`,
    }
  };
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
  const faqsToRender = solution.faqs || [];

  const solutionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: solution.title,
        url: `https://explodelabs.com/solutions/${solution.slug}`,
        description: solution.tagline,
        provider: {
          '@type': 'Organization',
          name: 'Explode Labs',
          url: 'https://explodelabs.com'
        },
        areaServed: 'Worldwide'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://explodelabs.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Solutions',
            item: 'https://explodelabs.com/solutions'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: solution.title,
            item: `https://explodelabs.com/solutions/${solution.slug}`
          }
        ]
      },
      ...(faqsToRender.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: faqsToRender.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <div className="py-12 sm:py-20 bg-[#080808]">
      <JsonLd schema={solutionSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* 1. BREADCRUMB & HERO */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6">
            <Link href="/solutions" className="hover:text-[#f5f5f0] transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-[#f5f5f0]">{solution.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-[#1a1a1a]">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="orange">Turnkey Outcome Bundle</Badge>
                <span className="text-xs font-mono text-[#71717a] border border-[#222222] bg-[#111111] px-2.5 py-0.5 rounded">
                  Fixed Milestone Scope
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
                {solution.title}
              </h1>

              <p className="text-xl sm:text-2xl text-[#f5f5f0] leading-snug font-medium">
                {solution.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed font-normal">
                {solution.executiveSummary || solution.outcome}
              </p>

              {/* Target Outcome Callout Box */}
              <div className="p-6 bg-[#0e0e0e] border border-[#222222] rounded-2xl space-y-2">
                <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  <span>Target Business Outcome:</span>
                </div>
                <p className="text-sm sm:text-base text-[#f5f5f0] font-medium leading-relaxed">
                  {solution.outcome}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button 
                  href="https://calendly.com/vishal-invokeiq/30min" 
                  size="lg" 
                  variant="primary" 
                  withArrow
                >
                  Book a 30-Min Strategy Call
                </Button>
                <Button href="/architect" size="lg" variant="outline">
                  Customize in AI Architect
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-2 text-xs text-[#71717a]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>100% IP & code ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Bi-weekly milestone sprints</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Zero junior handoffs</span>
                </div>
              </div>
            </div>

            {/* Solution Specifications Box */}
            <div className="lg:col-span-4 bg-[#0e0e0e] border border-[#222222] rounded-2xl p-6 sm:p-7 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Solution Specifications</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[#71717a] mb-1">Engagement Investment</div>
                  <div className="text-lg font-bold font-mono text-[#ff5500]">{solution.pricingRange}</div>
                </div>

                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-1">Estimated Timeline</div>
                  <div className="text-sm font-semibold font-mono text-[#f5f5f0]">{solution.timeline}</div>
                </div>

                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-1.5">Ideal Profile</div>
                  <div className="text-xs text-[#a1a1aa] leading-relaxed">{solution.idealFor}</div>
                </div>

                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-2">Core Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.technologies.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-[#141414] border border-[#262626] rounded text-[11px] font-mono text-[#e4e4e7]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. PROBLEMS SOLVED & WHY THIS BUNDLE MATTERS */}
        <div className="space-y-10">
          <SectionHeader
            badge="Strategic Value"
            title="Why this turnkey bundle matters."
            description={solution.whyThisBundleMatters || "Eliminating the friction, cost, and delays of hiring disconnected agencies."}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-[#f5f5f0] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>The Bottlenecks This Solves:</span>
              </h3>
              <div className="space-y-3 pt-2">
                {solution.problems.map((prob, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#a1a1aa] leading-relaxed">
                    <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-[#f5f5f0] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500]" />
                <span>What We Deliver:</span>
              </h3>
              <div className="space-y-3 pt-2">
                {solution.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#f5f5f0] font-medium leading-relaxed">
                    <span className="text-[#ff5500] font-bold shrink-0 mt-0.5">•</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. GRANULAR DELIVERABLES MATRIX */}
        {solution.deliverablesMatrix && solution.deliverablesMatrix.length > 0 && (
          <div className="space-y-10">
            <SectionHeader
              badge="Deliverables Matrix"
              title="Comprehensive deliverables & production standards."
              description="Review the exact assets, infrastructure, and benchmarks included in this bundle."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solution.deliverablesMatrix.map((matrix, idx) => (
                <div key={idx} className="p-7 bg-[#0d0d0d] border border-[#1c1c1c] rounded-2xl space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-[#f5f5f0] flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#ff5500]" />
                      <span>{matrix.category}</span>
                    </h4>
                    <div className="space-y-2.5">
                      {matrix.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa] leading-snug">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1a1a1a]">
                    <div className="text-[11px] font-mono text-[#71717a] uppercase">Benchmark Standard:</div>
                    <div className="text-xs font-semibold text-[#f5f5f0] mt-1">{matrix.standards}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PHASE-BY-PHASE EXECUTION FRAMEWORK */}
        <div className="space-y-10">
          <SectionHeader
            badge="Phase-by-Phase Execution"
            title="How this solution is delivered."
            description="Our structured milestone execution model guarantees predictable results."
          />

          <div className="space-y-6">
            {solution.framework.map((fw, idx) => (
              <div key={idx} className="p-7 bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-2xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#ff5500] bg-[#ff5500]/10 px-2.5 py-0.5 rounded">
                      {fw.phase.split(':')[0]}
                    </span>
                    <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{fw.duration}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#f5f5f0]">
                    {fw.phase.includes(':') ? fw.phase.split(':')[1] : fw.phase}
                  </h3>
                  <p className="text-xs text-[#8e8e93] leading-relaxed">
                    {fw.summary}
                  </p>
                </div>

                {fw.deliverables && fw.deliverables.length > 0 && (
                  <div className="lg:col-span-8 bg-[#111111] border border-[#1c1c1c] rounded-xl p-5 space-y-3">
                    <div className="text-[11px] font-mono uppercase text-[#71717a] font-semibold">
                      Milestone Deliverables:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {fw.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#e4e4e7] leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. BUNDLED CAPABILITIES & SERVICES */}
        <div className="space-y-10">
          <SectionHeader
            badge="Bundled Capabilities"
            title="Integrated services included in this solution."
            description="Explore the specific engineering, design, and growth capabilities combined in this bundle."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.bundledServiceSlugs.map((slug) => {
              const srv = getServiceBySlug(slug);
              if (!srv) return null;
              return (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className="p-6 bg-[#0c0c0c] hover:bg-[#121212] border border-[#1e1e1e] hover:border-[#333333] rounded-2xl transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold">
                      {srv.pillar} • {srv.category}
                    </div>
                    <h4 className="text-lg font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors leading-snug">
                      {srv.name}
                    </h4>
                    <p className="text-xs text-[#8e8e93] leading-relaxed line-clamp-2">
                      {srv.tagline}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#181818] flex items-center justify-between text-xs text-[#71717a] group-hover:text-[#ff5500] font-mono">
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 6. PROVEN IMPLEMENTATION CASE STUDY */}
        {caseStudy && (
          <div className="space-y-10">
            <SectionHeader
              badge="Proven Implementation"
              title="Verified commercial execution."
              description="Review how this exact solution was deployed for a real enterprise client."
            />

            <div className="p-8 sm:p-10 bg-[#0e0e0e] border border-[#222222] rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{caseStudy.industry}</Badge>
                  <span className="text-xs font-mono text-[#71717a]">Engagement: {caseStudy.timeline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] leading-tight">
                  {caseStudy.client}: {caseStudy.title}
                </h3>

                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                  {caseStudy.tagline}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-[#ff5500] font-semibold hover:underline"
                  >
                    <span>Read Full Case Study Teardown</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#121212] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-6 text-center lg:text-left">
                <div className="text-xs font-mono uppercase text-[#71717a]">Primary Performance Metric</div>
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-[#ff5500]">
                  {caseStudy.heroMetric.value}
                </div>
                <div className="text-sm font-semibold text-[#f5f5f0]">
                  {caseStudy.heroMetric.label}
                </div>

                <div className="pt-4 border-t border-[#1f1f1f] grid grid-cols-2 gap-4 text-left">
                  {caseStudy.secondaryMetrics.slice(0, 2).map((sec, i) => (
                    <div key={i}>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-[#f5f5f0]">{sec.value}</div>
                      <div className="text-[11px] text-[#71717a]">{sec.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7. CLIENT FAQS */}
        {faqsToRender.length > 0 && (
          <div className="space-y-10">
            <SectionHeader
              badge="Frequently Asked Questions"
              title="Clear operational answers."
              description="Everything you need to know about milestone delivery, ownership, and scope."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqsToRender.map((faq, i) => (
                <div key={i} className="p-6 sm:p-7 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl space-y-3">
                  <h3 className="text-base font-bold text-[#f5f5f0] flex items-start gap-2.5 leading-snug">
                    <HelpCircle className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. BOTTOM CONVERSION CTA BANNER */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#080808] border border-[#222222] rounded-3xl text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="orange">Turnkey Deployment</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] leading-tight">
            Ready to deploy this solution?
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call directly with Vishal Raghuwanshi and our senior architecture team to review your project scope and receive a fixed milestone proposal.
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
              Send Project Inquiry
            </Button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#71717a]">
            <span>✓ Fixed-price milestone proposals</span>
            <span>✓ 100% code & IP ownership</span>
            <span>✓ Mutual NDA signed before kickoff</span>
          </div>
        </div>

      </div>
    </div>
  );
}
