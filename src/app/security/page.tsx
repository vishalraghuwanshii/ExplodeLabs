import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Terminal, 
  Server, 
  Key, 
  FileCheck,
  AlertTriangle
} from 'lucide-react';

export const metadata = {
  title: 'Enterprise Security & Compliance Standards | Explode Labs',
  description: 'Enterprise security architecture, SOC 2 Type II readiness, HIPAA data encryption, and RFC 9116 vulnerability disclosure protocols for Explode Labs.',
};

export default function SecurityPage() {
  const securitySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enterprise Security & Compliance Standards - Explode Labs',
    url: 'https://explodelabs.com/security',
    description: 'Security architecture, data encryption standards, and compliance policies of Explode Labs.',
    publisher: {
      '@type': 'Organization',
      name: 'Explode Labs',
      url: 'https://explodelabs.com'
    }
  };

  const securityPillars = [
    {
      icon: Lock,
      title: 'Data Encryption in Transit & Rest',
      desc: 'All communications, API endpoints, and web applications utilize TLS 1.3 encryption with strict HSTS headers. Database storage leverages AES-256 encryption at rest with Row-Level Security (RLS).'
    },
    {
      icon: ShieldCheck,
      title: 'SOC 2 Type II & HIPAA Readiness',
      desc: 'Our engineering pods adhere to strict access controls, multi-factor authentication (MFA), least-privilege IAM policies, and comprehensive audit log trails for regulatory audits.'
    },
    {
      icon: Server,
      title: 'Isolated Client Repositories',
      desc: 'Client source code, raw DaVinci video footage, and proprietary campaign datasets are strictly isolated within dedicated private GitHub organizations and encrypted cloud storage.'
    },
    {
      icon: Key,
      title: 'Zero Hardcoded Secrets & CI/CD Audits',
      desc: 'Automated static code analysis and dependency vulnerability scanners (e.g. Snyk, Dependabot) run on every pull request to ensure zero exposed API keys or known CVEs.'
    }
  ];

  return (
    <div className="py-12 sm:py-20">
      <JsonLd schema={securitySchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-8">
          <Link href="/" className="hover:text-[#f5f5f0]">Home</Link>
          <span>/</span>
          <span className="text-[#f5f5f0]">Security Standards</span>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-12 border-b border-[#181818] mb-12">
          <Badge variant="orange">Enterprise Trust & Compliance</Badge>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0]">
            Enterprise Security & Governance Architecture.
          </h1>
          <p className="text-sm font-mono text-[#71717a]">
            Standard: SOC 2 Type II Ready • HIPAA Compliant • RFC 9116 Verified
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 border-b border-[#181818]">
          {securityPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-xl space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-[#ff5500]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#f5f5f0]">{p.title}</h3>
                <p className="text-xs text-[#8e8e93] leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Compliance Policies */}
        <div className="pt-12 space-y-10 text-sm text-[#a1a1aa] leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">1. Access Control & Pod Security</h2>
            <p>
              Explode Labs enforces the Principle of Least Privilege (PoLP). Team members are granted access strictly to the specific client repositories and campaign assets required for their active sprint milestone. Access is instantly revoked upon milestone signoff and transfer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">2. Penetration Testing & Vulnerability Management</h2>
            <p>
              All production web applications, headless commerce systems, and SaaS architectures built by Explode Labs undergo automated OWASP Top 10 vulnerability assessments, dependency audits, and edge firewall configuration (Cloudflare / AWS WAF).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">3. Responsible Vulnerability Disclosure (RFC 9116)</h2>
            <p>
              We maintain an open and responsible security disclosure policy in compliance with RFC 9116. Security researchers and partners may review our public security policy at <code className="text-[#f5f5f0] font-mono">https://explodelabs.com/.well-known/security.txt</code>.
            </p>
            <p>
              To report any potential security vulnerability, email our security engineering team directly at <a href="mailto:security@explodelabs.com" className="text-[#ff5500] underline font-mono">security@explodelabs.com</a>. We acknowledge all reports within 24 hours.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#f5f5f0]">4. Contact & Compliance Verification</h2>
            <div className="p-4 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl text-xs font-mono space-y-1">
              <div className="text-[#f5f5f0] font-bold">Explode Labs Security Operations Center</div>
              <div className="text-[#8e8e93]">Lead: Vishal Raghuwanshi</div>
              <div className="text-[#8e8e93]">Email: security@explodelabs.com</div>
              <div className="text-[#8e8e93]">PGP / Security Policy: /.well-known/security.txt</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
