'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowUpRight, Layers, Target, Building2, Trophy, Wrench, FileText } from 'lucide-react';
import { searchKnowledgeGraph } from '@/data/knowledge-graph';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchKnowledgeGraph(''));

  useEffect(() => {
    setResults(searchKnowledgeGraph(query));
  }, [query]);

  if (!isOpen) return null;

  const hasResults =
    results.services.length > 0 ||
    results.solutions.length > 0 ||
    results.industries.length > 0 ||
    results.caseStudies.length > 0 ||
    results.tools.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-[#262626] rounded-xl shadow-2xl overflow-hidden">
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#202020] gap-3">
          <Search className="w-5 h-5 text-[#ff5500]" />
          <input
            type="text"
            placeholder="Search services, technologies, solutions, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8e8e93] hover:text-[#f5f5f0]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono bg-[#181818] text-[#8e8e93] rounded border border-[#282828]">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="sm:hidden p-1 text-[#8e8e93] hover:text-[#f5f5f0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() && (
            <div className="py-8 text-center text-[#71717a] text-xs">
              <p>Type to search across 40+ digital capabilities, solutions, and proof stories.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['React', 'AI Agents', 'Shopify', 'SaaS MVP', 'SEO', 'Healthcare'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-[#141414] hover:bg-[#1a1a1a] text-[#a1a1aa] rounded text-xs border border-[#222222] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && !hasResults && (
            <div className="py-12 text-center text-[#71717a] text-sm">
              No direct matches found for <span className="text-[#f5f5f0]">"{query}"</span>.
              <div className="mt-4">
                <Link
                  href="/architect"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs text-[#ff5500] hover:underline"
                >
                  Describe this project to our AI Project Architect <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Services */}
          {results.services.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#71717a] mb-2 px-1">
                <Layers className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Services ({results.services.length})</span>
              </div>
              <div className="space-y-1">
                {results.services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#161616] group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors">
                        {s.name}
                      </div>
                      <div className="text-xs text-[#8e8e93] line-clamp-1">{s.tagline}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#5c5c60] group-hover:text-[#ff5500] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Solutions */}
          {results.solutions.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#71717a] mb-2 px-1">
                <Target className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Solutions ({results.solutions.length})</span>
              </div>
              <div className="space-y-1">
                {results.solutions.map((sol) => (
                  <Link
                    key={sol.id}
                    href={`/solutions/${sol.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#161616] group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors">
                        {sol.title}
                      </div>
                      <div className="text-xs text-[#8e8e93] line-clamp-1">{sol.tagline}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#5c5c60] group-hover:text-[#ff5500] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          {results.caseStudies.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#71717a] mb-2 px-1">
                <Trophy className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Case Studies ({results.caseStudies.length})</span>
              </div>
              <div className="space-y-1">
                {results.caseStudies.map((cs) => (
                  <Link
                    key={cs.id}
                    href={`/case-studies/${cs.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#161616] group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors">
                        {cs.client}: {cs.title}
                      </div>
                      <div className="text-xs text-[#8e8e93]">{cs.industry} • {cs.heroMetric.value} {cs.heroMetric.label}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#5c5c60] group-hover:text-[#ff5500] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {results.tools.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#71717a] mb-2 px-1">
                <Wrench className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Tools ({results.tools.length})</span>
              </div>
              <div className="space-y-1">
                {results.tools.map((t) => (
                  <Link
                    key={t.id}
                    href={`/tools/${t.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#161616] group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors">
                        {t.name}
                      </div>
                      <div className="text-xs text-[#8e8e93]">{t.tagline}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#5c5c60] group-hover:text-[#ff5500] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
