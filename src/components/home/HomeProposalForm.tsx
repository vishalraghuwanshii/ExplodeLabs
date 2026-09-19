'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Send 
} from 'lucide-react';

export function HomeProposalForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    serviceNeed: 'AI Search & SEO',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff5500]/6 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono uppercase bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>24-Hour Custom Proposal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#f5f5f0] tracking-tight leading-tight mb-4">
            Ready to scale search traffic, video content & revenue?
          </h2>

          <p className="text-base text-[#8e8e93] max-w-2xl mx-auto font-normal">
            Tell us about your project or growth goals. Our senior strategists will analyze your domain and deliver a custom milestone roadmap within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-[#0e0e0e] border border-emerald-500/30 rounded-2xl text-center space-y-4 shadow-2xl animate-in fade-in duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#f5f5f0]">Proposal Request Received!</h3>
            <p className="text-sm text-[#8e8e93] max-w-md mx-auto">
              A senior growth strategist is reviewing your submission. Expect your customized blueprint within 24 hours.
            </p>
            <div className="pt-2">
              <Button href="/tools/seo-auditor" variant="outline" size="sm">
                Run Free Domain Audit While You Wait
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 bg-[#0d0d0d] border border-[#222222] rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#8e8e93] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full bg-[#141414] border border-[#262626] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#555555] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8e8e93] mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#141414] border border-[#262626] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#555555] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#8e8e93] mb-1">Website URL or Company</label>
                  <input
                    type="text"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://company.com"
                    className="w-full bg-[#141414] border border-[#262626] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#555555] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8e8e93] mb-1">Primary Growth Focus</label>
                  <select
                    value={formData.serviceNeed}
                    onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                    className="w-full bg-[#141414] border border-[#262626] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-sm text-[#f5f5f0] outline-none transition-colors cursor-pointer"
                  >
                    <option value="AI Search & SEO">AI Search & Programmatic SEO</option>
                    <option value="Video Editing & Creative">Video Editing, 3D & Creative</option>
                    <option value="Paid Ads & PPC">Google & Meta Paid Advertising (PPC)</option>
                    <option value="B2B Cold Outbound SDR">B2B Outbound SDR & Cold Email</option>
                    <option value="Web & E-Commerce Development">Web & Next.js Development</option>
                    <option value="AI Agents & Automation">Custom AI Agents & Workflow Automation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8e8e93] mb-1">Brief Description of Goals or Scope (Optional)</label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us what you are trying to achieve (e.g., scale organic traffic, 10 YouTube videos/mo, website redesign)..."
                  className="w-full bg-[#141414] border border-[#262626] focus:border-[#ff5500] rounded-xl p-3.5 text-sm text-[#f5f5f0] placeholder-[#555555] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-mono text-[#71717a]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>24h SLA</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Strict NDA Protected</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Zero Fixed Rate Locks</span>
                  </span>
                </div>

                <Button type="submit" size="md" variant="primary" withArrow className="w-full sm:w-auto">
                  Send Proposal Request
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
