'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { caseStudies } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Trophy, ArrowUpRight, Search, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const caseStudiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Explode Labs Case Studies & Verified Client Results',
    url: 'https://explodelabs.com/case-studies',
    description: 'Explore documented case studies and quantifiable business outcomes across SEO, video editing, performance paid media, and web development.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudies.map((cs, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${cs.client}: ${cs.title}`,
        url: `https://explodelabs.com/case-studies/${cs.slug}`,
        description: cs.tagline
      }))
    }
  };

  const industries = useMemo(() => {
    const list = ['All', ...new Set(caseStudies.map((cs) => cs.industry))];
    return list;
  }, []);

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchesIndustry = selectedIndustry === 'All' || cs.industry === selectedIndustry;
      const matchesSearch = 
        searchQuery === '' ||
        cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        cs.serviceSlugs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesIndustry && matchesSearch;
    });
  }, [selectedIndustry, searchQuery]);

  return (
    <div className="py-16 sm:py-24 bg-[#080808]">
      <JsonLd schema={caseStudiesSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <Badge variant="orange" className="mb-3">
            12 Enterprise Case Studies • Verified ROI
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Proven Execution.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Detailed engineering breakdowns, performance benchmarks, and verifiable revenue outcomes achieved across our 35 flagship services.
          </p>

          {/* Switcher to Visual Portfolio */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#1a1a1a]">
            <span className="text-xs font-mono text-[#71717a]">View Mode:</span>
            <span className="px-3 py-1 bg-[#ff5500] text-white rounded-lg text-xs font-medium">
              📊 Deep-Dive Case Studies (12)
            </span>
            <Link 
              href="/portfolio" 
              className="px-3 py-1 bg-[#141414] hover:bg-[#1f1f1f] text-[#8e8e93] hover:text-[#f5f5f0] border border-[#222222] rounded-lg text-xs font-medium transition-colors"
            >
              🎨 Client Portfolio Grid
            </Link>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c5c60]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client, technology, service, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#222222] rounded-xl text-sm text-[#f5f5f0] placeholder-[#5c5c60] focus:outline-none focus:border-[#ff5500] transition-colors"
              />
            </div>

            <div className="text-xs font-mono text-[#71717a] self-center sm:self-auto">
              Showing <span className="text-[#ff5500] font-semibold">{filteredCaseStudies.length}</span> of {caseStudies.length} Case Studies
            </div>
          </div>

          {/* Industry Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedIndustry === ind
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/20'
                    : 'bg-[#141414] text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#1c1c1c] border border-[#222222]'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((cs) => (
            <Card key={cs.id} className="p-8 flex flex-col justify-between group bg-[#0e0e0e] border-[#1e1e1e] hover:border-[#ff5500]/40 transition-all">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="outline" className="border-[#2a2a2a] text-[#a1a1aa]">{cs.industry}</Badge>
                  <span className="text-xs font-mono text-[#71717a]">{cs.timeline}</span>
                </div>

                {/* Hero Metric */}
                <div className="p-4 rounded-xl bg-[#141414] border border-[#202020] mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold font-mono text-[#ff5500]">{cs.heroMetric.value}</div>
                    <div className="text-xs uppercase font-mono text-[#8e8e93] mt-1">{cs.heroMetric.label}</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                    <Trophy className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3 leading-snug">
                  <Link href={`/case-studies/${cs.slug}`}>
                    {cs.client}: {cs.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#8e8e93] leading-relaxed mb-6">
                  {cs.tagline}
                </p>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-[#111111] rounded-lg border border-[#1a1a1a] mb-6 text-center text-xs">
                  {cs.secondaryMetrics.slice(0, 4).map((sec, i) => (
                    <div key={i} className="p-1">
                      <div className="font-mono text-[#f5f5f0] font-semibold text-xs sm:text-sm">{sec.value}</div>
                      <div className="text-[10px] text-[#71717a] line-clamp-1 mt-0.5">{sec.label}</div>
                    </div>
                  ))}
                </div>

                {/* Services Deployed */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#5c5c60] mb-2">Services Deployed</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.serviceSlugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="text-[11px] font-mono text-[#8e8e93] bg-[#161616] hover:text-[#ff5500] hover:bg-[#1f1f1f] border border-[#262626] px-2 py-0.5 rounded transition-colors"
                      >
                        /{slug}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="pt-6 border-t border-[#1a1a1a] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {cs.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-[#71717a] bg-[#141414] px-2 py-0.5 rounded border border-[#1e1e1e]">
                        {t}
                      </span>
                    ))}
                    {cs.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-[#5c5c60] px-1 py-0.5">
                        +{cs.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <Button href={`/case-studies/${cs.slug}`} variant="outline" size="sm" withArrow>
                    Full Case Study
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16 bg-[#111111] rounded-2xl border border-[#222222]">
            <p className="text-base text-[#8e8e93] mb-4">No case studies match your current filter.</p>
            <button
              onClick={() => { setSelectedIndustry('All'); setSearchQuery(''); }}
              className="text-xs font-mono text-[#ff5500] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
