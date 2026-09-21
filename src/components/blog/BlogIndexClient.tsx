'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog-posts';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Clock, ArrowRight, Sparkles, BookOpen, Check, Mail, Send, ChevronRight } from 'lucide-react';

interface BlogIndexClientProps {
  posts: BlogPost[];
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    'All',
    'AI & Search',
    'Strategy & Process',
    'Web Development',
    'Creative & Video',
    'Growth & Outbound',
    'Product & UI/UX'
  ];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const gridPosts = filteredPosts.filter(p => selectedCategory !== 'All' || p.id !== featuredPost.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="space-y-16">
      {/* FEATURED HERO POST (Billion-Dollar Editorial Spotlight) */}
      {selectedCategory === 'All' && featuredPost && (
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ff5500]/20 via-orange-500/10 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
          
          <div className="relative p-8 sm:p-12 lg:p-14 bg-[#0d0d0d] border border-[#242424] hover:border-[#ff5500]/40 rounded-2xl shadow-2xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Info & Story Hook */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Insight</span>
                  </span>
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f5f5f0] group-hover:text-white transition-colors tracking-tight leading-[1.15]">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#ff5500] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[#8e8e93] leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Key Takeaways Snapshot */}
                <div className="p-4 rounded-xl bg-[#141414] border border-[#1e1e1e] space-y-2">
                  <div className="text-xs font-mono uppercase text-[#71717a] font-semibold">Key Takeaway</div>
                  <div className="flex items-start gap-2 text-xs text-[#d1d1d6]">
                    <span className="text-[#ff5500] font-bold mt-0.5">•</span>
                    <span>{featuredPost.keyTakeaways[0]}</span>
                  </div>
                </div>

                {/* Author Card & CTA */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff5500] text-black font-bold text-xs flex items-center justify-center shadow-md">
                      {featuredPost.author.avatarInitials}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#f5f5f0]">{featuredPost.author.name}</div>
                      <div className="text-[11px] text-[#71717a]">{featuredPost.author.role} • {featuredPost.publishedDate}</div>
                    </div>
                  </div>

                  <Button href={`/blog/${featuredPost.slug}`} variant="primary" size="md" withArrow>
                    Read Full Story
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Bento Preview */}
              <div className="lg:col-span-5">
                <div className="p-6 bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#222222] rounded-2xl space-y-5 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1f1f1f]">
                    <span className="text-xs font-mono text-[#ff5500] uppercase font-semibold">Table of Contents</span>
                    <BookOpen className="w-4 h-4 text-[#71717a]" />
                  </div>

                  <div className="space-y-3">
                    {featuredPost.tableOfContents.map((toc, idx) => (
                      <Link 
                        key={idx}
                        href={`/blog/${featuredPost.slug}#${toc.id}`}
                        className="flex items-center justify-between text-xs text-[#8e8e93] hover:text-[#f5f5f0] p-2.5 rounded-lg hover:bg-[#181818] border border-transparent hover:border-[#2a2a2a] transition-all group/toc"
                      >
                        <span className="line-clamp-1">{toc.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/toc:opacity-100 text-[#ff5500] transition-opacity shrink-0" />
                      </Link>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#1f1f1f] flex items-center justify-between text-[11px] text-[#71717a] font-mono">
                    <span>Verified Insight</span>
                    <span className="text-emerald-400">100% Original Content</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* CATEGORY FILTER TABS */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#181818] pb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/20 font-semibold'
                  : 'bg-[#121212] border border-[#222222] text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#181818]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-[#71717a]">
          Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* ARTICLE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridPosts.map((post) => (
          <Card 
            key={post.id} 
            className="p-6 bg-[#0c0c0c] border-[#1e1e1e] hover:border-[#ff5500]/50 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold text-[#ff5500] uppercase tracking-wider bg-[#ff5500]/10 px-2.5 py-0.5 rounded-full border border-[#ff5500]/20">
                  {post.category}
                </span>
                <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3 leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {post.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono text-[#71717a] bg-[#141414] border border-[#222] px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Author & Link */}
            <div className="pt-4 border-t border-[#181818] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#1e1e1e] border border-[#333] text-[#f5f5f0] font-bold text-[11px] flex items-center justify-center">
                  {post.author.avatarInitials}
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-medium text-[#f5f5f0]">{post.author.name}</div>
                  <div className="text-[10px] text-[#71717a]">{post.publishedDate}</div>
                </div>
              </div>

              <Link 
                href={`/blog/${post.slug}`} 
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] group-hover:border-[#ff5500] group-hover:bg-[#ff5500] text-[#71717a] group-hover:text-black flex items-center justify-center transition-all"
                aria-label={`Read ${post.title}`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* LUXURY NEWSLETTER / STRATEGY DISPATCH WIDGET */}
      <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-[#111111] via-[#0d0d0d] to-[#141414] border border-[#242424] rounded-2xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5500]/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] text-xs font-mono uppercase font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Explode Labs Dispatch</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] tracking-tight">
            Engineering insights and growth playbooks. Delivered twice monthly.
          </h3>
          
          <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed">
            Zero marketing spam. Only actionable teardowns on AI search optimization, next-generation web performance, and commercial creative frameworks.
          </p>

          {subscribed ? (
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-emerald-400 text-xs sm:text-sm">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>You are subscribed! We will send you our next executive teardown.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address"
                className="w-full sm:flex-1 bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#ff5500] hover:bg-[#e04a00] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-[#ff5500]/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="text-[11px] text-[#5c5c60]">
            Join 4,200+ founders, CMOs, and engineering leaders. Unsubscribe anytime in one click.
          </div>
        </div>
      </div>
    </div>
  );
}
