import React, { Suspense } from 'react';
import { AIArchitectChat } from '@/components/architect/AIArchitectChat';

export default function ArchitectPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-20 text-xs text-[#71717a]">Loading AI Project Architect...</div>}>
          <AIArchitectChat />
        </Suspense>
      </div>
    </div>
  );
}
