'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PortfolioItem } from '@/data/portfolio-items';
import { 
  Globe, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
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
  Eye,
  RotateCcw
} from 'lucide-react';

interface MockupRendererProps {
  item: PortfolioItem;
  interactive?: boolean;
}

export function MockupRenderer({ item, interactive = false }: MockupRendererProps) {
  const type = item.visualPreview.mockupType;
  const accent = item.visualPreview.accentColor;

  // Video playback states for interactive modal view
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
    // 3. REAL COMMERCIAL VIDEO & 4K MOTION REEL (Interactive Video Player)
    // -------------------------------------------------------------------------
    case 'video-reel':
      return (
        <div className="w-full h-full bg-[#050505] rounded-xl border border-[#222222] relative overflow-hidden font-sans group/video flex flex-col justify-between">
          {/* Active HTML5 Video Player */}
          {item.visualPreview.videoUrl && (
            <video
              ref={videoRef}
              src={item.visualPreview.videoUrl}
              className="absolute inset-0 w-full h-full object-cover z-0"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              onClick={interactive ? togglePlay : undefined}
            />
          )}

          {/* Top Info Bar (Semi-transparent dark gradient overlay) */}
          <div className="relative z-10 p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-[10px] pointer-events-none">
            <div className="flex items-center gap-1.5 font-mono text-[#ef4444]">
              <Video className="w-3.5 h-3.5" />
              <span className="font-semibold text-white">4K Commercial Production</span>
            </div>
            <span className="font-mono text-[9px] text-[#f5f5f0] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
              {item.visualPreview.videoTimestamp || '4K 60P ProRes'}
            </span>
          </div>

          {/* Central Play/Pause Action Overlay */}
          <div 
            className="relative z-10 my-auto flex flex-col items-center justify-center p-4 cursor-pointer"
            onClick={interactive ? togglePlay : undefined}
          >
            {(!isPlaying || !hasStarted) && (
              <div className="w-14 h-14 rounded-full bg-[#ef4444]/90 hover:bg-[#ef4444] text-white flex items-center justify-center shadow-xl shadow-[#ef4444]/40 transition-all hover:scale-110 mb-2">
                <Play className="w-6 h-6 fill-white ml-1" />
              </div>
            )}

            {(!isPlaying || !hasStarted) && (
              <div className="text-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <div className="text-xs font-bold text-white line-clamp-1">
                  {item.visualPreview.thumbnailTitle}
                </div>
                <div className="text-[10px] text-[#a1a1aa] line-clamp-1">
                  {interactive ? 'Click to Play Full 4K Video' : item.clientName}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Control Bar in Interactive Mode */}
          {interactive ? (
            <div className="relative z-10 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent space-y-1.5">
              {/* Progress Scrubber */}
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ef4444]"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#f5f5f0]">
                <div className="flex items-center gap-2">
                  <button onClick={togglePlay} className="p-1 rounded hover:bg-white/20 transition-colors">
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  </button>
                  <button onClick={toggleMute} className="p-1 rounded hover:bg-white/20 transition-colors">
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
                  </button>
                  <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#a1a1aa] text-[9px]">RED 8K Cinema</span>
                  <button onClick={toggleFullscreen} className="p-1 rounded hover:bg-white/20 transition-colors">
                    <Maximize className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-[9px] font-mono text-[#a1a1aa] border-t border-white/5">
              <span>Camera: <strong className="text-white">RED 8K / Inspire 3</strong></span>
              <span className="text-[#ef4444] font-bold">DaVinci ACES</span>
            </div>
          )}
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
    // 6. REAL CLIENT TESTIMONIAL & VIDEO INTERVIEW (Interactive Player)
    // -------------------------------------------------------------------------
    case 'testimonial-card':
    default:
      if (interactive && item.visualPreview.videoUrl) {
        return (
          <div className="w-full h-full bg-[#050505] rounded-xl border border-[#222222] relative overflow-hidden font-sans group/video flex flex-col justify-between">
            {/* Active Video Player */}
            <video
              ref={videoRef}
              src={item.visualPreview.videoUrl}
              className="absolute inset-0 w-full h-full object-cover z-0"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Top Bar */}
            <div className="relative z-10 p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-[10px] pointer-events-none">
              <div className="flex items-center gap-1 font-mono text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                <span className="text-white text-[9px] ml-1 font-semibold">Verified Executive Review</span>
              </div>
              <span className="font-mono text-[9px] text-[#f5f5f0] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                4K Executive Interview
              </span>
            </div>

            {/* Play Button Overlay */}
            <div 
              className="relative z-10 my-auto flex flex-col items-center justify-center p-4 cursor-pointer"
              onClick={togglePlay}
            >
              {(!isPlaying || !hasStarted) && (
                <div className="w-14 h-14 rounded-full bg-[#ff5500]/90 hover:bg-[#ff5500] text-white flex items-center justify-center shadow-xl shadow-[#ff5500]/40 transition-all hover:scale-110 mb-2">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
              )}

              {(!isPlaying || !hasStarted) && (
                <div className="text-center bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 max-w-sm">
                  <div className="text-xs font-bold text-white">
                    {item.clientQuote?.author || item.clientName}
                  </div>
                  <div className="text-[10px] text-[#ff5500]">
                    {item.clientQuote?.title}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="relative z-10 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent space-y-1.5">
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#f5f5f0]">
                <div className="flex items-center gap-2">
                  <button onClick={togglePlay} className="p-1 rounded hover:bg-white/20 transition-colors">
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  </button>
                  <button onClick={toggleMute} className="p-1 rounded hover:bg-white/20 transition-colors">
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
                  </button>
                  <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>

                <button onClick={toggleFullscreen} className="p-1 rounded hover:bg-white/20 transition-colors">
                  <Maximize className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </div>
        );
      }

      // Default Testimonial Card Preview for Grid
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
