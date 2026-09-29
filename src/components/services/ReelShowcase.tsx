'use client';

import React, { useState, useRef } from 'react';
import { portfolioReels, PortfolioReel } from '@/data/portfolio-reels';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Film, 
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

type CategoryFilter = 'all' | 'motion-graphics' | 'kinetic-typography' | '3d-vfx' | 'commercial-ads' | 'sound-cinematic';

export function ReelShowcase() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [playingReelId, setPlayingReelId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({});
  const [activeModalReel, setActiveModalReel] = useState<PortfolioReel | null>(null);
  const [showAll, setShowAll] = useState(false);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const filteredReels = portfolioReels.filter(reel => {
    if (activeFilter === 'all') return true;
    return reel.category === activeFilter;
  });

  const displayedReels = showAll ? filteredReels : filteredReels.slice(0, 6);

  const handlePlayToggle = (reel: PortfolioReel) => {
    const videoEl = videoRefs.current[reel.id];
    if (!videoEl) return;

    if (playingReelId === reel.id) {
      videoEl.pause();
      setPlayingReelId(null);
    } else {
      // Pause currently playing if any
      if (playingReelId && videoRefs.current[playingReelId]) {
        videoRefs.current[playingReelId]?.pause();
      }
      videoEl.play().catch(() => {});
      setPlayingReelId(reel.id);
    }
  };

  const toggleMute = (reelId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const videoEl = videoRefs.current[reelId];
    if (!videoEl) return;

    const currentMute = mutedStates[reelId] ?? true;
    videoEl.muted = !currentMute;
    setMutedStates(prev => ({ ...prev, [reelId]: !currentMute }));
  };

  const openModal = (reel: PortfolioReel, e: React.MouseEvent) => {
    e.stopPropagation();
    // pause inline
    if (playingReelId && videoRefs.current[playingReelId]) {
      videoRefs.current[playingReelId]?.pause();
      setPlayingReelId(null);
    }
    setActiveModalReel(reel);
  };

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: `All Work (${portfolioReels.length})` },
    { key: 'motion-graphics', label: 'Motion Graphics' },
    { key: 'kinetic-typography', label: 'Kinetic Typography' },
    { key: '3d-vfx', label: '3D & Visual Effects' },
    { key: 'commercial-ads', label: 'Commercial & Ads' },
    { key: 'sound-cinematic', label: 'Cinematic & Sound' },
  ];

  return (
    <section id="portfolio-reels" className="py-16 sm:py-24 border-b border-[#181818] bg-[#070707] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] text-xs font-medium mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Studio Portfolio ({portfolioReels.length} Master Edits)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0]">
              Featured Motion Graphics & Video Edits.
            </h2>
            <p className="text-sm sm:text-base text-[#8e8e93] max-w-2xl mt-3 leading-relaxed font-normal">
              Explore real motion graphics, kinetic typography, 3D animations, and commercial post-production. Click any video to play directly with sound.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button href="#project-intake" variant="primary" size="md" withArrow>
              Start a Project
            </Button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveFilter(cat.key);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === cat.key
                  ? 'bg-[#ff5500] text-white font-semibold shadow-lg shadow-[#ff5500]/20'
                  : 'bg-[#121212] hover:bg-[#1c1c1c] text-[#a1a1aa] hover:text-[#f5f5f0] border border-[#202020]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 9:16 Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedReels.map((reel) => {
            const isPlaying = playingReelId === reel.id;
            const isMuted = mutedStates[reel.id] ?? true;

            return (
              <div 
                key={reel.id}
                className="bg-[#0c0c0c] border border-[#1e1e1e] hover:border-[#333333] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-xl"
              >
                {/* 9:16 Video Player Container */}
                <div 
                  className="relative aspect-[9/16] bg-[#000000] overflow-hidden cursor-pointer"
                  onClick={() => handlePlayToggle(reel)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoUrl}
                    preload="none"
                    playsInline
                    loop
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />

                  {/* Top Category Badge & Enlarge Button */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md rounded-md text-[11px] font-medium text-[#ff5500] border border-white/10 shadow-sm">
                      {reel.categoryLabel}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => openModal(reel, e)}
                      className="p-1.5 bg-black/75 backdrop-blur-md hover:bg-black text-[#a1a1aa] hover:text-white rounded-md border border-white/10 transition-colors pointer-events-auto cursor-pointer"
                      title="Enlarge Video"
                      aria-label="Enlarge Video"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Center Play Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-opacity group-hover:bg-black/30">
                      <div className="w-14 h-14 rounded-full bg-[#ff5500] text-white flex items-center justify-center shadow-2xl shadow-[#ff5500]/50 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Sound Control Button */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <button
                      type="button"
                      onClick={(e) => toggleMute(reel.id, e)}
                      className="p-2 bg-black/75 backdrop-blur-md hover:bg-black text-[#a1a1aa] hover:text-white rounded-lg border border-white/10 transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#ff5500]" />}
                    </button>
                  </div>
                </div>

                {/* Clean, Human Card Details */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2 leading-snug">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed font-normal mb-2.5">
                      {reel.description}
                    </p>
                    {reel.idealFor && (
                      <div className="text-[11px] text-[#71717a] font-normal leading-relaxed">
                        <span className="text-[#a1a1aa] font-medium">Best for:</span> {reel.idealFor}
                      </div>
                    )}
                  </div>

                  {/* Clean Style Tags */}
                  <div className="pt-3 border-t border-[#181818] flex flex-wrap gap-1.5">
                    {reel.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[11px] text-[#8e8e93] bg-[#141414] border border-[#222222] px-2.5 py-1 rounded-md font-normal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All / Expand Toggle */}
        {filteredReels.length > 6 && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121212] hover:bg-[#1a1a1a] text-[#f5f5f0] border border-[#262626] text-xs font-semibold transition-all cursor-pointer shadow-lg"
            >
              <span>{showAll ? 'Show Less' : `View All ${filteredReels.length} Video Edits`}</span>
              <ChevronDown className={`w-4 h-4 text-[#ff5500] transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Full-Screen Theater Modal */}
        {activeModalReel && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalReel(null)}
          >
            <div 
              className="relative max-w-sm w-full bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-[#181818] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#f5f5f0]">{activeModalReel.title}</div>
                  <div className="text-xs text-[#ff5500] font-medium">{activeModalReel.categoryLabel}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalReel(null)}
                  className="p-1.5 rounded-lg bg-[#141414] text-[#8e8e93] hover:text-white border border-[#222] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Video */}
              <div className="aspect-[9/16] bg-black">
                <video
                  src={activeModalReel.videoUrl}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 space-y-3 bg-[#0d0d0d]">
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {activeModalReel.description}
                </p>
                {activeModalReel.idealFor && (
                  <p className="text-[11px] text-[#71717a]">
                    <strong className="text-[#a1a1aa]">Best for:</strong> {activeModalReel.idealFor}
                  </p>
                )}
                <Button href="#project-intake" variant="primary" size="sm" className="w-full text-xs" withArrow onClick={() => setActiveModalReel(null)}>
                  Start a Similar Project
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
