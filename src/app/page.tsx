import React from 'react';
import { Hero } from '@/components/home/Hero';
import { ClientLogoMarquee } from '@/components/home/ClientLogoMarquee';
import { TrustBadges } from '@/components/home/TrustBadges';
import { HomeLiveScanner } from '@/components/home/HomeLiveScanner';
import { HomePainPointSolver } from '@/components/home/HomePainPointSolver';
import { InteractiveDiscovery } from '@/components/home/InteractiveDiscovery';
import { SelectedWork } from '@/components/home/SelectedWork';
import { VerifiedReviews } from '@/components/home/VerifiedReviews';
import { CapabilitiesGrid } from '@/components/home/CapabilitiesGrid';
import { HomeComparison } from '@/components/home/HomeComparison';
import { ZeroRiskGuarantees } from '@/components/home/ZeroRiskGuarantees';
import { ArchitectTeaser } from '@/components/home/ArchitectTeaser';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { HomeProposalForm } from '@/components/home/HomeProposalForm';

export default function HomePage() {
  return (
    <div>
      {/* 1. Flagship Growth Hero with Direct URL Proposal Input & Proof Counters */}
      <Hero />

      {/* 2. Client Logo Reel / Brand Marquee (Immediate Peer Proof) */}
      <ClientLogoMarquee />

      {/* 3. Official Platform Partnerships & Accreditations (Institutional Trust) */}
      <TrustBadges />

      {/* 4. Interactive Live Domain & AI Citability Scanner (Instant Value Lead Magnet) */}
      <HomeLiveScanner />

      {/* 5. Problem-to-Solution Diagnostic Engine ("What is holding your growth back?") */}
      <HomePainPointSolver />

      {/* 6. Complete Growth, Creative & Web Capability Switcher */}
      <InteractiveDiscovery />

      {/* 7. Editorial Proof & Client Case Studies with High-Contrast ROI Metrics */}
      <SelectedWork />

      {/* 8. Third-Party Verified Reviews & Social Proof (Clutch / G2 4.95 Rating) */}
      <VerifiedReviews />

      {/* 9. Full Service Spectrum Matrix */}
      <CapabilitiesGrid />

      {/* 10. Why Explode Labs 4-Column Decision Enablement Table */}
      <HomeComparison />

      {/* 11. Zero-Risk Engagement Guarantees (30-Day Warranty, 100% IP Sovereignty, Mutual NDA) */}
      <ZeroRiskGuarantees />

      {/* 12. Interactive AI Project Architect Scope Teaser */}
      <ArchitectTeaser />

      {/* 13. The Explode Delivery System 4-Step Process */}
      <ProcessSteps />

      {/* 14. High-Converting 24-Hour Custom Proposal Form */}
      <HomeProposalForm />
    </div>
  );
}
