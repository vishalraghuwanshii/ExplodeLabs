import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { ShieldCheck, Lock, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Data Protection | Explode Labs',
  description: 'Explode Labs enterprise privacy policy, data protection standards, GDPR/CCPA compliance, and confidential client data isolation.',
};

export default function PrivacyPage() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy - Explode Labs',
    url: 'https://explodelabs.com/privacy',
    description: 'Privacy Policy and Data Protection standards for Explode Labs.',
    publisher: {
      '@type': 'Organization',
      name: 'Explode Labs',
      url: 'https://explodelabs.com'
    }
  };

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={privacySchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-8">
          <Link href="/" className="hover:text-[#f5f5f0]">Home</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-12 border-b border-[#181818] mb-12">
          <Badge variant="orange">Legal & Data Governance</Badge>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0]">
            Privacy Policy & Data Security.
          </h1>
          <p className="text-sm font-mono text-[#71717a]">
            Effective Date: January 1, 2026 • Last Updated: September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-[#a1a1aa] leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
              <span>1. Commitment to Client Confidentiality & Privacy</span>
            </h2>
            <p>
              Explode Labs (&ldquo;Explode Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy, security, and confidentiality of our clients, prospective partners, and visitors to <code className="text-[#f5f5f0] font-mono">explodelabs.com</code>.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and protect information when you visit our website, use our free diagnostic tools (e.g. SEO Auditor, Project Estimator), or engage our studio for digital growth, video post-production, paid media, and web development services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">2. Information We Collect</h2>
            <p>
              We collect information strictly necessary to provide high-quality digital services and accurate scope estimates:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#8e8e93]">
              <li><strong className="text-[#f5f5f0]">Contact & Inquiry Data:</strong> Name, professional email address, company name, website URL, and project requirements submitted via contact forms or estimation tools.</li>
              <li><strong className="text-[#f5f5f0]">Technical Domain Data:</strong> Publicly available domain metadata, sitemap structure, and performance metrics when you run the Free SEO & AI Citability Auditor.</li>
              <li><strong className="text-[#f5f5f0]">Usage & Telemetry Data:</strong> Anonymized browser type, operating system, referring URL, and page engagement data via privacy-respecting analytics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">3. How We Use Your Information</h2>
            <p>
              Information collected is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#8e8e93]">
              <li>Prepare and deliver customized milestone scope proposals and architecture blueprints.</li>
              <li>Execute agreed-upon digital growth, creative production, and web engineering sprints.</li>
              <li>Maintain client communications, sprint Loom updates, and private Slack channel support.</li>
              <li>Comply with legal obligations and enforce our mutual Non-Disclosure Agreements (NDAs).</li>
            </ul>
            <p className="text-xs text-[#ff5500] font-mono font-medium">
              We never sell, rent, or monetize client data or prospective contact information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">4. Client Repository & Asset Isolation</h2>
            <p>
              When executing technical or creative projects, client assets, raw DaVinci Resolve footage, Figma design files, and private GitHub codebases are isolated in dedicated, encrypted repositories. Access is restricted strictly to senior engineers and practitioners assigned to your milestone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">5. GDPR & CCPA Compliance Rights</h2>
            <p>
              Under the European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you have the right to request access to, correction of, or permanent deletion of any personal or domain data stored by Explode Labs.
            </p>
            <p>
              To exercise these rights, email our data privacy lead directly at <a href="mailto:privacy@explodelabs.com" className="text-[#ff5500] underline font-mono">privacy@explodelabs.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">6. Contact & Legal Inquiry</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our security protocols, please reach out to:
            </p>
            <div className="p-4 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl text-xs font-mono space-y-1">
              <div className="text-[#f5f5f0] font-bold">Explode Labs Legal & Privacy Operations</div>
              <div className="text-[#8e8e93]">Founder & Principal Director: Vishal Raghuwanshi</div>
              <div className="text-[#8e8e93]">Email: legal@explodelabs.com / privacy@explodelabs.com</div>
              <div className="text-[#8e8e93]">Security RFC 9116: https://explodelabs.com/.well-known/security.txt</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
