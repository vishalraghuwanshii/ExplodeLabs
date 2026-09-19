import React from 'react';
import { Hero } from '@/components/home/Hero';
import { HomeLiveScanner } from '@/components/home/HomeLiveScanner';
import { HomePainPointSolver } from '@/components/home/HomePainPointSolver';
import { InteractiveDiscovery } from '@/components/home/InteractiveDiscovery';
import { SelectedWork } from '@/components/home/SelectedWork';
import { CapabilitiesGrid } from '@/components/home/CapabilitiesGrid';
import { HomeComparison } from '@/components/home/HomeComparison';
import { ArchitectTeaser } from '@/components/home/ArchitectTeaser';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { HomeProposalForm } from '@/components/home/HomeProposalForm';

export default function HomePage() {
  return (
    <div>
      {/* 1. Flagship Growth Hero with Direct URL Proposal Input & Proof Counters */}
      <Hero />

      {/* 2. Interactive Live Domain & AI Citability Scanner (Instant Value Lead Magnet) */}
      <HomeLiveScanner />

      {/* 3. Problem-to-Solution Diagnostic Engine ("What is holding your growth back?") */}
      <HomePainPointSolver />

      {/* 4. Complete 5-Pillar Growth & Creative Capability Switcher */}
      <InteractiveDiscovery />

      {/* 5. Editorial Proof & Client Case Studies with High-Contrast ROI Metrics */}
      <SelectedWork />

      {/* 6. Full Service Spectrum Matrix */}
      <CapabilitiesGrid />

      {/* 7. Why Explode Labs 4-Column Decision Enablement Table */}
      <HomeComparison />

      {/* 8. Interactive AI Project Architect Scope Teaser */}
      <ArchitectTeaser />

      {/* 9. The Explode Delivery System 4-Step Process */}
      <ProcessSteps />

      {/* 10. High-Converting 24-Hour Custom Proposal Form */}
      <HomeProposalForm />
    </div>
  );
}
