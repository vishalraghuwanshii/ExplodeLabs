import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function ClientLogoMarquee() {
  const clientBrands = [
    { name: 'HYPERSCALE SYSTEMS', category: 'Enterprise SaaS', metric: '$3.2M ARR Rebuilt' },
    { name: 'LUMINA INTELLIGENCE', category: 'AI Research & RAG', metric: '99.8% Accuracy' },
    { name: 'KICKSVAULT D2C', category: 'Shopify Plus / Streetwear', metric: '5.4x ROAS Scaled' },
    { name: 'NOVUS WEALTHTECH', category: 'FinTech Banking', metric: '<80ms Ledger Latency' },
    { name: 'APEX HEALTHCARE', category: 'Telehealth Platform', metric: '100% HIPAA Pass' },
    { name: 'OMNIFLOW FREIGHT', category: 'Supply Chain AI', metric: '14,000 Hrs Saved' },
    { name: 'AURA SPATIAL XR', category: '3D CGI Hardware', metric: '120k Pre-orders' },
    { name: 'STRATA CLOUD SEC', category: 'DevOps & Kubernetes', metric: 'Zero CVE Audited' },
  ];

  return (
    <section className="py-10 bg-[#070707] border-b border-[#141414] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs font-mono uppercase tracking-widest text-[#71717a]">
            Trusted by Venture-Backed Startups, D2C Scaleups & Modern Enterprises
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#8e8e93]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-[11px]">$35M+ Client Pipeline Driven</span>
          </div>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 items-center flex-nowrap animate-marquee">
          {/* First run */}
          {clientBrands.concat(clientBrands).map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-6 py-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl flex items-center gap-4 hover:border-[#333333] transition-colors group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#ff5500]/60 group-hover:bg-[#ff5500] transition-colors" />
              <div>
                <div className="text-xs font-bold tracking-wider text-[#e4e4e7] group-hover:text-white transition-colors font-mono">
                  {client.name}
                </div>
                <div className="text-[10px] text-[#71717a] flex items-center gap-2 mt-0.5 font-mono">
                  <span>{client.category}</span>
                  <span>•</span>
                  <span className="text-[#a1a1aa]">{client.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
