import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, X, ArrowRight, ShieldCheck } from 'lucide-react';

export function HomeComparison() {
  const comparisonRows = [
    {
      metric: 'Delivery Model & Speed',
      explodeLabs: 'Dedicated senior pods; sprints start in <48 hours',
      traditionalAgency: 'Weeks of sales pitches & slow onboarding',
      inHouse: '3 to 6 months recruiting & ramp-up curve',
      freelancers: 'Unpredictable bandwidth & ghosting risks',
    },
    {
      metric: 'Breadth of Capabilities',
      explodeLabs: 'Full service (SEO, Video, Ads, Web, AI)',
      traditionalAgency: 'Siloed departments with heavy markups',
      inHouse: 'Limited to 1 to 2 individual skillsets',
      freelancers: 'Single specialty; no team coordination',
    },
    {
      metric: 'Pricing & Scoping Flexibility',
      explodeLabs: 'Custom milestone pricing; no rigid price walls',
      traditionalAgency: '$10k - $30k/mo minimum retainer lock-in',
      inHouse: '$120k+ base salary + benefits + software',
      freelancers: 'Hourly billing with scope creep',
    },
    {
      metric: 'Code, Asset & IP Ownership',
      explodeLabs: '100% full IP transfer & source files included',
      traditionalAgency: 'Withheld project files or licensing fees',
      inHouse: 'Internal, but single point of failure',
      freelancers: 'Disorganized repositories & missing assets',
    },
    {
      metric: 'Quality Assurance & Seniority',
      explodeLabs: 'Senior specialists only; zero junior handoffs',
      traditionalAgency: 'Pitched by executives, executed by juniors',
      inHouse: 'Dependent on internal management bandwidth',
      freelancers: 'No peer review or automated testing suites',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090909] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Explode Labs"
          title="Engineered for high-growth brands."
          description="See how our studio model eliminates the bloat of traditional agencies, the unreliability of freelancers, and the delays of hiring in-house."
        />

        <div className="overflow-x-auto border border-[#1e1e1e] rounded-2xl bg-[#0c0c0c] shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#121212] border-b border-[#1e1e1e] text-[#8e8e93] font-semibold text-xs">
                <th className="p-4 sm:p-5 w-1/4">Evaluation Criterion</th>
                <th className="p-4 sm:p-5 w-1/4 text-[#ff5500] font-bold bg-[#161616]">
                  Explode Labs
                </th>
                <th className="p-4 sm:p-5 w-1/4">Traditional Agency</th>
                <th className="p-4 sm:p-5 w-1/4">Marketplace Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#161616]">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#0f0f0f] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">
                    {row.metric}
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/60 border-x border-[#1e1e1e]">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shrink-0 mt-1.5" />
                      <span>{row.explodeLabs}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-[#8e8e93]">
                    {row.traditionalAgency}
                  </td>
                  <td className="p-4 sm:p-5 text-[#8e8e93]">
                    {row.freelancers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#0e0e0e] border border-[#1c1c1c] rounded-xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs sm:text-sm text-[#a1a1aa]">
              <span className="font-semibold text-[#f5f5f0]">Transparent Engagement:</span> Receive a comprehensive growth audit & custom scope proposal before signing any contract.
            </div>
          </div>
          <Button href="/contact" variant="primary" size="sm" withArrow className="shrink-0">
            Request Custom Proposal
          </Button>
        </div>
      </div>
    </section>
  );
}
