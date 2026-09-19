import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & System Modeling',
      description: 'We audit business bottlenecks, state architecture, and user workflows to produce a rigorous engineering blueprint before writing code.'
    },
    {
      num: '02',
      title: 'Precision Architecture Sprint',
      description: 'Senior architects design database schemas (Postgres with RLS), API contracts, Figma design tokens, and infrastructure as code.'
    },
    {
      num: '03',
      title: 'Continuous Milestone Delivery',
      description: 'Bi-weekly deployable production releases with automated CI/CD smoke testing, performance benchmarking, and zero fluff.'
    },
    {
      num: '04',
      title: 'Autonomous Scale & Growth',
      description: 'Production hardening, high-intent SEO/paid acquisition activation, and ongoing workflow automation monitoring.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#080808] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Explode Delivery System"
          title="Predictable, senior-led execution."
          description="How we eliminate engineering risk, prevent scope creep, and deliver enterprise-grade velocity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="p-6 bg-[#0c0c0c] border border-[#1c1c1c] rounded-xl relative group hover:border-[#333333] transition-colors">
              <div className="text-2xl font-bold text-[#ff5500] mb-3">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-[#f5f5f0] mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
