'use client';

import React from 'react';
import { PortfolioItem } from '@/data/portfolio-items';
import { 
  Globe, 
  Play, 
  Sparkles, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Video, 
  Award, 
  PhoneCall, 
  CheckCircle2, 
  Layers, 
  Star, 
  ExternalLink,
  Cpu,
  Monitor,
  Smartphone,
  Eye
} from 'lucide-react';

interface MockupRendererProps {
  item: PortfolioItem;
  interactive?: boolean;
}

export function MockupRenderer({ item, interactive = false }: MockupRendererProps) {
  const type = item.visualPreview.mockupType;
  const accent = item.visualPreview.accentColor;

  switch (type) {
    // -------------------------------------------------------------------------
    // 1. REAL WEBSITE & DIGITAL PRODUCTS (Browser Shell)
    // -------------------------------------------------------------------------
    case 'website-showcase':
      return (
        <div className="w-full h-full bg-[#0d0d0d] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative overflow-hidden font-sans group/canvas">
          {/* Browser Topbar */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80" />
              <span className="ml-2 font-mono text-[#71717a] text-[9px] truncate max-w-[170px]">
                https://{item.slug}.com
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Live</span>
            </div>
          </div>

          {/* Website Hero Section Mockup */}
          <div className="my-auto py-2 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#181818] border border-[#262626]" style={{ color: accent }}>
                {item.industry}
              </span>
              <span className="text-[9px] font-mono text-[#71717a]">
                {item.clientName}
              </span>
            </div>

            <div className="text-xs sm:text-sm font-bold text-[#f5f5f0] line-clamp-1">
              {item.visualPreview.thumbnailTitle}
            </div>
            <div className="text-[11px] text-[#8e8e93] line-clamp-1">
              {item.visualPreview.thumbnailSubtitle}
            </div>

            {/* Results Snapshot */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {item.results.map((res, i) => (
                <div key={i} className="bg-[#141414] p-1.5 rounded-lg border border-[#222222] text-center">
                  <div className="font-mono text-xs font-bold" style={{ color: accent }}>{res.metric}</div>
                  <div className="text-[8px] font-mono text-[#71717a] truncate">{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Tags */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <div className="flex gap-1 overflow-hidden">
              {item.visualPreview.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="bg-[#161616] px-1.5 py-0.5 rounded border border-[#242424] text-[#a1a1aa] truncate max-w-[110px]">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[#a1a1aa] font-semibold flex items-center gap-1">
              <Globe className="w-3 h-3 text-[#ff5500]" />
              Verified
            </span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 2. REAL LOGO DESIGN & BRAND IDENTITY SYSTEM
    // -------------------------------------------------------------------------
    case 'logo-identity-board':
      return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative overflow-hidden font-sans">
          {/* Identity Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] text-[10px]">
            <div className="flex items-center gap-1.5 font-mono text-[#71717a]">
              <Sparkles className="w-3 h-3 text-[#ff5500]" />
              <span>Brand Guidelines & Identity</span>
            </div>
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#181818] text-[#f5f5f0] border border-[#262626]">
              {item.clientName}
            </span>
          </div>

          {/* Central Logo Construction Preview */}
          <div className="my-auto py-2 flex flex-col items-center justify-center text-center">
            {/* Logo Mark Representation with Geometric Ratio Circles */}
            <div className="w-16 h-16 rounded-xl bg-[#141414] border border-[#2a2a2a] flex items-center justify-center relative shadow-inner mb-2">
              <div className="absolute inset-1 rounded-full border border-dashed border-[#ff5500]/30" />
              <div className="font-mono text-xl font-black tracking-tighter" style={{ color: accent }}>
                {item.clientName.split(' ')[0][0]}{item.clientName.split(' ')[1] ? item.clientName.split(' ')[1][0] : ''}
              </div>
            </div>

            <div className="text-xs font-bold text-[#f5f5f0] line-clamp-1">
              {item.visualPreview.thumbnailTitle}
            </div>
            <div className="text-[10px] text-[#8e8e93] line-clamp-1">
              {item.visualPreview.thumbnailSubtitle}
            </div>
          </div>

          {/* Swatches & Deliverables */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full border border-[#333]" style={{ backgroundColor: accent }} />
              <div className="w-3 h-3 rounded-full bg-[#1e1e1e] border border-[#333]" />
              <div className="w-3 h-3 rounded-full bg-[#f5f5f0] border border-[#333]" />
              <span className="text-[#a1a1aa] text-[8px] ml-1">Pantone System</span>
            </div>
            <span className="text-[#ff5500] font-bold">150-Page Manual</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 3. REAL COMMERCIAL VIDEO & 4K MOTION REEL
    // -------------------------------------------------------------------------
    case 'video-reel':
      return (
        <div className="w-full h-full bg-[#080808] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative overflow-hidden font-sans">
          {/* Video Player Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] text-[10px]">
            <div className="flex items-center gap-1.5 font-mono text-[#ef4444]">
              <Video className="w-3 h-3" />
              <span>4K Commercial Production</span>
            </div>
            <span className="font-mono text-[9px] text-[#71717a] bg-[#141414] px-1.5 py-0.5 rounded border border-[#222]">
              {item.visualPreview.videoTimestamp || '02:00 / 4K ProRes'}
            </span>
          </div>

          {/* Central Video Viewport with Play Button */}
          <div className="my-auto py-2 flex flex-col items-center justify-center relative">
            <div className="w-12 h-12 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/60 flex items-center justify-center text-[#ef4444] shadow-lg shadow-[#ef4444]/30 hover:scale-105 transition-transform cursor-pointer">
              <Play className="w-5 h-5 fill-[#ef4444] ml-0.5" />
            </div>

            <div className="text-xs font-bold text-[#f5f5f0] line-clamp-1 mt-2">
              {item.visualPreview.thumbnailTitle}
            </div>
            <div className="text-[10px] text-[#8e8e93] line-clamp-1">
              {item.clientName} • {item.industry}
            </div>
          </div>

          {/* Video Specs Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span>Camera: <strong className="text-[#f5f5f0]">RED 8K / Inspire 3</strong></span>
            <span className="text-[#ef4444] font-bold">DaVinci ACES</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 4. REAL SEO & SEARCH GROWTH DASHBOARD
    // -------------------------------------------------------------------------
    case 'seo-growth-chart':
      return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative overflow-hidden font-sans">
          {/* SEO Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] text-[10px]">
            <div className="flex items-center gap-1.5 font-mono text-[#f59e0b]">
              <TrendingUp className="w-3 h-3" />
              <span>Search Revenue Growth</span>
            </div>
            <span className="font-mono text-[9px] text-emerald-400 bg-[#141414] px-1.5 py-0.5 rounded border border-[#222]">
              Verified GA4 / CRM
            </span>
          </div>

          {/* Metrics & Headline */}
          <div className="my-auto py-1 space-y-1.5">
            <div className="text-xs font-bold text-[#f5f5f0] line-clamp-1">
              {item.visualPreview.thumbnailTitle}
            </div>
            <div className="text-[10px] text-[#8e8e93] line-clamp-1">
              {item.clientName}
            </div>

            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {item.results.map((r, idx) => (
                <div key={idx} className="p-1.5 bg-[#141414] rounded-lg border border-[#222] text-center">
                  <div className="font-mono text-xs font-bold text-[#f59e0b]">{r.metric}</div>
                  <div className="text-[8px] font-mono text-[#71717a] truncate">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span>Rankings: <strong className="text-emerald-400">320+ #1 Terms</strong></span>
            <span className="text-[#f59e0b] font-bold">Closed-Won Sync</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 5. REAL PAID ADS / DISPATCH CREATIVE
    // -------------------------------------------------------------------------
    case 'ad-creative':
      return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative overflow-hidden font-sans">
          {/* Ad Topbar */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] text-[10px]">
            <div className="flex items-center gap-1.5 font-mono text-[#10b981]">
              <PhoneCall className="w-3 h-3" />
              <span>Google Guaranteed & Local PPC</span>
            </div>
            <span className="font-mono text-[9px] text-[#71717a]">24/7 Dispatch</span>
          </div>

          {/* Ad Creative Card Preview */}
          <div className="my-auto py-2 p-2 bg-[#141414] rounded-lg border border-[#262626] space-y-1">
            <div className="flex items-center justify-between text-[9px] text-emerald-400 font-mono">
              <span>★ 4.9 (480+ Reviews)</span>
              <span>Google Guaranteed</span>
            </div>
            <div className="text-xs font-bold text-[#f5f5f0] line-clamp-1">{item.clientName}</div>
            <div className="text-[10px] text-[#8e8e93] line-clamp-1">{item.projectTitle}</div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span>Calls: <strong className="text-emerald-400">1,800+/mo</strong></span>
            <span className="text-[#10b981] font-bold">$18.40 / Lead</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 6. REAL CLIENT TESTIMONIAL & VIDEO INTERVIEW
    // -------------------------------------------------------------------------
    case 'testimonial-card':
    default:
      return (
        <div className="w-full h-full bg-[#0d0d0d] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative overflow-hidden font-sans">
          {/* Testimonial Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] text-[10px]">
            <div className="flex items-center gap-1 font-mono text-yellow-400">
              <Star className="w-3 h-3 fill-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400" />
            </div>
            <span className="font-mono text-[9px] text-[#71717a] bg-[#141414] px-1.5 py-0.5 rounded border border-[#222]">
              {item.visualPreview.videoTimestamp || '4K Executive Video'}
            </span>
          </div>

          {/* Testimonial Quote */}
          <div className="my-auto py-1 space-y-1.5">
            <p className="text-[11px] text-[#d4d4d8] italic line-clamp-2">
              {item.clientQuote?.text || item.tagline}
            </p>
            <div className="text-[10px] font-bold text-[#f5f5f0]">
              {item.clientQuote?.author || item.clientName}
            </div>
            <div className="text-[8px] font-mono text-[#71717a]">
              {item.clientQuote?.title || item.industry}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span className="text-emerald-400 font-bold">Verified Executive Review</span>
            <span className="text-[#ff5500] font-semibold flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-[#ff5500]" /> Watch Video
            </span>
          </div>
        </div>
      );
  }
}
