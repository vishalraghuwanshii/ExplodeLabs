'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Clock, 
  BarChart3,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';

export function HomeLiveScanner() {
  const [domain, setDomain] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanResult, setScanResult] = useState<{
    domain: string;
    aiScore: number;
    speedScore: number;
    schemaScore: number;
    overallGrade: string;
    criticalFindings: string[];
  } | null>(null);

  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    const clean = domain.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();
    setScanning(true);
    setScanResult(null);
    setScanStep(1);

    // Simulated high-fidelity 3-step diagnostic pipeline
    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1400);
    setTimeout(() => {
      setScanning(false);
      setScanResult({
        domain: clean,
        aiScore: Math.floor(Math.random() * 25) + 55, // 55-80
        speedScore: Math.floor(Math.random() * 30) + 50, // 50-80
        schemaScore: Math.floor(Math.random() * 20) + 60, // 60-80
        overallGrade: 'B-',
        criticalFindings: [
          'Missing Structured Entity Graph (Schema.org JSON-LD for AI Search engines)',
          'High INP / Layout Shift latency on mobile devices (>2.4s LCP)',
          'Zero Direct Answer definitions optimized for SearchGPT & Perplexity AI Overviews'
        ]
      });
    }, 2100);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setUnlocked(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] border-b border-[#141414] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff5500]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="orange" className="mb-3 py-1 px-3">
            <Zap className="w-3.5 h-3.5 text-[#ff5500]" />
            <span>Instant Growth Diagnostic</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
            Test your domain's AI search & conversion readiness.
          </h2>
          <p className="text-sm sm:text-base text-[#8e8e93]">
            Enter your website URL to simulate our proprietary AI Citability, Core Web Vitals, and organic conversion audit in real-time.
          </p>
        </div>

        {/* Scanner Card Container */}
        <div className="p-6 sm:p-10 bg-[#0e0e0e] border border-[#242424] rounded-2xl shadow-2xl relative">
          
          {!scanResult && !scanning && (
            <form onSubmit={handleScan} className="space-y-4 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-[#141414] border border-[#2a2a2a] focus-within:border-[#ff5500] rounded-xl transition-all">
                <div className="hidden sm:flex pl-3 pr-2 text-[#ff5500]">
                  <Globe className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  required
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter your website URL (e.g. acmebrand.com)"
                  className="w-full bg-transparent text-sm sm:text-base text-[#f5f5f0] placeholder-[#666666] outline-none px-3 py-2 text-center sm:text-left"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3 bg-[#ff5500] hover:bg-[#e04a00] text-white font-semibold text-xs sm:text-sm rounded-lg transition-all shadow-md shadow-[#ff5500]/20 cursor-pointer"
                >
                  <span>Run Live Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 text-xs text-[#71717a] font-mono pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Takes 3 Seconds</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Free & No Sign-up Needed</span>
                </span>
              </div>
            </form>
          )}

          {/* Scanning Progress State */}
          {scanning && (
            <div className="py-12 text-center space-y-6 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full border-2 border-[#ff5500] border-t-transparent animate-spin mx-auto" />
              <div>
                <div className="text-base font-bold text-[#f5f5f0] mb-1">
                  Analyzing {domain}...
                </div>
                <div className="text-xs font-mono text-[#ff5500]">
                  {scanStep === 1 && 'Querying SearchGPT, Perplexity & Claude Knowledge Graphs...'}
                  {scanStep === 2 && 'Auditing Core Web Vitals, TTFB & Mobile INP Latency...'}
                  {scanStep === 3 && 'Validating Schema.org Triples & Conversion Funnel Health...'}
                </div>
              </div>
            </div>
          )}

          {/* Scan Results Card */}
          {scanResult && !unlocked && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#202020]">
                <div>
                  <div className="text-xs font-mono text-[#71717a] uppercase mb-1">Audit Target</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#f5f5f0] flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#ff5500]" />
                    <span>{scanResult.domain}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-[#71717a]">Overall Health Grade</div>
                    <div className="text-xs font-mono text-amber-400 font-semibold">Growth Bottlenecks Detected</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xl flex items-center justify-center font-mono">
                    {scanResult.overallGrade}
                  </div>
                </div>
              </div>

              {/* Metrics Dials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#141414] border border-[#222222] rounded-xl">
                  <div className="text-xs text-[#71717a] mb-1">AI Citability (SearchGPT/Perplexity)</div>
                  <div className="text-2xl font-bold font-mono text-[#ff5500] mb-1">{scanResult.aiScore}/100</div>
                  <div className="text-[11px] text-[#8e8e93]">Missing direct answer definitions for LLM crawlers.</div>
                </div>

                <div className="p-4 bg-[#141414] border border-[#222222] rounded-xl">
                  <div className="text-xs text-[#71717a] mb-1">Core Web Vitals & Mobile Speed</div>
                  <div className="text-2xl font-bold font-mono text-amber-400 mb-1">{scanResult.speedScore}/100</div>
                  <div className="text-[11px] text-[#8e8e93]">Heavy client JavaScript causing LCP render delay.</div>
                </div>

                <div className="p-4 bg-[#141414] border border-[#222222] rounded-xl">
                  <div className="text-xs text-[#71717a] mb-1">Schema.org Entity Graph</div>
                  <div className="text-2xl font-bold font-mono text-rose-400 mb-1">{scanResult.schemaScore}/100</div>
                  <div className="text-[11px] text-[#8e8e93]">Incomplete Organization & Service structured data.</div>
                </div>
              </div>

              {/* Critical Findings */}
              <div className="p-5 bg-[#121212] border border-[#222222] rounded-xl space-y-3">
                <div className="text-xs font-mono uppercase text-[#ff5500] font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>3 Primary Conversion & Search Roadblocks Identified</span>
                </div>
                <div className="space-y-2 text-xs text-[#c4c4c8]">
                  {scanResult.criticalFindings.map((finding, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Capture Gate to Unlock Full Report */}
              <div className="p-6 bg-[#161616] border border-[#ff5500]/30 rounded-xl">
                <div className="text-center max-w-md mx-auto mb-4">
                  <h4 className="text-base font-bold text-[#f5f5f0] mb-1">
                    Unlock Full 15-Page Custom Growth & Remediation Blueprint
                  </h4>
                  <p className="text-xs text-[#8e8e93]">
                    Includes competitor teardown, exact code fixes for Core Web Vitals, and step-by-step AI search roadmap.
                  </p>
                </div>

                <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row items-center gap-2 max-w-lg mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email (e.g. you@company.com)"
                    className="w-full bg-[#0c0c0c] border border-[#2e2e2e] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-sm text-[#f5f5f0] placeholder-[#666666] outline-none"
                  />
                  <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto shrink-0 text-xs">
                    Send My Full Report
                  </Button>
                </form>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setScanResult(null)}
                  className="text-xs font-mono text-[#71717a] hover:text-[#f5f5f0] underline cursor-pointer"
                >
                  Scan another website
                </button>
              </div>
            </div>
          )}

          {/* Unlocked Confirmation State */}
          {unlocked && (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#f5f5f0]">Custom Blueprint Dispatched!</h3>
              <p className="text-xs text-[#8e8e93] max-w-md mx-auto">
                We've compiled your 15-page diagnostic report for <strong>{scanResult?.domain}</strong> and sent it to <strong>{email}</strong>. Our senior growth director will also prepare a tailored remediation proposal.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="sm" withArrow>
                  Schedule a 15-Minute Strategy Review
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
