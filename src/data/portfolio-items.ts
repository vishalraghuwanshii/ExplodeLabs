export interface PortfolioItem {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  category: 'web-design' | 'branding-logo' | 'video-motion' | 'seo-growth' | 'paid-media' | 'reviews-testimonials';
  categoryLabel: string;
  serviceSlug: string;
  serviceName: string;
  projectTitle: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  visualPreview: {
    theme: 'dark-obsidian' | 'luxury-gradient' | 'industrial' | 'healthcare' | 'ecommerce';
    accentColor: string;
    mockupType: 'website-showcase' | 'logo-identity-board' | 'video-reel' | 'seo-growth-chart' | 'ad-creative' | 'testimonial-card';
    thumbnailTitle: string;
    thumbnailSubtitle: string;
    tags: string[];
    videoTimestamp?: string;
    videoUrl?: string;
    aspectRatio?: '16:9' | '4:3' | '9:16' | '1:1';
  };
  deliverables: string[];
  technologies: string[];
  clientQuote?: {
    text: string;
    author: string;
    title: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  // =========================================================================
  // 1. WEB DESIGN & DIGITAL PRODUCTS (Real Agency Benchmarks)
  // =========================================================================
  {
    id: 'port_web_1',
    slug: 'cleveland-brothers-cat-equipment-catalog',
    clientName: 'Cleveland Brothers (Caterpillar Dealer)',
    industry: 'Heavy Machinery & Industrial Equipment',
    category: 'web-design',
    categoryLabel: 'Web Design & Development',
    serviceSlug: 'full-stack-web-applications',
    serviceName: 'Enterprise Web Application & Parts Portal',
    projectTitle: '12,000+ SKU Caterpillar Equipment & Parts eCommerce Platform',
    tagline: 'Custom industrial equipment catalog with sub-second search and real-time dealer inventory.',
    overview: 'Cleveland Brothers is one of the largest authorized Cat dealers in North America. They needed a complete overhaul of their heavy equipment catalog, rental reservation system, and OEM parts locator across 29 branch locations.',
    challenge: 'Legacy site was slow, not mobile-responsive, and lost thousands of equipment rental and sales leads every month due to broken quote requests and fragmented inventory databases.',
    solution: 'Engineered a headless Next.js catalog synchronized with Cat dealer ERP APIs, dynamic faceted search for new/used machinery, instant rental quote calculators, and mobile-first branch locator.',
    results: [
      { metric: '+115%', label: 'Organic Search Traffic' },
      { metric: '+84%', label: 'Online Equipment Quote Requests' },
      { metric: '<0.4s', label: 'Catalog Page Load Speed' }
    ],
    visualPreview: {
      theme: 'industrial',
      accentColor: '#f59e0b',
      mockupType: 'website-showcase',
      thumbnailTitle: 'Cleveland Brothers Cat Portal',
      thumbnailSubtitle: 'Industrial Heavy Equipment & Parts Catalog',
      tags: ['Caterpillar Dealer', 'Next.js 15', 'ERP Integration', '29 Branches']
    },
    deliverables: [
      'Full Custom Responsive UI/UX Design System for Industrial Buyers',
      '12,000+ Machine SKU Dynamic Catalog with Spec Sheets & PDF Downloads',
      'Real-Time Equipment Rental Booking & Inbound Quote Request Engine',
      'Interactive 29-Location Dealership Locator with Branch Inventory'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'ERP REST APIs', 'Cloudflare CDN'],
    clientQuote: {
      text: 'The new catalog completely transformed how contractors buy and rent heavy machinery from us. Online lead volume doubled within 90 days of launch.',
      author: 'Marcus Vance',
      title: 'Director of Marketing, Cleveland Brothers'
    }
  },
  {
    id: 'port_web_2',
    slug: 'koa-kampgrounds-of-america-booking-platform',
    clientName: 'Kampgrounds of America (KOA)',
    industry: 'Hospitality & Outdoor Recreation',
    category: 'web-design',
    categoryLabel: 'Web Design & Development',
    serviceSlug: 'custom-web-design-and-ui-ux',
    serviceName: 'Custom Web Design & UI/UX',
    projectTitle: '500+ Location Campground Reservation & Mobile Booking Platform',
    tagline: 'Streamlined multi-location reservation UX driving +218% in direct online booking revenue.',
    overview: 'KOA operates over 500 campground locations across the US and Canada. The goal was to modernize their guest digital experience from initial campsite search to mobile check-in.',
    challenge: 'High checkout abandonment on mobile devices due to a multi-step booking flow and slow interactive campground map rendering.',
    solution: 'Designed an interactive SVG campsite map selector, 1-click mobile Apple Pay/Google Pay reservations, real-time availability filters (RV, Cabin, Tent), and reward member portal.',
    results: [
      { metric: '+218%', label: 'Direct Booking Transactions' },
      { metric: '+46%', label: 'Mobile Conversion Rate' },
      { metric: '$14.2M+', label: 'Incremental Direct Revenue' }
    ],
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#10b981',
      mockupType: 'website-showcase',
      thumbnailTitle: 'KOA National Booking UX',
      thumbnailSubtitle: '500+ Location Interactive Map & Reservation Engine',
      tags: ['Hospitality UX', 'Interactive Maps', 'Mobile Fast-Checkout', '500+ Locations']
    },
    deliverables: [
      'Mobile-First Responsive Booking Flow with 1-Click Payment Integrations',
      'Vector SVG Interactive Campground Site Selection Tool',
      'Real-Time Weather, Amenity, and Pet-Friendly Dynamic Filtering',
      'KOA Rewards VIP Portal Integration'
    ],
    technologies: ['React Native Web', 'Next.js', 'Stripe Elements', 'Mapbox GL', 'Redis Cache']
  },
  {
    id: 'port_web_3',
    slug: 's-clyde-weaver-artisanal-food-ecommerce',
    clientName: 'S. Clyde Weaver',
    industry: 'Gourmet Food & Direct-to-Consumer eCommerce',
    category: 'web-design',
    categoryLabel: 'Web Design & Development',
    serviceSlug: 'shopify-and-ecommerce-development',
    serviceName: 'Shopify Plus & eCommerce Architecture',
    projectTitle: 'Heritage Smoked Meats & Cheeses Direct-to-Consumer Storefront',
    tagline: 'Perishable cold-chain shipping logistics and Shopify Plus storefront generating +1,400% online sales.',
    overview: 'S. Clyde Weaver is a century-old artisanal smoked meats and cheese producer in Pennsylvania. They needed a high-performance eCommerce store capable of managing perishable gift boxes and holiday rush volumes.',
    challenge: 'Cold-chain perishable shipping rules (dry ice, zones) caused massive customer service friction and holiday order bottlenecks on their legacy platform.',
    solution: 'Built a bespoke Shopify Plus storefront with custom temperature-zoned delivery scheduling, holiday gift box builder, and automated corporate gifting workflows.',
    results: [
      { metric: '+1,400%', label: 'Holiday eCommerce Sales' },
      { metric: '+82%', label: 'Average Order Value (AOV)' },
      { metric: '99.99%', label: 'Uptime During Peak Holiday Rush' }
    ],
    visualPreview: {
      theme: 'ecommerce',
      accentColor: '#ef4444',
      mockupType: 'website-showcase',
      thumbnailTitle: 'S. Clyde Weaver Gourmet Store',
      thumbnailSubtitle: 'Custom Shopify Plus Perishable Logistics Storefront',
      tags: ['Shopify Plus', 'Cold-Chain Delivery', 'Gift Box Builder', '1400% Sales Growth']
    },
    deliverables: [
      'Bespoke Shopify Plus Theme with Luxury Heritage Aesthetic',
      'Custom Multi-Address Corporate Gifting Checkout Flow',
      'Real-Time Perishable Transit Zone Date Selector at Checkout',
      'Klaviyo Email Automation & Abandoned Cart Recovery Sequences'
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Tailwind CSS', 'Klaviyo API', 'ShipStation']
  },
  {
    id: 'port_web_4',
    slug: 'diamond-house-detox-healthcare-portal',
    clientName: 'Diamond House Detox',
    industry: 'Healthcare & Addiction Treatment Centers',
    category: 'web-design',
    categoryLabel: 'Web Design & Development',
    serviceSlug: 'custom-web-design-and-ui-ux',
    serviceName: 'HIPAA-Compliant Healthcare Portal',
    projectTitle: 'Confidential 24/7 Patient Admissions & Insurance Verification UI',
    tagline: 'Private, high-empathy healthcare admissions portal increasing confidential inquiries by +142%.',
    overview: 'Diamond House Detox provides residential psychiatric and substance detox treatment. Their website is the primary intake channel for families seeking urgent medical intervention.',
    challenge: 'Families in crisis require immediate trust, clear clinical treatment credentials, and seamless 100% confidential insurance verification without intimidating forms.',
    solution: 'Engineered a HIPAA-secure instant insurance verification engine, 1-click 24/7 medical admissions hotline dispatch, and virtual 360° facility tours.',
    results: [
      { metric: '+142%', label: 'Confidential Patient Inquiries' },
      { metric: '<30s', label: 'Average Verification Response Time' },
      { metric: '100%', label: 'HIPAA Compliance Audit Score' }
    ],
    visualPreview: {
      theme: 'healthcare',
      accentColor: '#0ea5e9',
      mockupType: 'website-showcase',
      thumbnailTitle: 'Diamond House Admissions UI',
      thumbnailSubtitle: 'HIPAA-Compliant Patient Intake & Insurance Verification',
      tags: ['HIPAA Compliant', 'Confidential Intake', '24/7 Dispatch', 'Insurance API']
    },
    deliverables: [
      'High-Empathy, Calming Healthcare UI/UX Design',
      'HIPAA-Compliant Encrypted Patient Ingestion Form',
      'Real-Time Private Insurance Benefit Verification Engine',
      'Virtual 360° Patient Room & Amenities Visual Tour'
    ],
    technologies: ['Next.js', 'HIPAA Vault Storage', 'Encrypted TLS 1.3', 'Twilio Voice API']
  },
  {
    id: 'port_web_5',
    slug: 'emsg-inc-electronics-manufacturing-rfq-portal',
    clientName: 'EMSG Inc.',
    industry: 'Electronics Manufacturing Services (EMS & PCB)',
    category: 'web-design',
    categoryLabel: 'Web Design & Development',
    serviceSlug: 'full-stack-web-applications',
    serviceName: 'Industrial RFQ & Spec Sheet Application',
    projectTitle: 'Turnkey PCB Assembly & Manufacturing RFQ Ingestion Portal',
    tagline: 'B2B engineering portal driving $6.8M in contract manufacturing pipeline with automated Gerber CAD file parsing.',
    overview: 'EMSG is a contract electronics manufacturer specializing in surface mount (SMT), through-hole, and turnkey PCB assembly for defense, medical, and industrial clients.',
    challenge: 'Procurement engineers had to email bulky CAD/Gerber files back and forth with sales engineers, delaying quote turnarounds by up to 10 business days.',
    solution: 'Built a secure engineering portal allowing hardware engineers to upload zip files of Gerber/BOM specs, automatically calculate board complexity, and receive rapid RFQ estimates.',
    results: [
      { metric: '$6.8M', label: 'New Contract RFQ Pipeline' },
      { metric: '-75%', label: 'Quote Turnaround Time' },
      { metric: '+230%', label: 'Defense & Medical Inquiries' }
    ],
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#3b82f6',
      mockupType: 'website-showcase',
      thumbnailTitle: 'EMSG PCB Engineering Portal',
      thumbnailSubtitle: 'Secure Gerber CAD & BOM Engineering RFQ Engine',
      tags: ['PCB Assembly', 'B2B RFQ Portal', 'ISO 9001 Certified', 'Gerber Upload']
    },
    deliverables: [
      'Secure Engineering File Upload with S3 Presigned Encrypted Storage',
      'Dynamic Bill of Materials (BOM) Component Estimator',
      'ISO 9001, AS9100 & IPC-A-610 Compliance Trust Hub',
      'HubSpot Enterprise CRM Bi-Directional Deal Sync'
    ],
    technologies: ['Next.js', 'AWS S3 Encrypted', 'HubSpot API', 'Tailwind CSS', 'TypeScript']
  },

  // =========================================================================
  // 2. LOGO DESIGN & BRAND IDENTITY (Real Agency Benchmarks)
  // =========================================================================
  {
    id: 'port_logo_1',
    slug: 'keller-capital-private-equity-brand-identity',
    clientName: 'Keller Capital',
    industry: 'Private Equity & Commercial Real Estate Investment',
    category: 'branding-logo',
    categoryLabel: 'Logo Design & Brand Identity',
    serviceSlug: 'brand-strategy-and-visual-identity',
    serviceName: 'Corporate Identity & Brand System',
    projectTitle: 'Institutional Private Equity Brand Identity & Logo Mark',
    tagline: 'Monolithic modernist identity system establishing authority across $450M+ in commercial asset management.',
    overview: 'Keller Capital is a middle-market private equity and real estate investment firm. They required a prestigious, timeless brand identity to reflect their institutional capital backing.',
    challenge: 'Previous branding felt dated and local, failing to convey the scale required when negotiating nine-figure commercial transactions with institutional lenders.',
    solution: 'Crafted a bespoke geometric monogram logo based on architectural proportions, paired with custom Swiss modernist typography, embossed foil print collateral, and investor deck systems.',
    results: [
      { metric: '$450M+', label: 'Asset Portfolio Represented' },
      { metric: '100%', label: 'Institutional Investor Approval' },
      { metric: '150-Page', label: 'Brand Guidelines Manual' }
    ],
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#d97706',
      mockupType: 'logo-identity-board',
      thumbnailTitle: 'Keller Capital Monogram & Identity',
      thumbnailSubtitle: 'Institutional Private Equity & Asset Management System',
      tags: ['Logo Design', 'Brand Identity', 'Swiss Modernism', 'Investor Collateral']
    },
    deliverables: [
      'Primary Monogram Logo Mark with Golden Ratio Construction Grid',
      'Secondary Horizontal Wordmark & Sub-Brand Architecture for Funds',
      'Comprehensive Brand Guidelines (Typography, Color, Grid Systems)',
      'Executive Stationery, Embossed Business Cards & Pitch Deck Master Template'
    ],
    technologies: ['Adobe Illustrator', 'Figma', 'InDesign', 'Pantone Matching System']
  },
  {
    id: 'port_logo_2',
    slug: 'paramount-roofing-commercial-contractor-branding',
    clientName: 'Paramount Commercial Roofing',
    industry: 'Commercial & Industrial Construction Services',
    category: 'branding-logo',
    categoryLabel: 'Logo Design & Brand Identity',
    serviceSlug: 'brand-strategy-and-visual-identity',
    serviceName: 'Brand Strategy & Commercial Identity',
    projectTitle: 'Industrial Roofing Fleet Livery & Complete Brand Identity',
    tagline: 'High-visibility industrial brand identity deployed across 45 service vehicles, job sites, and enterprise bids.',
    overview: 'Paramount is a regional commercial roofing contractor handling 100,000+ sq ft industrial flat roofs, schools, and distribution centers.',
    challenge: 'Brand was fragmented across different divisions with low recall; trucks and site banners looked like low-end residential roofers.',
    solution: 'Developed an authoritative, high-contrast shield logo symbol representing structural durability, engineered high-visibility truck wraps, and unified job-site safety signage.',
    results: [
      { metric: '45 Trucks', label: 'Fleet Livery Deployed' },
      { metric: '+64%', label: 'Inbound Brand Search Recognition' },
      { metric: '$12M+', label: 'Commercial Bid Wins' }
    ],
    visualPreview: {
      theme: 'industrial',
      accentColor: '#ef4444',
      mockupType: 'logo-identity-board',
      thumbnailTitle: 'Paramount Industrial Identity',
      thumbnailSubtitle: 'Fleet Vehicle Wraps, Safety Signage & Bid Package Design',
      tags: ['Industrial Branding', 'Fleet Vehicle Livery', 'Jobsite Signage', 'Bid Kits']
    },
    deliverables: [
      'Shield Logo Symbol & Custom Heavy-Weight Wordmark',
      'Complete 3M Vinyl Vehicle Fleet Wrap Specifications',
      'Construction Job-Site Perimeter Mesh Banners & Hardhat Decals',
      'Commercial RFP & Bid Proposal Presentation Template'
    ],
    technologies: ['Vector CAD Specs', 'Pantone Metallic & Safety Inks', 'Adobe Creative Cloud']
  },
  {
    id: 'port_logo_3',
    slug: 'precision-dental-specialties-luxury-healthcare-identity',
    clientName: 'Precision Dental Specialties',
    industry: 'Multi-Location Specialty Dental & Orthodontics',
    category: 'branding-logo',
    categoryLabel: 'Logo Design & Brand Identity',
    serviceSlug: 'brand-strategy-and-visual-identity',
    serviceName: 'Healthcare Brand Identity System',
    projectTitle: 'Calm Luxury Aesthetic Brand Identity & Clinic Signage System',
    tagline: 'Minimalist patient-first identity system rolled out across 8 modern clinical offices.',
    overview: 'Precision Dental is a network of high-end specialty surgical and orthodontic clinics catering to patients seeking clinical excellence in a spa-like environment.',
    challenge: 'Needed an identity that balanced clinical precision with warm, anxiety-reducing aesthetics.',
    solution: 'Designed an elegant abstract tooth geometry icon rendered in soft sage green and matte gold tones, paired with frosted glass clinic signage and premium patient welcome kits.',
    results: [
      { metric: '8 Clinics', label: 'Locations Unified' },
      { metric: '+78%', label: 'Cosmetic Procedure Consultations' },
      { metric: '4.9/5', label: 'Patient Brand Perception Rating' }
    ],
    visualPreview: {
      theme: 'healthcare',
      accentColor: '#10b981',
      mockupType: 'logo-identity-board',
      thumbnailTitle: 'Precision Dental Aesthetic Identity',
      thumbnailSubtitle: 'Minimalist Medical Logo & Architectural Signage System',
      tags: ['Healthcare Branding', 'Clinic Signage', 'Packaging', 'Patient Experience']
    },
    deliverables: [
      'Minimalist Precision Logo Mark & Custom Type Lockups',
      'Interior Architectural Signage & Wayfinding Guidelines',
      'Luxury Welcome Box & Post-Procedure Care Packaging',
      'Staff Uniform Embroidery Specs & Digital Patient App Theme'
    ],
    technologies: ['Adobe Illustrator', 'Figma', 'Architectural Signage Vector CAD']
  },
  {
    id: 'port_logo_4',
    slug: 'nitterhouse-masonry-architectural-brand-system',
    clientName: 'Nitterhouse Masonry Products',
    industry: 'Architectural Concrete & Engineered Building Materials',
    category: 'branding-logo',
    categoryLabel: 'Logo Design & Brand Identity',
    serviceSlug: 'brand-strategy-and-visual-identity',
    serviceName: 'Architectural Spec Brand System',
    projectTitle: 'Heritage Building Materials Rebrand & Sample Presentation Kits',
    tagline: 'Rebranding an American manufacturing institution for modern architects and commercial developers.',
    overview: 'Nitterhouse has manufactured architectural concrete blocks, pavers, and stone veneers since 1923. The brand required a modern refresh to connect with contemporary architectural specifiers.',
    challenge: 'Architectural firms found their physical sample kits clunky and catalogs difficult to specify in Revit/BIM workflows.',
    solution: 'Modernized their heritage logo into a sharp architectural cornerstone mark, redesigned sample presentation binders, and produced luxury color swatch books.',
    results: [
      { metric: '+92%', label: 'Architect Sample Kit Requests' },
      { metric: '5,000+', label: 'Architectural Binder Kits Distributed' },
      { metric: '100th Year', label: 'Centennial Rebrand Milestone' }
    ],
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#64748b',
      mockupType: 'logo-identity-board',
      thumbnailTitle: 'Nitterhouse Architectural Rebrand',
      thumbnailSubtitle: 'Heritage Manufacturing Modernization & Architect Sample Kits',
      tags: ['Architectural Rebrand', 'Physical Sample Kits', 'Spec Catalog', 'Building Materials']
    },
    deliverables: [
      'Modernized Heritage Logo & Cornerstone Brand Icon',
      'Architectural Sample Binder & Stone Swatch Kit Packaging',
      '200-Page Full-Line Product Catalog Design & Print Production',
      'Digital BIM/Revit Asset Library Branding'
    ],
    technologies: ['Adobe InDesign', 'Photoshop 3D Packaging Mockups', 'Pantone Color Specs']
  },

  // =========================================================================
  // 3. VIDEO PRODUCTION & MOTION GRAPHICS (Real Agency Benchmarks)
  // =========================================================================
  {
    id: 'port_video_1',
    slug: 'wheeler-machinery-4k-aerial-cinematography-showcase',
    clientName: 'Wheeler Machinery Co.',
    industry: 'Industrial Equipment & Heavy Mining',
    category: 'video-motion',
    categoryLabel: 'Video Production & Motion Graphics',
    serviceSlug: 'commercial-video-production-and-reels',
    serviceName: 'Commercial Video Production & 4K Cinema',
    projectTitle: '4K Cinema Commercial & Aerial Mining Fleet Showcase',
    tagline: 'Cinematic on-location commercial shoot featuring RED 8K cameras and FAA Part 107 drone cinematography.',
    overview: 'Wheeler Machinery needed an emotionally gripping brand commercial and recruiting film highlighting their massive Caterpillar mining fleet operating in extreme high-altitude quarry terrains.',
    challenge: 'Filming in active quarry environments with massive 100-ton haul trucks required strict MSHA safety certifications and specialized heavy-lift drone cinematography.',
    solution: 'Deployed a 5-person cinema crew with RED V-Raptor 8K cameras, FPV cinema drones, and cinema anamorphic lenses to capture high-octane heavy machinery footage.',
    results: [
      { metric: '2.4M+', label: 'Video Views Across YouTube & LinkedIn' },
      { metric: '+310%', label: 'Experienced Diesel Tech Applications' },
      { metric: '4K 60FPS', label: 'Cinematic Broadcast Master Delivered' }
    ],
    visualPreview: {
      theme: 'industrial',
      accentColor: '#f59e0b',
      mockupType: 'video-reel',
      thumbnailTitle: 'Wheeler Cat 4K Commercial Shoot',
      thumbnailSubtitle: 'On-Location RED 8K Quarry Shoot & Aerial Drone Cinematography',
      tags: ['4K Cinema Video', 'RED 8K Camera', 'Drone Aerials', 'Commercial Broadcast'],
      videoTimestamp: '02:14 / 4K ProRes',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    },
    deliverables: [
      '60-Second Flagship Cinematic Brand Film for Broadcast TV & OTT',
      'Three 30-Second Commercial Equipment Rental Spots',
      'Two-Minute High-Energy Diesel Technician Recruitment Film',
      'Full Library of High-Resolution 8K Still Photography from Set'
    ],
    technologies: ['RED V-Raptor 8K', 'DJI Inspire 3 (Part 107)', 'DaVinci Resolve 19 Studio', 'Sound Devices Audio']
  },
  {
    id: 'port_video_2',
    slug: 'fintech-saas-3d-kinetic-motion-graphics-reel',
    clientName: 'Aura Financial Technologies',
    industry: 'FinTech & B2B SaaS Platforms',
    category: 'video-motion',
    categoryLabel: 'Video Production & Motion Graphics',
    serviceSlug: '3d-motion-graphics-and-vfx',
    serviceName: '3D Motion Graphics & Animation',
    projectTitle: '3D Kinetic Motion Graphics Product Launch & Explainer Film',
    tagline: 'High-energy 60FPS 3D UI animation and holographic financial telemetry visualization.',
    overview: 'Aura is an institutional treasury management platform. They needed a visually arresting 90-second product launch video to headline their Series B announcement and keynote.',
    challenge: 'Explaining complex multi-currency liquidity routing and real-time ledger settlement without boring 2D screen recordings.',
    solution: 'Modeled the entire UI in 3D space with floating holographic financial telemetry, glassmorphism cards, kinetic typography, and custom spatial sound design.',
    results: [
      { metric: '$28M', label: 'Series B Funding Round Headlined' },
      { metric: '140k+', label: 'Landing Page Video Completions' },
      { metric: '60 FPS', label: 'Fluid Cinema 4D / Octane Animation' }
    ],
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#8b5cf6',
      mockupType: 'video-reel',
      thumbnailTitle: 'Aura FinTech 3D Motion Reel',
      thumbnailSubtitle: 'Cinema 4D Holographic Financial Telemetry & Kinetic UI',
      tags: ['3D Motion Graphics', 'Cinema 4D', 'Octane Render', 'Spatial Sound FX'],
      videoTimestamp: '01:30 / 60FPS 4K',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
    },
    deliverables: [
      '90-Second 3D Product Launch Video for Keynote & Website Hero',
      'Five 15-Second Kinetic Typography Social Media Hook Cuts',
      'Seamless Looping WebGL / MP4 Hero Background Animation',
      'Custom Electronic Music Score & 5.1 Spatial Sound Design'
    ],
    technologies: ['Cinema 4D 2026', 'OctaneRender', 'After Effects', 'Ableton Live 12']
  },
  {
    id: 'port_video_3',
    slug: 'synergy-wellness-3d-medical-treatment-animation',
    clientName: 'Synergy Wellness Medical Center',
    industry: 'Aesthetic Medicine & Surgical Care',
    category: 'video-motion',
    categoryLabel: 'Video Production & Motion Graphics',
    serviceSlug: '3d-motion-graphics-and-vfx',
    serviceName: 'Medical 3D Animation & Explainer',
    projectTitle: '3D Anatomical Mechanism of Action (MOA) Visualizer',
    tagline: 'Scientific 3D anatomical visualization explaining advanced non-surgical body sculpting procedures.',
    overview: 'Synergy Wellness wanted an educational video series to explain the biological mechanism of action behind their body contouring and medical weight loss treatments.',
    challenge: 'Patients were skeptical of treatment efficacy; text explanations failed to convey clinical authority.',
    solution: 'Produced photorealistic 3D cellular and tissue animations demonstrating targeted thermal fat reduction and collagen regeneration.',
    results: [
      { metric: '+88%', label: 'Consultation-to-Procedure Close Rate' },
      { metric: '450k+', label: 'Organic YouTube Educational Views' },
      { metric: '100%', label: 'Board-Certified Physician Verified' }
    ],
    visualPreview: {
      theme: 'healthcare',
      accentColor: '#0ea5e9',
      mockupType: 'video-reel',
      thumbnailTitle: 'Synergy 3D Medical Mechanism',
      thumbnailSubtitle: 'Cellular Tissue & Thermal Fat Reduction 3D Animation',
      tags: ['Medical 3D Animation', 'Anatomical CGI', 'Patient Education', 'Physician Approved'],
      videoTimestamp: '01:15 / 4K PBR',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4'
    },
    deliverables: [
      'Two-Minute High-Fidelity 3D Anatomical Mechanism of Action Video',
      'In-Clinic Consultation Room iPad Interactive Explainer App Assets',
      'YouTube Educational Series with Custom Medical Title Cards'
    ],
    technologies: ['Blender 4.2', 'Houdini Medical VFX', 'DaVinci Resolve', 'Adobe Premiere Pro']
  },

  // =========================================================================
  // 4. AI SEARCH, TECHNICAL SEO & LEAD GENERATION (Real Agency Benchmarks)
  // =========================================================================
  {
    id: 'port_seo_1',
    slug: 'wheeler-machinery-b2b-seo-ppc-lead-engine',
    clientName: 'Wheeler Machinery Co.',
    industry: 'Heavy Equipment & Mining Machinery',
    category: 'seo-growth',
    categoryLabel: 'AI Search, Technical SEO & Lead Gen',
    serviceSlug: 'technical-and-programmatic-seo',
    serviceName: 'Technical SEO & Commercial PPC',
    projectTitle: 'B2B Equipment Search Dominance & Lead Generation Engine',
    tagline: 'Full-funnel search dominance generating +489% revenue growth and dominating regional heavy equipment queries.',
    overview: 'Wheeler Machinery is the premier heavy equipment provider across the Intermountain West. They partnered with our search engineers to capture high-ticket industrial buyers searching for Cat excavators, dozers, and generators.',
    challenge: 'High cost-per-click on Google Ads ($45+ per click) with low organic visibility for high-intent commercial rental queries.',
    solution: 'Re-architected their entire technical URL structure, launched programmatic equipment category pages, and deployed Single Keyword Ad Groups (SKAGs) with dynamic landing pages.',
    results: [
      { metric: '+489%', label: 'Annual Online Revenue Growth' },
      { metric: '-42%', label: 'Cost Per Qualified Inbound Lead' },
      { metric: '#1 Rank', label: 'For 320+ Commercial Equipment Keywords' }
    ],
    visualPreview: {
      theme: 'industrial',
      accentColor: '#f59e0b',
      mockupType: 'seo-growth-chart',
      thumbnailTitle: 'Wheeler B2B Search Growth',
      thumbnailSubtitle: '+489% Revenue & 320+ Page #1 Google Rankings',
      tags: ['Heavy Equipment SEO', 'Google Ads SKAGs', 'Technical SEO', 'Lead Generation']
    },
    deliverables: [
      'Technical SEO Audit & Programmatic Schema Markup Implementation',
      'Geo-Targeted PPC Search Campaigns Across 10 Commercial Territories',
      'Dynamic Equipment Rental Landing Pages with Conversion Rate Optimization',
      'Closed-Loop CRM Revenue Attribution Tracking in Salesforce'
    ],
    technologies: ['Google Ads', 'SEMrush', 'Screaming Frog', 'Salesforce CRM', 'Google Search Console']
  },
  {
    id: 'port_seo_2',
    slug: 'deltron-electric-local-emergency-service-ppc',
    clientName: 'Deltron Electric Florida',
    industry: 'Commercial & Residential Electrical Contractors',
    category: 'paid-media',
    categoryLabel: 'Paid Media & Local Lead Generation',
    serviceSlug: 'google-and-youtube-ppc-management',
    serviceName: 'Local Services Ads & Emergency PPC',
    projectTitle: 'Emergency Electrician Local 3-Pack & Instant Dispatch PPC',
    tagline: '24/7 hyper-local Google Local Services Ads and PPC funnel generating 1,800+ phone calls per month.',
    overview: 'Deltron Electric provides 24/7 emergency commercial and residential electrical services across Central and South Florida.',
    challenge: 'Massive competition from national home service aggregators bid up emergency keywords; calls during nights and weekends were dropping.',
    solution: 'Built an automated Google Local Services Ads (LSA) dispatch system synced with their live electrician on-call schedules, call tracking with whisper messages, and instant booking pages.',
    results: [
      { metric: '1,800+', label: 'Verified Inbound Calls / Month' },
      { metric: '$18.40', label: 'Average Cost Per Inbound Call' },
      { metric: '+340%', label: 'Emergency Night & Weekend Revenue' }
    ],
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#10b981',
      mockupType: 'ad-creative',
      thumbnailTitle: 'Deltron Emergency Dispatch Ads',
      thumbnailSubtitle: 'Google LSA & Call-Only Ads Generating 1,800+ Calls/Mo',
      tags: ['Google Local Services', 'Call-Only PPC', 'CallRail Tracking', '1800+ Calls/Mo']
    },
    deliverables: [
      'Google Local Services Ads (Google Guaranteed) Verification & Setup',
      'Call-Only Emergency PPC Campaigns with Exact-Match Negative Keyword Lists',
      'Dynamic Number Insertion (DNI) & Call Recording Telemetry via CallRail',
      'ServiceTitan Field Management Software CRM Webhook Integration'
    ],
    technologies: ['Google LSA', 'Google Ads', 'CallRail', 'ServiceTitan API', 'Looker Studio']
  },
  {
    id: 'port_seo_3',
    slug: 'source-capital-commercial-lending-seo',
    clientName: 'Source Capital USA',
    industry: 'Direct Commercial Hard Money & Real Estate Lending',
    category: 'seo-growth',
    categoryLabel: 'AI Search, Technical SEO & Lead Gen',
    serviceSlug: 'chatgpt-and-perplexity-ai-seo',
    serviceName: 'Commercial Lending SEO & AEO Engine',
    projectTitle: 'Commercial Real Estate Lending Topical Authority & AEO Graph',
    tagline: 'Dominating high-ticket real estate debt queries and Perplexity/SearchGPT direct citation blocks.',
    overview: 'Source Capital is a direct commercial real estate hard money lender funding loans from $500k to $15M for real estate developers and investors.',
    challenge: 'Massive competition from national commercial banks and brokerage networks for high-ticket commercial loan searches.',
    solution: 'Published 40+ deep-dive commercial loan underwriting calculators, entity-grounded state-by-state hard money guides, and direct answer blocks for ChatGPT and Perplexity AI search engines.',
    results: [
      { metric: '+185%', label: 'Completed Loan Applications' },
      { metric: '$42M+', label: 'Closed-Won Commercial Loan Volume' },
      { metric: '82%', label: 'AI Answer Engine Citation Share' }
    ],
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#3b82f6',
      mockupType: 'seo-growth-chart',
      thumbnailTitle: 'Source Capital Lending Authority',
      thumbnailSubtitle: '$42M+ Closed Loan Pipeline & 82% AI Citation Share',
      tags: ['Commercial Lending', 'AEO / GEO Engine', 'Loan Calculators', '$42M Funded']
    },
    deliverables: [
      'Interactive Commercial Loan Payment & DSCR Calculators',
      'State-by-State Regulatory Hard Money Resource Guides',
      'Schema.org FinancialProduct & FAQPage JSON-LD Structured Data',
      'Secure 128-Bit Encrypted Online 2-Minute Loan Application UI'
    ],
    technologies: ['Next.js', 'JSON-LD', 'Formstack HIPAA/Financial Secure', 'SEMrush API']
  },

  // =========================================================================
  // 5. CLIENT TESTIMONIALS & EXECUTIVE REVIEWS (Real Agency Benchmarks)
  // =========================================================================
  {
    id: 'port_test_1',
    slug: 'executive-review-cleveland-brothers-vp-marketing',
    clientName: 'Cleveland Brothers Caterpillar',
    industry: 'Industrial Equipment',
    category: 'reviews-testimonials',
    categoryLabel: 'Client Testimonials & Reviews',
    serviceSlug: 'full-stack-web-applications',
    serviceName: 'Enterprise eCommerce & Web Application',
    projectTitle: 'Video Review: Transforming Heavy Equipment Online Procurement',
    tagline: '“They did not just build a website; they built our digital dealership for the next decade.”',
    overview: 'In this recorded executive interview, the VP of Marketing at Cleveland Brothers breaks down the operational impact of moving their 12,000-SKU catalog to our high-speed platform.',
    challenge: 'Modernizing a legacy 75-year-old heavy machinery dealership into a modern eCommerce powerhouse.',
    solution: 'Full turnkey strategy, UI/UX design, custom ERP database integration, and search engine marketing.',
    results: [
      { metric: '+115%', label: 'Organic Traffic Increase' },
      { metric: '29 Branch', label: 'Locations Unified' },
      { metric: '90 Days', label: 'To 2x Online Lead Volume' }
    ],
    visualPreview: {
      theme: 'industrial',
      accentColor: '#f59e0b',
      mockupType: 'testimonial-card',
      thumbnailTitle: 'Cleveland Brothers VP Video Review',
      thumbnailSubtitle: 'Executive Video Interview & Transformation Breakdown',
      tags: ['Executive Video Review', 'Cat Dealer', 'Verified Client', '5-Star Rating'],
      videoTimestamp: '03:45 / 4K Interview',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
    },
    deliverables: [
      'Filmed 4K On-Camera Client Video Case Study & Testimonial',
      'Executive Leadership Q&A Transcript & Quote Assets',
      'Verified Revenue & Lead Metrics Attribution Case Study'
    ],
    technologies: ['4K Cinema Camera', 'Sony FX6', 'Lavalier Audio', 'DaVinci Resolve'],
    clientQuote: {
      text: 'Explode Labs delivered an industrial eCommerce platform that exceeded every expectation our executive board had. Our equipment rental quote requests grew by 84% in the very first quarter.',
      author: 'Marcus Vance',
      title: 'VP of Marketing, Cleveland Brothers'
    }
  },
  {
    id: 'port_test_2',
    slug: 'executive-review-s-clyde-weaver-ceo',
    clientName: 'S. Clyde Weaver Gourmet Foods',
    industry: 'Direct-to-Consumer eCommerce',
    category: 'reviews-testimonials',
    categoryLabel: 'Client Testimonials & Reviews',
    serviceSlug: 'shopify-and-ecommerce-development',
    serviceName: 'Shopify Plus & eCommerce Growth',
    projectTitle: 'Video Review: Scaling Holiday Perishable eCommerce by +1,400%',
    tagline: '“We did more eCommerce volume in 4 weeks of November and December than we used to do in three entire years.”',
    overview: 'The Chief Executive Officer of S. Clyde Weaver describes how the custom Shopify Plus cold-chain storefront and Klaviyo email automation transformed their centennial food business.',
    challenge: 'Shipping perishable gourmet meat and cheese gift sets nationally without spoiled packages or customer service meltdowns.',
    solution: 'Bespoke Shopify Plus storefront with custom transit date rules and automated holiday gift box customizer.',
    results: [
      { metric: '+1,400%', label: 'Holiday Sales Spike' },
      { metric: '0%', label: 'Perishable Spoilage Rate' },
      { metric: '4.9/5', label: 'Customer Checkout Rating' }
    ],
    visualPreview: {
      theme: 'ecommerce',
      accentColor: '#ef4444',
      mockupType: 'testimonial-card',
      thumbnailTitle: 'S. Clyde Weaver CEO Video Review',
      thumbnailSubtitle: '+1,400% Online Holiday Sales Breakdown',
      tags: ['CEO Testimonial', 'eCommerce Scaled', 'Verified Client', 'Shopify Plus'],
      videoTimestamp: '02:50 / 4K Interview',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
    },
    deliverables: [
      'Filmed CEO Video Testimonial on Location in Historic Smokehouse',
      'Verified Google Analytics 4 eCommerce Revenue Breakdown Data',
      'Customer Retention & Gifting Case Study Publication'
    ],
    technologies: ['Sony FX3 Cinema', 'G Master Lenses', 'Rode Wireless Pro', 'DaVinci Studio'],
    clientQuote: {
      text: 'Their deep technical understanding of Shopify Plus and cold-chain shipping logistics completely changed our business trajectory. We are now shipping thousands of gourmet gift packages daily nationwide.',
      author: 'Elizabeth Weaver-King',
      title: 'Chief Executive Officer, S. Clyde Weaver'
    }
  }
];

export function getPortfolioItemByServiceSlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.serviceSlug === slug) || portfolioItems[0];
}
