import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowRight, Brain, Cpu, FileText, CheckCircle2 } from 'lucide-react';

export function ArchitectTeaser() {
  return (
    <section className="py-20 sm:py-28 border-b border-[#141414] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[300px] bg-[#ff5500]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#111111] via-[#0d0d0d] to-[#121212] border border-[#262626] rounded-2xl p-8 sm:p-12 lg:p-16 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500] rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Experience</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold text-[#f5f5f0] tracking-tight leading-[1.15] mb-6">
              Meet the AI Project Architect.
            </h2>

            <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed mb-8">
              Describe your project in natural language. Our AI Architect instantly analyzes dependencies, recommends a scalable technical stack, calculates estimated timelines, and generates an exportable Project Brief.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs text-[#a1a1aa] font-mono">
              <div className="flex items-center gap-2 bg-[#171717] p-3 rounded-lg border border-[#242424]">
                <Brain className="w-4 h-4 text-[#ff5500]" />
                <span>Intent & Scope Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-[#171717] p-3 rounded-lg border border-[#242424]">
                <Cpu className="w-4 h-4 text-[#ff5500]" />
                <span>Architecture Recommendation</span>
              </div>
              <div className="flex items-center gap-2 bg-[#171717] p-3 rounded-lg border border-[#242424]">
                <FileText className="w-4 h-4 text-[#ff5500]" />
                <span>Instant Project Brief PDF</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/architect" size="lg" variant="primary" withArrow>
                Launch AI Project Architect
              </Button>
              <Button href="/tools/project-estimator" size="lg" variant="outline">
                Manual Scope Estimator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
