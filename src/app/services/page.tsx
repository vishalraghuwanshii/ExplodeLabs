'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { canonicalServices } from '@/data/services/registry';
import { ALL_CATEGORIES } from '@/data/services';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ServiceCategory, ServicePriority } from '@/types';
import { Search, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Explode Labs Full-Service Digital Agency Services Directory',
    url: 'https://explodelabs.com/services',
    description: 'Comprehensive digital agency services across website development, Shopify e-commerce, SEO, AI search optimization, Google & Meta ads, video editing, branding, and AI agent automation.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: canonicalServices.map((s, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: s.name,
        url: `https://explodelabs.com/services/${s.slug}`,
        description: s.shortDescription || s.tagline
      }))
    },
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
          name: 'Services',
          item: 'https://explodelabs.com/services'
        }
      ]
    }
  };

  const priorityWeight: Record<ServicePriority, number> = {
    CORE: 4,
    HIGH: 3,
    STANDARD: 2,
    SPECIALIZED: 1
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return canonicalServices
      .filter((s) => {
        if (s.status === 'draft') return false;
        const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
        const matchesPriority = selectedPriority === 'all' || s.priority === selectedPriority;
        const matchesSearch =
          !q ||
          s.name.toLowerCase().includes(q) ||
          s.tagline.toLowerCase().includes(q) ||
          (s.shortDescription && s.shortDescription.toLowerCase().includes(q)) ||
          (s.directAnswer && s.directAnswer.toLowerCase().includes(q)) ||
          s.category.toLowerCase().includes(q) ||
          (s.subCategory && s.subCategory.toLowerCase().includes(q)) ||
          (s.aliases && s.aliases.some((a) => a.toLowerCase().includes(q))) ||
          (s.technologies && s.technologies.some((t) => t.toLowerCase().includes(q)));

        return matchesCategory && matchesPriority && matchesSearch;
      })
      .sort((a, b) => (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0));
  }, [selectedCategory, selectedPriority, search]);

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={servicesSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Full-Service Digital Agency Directory
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Capabilities & Services.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            A complete directory of our services. We build custom websites, manage paid advertising campaigns, edit video content, and develop AI automations for businesses.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="space-y-4 pb-8 mb-10 border-b border-[#1c1c1c]">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#ff5500] text-white font-semibold shadow-[0_0_15px_rgba(255,85,0,0.25)]'
                  : 'text-[#8e8e93] hover:text-[#f5f5f0] bg-[#101010] hover:bg-[#181818] border border-[#222]'
              }`}
            >
              All Services ({canonicalServices.length})
            </button>
            {ALL_CATEGORIES.map((cat) => {
              const count = canonicalServices.filter((s) => s.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#ff5500] text-white font-semibold shadow-[0_0_15px_rgba(255,85,0,0.25)]'
                      : 'text-[#8e8e93] hover:text-[#f5f5f0] bg-[#101010] hover:bg-[#181818] border border-[#222]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Bar & Result Count */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#5c5c60] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services, technologies, or keywords..."
                className="w-full bg-[#101010] border border-[#222222] focus:border-[#ff5500] rounded-lg pl-9 pr-3.5 py-2 text-xs text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
              />
            </div>

            <div className="text-xs text-[#71717a] font-mono flex items-center gap-2">
              <span>Showing {filtered.length} of {canonicalServices.length} offerings</span>
              {(selectedCategory !== 'all' || search) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearch('');
                  }}
                  className="text-[#ff5500] hover:underline cursor-pointer ml-2"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <Card key={service.id} className="flex flex-col justify-between group hover:border-[#ff5500]/30 transition-all">
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wide text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-2.5 py-0.5 rounded-md">
                    {service.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#71717a]">
                    {service.typicalTimeline}
                  </span>
                </div>

                {/* Service Name */}
                <h2 className="text-xl font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2">
                  <Link href={`/services/${service.slug}`} className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#5c5c60] group-hover:text-[#ff5500] group-hover:translate-x-1 transition-all" />
                  </Link>
                </h2>

                {/* Subcategory */}
                {service.subCategory && (
                  <div className="text-[11px] text-[#71717a] font-mono mb-2">
                    {service.subCategory}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-4">
                  {service.shortDescription || service.tagline}
                </p>

                {/* Deliverables Preview */}
                <div className="space-y-1.5 mb-5 text-xs text-[#a1a1aa]">
                  {service.deliverables.slice(0, 2).map((del, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#ff5500] mt-0.5 font-bold">•</span>
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies / Platforms Tags */}
                {service.technologies && service.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-[#141414] border border-[#222222] text-[#8e8e93] px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-[#5c5c60] px-1 py-0.5">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div>
                <div className="pt-4 border-t border-[#181818] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#71717a]">
                    Model: <span className="text-[#f5f5f0]">{service.pricingRange.model || 'Custom Scope'}</span>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-medium text-[#ff5500] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <p className="text-[#71717a] text-sm">
              No services matched your query. Try selecting another category or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPriority('all');
                setSearch('');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141414] border border-[#222] text-xs text-[#ff5500] hover:bg-[#1c1c1c] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
