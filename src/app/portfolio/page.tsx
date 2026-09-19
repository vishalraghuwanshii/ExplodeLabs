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
  Code2, 
  Monitor, 
  Smartphone, 
  Film, 
  Box, 
  Server,
  Zap,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

import { MockupRenderer } from '@/components/portfolio/MockupRenderer';

export default function PortfolioPage() {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const pillars = [
    { id: 'all', label: 'All Disciplines (35)' },
    { id: 'seo-growth', label: 'AI Search & SEO (8)' },
    { id: 'paid-media', label: 'Paid Performance (6)' },
    { id: 'creative-media', label: 'Creative & 3D (6)' },
    { id: 'b2b-outbound', label: 'B2B Outbound (2)' },
    { id: 'custom-web', label: 'Web & SaaS (8)' },
    { id: 'ai-automation', label: 'AI & Data (5)' },
  ];

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesPillar = selectedPillar === 'all' || item.pillar === selectedPillar;
      const matchesSearch = 
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.clientArchetype.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesPillar && matchesSearch;
    });
  }, [selectedPillar, searchQuery]);

  return (
    <div className="py-16 sm:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="orange">
              Visual Craft & Technical Portfolio
            </Badge>
            <span className="text-xs font-mono text-[#71717a] border border-[#222222] bg-[#111111] px-2.5 py-0.5 rounded">
              35 Master Artifacts • Non-Indexed Vault
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Crafted with Precision.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            High-density design systems, 3D CGI product renders, Next.js 15 enterprise web applications, and autonomous AI automation pipelines engineered across all 35 flagship disciplines.
          </p>

          {/* Switcher to Case Studies */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#1a1a1a]">
            <span className="text-xs font-mono text-[#71717a]">View Mode:</span>
            <span className="px-3 py-1 bg-[#ff5500] text-white rounded-lg text-xs font-medium">
              🎨 Visual Portfolio Grid (35)
            </span>
            <Link 
              href="/case-studies" 
              className="px-3 py-1 bg-[#141414] hover:bg-[#1f1f1f] text-[#8e8e93] hover:text-[#f5f5f0] border border-[#222222] rounded-lg text-xs font-medium transition-colors"
            >
              📊 Deep-Dive Case Studies (12)
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
                placeholder="Search by technology, discipline, or deliverable..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#222222] rounded-xl text-sm text-[#f5f5f0] placeholder-[#5c5c60] focus:outline-none focus:border-[#ff5500] transition-colors"
              />
            </div>

            <div className="text-xs font-mono text-[#71717a] self-center sm:self-auto">
              Showing <span className="text-[#ff5500] font-semibold">{filteredItems.length}</span> of {portfolioItems.length} Master Artifacts
            </div>
          </div>

          {/* Pillar Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedPillar === p.id
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/20'
                    : 'bg-[#141414] text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#1c1c1c] border border-[#222222]'
                }`}
              >
                {p.label}
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
                  <span>Inspect System Architecture</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#ff5500]">{item.pillarLabel}</span>
                    <span className="text-[10px] font-mono text-[#5c5c60] truncate max-w-[130px]">{item.clientArchetype}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#8e8e93] line-clamp-2 leading-relaxed mb-4">
                    {item.summary}
                  </p>
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
                    <span className="text-[10px] font-mono text-[#5c5c60]">Click to Expand</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#111111] rounded-2xl border border-[#222222]">
            <p className="text-base text-[#8e8e93] mb-4">No portfolio artifacts match your search query.</p>
            <button
              onClick={() => { setSelectedPillar('all'); setSearchQuery(''); }}
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
                <Badge variant="orange">{activeModalItem.pillarLabel}</Badge>
                <span className="text-xs font-mono text-[#71717a]">{activeModalItem.clientArchetype}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] mb-2">
                {activeModalItem.title}
              </h2>
              <p className="text-sm text-[#8e8e93] leading-relaxed">
                {activeModalItem.tagline}
              </p>
            </div>

            {/* High-Fidelity Interactive Mockup Canvas */}
            <div className="aspect-[16/9] w-full bg-[#0a0a0a] rounded-xl border border-[#262626] mb-6 p-2 overflow-hidden shadow-2xl">
              <MockupRenderer item={activeModalItem} interactive={true} />
            </div>

            {/* Architecture Overview */}
            <div className="p-6 rounded-xl bg-[#121212] border border-[#1e1e1e] mb-8 relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ backgroundColor: activeModalItem.visualPreview.accentColor }}
              />

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="sm:col-span-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-1">Architecture Specification</div>
                  <div className="text-xl font-bold text-[#f5f5f0]">{activeModalItem.visualPreview.heroHeadline}</div>
                  <div className="text-sm text-[#8e8e93] mt-1">{activeModalItem.visualPreview.subtext}</div>
                </div>
                {activeModalItem.visualPreview.statHighlight && (
                  <div className="p-3 bg-[#0a0a0a] rounded-lg border border-[#222222] text-center flex flex-col justify-center">
                    <div className="text-2xl font-bold font-mono text-[#ff5500]">
                      {activeModalItem.visualPreview.statHighlight.value}
                    </div>
                    <div className="text-[10px] uppercase font-mono text-[#8e8e93]">
                      {activeModalItem.visualPreview.statHighlight.label}
                    </div>
                  </div>
                )}
              </div>

              {/* KPI Matrix */}
              <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 border-t border-[#1e1e1e]">
                {activeModalItem.visualPreview.mockupDetails.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-2 bg-[#0a0a0a] rounded-lg border border-[#1c1c1c] text-center">
                    <div className="font-mono text-sm font-bold text-[#f5f5f0]">{kpi.value}</div>
                    <div className="text-[10px] font-mono text-[#71717a]">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Deliverables */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Key Engineering Deliverables</span>
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

              {/* Technologies & Key Innovations */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-1.5 mb-2.5">
                    <Cpu className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Technology Stack</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalItem.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-[#141414] border border-[#222222] rounded-lg text-xs font-mono text-[#a1a1aa]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-1.5 mb-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Technical Innovations</span>
                  </h3>
                  <div className="space-y-2">
                    {activeModalItem.keyInnovations.map((inn, i) => (
                      <div key={i} className="p-2.5 bg-[#111111] border border-[#1a1a1a] rounded-lg text-xs text-[#8e8e93] leading-relaxed">
                        • {inn}
                      </div>
                    ))}
                  </div>
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
