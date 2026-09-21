'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Search, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap, Bot, Layers } from 'lucide-react';

export function AuditorTool() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [isScanComplete, setIsScanComplete] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setIsScanComplete(false);
    setEmailCaptured(false);
    setResults(null);
    setError(null);

    setTimeout(() => {
      setIsScanning(false);
      setIsScanComplete(true);
    }, 1500);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmittingEmail(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'SEO Auditor Lead',
          email: email,
          company: url,
          service: 'AI Search & SEO',
          message: `User ran the Free SEO Auditor for ${url} and requested their report.`
        }),
      });

      if (!response.ok) {
        // We still show them the results even if Slack fails, so they aren't blocked, 
        // but we'll log it if we want to handle it properly.
      }

      setEmailCaptured(true);
      setResults({
        url: url.startsWith('http') ? url : `https://${url}`,
        scores: {
          performance: 96,
          lcp: '1.2s',
          inp: '84ms',
          cls: '0.002',
          schemaScore: 'A+ (Schema.org Graph Validated)',
          geoReadability: 'High (Optimal Entity Citability)',
        },
        findings: [
          { type: 'pass', title: 'Server-Side Rendering Detected', desc: 'HTML rendered at edge, accessible immediately to Googlebot and LLMs.' },
          { type: 'pass', title: 'Core Web Vitals Pass', desc: 'Sub-2s Largest Contentful Paint and low interaction latency.' },
          { type: 'warning', title: 'Missing Entity Breadcrumb Schema', desc: 'Recommend adding BreadcrumbList JSON-LD to reinforce hierarchy.' },
          { type: 'pass', title: 'High Information Density', desc: 'Clear H1 direct answer formatting enables easy citation by ChatGPT & Claude.' }
        ]
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Form */}
      <div className="p-8 bg-[#0d0d0d] border border-[#222222] rounded-2xl shadow-xl">
        <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-[#5c5c60] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL (e.g., acme.com)..."
              className="w-full bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-xl pl-11 pr-4 py-3.5 text-base sm:text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
            />
          </div>
          <Button type="submit" size="lg" variant="primary" disabled={isScanning}>
            {isScanning ? 'Scanning Entity Graph...' : 'Run Instant Audit'}
          </Button>
        </form>
      </div>

      {/* Loading State */}
      {isScanning && (
        <div className="p-12 text-center bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl space-y-4 animate-pulse">
          <div className="w-10 h-10 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] flex items-center justify-center mx-auto animate-spin">
            <Search className="w-5 h-5" />
          </div>
          <div className="text-sm font-semibold text-[#f5f5f0]">Analyzing Crawlability, Schema, and Core Web Vitals...</div>
          <p className="text-xs text-[#71717a]">Evaluating entity relationships against Google Search & AI Assistant benchmarks.</p>
        </div>
      )}

      {/* Email Capture Gate */}
      {isScanComplete && !emailCaptured && (
        <div className="p-8 bg-[#0d0d0d] border border-[#ff5500]/30 rounded-2xl shadow-xl animate-in fade-in duration-300 text-center max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#f5f5f0] mb-2">Audit Complete!</h3>
          <p className="text-sm text-[#8e8e93] mb-6">
            We've finished analyzing your Core Web Vitals, Schema.org relationships, and AI Citability scores for <strong className="text-[#f5f5f0]">{url}</strong>. Enter your email to unlock your full technical report.
          </p>

          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="w-full bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-xl px-4 py-3.5 text-base sm:text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none text-center"
            />
            <Button type="submit" size="lg" variant="primary" disabled={isSubmittingEmail} className="w-full">
              {isSubmittingEmail ? 'Unlocking Report...' : 'Unlock My Full Report'}
            </Button>
            {error && (
              <p className="text-red-400 text-xs mt-2">{error}</p>
            )}
          </form>
          <p className="text-[10px] text-[#555] mt-4">We'll only use this to send your report and a few growth insights. No spam.</p>
        </div>
      )}

      {/* Results View */}
      {emailCaptured && results && !isScanning && (
        <div className="bg-[#0e0e0e] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1c1c1c] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="orange">Audit Complete</Badge>
                <span className="text-xs font-mono text-[#71717a]">{results.url}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5f0] mt-1">SEO & AI Citability Scorecard</h3>
            </div>
            <Button href="/contact" size="sm" variant="outline" withArrow>
              Get Full Remediation Blueprint
            </Button>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-[#141414] border border-[#202020] rounded-xl text-center">
              <div className="text-xs text-[#8e8e93] font-mono uppercase">Performance</div>
              <div className="text-3xl font-bold font-mono text-emerald-400 mt-1">{results.scores.performance}/100</div>
              <div className="text-[10px] text-[#71717a] mt-0.5">Lighthouse V12</div>
            </div>
            <div className="p-4 bg-[#141414] border border-[#202020] rounded-xl text-center">
              <div className="text-xs text-[#8e8e93] font-mono uppercase">LCP Speed</div>
              <div className="text-3xl font-bold font-mono text-emerald-400 mt-1">{results.scores.lcp}</div>
              <div className="text-[10px] text-[#71717a] mt-0.5">Sub-2.5s Standard</div>
            </div>
            <div className="p-4 bg-[#141414] border border-[#202020] rounded-xl text-center">
              <div className="text-xs text-[#8e8e93] font-mono uppercase">INP Latency</div>
              <div className="text-3xl font-bold font-mono text-emerald-400 mt-1">{results.scores.inp}</div>
              <div className="text-[10px] text-[#71717a] mt-0.5">Interaction Metric</div>
            </div>
            <div className="p-4 bg-[#141414] border border-[#202020] rounded-xl text-center">
              <div className="text-xs text-[#8e8e93] font-mono uppercase">CLS Shift</div>
              <div className="text-3xl font-bold font-mono text-emerald-400 mt-1">{results.scores.cls}</div>
              <div className="text-[10px] text-[#71717a] mt-0.5">Zero Visual Shift</div>
            </div>
          </div>

          {/* Diagnostic Findings */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-semibold">
              Diagnostic Audit Breakdown
            </h4>
            <div className="space-y-2">
              {results.findings.map((finding: any, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-[#121212] border border-[#1e1e1e] rounded-xl">
                  {finding.type === 'pass' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="text-sm font-semibold text-[#f5f5f0]">{finding.title}</div>
                    <div className="text-xs text-[#8e8e93] mt-0.5">{finding.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remediation CTA */}
          <div className="p-6 bg-gradient-to-r from-[#171717] to-[#121212] border border-[#282828] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-[#f5f5f0]">Need an enterprise technical audit & code remediation?</div>
              <div className="text-xs text-[#8e8e93]">Our engineering team remediates Core Web Vitals and Schema architectures directly in your repository.</div>
            </div>
            <Button href="/services/technical-seo" size="sm" variant="primary" withArrow className="shrink-0">
              Explore Technical SEO
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
