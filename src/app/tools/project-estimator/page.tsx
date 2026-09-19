import React from 'react';
import { EstimatorCalculator } from '@/components/tools/EstimatorCalculator';
import { Badge } from '@/components/ui/Badge';
import { Calculator } from 'lucide-react';

export default function ProjectEstimatorPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" className="mb-3">
            Real-Time Scope & Budget Engine
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-4">
            Project Scope & Cost Estimator.
          </h1>
          <p className="text-base sm:text-lg text-[#8e8e93] leading-relaxed">
            Select your discipline, architecture tier, and required feature modules to calculate transparent timeline and investment benchmarks.
          </p>
        </div>

        <EstimatorCalculator />
      </div>
    </div>
  );
}
