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
  CheckCircle2, 
  ArrowRight, 
  UserCheck, 
  Laptop, 
  Mic, 
  ShoppingBag,
  Check
} from 'lucide-react';

export function MotionGraphicsExperience() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'hook',
      number: '01',
      title: 'Opening Hook & Visual Pacing',
      subtitle: 'Capturing attention within the first two seconds',
      icon: Zap,
      summary: 'Most viewers decide whether to keep watching in the first 2 seconds. We cut dead space before the opening sentence, add punchy visual zooms, dynamic text highlights, and subtle sound effects that pull the viewer in immediately.',
      details: [
        'Immediate focal zoom on the opening statement to draw the eye',
        'Removal of dead pauses, stutters, and filler words',
        'High-contrast opening motion title positioned in the safe view area',
        'Subtle sound impact aligned with the core message hook'
      ],
      technique: 'Visual snap-zoom & sound punch-in'
    },
    {
      id: 'typography',
      number: '02',
      title: 'Custom Kinetic Typography',
      subtitle: 'Brand-matched typography timed naturally to speech',
      icon: Sparkles,
      summary: 'Auto-generated captions feel generic and easily skipped. We design custom animated captions using your brand fonts and colors, with word-level highlights and clean background boxes so text remains readable on any video.',
      details: [
        'Word-by-word active color tracking matched to natural speech cadence',
        'Clean bounding boxes and contrast shadows ensuring readability on all screens',
        'Contextual graphic icons and emojis that emphasize key takeaways',
        'Positioned within platform safe zones so UI buttons never cover your text'
      ],
      technique: 'Hand-timed keyframe typography'
    },
    {
      id: 'sound',
      number: '03',
      title: 'Layered Sound Design & Foley',
      subtitle: 'Rich audio cues that bring visual animations to life',
      icon: Volume2,
      summary: 'Sound design is what makes video animations feel satisfying and dynamic. We clean up vocal audio, remove background hum, layer custom foley sound effects for on-screen motion, and balance background music so the voice stays crisp.',
      details: [
        'Vocal noise cleanup and room echo reduction for clear dialogue',
        'Subtle foley sound effects: swooshes, subtle clicks, and digital chimes',
        'Impact drops on key punchlines and riser swells before transitions',
        'Loudness balanced for mobile phone speakers and headphones'
      ],
      technique: 'Multi-track audio cleanup & mixing'
    },
    {
      id: 'overlays',
      number: '04',
      title: '2D/3D Graphic Overlays & Motion Tracking',
      subtitle: 'Turning abstract concepts into clear visual demonstrations',
      icon: Layers,
      summary: 'When explaining software, data, or frameworks, static text falls flat. We track 3D interface cards, floating metric badges, glowing arrows, and custom diagrams directly into your video space.',
      details: [
        'Perspective tracking that aligns graphics to natural camera motion',
        'Animated interface mockups for software, metrics, and workflows',
        'Clean vector badges, directional arrows, and visual callouts',
        'Replaces static screen captures with dynamic visual elements'
      ],
      technique: 'Planar tracking & 3D compositing'
    },
    {
      id: 'color',
      number: '05',
      title: 'Color Grading & Visual Polish',
      subtitle: 'Giving smartphone and camera footage a clean, rich look',
      icon: Palette,
      summary: 'Phone and webcam recordings often suffer from flat lighting, muddy shadows, or uneven skin tones. We color balance every shot in DaVinci Resolve Studio to achieve clean skin tones, healthy contrast, and a cohesive brand aesthetic.',
      details: [
        'Natural skin tone balancing and exposure correction across all takes',
        'Shot-to-shot lighting matching across different angles and scenes',
        'Contrast and saturation tuning optimized for smartphone displays',
        'Clean film-style color finish that gives video a premium look'
      ],
      technique: 'DaVinci Resolve color grading'
    }
  ];

  const personas = [
    {
      role: 'Founders, Coaches & Consultants',
      icon: UserCheck,
      tagline: 'Build authority & convert followers into clients',
      input: 'Talking-head video recorded on your phone or camera with basic lighting.',
      output: 'High-authority vertical reels with clean pacing, custom typography, brand colors, and subtle sound design.',
      keyBenefit: 'Publish consistently every week without spending time editing videos yourself.'
    },
    {
      role: 'B2B SaaS & Tech Startups',
      icon: Laptop,
      tagline: 'Turn software features into engaging product demos',
      input: 'Loom screen recordings, Figma prototypes, or product feature walkthroughs.',
      output: 'Dynamic 3D floating perspective mockups, animated cursor clicks, feature zooms, and metric callouts.',
      keyBenefit: 'Clearly explain product workflows in under 45 seconds on social channels and landing pages.'
    },
    {
      role: 'Podcasters & Creators',
      icon: Mic,
      tagline: 'Turn long-form content into viral short-form assets',
      input: 'Raw podcast recordings, YouTube episodes, or keynote speaking files.',
      output: '6 to 10 standalone vertical clips with strong visual hooks, animated captions, and full context.',
      keyBenefit: 'Maximize reach across Instagram, TikTok, and YouTube Shorts from one recording session.'
    },
    {
      role: 'E-Commerce & DTC Brands',
      icon: ShoppingBag,
      tagline: 'Produce high-converting paid social video ads',
      input: 'Raw product footage, unboxing clips, and creator UGC recordings.',
      output: 'Fast-paced, hook-heavy paid ad variations with visual pattern interrupts and clear call-to-action cards.',
      keyBenefit: 'Test multiple creative variations quickly across Meta and TikTok ad campaigns.'
    }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Starter Retainer',
      badge: '2 Videos / Week',
      popular: false,
      volume: '8 Edited Reels / Month',
      turnaround: '24–48h Delivery',
      description: 'Ideal for founders, consultants, and coaches looking for a dependable weekly content cadence.',
      features: [
        '8 fully edited vertical videos (Reels, Shorts, TikTok)',
        'Dead-air trimming and pacing adjustments',
        'Hand-timed kinetic typography & subtitles',
        'Audio cleanup & background music mixing',
        'Natural color correction and lighting balance',
        '2 revision rounds included per video',
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
      turnaround: '24–48h Priority Queue',
      description: 'Built for fast-growing brands, SaaS companies, and creators scaling multi-platform video distribution.',
      features: [
        '16 fully edited vertical videos (Reels, Shorts, TikTok)',
        'Priority editing queue and dedicated post-production team',
        'Custom 2D motion overlays, icon badges & graphic callouts',
        'Layered sound design (foley clicks, swooshes, sub-drops)',
        'DaVinci Resolve skin tone grading & color polish',
        'Horizontal 16:9 to vertical 9:16 reframing with b-roll',
        '2 revision rounds per video with timestamped review link',
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
      turnaround: '24h Delivery SLA',
      description: 'A dedicated post-production engine for daily media brands, active podcasters, and high-frequency creators.',
      features: [
        '30 fully edited vertical videos (Daily publishing schedule)',
        'Dedicated primary editor & motion graphics designer',
        'Custom brand motion design system & reusable templates',
        'Long-form podcast & webinar extraction into standalone clips',
        'Fast 24-hour turnaround SLA for timely content releases',
        'Direct project communication channel (Slack / WhatsApp)',
        'Active revisions with fast turnarounds',
        '100% commercial ownership of all master files'
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
      turnaround: '2 to 4 Weeks Delivery',
      description: 'High-impact animated product films, SaaS homepage explainers, and investor pitch videos built from scratch.',
      features: [
        'Script polish, narrative structure & visual storyboard',
        'Custom 2D vector animation or 3D UI interface modeling',
        'Cinema-grade kinetic typography & data visualization',
        'Voiceover sync & bespoke multi-track sound design',
        'Full 4K UHD master exports in 16:9 and 9:16 formats',
        'Milestone-based delivery with structured review stages',
        '100% commercial ownership of all visual assets'
      ],
      ctaText: 'Discuss Explainer Scope',
      ctaHref: '#project-intake'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Drop Your Raw Footage',
      desc: 'Upload your raw video files, screen recordings, or podcast clips to a shared Google Drive, Dropbox, or Frame.io folder. Include any specific talking points or let our team pick the best moments.'
    },
    {
      number: '02',
      title: 'Pacing & Hook Construction',
      desc: 'Our editors remove pauses, filler words, and redundant phrases. We frame the opening seconds with a clear visual hook and high-contrast title to grab attention immediately.'
    },
    {
      number: '03',
      title: 'Motion Graphics, Sound & Color',
      desc: 'We add brand-aligned kinetic captions, layer multi-track sound effects (foley, swooshes, sub-drops), track 2D/3D visual elements, and balance exposure and skin tones in DaVinci Resolve.'
    },
    {
      number: '04',
      title: 'Review & Master Handover',
      desc: 'You receive an easy review link to pause and leave timestamped notes. Once approved, you download high-bitrate 1080p/4K master files ready to publish.'
    }
  ];

  return (
    <div className="space-y-24 py-16 font-sans">
      
      {/* SECTION: RETENTION CRAFT / 5 PILLARS */}
      <div id="retention-science" className="border-t border-[#1a1a1a] pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-3">
            Post-Production Craft
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4 tracking-tight">
            The Craft Behind High-Retention Motion Edits.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal">
            Great video editing is more than just adding auto-captions. We treat motion graphics as a deliberate craft combining visual pacing, custom typography, and immersive audio design.
          </p>
        </div>

        {/* Pillar selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#181818] border-[#ff5500] shadow-lg shadow-[#ff5500]/10 text-white'
                    : 'bg-[#0c0c0c] border-[#1e1e1e] text-[#8e8e93] hover:border-[#2e2e2e] hover:text-[#f5f5f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold ${isSelected ? 'text-[#ff5500]' : 'text-[#71717a]'}`}>
                    {pillar.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#ff5500]' : 'text-[#71717a]'}`} />
                </div>
                <div className="text-xs sm:text-sm font-semibold line-clamp-1">
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        {pillars[activePillar] && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-[#222222] relative overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1c1c1c] mb-6">
              <div className="space-y-1.5">
                <div className="text-xs text-[#ff5500] font-medium flex items-center gap-2">
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
                <p className="text-sm sm:text-base text-[#c4c4c8] leading-relaxed font-normal">
                  {pillars[activePillar].summary}
                </p>
                <div className="p-4 bg-[#141414] rounded-xl border border-[#202020] text-xs text-[#a1a1aa] space-y-1">
                  <div className="text-[#ff5500] font-semibold">Standard In All Projects:</div>
                  <div>Included across all monthly retainers and custom milestone scopes.</div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-2.5">
                <div className="text-xs text-[#71717a] font-semibold mb-2">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4 tracking-tight">
            Who We Work With: Clear Input → Output Workflows.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal">
            Whether you record on your phone, host a podcast, or create software demos, we adapt our editing workflow to match your raw files and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-6 sm:p-8 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl flex flex-col justify-between hover:border-[#2e2e2e] transition-all space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-[#ff5500]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#f5f5f0]">{p.role}</h3>
                      <div className="text-xs text-[#71717a] font-normal">{p.tagline}</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#181818] text-xs">
                    <div className="p-3.5 bg-[#111111] rounded-xl border border-[#1a1a1a]">
                      <div className="text-[#71717a] font-semibold mb-1">What You Provide (Input):</div>
                      <div className="text-[#c4c4c8] leading-relaxed">{p.input}</div>
                    </div>

                    <div className="p-3.5 bg-[#161616] rounded-xl border border-[#242424]">
                      <div className="text-[#ff5500] font-semibold mb-1">What You Receive (Output):</div>
                      <div className="text-[#f5f5f0] font-medium leading-relaxed">{p.output}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#181818] flex items-center justify-between text-xs">
                  <span className="text-[#8e8e93]">{p.keyBenefit}</span>
                  <Link href="#project-intake" className="text-[#ff5500] font-semibold hover:underline flex items-center gap-1 shrink-0 ml-2">
                    <span>Scope Project</span>
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
            Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4 tracking-tight">
            How Our Production Process Works.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal">
            No endless back-and-forth meetings. A straightforward 4-step cycle built for speed, transparency, and high quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl relative flex flex-col justify-between hover:border-[#2a2a2a] transition-colors">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#2a2a2a] text-[#ff5500] font-bold text-xs flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[#f5f5f0] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#8e8e93] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#161616] text-[11px] text-[#71717a]">
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
            Transparent Retainers & Custom Scopes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4 tracking-tight">
            Predictable Video Production Packages.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal">
            No unexpected fees or confusing hourly billing. Choose a monthly short-form retainer or scope a standalone explainer animation.
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff5500] text-black text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md tracking-wide">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-lg font-bold text-[#f5f5f0]">{pkg.name}</h3>
                </div>

                <div className="text-xs text-[#ff5500] font-semibold mb-2">
                  {pkg.badge}
                </div>

                <div className="text-lg font-bold text-[#f5f5f0] mb-1">
                  {pkg.volume}
                </div>
                <div className="text-xs text-[#71717a] mb-4 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>{pkg.turnaround}</span>
                </div>

                <p className="text-xs text-[#8e8e93] leading-relaxed mb-6 font-normal">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#181818] mb-6">
                  <div className="text-[11px] uppercase text-[#71717a] font-semibold mb-2">
                    What is included:
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
                  className="w-full text-xs"
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
            Comparison
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f0] mb-4 tracking-tight">
            Explode Labs vs Alternative Options.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal">
            A practical comparison of delivery speed, creative quality, and management overhead across hiring models.
          </p>
        </div>

        <div className="overflow-x-auto border border-[#1e1e1e] rounded-2xl shadow-xl">
          <table className="w-full min-w-[640px] text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#111111] border-b border-[#1e1e1e] text-[#71717a] uppercase">
                <th className="p-4 sm:p-5 w-1/4 font-semibold">Evaluation Factor</th>
                <th className="p-4 sm:p-5 w-1/4 text-[#ff5500] font-bold bg-[#141414]">Explode Labs</th>
                <th className="p-4 sm:p-5 w-1/4 font-semibold">Traditional Agency</th>
                <th className="p-4 sm:p-5 w-1/4 font-semibold">In-House Editor Hire</th>
                <th className="p-4 sm:p-5 w-1/4 font-semibold">Marketplace Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181818]">
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Visual Pacing & Motion</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Hand-crafted hook zooms, dead-air trimming & brand typography
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">High quality, but often slow corporate editing style</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Depends entirely on individual editor skillset</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Heavy use of generic auto-caption templates</td>
              </tr>
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Sound Design Quality</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Vocal noise cleanup, custom foley sound effects, balanced music
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Good, but frequently incurs additional audio licensing fees</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Basic background track with simple volume adjustments</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Muffled voice audio and generic unlicensed tracks</td>
              </tr>
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Turnaround Reliability</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Dependable 24–48h delivery with priority queue
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">2 to 4 weeks through account managers</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Vulnerable to bottlenecks, vacations, and overload</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Unpredictable deadlines and sudden communication gaps</td>
              </tr>
              <tr className="hover:bg-[#0e0e0e] transition-colors">
                <td className="p-4 sm:p-5 font-semibold text-[#f5f5f0]">Cost & Management</td>
                <td className="p-4 sm:p-5 font-medium text-[#f5f5f0] bg-[#141414]/50 border-x border-[#1e1e1e]">
                  Predictable flat monthly retainer; adjust or pause anytime
                </td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">High minimum retainers and rigid long contracts</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">$75k+ salary, benefits, workstation, and software suites</td>
                <td className="p-4 sm:p-5 text-[#8e8e93]">Cheap per clip, but high time spent managing revisions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
