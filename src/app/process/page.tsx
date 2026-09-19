import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProcessSteps } from '@/components/home/ProcessSteps';

export default function ProcessPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Engineering Methodology
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-6">
            The Explode Delivery System.
          </h1>
          <p className="text-lg sm:text-xl text-[#8e8e93] leading-relaxed">
            A battle-tested 4-phase framework that transforms complex requirements into resilient, high-conversion digital software.
          </p>
        </div>

        <ProcessSteps />

        <div className="py-16 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#f5f5f0]">Start your project with architectural clarity.</h2>
          <div className="flex justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Schedule Discovery Call
            </Button>
            <Button href="/tools/project-estimator" size="lg" variant="outline">
              Calculate Cost & Scope
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
