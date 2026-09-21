import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export function ZeroRiskGuarantees() {
  const commitments = [
    {
      icon: ShieldCheck,
      title: '30-Day Post-Launch Warranty',
      desc: 'Every project delivery includes 30 days of active monitoring and bug fixes via a private Slack channel.'
    },
    {
      icon: Lock,
      title: '100% Full IP & Source Sovereignty',
      desc: 'You own 100% of all deliverables upon milestone completion. We provide all raw project files, design assets, code repositories, and direct ad account ownership.'
    },
    {
      icon: FileCheck,
      title: 'Mutual Non-Disclosure Agreement (NDA)',
      desc: 'We protect your intellectual property with strict enterprise-grade confidentiality. We sign mutual NDAs prior to reviewing proprietary roadmaps, codebase repositories, or ad spend data.'
    },
    {
      icon: Zap,
      title: 'Fixed-Price Milestone Certainty',
      desc: 'No vague hourly billing or scope creep surprises. Every project scope, timeline, and deliverable is agreed upon upfront with transparent milestone release schedules.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#070707] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Client Assurance & Security
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0]">
            Working With Us.
          </h2>
          <p className="text-sm sm:text-base text-[#8e8e93] mt-3 leading-relaxed">
            Hiring an external partner shouldn't feel like a gamble. We operate with strict confidentiality, clear scopes, and full intellectual property transfer so you stay in control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#0c0c0c] border border-[#1b1b1b] hover:border-[#2e2e2e] transition-all rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-[#ff5500] mb-5 group-hover:border-[#ff5500]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#8e8e93] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#161616] flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Stipulated in Contract</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-[#111111] via-[#0d0d0d] to-[#131313] border border-[#222222] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-bold text-[#f5f5f0]">
              Ready to review a customized milestone roadmap for your brand?
            </div>
            <div className="text-xs text-[#8e8e93]">
              Receive a comprehensive diagnostic audit and fixed-scope investment estimate in less than 24 hours.
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button href="https://calendly.com/vishal-invokeiq/30min" variant="primary" size="md" withArrow>
              Book 30-Min Strategy Call
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Request Proposal
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
