import React from 'react';
import Link from 'next/link';
import { guides } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, ArrowRight, Clock } from 'lucide-react';

export default function GuidesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Engineering & Strategy Knowledge Base
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Guides & Research.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            In-depth architectural breakdowns, cost benchmarks, and technical playbooks written by senior practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((g) => (
            <Card key={g.id} className="p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{g.category}</Badge>
                  <span className="text-xs font-mono text-[#71717a] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{g.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-3 leading-snug">
                  <Link href={`/guides/${g.slug}`}>
                    {g.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#8e8e93] leading-relaxed mb-6">
                  {g.summary}
                </p>

                <div className="space-y-1.5 mb-6">
                  {g.takeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                      <span className="text-[#ff5500] font-bold">•</span>
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-6 border-t border-[#1a1a1a] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#5c5c60]">Published: {g.publishedDate}</span>
                  <Button href={`/guides/${g.slug}`} variant="outline" size="sm" withArrow>
                    Read Guide
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
