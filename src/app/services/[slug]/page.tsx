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
  Sparkles,
  Package,
  ListOrdered,
  Workflow,
  Scale
} from 'lucide-react';

export function generateStaticParams() {
  const serviceSlugs = services.map((s) => s.slug);
  const deepDiveSlugs = Object.keys(serviceDeepDives);
  const aliasSlugs = [
    'cloud-infrastructure-devops'
  ];
  const allSlugs = Array.from(new Set([...serviceSlugs, ...deepDiveSlugs, ...aliasSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  const deepDive = getDeepDiveForService(resolvedParams.slug);
  if (!service) return { title: 'Service Not Found | Explode Labs' };

  const title = service.metaTitle || deepDive?.metaTitle || `${service.name} Services | Explode Labs`;
  const description = service.metaDescription || deepDive?.metaDescription || service.shortDescription || service.tagline;

  return {
    title,
    description,
    keywords: [service.primaryKeyword || service.name, ...(service.technologies || []), 'explodelabs', service.category, service.pillar],
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
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) return notFound();

  // Contextual CTA mapping
  const getContextualCTA = () => {
    if (service.category.includes('SEO') || service.primaryKeyword?.includes('seo')) return 'Request a Search Audit';
    if (service.category.includes('Web & E-commerce') || service.slug.includes('development') || service.slug.includes('software')) return 'Discuss Your Project Scope';
    if (service.category.includes('Design') || service.category.includes('Creative')) return 'Review Design Capabilities';
    if (service.category.includes('AI') || service.pillar === 'automate') return 'Discuss an AI Integration';
    if (service.category.includes('Marketing') || service.slug.includes('ads')) return 'Request a Growth Audit';
    return 'Talk to Our Team';
  };
  const ctaText = getContextualCTA();

  const deepDive = getDeepDiveForService(service.slug);
  const caseStudies = getCaseStudiesForService(service.slug);
  const relatedServices = getRelatedServices(service, 3);
  const portfolioArtifact = getPortfolioItemByServiceSlug(service.slug);

  const problemsSolved = service.problemsSolved || [];
  const deliverables = service.deliverables || [];
  const processSteps = service.process || [];
  const technologies = service.technologies || [];
  const platforms = service.platforms || [];

  // Combine FAQs from deepDive and service registry for maximum completeness
  const deepDiveFaqs = deepDive?.detailedFaqs || [];
  const registryFaqs = service.faqs || [];
  const seenFaqQuestions = new Set<string>();
  const faqsToRender: Array<{ question: string; answer: string }> = [];

  for (const faq of [...deepDiveFaqs, ...registryFaqs]) {
    if (!seenFaqQuestions.has(faq.question)) {
      seenFaqQuestions.add(faq.question);
      faqsToRender.push(faq);
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': service.name,
        'description': service.shortDescription,
        'provider': {
          '@type': 'Organization',
          'name': 'Explode Labs',
          'url': 'https://explodelabs.com'
        },
        'serviceType': service.category,
        'url': `https://explodelabs.com/services/${service.slug}`
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://explodelabs.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://explodelabs.com/services' },
          { '@type': 'ListItem', 'position': 3, 'name': service.name, 'item': `https://explodelabs.com/services/${service.slug}` }
        ]
      },
      faqsToRender.length > 0 ? {
        '@type': 'FAQPage',
        'mainEntity': faqsToRender.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      } : {}
    ]
  };

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={serviceSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Bar */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6 flex-wrap">
          <Link href="/services" className="hover:text-[#f5f5f0] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#ff5500]">{service.category}</span>
          <span>/</span>
          <span className="text-[#f5f5f0] font-medium">{service.name}</span>
        </div>

        {/* 1. HERO SECTION & ENGAGEMENT SPECS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#1a1a1a]">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="orange">{service.category}</Badge>
              {service.subCategory && (
                <span className="text-xs font-mono text-[#a1a1aa] border border-[#222222] px-2.5 py-0.5 rounded bg-[#101010]">
                  {service.subCategory}
                </span>
              )}
              <span className="text-xs font-mono text-[#71717a] border border-[#222222] px-2.5 py-0.5 rounded">
                Tier: {service.priority || 'CORE'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
              {service.name}
            </h1>

            <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed font-normal">
              {service.tagline}
            </p>

            {/* Core Capability Brief Card */}
            <div className="p-6 bg-[#0f0f0f] border border-[#262626] rounded-xl relative shadow-2xl">
              <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold mb-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#ff5500]" />
                  <span>What We Do & How It Helps You</span>
                </div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider font-mono">Overview</span>
              </div>
              <p className="text-sm sm:text-base text-[#f5f5f0] leading-relaxed font-medium">
                {service.directAnswer || deepDive?.aeoDefinition}
              </p>
            </div>

            {deepDive?.executiveSummary && (
              <p className="text-sm text-[#8e8e93] leading-relaxed">
                {deepDive.executiveSummary}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" size="lg" variant="primary" withArrow>
                {ctaText}
              </Button>
              <Button href="/architect" size="lg" variant="outline">
                Scope with AI Architect
              </Button>
            </div>
          </div>

          {/* Right Column: Engagement Specs Card */}
          <div className="lg:col-span-4">
            <div className="p-6 bg-[#0e0e0e] border border-[#222222] rounded-xl space-y-6 sticky top-24 shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-semibold flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Project Details</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[#71717a] mb-1 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Pricing Model</span>
                  </div>
                  <div className="text-base font-bold font-mono text-[#ff5500]">
                    {service.pricingRange?.avg || 'Custom Milestone'}
                  </div>
                  <div className="text-[11px] text-[#8e8e93] mt-0.5">
                    Clear deliverables, fixed sprint scopes, no unexpected fees
                  </div>
                </div>

                <div className="pt-3 border-t border-[#181818]">
                  <div className="text-[#71717a] mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Delivery Timeline</span>
                  </div>
                  <div className="text-sm font-semibold font-mono text-[#f5f5f0]">
                    {service.typicalTimeline || '2 to 6 weeks'}
                  </div>
                </div>

                {technologies.length > 0 && (
                  <div className="pt-3 border-t border-[#181818]">
                    <div className="text-[#71717a] mb-2 flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span>Tools & Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {technologies.slice(0, 8).map((t) => (
                        <span key={t} className="text-[11px] font-mono text-[#a1a1aa] bg-[#141414] border border-[#202020] px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button href="/contact" variant="primary" size="sm" className="w-full" withArrow>
                Request Custom Scope
              </Button>
            </div>
          </div>
        </div>

        {/* 2. PROBLEMS WE SOLVE */}
        {problemsSolved.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Common Roadblocks"
              title="Problems This Solves."
              description="Challenges companies face before partnering with us."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemsSolved.map((prob, i) => (
                <div key={i} className="p-5 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl flex items-start gap-3 hover:border-[#2e2e2e] transition-colors">
                  <ShieldCheck className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-[#c4c4c8] leading-relaxed">{prob}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. WHAT WE DO (DETAILED OVERVIEW) */}
        <div className="py-16 border-b border-[#1a1a1a]">
          <SectionHeader
            badge="Our Approach"
            title={`How Explode Labs delivers ${service.name}.`}
            description="Our customer-first approach to building, optimizing, and deploying reliable solutions."
          />
          <div className="max-w-4xl">
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>

        {/* 4. 5-STAGE PRODUCTION PIPELINE (DEEP DIVE OR PROCESS STEPS) */}
        {deepDive?.fiveStagePipeline && deepDive.fiveStagePipeline.length > 0 ? (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="How We Deliver"
              title="Our 5-Step Delivery Process."
              description="How our team executes your project from kickoff to final launch."
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
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shrink-0 mt-1.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {phase.tools && phase.tools.length > 0 && (
                      <div>
                        <div className="text-[#71717a] font-mono uppercase font-semibold mb-2 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-[#ff5500]" />
                          <span>Technologies & Tools</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {phase.tools.map((t, i) => (
                            <span key={i} className="px-2 py-0.5 bg-[#141414] border border-[#222222] rounded text-[11px] font-mono text-[#a1a1aa]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : processSteps.length > 0 ? (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="How It Works"
              title="Step-by-Step Delivery Process."
              description="A clear breakdown of how we execute from kickoff to launch."
            />
            <div className="space-y-4 max-w-4xl">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-4 p-5 bg-[#0a0a0a] border border-[#1e1e1e] rounded-xl hover:border-[#333] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center text-[#ff5500] font-mono text-sm font-bold shrink-0">
                    {step.step || i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f5f5f0] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#8e8e93] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* 5. DELIVERABLES & PRODUCTION STANDARDS */}
        {deepDive?.deliverablesMatrix && deepDive.deliverablesMatrix.length > 0 ? (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Quality Standards"
              title="What You Receive & Our Quality Standards."
              description="Clear deliverables backed by verified quality and performance benchmarks."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deepDive.deliverablesMatrix.map((matrix, idx) => (
                <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold mb-3 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span>{matrix.category}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {matrix.items.map((item, i) => (
                        <li key={i} className="text-xs text-[#a1a1aa] flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-[#181818] text-[11px] font-mono text-[#71717a]">
                    <span className="text-[#f5f5f0] font-semibold">Standard:</span> {matrix.standards}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : deliverables.length > 0 ? (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="What You Receive"
              title="Concrete Deliverables."
              description="Exactly what we hand over at milestone completion."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
              {deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-[#f5f5f0] leading-relaxed">{del}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* 6. CLIENT PRODUCTION SHOWCASE */}
        {portfolioArtifact && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Client Showcase"
              title={`Production Showcase: ${portfolioArtifact.clientName}.`}
              description={`Real client results and impact delivered by our ${service.name} practice.`}
            />
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c0c] border border-[#222222] relative overflow-hidden shadow-2xl">
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: portfolioArtifact.visualPreview?.accentColor || '#ff5500' }}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="orange">{portfolioArtifact.categoryLabel || 'Client Result'}</Badge>
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

                  {/* Verified Results Metrics */}
                  {portfolioArtifact.results && portfolioArtifact.results.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {portfolioArtifact.results.map((res, idx) => (
                        <div key={idx} className="p-2.5 bg-[#141414] rounded-lg border border-[#202020] text-center">
                          <div className="font-mono text-sm font-bold text-[#f5f5f0]">{res.metric}</div>
                          <div className="text-[10px] font-mono text-[#71717a] truncate">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  {portfolioArtifact.technologies && portfolioArtifact.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {portfolioArtifact.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-[#161616] border border-[#262626] rounded-md text-xs font-mono text-[#a1a1aa]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-[#111111] rounded-xl border border-[#1e1e1e] space-y-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span>Key Deliverables Delivered</span>
                    </div>
                    <div className="space-y-2">
                      {portfolioArtifact.deliverables?.slice(0, 3).map((del, i) => (
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

        {/* 7. TOOLING & TECHNOLOGY SELECTION RATIONALE */}
        {deepDive?.toolDecisionTree && deepDive.toolDecisionTree.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Tech Stack"
              title="Tooling & Software Selection Rationale."
              description="Why we choose specific tools and software over common alternatives."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepDive.toolDecisionTree.map((decision, idx) => (
                <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl flex flex-col justify-between h-full">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#71717a] font-semibold mb-1">
                      {decision.category}
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#181818] mb-3">
                      <div>
                        <div className="text-xs text-[#5c5c60]">Selected Tool</div>
                        <div className="text-base font-bold text-[#ff5500] font-mono">{decision.primaryChoice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-[#5c5c60]">Alternatives Passed On</div>
                        <div className="text-xs font-mono text-[#8e8e93]">{decision.alternatives}</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                      {decision.rationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. COMPARATIVE ANALYSIS MATRIX */}
        {deepDive?.comparisonMatrix && deepDive.comparisonMatrix.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="How We Compare"
              title="Explode Labs vs Alternative Models."
              description="An honest breakdown of cost, speed, quality, and asset ownership across delivery options."
            />
            <div className="overflow-x-auto border border-[#1e1e1e] rounded-xl shadow-xl">
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

        {/* 9. INDUSTRY EXECUTION BLUEPRINTS */}
        {deepDive?.industryScenarios && deepDive.industryScenarios.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Real-World Results"
              title="Execution Blueprints by Industry."
              description="How we tailor this capability for B2B SaaS, E-Commerce, FinTech, and growing brands."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deepDive.industryScenarios.map((scenario, idx) => (
                <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl flex flex-col justify-between space-y-4">
                  <div>
                    <Badge variant="orange" className="mb-3">{scenario.industry}</Badge>
                    <div className="text-xs text-[#71717a] mb-1 font-mono uppercase font-semibold">The Challenge</div>
                    <p className="text-xs text-[#a1a1aa] mb-4">{scenario.challenge}</p>
                    
                    <div className="text-xs text-[#71717a] mb-1 font-mono uppercase font-semibold">How We Solved It</div>
                    <p className="text-xs sm:text-sm text-[#f5f5f0] leading-relaxed">{scenario.architecture}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-xs">
                    <span className="text-[#71717a] font-mono">Result:</span>
                    <span className="font-mono font-bold text-emerald-400">{scenario.impactMetric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 10. INTERACTIVE AUDIT & ESTIMATOR TOOLS CALLOUT */}
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
                  <div className="text-sm font-bold text-[#f5f5f0] mb-1">Book a Strategy Session</div>
                  <div className="text-xs text-[#71717a]">30-minute direct consultation with senior leadership</div>
                </div>
                <Button href="https://calendly.com/vishal-invokeiq/30min" size="sm" variant="primary" className="shrink-0 text-xs" withArrow>
                  Book 30-Min Call
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 11. RELEVANT CASE STUDIES */}
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

        {/* 12. TECHNOLOGIES & PLATFORMS */}
        {(technologies.length > 0 || platforms.length > 0) && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Ecosystem"
              title="Technologies & Platforms."
              description="The frameworks, engines, and protocols we use to execute this capability."
            />
            <div className="flex flex-wrap gap-3">
              {[...new Set([...technologies, ...platforms])].map((tech, i) => (
                <div key={i} className="px-4 py-2 bg-[#0e0e0e] border border-[#222222] rounded-lg text-sm text-[#f5f5f0] font-medium flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#ff5500]" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 13. COMPREHENSIVE FAQS */}
        {faqsToRender.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <SectionHeader
              badge="Frequently Asked Questions"
              title="Technical, commercial & operational inquiries."
              description="Clear answers regarding pricing models, code sovereignty, testing, and turnaround times."
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

        {/* 14. COMPLEMENTARY CAPABILITIES / RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <div className="py-16 border-b border-[#1a1a1a]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-semibold mb-6">
              Complementary Services & Related Capabilities
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

        {/* 15. BOTTOM CONVERSION CTA BANNER */}
        <div className="py-16">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#141414] to-[#090909] border border-[#242424] rounded-2xl flex flex-col items-center text-center shadow-2xl">
            <Badge variant="orange" className="mb-4">
              Ready to Build?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4">
              Let’s Scope Your {service.name} Project.
            </h2>
            <p className="text-[#a1a1aa] mb-8 max-w-xl text-sm sm:text-base leading-relaxed">
              Get a custom milestone proposal with transparent sprint deliverables, clear timelines, and full source code ownership.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="https://calendly.com/vishal-invokeiq/30min" size="lg" variant="primary" withArrow>
                Book 30-Min Strategy Call
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                {ctaText}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
