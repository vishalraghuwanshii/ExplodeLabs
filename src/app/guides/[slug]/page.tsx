import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGuideBySlug, getServiceBySlug, guides } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  Clock, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  BookOpen, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Lightbulb
} from 'lucide-react';

export function generateStaticParams() {
  return guides.map((g) => ({
    slug: g.slug,
  }));
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const guideSchemaGraph = [
    {
      '@type': 'Article',
      headline: guide.title,
      description: guide.summary,
      author: {
        '@type': 'Organization',
        name: guide.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Explode Labs',
        logo: 'https://explodelabs.com/logo.png',
      },
      datePublished: guide.publishedDate,
      mainEntityOfPage: `https://explodelabs.com/guides/${guide.slug}`
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
          name: 'Guides',
          item: 'https://explodelabs.com/guides'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: guide.title,
          item: `https://explodelabs.com/guides/${guide.slug}`
        }
      ]
    }
  ];

  if (guide.faqs && guide.faqs.length > 0) {
    guideSchemaGraph.push({
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    } as any);
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': guideSchemaGraph
  };

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a]">
          <Link href="/guides" className="hover:text-[#f5f5f0] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#f5f5f0] line-clamp-1">{guide.title}</span>
        </div>

        {/* Header */}
        <div className="space-y-6 pb-10 border-b border-[#1a1a1a]">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="orange">{guide.category}</Badge>
            <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{guide.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] leading-[1.15]">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            {guide.summary}
          </p>

          <div className="flex items-center gap-3 text-xs text-[#8e8e93] pt-2">
            <div className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] flex items-center justify-center text-[#ff5500]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[#f5f5f0] font-medium">{guide.author.name}</div>
              <div className="text-[#71717a]">{guide.author.role} • Published {guide.publishedDate}</div>
            </div>
          </div>
        </div>

        {/* Executive Takeaway & Key Points Box */}
        <div className="p-7 sm:p-8 bg-gradient-to-br from-[#121212] via-[#0f0f0f] to-[#0a0a0a] border border-[#242424] rounded-2xl space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#ff5500]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold tracking-wider">
              Executive Summary & Key Takeaways
            </div>
          </div>

          {guide.executiveTakeaway && (
            <p className="text-sm sm:text-base text-[#f5f5f0] font-medium leading-relaxed bg-[#161616] p-4.5 rounded-xl border border-[#282828]">
              {guide.executiveTakeaway}
            </p>
          )}

          <div className="space-y-3 pt-2">
            {guide.takeaways.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#d4d4d8] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Contents Quick Nav */}
        <div className="p-6 bg-[#0c0c0c] border border-[#1c1c1c] rounded-xl space-y-3">
          <div className="text-xs font-mono uppercase text-[#71717a] font-semibold flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#ff5500]" />
            <span>Guide Structure & Sections</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {guide.sections.map((sec, i) => (
              <div key={i} className="text-xs text-[#8e8e93] flex items-center gap-2">
                <span className="text-[#ff5500] font-mono">0{i + 1}.</span>
                <span className="line-clamp-1">{sec.title.replace(/^\d+\.\s*/, '')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Masterclass Content Sections */}
        <div className="space-y-12 py-4 border-b border-[#1a1a1a]">
          {guide.sections.map((sec, i) => (
            <div key={i} className="space-y-5 pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] tracking-tight flex items-start gap-3">
                <span className="text-[#ff5500] font-mono text-xl sm:text-2xl mt-0.5">0{i + 1}</span>
                <span>{sec.title.replace(/^\d+\.\s*/, '')}</span>
              </h2>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal">
                {sec.content}
              </p>

              {/* Bullet Key Points */}
              {sec.keyPoints && sec.keyPoints.length > 0 && (
                <div className="p-5 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl space-y-2.5 my-4">
                  <div className="text-xs font-mono uppercase text-[#e4e4e7] font-semibold">
                    Core Specifications & Rules:
                  </div>
                  <div className="space-y-2">
                    {sec.keyPoints.map((kp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                        <span className="text-[#ff5500] font-bold shrink-0 mt-0.5">•</span>
                        <span>{kp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Callout Box */}
              {sec.calloutBox && (
                <div className="p-5 bg-gradient-to-r from-[#171412] to-[#111111] border-l-4 border-l-[#ff5500] border-y border-r border-[#26201c] rounded-r-xl space-y-1.5 my-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#ff5500] font-bold">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Key Strategic Takeaway</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#e4e4e7] leading-relaxed">
                    {sec.calloutBox}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Practical FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold tracking-wider">
                Common Questions
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5f0] tracking-tight">
                Frequently Asked Implementation Questions
              </h3>
            </div>

            <div className="space-y-4">
              {guide.faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-2.5">
                  <h4 className="text-base font-bold text-[#f5f5f0] flex items-start gap-2.5 leading-snug">
                    <HelpCircle className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Services */}
        {guide.relatedServiceSlugs && guide.relatedServiceSlugs.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-[#1a1a1a]">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold tracking-wider">
                Execution Capabilities
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5f0] tracking-tight">
                Related Services We Deliver
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {guide.relatedServiceSlugs.map((slug) => {
                const srv = getServiceBySlug(slug);
                if (!srv) return null;
                return (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="p-5 bg-[#0c0c0c] hover:bg-[#121212] border border-[#1e1e1e] hover:border-[#333333] rounded-xl transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-[#ff5500] uppercase font-semibold">
                        {srv.pillar}
                      </div>
                      <h4 className="text-sm font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors leading-snug">
                        {srv.name}
                      </h4>
                      <p className="text-xs text-[#8e8e93] line-clamp-2 leading-relaxed">
                        {srv.tagline}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-xs text-[#71717a] group-hover:text-[#ff5500] font-mono">
                      <span>View Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Direct Calendly CTA Consultation Banner */}
        <div className="p-8 sm:p-10 bg-gradient-to-br from-[#141414] via-[#0d0d0d] to-[#080808] border border-[#262626] rounded-2xl text-center space-y-6">
          <Badge variant="orange">Direct Senior Consultation</Badge>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#f5f5f0] leading-tight">
            Need help executing this blueprint?
          </h3>
          <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call directly with Vishal Raghuwanshi and our senior architecture team to review your technical roadmap, evaluate budget tiers, and plan deployment.
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
              Send Scope Inquiry
            </Button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#71717a]">
            <span>✓ Fixed-price milestone proposals</span>
            <span>✓ 100% source code ownership</span>
            <span>✓ Mutual NDA before kickoff</span>
          </div>
        </div>
      </div>
    </div>
  );
}
