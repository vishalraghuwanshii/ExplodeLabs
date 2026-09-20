import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals and current setup to create a clear project plan before we start working.'
    },
    {
      num: '02',
      title: 'Architecture & Design',
      description: 'We design the visual interface and technical foundation so you know exactly how the final product will look and work.'
    },
    {
      num: '03',
      title: 'Development & Delivery',
      description: 'We build your project in phases, sharing progress every two weeks so you can test features and provide feedback.'
    },
    {
      num: '04',
      title: 'Launch & Growth',
      description: 'We launch your project safely and begin ongoing marketing, SEO, and automation to start driving immediate results.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#080808] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How We Work Together"
          title="No guesswork. No juniors."
          description="We rely on strict scopes, experienced specialists, and transparent milestones so you know exactly what is happening at every stage of the project."
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
