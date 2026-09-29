'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  Zap, 
  Sparkles, 
  Layers, 
  Volume2, 
  Palette, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Film, 
  UserCheck, 
  Laptop, 
  Mic, 
  ShoppingBag,
  Sliders,
  Flame,
  Star,
  Check,
  Cpu
} from 'lucide-react';

export function MotionGraphicsExperience() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'hook',
      number: '01',
      title: 'The 2-Second Hook Pattern Interrupt',
      subtitle: 'Eliminating the scroll impulse in under 400 milliseconds',
      icon: Zap,
      summary: 'Most viewers decide whether to stay or scroll within the first 2 seconds. We eliminate dead air before the first word, calibrate subtle camera snap-zooms, dynamic text punch-ins, and spatial sound whooshes that capture visual focus instantly.',
      details: [
        'Instant focal zoom on speaker entrance to establish eye contact',
        'Elimination of throat-clearing, filler words, and awkward pauses',
        'High-contrast headline motion graphics anchored above center-frame',
        'Subtle low-frequency audio impact timed to the opening statement'
      ],
      technique: 'Visual snap-zoom + low-pass audio punch-in'
    },
    {
      id: 'typography',
      number: '02',
      title: 'Hand-Timed Kinetic Typography',
      subtitle: 'Brand-matched typography engineered for visual reading velocity',
      icon: Sparkles,
      summary: 'Generic auto-captions with yellow presets create visual fatigue. We build custom kinetic typography tailored to your exact brand fonts, featuring dynamic word-level highlighting, clean background bounding boxes, and contextual graphic badges.',
      details: [
        'Word-by-word active color tracking synchronized to speech cadence',
        'Custom bounding boxes and drop shadows ensuring 100% legibility on any footage',
        'Contextual vector icons replacing spoken nouns for dual visual cognition',
        'Carefully positioned within platform-safe zones (never hidden behind UI buttons)'
      ],
      technique: 'Frame-accurate text rigging in Adobe After Effects'
    },
    {
      id: 'sound',
      number: '03',
      title: 'Multi-Stem Foley & Sound Design',
      subtitle: 'Over 70% of video retention is driven by subconscious audio cues',
      icon: Volume2,
      summary: 'Raw footage with muffled audio or loud generic music loses viewer trust. We process audio across multiple stems: vocal isolation to eliminate background hiss, custom foley accents for on-screen animations, and loudness mastering calibrated for mobile speakers.',
      details: [
        'Dialogue restoration via spectral de-noising and vocal warmth EQ',
        'Multi-layer foley: mechanical clicks, page swooshes, and digital chimes',
        'Cinematic sub-bass drops on punchlines and risers before visual transitions',
        'Audio mastered to industry standard -14 LUFS for Reels, TikTok, and Shorts'
      ],
      technique: 'Multi-track audio mastering in Fairlight & iZotope RX'
    },
    {
      id: 'overlays',
      number: '04',
      title: '2D/3D Graphic Overlays & Motion Tracking',
      subtitle: 'Translating abstract speech into tangible visual understanding',
      icon: Layers,
      summary: 'When you explain a software feature, metric, or framework, static text is not enough. We track 3D UI cards, floating data badges, animated progress bars, and custom diagrams directly into your video space.',
      details: [
        'Screen-space 3D perspective tracking matched to camera movement',
        'Custom animated UI mockups for software, metrics, and workflows',
        'Clean vector callouts, glowing directional arrows, and highlight halos',
        'Elimination of boring static screenshots in favor of dynamic 3D elements'
      ],
      technique: 'Planar tracking & 3D camera compositing'
    },
    {
      id: 'color',
      number: '05',
      title: 'DaVinci Resolve Color & Lighting Polish',
      subtitle: 'Transforming smartphone recordings into cinematic brand assets',
      icon: Palette,
      summary: 'Smartphone and webcam footage often suffers from muddy shadows, unnatural skin tones, or harsh fluorescent lighting. We color grade every clip in DaVinci Resolve Studio to achieve clean skin tones, deep blacks, and balanced visual warmth.',
      details: [
        'Natural skin tone isolation and healthy color balancing',
        'Shot-to-shot exposure matching across multi-take recordings',
        'Contrast and saturation tuning optimized for OLED smartphone displays',
        'Film emulation tone mapping that gives raw digital video a rich, premium feel'
      ],
      technique: 'DaVinci Resolve Studio color science'
    }
  ];

  const personas = [
    {
      role: 'Founders & Coaches',
      icon: UserCheck,
      tagline: 'Establish High Authority & Convert Followers into Clients',
      input: 'Talking-head video recorded on an iPhone or mirrorless camera with basic lighting.',
      output: 'High-authority vertical reels with tight narrative cuts, kinetic typography, brand colors, and subtle sound design.',
      keyBenefit: 'Publishes 4x/week without spending a single minute inside video editing software.'
    },
    {
      role: 'B2B SaaS & Startups',
      icon: Laptop,
      tagline: 'Turn Complex Software into Visually Arresting Demos',
      input: 'Loom screen recordings, Figma prototypes, or product walkthrough videos.',
      output: 'Dynamic 3D floating perspective mockups, animated cursor clicks, feature highlights, and metric callouts.',
      keyBenefit: 'Explains complex technical workflows in under 45 seconds on LinkedIn and sales pages.'
    },
    {
      role: 'Podcasters & Creators',
      icon: Mic,
      tagline: 'Repurpose Long-Form Content into Viral Short-Form Assets',
      input: '45–60 minute raw podcast interviews, YouTube videos, or keynote recordings.',
      output: '6 to 10 standalone, high-retention vertical clips with hooks, captions, and zero loss of context.',
      keyBenefit: 'Multiplies content reach across Instagram, TikTok, and YouTube Shorts from one recording session.'
    },
    {
      role: 'E-Commerce & DTC Brands',
      icon: ShoppingBag,
      tagline: 'Scale High-ROAS Paid Social Video Creatives',
      input: 'Raw unboxing clips, creator UGC, and product b-roll footage.',
      output: 'Fast-paced, hook-heavy paid ad variations with visual pattern interrupts, price tags, and urgent CTA cards.',
      keyBenefit: 'Rapidly tests creative variations across Meta and TikTok ad campaigns.'
    }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Starter Retainer',
      badge: '2 Videos / Week',
      popular: false,
      volume: '8 Edited Reels / Month',
      turnaround: '24–48h SLA per batch',
      description: 'Ideal for founders, consultants, and coaches establishing a dependable weekly content cadence.',
      features: [
        '8 fully edited 9:16 vertical videos (Reels, TikTok, Shorts)',
        'Narrative dead-air and filler-word trimming',
        'Hand-timed kinetic typography & subtitles',
        'Clean background music ducking & audio leveling',
        'Natural skin tone color correction',
        '2 rounds of revisions per video',
        '100% commercial ownership of all rendered masters'
      ],
      ctaText: 'Start Starter Project',
      ctaHref: '#project-intake'
    },
    {
      id: 'growth',
      name: 'Growth Retainer',
      badge: 'Most Popular • 4 Videos / Week',
      popular: true,
      volume: '16 Edited Reels / Month',
      turnaround: '24–48h SLA Priority Queue',
      description: 'Engineered for fast-growing brands, SaaS companies, and creators scaling multi-channel short-form distribution.',
      features: [
        '16 fully edited 9:16 vertical videos (Reels, TikTok, Shorts)',
        'Priority editing queue & dedicated post-production team',
        'Custom 2D motion overlays, icon badges & graphic callouts',
        'Multi-stem sound design (foley clicks, swooshes, sub-bass drops)',
        'Advanced DaVinci Resolve color grading & skin tone balancing',
        'Horizontal 16:9 to vertical 9:16 reframing & b-roll insertion',
        '2 rounds of revisions per video with frame-accurate review link',
        '100% commercial ownership of all rendered masters'
      ],
      ctaText: 'Start Growth Project',
      ctaHref: '#project-intake'
    },
    {
      id: 'scale',
      name: 'Scale Retainer',
      badge: 'Daily Publishing • 7 Videos / Week',
      popular: false,
      volume: '30 Edited Reels / Month',
      turnaround: '24h Expedited SLA',
      description: 'A full-scale post-production engine for daily media brands, active podcasters, and high-frequency creators.',
      features: [
        '30 fully edited 9:16 vertical videos (Daily publishing schedule)',
        'Dedicated primary video editor & motion graphics specialist',
        'Custom brand motion graphics design system & reusable assets',
        'Long-form podcast & webinar extraction into standalone reels',
        'Fast 24-hour turnaround SLA for timely content releases',
        'Direct project management channel (Slack / WhatsApp / Frame.io)',
        'Active revisions with fast turnarounds',
        '100% commercial ownership of all master files & project packages'
      ],
      ctaText: 'Start Scale Project',
      ctaHref: '#project-intake'
    },
    {
      id: 'explainer',
      name: 'Bespoke 2D/3D Explainer',
      badge: 'Custom Milestone Scope',
      popular: false,
      volume: '30s – 90s Standalone Video',
      turnaround: '2 to 4 Weeks Milestone',
      description: 'High-impact animated product films, SaaS homepage explainers, and investor pitch videos built from scratch.',
      features: [
        'Complete script review, narrative polish & visual storyboard',
        'Custom 2D vector animation or 3D UI interface modeling',
        'Cinema-grade kinetic typography & kinetic data visualization',
        'Professional voiceover sync & bespoke multi-track sound design',
        'Full 4K UHD masters in 16:9 widescreen and 9:16 vertical formats',
        'Milestone-based delivery with structured review checkpoints',
        '100% commercial ownership of all visual assets and final renders'
      ],
      ctaText: 'Discuss Explainer Scope',
      ctaHref: '#project-intake'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Drop Your Raw Footage',
      desc: 'Upload your raw video files, screen recordings, or podcast clips to a shared Google Drive, Dropbox, or Frame.io folder. Include any specific talking points or let our team identify the strongest hooks.'
    },
    {
      number: '02',
      title: 'Narrative Pacing & Hook Construction',
      desc: 'Our editors cut out dead air, stutters, and redundant phrases. We frame the first 2 seconds with an intentional visual punch-in and high-contrast hook typography to capture instant attention.'
    },
    {
      number: '03',
      title: 'Motion Graphics, Sound Design & Color',
      desc: 'We add brand-aligned kinetic captions, layer multi-stem sound effects (foley, swooshes, sub-drops), track 2D/3D visual elements, and balance exposure and skin tones in DaVinci Resolve.'
    },
    {
      number: '04',
      title: 'Frame-Accurate Review & Master Handover',
      desc: 'You receive an interactive review link to pause and leave timestamped notes. Once approved, you download high-bitrate 1080p/4K master files formatted and ready for instant publishing.'
    }
  ];

  return (
    <div className="space-y-24 py-16">
      
      {/* SECTION: RETENTION SCIENCE / 5 PILLARS */}
      <div id="retention-science" className="border-t border-[#1a1a1a] pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-3">
            Post-Production Craft
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4">
            The Anatomy of a High-Retention Motion Edit.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            Amateur video editing relies on generic auto-caption templates. At Explode Labs, we treat motion graphics as an engineering discipline calibrated around human visual psychology and auditory pacing.
          </p>
        </div>

        {/* Pillar selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181818] border-[#ff5500] shadow-lg shadow-[#ff5500]/10 text-white'
                    : 'bg-[#0c0c0c] border-[#1e1e1e] text-[#8e8e93] hover:border-[#2e2e2e] hover:text-[#f5f5f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#ff5500]' : 'text-[#71717a]'}`}>
                    {pillar.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#ff5500]' : 'text-[#71717a]'}`} />
                </div>
                <div className="text-xs sm:text-sm font-semibold line-clamp-1">
                  {pillar.title.split(' ')[0]} {pillar.title.split(' ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        {pillars[activePillar] && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-[#222222] relative overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1c1c1c] mb-6">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-[#ff5500] font-semibold flex items-center gap-2">
                  <span>Pillar {pillars[activePillar].number}</span>
                  <span>•</span>
                  <span>{pillars[activePillar].technique}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f5f0]">
                  {pillars[activePillar].title}
                </h3>
                <p className="text-sm text-[#8e8e93]">
                  {pillars[activePillar].subtitle}
                </p>
              </div>

              <div className="shrink-0">
                <Button href="#project-intake" size="sm" variant="primary" withArrow>
                  Start a Project
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <p className="text-sm sm:text-base text-[#c4c4c8] leading-relaxed">
                  {pillars[activePillar].summary}
                </p>
                <div className="p-4 bg-[#141414] rounded-xl border border-[#202020] text-xs font-mono text-[#a1a1aa] space-y-1">
                  <div className="text-[#ff5500] font-bold">Standard Execution:</div>
                  <div>Applied across all monthly retainers and standalone project milestones.</div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="text-xs font-mono uppercase text-[#71717a] font-semibold mb-2">
                  Key Post-Production Techniques
                </div>
                {pillars[activePillar].details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#080808] rounded-lg border border-[#1a1a1a]">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#e4e4e7] leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECTION: WHO WE BUILD FOR (CUSTOMER TRANSFORMATION) */}
      <div id="target-audiences" className="border-t border-[#1a1a1a] pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-3">
            Tailored Post-Production
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4">
            Who We Build For: Clear Input → Output Workflows.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            Whether you are an individual consultant recording on your phone or a software company showcasing enterprise product workflows, we tailor our post-production pipeline to your format.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-6 sm:p-8 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl flex flex-col justify-between hover:border-[#2e2e2e] transition-all space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-[#ff5500]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#f5f5f0]">{p.role}</h3>
                      <div className="text-xs text-[#71717a] font-medium">{p.tagline}</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#181818] text-xs">
                    <div className="p-3 bg-[#111111] rounded-xl border border-[#1a1a1a]">
                      <div className="text-[#71717a] font-mono uppercase font-semibold mb-1">What You Provide (Input):</div>
                      <div className="text-[#c4c4c8] leading-relaxed">{p.input}</div>
                    </div>

                    <div className="p-3 bg-[#161616] rounded-xl border border-[#242424]">
                      <div className="text-[#ff5500] font-mono uppercase font-semibold mb-1">What You Receive (Output):</div>
                      <div className="text-[#f5f5f0] font-medium leading-relaxed">{p.output}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-xs">
                  <span className="text-[#8e8e93] font-mono">{p.keyBenefit}</span>
                  <Link href="#project-intake" className="text-[#ff5500] font-semibold hover:underline flex items-center gap-1 shrink-0 ml-2">
                    <span>Scope Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION: 4-STEP PRODUCTION WORKFLOW */}
      <div id="how-it-works" className="border-t border-[#1a1a1a] pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-3">
            Frictionless Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4">
            How Explode Labs Delivers Finished Video.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            Zero endless meetings or micromanagement. A straightforward 4-step production cycle built for speed, transparency, and creative precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl relative flex flex-col justify-between hover:border-[#2a2a2a] transition-colors">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#2a2a2a] text-[#ff5500] font-mono font-bold text-xs flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[#f5f5f0] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8e8e93] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#161616] text-[11px] font-mono text-[#71717a]">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: PRICING & PRODUCTION PACKAGES */}
      <div id="pricing-packages" className="border-t border-[#1a1a1a] pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-3">
            Transparent Retainers & Milestone Scopes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4">
            Predictable Video Production Retainers.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            No surprise invoices or hourly billing. Choose a monthly short-form publishing retainer or scope a bespoke standalone explainer project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all relative ${
                pkg.popular
                  ? 'bg-[#101010] border-2 border-[#ff5500] shadow-2xl shadow-[#ff5500]/10'
                  : 'bg-[#0c0c0c] border border-[#1e1e1e] hover:border-[#2a2a2a]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff5500] text-black text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#f5f5f0]">{pkg.name}</h3>
                </div>

                <div className="text-xs font-mono text-[#ff5500] font-semibold mb-2">
                  {pkg.badge}
                </div>

                <div className="text-xl font-bold font-mono text-[#f5f5f0] mb-1">
                  {pkg.volume}
                </div>
                <div className="text-xs font-mono text-[#71717a] mb-4 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>{pkg.turnaround}</span>
                </div>

                <p className="text-xs text-[#8e8e93] leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#181818] mb-6">
                  <div className="text-[11px] font-mono uppercase text-[#71717a] font-semibold mb-2">
                    What Is Included:
                  </div>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#c4c4c8] leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#181818]">
                <Button
                  href={pkg.ctaHref}
                  variant={pkg.popular ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full"
                  withArrow
                >
                  {pkg.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: QUALITATIVE COMPARISON */}
      <div id="comparison-analysis" className="border-t border-[#1a1a1a] pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-3">
            Clear Evaluation
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4">
            Explode Labs vs Alternative Editing Models.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
            An honest comparison of delivery speed, post-production craft, and management overhead across hiring models.
          </p>
        </div>

        <div className="overflow-x-auto border border-[#1e1e1e] rounded-2xl shadow-xl">
          <table className="w-full min-w-[640px] text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#111111] border-b border-[#1e1e1e] text-[#71717a] font-mono uppercase">
                <th className="p-4 sm:p-5 w-1/4">Evaluation Metric</th>
                <th className="p-4 sm:p-5 w-1/4 text-[#ff5500] font-bold bg-[#141414]">Explode Labs</th>
                <th className="p-4 sm:p-5 w-1/4">Traditional Agency</th>
                <th className="p-4 sm:p-5 w-1/4">In-House Hire</th>
                <th className="p-4 sm:p-5 w-1/4">Marketplace Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181818]">
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Pacing & Hook Craft</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Hand-calibrated hook zooms, dead-air trimming & dynamic typography
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">High quality, but often slow corporate editing style</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Depends on single editor skillset and stamina</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Generic auto-caption presets and template cuts</td>
              </tr>
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Sound Design Quality</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Multi-stem vocal isolation, foley cues, and mastered to -14 LUFS
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Good, but frequently incurs additional audio licensing fees</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Basic background track with simple volume ducking</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Muffled voice audio and generic unlicensed music</td>
              </tr>
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Turnaround Consistency</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Dependable 24–48h SLA per batch with priority queue
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">2 to 4 weeks through account managers</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Vulnerable to bottlenecks, PTO, and workload spikes</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Unpredictable deadlines and sudden project ghosting</td>
              </tr>
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Cost & Overhead</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Predictable flat monthly retainer; scale up or pause anytime
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">High 5-figure minimum retainers and rigid contracts</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">$75k+ salary, benefits, workstation, and software suites</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Cheap per-clip, but high time spent managing revisions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
