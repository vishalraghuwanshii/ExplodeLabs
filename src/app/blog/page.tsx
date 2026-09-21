import React from 'react';
import { blogPosts } from '@/data/blog-posts';
import { BlogIndexClient } from '@/components/blog/BlogIndexClient';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Insights, Research & Engineering Blog | Explode Labs',
  description: 'Actionable breakdowns on AI search optimization (GEO/AEO), high-performance web engineering, commercial video creative, and modern B2B growth.',
};

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Explode Labs Engineering & Growth Insights',
    url: 'https://explodelabs.com/blog',
    description: 'Executive playbooks and deep dives on AI search optimization, performance web development, and digital growth.',
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://explodelabs.com/blog/${post.slug}`,
      datePublished: post.publishedDate,
      author: {
        '@type': 'Person',
        name: post.author.name,
      }
    }))
  };

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={blogSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <Badge variant="orange">
            Engineering & Growth Insights
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] leading-[1.1]">
            Explode Labs Blog.
          </h1>
          
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Practical playbooks, architectural teardowns, and growth strategies written directly by our senior practitioners. No generic summaries or marketing fluff.
          </p>
        </div>

        {/* INTERACTIVE CLIENT FILTERING & POSTS */}
        <BlogIndexClient posts={blogPosts} />

      </div>
    </div>
  );
}
