export interface PortfolioReel {
  id: string;
  filename: string;
  videoUrl: string;
  title: string;
  category: 'motion-graphics' | 'kinetic-typography' | '3d-vfx' | 'commercial-ads' | 'sound-cinematic';
  categoryLabel: string;
  description: string;
  tags: string[];
  aspectRatio: '9:16';
}

export const portfolioReels: PortfolioReel[] = [
  {
    id: 'reel-01',
    filename: 'Reel_01_DNf1eZgpcDn.mp4',
    videoUrl: '/portfolio/reels/Reel_01_DNf1eZgpcDn.mp4',
    title: 'Cinematic Visual Flow & Pacing',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Dynamic framing, seamless cuts, and rhythmic sound design crafted to hold viewer attention.',
    tags: ['Cinematic Flow', 'Sound Design', 'Pacing'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-02',
    filename: 'Reel_02_DOkzymJkyim.mp4',
    videoUrl: '/portfolio/reels/Reel_02_DOkzymJkyim.mp4',
    title: 'Kinetic Typography & Visual Rhythm',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Hand-timed typography synced to speech velocity with custom graphic accents and subtle motion blur.',
    tags: ['Kinetic Typography', 'Motion Design', 'Sound FX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-03',
    filename: 'Reel_03_DOnYPHSE3pE.mp4',
    videoUrl: '/portfolio/reels/Reel_03_DOnYPHSE3pE.mp4',
    title: 'Atmospheric Visual Storytelling',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Layered visual transitions, ambient sound design, and color grading tuned for high engagement.',
    tags: ['Visual Storytelling', 'Color Grading', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-04',
    filename: 'Reel_04_Jzk2-8.mp4',
    videoUrl: '/portfolio/reels/Reel_04_Jzk2-8.mp4',
    title: 'High-Energy Rhythm & Sound Design',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Fast-paced visual cuts with multi-layer foley sound effects and bold graphic accents.',
    tags: ['Motion Graphics', 'Sound Effects', 'Dynamic Cuts'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-05',
    filename: 'Reel_05_v.mp4',
    videoUrl: '/portfolio/reels/Reel_05_v.mp4',
    title: 'Brand-Aligned Motion & Contrast',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Clean visual framing, custom typography layouts, and rich color contrast built for mobile feeds.',
    tags: ['Motion Design', 'Typography', 'Visual Polish'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-06',
    filename: 'Reel_06_.mp4',
    videoUrl: '/portfolio/reels/Reel_06_.mp4',
    title: 'Speed Ramping & Seamless Transitions',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Smooth velocity curves and directional transitions that maintain continuous visual momentum.',
    tags: ['Speed Ramping', 'Fluid Transitions', 'VFX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-07',
    filename: 'Reel_07_DPqOleRD9g6.mp4',
    videoUrl: '/portfolio/reels/Reel_07_DPqOleRD9g6.mp4',
    title: '3D Motion Graphics & UI Callouts',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Floating 3D perspective cards, animated interface elements, and screen-space motion tracking.',
    tags: ['3D Motion', 'UI Animation', 'Motion Tracking'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-08',
    filename: 'Reel_08_DPx8-szEwSQ.mp4',
    videoUrl: '/portfolio/reels/Reel_08_DPx8-szEwSQ.mp4',
    title: 'Minimalist Authority Motion',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Restrained, premium motion design with clean typography and balanced color tones.',
    tags: ['Motion Graphics', 'Typography', 'Minimalist Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-09',
    filename: 'Reel_09_ao.mp4',
    videoUrl: '/portfolio/reels/Reel_09_ao.mp4',
    title: 'Cinematic Color Tone & Mood',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Rich color grading and atmospheric soundscapes that give video a polished film look.',
    tags: ['Color Grading', 'Atmospheric Audio', 'Cinematic'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-10',
    filename: 'Reel_10_DP-zaS-E8yp.mp4',
    videoUrl: '/portfolio/reels/Reel_10_DP-zaS-E8yp.mp4',
    title: 'Scroll-Stopping Visual Hook',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'Immediate visual pattern interrupt paired with impact sound design to lock in viewer attention.',
    tags: ['Hook Design', 'Commercial Ad', 'Sound FX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-11',
    filename: 'Reel_11_DQEmYxikwZJ.mp4',
    videoUrl: '/portfolio/reels/Reel_11_DQEmYxikwZJ.mp4',
    title: 'Modern Aesthetic Motion Design',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Clean graphic styling, dynamic typography, and fluid visual elements.',
    tags: ['Motion Design', 'Typography', 'Aesthetic Polish'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-12',
    filename: 'Reel_12_DQGlbMKExxD.mp4',
    videoUrl: '/portfolio/reels/Reel_12_DQGlbMKExxD.mp4',
    title: 'Punchy Commercial Cut',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'High-tempo visual pacing with crisp graphic overlays designed for paid social campaigns.',
    tags: ['Commercial Ads', 'Fast Pacing', 'Graphic Accents'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-13',
    filename: 'Reel_13_DQQ2u2IjKbn.mp4',
    videoUrl: '/portfolio/reels/Reel_13_DQQ2u2IjKbn.mp4',
    title: 'Paid Social Ad Motion',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'High-conversion ad pacing featuring urgent visual cues, bold motion text, and dynamic audio hits.',
    tags: ['Paid Ads', 'Motion Graphics', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-14',
    filename: 'Reel_14_DQRg-BBjKUH.mp4',
    videoUrl: '/portfolio/reels/Reel_14_DQRg-BBjKUH.mp4',
    title: 'Precision Kinetic Text & FX',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Custom animated captions with word-level emphasis and integrated visual effects.',
    tags: ['Kinetic Typography', 'Visual FX', 'Sound Sync'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-15',
    filename: 'Reel_15_DQTavtKk3Tn.mp4',
    videoUrl: '/portfolio/reels/Reel_15_DQTavtKk3Tn.mp4',
    title: 'Dynamic Visual Storytelling',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Balanced narrative pacing with animated icons, smooth cutdowns, and clean sound mixing.',
    tags: ['Motion Graphics', 'Visual Flow', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-16',
    filename: 'Reel_16_vr.mp4',
    videoUrl: '/portfolio/reels/Reel_16_vr.mp4',
    title: 'Creative Visual Transitions',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Creative directional wipe transitions, motion blur, and spatial audio effects.',
    tags: ['Transitions', 'Visual Effects', 'Audio Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-17',
    filename: 'Reel_17_DQbKpfajO09.mp4',
    videoUrl: '/portfolio/reels/Reel_17_DQbKpfajO09.mp4',
    title: 'High-Contrast Kinetic Typography',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Bold, animated text overlays with custom font styling and high-contrast background bounding.',
    tags: ['Kinetic Typography', 'High Contrast', 'Motion Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-18',
    filename: 'Reel_18_DQcDsz5jHUo.mp4',
    videoUrl: '/portfolio/reels/Reel_18_DQcDsz5jHUo.mp4',
    title: 'Multi-Track Sound & VFX Mix',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Layered foley sound effects, riser swells, and sub-bass impacts aligned to visual motion.',
    tags: ['Sound Design', 'Foley FX', 'VFX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-19',
    filename: 'Reel_19_DQydq9MDOJd.mp4',
    videoUrl: '/portfolio/reels/Reel_19_DQydq9MDOJd.mp4',
    title: '3D Perspective Motion Graphics',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: '3D spatial camera tracking with layered geometric elements and smooth lighting highlights.',
    tags: ['3D Motion', 'Camera Tracking', 'Visual Effects'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-20',
    filename: 'Reel_20_DRB6ODpEysU.mp4',
    videoUrl: '/portfolio/reels/Reel_20_DRB6ODpEysU.mp4',
    title: 'High-Energy Micro-Hook',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'Ultra-fast opening sequence engineered to eliminate scrolling momentum.',
    tags: ['Hook Velocity', 'Micro-Animation', 'Sound FX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-21',
    filename: 'Reel_21_DRJpT9eDNgL.mp4',
    videoUrl: '/portfolio/reels/Reel_21_DRJpT9eDNgL.mp4',
    title: 'Abstract 3D Motion Accents',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Smooth 3D shape animations, glowing light paths, and ambient sound design.',
    tags: ['3D Animation', 'Motion Graphics', 'Lighting FX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-22',
    filename: 'Reel_22_DRPAz6uDNer.mp4',
    videoUrl: '/portfolio/reels/Reel_22_DRPAz6uDNer.mp4',
    title: 'Kinetic Text Animation',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Rhythmic text movement synchronized to visual pacing with custom brand typography.',
    tags: ['Kinetic Typography', 'Motion Design', 'Pacing'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-23',
    filename: 'Reel_23_DRRa5zeDD0r.mp4',
    videoUrl: '/portfolio/reels/Reel_23_DRRa5zeDD0r.mp4',
    title: 'Creative Graphic Callout',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Clean 2D graphic badge animations and directional pointer cues.',
    tags: ['Motion Graphics', '2D Badges', 'Visual Callouts'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-24',
    filename: 'Reel_24_DRT8DvmjCcO.mp4',
    videoUrl: '/portfolio/reels/Reel_24_DRT8DvmjCcO.mp4',
    title: 'Dynamic Velocity Ramping',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Speed ramped action frames with directional motion blur and impact sound cues.',
    tags: ['Speed Ramping', 'Motion Blur', 'VFX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-25',
    filename: 'Reel_25_DRWftkrDKKb.mp4',
    videoUrl: '/portfolio/reels/Reel_25_DRWftkrDKKb.mp4',
    title: 'Sleek Minimalist Motion',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Smooth, understated graphic animations crafted for clean modern branding.',
    tags: ['Minimalist Motion', 'Brand Polish', 'Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-26',
    filename: 'Reel_26_DRbqFR1jAXf.mp4',
    videoUrl: '/portfolio/reels/Reel_26_DRbqFR1jAXf.mp4',
    title: 'Fast-Paced Commercial Reel',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'Energetic cuts and graphic popups designed for social promotion and ads.',
    tags: ['Commercial Cut', 'Fast Pacing', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-27',
    filename: 'Reel_27_DRjXxxsjL-Q.mp4',
    videoUrl: '/portfolio/reels/Reel_27_DRjXxxsjL-Q.mp4',
    title: 'Spatial 3D Motion Flow',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: '3D floating motion elements with rich depth-of-field and realistic motion physics.',
    tags: ['3D Motion', 'Depth of Field', 'VFX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-28',
    filename: 'Reel_28_DVqu8j-DKto.mp4',
    videoUrl: '/portfolio/reels/Reel_28_DVqu8j-DKto.mp4',
    title: 'Cinematic Visual Grade',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Balanced film-style color grade paired with atmospheric sound design.',
    tags: ['Cinematic Grade', 'Color Polish', 'Soundscape'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-29',
    filename: 'Reel_29_DX2AKQkIPPi.mp4',
    videoUrl: '/portfolio/reels/Reel_29_DX2AKQkIPPi.mp4',
    title: 'Full-Spectrum Motion Graphics',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'A comprehensive blend of kinetic typography, 2D vector overlays, and layered sound effects.',
    tags: ['Motion Graphics', 'Typography', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-30',
    filename: 'Reel_30_DduI66ZTvjy.mp4',
    videoUrl: '/portfolio/reels/Reel_30_DduI66ZTvjy.mp4',
    title: 'Flagship Cinematic Storyboard',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Extended narrative visual storytelling with multi-scene transitions, color grading, and rich sound design.',
    tags: ['Cinematic Storytelling', 'Color Grading', 'Sound Mix'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-31',
    filename: 'Reel_31_DdzRrs1T5mt.mp4',
    videoUrl: '/portfolio/reels/Reel_31_DdzRrs1T5mt.mp4',
    title: 'Complete Post-Production Showcase',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'High-energy showcase highlighting kinetic typography, 3D overlays, sound design, and speed ramping.',
    tags: ['Motion Graphics', 'Kinetic Typography', 'Sound Design'],
    aspectRatio: '9:16'
  }
];
