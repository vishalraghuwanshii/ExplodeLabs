import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCaseStudyBySlug, getServiceBySlug, caseStudies } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/components/seo/JsonLd';
import { Trophy, CheckCircle2, ArrowRight, Quote, Cpu, Clock, Layers } from 'lucide-react';

export function generateStaticParams() {
  return caseStudies.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) {
    notFound();
  }

  const caseStudyArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${cs.client}: ${cs.title}`,
    description: cs.tagline,
    url: `https://explodelabs.com/case-studies/${cs.slug}`,
    mainEntityOfPage: `https://explodelabs.com/case-studies/${cs.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Explode Labs',
      url: 'https://explodelabs.com',
      '@id': 'https://explodelabs.com/#organization',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Explode Labs',
      url: 'https://explodelabs.com',
      logo: 'https://explodelabs.com/logo.png',
      '@id': 'https://explodelabs.com/#organization',
    },
    about: {
      '@type': 'Thing',
      name: cs.client,
      description: `${cs.client} in the ${cs.industry} industry`,
    },
    mentions: cs.technologies.map((t) => ({
      '@type': 'SoftwareApplication',
      name: t,
    })),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.case-tagline', '.hero-metric-box'],
    },
    ...(cs.testimonial
      ? {
          review: {
            '@type': 'Review',
            reviewBody: cs.testimonial.quote,
            author: {
              '@type': 'Person',
              name: cs.testimonial.author,
              jobTitle: cs.testimonial.role,
            },
            itemReviewed: {
              '@type': 'Organization',
              name: 'Explode Labs',
              '@id': 'https://explodelabs.com/#organization',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
          },
        }
      : {}),
  };

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={caseStudyArticleSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6">
          <Link href="/case-studies" className="hover:text-[#f5f5f0]">Case Studies</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">{cs.client}</span>
        </div>

        {/* Hero */}
        <section id="overview" className="max-w-4xl space-y-6 pb-16 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <Badge variant="orange">{cs.industry}</Badge>
            <span className="text-xs font-mono text-[#71717a]">Engagement: {cs.timeline}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
            {cs.client}: {cs.title}
          </h1>

          <p className="case-tagline text-xl text-[#a1a1aa] leading-relaxed font-normal">
            {cs.tagline}
          </p>

          {/* Hero Metrics Dashboard */}
          <div className="hero-metric-box grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#0e0e0e] border border-[#242424] rounded-2xl">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#ff5500]">{cs.heroMetric.value}</div>
              <div className="text-xs uppercase font-mono text-[#8e8e93] mt-1">{cs.heroMetric.label}</div>
            </div>
            {cs.secondaryMetrics.map((sec, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#f5f5f0]">{sec.value}</div>
                <div className="text-xs uppercase font-mono text-[#71717a] mt-1">{sec.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge & Strategy */}
        <section id="challenge-and-strategy" className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#1a1a1a]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#f5f5f0]">The Challenge</h2>
            <p className="text-sm sm:text-base text-[#8e8e93] leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#f5f5f0]">The Strategy</h2>
            <p className="text-sm sm:text-base text-[#8e8e93] leading-relaxed">
              {cs.strategy}
            </p>
          </div>
        </section>

        {/* Services Deployed & Technologies */}
        <section id="services-and-tech" className="py-12 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-3">Flagship Services Deployed</h3>
              <div className="flex flex-wrap gap-2">
                {cs.serviceSlugs.map((slug) => {
                  const srv = getServiceBySlug(slug);
                  return (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#242424] hover:border-[#ff5500]/40 rounded-lg text-xs font-medium text-[#f5f5f0] transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 text-[#ff5500]" />
                      <span>{srv?.name || slug}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-3">Core Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {cs.technologies.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-[#0e0e0e] border border-[#1e1e1e] rounded-lg text-xs font-mono text-[#8e8e93]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Matrix */}
        <section id="deliverables" className="py-12 border-b border-[#1a1a1a]">
          <h2 className="text-2xl font-bold text-[#f5f5f0] flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-[#ff5500]" />
            <span>Key Project Deliverables</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.deliverables.map((del, i) => (
              <div key={i} className="p-4 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#d4d4d8] font-medium">{del}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Details & Execution Timeline */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#1a1a1a]">
          <section id="architecture" className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-[#f5f5f0] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#ff5500]" />
              <span>Technical Architecture</span>
            </h2>
            <div className="space-y-3">
              {cs.architectureDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl text-xs sm:text-sm text-[#c4c4c8]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="timeline" className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-[#f5f5f0] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#ff5500]" />
              <span>Execution Timeline</span>
            </h2>
            <div className="space-y-3">
              {cs.execution.map((ex, i) => (
                <div key={i} className="p-3.5 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl text-xs sm:text-sm text-[#8e8e93]">
                  <span className="font-semibold text-[#f5f5f0] block mb-1">{ex.split(':')[0]}:</span>
                  <span>{ex.split(':')[1] || ex}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Testimonial Quote */}
        {cs.testimonial && (
          <section id="testimonial" className="py-16 border-b border-[#1a1a1a]">
            <div className="p-8 sm:p-12 bg-gradient-to-r from-[#111111] to-[#0c0c0c] border border-[#262626] rounded-2xl relative">
              <Quote className="w-10 h-10 text-[#ff5500]/20 absolute top-6 right-6" />
              <p className="text-lg sm:text-2xl text-[#f5f5f0] font-normal italic leading-relaxed mb-6 max-w-3xl">
                "{cs.testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-[#f5f5f0] text-sm">{cs.testimonial.author}</div>
                <div className="text-xs text-[#8e8e93]">{cs.testimonial.role}, {cs.testimonial.company}</div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section id="get-started" className="py-16 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#f5f5f0]">Need similar results for your business?</h2>
          <p className="text-sm text-[#8e8e93] max-w-xl mx-auto">
            Discuss your technical architecture and commercial targets with our senior team.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Start a Project
            </Button>
            <Button href="/architect" size="lg" variant="outline">
              AI Project Architect
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
