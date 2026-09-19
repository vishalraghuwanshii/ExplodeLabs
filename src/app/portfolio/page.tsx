'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { portfolioItems, PortfolioItem } from '@/data/portfolio-items';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Search, 
  Sparkles, 
  Eye, 
  Layers, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Video, 
  TrendingUp, 
  Star, 
  Quote, 
  PhoneCall, 
  ShieldCheck,
  Play
} from 'lucide-react';

import { MockupRenderer } from '@/components/portfolio/MockupRenderer';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolio Work' },
    { id: 'web-design', label: '🌐 Web Design & Apps' },
    { id: 'branding-logo', label: '🎨 Logo Design & Branding' },
    { id: 'video-motion', label: '🎬 Video Production & Reels' },
    { id: 'seo-growth', label: '📈 SEO & Search Growth' },
    { id: 'paid-media', label: '⚡ Paid Ads & Lead Gen' },
    { id: 'reviews-testimonials', label: '⭐ Client Video Reviews' },
  ];

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        searchQuery === '' ||
        item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-16 sm:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="orange">
              Proven Production Work
            </Badge>
            <span className="text-xs font-mono text-[#71717a] border border-[#222222] bg-[#111111] px-2.5 py-0.5 rounded">
              Verified Client Deployments
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Our Work & Client Portfolio.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Explore our proven work across web design, custom software, corporate logo branding, commercial 4K video production, and revenue-generating search engines.
          </p>

          {/* Switcher to Case Studies */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#1a1a1a]">
            <span className="text-xs font-mono text-[#71717a]">View Mode:</span>
            <span className="px-3 py-1 bg-[#ff5500] text-white rounded-lg text-xs font-medium">
              🎨 Client Portfolio Grid ({portfolioItems.length})
            </span>
            <Link 
              href="/case-studies" 
              className="px-3 py-1 bg-[#141414] hover:bg-[#1f1f1f] text-[#8e8e93] hover:text-[#f5f5f0] border border-[#222222] rounded-lg text-xs font-medium transition-colors"
            >
              📊 Strategic Case Studies (12)
            </Link>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c5c60]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client, industry, technology, or service..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#222222] rounded-xl text-sm text-[#f5f5f0] placeholder-[#5c5c60] focus:outline-none focus:border-[#ff5500] transition-colors"
              />
            </div>

            <div className="text-xs font-mono text-[#71717a] self-center sm:self-auto">
              Showing <span className="text-[#ff5500] font-semibold">{filteredItems.length}</span> of {portfolioItems.length} Projects
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === c.id
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/20'
                    : 'bg-[#141414] text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#1c1c1c] border border-[#222222]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="p-0 overflow-hidden bg-[#0d0d0d] border-[#1e1e1e] hover:border-[#ff5500]/50 transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalItem(item)}
            >
              {/* Visual Preview Canvas */}
              <div className="relative aspect-[16/10] bg-[#121212] border-b border-[#1c1c1c] p-3 flex flex-col justify-between overflow-hidden">
                <MockupRenderer item={item} />

                {/* Hover Inspect Overlay */}
                <div className="absolute inset-0 bg-[#080808]/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white pointer-events-none">
                  <Eye className="w-4 h-4 text-[#ff5500]" />
                  <span>View Full Case & Deliverables</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold" style={{ color: item.visualPreview.accentColor }}>
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-[#71717a] truncate max-w-[130px]">{item.industry}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-1.5 leading-snug">
                    {item.clientName}
                  </h3>

                  <p className="text-xs text-[#8e8e93] line-clamp-2 leading-relaxed mb-3">
                    {item.projectTitle}
                  </p>

                  {/* Results Highlights */}
                  <div className="grid grid-cols-3 gap-1.5 mb-4">
                    {item.results.map((res, i) => (
                      <div key={i} className="bg-[#141414] p-1.5 rounded border border-[#1e1e1e] text-center">
                        <div className="font-mono text-xs font-bold text-[#f5f5f0]">{res.metric}</div>
                        <div className="text-[8px] font-mono text-[#71717a] truncate">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-[#71717a] bg-[#141414] px-2 py-0.5 rounded border border-[#1e1e1e]">
                        {t}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-[#5c5c60] px-1">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Service Link */}
                  <div className="pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
                    <Link
                      href={`/services/${item.serviceSlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] font-mono text-[#8e8e93] hover:text-[#ff5500] transition-colors inline-flex items-center gap-1"
                    >
                      <span>/{item.serviceSlug}</span>
                      <ArrowRight className="w-3 h-3 text-[#ff5500]" />
                    </Link>
                    <span className="text-[10px] font-mono text-[#ff5500] font-semibold">View Case →</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#111111] rounded-2xl border border-[#222222]">
            <p className="text-base text-[#8e8e93] mb-4">No portfolio items match your search query.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs font-mono text-[#ff5500] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL DRAWER FOR DETAILED INSPECTION */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d0d] border border-[#242424] rounded-2xl overflow-y-auto shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#141414] text-[#8e8e93] hover:text-white hover:bg-[#202020] border border-[#222222] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="max-w-2xl mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="orange">{activeModalItem.categoryLabel}</Badge>
                <span className="text-xs font-mono text-[#71717a]">{activeModalItem.industry}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] mb-1">
                {activeModalItem.clientName}
              </h2>
              <div className="text-sm font-semibold text-[#ff5500] mb-2">
                {activeModalItem.projectTitle}
              </div>
              <p className="text-sm text-[#8e8e93] leading-relaxed">
                {activeModalItem.tagline}
              </p>
            </div>

            {/* High-Fidelity Interactive Mockup Canvas */}
            <div className="aspect-[16/9] w-full bg-[#0a0a0a] rounded-xl border border-[#262626] mb-6 p-2 overflow-hidden shadow-2xl">
              <MockupRenderer item={activeModalItem} interactive={true} />
            </div>

            {/* Verified Results Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-5 rounded-xl bg-[#121212] border border-[#1e1e1e] mb-6">
              {activeModalItem.results.map((res, idx) => (
                <div key={idx} className="p-3 bg-[#0a0a0a] rounded-lg border border-[#222] text-center">
                  <div className="font-mono text-2xl font-bold" style={{ color: activeModalItem.visualPreview.accentColor }}>
                    {res.metric}
                  </div>
                  <div className="text-xs font-mono text-[#8e8e93] mt-0.5">{res.label}</div>
                </div>
              ))}
            </div>

            {/* Client Quote / Testimonial if Available */}
            {activeModalItem.clientQuote && (
              <div className="p-5 rounded-xl bg-[#141414] border border-[#262626] mb-6 relative">
                <Quote className="w-6 h-6 text-[#ff5500]/40 absolute top-4 right-4" />
                <p className="text-sm text-[#d4d4d8] italic mb-3 pr-8 leading-relaxed">
                  “{activeModalItem.clientQuote.text}”
                </p>
                <div className="text-xs font-bold text-[#f5f5f0]">
                  {activeModalItem.clientQuote.author}
                </div>
                <div className="text-[10px] font-mono text-[#71717a]">
                  {activeModalItem.clientQuote.title}
                </div>
              </div>
            )}

            {/* Overview, Challenge & Solution Breakdown */}
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-[#111111] rounded-xl border border-[#1c1c1c]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#ff5500] mb-1">Project Overview</h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">{activeModalItem.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#111111] rounded-xl border border-[#1c1c1c]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 mb-1">The Core Challenge</h4>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">{activeModalItem.challenge}</p>
                </div>
                <div className="p-4 bg-[#111111] rounded-xl border border-[#1c1c1c]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">Our Engineering Solution</h4>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">{activeModalItem.solution}</p>
                </div>
              </div>
            </div>

            {/* Deliverables & Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Deliverables */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Key Project Deliverables</span>
                </h3>
                <div className="space-y-2">
                  {activeModalItem.deliverables.map((del, i) => (
                    <div key={i} className="p-3 bg-[#111111] border border-[#1a1a1a] rounded-xl flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Technology Stack & Tools</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalItem.technologies.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-[#141414] border border-[#222222] rounded-lg text-xs font-mono text-[#a1a1aa]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Link
                href={`/services/${activeModalItem.serviceSlug}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-[#f5f5f0] border border-[#242424] text-xs font-mono transition-colors"
              >
                <span>View Full Service Masterclass ({activeModalItem.serviceName})</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ff5500]" />
              </Link>

              <div className="flex items-center gap-3">
                <Button href="/contact" size="sm" variant="primary" withArrow>
                  Build Similar Project
                </Button>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 bg-transparent text-xs font-mono text-[#8e8e93] hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
