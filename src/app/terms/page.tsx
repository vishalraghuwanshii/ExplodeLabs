import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { FileText, Lock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service & Engagement Standards | Explode Labs',
  description: 'Terms of service, milestone delivery agreements, IP ownership transfer, and client warranties for Explode Labs engagements.',
};

export default function TermsPage() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service - Explode Labs',
    url: 'https://explodelabs.com/terms',
    description: 'Terms of Service and commercial engagement standards for Explode Labs.',
    publisher: {
      '@type': 'Organization',
      name: 'Explode Labs',
      url: 'https://explodelabs.com'
    }
  };

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={termsSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-8">
          <Link href="/" className="hover:text-[#f5f5f0]">Home</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">Terms of Service</span>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-12 border-b border-[#181818] mb-12">
          <Badge variant="orange">Commercial Terms & Governance</Badge>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0]">
            Terms of Service & Studio Agreement.
          </h1>
          <p className="text-sm font-mono text-[#71717a]">
            Effective Date: January 1, 2026 • Last Updated: September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-[#a1a1aa] leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#ff5500]" />
              <span>1. Agreement & Engagement Model</span>
            </h2>
            <p>
              By accessing <code className="text-[#f5f5f0] font-mono">explodelabs.com</code>, utilizing our diagnostic tools, or entering into a Statement of Work (SOW) with Explode Labs, you agree to these Terms of Service.
            </p>
            <p>
              Explode Labs operates under an agile milestone sprint model. Every project engagement is defined by a written scope document outlining specific deliverables, milestone release criteria, and delivery timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">2. Intellectual Property & Source Sovereignty</h2>
            <p>
              We believe in 100% client sovereignty over creative and technical assets:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[#8e8e93]">
              <li><strong className="text-[#f5f5f0]">Full Transfer on Completion:</strong> Upon receipt of milestone payment, all intellectual property rights, custom source code, DaVinci Resolve project files, 4K video exports, Figma tokens, and ad creative are irrevocably transferred to the client.</li>
              <li><strong className="text-[#f5f5f0]">No Vendor Lock-In:</strong> Explode Labs builds on open-standard technologies (Next.js, Tailwind, standard DaVinci codecs, clean Git repositories) with zero proprietary licensing lock-in.</li>
              <li><strong className="text-[#f5f5f0]">Pre-Existing Frameworks:</strong> Any open-source libraries (MIT/Apache 2.0) utilized remain subject to their respective open-source licenses.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">3. Confidentiality & Non-Disclosure Agreements (NDAs)</h2>
            <p>
              Both parties agree to hold all proprietary trade secrets, unreleased software features, customer datasets, and marketing campaign telemetry in strict confidence. We routinely execute mutual NDAs prior to accessing client codebases or ad accounts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">4. Milestone Pricing & Payment Terms</h2>
            <p>
              All projects are scoped on a fixed-milestone or monthly retainer schedule:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#8e8e93]">
              <li>Milestones are invoiced and payable upon completion and approval of agreed-upon deliverables.</li>
              <li>There are zero hidden retainer fees, scope-creep charges, or unexpected billable hours.</li>
              <li>Additional feature requests outside the original SOW are scoped as separate, transparent sprint addendums.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">5. 30-Day Post-Launch Technical & Growth Warranty</h2>
            <p>
              Explode Labs provides a built-in 30-day post-launch warranty on all custom web engineering, video delivery, and campaign setups. During this period, any technical bugs, redirect discrepancies, or telemetry tracking errors will be resolved immediately at zero additional cost via private Slack support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">6. Limitation of Liability & Warranties</h2>
            <p>
              Services are provided with senior-level commercial diligence. While we engineer systems according to best practices (e.g. 100/100 Core Web Vitals, ACES color pipelines, White-Hat SEO), we do not guarantee specific algorithmic placement or third-party ad platform policy shifts outside our direct control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">7. Inquiries & Legal Notices</h2>
            <p>
              Legal inquiries and contract notices should be directed to:
            </p>
            <div className="p-4 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl text-xs font-mono space-y-1">
              <div className="text-[#f5f5f0] font-bold">Explode Labs Legal Affairs</div>
              <div className="text-[#8e8e93]">Principal Director: Vishal Raghuwanshi</div>
              <div className="text-[#8e8e93]">Email: legal@explodelabs.com</div>
              <div className="text-[#8e8e93]">Website: https://explodelabs.com</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
