export interface PortfolioReel {
  id: string;
  filename: string;
  videoUrl: string;
  title: string;
  category: 'motion-graphics' | 'kinetic-typography' | '3d-vfx' | 'commercial-ads' | 'sound-cinematic';
  categoryLabel: string;
  description: string;
  idealFor: string;
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
    description: 'We trimmed the dead space between thoughts and paired subtle punch-ins with low-end audio to give the narrative immediate weight and momentum.',
    idealFor: 'Founders, coaches, and creators sharing talking-head insights',
    tags: ['Pacing & Cuts', 'Sound Design', 'Cinematic Flow'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-02',
    filename: 'Reel_02_DOkzymJkyim.mp4',
    videoUrl: '/portfolio/reels/Reel_02_DOkzymJkyim.mp4',
    title: 'Kinetic Typography & Speech Rhythm',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Key words get movement and color emphasis right when they\'re spoken, giving the viewer an active visual path that keeps eyes locked on screen.',
    idealFor: 'Coaches, consultants, and educational creators',
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
    description: 'Rich color grading and layered ambient audio turn straightforward footage into an immersive, cinema-grade story.',
    idealFor: 'Brand storytellers, agency owners, and personal brands',
    tags: ['Color Grading', 'Atmospheric Audio', 'Visual Storytelling'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-04',
    filename: 'Reel_04_Jzk2-8.mp4',
    videoUrl: '/portfolio/reels/Reel_04_Jzk2-8.mp4',
    title: 'High-Energy Rhythm & Sound Accents',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Fast visual cuts matched with crisp foley sound effects make every transition feel punchy and dynamic without feeling cluttered.',
    idealFor: 'Podcasters, interview highlights, and high-tempo creators',
    tags: ['Motion Graphics', 'Foley Sound', 'Dynamic Rhythm'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-05',
    filename: 'Reel_05_v.mp4',
    videoUrl: '/portfolio/reels/Reel_05_v.mp4',
    title: 'Brand-Aligned Motion & Contrast',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'We balanced exposure, framed the subject cleanly, and designed custom typography that stands out clearly in crowded social feeds.',
    idealFor: 'LinkedIn thought leaders, CEOs, and executive consultants',
    tags: ['Brand Polish', 'Typography', 'Lighting Balance'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-06',
    filename: 'Reel_06_.mp4',
    videoUrl: '/portfolio/reels/Reel_06_.mp4',
    title: 'Speed Ramping & Directional Transitions',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Smooth velocity curves and directional blur keep visual energy flowing between scenes so the viewer never hits a visual dead end.',
    idealFor: 'Lifestyle brands, sports creators, and creative directors',
    tags: ['Speed Ramping', 'Visual Effects', 'Seamless Cuts'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-07',
    filename: 'Reel_07_DPqOleRD9g6.mp4',
    videoUrl: '/portfolio/reels/Reel_07_DPqOleRD9g6.mp4',
    title: '3D Motion Graphics & UI Callouts',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Instead of flat screenshots, we built floating 3D perspective cards with animated cursors and metric highlights that make software intuitive.',
    idealFor: 'B2B SaaS startups, mobile apps, and technical founders',
    tags: ['3D Motion', 'UI Animation', 'Feature Callouts'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-08',
    filename: 'Reel_08_DPx8-szEwSQ.mp4',
    videoUrl: '/portfolio/reels/Reel_08_DPx8-szEwSQ.mp4',
    title: 'Clean Minimalist Authority Edit',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'A restrained visual style that uses clean typography, natural skin tones, and subtle sound to let the message speak with real authority.',
    idealFor: 'Keynote speakers, venture founders, and high-ticket advisors',
    tags: ['Minimalist Motion', 'Typography', 'Natural Color'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-09',
    filename: 'Reel_09_ao.mp4',
    videoUrl: '/portfolio/reels/Reel_09_ao.mp4',
    title: 'Cinematic Film Emulation & Mood',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Deep blacks, rich skin tones, and subtle atmospheric sound design give standard smartphone recordings a polished, cinematic weight.',
    idealFor: 'Luxury brands, visual artists, and high-end portfolios',
    tags: ['Film Emulation', 'Color Polish', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-10',
    filename: 'Reel_10_DP-zaS-E8yp.mp4',
    videoUrl: '/portfolio/reels/Reel_10_DP-zaS-E8yp.mp4',
    title: 'Scroll-Stopping Visual Hook',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'An immediate visual pattern interrupt paired with a punchy sound riser stops the thumb and earns the viewer\'s attention right away.',
    idealFor: 'Paid social media ads on Meta, TikTok, and YouTube',
    tags: ['Hook Design', 'Paid Ads', 'Impact Sound'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-11',
    filename: 'Reel_11_DQEmYxikwZJ.mp4',
    videoUrl: '/portfolio/reels/Reel_11_DQEmYxikwZJ.mp4',
    title: 'Modern Aesthetic Motion Design',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Clean graphic cards, smooth kinetic type, and visual badges give the entire video a sharp, cohesive aesthetic.',
    idealFor: 'Design agencies, creative consultants, and modern DTC brands',
    tags: ['Motion Design', 'Kinetic Type', 'Visual Polish'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-12',
    filename: 'Reel_12_DQGlbMKExxD.mp4',
    videoUrl: '/portfolio/reels/Reel_12_DQGlbMKExxD.mp4',
    title: 'High-Tempo Commercial Cut',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'Quick-fire edits with bold graphic popups and urgent visual pacing engineered for maximum engagement.',
    idealFor: 'E-commerce product drops and performance marketing teams',
    tags: ['Commercial Cut', 'Fast Pacing', 'Graphic Accents'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-13',
    filename: 'Reel_13_DQQ2u2IjKbn.mp4',
    videoUrl: '/portfolio/reels/Reel_13_DQQ2u2IjKbn.mp4',
    title: 'Performance Paid Social Ad Motion',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'Urgent text animations, motion graphics callouts, and sound cues designed to drive clear click-through actions.',
    idealFor: 'Direct-response ad campaigns on Instagram and TikTok',
    tags: ['Paid Social Ads', 'Motion Graphics', 'Conversion Cues'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-14',
    filename: 'Reel_14_DQRg-BBjKUH.mp4',
    videoUrl: '/portfolio/reels/Reel_14_DQRg-BBjKUH.mp4',
    title: 'Precision Kinetic Captions & FX',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Hand-timed kinetic subtitles with integrated vector effects that reinforce key points without distracting from the speaker.',
    idealFor: 'Educational creators, podcasters, and interview shows',
    tags: ['Kinetic Captions', 'Visual Effects', 'Audio Sync'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-15',
    filename: 'Reel_15_DQTavtKk3Tn.mp4',
    videoUrl: '/portfolio/reels/Reel_15_DQTavtKk3Tn.mp4',
    title: 'Dynamic Narrative Visual Flow',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Smooth transitions between dialogue, b-roll footage, and animated icons to keep the narrative engaging from start to finish.',
    idealFor: 'Founders, storytellers, and media brands',
    tags: ['Narrative Flow', 'Motion Graphics', 'B-Roll Mixing'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-16',
    filename: 'Reel_16_vr.mp4',
    videoUrl: '/portfolio/reels/Reel_16_vr.mp4',
    title: 'Directional Wipe & Blur Transitions',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Creative spatial wipe transitions with directional blur that connect separate visual moments seamlessly.',
    idealFor: 'Music, sports, lifestyle, and visual creators',
    tags: ['Transitions', 'Visual Effects', 'Motion Blur'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-17',
    filename: 'Reel_17_DQbKpfajO09.mp4',
    videoUrl: '/portfolio/reels/Reel_17_DQbKpfajO09.mp4',
    title: 'High-Contrast Animated Captions',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Bold, animated typography with custom contrast backing that guarantees 100% legibility over any background video.',
    idealFor: 'Talking-head videos for LinkedIn, Instagram, and Shorts',
    tags: ['Kinetic Typography', 'High Contrast', 'Brand Fonts'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-18',
    filename: 'Reel_18_DQcDsz5jHUo.mp4',
    videoUrl: '/portfolio/reels/Reel_18_DQcDsz5jHUo.mp4',
    title: 'Multi-Track Foley & Sound Mix',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Every cut, swipe, and visual reveal has dedicated sound effects layered with balanced background music to keep ears engaged.',
    idealFor: 'High-production short films, trailers, and promo reels',
    tags: ['Sound Design', 'Foley FX', 'Audio Mastering'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-19',
    filename: 'Reel_19_DQydq9MDOJd.mp4',
    videoUrl: '/portfolio/reels/Reel_19_DQydq9MDOJd.mp4',
    title: '3D Spatial Camera Tracking',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Graphics tracked in 3D camera space so cards, icons, and text feel physically anchored to the environment.',
    idealFor: 'Product walkthroughs, tech explainers, and commercial spots',
    tags: ['3D Tracking', 'Compositing', 'Visual FX'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-20',
    filename: 'Reel_20_DRB6ODpEysU.mp4',
    videoUrl: '/portfolio/reels/Reel_20_DRB6ODpEysU.mp4',
    title: 'High-Impact Micro-Hook',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'An ultra-fast 3-second opening animation that gives instant visual clarity before the viewer can scroll away.',
    idealFor: 'Paid ads and organic short-form openers',
    tags: ['Hook Velocity', 'Micro-Animation', 'Sound Riser'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-21',
    filename: 'Reel_21_DRJpT9eDNgL.mp4',
    videoUrl: '/portfolio/reels/Reel_21_DRJpT9eDNgL.mp4',
    title: 'Abstract 3D Motion Graphics',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Fluid 3D geometric shapes and dynamic lighting that provide an eye-catching visual backdrop.',
    idealFor: 'Brand anthems, title sequences, and event openers',
    tags: ['3D Animation', 'Lighting FX', 'Motion Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-22',
    filename: 'Reel_22_DRPAz6uDNer.mp4',
    videoUrl: '/portfolio/reels/Reel_22_DRPAz6uDNer.mp4',
    title: 'Rhythmic Typography Animation',
    category: 'kinetic-typography',
    categoryLabel: 'Kinetic Typography',
    description: 'Clean typography with purposeful movement that guides the viewer through the narrative with clarity.',
    idealFor: 'Quotes, insights, and personal brand talking points',
    tags: ['Kinetic Typography', 'Rhythm', 'Text Motion'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-23',
    filename: 'Reel_23_DRRa5zeDD0r.mp4',
    videoUrl: '/portfolio/reels/Reel_23_DRRa5zeDD0r.mp4',
    title: '2D Graphic Callouts & Badges',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Custom animated badges, checkmarks, and pointer arrows that highlight key takeaways as they\'re mentioned.',
    idealFor: 'Educational tutorials, coaching clips, and explainers',
    tags: ['2D Graphics', 'Badges', 'Visual Callouts'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-24',
    filename: 'Reel_24_DRT8DvmjCcO.mp4',
    videoUrl: '/portfolio/reels/Reel_24_DRT8DvmjCcO.mp4',
    title: 'Dynamic Speed Curves & Motion Blur',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Action-packed speed ramps and realistic motion blur that give fast movement an organic, high-energy feel.',
    idealFor: 'Product teasers, sports highlights, and visual reels',
    tags: ['Speed Ramping', 'Motion Blur', 'Energy'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-25',
    filename: 'Reel_25_DRWftkrDKKb.mp4',
    videoUrl: '/portfolio/reels/Reel_25_DRWftkrDKKb.mp4',
    title: 'Subtle Minimalist Brand Motion',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'Understated graphic motion that enhances the video without overpowering the core message.',
    idealFor: 'Corporate communications, luxury brands, and B2B founders',
    tags: ['Minimalist Motion', 'Brand Identity', 'Clean Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-26',
    filename: 'Reel_26_DRbqFR1jAXf.mp4',
    videoUrl: '/portfolio/reels/Reel_26_DRbqFR1jAXf.mp4',
    title: 'High-Energy Social Promo Reel',
    category: 'commercial-ads',
    categoryLabel: 'Commercial & Ads',
    description: 'Quick visual pacing with punchy text popups, sound effects, and smooth cutdowns designed for broad social distribution.',
    idealFor: 'Event promotions, launch announcements, and paid ads',
    tags: ['Social Promo', 'Fast Pacing', 'Sound Effects'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-27',
    filename: 'Reel_27_DRjXxxsjL-Q.mp4',
    videoUrl: '/portfolio/reels/Reel_27_DRjXxxsjL-Q.mp4',
    title: '3D Depth-of-Field & Floating Elements',
    category: '3d-vfx',
    categoryLabel: '3D & Visual Effects',
    description: 'Realistic camera depth-of-field and floating 3D graphic elements that create a rich sense of visual depth.',
    idealFor: 'Tech demos, luxury products, and modern brands',
    tags: ['3D Depth', 'Camera Optics', 'Visual Effects'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-28',
    filename: 'Reel_28_DVqu8j-DKto.mp4',
    videoUrl: '/portfolio/reels/Reel_28_DVqu8j-DKto.mp4',
    title: 'Cinematic Film Tone & Color Grade',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'Warm, balanced film emulation paired with subtle audio design that makes standard camera footage feel premium.',
    idealFor: 'Cinematic personal brands, documentaries, and creative reels',
    tags: ['Color Grading', 'Film Tone', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-29',
    filename: 'Reel_29_DX2AKQkIPPi.mp4',
    videoUrl: '/portfolio/reels/Reel_29_DX2AKQkIPPi.mp4',
    title: 'Complete Motion Graphics & Type Package',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'A full blend of kinetic typography, custom 2D illustrations, sound design, and color grading in a single cohesive edit.',
    idealFor: 'Founders, coaches, and creators wanting complete post-production',
    tags: ['Motion Graphics', 'Kinetic Typography', 'Sound Design'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-30',
    filename: 'Reel_30_DduI66ZTvjy.mp4',
    videoUrl: '/portfolio/reels/Reel_30_DduI66ZTvjy.mp4',
    title: 'Flagship Cinematic Story Film',
    category: 'sound-cinematic',
    categoryLabel: 'Cinematic & Sound',
    description: 'An extended visual narrative with multi-scene transitions, color correction, and bespoke sound design that keeps viewers engaged throughout.',
    idealFor: 'Brand films, keynote recaps, and long-form visual stories',
    tags: ['Cinematic Story', 'Color Grading', 'Multi-Track Sound'],
    aspectRatio: '9:16'
  },
  {
    id: 'reel-31',
    filename: 'Reel_31_DdzRrs1T5mt.mp4',
    videoUrl: '/portfolio/reels/Reel_31_DdzRrs1T5mt.mp4',
    title: 'Full Post-Production Studio Showcase',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    description: 'A comprehensive showcase demonstrating kinetic typography, 3D overlays, sound design, and speed ramping across varied visual formats.',
    idealFor: 'Anyone evaluating our complete post-production capabilities',
    tags: ['Studio Showcase', 'Motion Graphics', 'Sound Design'],
    aspectRatio: '9:16'
  }
];
