import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, CheckCircle2, Zap, Terminal, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Badge variant="orange" className="mb-3">
            Company & Entity Information
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#f5f5f0] mb-6">
            Engineered for high-velocity execution.
          </h1>
          <p className="text-lg sm:text-xl text-[#8e8e93] leading-relaxed">
            Explode Labs was founded on a simple principle: modern businesses need senior engineering and revenue architecture without agency bloat or junior handoffs.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-[#1a1a1a]">
          <Card className="p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center text-[#ff5500]">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#f5f5f0]">100% Senior Talent</h3>
            <p className="text-sm text-[#8e8e93] leading-relaxed">
              Every project is led and built by seasoned software architects, product designers, and growth engineers with 8+ years of enterprise experience.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center text-[#ff5500]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#f5f5f0]">Fixed-Price Certainty</h3>
            <p className="text-sm text-[#8e8e93] leading-relaxed">
              We eliminate scope creep and billing surprises. We scope milestones rigorously and deliver deployable production releases on agreed schedules.
            </p>
          </Card>

          <Card className="p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center text-[#ff5500]">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-[#f5f5f0]">Enterprise Compliance</h3>
            <p className="text-sm text-[#8e8e93] leading-relaxed">
              We design software architectures ready for SOC 2 Type II, HIPAA, and GDPR standards, with clean documentation and complete code ownership.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="pt-16 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#f5f5f0]">Ready to build something extraordinary?</h2>
          <p className="text-sm text-[#8e8e93] max-w-xl mx-auto">
            Book an architecture discovery session with our senior engineering leads.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary" withArrow>
              Start a Project
            </Button>
            <Button href="/architect" size="lg" variant="outline">
              AI Project Architect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
