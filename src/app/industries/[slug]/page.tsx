import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getIndustryBySlug, getCaseStudyBySlug, getServiceBySlug, industries } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Users, 
  HelpCircle, 
  Clock, 
  Check, 
  XCircle, 
  Quote, 
  Target, 
  Layers, 
  Zap, 
  Lock 
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export function generateStaticParams() {
  return industries.map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Industry Not Found | Explode Labs' };

  return {
    title: `${industry.name} Growth & Web Engineering | Explode Labs`,
    description: industry.overview,
    openGraph: {
      title: `${industry.name} Solutions | Explode Labs`,
      description: industry.tagline,
      url: `https://explodelabs.com/industries/${industry.slug}`,
      siteName: 'Explode Labs',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${industry.name} Solutions | Explode Labs`,
      description: industry.tagline,
    },
    alternates: {
      canonical: `/industries/${industry.slug}`,
    }
  };
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

  const primaryCaseStudy = industry.caseStudySlugs.length > 0 
    ? getCaseStudyBySlug(industry.caseStudySlugs[0]) 
    : undefined;

  const faqsToRender = industry.faqs || [];

  const industrySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${industry.name} Digital Growth & Engineering`,
        url: `https://explodelabs.com/industries/${industry.slug}`,
        description: industry.overview,
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
            name: 'Industries',
            item: 'https://explodelabs.com/industries'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: industry.name,
            item: `https://explodelabs.com/industries/${industry.slug}`
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
      <JsonLd schema={industrySchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* 1. BREADCRUMB & HERO */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6">
            <Link href="/industries" className="hover:text-[#f5f5f0] transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#f5f5f0]">{industry.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-[#1a1a1a]">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="orange">Industry Specialization</Badge>
                <span className="text-xs font-mono text-[#71717a] border border-[#222222] bg-[#111111] px-2.5 py-0.5 rounded">
                  Fixed Milestone Delivery
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
                {industry.name}
              </h1>

              <p className="text-xl sm:text-2xl text-[#f5f5f0] leading-snug font-medium">
                {industry.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed font-normal">
                {industry.executiveSummary || industry.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button 
                  href="https://calendly.com/vishal-invokeiq/30min" 
                  size="lg" 
                  variant="primary" 
                  withArrow
                >
                  Book a 30-Min Strategy Call
                </Button>
                <Button href="/architect" size="lg" variant="outline">
                  Scope with AI Architect
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-2 text-xs text-[#71717a]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>100% IP & code ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Zero junior handoffs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Transparent 2-week sprints</span>
                </div>
              </div>
            </div>

            {/* Benchmark Metrics Dashboard */}
            <div className="lg:col-span-4 bg-[#0e0e0e] border border-[#222222] rounded-2xl p-6 sm:p-7 space-y-6">
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#ff5500] font-semibold flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>Verified Outcomes</span>
                </span>
                <span className="text-[11px] font-mono text-[#71717a]">Average Client Lift</span>
              </div>

              <div className="space-y-5">
                {industry.benchmarkMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-bold font-mono text-[#ff5500]">
                      {m.value}
                    </div>
                    <div className="text-sm font-semibold text-[#f5f5f0]">
                      {m.label}
                    </div>
                    <div className="text-xs text-[#71717a] leading-relaxed">
                      {m.context}
                    </div>
                    {idx < industry.benchmarkMetrics.length - 1 && (
                      <div className="pt-3 border-b border-[#161616]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. WHO WE PARTNER WITH */}
        {industry.whoWeHelp && industry.whoWeHelp.length > 0 && (
          <div className="space-y-10">
            <SectionHeader
              badge="Built for Decision-Makers"
              title={`Who we partner with in ${industry.name}.`}
              description="We work with ambitious leadership teams who demand high execution velocity without sacrificing quality or security."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.whoWeHelp.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="p-7 bg-[#0d0d0d] border border-[#1c1c1c] hover:border-[#2f2f2f] rounded-2xl space-y-5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase px-3 py-1 bg-[#161616] border border-[#262626] text-[#ff5500] rounded-lg font-semibold">
                      {partner.role}
                    </span>
                    <Users className="w-4 h-4 text-[#71717a]" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase text-[#71717a]">Primary Focus:</div>
                    <p className="text-sm font-semibold text-[#f5f5f0] leading-snug">
                      {partner.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#181818] space-y-1.5">
                    <div className="text-xs font-mono uppercase text-[#e11d48]">The Pain Point We Fix:</div>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed">
                      {partner.painPoint}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. BOTTLENECK, COMPLIANCE & TAILORED SOLUTIONS MATRIX */}
        <div className="space-y-10">
          <SectionHeader
            badge="Strategic Assessment"
            title="Solving the fundamental growth bottlenecks."
            description="We eliminate friction across customer acquisition, user onboarding, and regulatory compliance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bottlenecks Card */}
            <div className="p-7 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <XCircle className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#f5f5f0]">
                  Industry Bottlenecks
                </h3>
              </div>
              <p className="text-xs text-[#71717a] leading-relaxed">
                Common points of friction that slow down customer acquisition and hurt revenue.
              </p>
              <div className="space-y-3 pt-2">
                {industry.keyChallenges.map((ch, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#a1a1aa] leading-relaxed">
                    <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Security Card */}
            <div className="p-7 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#f5f5f0]">
                  Compliance & Security
                </h3>
              </div>
              <p className="text-xs text-[#71717a] leading-relaxed">
                Mandatory privacy, regulatory, and access standards engineered directly into every build.
              </p>
              <div className="space-y-3 pt-2">
                {industry.complianceAndRegulations.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#a1a1aa] leading-relaxed">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tailored Solutions Card */}
            <div className="p-7 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#f5f5f0]">
                  Tailored Solutions
                </h3>
              </div>
              <p className="text-xs text-[#71717a] leading-relaxed">
                Our proven engineering and acquisition blueprints built to accelerate market leadership.
              </p>
              <div className="space-y-3 pt-2">
                {industry.tailoredSolutions.map((sol, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#f5f5f0] font-medium leading-relaxed">
                    <span className="text-[#ff5500] font-bold shrink-0 mt-0.5">•</span>
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. 5-STAGE PRODUCTION ROADMAP */}
        {industry.fiveStageRoadmap && industry.fiveStageRoadmap.length > 0 && (
          <div className="space-y-10">
            <SectionHeader
              badge="Execution Methodology"
              title="5-Stage Production & Growth Pipeline."
              description="A structured milestone delivery model designed for speed, transparency, and predictable outcomes."
            />

            <div className="space-y-6">
              {industry.fiveStageRoadmap.map((stage, idx) => (
                <div 
                  key={idx}
                  className="p-7 bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-2xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                >
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#ff5500] bg-[#ff5500]/10 px-2.5 py-0.5 rounded">
                        {stage.phase}
                      </span>
                      <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{stage.duration}</span>
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#f5f5f0]">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#8e8e93] leading-relaxed">
                      {stage.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-8 bg-[#111111] border border-[#1c1c1c] rounded-xl p-5 space-y-3">
                    <div className="text-[11px] font-mono uppercase text-[#71717a] font-semibold">
                      Key Milestone Deliverables:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#e4e4e7] leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. AGENCY COMPARISON MATRIX */}
        {industry.comparisonMatrix && industry.comparisonMatrix.length > 0 && (
          <div className="space-y-10">
            <SectionHeader
              badge="The Studio Advantage"
              title="Traditional Agencies vs. Explode Labs."
              description="Why high-growth companies choose our dedicated sprint studio over bloated legacy agency retainers."
            />

            <div className="overflow-hidden border border-[#1f1f1f] rounded-2xl bg-[#0a0a0a]">
              <div className="grid grid-cols-12 bg-[#121212] border-b border-[#1f1f1f] p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-[#71717a]">
                <div className="col-span-4 sm:col-span-3 font-semibold text-[#f5f5f0]">Capability & Standard</div>
                <div className="col-span-4 sm:col-span-4 font-semibold text-[#8e8e93]">Traditional Big Agency</div>
                <div className="col-span-4 sm:col-span-5 font-semibold text-[#ff5500]">Explode Labs Dedicated Studio</div>
              </div>

              <div className="divide-y divide-[#181818]">
                {industry.comparisonMatrix.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 text-xs items-center gap-2">
                    <div className="col-span-4 sm:col-span-3 font-semibold text-[#f5f5f0]">
                      {row.capability}
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-[#71717a] leading-relaxed">
                      {row.legacyAgency}
                    </div>
                    <div className="col-span-4 sm:col-span-5 text-[#f5f5f0] font-medium leading-relaxed flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.explodeLabs}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 6. PROVEN CASE STUDY HIGHLIGHT */}
        {primaryCaseStudy && (
          <div className="space-y-10">
            <SectionHeader
              badge="Verified Track Record"
              title={`Proven client results in ${primaryCaseStudy.industry}.`}
              description="Review how we transformed revenue, user experience, and technical infrastructure for our partners."
            />

            <div className="p-8 sm:p-10 bg-[#0e0e0e] border border-[#222222] rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{primaryCaseStudy.industry}</Badge>
                  <span className="text-xs font-mono text-[#71717a]">Engagement: {primaryCaseStudy.timeline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] leading-tight">
                  {primaryCaseStudy.client}: {primaryCaseStudy.title}
                </h3>

                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                  {primaryCaseStudy.tagline}
                </p>

                {primaryCaseStudy.testimonial && (
                  <div className="p-5 bg-[#141414] border border-[#242424] rounded-2xl space-y-3">
                    <Quote className="w-5 h-5 text-[#ff5500]" />
                    <p className="text-xs sm:text-sm italic text-[#e4e4e7] leading-relaxed">
                      "{primaryCaseStudy.testimonial.quote}"
                    </p>
                    <div className="text-xs font-mono text-[#71717a] pt-1">
                      <span className="text-[#f5f5f0] font-semibold">{primaryCaseStudy.testimonial.author}</span> • {primaryCaseStudy.testimonial.role}, {primaryCaseStudy.testimonial.company}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    href={`/case-studies/${primaryCaseStudy.slug}`}
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
                  {primaryCaseStudy.heroMetric.value}
                </div>
                <div className="text-sm font-semibold text-[#f5f5f0]">
                  {primaryCaseStudy.heroMetric.label}
                </div>

                <div className="pt-4 border-t border-[#1f1f1f] grid grid-cols-2 gap-4 text-left">
                  {primaryCaseStudy.secondaryMetrics.slice(0, 2).map((sec, i) => (
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

        {/* 7. RECOMMENDED CAPABILITIES & SERVICES */}
        <div className="space-y-10">
          <SectionHeader
            badge="Recommended Capabilities"
            title={`Tailored disciplines for ${industry.name}.`}
            description="Explore the specific engineering, search growth, design, and paid media services we bundle for this vertical."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.recommendedServiceSlugs.map((serviceSlug) => {
              const srv = getServiceBySlug(serviceSlug);
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
                    <p className="text-xs text-[#8e8e93] leading-relaxed line-clamp-3">
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

        {/* 8. PRACTICAL CLIENT FAQS */}
        {faqsToRender.length > 0 && (
          <div className="space-y-10">
            <SectionHeader
              badge="Frequently Asked Questions"
              title="Clear answers on process, timelines & costs."
              description="Transparent operational answers to help your team make an informed decision."
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

        {/* 9. BOTTOM CONVERSION CTA BANNER */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#080808] border border-[#222222] rounded-3xl text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="orange">Direct Senior Consultation</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] leading-tight">
            Ready to accelerate your {industry.name} growth?
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call directly with Vishal Raghuwanshi and our senior architecture team to review your growth goals, scope deliverables, and receive a transparent milestone proposal.
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
              Send Project Scope Inquiry
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
