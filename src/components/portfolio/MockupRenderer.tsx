'use client';

import React from 'react';
import { PortfolioItem } from '@/data/portfolio-items';
import { 
  TrendingUp, 
  Activity, 
  Layers, 
  Cpu, 
  Play, 
  Volume2, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Globe,
  Database,
  Search,
  Code2,
  Box,
  Smartphone,
  Maximize2,
  Film
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
    // 1. BROWSER SAAS / FINTECH / DATA DASHBOARD
    // -------------------------------------------------------------------------
    case 'browser-dashboard':
      return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none overflow-hidden relative font-sans">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] text-[10px]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-[#71717a]">{item.visualPreview.mockupDetails.headerTitle}</span>
            </div>
            <div className="flex items-center gap-1 text-[#10b981] font-mono text-[9px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>LIVE 60FPS</span>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-3 gap-2 py-2">
            {item.visualPreview.mockupDetails.kpis.map((k, i) => (
              <div key={i} className="bg-[#121212] p-2 rounded-lg border border-[#1e1e1e]">
                <div className="text-[9px] text-[#71717a] truncate">{k.label}</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-[#f5f5f0]">{k.value}</div>
              </div>
            ))}
          </div>

          {/* SVG Vector Area Chart with Glowing Gradient */}
          <div className="relative h-16 w-full my-auto flex items-end">
            <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id={`grad-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={accent} stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Shaded Area */}
              <path
                d="M 0 65 Q 40 45 80 50 T 160 30 T 230 15 T 300 5 L 300 80 L 0 80 Z"
                fill={`url(#grad-${item.id})`}
              />
              {/* Glowing Line */}
              <path
                d="M 0 65 Q 40 45 80 50 T 160 30 T 230 15 T 300 5"
                fill="none"
                stroke={accent}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Active Telemetry Point */}
              <circle cx="300" cy="5" r="4" fill="#ffffff" stroke={accent} strokeWidth="2" />
            </svg>
          </div>

          {/* Footer Tags */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <div className="flex gap-1.5 overflow-hidden">
              {item.visualPreview.mockupDetails.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="bg-[#161616] px-1.5 py-0.5 rounded border border-[#242424] text-[#a1a1aa]">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[#ff5500] font-bold">Lighthouse 98</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 2. MOBILE APP SCREEN (iOS / React Native / Telehealth)
    // -------------------------------------------------------------------------
    case 'mobile-device':
      return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative font-sans overflow-hidden">
          {/* Mobile Top Bar */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#71717a] pb-1 border-b border-[#1c1c1c]">
            <span>9:41 AM</span>
            <div className="flex items-center gap-1">
              <span className="text-emerald-400 font-bold">FaceID Verified</span>
              <div className="w-3 h-1.5 rounded-xs border border-[#71717a]" />
            </div>
          </div>

          {/* App Content Preview */}
          <div className="space-y-2 py-1 my-auto">
            {/* Active Card */}
            <div className="p-2.5 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-[#f5f5f0]">{item.visualPreview.heroHeadline}</div>
                <div className="text-[9px] text-[#8e8e93]">{item.visualPreview.subtext}</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                <Activity className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Mobile Vitals / Order Grid */}
            <div className="grid grid-cols-2 gap-2">
              {item.visualPreview.mockupDetails.kpis.slice(0, 2).map((k, i) => (
                <div key={i} className="p-2 bg-[#111111] rounded-lg border border-[#1e1e1e] text-center">
                  <div className="font-mono text-xs font-bold text-[#f5f5f0]">{k.value}</div>
                  <div className="text-[8px] text-[#71717a] truncate">{k.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Bar */}
          <div className="flex justify-around pt-2 border-t border-[#181818] text-[9px] text-[#71717a]">
            <span className="text-[#ff5500] font-bold">• Portal</span>
            <span>• Schedule</span>
            <span>• Records</span>
            <span>• Pay</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 3. 3D RENDER CANVAS (Cinema 4D / Octane / WebGL)
    // -------------------------------------------------------------------------
    case '3d-render-canvas':
      return (
        <div className="w-full h-full bg-[#080808] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative font-sans overflow-hidden">
          {/* 3D Viewport Header */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#71717a] pb-1 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-1.5">
              <Box className="w-3 h-3 text-[#f97316]" />
              <span>Octane 3D Raytracer</span>
            </div>
            <span className="text-[#f97316] font-bold">8K PBR Maps</span>
          </div>

          {/* Central 3D Geometric Wireframe Graphic */}
          <div className="relative my-auto flex items-center justify-center py-2">
            <div className="w-24 h-24 relative flex items-center justify-center">
              {/* Rotating Concentric Circles & Cube Illusion */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#ff5500]/40 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-2 rounded-xl border border-[#ff5500]/60 rotate-45" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#ff5500] to-[#e11d48] flex items-center justify-center shadow-lg shadow-[#ff5500]/40">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* 3D Controls Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <div className="flex gap-1">
              <span className="bg-[#141414] px-1.5 py-0.5 rounded border border-[#222222] text-[#a1a1aa]">360° Orbit</span>
              <span className="bg-[#141414] px-1.5 py-0.5 rounded border border-[#222222] text-[#a1a1aa]">Titanium</span>
            </div>
            <span className="text-[#ff5500] font-bold">2.4MB WebGL</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 4. ARCHITECTURE STATE MACHINE (LangGraph / n8n / Strangler Fig)
    // -------------------------------------------------------------------------
    case 'architecture-node-graph':
      return (
        <div className="w-full h-full bg-[#080808] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative font-sans overflow-hidden">
          {/* Node Graph Header */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#71717a] pb-1 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-[#8b5cf6]" />
              <span>{item.visualPreview.mockupDetails.headerTitle}</span>
            </div>
            <span className="text-emerald-400 font-bold">100% Deterministic</span>
          </div>

          {/* Node Progression Pipeline */}
          <div className="grid grid-cols-3 gap-2 my-auto py-2 items-center">
            <div className="p-2 rounded-lg bg-[#141414] border border-[#2a2a2a] text-center">
              <div className="text-[8px] font-mono text-[#71717a]">Node 1</div>
              <div className="text-[10px] font-bold text-[#f5f5f0]">Ingest / Decomp</div>
              <div className="text-[7px] text-emerald-400 font-mono mt-0.5">24ms</div>
            </div>

            <div className="p-2 rounded-lg bg-[#1f1630] border border-[#8b5cf6]/40 text-center relative">
              <div className="text-[8px] font-mono text-[#8b5cf6]">Node 2 (Core)</div>
              <div className="text-[10px] font-bold text-white">Hybrid Retrieval</div>
              <div className="text-[7px] text-[#8b5cf6] font-mono mt-0.5">Qdrant + BM25</div>
            </div>

            <div className="p-2 rounded-lg bg-[#141414] border border-[#2a2a2a] text-center">
              <div className="text-[8px] font-mono text-[#71717a]">Node 3</div>
              <div className="text-[10px] font-bold text-[#f5f5f0]">Verify & Cite</div>
              <div className="text-[7px] text-emerald-400 font-mono mt-0.5">Zero Halluc.</div>
            </div>
          </div>

          {/* Node Graph Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span>Latency: <strong className="text-[#f5f5f0]">380ms</strong></span>
            <span>Accuracy: <strong className="text-emerald-400">99.8%</strong></span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 5. VIDEO TIMELINE (4K Cinema Post / Color Grade)
    // -------------------------------------------------------------------------
    case 'video-timeline':
      return (
        <div className="w-full h-full bg-[#080808] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative font-sans overflow-hidden">
          {/* Timeline Header */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#71717a] pb-1 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-1.5">
              <Film className="w-3 h-3 text-[#ef4444]" />
              <span>DaVinci Resolve 19 • ACES RAW</span>
            </div>
            <span className="text-[#ef4444] font-bold">4K 60P ProRes</span>
          </div>

          {/* Video Tracks & Waveforms */}
          <div className="space-y-1.5 my-auto py-2">
            {/* Video Track 1 */}
            <div className="h-4 rounded bg-[#1e293b] border border-[#334155] flex items-center px-2 text-[8px] font-mono text-[#94a3b8] justify-between">
              <span>V1: RED_8K_SCENE_04.R3D</span>
              <span className="text-yellow-400">LUT: FilmPrint_2383</span>
            </div>
            {/* Video Track 2 */}
            <div className="h-4 rounded bg-[#374151] border border-[#4b5563] flex items-center px-2 text-[8px] font-mono text-[#d1d5db]">
              <span>V2: 3D_CGI_HUD_OVERLAY.MOV</span>
            </div>
            {/* Audio Waveform Track */}
            <div className="h-5 rounded bg-[#14532d]/40 border border-[#15803d]/40 flex items-center px-2 text-[8px] font-mono text-emerald-400 justify-between">
              <span>A1: 5.1_CINEMATIC_MIX.WAV</span>
              <span>-14 LUFS</span>
            </div>
          </div>

          {/* Timeline Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span>TC: 01:04:18:22</span>
            <span className="text-emerald-400 font-bold">Zero Audio Clipping</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 6. AD CREATIVE SUITE (Meta / TikTok 9:16 Short-Form)
    // -------------------------------------------------------------------------
    case 'ad-creative-suite':
      return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative font-sans overflow-hidden">
          {/* Ad Suite Topbar */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#71717a] pb-1 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-[#ec4899]" />
              <span>TikTok Spark Ad • 9:16</span>
            </div>
            <span className="text-emerald-400 font-bold">4.4x Paid ROAS</span>
          </div>

          {/* 9:16 Mobile Ad Frame */}
          <div className="p-2.5 rounded-lg bg-gradient-to-b from-[#181818] to-[#0c0c0c] border border-[#2a2a2a] my-auto space-y-1.5">
            <div className="inline-block px-2 py-0.5 bg-[#ec4899] text-white text-[9px] font-bold rounded">
              HOOK 01: PROBLEM TEARDOWN
            </div>
            <div className="text-xs font-bold text-[#f5f5f0]">{item.visualPreview.heroHeadline}</div>
            <div className="flex items-center gap-2 text-[9px] font-mono text-[#71717a]">
              <span>142k Views</span>
              <span>•</span>
              <span className="text-emerald-400">46% 3-Sec Retention</span>
            </div>
          </div>

          {/* Ad Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span>CAPI Event Match: <strong className="text-emerald-400">9.4/10</strong></span>
            <span className="text-[#ec4899] font-bold">40 Ad Variants</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------------------
    // 7. DATA WAREHOUSE & SCHEMA (Snowflake / dbt)
    // -------------------------------------------------------------------------
    case 'data-warehouse-schema':
    default:
      return (
        <div className="w-full h-full bg-[#080808] rounded-xl border border-[#222222] p-3 flex flex-col justify-between select-none relative font-sans overflow-hidden">
          {/* Data Stack Header */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#71717a] pb-1 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-1.5">
              <Database className="w-3 h-3 text-[#38bdf8]" />
              <span>Snowflake & dbt Core</span>
            </div>
            <span className="text-emerald-400 font-bold">10M+ Daily Events</span>
          </div>

          {/* Data Pipeline Nodes */}
          <div className="space-y-1.5 my-auto py-2">
            <div className="flex items-center justify-between p-1.5 bg-[#141414] rounded border border-[#222222] text-[9px] font-mono">
              <span className="text-[#a1a1aa]">Fivetran Ingestion</span>
              <span className="text-emerald-400">15-Min Batch (PASS)</span>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-[#0f2942]/40 rounded border border-[#0284c7]/40 text-[9px] font-mono">
              <span className="text-[#38bdf8]">dbt Core Transformations</span>
              <span className="text-[#38bdf8]">42 Models Synced</span>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-[#141414] rounded border border-[#222222] text-[9px] font-mono">
              <span className="text-[#a1a1aa]">Metabase BI Telemetry</span>
              <span className="text-yellow-400">&lt;240ms Query</span>
            </div>
          </div>

          {/* Data Stack Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#181818] text-[9px] font-mono text-[#71717a]">
            <span>Schema Integrity: <strong className="text-emerald-400">100%</strong></span>
            <span className="text-[#38bdf8] font-bold">Zero Latency BI</span>
          </div>
        </div>
      );
  }
}
