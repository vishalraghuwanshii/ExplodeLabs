import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog-posts';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Check, 
  BookOpen, 
  Share2, 
  Calendar,
  User,
  ShieldCheck
} from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Explode Labs',
    };
  }

  return {
    title: `${post.title} | Explode Labs Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Explode Labs`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      tags: post.tags,
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Explode Labs',
      url: 'https://explodelabs.com',
      logo: 'https://explodelabs.com/logo.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://explodelabs.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <article className="py-12 sm:py-20">
      <JsonLd schema={articleSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BACK LINK & BREADCRUMB */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-mono text-[#8e8e93] hover:text-[#ff5500] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* ARTICLE HEADER */}
        <div className="max-w-4xl space-y-6 mb-12 pb-10 border-b border-[#1f1f1f]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-[#ff5500] uppercase tracking-wider bg-[#ff5500]/10 px-3 py-1 rounded-full border border-[#ff5500]/25">
              {post.category}
            </span>
            <span className="text-xs font-mono text-[#71717a] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishedDate}</span>
            </span>
            <span className="text-xs font-mono text-[#71717a] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.12]">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-[#a1a1aa] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Badge Bar */}
          <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[#181818]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#ff5500] text-black font-bold text-sm flex items-center justify-center shadow-lg">
                {post.author.avatarInitials}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#f5f5f0]">{post.author.name}</div>
                <div className="text-xs text-[#71717a]">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button href="https://calendly.com/vishal-invokeiq/30min" size="sm" variant="outline">
                Book 30-Min Strategy Call
              </Button>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT GRID (Article Body + Sticky Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ARTICLE BODY (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* KEY TAKEAWAYS CALLOUT BOX */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-[#242424] rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#ff5500] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary & Key Takeaways</span>
              </div>

              <div className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#e4e4e7]">
                    <div className="w-5 h-5 rounded bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] flex items-center justify-center shrink-0 mt-0.5 font-mono text-[11px] font-bold">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTENT SECTIONS */}
            {post.contentSections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] tracking-tight pb-3 border-b border-[#1a1a1a]">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#c4c4c8] leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Optional Section Callout */}
                {section.callout && (
                  <div className="p-5 sm:p-6 bg-[#111111] border-l-4 border-[#ff5500] rounded-r-xl space-y-2 my-6 shadow-md">
                    <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold">
                      {section.callout.title}
                    </div>
                    <p className="text-xs sm:text-sm text-[#f5f5f0] italic leading-relaxed">
                      "{section.callout.text}"
                    </p>
                  </div>
                )}

                {/* Optional Bullet Points */}
                {section.bulletPoints && (
                  <div className="space-y-3 p-5 bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl my-4">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <div key={bpIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#d1d1d6]">
                        <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-relaxed">{bp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* AUTHOR FOOTER BIO CARD */}
            <div className="p-6 sm:p-8 bg-[#0e0e0e] border border-[#222222] rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-[#ff5500] text-black font-black text-lg flex items-center justify-center shrink-0 shadow-lg">
                {post.author.avatarInitials}
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="text-base font-bold text-[#f5f5f0]">{post.author.name}</div>
                <div className="text-xs font-mono text-[#ff5500]">{post.author.role}</div>
                <p className="text-xs text-[#8e8e93] leading-relaxed">
                  Leading strategic execution, AI search optimization, and web engineering architectures at Explode Labs. Dedicated to eliminating agency bloat through agile milestone sprints.
                </p>
              </div>
            </div>

            {/* ARTICLE TAGS */}
            <div className="pt-4 border-t border-[#1a1a1a] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#71717a] mr-2">Topics:</span>
              {post.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono text-[#8e8e93] bg-[#141414] border border-[#222] px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* STICKY SIDEBAR (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Table of Contents Card */}
            <div className="p-6 bg-[#0e0e0e] border border-[#222222] rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#1c1c1c]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#ff5500] font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>On This Page</span>
                </div>
                <span className="text-[10px] font-mono text-[#71717a]">{post.tableOfContents.length} Sections</span>
              </div>

              <nav className="space-y-2">
                {post.tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className="block text-xs text-[#8e8e93] hover:text-[#ff5500] p-2 rounded-lg hover:bg-[#141414] border border-transparent hover:border-[#222] transition-colors leading-snug"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Action Sidebar Banner */}
            <div className="p-6 bg-gradient-to-br from-[#181818] to-[#0c0c0c] border border-[#2a2a2a] rounded-2xl space-y-4 shadow-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] text-[10px] font-mono font-semibold uppercase">
                <span>Free Strategy Consultation</span>
              </div>

              <h4 className="text-base font-bold text-[#f5f5f0] leading-snug">
                Want to implement these strategies for your business?
              </h4>

              <p className="text-xs text-[#8e8e93] leading-relaxed">
                Book a 30-minute discovery call with our leadership team. We will review your goals and deliver a fixed-scope milestone roadmap.
              </p>

              <Button href="https://calendly.com/vishal-invokeiq/30min" variant="primary" size="md" className="w-full" withArrow>
                Book 30-Min Strategy Call
              </Button>
            </div>

          </div>

        </div>

        {/* RELATED ARTICLES CAROUSEL / GRID */}
        <div className="mt-20 pt-16 border-t border-[#1f1f1f]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold mb-1">Explore More</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">Related Articles & Case Breakdowns</h3>
            </div>

            <Button href="/blog" variant="outline" size="sm" withArrow>
              View All Blog Posts
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rPost) => (
              <Card key={rPost.id} className="p-6 bg-[#0c0c0c] border-[#1e1e1e] hover:border-[#ff5500]/40 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-[#ff5500] uppercase tracking-wider bg-[#ff5500]/10 px-2.5 py-0.5 rounded-full border border-[#ff5500]/20">
                      {rPost.category}
                    </span>
                    <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{rPost.readTime}</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2 leading-snug">
                    <Link href={`/blog/${rPost.slug}`}>
                      {rPost.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-[#8e8e93] leading-relaxed line-clamp-2 mb-4">
                    {rPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-xs">
                  <span className="text-[#71717a] font-mono">{rPost.publishedDate}</span>
                  <Link href={`/blog/${rPost.slug}`} className="text-[#ff5500] font-semibold flex items-center gap-1 group-hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* BOTTOM GLOBAL CALL TO ACTION BANNER */}
        <div className="mt-20 p-8 sm:p-14 bg-gradient-to-r from-[#121212] via-[#0b0b0b] to-[#141414] border border-[#242424] rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff5500]/10 blur-3xl rounded-full pointer-events-none" />
          
          <Badge variant="orange">Get Started</Badge>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f5f5f0] tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to scale your search traffic and creative execution?
          </h2>
          
          <p className="text-sm sm:text-base text-[#8e8e93] max-w-xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call with Vishal Raghuwanshi and our principal studio team. We will review your growth goals and deliver a fixed-scope proposal within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="https://calendly.com/vishal-invokeiq/30min" size="lg" variant="primary" withArrow>
              Book 30-Min Strategy Call
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Send Project Brief
            </Button>
          </div>
        </div>

      </div>
    </article>
  );
}
