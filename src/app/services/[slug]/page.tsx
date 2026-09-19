import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  getServiceBySlug, 
  getCaseStudiesForService, 
  getRelatedServices, 
  services 
} from '@/data/knowledge-graph';
import { getDeepDiveForService, serviceDeepDives } from '@/data/service-deep-dives';
import { getPortfolioItemByServiceSlug } from '@/data/portfolio-items';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Cpu, 
  Layers, 
  HelpCircle, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Target,
  FileCode2,
  GitBranch,
  Table,
  Briefcase,
  Sliders,
  Eye,
  Sparkles
} from 'lucide-react';

export function generateStaticParams() {
  const serviceSlugs = services.map((s) => s.slug);
  const deepDiveSlugs = Object.keys(serviceDeepDives);
  const aliasSlugs = [
    'generative-engine-optimization-aeo',
    'chatgpt-and-perplexity-ai-seo',
    'technical-and-programmatic-seo',
    'custom-web-application-development',
    'custom-ai-agents-and-llm-pipelines',
    'video-editing-and-post-production',
    'b2b-outbound-sdr-and-lead-generation',
    'high-performance-paid-advertising',
    'headless-ecommerce-and-shopify-plus',
    'ui-ux-design-and-design-systems',
    'brand-identity-and-visual-systems',
    'motion-graphics-and-visual-effects',
    '3d-product-modeling-and-rendering',
    'lifecycle-and-cold-email-infrastructure',
    'technical-copywriting-and-editorial',
    'devops-cloud-and-cicd-infrastructure',
    'enterprise-workflow-automation',
    'modern-data-stack-and-warehousing',
    'enterprise-saas-architecture',
    'ios-and-android-mobile-apps',
    'ai-model-fine-tuning-and-quantization',
    'business-intelligence-and-dashboards'
  ];
  const allSlugs = Array.from(new Set([...serviceSlugs, ...deepDiveSlugs, ...aliasSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const deepDive = getDeepDiveForService(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Explode Labs',
    };
  }

  const title = deepDive?.metaTitle || `${service.name} Services | Explode Labs`;
  const description = deepDive?.metaDescription || `${service.tagline} Custom milestone-based delivery with Explode Labs.`;
  const primaryKeyword = deepDive?.primaryKeyword || service.name;
  const secondaryKeywords = deepDive?.secondaryKeywords || service.technologies;

  return {
    title,
    description,
    keywords: [primaryKeyword, ...secondaryKeywords, 'explodelabs', service.category, service.pillar],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://explodelabs.com/services/${service.slug}`,
      siteName: 'Explode Labs',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@explodelabs',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://explodelabs.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const deepDive = getDeepDiveForService(service.slug);
  const caseStudies = getCaseStudiesForService(service.slug);
  const relatedServices = getRelatedServices(service.slug);
  const portfolioArtifact = getPortfolioItemByServiceSlug(service.slug);

  const faqsToRender = deepDive ? deepDive.detailedFaqs : service.faqs;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: deepDive?.aeoDefinition || service.directAnswer,
    provider: {
      '@type': 'Organization',
      name: 'Explode Labs',
      url: 'https://explodelabs.com',
    },
    serviceType: service.category,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Custom proposal based on project scope and milestones',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsToRender.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://explodelabs.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://explodelabs.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `https://explodelabs.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6">
          <Link href="/services" className="hover:text-[#f5f5f0]">Services</Link>
          <span>/</span>
          <span className="text-[#ff5500] uppercase">{service.pillar}</span>
          <span>/</span>
          <span className="text-[#f5f5f0]">{service.name}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1a1a1a]">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="orange">{service.category}</Badge>
              <span className="text-xs font-mono text-[#71717a] border border-[#222222] px-2 py-0.5 rounded">
                Pillar: {service.pillar.toUpperCase()}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
              {service.name}
            </h1>

            <p className="text-xl text-[#a1a1aa] leading-relaxed font-normal">
              {service.tagline}
            </p>

            {/* Core Capability Definition Card */}
            <div className="p-6 bg-[#0f0f0f] border border-[#262626] rounded-xl relative shadow-2xl">
              <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold mb-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#ff5500]" />
                  <span>Core Capability Brief & Definition</span>
                </div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider font-mono">Executive Scope</span>
              </div>
              <p className="text-sm sm:text-base text-[#f5f5f0] leading-relaxed font-medium">
                {deepDive?.aeoDefinition || service.directAnswer}
              </p>
            </div>

            {deepDive?.executiveSummary && (
              <p className="text-sm text-[#8e8e93] leading-relaxed">
                {deepDive.executiveSummary}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" size="lg" variant="primary" withArrow>
                Request Custom Proposal
              </Button>
              <Button href="/architect" size="lg" variant="outline">
                Scope with AI Architect
              </Button>
            </div>
          </div>

          {/* Engagement Specs Card */}
          <div className="lg:col-span-4">
            <div className="p-6 bg-[#0e0e0e] border border-[#222222] rounded-xl space-y-6 sticky top-24">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-semibold">
                Engagement Specs
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[#71717a] mb-1 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Pricing & Scoping Model</span>
                  </div>
                  <div className="text-base font-bold font-mono text-[#ff5500]">Custom Proposal</div>
                  <div className="text-[11px] text-[#8e8e93]">Tailored to your exact project scope, timeline & budget tier</div>
                </div>

                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Typical Delivery Speed</span>
                  </div>
                  <div className="text-sm font-semibold font-mono text-[#f5f5f0]">{service.typicalTimeline}</div>
                </div>

                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-2 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Core Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-[#a1a1aa] bg-[#141414] border border-[#202020] px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Button href="/contact" variant="primary" size="sm" className="w-full" withArrow>
                Get Free Project Estimate
              </Button>
            </div>
          </div>
        </div>

        {/* 5-Phase Technical Blueprint (Deep Dive) */}
        {deepDive && deepDive.fiveStagePipeline && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Execution Blueprint"
              title="5-Stage Technical & Production Pipeline."
              description="How our senior engineering and production pods execute this service from ingestion to final delivery."
            />
            <div className="space-y-6">
              {deepDive.fiveStagePipeline.map((phase, idx) => (
                <div key={idx} className="p-6 sm:p-8 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl hover:border-[#333333] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded bg-[#181818] border border-[#2a2a2a] text-[#ff5500] font-mono font-bold text-xs flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#f5f5f0]">
                        {phase.title}
                      </h3>
                    </div>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>

                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 font-normal">
                    {phase.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#181818] text-xs">
                    <div>
                      <div className="text-[#71717a] font-mono uppercase font-semibold mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]" />
                        <span>Milestone Deliverables</span>
                      </div>
                      <ul className="space-y-1.5 text-[#c4c4c8]">
                        {phase.deliverables.map((del, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-[#71717a] font-mono uppercase font-semibold mb-2 flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-[#ff5500]" />
                        <span>Tooling & Environment</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.tools.map((tool, i) => (
                          <span key={i} className="px-2 py-0.5 bg-[#141414] border border-[#242424] text-[#8e8e93] rounded font-mono text-[11px]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables Matrix (Table format for Deep Dive or Grid for Standard) */}
        {deepDive && deepDive.deliverablesMatrix ? (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Concrete Artifacts"
              title="Exact Deliverables & Production Standards."
              description="Every deliverable is accompanied by production documentation, acceptance benchmarks, and full IP transfer."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepDive.deliverablesMatrix.map((delCat, idx) => (
                <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#f5f5f0] mb-4 flex items-center gap-2">
                      <FileCode2 className="w-4 h-4 text-[#ff5500]" />
                      <span>{delCat.category}</span>
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {delCat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-[#181818] text-[11px] font-mono text-[#71717a]">
                    <span className="text-[#ff5500]">Quality Benchmark:</span> {delCat.standards}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#1a1a1a]">
            <div>
              <h2 className="text-2xl font-bold text-[#f5f5f0] mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#ff5500]" />
                <span>Exact Production Deliverables</span>
              </h2>
              <div className="space-y-3">
                {service.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-[#0e0e0e] border border-[#1c1c1c] rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#c4c4c8] leading-relaxed">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#f5f5f0] mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Core Bottlenecks Solved</span>
              </h2>
              <div className="space-y-3">
                {service.problemsSolved.map((prob, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-[#0e0e0e] border border-[#1c1c1c] rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-[#c4c4c8] leading-relaxed">{prob}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Featured Portfolio & Architecture Artifact */}
        {portfolioArtifact && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Client Portfolio Case"
              title={`Production Showcase: ${portfolioArtifact.clientName}.`}
              description={`Live production deployment and verified business impact delivered by our ${service.name} practice.`}
            />
            <div className="p-8 rounded-2xl bg-[#0c0c0c] border border-[#222222] relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: portfolioArtifact.visualPreview.accentColor }}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="orange">{portfolioArtifact.categoryLabel}</Badge>
                    <span className="text-xs font-mono text-[#71717a]">{portfolioArtifact.industry}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#f5f5f0]">
                    {portfolioArtifact.clientName}
                  </h3>
                  <div className="text-sm font-semibold text-[#ff5500]">
                    {portfolioArtifact.projectTitle}
                  </div>

                  <p className="text-sm text-[#8e8e93] leading-relaxed">
                    {portfolioArtifact.overview}
                  </p>

                  {/* Verified Results */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {portfolioArtifact.results.map((res, idx) => (
                      <div key={idx} className="p-2.5 bg-[#141414] rounded-lg border border-[#202020] text-center">
                        <div className="font-mono text-sm font-bold text-[#f5f5f0]">{res.metric}</div>
                        <div className="text-[10px] font-mono text-[#71717a] truncate">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {portfolioArtifact.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-[#161616] border border-[#262626] rounded-md text-xs font-mono text-[#a1a1aa]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-[#111111] rounded-xl border border-[#1e1e1e] space-y-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span>Key Deliverables Delivered</span>
                    </div>
                    <div className="space-y-2">
                      {portfolioArtifact.deliverables.slice(0, 3).map((del, i) => (
                        <div key={i} className="text-xs text-[#a1a1aa] leading-relaxed p-2.5 bg-[#0c0c0c] rounded-lg border border-[#181818] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1a1a1a]">
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-semibold shadow-lg shadow-[#ff5500]/20 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Explore Verified Client Portfolio</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tool Decision Tree */}
        {deepDive && deepDive.toolDecisionTree && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Engineering Decisions"
              title="Tooling & Technology Selection Rationale."
              description="Why we select specific frameworks, engines, and protocols over common alternatives."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepDive.toolDecisionTree.map((decision, idx) => (
                <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-4">
                  <div className="text-xs font-mono uppercase text-[#71717a] font-semibold">
                    {decision.category}
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
                    <div>
                      <div className="text-xs text-[#5c5c60]">Selected Engine</div>
                      <div className="text-base font-bold text-[#ff5500] font-mono">{decision.primaryChoice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#5c5c60]">Alternatives Considered</div>
                      <div className="text-xs font-mono text-[#8e8e93]">{decision.alternatives}</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {decision.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4-Column Decision Matrix */}
        {deepDive && deepDive.comparisonMatrix && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Comparative Analysis"
              title="Explode Labs vs Alternative Models."
              description="An honest breakdown of cost, speed, code quality, and intellectual property ownership across delivery options."
            />
            <div className="overflow-x-auto border border-[#1e1e1e] rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#111111] border-b border-[#1e1e1e] text-[#71717a] font-mono uppercase">
                    <th className="p-4 sm:p-5 w-1/4">Evaluation Metric</th>
                    <th className="p-4 sm:p-5 w-1/4 text-[#ff5500] font-bold bg-[#141414]">Explode Labs</th>
                    <th className="p-4 sm:p-5 w-1/4">Traditional Agency</th>
                    <th className="p-4 sm:p-5 w-1/4">Marketplace Freelancers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#181818]">
                  {deepDive.comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#0e0e0e] transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">{row.metric}</td>
                      <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                        {row.explodeLabs}
                      </td>
                      <td className="p-4 sm:p-5 text-[#8e8e93]">{row.traditionalAgency}</td>
                      <td className="p-4 sm:p-5 text-[#8e8e93]">{row.freelancers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Industry Execution Blueprints */}
        {deepDive && deepDive.industryScenarios && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Vertical Applications"
              title="Execution Blueprints by Industry."
              description="How we tailor this capability for B2B SaaS, E-Commerce, FinTech, and high-growth brands."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepDive.industryScenarios.map((scenario, idx) => (
                <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl flex flex-col justify-between space-y-4">
                  <div>
                    <Badge variant="orange" className="mb-3">{scenario.industry}</Badge>
                    <div className="text-xs text-[#71717a] mb-1 font-mono uppercase font-semibold">Core Bottleneck</div>
                    <p className="text-xs text-[#a1a1aa] mb-4">{scenario.challenge}</p>
                    
                    <div className="text-xs text-[#71717a] mb-1 font-mono uppercase font-semibold">Engineered Architecture</div>
                    <p className="text-xs sm:text-sm text-[#f5f5f0] leading-relaxed">{scenario.architecture}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-xs">
                    <span className="text-[#71717a] font-mono">Impact Metric:</span>
                    <span className="font-mono font-bold text-emerald-400">{scenario.impactMetric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instant Growth Diagnostic & Estimator Callouts */}
        <div className="py-16 border-b border-[#1a1a1a]">
          <div className="p-6 sm:p-8 bg-[#0a0a0a] border border-[#222222] rounded-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] text-xs font-mono mb-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Free Engineering & Growth Diagnostics</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f0]">
                  Audit Your Digital Surface or Calculate Milestone Scope
                </h3>
              </div>
              <Badge variant="outline" className="font-mono text-xs">
                Zero Lock-In
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#121212] border border-[#242424] rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#f5f5f0] mb-1">Test Your Domain Citability</div>
                  <div className="text-xs text-[#71717a]">Run a free 60-second AI entity & SEO diagnostic scan</div>
                </div>
                <Button href="/tools/seo-auditor" size="sm" variant="outline" className="shrink-0 text-xs">
                  Scan Domain
                </Button>
              </div>

              <div className="p-5 bg-[#121212] border border-[#242424] rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#f5f5f0] mb-1">Calculate Milestone Scope</div>
                  <div className="text-xs text-[#71717a]">Estimate timelines & budget tier for your requirements</div>
                </div>
                <Button href="/tools/project-estimator" size="sm" variant="primary" className="shrink-0 text-xs" withArrow>
                  Estimate Scope
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Case Studies */}
        {caseStudies.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Proven Execution"
              title={`Case studies utilizing ${service.name}.`}
              description="Real results achieved for high-growth companies."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <Card key={cs.id} className="p-6 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{cs.industry}</Badge>
                      <span className="text-xs font-mono text-[#ff5500] font-bold">{cs.heroMetric.value} {cs.heroMetric.label}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2">
                      <Link href={`/case-studies/${cs.slug}`}>
                        {cs.client}: {cs.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#8e8e93] leading-relaxed mb-4">{cs.tagline}</p>
                  </div>
                  <div className="pt-4 border-t border-[#181818] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#5c5c60]">{cs.timeline}</span>
                    <Link href={`/case-studies/${cs.slug}`} className="text-xs text-[#ff5500] font-medium flex items-center gap-1 hover:underline">
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {faqsToRender.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Frequently Asked Questions"
              title="Technical, commercial & operational inquiries."
              description="Everything you need to know about SLAs, source file ownership, turnaround times, and workflows."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqsToRender.map((faq, i) => (
                <div key={i} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-3">
                  <h3 className="text-base font-semibold text-[#f5f5f0] flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#ff5500] shrink-0 mt-1" />
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

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="py-16">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-semibold mb-6">
              Complementary Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.slug}`}
                  className="p-4 bg-[#0e0e0e] hover:bg-[#141414] border border-[#1e1e1e] hover:border-[#333333] rounded-xl transition-all group"
                >
                  <div className="text-sm font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-1">
                    {rel.name}
                  </div>
                  <div className="text-xs text-[#8e8e93] line-clamp-1">{rel.tagline}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
