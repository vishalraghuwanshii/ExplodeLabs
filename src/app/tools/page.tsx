import React from 'react';
import Link from 'next/link';
import { tools } from '@/data/knowledge-graph';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calculator, Search, Sparkles, ArrowRight, Wrench } from 'lucide-react';

export default function ToolsHubPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Interactive Intelligence
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Tools & Calculators.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Free, production-grade tools to scope projects, estimate costs, and audit web performance & AI search citability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((t) => (
            <Card key={t.id} className="p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center text-[#ff5500]">
                    {t.iconName === 'Calculator' ? <Calculator className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                  </div>
                  <Badge variant="orange">{t.badge}</Badge>
                </div>

                <h2 className="text-2xl font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2">
                  <Link href={`/tools/${t.slug}`}>
                    {t.name}
                  </Link>
                </h2>

                <p className="text-sm text-[#8e8e93] leading-relaxed mb-6 font-normal">
                  {t.description}
                </p>
              </div>

              <div>
                <div className="pt-6 border-t border-[#1a1a1a]">
                  <Button href={`/tools/${t.slug}`} variant="primary" size="md" className="w-full" withArrow>
                    Launch {t.name.split(' ')[0]} Tool
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
