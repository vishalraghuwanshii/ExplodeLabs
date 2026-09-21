'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export function EstimatorCalculator() {
  const [projectType, setProjectType] = useState<'web' | 'saas' | 'mobile' | 'ai' | 'ecommerce' | 'growth'>('saas');
  const [complexity, setComplexity] = useState<number>(2); // 1: MVP, 2: Production Scale, 3: Enterprise
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated'>('standard');
  const [features, setFeatures] = useState<string[]>([
    'auth_rbac',
    'stripe_billing',
    'design_system'
  ]);

  const toggleFeature = (id: string) => {
    setFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const featureList = [
    { id: 'auth_rbac', label: 'OAuth & Multi-Tenant RBAC', baseCost: 1200 },
    { id: 'stripe_billing', label: 'Stripe Subscriptions & Webhooks', baseCost: 1500 },
    { id: 'design_system', label: 'Bespoke Figma Design Tokens & UI Kit', baseCost: 1800 },
    { id: 'ai_rag', label: 'Intelligent AI Search & RAG Integration', baseCost: 2500 },
    { id: 'seo_engine', label: 'Entity SEO & Programmatic Pages', baseCost: 1500 },
    { id: 'soc2_hipaa', label: 'SOC2 / HIPAA Compliance Hardening', baseCost: 2200 },
  ];

  // Calculation logic
  const baseRates = {
    web: 3500,
    saas: 6500,
    mobile: 7500,
    ai: 5500,
    ecommerce: 4500,
    growth: 2500,
  };

  const complexityMultipliers = {
    1: 0.85,
    2: 1.15,
    3: 1.5,
  };

  const featureCosts = features.reduce((acc, featId) => {
    const feat = featureList.find(f => f.id === featId);
    return acc + (feat ? feat.baseCost : 0);
  }, 0);

  const calculatedBase = (baseRates[projectType] + featureCosts) * complexityMultipliers[complexity as 1 | 2 | 3];
  const finalMin = Math.round((calculatedBase * 0.9) / 500) * 500;
  const finalMax = Math.round((calculatedBase * 1.25) / 500) * 500;

  const estimatedWeeks = complexity === 1 ? '2 - 4 weeks' : complexity === 2 ? '4 - 7 weeks' : '8 - 12 weeks';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Controls Area */}
      <div className="lg:col-span-7 space-y-6">
        {/* Project Type */}
        <div className="p-6 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl space-y-3">
          <label className="text-xs font-mono uppercase text-[#71717a] font-semibold block">
            1. Select Primary Discipline
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'saas', label: 'B2B SaaS Platform' },
              { id: 'web', label: 'React / Next.js Web' },
              { id: 'mobile', label: 'Mobile App (iOS/Android)' },
              { id: 'ai', label: 'Autonomous AI Agent' },
              { id: 'ecommerce', label: 'Shopify Plus E-com' },
              { id: 'growth', label: 'Technical SEO & Growth' },
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setProjectType(type.id as any)}
                className={`p-3 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                  projectType === type.id
                    ? 'bg-[#ff5500]/10 border-[#ff5500] text-[#ff5500] font-semibold'
                    : 'bg-[#141414] border-[#222222] text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#181818]'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Complexity Level */}
        <div className="p-6 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono uppercase text-[#71717a] font-semibold">
              2. Scale & Architecture Tier
            </label>
            <span className="text-xs font-mono text-[#ff5500]">
              {complexity === 1 ? 'MVP Prototype' : complexity === 2 ? 'Production Growth' : 'Enterprise / High Security'}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { level: 1, label: 'Early MVP', desc: 'Core features, single team' },
              { level: 2, label: 'Production Scale', desc: 'Full multi-tenancy & analytics' },
              { level: 3, label: 'Enterprise Grade', desc: 'SOC2, high-volume SLAs' },
            ].map(item => (
              <button
                key={item.level}
                onClick={() => setComplexity(item.level)}
                className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                  complexity === item.level
                    ? 'bg-[#181818] border-[#ff5500] text-[#f5f5f0]'
                    : 'bg-[#121212] border-[#202020] text-[#71717a] hover:bg-[#161616]'
                }`}
              >
                <div className="text-xs font-semibold text-[#f5f5f0]">{item.label}</div>
                <div className="text-[10px] text-[#8e8e93] mt-0.5">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Modular Feature Add-ons */}
        <div className="p-6 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl space-y-3">
          <label className="text-xs font-mono uppercase text-[#71717a] font-semibold block">
            3. Architecture Modules & Capabilities
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {featureList.map(feat => {
              const isSelected = features.includes(feat.id);
              return (
                <button
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#ff5500]/5 border-[#ff5500]/40 text-[#f5f5f0]'
                      : 'bg-[#121212] border-[#1e1e1e] text-[#71717a] hover:text-[#a1a1aa]'
                  }`}
                >
                  <span>{feat.label}</span>
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                    isSelected ? 'bg-[#ff5500] border-[#ff5500] text-black' : 'border-[#333333]'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Output Summary Card */}
      <div className="lg:col-span-5">
        <div className="sticky top-24 p-6 sm:p-8 bg-[#0e0e0e] border border-[#242424] rounded-2xl shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#1c1c1c] mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#ff5500] flex items-center justify-center text-black font-black text-xs">
                  EL
                </div>
                <span className="text-xs font-mono uppercase text-[#71717a]">Estimated Scope</span>
              </div>
              <Badge variant="orange">Fixed-Milestone Model</Badge>
            </div>

            {/* Estimated Price Range */}
            <div className="mb-6">
              <div className="text-xs text-[#8e8e93] uppercase font-mono">Estimated Investment Range</div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#f5f5f0] mt-1">
                {formatCurrency(finalMin)} - {formatCurrency(finalMax)}
              </div>
              <p className="text-[11px] text-[#71717a] mt-1">
                Includes architecture, full-stack development, design system, and deployment.
              </p>
            </div>

            {/* Timeline Breakdown */}
            <div className="p-4 rounded-xl bg-[#141414] border border-[#1f1f1f] space-y-2 mb-6 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#8e8e93] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Target Delivery</span>
                </span>
                <span className="font-mono text-[#f5f5f0] font-semibold">{estimatedWeeks}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8e8e93] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Code Ownership</span>
                </span>
                <span className="font-mono text-[#f5f5f0]">100% Client IP</span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-1.5 mb-8 text-xs text-[#a1a1aa]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Dedicated Senior Lead Engineer & Product Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Bi-weekly deployable milestone releases</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>30 days post-launch warranty & analytics setup</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#1c1c1c]">
            <Button href="https://calendly.com/vishal-invokeiq/30min" variant="primary" size="md" className="w-full" withArrow>
              Book 30-Min Strategy Call
            </Button>
            <Button href="/contact" variant="outline" size="md" className="w-full">
              Request Custom Proposal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
