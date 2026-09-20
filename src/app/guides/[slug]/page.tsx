import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGuideBySlug, getServiceBySlug, guides } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { JsonLd } from '@/components/seo/JsonLd';
import { Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';

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

  const articleSchema = {
    '@context': 'https://schema.org',
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
    breadcrumb: {
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
  };

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-6">
          <Link href="/guides" className="hover:text-[#f5f5f0]">Guides</Link>
          <span>/</span>
          <span className="text-[#f5f5f0] line-clamp-1">{guide.title}</span>
        </div>

        {/* Header */}
        <div className="space-y-6 pb-12 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <Badge variant="orange">{guide.category}</Badge>
            <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{guide.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] leading-[1.15]">
            {guide.title}
          </h1>

          <div className="flex items-center gap-3 text-xs text-[#8e8e93]">
            <div className="w-7 h-7 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] flex items-center justify-center text-[#ff5500]">
              <User className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[#f5f5f0] font-medium">{guide.author.name}</div>
              <div className="text-[#71717a]">{guide.author.role} • {guide.publishedDate}</div>
            </div>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 p-6 bg-[#111111] border border-[#242424] rounded-xl space-y-3">
          <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold">
            Key Architectural Takeaways
          </div>
          <div className="space-y-2">
            {guide.takeaways.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e4e4e7]">
                <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 py-8 border-b border-[#1a1a1a]">
          {guide.sections.map((sec, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#f5f5f0] tracking-tight">{sec.title}</h2>
              <p className="text-base text-[#a1a1aa] leading-relaxed font-normal">{sec.content}</p>
            </div>
          ))}
        </div>

        {/* Related Services CTA */}
        <div className="py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-[#f5f5f0]">Need help executing this architecture?</div>
            <div className="text-xs text-[#8e8e93]">Our senior engineers and strategists can deliver this for your business.</div>
          </div>
          <Button href="/contact" size="md" variant="primary" withArrow>
            Talk to an Architect
          </Button>
        </div>
      </div>
    </div>
  );
}
