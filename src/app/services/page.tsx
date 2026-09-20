'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/knowledge-graph';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PillarType } from '@/types';
import { Search, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export default function ServicesPage() {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Explode Labs Disciplines & Services',
    url: 'https://explodelabs.com/services',
    description: 'Explore the full spectrum of digital growth, commercial video post-production, paid performance media, and modern web development services offered by Explode Labs.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: services.map((s, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: s.name,
        url: `https://explodelabs.com/services/${s.slug}`,
        description: s.tagline
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

  const filtered = services.filter((s) => {
    const matchesPillar = filter === 'all' || s.pillar === filter;
    const matchesSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.tagline.toLowerCase().includes(search.toLowerCase()) ||
      s.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesPillar && matchesSearch;
  });

  return (
    <div className="py-16 sm:py-24">
      <JsonLd schema={servicesSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Capabilities & Disciplines
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Engineered Capabilities.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Every digital discipline executed with senior rigor. From rapid sprint deliverables to enterprise full-stack systems.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#1c1c1c]">
          {/* Pillar Filters */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#101010] border border-[#222222] rounded-lg">
            {[
              { id: 'all', label: 'All Capabilities' },
              { id: 'build', label: 'Build' },
              { id: 'grow', label: 'Grow' },
              { id: 'automate', label: 'Automate' },
              { id: 'create', label: 'Create' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#ff5500] text-white font-semibold'
                    : 'text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#181818]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Live Search */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#5c5c60] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search services or technologies..."
              className="w-full bg-[#101010] border border-[#222222] focus:border-[#ff5500] rounded-lg pl-9 pr-3.5 py-1.5 text-xs text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <Card key={service.id} className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-2.5 py-0.5 rounded-full">
                    {service.pillar}
                  </span>
                  <span className="text-[11px] font-mono text-[#71717a]">{service.typicalTimeline}</span>
                </div>

                <h2 className="text-xl font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2">
                  <Link href={`/services/${service.slug}`} className="flex items-center justify-between">
                    <span>{service.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#5c5c60] group-hover:text-[#ff5500] group-hover:translate-x-1 transition-all" />
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
                  {service.tagline}
                </p>

                {/* Key Deliverables Preview */}
                <div className="space-y-1.5 mb-6 text-xs text-[#a1a1aa]">
                  {service.deliverables.slice(0, 2).map((del, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#ff5500] mt-0.5 font-bold">•</span>
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-4 border-t border-[#181818] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-[#71717a]">
                    Scope: <span className="text-[#f5f5f0]">Custom Proposal</span>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-medium text-[#ff5500] hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-[#71717a] text-sm">
            No services matched your query. Try resetting filters or{' '}
            <Link href="/architect" className="text-[#ff5500] hover:underline">
              describe your requirements to our AI Architect
            </Link>.
          </div>
        )}
      </div>
    </div>
  );
}
