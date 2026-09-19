export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientArchetype: string;
  pillar: 'seo-growth' | 'paid-media' | 'creative-media' | 'b2b-outbound' | 'custom-web' | 'ai-automation';
  pillarLabel: string;
  category: string;
  serviceSlug: string;
  serviceName: string;
  tagline: string;
  summary: string;
  visualPreview: {
    theme: 'dark-obsidian' | 'luxury-gradient' | 'neon-accent' | 'minimal-wireframe';
    accentColor: string;
    aspectRatio: '16:9' | '4:3' | '9:16' | '1:1';
    heroHeadline: string;
    subtext: string;
    badges: string[];
    statHighlight?: {
      value: string;
      label: string;
    };
    mockupType: 'browser-dashboard' | 'mobile-device' | '3d-render-canvas' | 'video-timeline' | 'architecture-node-graph' | 'ad-creative-suite' | 'data-warehouse-schema';
    mockupDetails: {
      headerTitle: string;
      kpis: { label: string; value: string }[];
      tags: string[];
      diagramNodes?: string[];
    };
  };
  deliverables: string[];
  technologies: string[];
  keyInnovations: string[];
}

export const portfolioItems: PortfolioItem[] = [
  // =========================================================================
  // PILLAR 1: AI SEARCH, ORGANIC GROWTH & TECHNICAL SEO (8 Artifacts)
  // =========================================================================
  {
    id: 'port_1',
    slug: 'geo-aeo-citation-knowledge-graph',
    title: 'Generative Engine Optimization & Citation Graph',
    clientArchetype: 'Enterprise B2B Market Intelligence Platform',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'chatgpt-and-perplexity-ai-seo',
    serviceName: 'ChatGPT & Perplexity AI SEO (GEO/AEO)',
    tagline: 'Direct citation definition blocks and Wikidata entity grounding securing 84% Perplexity citation share.',
    summary: 'Architected structured 40-word citation definitions, Schema.org dataset entities, and edge bot headers designed specifically for zero-latency indexing by GPTBot, PerplexityBot, and ClaudeBot.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#ff5500',
      aspectRatio: '16:9',
      heroHeadline: 'Citation Graph 84% AI Share',
      subtext: 'Structured Wikidata & Schema.org Dataset Anchoring',
      badges: ['GEO / AEO Engine', 'Perplexity Verified', 'Wikidata Linked'],
      statHighlight: { value: '84%', label: 'AI Answer Citation Share' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'AEO Entity Knowledge Graph Telemetry',
        kpis: [
          { label: 'Perplexity Pro Citations', value: '1,420/mo' },
          { label: 'SearchGPT Mentions', value: '890/mo' },
          { label: 'Entity Grounding Score', value: '98.4%' }
        ],
        tags: ['JSON-LD Dataset', 'Wikidata Q-ID', 'GPTBot Optimized', 'Zero-Latency Edge']
      }
    },
    deliverables: [
      '45 Answer-Engine Direct Citation Blocks (40–50 words in viewport)',
      'Schema.org SoftwareApplication, Dataset & FAQPage JSON-LD Schemas',
      'Wikidata & Crunchbase Knowledge Graph Entity Linking',
      'Automated Daily Multi-LLM Citation Tracking Dashboard'
    ],
    technologies: ['Next.js 15', 'JSON-LD', 'Wikidata API', 'Python LLM Telemetry', 'Cloudflare Edge'],
    keyInnovations: [
      'Direct snippet scraping architecture bypassing classic Google SERP volatility',
      'Original benchmark dataset hubs published with structured CSV downloads'
    ]
  },
  {
    id: 'port_2',
    slug: 'programmatic-b2b-catalog-engine',
    title: '12,000-SKU Programmatic SEO Architecture',
    clientArchetype: 'Industrial CNC & Heavy Equipment Manufacturer',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'technical-and-programmatic-seo',
    serviceName: 'Technical & Programmatic SEO',
    tagline: 'Sub-second dynamic catalog indexing generating $18.4M in closed-won B2B industrial pipeline.',
    summary: 'Engineered clean semantic URL hierarchies (`/machinery/[cat]/[sku]`) with automated CAD spec sheets, Product/Offer schemas, and clustered XML sitemaps.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#3b82f6',
      aspectRatio: '16:9',
      heroHeadline: '12,000+ Dynamic SKU Catalog',
      subtext: 'Next.js App Router Programmatic Page Generation',
      badges: ['Programmatic SEO', 'Lighthouse 98', 'Enterprise Indexing'],
      statHighlight: { value: '+540%', label: 'Organic B2B Traffic' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Programmatic SKU Directory Indexer',
        kpis: [
          { label: 'Pages Pre-Rendered', value: '12,450' },
          { label: 'Avg TTFB Response', value: '42ms' },
          { label: 'CAD Spec Downloads', value: '14,800' }
        ],
        tags: ['ISR Caching', 'Product Schema', 'CAD Viewer', 'Hierarchical Taxonomy']
      }
    },
    deliverables: [
      'Programmatic Catalog Next.js Template with Dynamic Facets',
      'Clustered XML Sitemap Generator splitting SKUs by category',
      'Automated Schema.org Product & Manufacturer Schemas',
      'Integrated CAD Spec Sheet Download Gating'
    ],
    technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vercel Edge'],
    keyInnovations: [
      'Zero database bottleneck using Incremental Static Regeneration (ISR)',
      'Sub-50ms TTFB on 12,000+ deep catalog product routes'
    ]
  },
  {
    id: 'port_3',
    slug: 'multi-location-franchise-local-grid',
    title: '85-Location Local SEO & Map Pack Dominance',
    clientArchetype: 'National Home & Commercial Facility Maintenance Franchise',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'local-and-franchise-seo',
    serviceName: 'Local & Franchise SEO',
    tagline: '85 geo-targeted city hubs with dynamic review widgets achieving 72 #1–#3 Google Map Pack positions.',
    summary: 'Built programmatic city landing pages with localized geo-coordinates, ServiceTitan review feeds, and hyper-local citation synchronization.',
    visualPreview: {
      theme: 'neon-accent',
      accentColor: '#10b981',
      aspectRatio: '16:9',
      heroHeadline: '85 Franchise Territory Engine',
      subtext: 'LocalBusiness JSON-LD & Dynamic Radius Mapping',
      badges: ['Local Map Pack', 'Franchise Scaling', 'ServiceTitan Sync'],
      statHighlight: { value: '72 / 85', label: 'Top-3 Map Pack Ranks' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Franchise Geo-Grid Telemetry',
        kpis: [
          { label: 'Active City Hubs', value: '85 Units' },
          { label: 'Call Volume Lift', value: '+380%' },
          { label: 'Review Average', value: '4.8 ★' }
        ],
        tags: ['LocalBusiness Schema', 'CallRail DNI', 'Geo-Coordinates', 'NAP Sync']
      }
    },
    deliverables: [
      '85 Geographically Isolated City Landing Pages',
      'Automated Google Business Profile API Synchronization',
      'ServiceTitan Live Customer Review Injection Widget',
      'LocalBusiness & GeoCircle Schema Knowledge Graph'
    ],
    technologies: ['Next.js 15', 'Google Business API', 'ServiceTitan API', 'Twilio SMS', 'CallRail'],
    keyInnovations: [
      'Zero internal keyword cannibalization between neighboring franchise territories',
      'Automated dispatch radius calculation with real-time ETA display'
    ]
  },
  {
    id: 'port_4',
    slug: 'headless-ecommerce-faceted-seo',
    title: 'Zero-Duplicate Headless E-Commerce SEO Architecture',
    clientArchetype: 'Luxury Streetwear & Collectibles Storefront ($15M GMV)',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'ecommerce-and-shopify-seo',
    serviceName: 'E-Commerce & Shopify Plus SEO',
    tagline: 'Canonical faceted search system eliminating URL parameter bloat and driving 4.4x organic revenue.',
    summary: 'Engineered a clean faceted collection system that converts high-value search facets into indexable static routes while canonicalizing non-indexable filter permutations.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#ff5500',
      aspectRatio: '16:9',
      heroHeadline: 'Headless Commerce SEO Core',
      subtext: 'Dynamic Facet Indexing & Product Schema Architecture',
      badges: ['Shopify Plus', 'Hydrogen 2.0', 'Faceted SEO'],
      statHighlight: { value: '0.9s', label: 'Mobile Page Speed' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Shopify Plus SEO Engine',
        kpis: [
          { label: 'Indexable Collections', value: '340' },
          { label: 'Lighthouse Mobile', value: '96 / 100' },
          { label: 'AOV Increase', value: '+28%' }
        ],
        tags: ['Clean Facets', 'Collection Schema', 'WebP Optimizer', 'Edge Caching']
      }
    },
    deliverables: [
      'Faceted Navigation Clean URL Rewriting Engine',
      'Automated Product, AggregateRating & InStock JSON-LD',
      'Dynamic Collection Filter Routing (`/collections/[brand]/[size]`)',
      'Lighthouse Mobile 95+ Core Web Vitals Optimization'
    ],
    technologies: ['Shopify Plus', 'Hydrogen', 'Next.js 15', 'Liquid', 'Sanity CMS'],
    keyInnovations: [
      '100% crawl budget preservation via selective robots canonicalization',
      'Sub-second collection filter transitions with optimistic UI state'
    ]
  },
  {
    id: 'port_5',
    slug: 'tier1-digital-pr-authority-engine',
    title: 'Tier-1 Digital PR & National Media Placements',
    clientArchetype: 'Enterprise Cloud Security & Zero-Trust SaaS',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'digital-pr-and-authority-link-building',
    serviceName: 'Digital PR & Authority Link Building',
    tagline: 'Proprietary Threat Vulnerability Index earning 14 Tier-1 editorial backlinks in Forbes & TechCrunch.',
    summary: 'Authored data-driven industry benchmark reports cited by national tech and security journalists, building a permanent domain authority moat.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#6366f1',
      aspectRatio: '16:9',
      heroHeadline: 'National PR & Backlink Authority',
      subtext: 'Data-Driven Threat Index Placements in Tier-1 Media',
      badges: ['Forbes Featured', 'TechCrunch Cited', 'DR 86 Backlinks'],
      statHighlight: { value: '14', label: 'Tier-1 National Press Features' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Digital PR Telemetry & Backlink Graph',
        kpis: [
          { label: 'Avg Domain Rating (DR)', value: '82' },
          { label: 'DoFollow Links Placed', value: '48' },
          { label: 'Referral Traffic', value: '+280%' }
        ],
        tags: ['Original Research', 'Journalist Outreach', 'Editorial Citation', 'HARO/MuckRack']
      }
    },
    deliverables: [
      'Quarterly Enterprise Threat Vulnerability Index Report',
      'Interactive Downloadable Data Hub with Embeddable Infographics',
      'Targeted MuckRack Journalist Outreach Campaigns',
      '14 Published Editorial Placements in Top-Tier Business Publications'
    ],
    technologies: ['MuckRack', 'BuzzStream', 'Ahrefs API', 'Next.js 15', 'Figma'],
    keyInnovations: [
      'Journalist-ready raw CSV and PNG embed kits driving organic attribution',
      'Zero PBNs or low-quality guest posts—100% editorial earned media'
    ]
  },
  {
    id: 'port_6',
    slug: 'multivariant-cro-dispatch-widget',
    title: '1-Click Mobile Emergency Dispatch CRO Funnel',
    clientArchetype: 'Multi-Location Home Services Network',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'conversion-rate-optimization-cro',
    serviceName: 'Conversion Rate Optimization (CRO)',
    tagline: 'Replacing a 14-field form with a 30-second mobile booking widget, slashing CPL by 52%.',
    summary: 'Engineered an interactive 3-step dispatch calculator providing upfront pricing and instant live dispatch scheduling on mobile browsers.',
    visualPreview: {
      theme: 'neon-accent',
      accentColor: '#f59e0b',
      aspectRatio: '16:9',
      heroHeadline: '1-Click Mobile Dispatch Funnel',
      subtext: 'Multivariant A/B Split Testing & Micro-Interaction Booking',
      badges: ['CRO Engine', 'A/B Tested', '-52% CPL'],
      statHighlight: { value: '+380%', label: 'Mobile Conversion Surge' },
      mockupType: 'mobile-device',
      mockupDetails: {
        headerTitle: 'Mobile Booking A/B Matrix',
        kpis: [
          { label: 'Form Completion Rate', value: '34.2%' },
          { label: 'Avg Booking Time', value: '28 sec' },
          { label: 'Cost Per Lead', value: '$86' }
        ],
        tags: ['3-Step Wizard', 'Instant Pricing', 'Apple Pay / G-Pay', 'SMS Confirm']
      }
    },
    deliverables: [
      '3-Step Mobile Interactive Dispatch Booking Widget',
      'Live Upfront Service Cost Estimator Engine',
      'VWO / Google Optimize Multivariant A/B Testing Framework',
      'PostHog Session Recording & Heatmap Telemetry'
    ],
    technologies: ['React 19', 'Tailwind CSS', 'PostHog', 'ServiceTitan API', 'Stripe'],
    keyInnovations: [
      'Frictionless progressive disclosure reducing cognitive load to zero',
      'Optimistic booking state with real-time technician GPS arrival counter'
    ]
  },
  {
    id: 'port_7',
    slug: 'technical-engineering-whitepaper-hub',
    title: 'Technical B2B Whitepapers & Spec Teardowns',
    clientArchetype: 'Aerospace & Industrial Engineering Enterprise',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'technical-copywriting-and-editorial',
    serviceName: 'Technical Copywriting & Editorial',
    tagline: 'Authoring 18 deep engineering buyer guides capturing high-intent aerospace procurement officers.',
    summary: 'Researched and authored high-density technical teardowns (*5-Axis CNC Tolerances in Aerospace Fabrication*) designed for technical buyers and answer engines.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#38bdf8',
      aspectRatio: '16:9',
      heroHeadline: 'Aerospace Engineering Teardowns',
      subtext: 'Rigorous Technical Copywriting & CAD Spec Analysis',
      badges: ['Technical Whitepapers', 'Aerospace Spec', 'High-ACV Lead Gen'],
      statHighlight: { value: '$18.4M', label: 'Pipeline Influenced' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Engineering Knowledge Hub',
        kpis: [
          { label: 'Whitepapers Published', value: '18 Volumes' },
          { label: 'Avg Read Time', value: '8.4 min' },
          { label: 'Procurement Inquiries', value: '420+' }
        ],
        tags: ['CAD Diagrams', 'Tolerance Tables', 'Executive Summaries', 'PDF Gating']
      }
    },
    deliverables: [
      '18 In-Depth 2,500+ Word Technical Whitepapers',
      'High-Resolution CAD Tolerance Diagram Graphics',
      'Gated PDF Download Center with Hubspot Lead Intelligence',
      'Comprehensive Technical Glossary with Schema.org DefinedTerm Schemas'
    ],
    technologies: ['Next.js 15', 'Figma', 'HubSpot API', 'KaTeX Math', 'Tailwind CSS'],
    keyInnovations: [
      'Zero shallow fluff—written by domain engineers for senior procurement directors',
      'Search engine and AI grounding via explicit entity definitions'
    ]
  },
  {
    id: 'port_8',
    slug: 'servicetitan-sms-review-interceptor',
    title: 'Automated SMS Review Generation & Triage Portal',
    clientArchetype: 'Multi-Unit Franchise Network (85 Branches)',
    pillar: 'seo-growth',
    pillarLabel: 'AI Search & SEO',
    category: '1. AI Search & Optimization',
    serviceSlug: 'online-reputation-management-and-reviews',
    serviceName: 'Online Reputation Management (ORM)',
    tagline: 'Automated post-job SMS dispatch collecting 14,000+ verified 5-star Google reviews and intercepting complaints.',
    summary: 'Built a webhook-driven review engine that automatically surveys customers 15 minutes after technician departure, filtering ratings to Google Map Pack or internal managers.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#10b981',
      aspectRatio: '16:9',
      heroHeadline: '14,000+ 5-Star Reviews Generated',
      subtext: 'Automated SMS Review Routing & Negative Sentiment Interceptor',
      badges: ['4.8 ★ Average', '14k Reviews', 'ServiceTitan Hook'],
      statHighlight: { value: '4.8 ★', label: 'Average Google Rating' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Review Interceptor & Sentiment Hub',
        kpis: [
          { label: 'SMS Response Rate', value: '62.4%' },
          { label: '5-Star Google Directs', value: '14,200' },
          { label: 'Grievances Resolved', value: '98.8%' }
        ],
        tags: ['Twilio API', 'ServiceTitan Webhook', 'Sentiment Filter', 'Google Review Link']
      }
    },
    deliverables: [
      'Automated Twilio SMS Post-Job Trigger Engine',
      'Smart Sentiment Triage Landing Flow',
      'Branch Manager Real-Time Slack Escalation Alert Bot',
      'Executive Multi-Location Rating Monitoring Console'
    ],
    technologies: ['Twilio API', 'ServiceTitan Webhooks', 'Next.js 15', 'PostgreSQL', 'Slack API'],
    keyInnovations: [
      'Zero manual follow-up required from technicians',
      '98.8% resolution rate on customer grievances before any public review is posted'
    ]
  },

  // =========================================================================
  // PILLAR 2: PAID PERFORMANCE MEDIA & MARKETPLACE ADS (6 Artifacts)
  // =========================================================================
  {
    id: 'port_9',
    slug: 'b2b-industrial-google-ads-skag',
    title: 'High-Intent Google Ads Architecture & Offline CRM Sync',
    clientArchetype: 'Industrial Equipment & Heavy Machinery Distributor',
    pillar: 'paid-media',
    pillarLabel: 'Paid Performance Media',
    category: '2. Paid Media & Acquisition',
    serviceSlug: 'high-performance-paid-advertising',
    serviceName: 'High-Performance Google Ads PPC',
    tagline: 'Single-keyword ad group structure with 1,500+ negatives cutting CPL from $340 to $128.',
    summary: 'Restructured enterprise PPC campaigns around high-margin industrial model numbers with offline conversion syncing in HubSpot to optimize for closed pipeline value.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#ff5500',
      aspectRatio: '16:9',
      heroHeadline: 'B2B Search Architecture $18M Pipeline',
      subtext: 'Exact-Match Model Number Bidding & HubSpot Offline Tracking',
      badges: ['4.8x ROAS', '$128 CPL', '1,500+ Negatives'],
      statHighlight: { value: '4.8x', label: 'Paid Search ROAS' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Google Ads B2B Telemetry Console',
        kpis: [
          { label: 'Conversion Rate', value: '8.9%' },
          { label: 'Cost Per Lead', value: '$128' },
          { label: 'Closed-Won Revenue', value: '$18.4M' }
        ],
        tags: ['Exact Match', 'Negative Sculpting', 'HubSpot Sync', 'Value-Based Bidding']
      }
    },
    deliverables: [
      'Restructured Google Search & Performance Max Account',
      '1,500+ Industrial Negative Keyword Sculpting Lists',
      'HubSpot CRM Offline Conversion Feedback Bridge',
      'Automated Weekly Ad Copy & Extension Split Testing'
    ],
    technologies: ['Google Ads API', 'HubSpot CRM', 'Google Tag Manager', 'BigQuery', 'Looker Studio'],
    keyInnovations: [
      'Smart bidding calibrated directly against closed enterprise deals rather than raw form fills',
      'Complete elimination of consumer-tier search query ad spend waste'
    ]
  },
  {
    id: 'port_10',
    slug: 'meta-tiktok-916-motion-ad-suite',
    title: 'Cinematic 9:16 Short-Form Paid Ad Creative Suite',
    clientArchetype: 'Luxury Streetwear & Footwear Brand ($14M GMV)',
    pillar: 'paid-media',
    pillarLabel: 'Paid Performance Media',
    category: '2. Paid Media & Acquisition',
    serviceSlug: 'social-media-advertising',
    serviceName: 'Social Media Advertising (Meta/TikTok)',
    tagline: 'Producing 40+ high-energy vertical video ad variants driving 4.4x blended ROAS on $2.4M spend.',
    summary: 'Engineered a rapid creative testing matrix testing visual hooks, 3D CGI product rotations, and UGC testimonials across Meta Reels and TikTok Ads.',
    visualPreview: {
      theme: 'neon-accent',
      accentColor: '#ec4899',
      aspectRatio: '9:16',
      heroHeadline: '4.4x ROAS Short-Form Suite',
      subtext: '40+ Cinematic Hook Variations with Motion Graphics',
      badges: ['Meta CAPI Container', 'TikTok Spark Ads', '4.4x ROAS'],
      statHighlight: { value: '$14.2M', label: 'GMV Generated' },
      mockupType: 'ad-creative-suite',
      mockupDetails: {
        headerTitle: 'Paid Social Creative Lab',
        kpis: [
          { label: 'Monthly Ad Spend', value: '$180,000' },
          { label: '3-Sec Hook Rate', value: '46.2%' },
          { label: 'Blended Paid ROAS', value: '4.4x' }
        ],
        tags: ['9:16 Vertical', 'Fast Motion VFX', 'Server CAPI', 'Dynamic Catalog Ads']
      }
    },
    deliverables: [
      '40+ High-Converting 9:16 Short-Form Motion Video Creatives',
      'Meta Conversions API (CAPI) Server-Side Container on GCP',
      'Creative Fatigue Rotation & Automated Budget Scaling Rules',
      'Klaviyo VIP Early Access Retargeting Campaign Integration'
    ],
    technologies: ['Meta Ads Manager', 'TikTok Ads API', 'GCP Cloud Run', 'DaVinci Resolve', 'Shopify Plus'],
    keyInnovations: [
      'Server-side CAPI event matching score of 9.4/10 overcoming iOS 14.5 signal degradation',
      'Dynamic product feed overlay with live inventory scarcity triggers'
    ]
  },
  {
    id: 'port_11',
    slug: 'amazon-premium-aplus-storefront-3d',
    title: 'Amazon Premium A+ Storefront & 3D Exploded Renders',
    clientArchetype: 'Sports Nutrition & Hydration Supplement Brand',
    pillar: 'paid-media',
    pillarLabel: 'Paid Performance Media',
    category: '2. Paid Media & Acquisition',
    serviceSlug: 'amazon-and-marketplace-marketing',
    serviceName: 'Amazon & Marketplace Marketing',
    tagline: 'Slashing Amazon ACOS from 52% to 17.8% and capturing the #1 Best Seller Badge.',
    summary: 'Redesigned Amazon brand storefront, modeled 3D ingredient explosion graphics, and deployed automated hourly PPC bid-harvesting algorithms.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#f97316',
      aspectRatio: '16:9',
      heroHeadline: 'Amazon #1 Best Seller Engine',
      subtext: 'Premium A+ Storefront & 3D CGI Ingredient Breakdown',
      badges: ['17.8% ACOS', '#1 Best Seller', '3D CGI Modules'],
      statHighlight: { value: '17.8%', label: 'Amazon ACOS (Down from 52%)' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Amazon DSP & Sponsored Ads Telemetry',
        kpis: [
          { label: 'Listing Conv Rate', value: '22.4%' },
          { label: 'Total Sales', value: '$8.6M' },
          { label: 'ACOS Reduction', value: '-65%' }
        ],
        tags: ['Premium A+', '3D Exploded Views', 'Exact Harvesting', 'DSP Retargeting']
      }
    },
    deliverables: [
      '14 Amazon Premium A+ Listing Overhauls with Video Modules',
      '3D CGI Supplement Canister & Molecule Renders',
      'Automated Hourly Search Term Harvesting Engine',
      'Amazon DSP Retargeting Campaigns for Repeat Subscriptions'
    ],
    technologies: ['Amazon Advertising API', 'Helium 10', 'Cinema 4D', 'Octane Render', 'Amazon DSP'],
    keyInnovations: [
      'Algorithmic negative bid throttling on non-converting competitor conquest keywords',
      'Interactive 3D flavor swatch comparison modules lifting listing conversion to 22.4%'
    ]
  },
  {
    id: 'port_12',
    slug: 'connected-tv-executive-storyboard',
    title: 'Connected TV (CTV) Executive Media Buy & Storyboards',
    clientArchetype: 'Enterprise Cybersecurity & Zero-Trust Platform',
    pillar: 'paid-media',
    pillarLabel: 'Paid Performance Media',
    category: '2. Paid Media & Acquisition',
    serviceSlug: 'programmatic-and-connected-tv-advertising',
    serviceName: 'Programmatic & Connected TV (CTV)',
    tagline: 'Surrounding Fortune 500 CISOs on CNBC & Bloomberg with 88% video completion rates.',
    summary: 'Programmatically targeted corporate campus IP subnets with premium Connected TV video ads synchronized with LinkedIn executive thought-leadership.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#8b5cf6',
      aspectRatio: '16:9',
      heroHeadline: 'Connected TV Enterprise Surround',
      subtext: 'Bloomberg, CNBC & Wall Street Journal IP Targeting',
      badges: ['88% VCR', 'Fortune 500 IPs', 'The Trade Desk'],
      statHighlight: { value: '$45.2M', label: 'Pipeline Generated' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Programmatic CTV Telemetry',
        kpis: [
          { label: 'Video Completion Rate', value: '88.4%' },
          { label: 'Target Account Reach', value: '242 / 250' },
          { label: 'Executive Lift Score', value: '+42%' }
        ],
        tags: ['The Trade Desk', 'IP Geo-Fencing', 'Household Sync', 'LinkedIn Retargeting']
      }
    },
    deliverables: [
      '30-Second & 60-Second Broadcast-Quality Connected TV Spots',
      'Target Account IP Graph Configuration on The Trade Desk',
      'Multi-Touch Attribution Dashboard Syncing CTV to Pipeline',
      'Synchronized Executive Retargeting Sequences on LinkedIn'
    ],
    technologies: ['The Trade Desk', 'Bombora Intent Data', 'Next.js 15', 'DaVinci Resolve Studio', 'Salesforce'],
    keyInnovations: [
      'IP-level cross-device tracking linking living-room TV views to office desktop demo requests',
      'Zero ad waste by excluding non-target consumer households'
    ]
  },
  {
    id: 'port_13',
    slug: 'one-to-one-abm-dynamic-briefing-hub',
    title: '1-to-1 Dynamic ABM Executive Briefing Portals',
    clientArchetype: 'SOC2 & Cloud Infrastructure Enterprise SaaS',
    pillar: 'paid-media',
    pillarLabel: 'Paid Performance Media',
    category: '2. Paid Media & Acquisition',
    serviceSlug: 'account-based-marketing-abm',
    serviceName: 'Account-Based Marketing (ABM)',
    tagline: 'Personalized interactive security briefing hubs for 250 named Fortune 1000 targets.',
    summary: 'Engineered dynamic sub-domains displaying customized threat assessment data, executive welcome videos, and 1-click POC scheduling.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#3b82f6',
      aspectRatio: '16:9',
      heroHeadline: '250 Personalized ABM Portals',
      subtext: 'Dynamic Enterprise Threat Intelligence for Fortune 500 Buyers',
      badges: ['64% Response Rate', '48 Active POCs', '1-to-1 ABM'],
      statHighlight: { value: '64%', label: 'Executive Response Rate' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Dynamic ABM Account Console',
        kpis: [
          { label: 'Target Accounts Live', value: '250 Portals' },
          { label: 'Active Enterprise POCs', value: '48 Accounts' },
          { label: 'Avg Deal Size', value: '$240k ACV' }
        ],
        tags: ['Dynamic Subdomains', 'Personalized Video', 'Bombora Webhooks', 'Salesforce Sync']
      }
    },
    deliverables: [
      '250 Dynamically Rendered 1-to-1 Account Web Portals',
      'Custom Threat Vulnerability Teardown Embeds',
      'Salesforce & Demandbase Real-Time Alert Webhooks',
      'Executive Direct Mail Physical Gifting Integration'
    ],
    technologies: ['Next.js 15', 'Tailwind CSS', 'Demandbase', 'Salesforce API', 'Vercel Edge Middleware'],
    keyInnovations: [
      'Real-time edge rewriting dynamically rendering company logo and custom security telemetry on arrival',
      'Instant Slack notification to account executives the second a target CISO opens their briefing'
    ]
  },
  {
    id: 'port_14',
    slug: 'creator-ugc-whitelisting-spark-ads',
    title: '65-Creator UGC Whitelisting & Spark Ad Engine',
    clientArchetype: 'Fitness Tech & Clean Nutrition Brand',
    pillar: 'paid-media',
    pillarLabel: 'Paid Performance Media',
    category: '2. Paid Media & Acquisition',
    serviceSlug: 'influencer-and-creator-marketing',
    serviceName: 'Influencer & Creator Marketing',
    tagline: 'Coordinating 65 creators to drive authentic viral UGC amplified with 4.2x ROAS paid TikTok Spark Ads.',
    summary: 'Built an end-to-end creator briefing, whitelisting, and attribution workflow routing off-Amazon traffic to maximize Amazon Brand Referral bonuses.',
    visualPreview: {
      theme: 'neon-accent',
      accentColor: '#ec4899',
      aspectRatio: '9:16',
      heroHeadline: '65-Creator UGC Flywheel',
      subtext: 'TikTok Spark Ads Whitelisting & Amazon Referral Engine',
      badges: ['65 Creators', '4.2x Spark ROAS', '10% Amazon Bonus'],
      statHighlight: { value: '4.2x', label: 'Creator Ad ROAS' },
      mockupType: 'ad-creative-suite',
      mockupDetails: {
        headerTitle: 'Creator Whitelisting Pipeline',
        kpis: [
          { label: 'Whitelisted Handles', value: '65 Creators' },
          { label: 'UGC Video Assets', value: '140 Videos' },
          { label: 'Referral Bonus Lift', value: '+$84,000' }
        ],
        tags: ['TikTok Spark Ads', 'Amazon Attribution', 'Creator Whitelist', 'UGC Scaling']
      }
    },
    deliverables: [
      '65 Creator Partnership Management & Creative Briefs',
      '140+ Authentically Edited UGC Video Creative Variations',
      'TikTok & Meta Creator Whitelisting Campaign Architecture',
      'Amazon Attribution Tag Tracking & Referral Bonus Dashboard'
    ],
    technologies: ['TikTok Ads Manager', 'Meta Creator Studio', 'Amazon Attribution', 'CapCut Pro', 'Shopify'],
    keyInnovations: [
      'Ads running natively through verified creator accounts with authentic engagement comments intact',
      'Automated commission tracking connected directly to Amazon SKU sales'
    ]
  },

  // =========================================================================
  // PILLAR 3: CREATIVE MEDIA, 3D CGI & BRAND DESIGN (6 Artifacts)
  // =========================================================================
  {
    id: 'port_15',
    slug: 'commercial-4k-cinema-video-reel',
    title: 'Commercial 4K Cinema Video Post-Production & Color Grade',
    clientArchetype: 'Enterprise Cybersecurity & Threat Intelligence Brand',
    pillar: 'creative-media',
    pillarLabel: 'Creative Media & 3D',
    category: '3. Creative Media & Brand Design',
    serviceSlug: 'video-editing-and-post-production',
    serviceName: 'Video Editing & Post-Production',
    tagline: 'RED V-Raptor 8K footage, custom sound design, and Hollywood-grade DaVinci Resolve color grading.',
    summary: 'Engineered a cinematic brand film and episodic docuseries with dynamic sound design, kinetic pacing, and custom ACES color pipeline.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#ef4444',
      aspectRatio: '16:9',
      heroHeadline: '4K RED Cinema Brand Film',
      subtext: 'DaVinci Resolve ACES Color Grade & 5.1 Surround Sound Design',
      badges: ['RED 8K Cinema', 'ACES Color Pipeline', '5.1 Sound Design'],
      statHighlight: { value: '88%', label: 'Video Completion Rate' },
      mockupType: 'video-timeline',
      mockupDetails: {
        headerTitle: 'DaVinci Resolve 19 Post Suite',
        kpis: [
          { label: 'Source Resolution', value: '8K RED RAW' },
          { label: 'Sound Tracks', value: '32 Audio Stems' },
          { label: 'Deliverable Cuts', value: '12 Formats' }
        ],
        tags: ['ACES Color', 'Grain Master', 'Dolby 5.1', 'Sub-Frame Editing']
      }
    },
    deliverables: [
      '90-Second Master 4K Cinematic Brand Film',
      '6 Episodic Social Cutdowns (16:9, 9:16, 1:1)',
      'Custom 5.1 Surround Sound Mix & Mastered Audio Stems',
      'Full ACES Color Grade XML Project Package'
    ],
    technologies: ['DaVinci Resolve Studio', 'RED CINE-X PRO', 'iZotope RX', 'Pro Tools', 'After Effects'],
    keyInnovations: [
      'Hollywood-standard ACES color pipeline ensuring consistent dark-mode obsidian contrast on OLED screens',
      'Dynamic sub-bass cinematic soundscapes customized for enterprise executive presentations'
    ]
  },
  {
    id: 'port_16',
    slug: 'fintech-motion-graphics-vfx',
    title: 'Kinetic Motion Graphics & Real-Time Financial VFX',
    clientArchetype: 'Institutional Capital Allocation & Private Equity Portal',
    pillar: 'creative-media',
    pillarLabel: 'Creative Media & 3D',
    category: '3. Creative Media & Brand Design',
    serviceSlug: 'motion-graphics-and-visual-effects',
    serviceName: 'Motion Graphics & Visual Effects (VFX)',
    tagline: 'Sub-80ms transaction animations and kinetic typography visualizing $800M in capital flow.',
    summary: 'Designed abstract 3D capital particle systems, UI micro-interactions, and kinetic visual explainers for ultra-high-net-worth investor onboarding.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#10b981',
      aspectRatio: '16:9',
      heroHeadline: 'Kinetic Capital Flow VFX',
      subtext: '60FPS Particle Systems & Real-Time Financial Telemetry',
      badges: ['60FPS Animation', 'After Effects VFX', 'Institutional UI'],
      statHighlight: { value: '$800M+', label: 'Capital Allocated' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'FinTech Motion UI & Particle Graph',
        kpis: [
          { label: 'Render Frame Rate', value: '60 FPS Native' },
          { label: 'Order Book Latency', value: '<80ms' },
          { label: 'KYC Onboarding', value: '94% Pass' }
        ],
        tags: ['Kinetic Typography', 'Particle Physics', 'Lottie JSON', 'WebGL Shaders']
      }
    },
    deliverables: [
      '3D Kinetic Platform Explainer Video Reel',
      '60FPS Lightweight Lottie JSON UI Animations',
      'Interactive WebGL Financial Flow Background Shaders',
      'Institutional Investor Video Pitch Deck Deck Suite'
    ],
    technologies: ['Cinema 4D', 'After Effects', 'Lottie Web', 'Three.js / WebGL', 'Figma'],
    keyInnovations: [
      'Ultra-lightweight vector Lottie animations running at 60FPS without degrading Next.js page speed',
      'Mathematical particle simulation accurately representing multi-currency secondary market liquidity'
    ]
  },
  {
    id: 'port_17',
    slug: 'photorealistic-3d-cgi-octane-renders',
    title: 'Photorealistic 3D CGI Product Modeling & Octane Renders',
    clientArchetype: 'Luxury Footwear & High-End Consumer Tech Brand',
    pillar: 'creative-media',
    pillarLabel: 'Creative Media & 3D',
    category: '3. Creative Media & Brand Design',
    serviceSlug: '3d-product-modeling-and-rendering',
    serviceName: '3D Product Modeling & CGI Rendering',
    tagline: 'Cinema 4D & Octane Render product models with interactive 3D WebGL inspection.',
    summary: 'Crafted sub-millimeter 3D digital twins with photorealistic textures (brushed titanium, breathable mesh, luxury leather) and an interactive web viewer.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#f97316',
      aspectRatio: '1:1',
      heroHeadline: 'Sub-Millimeter 3D CGI Twins',
      subtext: 'Cinema 4D & Octane Renders with Interactive 360° WebGL Inspection',
      badges: ['Cinema 4D', 'Octane Render', 'WebGL 3D Viewer'],
      statHighlight: { value: '-48%', label: 'Return Rate Reduction' },
      mockupType: '3d-render-canvas',
      mockupDetails: {
        headerTitle: '3D CGI Asset Canvas',
        kpis: [
          { label: 'Polygon Count', value: '240k Polys' },
          { label: 'Texture Resolution', value: '8K PBR Maps' },
          { label: 'Model Weight', value: '2.4MB Optimized' },
        ],
        tags: ['PBR Materials', 'Octane Lighting', 'GLTF / USDZ', 'Interactive WebGL']
      }
    },
    deliverables: [
      'Photorealistic 8K Product Still Renders (Multiple Angles & Lighting Setups)',
      '360-Degree Interactive WebGL 3D Model Viewer Component',
      'Exploded View CGI Technical Breakdowns',
      'AR-Ready USDZ & GLTF Assets for iOS/Android Sizing Inspection'
    ],
    technologies: ['Cinema 4D', 'Octane Render', 'Substance 3D Painter', 'Three.js / React Three Fiber', 'Blender'],
    keyInnovations: [
      'Compressed 2.4MB 3D web models rendering at 60FPS on mobile devices with zero lag',
      'Photorealistic sub-surface scattering on organic and textile materials'
    ]
  },
  {
    id: 'port_18',
    slug: 'scalable-obsidian-uiux-design-system',
    title: 'Scalable Obsidian UI/UX Design System (150+ Tokens)',
    clientArchetype: 'Enterprise B2B SaaS & Financial Portals',
    pillar: 'creative-media',
    pillarLabel: 'Creative Media & 3D',
    category: '3. Creative Media & Brand Design',
    serviceSlug: 'ui-ux-design-and-design-systems',
    serviceName: 'UI/UX Design & Design Systems',
    tagline: 'Figma component library with dark obsidian tokens, mathematical type scales, and WCAG 2.2 compliance.',
    summary: 'Constructed an institutional design system featuring 150+ modular components, auto-layout tokens, accessible color palettes, and interactive micro-states.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#ff5500',
      aspectRatio: '16:9',
      heroHeadline: '150+ Component Dark Design System',
      subtext: 'Figma Tokens, Tailwind CSS Classes & Micro-Interactions',
      badges: ['150+ Figma Tokens', 'Dark Obsidian', 'WCAG 2.2 Compliant'],
      statHighlight: { value: '150+', label: 'Design System Tokens' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Design Token Specification',
        kpis: [
          { label: 'Component Variants', value: '180 Variants' },
          { label: 'Contrast Ratio', value: '12.4:1 (AAA)' },
          { label: 'Dev Handoff Speed', value: '3x Faster' }
        ],
        tags: ['Auto-Layout 5.0', 'Variable Tokens', 'Dark Obsidian (#080808)', 'Tailwind CSS']
      }
    },
    deliverables: [
      'Master Figma Component Library (150+ accessible components)',
      'Design Token JSON Schema integrated directly with Tailwind CSS',
      'Interactive Interactive Prototype covering all user journeys',
      'Comprehensive Design Documentation & Engineering Handoff Guide'
    ],
    technologies: ['Figma', 'Tokens Studio', 'Tailwind CSS v4', 'Storybook', 'TypeScript'],
    keyInnovations: [
      'Mathematical 8pt spatial grid with optical balance adjustments for high-density dashboards',
      'Dynamic color token mapping allowing instant theme switching and high-contrast accessibility modes'
    ]
  },
  {
    id: 'port_19',
    slug: 'swiss-modernist-brand-identity-system',
    title: 'Swiss Modernist Brand Identity & Typography Architecture',
    clientArchetype: 'Institutional FinTech & Private Equity Fund',
    pillar: 'creative-media',
    pillarLabel: 'Creative Media & 3D',
    category: '3. Creative Media & Brand Design',
    serviceSlug: 'brand-identity-and-visual-systems',
    serviceName: 'Brand Identity & Visual Systems',
    tagline: 'Clean geometric logomarks, Swiss typographic hierarchies, and luxury corporate collateral.',
    summary: 'Engineered a prestigious brand identity system combining bespoke geometric iconography, typographic rigor, and dark luxury physical/digital collateral.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#d4d4d8',
      aspectRatio: '16:9',
      heroHeadline: 'Swiss Modernist Brand Identity',
      subtext: 'Geometric Iconography, Swiss Typography & Luxury Guidelines',
      badges: ['Brand Architecture', 'Swiss Modernism', 'Vector Precision'],
      statHighlight: { value: '100%', label: 'Executive Brand Cohesion' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Brand Identity Standards Manual',
        kpis: [
          { label: 'Typography Scale', value: 'Modular 1.25' },
          { label: 'Color Contrast', value: 'Obsidian & Gold' },
          { label: 'Brand Asset Files', value: '120 Vectors' }
        ],
        tags: ['Vector Geometry', 'Negative Space Mark', 'Editorial Typography', 'Brand Guidelines']
      }
    },
    deliverables: [
      'Primary, Secondary & Monogram Vector Logomarks (SVG / EPS / PDF)',
      '60-Page Brand Guidelines & Visual Identity Standards Manual',
      'Executive Stationery, Pitch Deck & Investor Portal Collateral',
      'Digital Iconography & Social Asset Library'
    ],
    technologies: ['Adobe Illustrator', 'Figma', 'InDesign', 'Cinema 4D', 'FontFont Typefaces'],
    keyInnovations: [
      'Precision negative space icon engineering maintaining razor sharpness at 16px favicon sizes',
      'Harmonized dark-mode color gamut eliminating visual fatigue during prolonged executive usage'
    ]
  },
  {
    id: 'port_20',
    slug: 'faa-part107-drone-cinematography',
    title: 'FAA Part 107 Commercial 4K Drone Aerial Media Reel',
    clientArchetype: 'Commercial Real Estate & Industrial Technology Enterprise',
    pillar: 'creative-media',
    pillarLabel: 'Creative Media & 3D',
    category: '3. Creative Media & Brand Design',
    serviceSlug: 'drone-and-commercial-media-production',
    serviceName: 'Drone & Commercial Media Production',
    tagline: 'Dynamic FPV high-speed fly-throughs and 4K cinema aerial footage of corporate campuses.',
    summary: 'Captured high-precision 4K commercial aerial cinematography and indoor FPV fly-throughs for national commercial television spots and enterprise recruiting.',
    visualPreview: {
      theme: 'neon-accent',
      accentColor: '#38bdf8',
      aspectRatio: '16:9',
      heroHeadline: '4K FPV Drone Cinematography',
      subtext: 'High-Speed Indoor Fly-Throughs & 4K Cinema Aerials',
      badges: ['FAA Part 107', 'FPV Fly-Through', 'ProRes 422 HQ'],
      statHighlight: { value: '4K 60P', label: 'ProRes Master Quality' },
      mockupType: 'video-timeline',
      mockupDetails: {
        headerTitle: 'Aerial Post-Production Suite',
        kpis: [
          { label: 'Camera Sensor', value: '4/3 Hasselblad' },
          { label: 'Color Pipeline', value: 'D-Log M to Rec709' },
          { label: 'Flight Stability', value: 'RockSteady 3.0' }
        ],
        tags: ['FAA Licensed', 'FPV Indoors', 'Night Clearance', 'Gyroflow Stabilized']
      }
    },
    deliverables: [
      'Full 4K ProRes 422 HQ Commercial Aerial Reel',
      'FPV High-Speed Indoor Facility One-Shot Fly-Through Video',
      'Color-Graded High-Resolution Aerial Stills for Print & Web',
      'Full Raw Footage Archive with Commercial Licensing Rights'
    ],
    technologies: ['DJI Inspire 3', 'Custom 5-inch FPV Drones', 'DaVinci Resolve Studio', 'Gyroflow', 'ProRes HQ'],
    keyInnovations: [
      'Custom sub-250g ducted FPV drones flying seamlessly within 6 inches of automated factory robots',
      'Night-flight FAA airspace waivers enabling dramatic illuminated corporate campus footage'
    ]
  },

  // =========================================================================
  // PILLAR 4: B2B OUTBOUND & SALES AUTOMATION (2 Artifacts)
  // =========================================================================
  {
    id: 'port_21',
    slug: '30-domain-outbound-sdr-engine',
    title: '30-Domain Secondary Outbound Cold Email Infrastructure',
    clientArchetype: 'Enterprise B2B SaaS ($3.2M ARR Target)',
    pillar: 'b2b-outbound',
    pillarLabel: 'B2B Outbound & SDR',
    category: '4. B2B Outbound & Lead Generation',
    serviceSlug: 'b2b-outbound-sdr-and-lead-generation',
    serviceName: 'B2B Outbound SDR & Lead Generation',
    tagline: 'Clay dynamic waterfall enrichment engine generating 68 closed enterprise accounts.',
    summary: 'Configured 30 secondary Google Workspace and Microsoft 365 domains with automated SPF/DKIM/DMARC warmup and dynamic Clay enrichment waterfalls.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#3b82f6',
      aspectRatio: '16:9',
      heroHeadline: '30-Domain Cold Outreach Engine',
      subtext: 'Clay Waterfall Enrichment & Automated Smartlead Sequences',
      badges: ['30 Domains Live', '99.4% Deliverability', '68 Accounts Closed'],
      statHighlight: { value: '68', label: 'Enterprise Accounts Closed' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Outbound SDR Telemetry Console',
        kpis: [
          { label: 'Weekly Emails Sent', value: '18,500' },
          { label: 'Open Rate', value: '74.2%' },
          { label: 'Positive Reply Rate', value: '8.6%' }
        ],
        tags: ['Smartlead', 'Clay Waterfall', 'DKIM/DMARC', 'AI Personalization']
      }
    },
    deliverables: [
      '30 Secondary Inboxes with Automated SPF, DKIM & DMARC Configuration',
      'Clay Waterfall Lead Enrichment Workflow (Apollo + Hunter + GitHub API)',
      '12 Segmented Copy Sequences with Dynamic Telemetric Snippets',
      'Bi-Directional HubSpot / Salesforce Lead Sync Webhooks'
    ],
    technologies: ['Smartlead', 'Clay.com', 'Google Workspace', 'HubSpot API', 'Apollo.io'],
    keyInnovations: [
      'Zero risk to client primary corporate email domain reputation',
      'Dynamic personalization scraping live GitHub commits and hiring signals of target engineering leaders'
    ]
  },
  {
    id: 'port_22',
    slug: 'klaviyo-12-flow-lifecycle-engine',
    title: '12-Flow Behavioral Lifecycle Marketing & Retention Engine',
    clientArchetype: 'Omnichannel D2C & Subscription Brand ($14M GMV)',
    pillar: 'b2b-outbound',
    pillarLabel: 'B2B Outbound & SDR',
    category: '4. B2B Outbound & Lead Generation',
    serviceSlug: 'lifecycle-and-cold-email-infrastructure',
    serviceName: 'Lifecycle & Cold Email Infrastructure',
    tagline: 'Automated RFM customer cohort segmentation generating 32% of total store revenue on autopilot.',
    summary: 'Engineered 12 behavior-driven Klaviyo flows including VIP early drop access, cart abandonment with dynamic discount tiers, and win-back sequences.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#10b981',
      aspectRatio: '16:9',
      heroHeadline: '12 Automated Klaviyo Flows',
      subtext: 'RFM Customer Segmentation & Dynamic Behavioral Triggers',
      badges: ['32% Email Revenue', '12 Flows Live', 'SMS Sync'],
      statHighlight: { value: '+28%', label: 'Customer LTV Lift' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Lifecycle Revenue Telemetry',
        kpis: [
          { label: 'Attributed Email Rev', value: '$4.5M' },
          { label: 'Cart Recovery Rate', value: '18.4%' },
          { label: 'Repeat Purchase Rate', value: '38.2%' }
        ],
        tags: ['Klaviyo Flows', 'RFM Analysis', 'Attentive SMS', 'Shopify Plus Sync']
      }
    },
    deliverables: [
      '12 Comprehensive Klaviyo Behavioral Automated Email Flows',
      'Custom Dark Luxury HTML Email Design Templates',
      'Integrated Attentive SMS Marketing Broadcast Engine',
      'RFM (Recency, Frequency, Monetary) Customer Segmentation Matrix'
    ],
    technologies: ['Klaviyo', 'Shopify Plus', 'Attentive SMS', 'Figma', 'HTML/MJML'],
    keyInnovations: [
      'Dynamic discount escalation ladders triggered only when cart value exceeds $200',
      'Automated replenishment reminders synchronized with individual supplement usage cycles'
    ]
  },

  // =========================================================================
  // PILLAR 5: CUSTOM WEB, SAAS & DEVOPS ENGINEERING (8 Artifacts)
  // =========================================================================
  {
    id: 'port_23',
    slug: 'nextjs15-enterprise-web-platform',
    title: 'Next.js 15 / React 19 Enterprise Web Application',
    clientArchetype: 'High-Growth Series B B2B SaaS Enterprise',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'custom-web-application-development',
    serviceName: 'Custom Web Applications (Next.js 15 / React 19)',
    tagline: 'Sub-second edge rendering with React Server Components slashing initial load from 8.4s to 1.1s.',
    summary: 'Rewrote a bloated single-page app into a high-performance Next.js 15 App Router platform with edge API caching and TypeScript type safety.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#ff5500',
      aspectRatio: '16:9',
      heroHeadline: 'Next.js 15 App Router Architecture',
      subtext: 'React Server Components, Streaming SSR & Edge API Routes',
      badges: ['Next.js 15', 'React 19', 'Lighthouse 99'],
      statHighlight: { value: '1.1s', label: 'Dashboard Load Time' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Next.js 15 Core Web Vitals Monitor',
        kpis: [
          { label: 'LCP (Largest Content)', value: '0.8s' },
          { label: 'FID / INP Interaction', value: '18ms' },
          { label: 'Client Bundle Size', value: '88kB' }
        ],
        tags: ['React Server Components', 'Tailwind CSS v4', 'Edge Middleware', 'Zod Validation']
      }
    },
    deliverables: [
      'Production Next.js 15 App Router Codebase with Strict TypeScript',
      'Modular Tailwind CSS UI Component Library',
      'Edge Middleware for Real-Time Geo-Routing and Auth Verification',
      'Automated Vercel CI/CD Deployment Pipeline'
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Zod'],
    keyInnovations: [
      'Server Component data fetching with zero client JavaScript bundle bloat',
      'Streaming HTML chunks delivering instant perceived rendering on slow mobile networks'
    ]
  },
  {
    id: 'port_24',
    slug: 'multitenant-saas-mvp-platform',
    title: 'Multi-Tenant SaaS MVP Architecture with PostgreSQL RLS',
    clientArchetype: 'Venture-Backed Developer Workflow SaaS',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'enterprise-saas-architecture',
    serviceName: 'Enterprise SaaS MVP Architecture',
    tagline: 'Scalable multi-tenant schema with Stripe billing tier gating built in 6 weeks.',
    summary: 'Engineered a secure multi-tenant SaaS foundation with database kernel-level isolation via PostgreSQL Row-Level Security and automated workspace provisioning.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#6366f1',
      aspectRatio: '16:9',
      heroHeadline: 'Multi-Tenant PostgreSQL RLS Engine',
      subtext: 'Supabase Kernel Isolation, Stripe Metering & RBAC',
      badges: ['PostgreSQL RLS', 'Stripe Billing', '6-Week MVP'],
      statHighlight: { value: '$3.2M', label: 'ARR Scale Achieved' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'SaaS Multi-Tenant Control Plane',
        kpis: [
          { label: 'Active Tenant Orgs', value: '420 Orgs' },
          { label: 'DB Query Latency', value: '12ms' },
          { label: 'Billing Webhook Pass', value: '100%' }
        ],
        tags: ['Supabase RLS', 'Stripe Billing', 'NextAuth / Auth0', 'Prisma / Drizzle']
      }
    },
    deliverables: [
      'Multi-Tenant PostgreSQL Database Schema with Row-Level Security',
      'Stripe Checkout, Customer Portal & Usage-Based Metering Integration',
      'Role-Based Access Control (Admin, Member, Viewer, Auditor)',
      'Automated Organization Provisioning & Invitation Workflows'
    ],
    technologies: ['Next.js 15', 'Supabase', 'PostgreSQL', 'Stripe API', 'Drizzle ORM', 'TypeScript'],
    keyInnovations: [
      'Kernel-level database tenant isolation preventing accidental cross-tenant data leakage',
      'Instant team workspace provisioning with zero-downtime schema migrations'
    ]
  },
  {
    id: 'port_25',
    slug: 'headless-shopify-plus-hydrogen',
    title: 'Headless Shopify Plus & Hydrogen 2.0 Storefront',
    clientArchetype: 'High-Volume Luxury E-Commerce Brand ($14M GMV)',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'headless-ecommerce-and-shopify-plus',
    serviceName: 'Headless Shopify Plus & Hydrogen',
    tagline: 'Sub-0.9s mobile commerce experience with Sanity CMS and Checkout Extensibility.',
    summary: 'Decoupled storefront using Shopify Hydrogen on Oxygen edge workers paired with Sanity CMS for rich editorial storytelling and 1-click upsells.',
    visualPreview: {
      theme: 'neon-accent',
      accentColor: '#10b981',
      aspectRatio: '16:9',
      heroHeadline: 'Hydrogen 2.0 Headless Storefront',
      subtext: 'Oxygen Edge Deployment, Sanity CMS & Shopify Extensibility',
      badges: ['Hydrogen 2.0', 'Sanity CMS', '0.9s Mobile Speed'],
      statHighlight: { value: '4.4x', label: 'Blended Paid ROAS' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Oxygen Edge Worker Telemetry',
        kpis: [
          { label: 'Edge Cache Hit Rate', value: '98.2%' },
          { label: 'Cart API Response', value: '34ms' },
          { label: 'Checkout Conversion', value: '+31%' }
        ],
        tags: ['Shopify Storefront API', 'Oxygen Edge', 'Sanity Studio', 'Tailwind CSS']
      }
    },
    deliverables: [
      'Hydrogen 2.0 Edge Storefront Codebase',
      'Sanity.io Structured Headless Content Architecture',
      'Custom Shopify Checkout Extensibility 1-Click Upsell Modules',
      'Full Server-Side Tracking & Attribution Integration'
    ],
    technologies: ['Shopify Hydrogen', 'Shopify Storefront API', 'Sanity CMS', 'TypeScript', 'Tailwind CSS'],
    keyInnovations: [
      'Zero-app bloat architecture achieving a 96/100 mobile Lighthouse score',
      'Instant optimistic cart drawer updates without server latency'
    ]
  },
  {
    id: 'port_26',
    slug: 'wcag-aaa-native-accessible-ui',
    title: 'WCAG 2.2 AAA & VPAT 2.5 Native Accessible UI System',
    clientArchetype: 'Regional Healthcare & Telehealth Network',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'ada-web-accessibility-and-compliance',
    serviceName: 'ADA Web Accessibility (WCAG 2.2 AA)',
    tagline: '100% native semantic HTML and ARIA accessibility with official VPAT certification.',
    summary: 'Remediated all web and mobile patient portals to achieve full keyboard navigation, screen reader compatibility (NVDA, VoiceOver), and AAA contrast ratios.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#38bdf8',
      aspectRatio: '16:9',
      heroHeadline: 'WCAG 2.2 AAA Accessibility System',
      subtext: '100% Native ARIA Landmarks & Official VPAT 2.5 Audit Report',
      badges: ['WCAG 2.2 AAA', 'VPAT 2.5 Certified', 'ADA Compliant'],
      statHighlight: { value: '100%', label: 'Accessibility Audit Pass' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Axe-Core & WAVE Accessibility Suite',
        kpis: [
          { label: 'Axe Violations', value: '0 Errors' },
          { label: 'Screen Reader Pass', value: '100% NVDA/VoiceOver' },
          { label: 'Keyboard Traps', value: 'Zero Traps' }
        ],
        tags: ['ARIA 1.2', 'Focus Traps', 'High-Contrast Mode', 'Screen Readers']
      }
    },
    deliverables: [
      'Accessible Native Component Library with Strict ARIA 1.2 Patterns',
      'Automated Axe-Core CI/CD Accessibility Regression Tests',
      'Comprehensive VPAT 2.5 Section 508 Accessibility Statement',
      'Keyboard Navigation & Focus Management State Engine'
    ],
    technologies: ['React 19', 'Axe-Core', 'Playwright A11y', 'Tailwind CSS', 'Next.js 15'],
    keyInnovations: [
      'Native code-level compliance eliminating the legal liabilities of third-party overlay widgets',
      'High-contrast mode with live color temperature adjustment for low-vision patients'
    ]
  },
  {
    id: 'port_27',
    slug: 'react-native-hipaa-mobile-app',
    title: 'Cross-Platform React Native iOS & Android Telehealth App',
    clientArchetype: 'Hospital Network with 140,000 Active Patients',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'ios-and-android-mobile-apps',
    serviceName: 'iOS & Android Apps (React Native)',
    tagline: '60FPS React Native mobile experience with FaceID biometric auth and WebRTC consultations.',
    summary: 'Engineered cross-platform mobile apps synchronizing with Epic/Cerner EHRs and cutting patient phone support call volume by 65%.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#10b981',
      aspectRatio: '9:16',
      heroHeadline: '140k-Patient React Native App',
      subtext: 'FaceID Biometrics, Encrypted SQLite & WebRTC Video Rooms',
      badges: ['React Native 60FPS', '140k Patients', '4.9 ★ Rating'],
      statHighlight: { value: '4.9 / 5', label: 'App Store Rating (18k Reviews)' },
      mockupType: 'mobile-device',
      mockupDetails: {
        headerTitle: 'Patient Mobile App Console',
        kpis: [
          { label: 'Active Monthly Patients', value: '140,000+' },
          { label: 'Support Call Drop', value: '-65%' },
          { label: 'Consultation Latency', value: '120ms' }
        ],
        tags: ['React Native', 'Expo Bare', 'FaceID Biometrics', 'WebRTC Video']
      }
    },
    deliverables: [
      'Production iOS & Android Apps (App Store & Google Play Published)',
      'FaceID / TouchID Biometric Authentication Flow',
      'Encrypted SQLite Offline Medical Record Storage',
      'Peer-to-Peer Encrypted WebRTC Telehealth Video Calling'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'WebRTC', 'Fastlane CI/CD', 'SQLite'],
    keyInnovations: [
      '60FPS fluid native animations running single-codebase efficiency across iOS and Android',
      'Zero local storage of unencrypted PHI with biometric session time-out guardrails'
    ]
  },
  {
    id: 'port_28',
    slug: 'terraform-aws-eks-cloud-pipeline',
    title: 'Terraform IaC & AWS EKS Kubernetes Cloud Infrastructure',
    clientArchetype: 'Mission-Critical Aerospace Supply Chain Enterprise',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'devops-cloud-and-cicd-infrastructure',
    serviceName: 'Cloud Architecture & DevOps CI/CD',
    tagline: 'Automated GitHub Actions CI/CD deploying to AWS EKS with blue/green zero-downtime releases.',
    summary: 'Architected Infrastructure as Code via Terraform provisioning multi-region Kubernetes clusters with automated auto-scaling and Prometheus monitoring.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#f59e0b',
      aspectRatio: '16:9',
      heroHeadline: 'AWS EKS Infrastructure as Code',
      subtext: 'Terraform IaC, GitHub Actions CI/CD & Blue/Green Deployments',
      badges: ['AWS EKS Cluster', 'Terraform IaC', '15-Min Releases'],
      statHighlight: { value: '-78%', label: 'Infrastructure Cost Slashed' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Kubernetes Cluster & CI/CD Telemetry',
        kpis: [
          { label: 'Deploy Cycle', value: '15 Minutes' },
          { label: 'Uptime SLA', value: '99.99%' },
          { label: 'Monthly Cloud Spend', value: '$14,200' }
        ],
        tags: ['Terraform', 'Kubernetes EKS', 'GitHub Actions', 'Prometheus / Grafana']
      }
    },
    deliverables: [
      'Terraform Infrastructure as Code Repository (AWS Multi-AZ VPC)',
      'AWS EKS Kubernetes Cluster with Helm Chart Package Management',
      'Automated GitHub Actions CI/CD with Docker Container Build Caching',
      'Prometheus, Grafana & Datadog Monitoring Alert Topology'
    ],
    technologies: ['Terraform', 'AWS EKS', 'Kubernetes', 'GitHub Actions', 'Docker', 'Grafana'],
    keyInnovations: [
      'Automated blue/green traffic shifting with instant rollback triggers on error spikes',
      'Spot instance auto-scaling cutting monthly AWS infrastructure bills by 78%'
    ]
  },
  {
    id: 'port_29',
    slug: 'strangler-fig-monolith-migration-proxy',
    title: 'Strangler Fig Monolith-to-Next.js Migration Proxy',
    clientArchetype: 'Aerospace & Defense Procurement Platform (25,000 Contractors)',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'legacy-system-migration-and-refactoring',
    serviceName: 'Legacy Monolith Modernization',
    tagline: 'Zero seconds of downtime migrating a 12-year-old PHP monolith to Next.js 15 micro-frontends.',
    summary: 'Deployed a Cloudflare Workers edge proxy progressively routing legacy routes to modern Next.js 15 modules without disrupting active enterprise users.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#ef4444',
      aspectRatio: '16:9',
      heroHeadline: 'Zero-Downtime Strangler Migration',
      subtext: 'Cloudflare Workers Reverse Proxy & GraphQL Middleware',
      badges: ['Zero Downtime', '12-Yr Monolith Replaced', '420ms Page Load'],
      statHighlight: { value: '0 sec', label: 'Migration Downtime' },
      mockupType: 'architecture-node-graph',
      mockupDetails: {
        headerTitle: 'Strangler Edge Routing Topology',
        kpis: [
          { label: 'Legacy PHP Load', value: '12.4s -> 420ms' },
          { label: 'Active Users Migrated', value: '25,000' },
          { label: 'Maintenance Cost Drop', value: '-78%' }
        ],
        tags: ['Cloudflare Workers', 'GraphQL Gateway', 'Next.js 15', 'Database Replication']
      }
    },
    deliverables: [
      'Cloudflare Workers Edge Reverse Proxy Routing Engine',
      'Type-Safe Node.js GraphQL API Middleware Layer',
      'Zero-Downtime PostgreSQL Live Database Replication Pipeline',
      'Automated End-to-End Cypress / Playwright Regression Test Suite'
    ],
    technologies: ['Cloudflare Workers', 'GraphQL', 'Next.js 15', 'PostgreSQL', 'Playwright'],
    keyInnovations: [
      'Granular cookie and header inspection routing individual users between legacy and modern frontends',
      'Automated database bi-directional synchronization during the 14-week transition window'
    ]
  },
  {
    id: 'port_30',
    slug: 'cybersecurity-penetration-audit-portal',
    title: 'Enterprise Cybersecurity & OWASP Pentesting Portal',
    clientArchetype: 'FinTech Capital & Healthcare Telehealth Platforms',
    pillar: 'custom-web',
    pillarLabel: 'Custom Web & SaaS',
    category: '5. Custom Web & Software',
    serviceSlug: 'cybersecurity-compliance-audits',
    serviceName: 'Cybersecurity & Penetration Audits',
    tagline: 'Comprehensive OWASP Top 10 penetration testing and WebAuthn hardware key implementation.',
    summary: 'Audited cloud infrastructure and web endpoints against CVE vulnerabilities, deploying FIDO2 WebAuthn authentication and end-to-end encryption.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#10b981',
      aspectRatio: '16:9',
      heroHeadline: 'Zero-CVE Cybersecurity Audit',
      subtext: 'OWASP Top 10 Penetration Testing & FIDO2 WebAuthn Passkeys',
      badges: ['Zero CVEs', 'WebAuthn / YubiKey', 'SOC2 / HIPAA Certified'],
      statHighlight: { value: 'Zero', label: 'Security Vulnerabilities' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Security Posture & Compliance Telemetry',
        kpis: [
          { label: 'Critical CVEs', value: '0 Found' },
          { label: 'Auth Standard', value: 'FIDO2 / WebAuthn' },
          { label: 'KMS Encryption', value: 'AES-256 GCM' }
        ],
        tags: ['OWASP Top 10', 'WebAuthn', 'KMS Encryption', 'SOC2 Type II']
      }
    },
    deliverables: [
      'Comprehensive Full-Stack Penetration Testing Audit Report',
      'FIDO2 / WebAuthn Hardware Passkey Authentication Integration',
      'AWS KMS Envelope Encryption Architecture for Sensitive Data',
      'Automated Snyk / SonarQube Static Code Analysis in CI/CD'
    ],
    technologies: ['WebAuthn API', 'AWS KMS', 'Snyk', 'Burp Suite', 'SonarQube', 'TypeScript'],
    keyInnovations: [
      'Phishing-resistant hardware biometric and YubiKey authentication for financial operators',
      'Zero-knowledge client-side encryption on patient and investor records'
    ]
  },

  // =========================================================================
  // PILLAR 6: AI AGENTS, DATA ENGINEERING & AUTOMATION (5 Artifacts)
  // =========================================================================
  {
    id: 'port_31',
    slug: 'langgraph-multi-agent-workflow-machine',
    title: 'LangGraph Multi-Agent Autonomous State Machine',
    clientArchetype: 'Enterprise AI & Legal Compliance Platform',
    pillar: 'ai-automation',
    pillarLabel: 'AI Agents & Automation',
    category: '6. AI Agents & Automation',
    serviceSlug: 'custom-ai-agents-and-llm-pipelines',
    serviceName: 'Custom AI Agents & LangGraph',
    tagline: 'Deterministic 4-node agent graph achieving 99.8% fact verification across 2.4M legal documents.',
    summary: 'Constructed an autonomous state machine combining query decomposition, tool-calling, automated source verification, and markdown synthesis.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#8b5cf6',
      aspectRatio: '16:9',
      heroHeadline: 'LangGraph Multi-Agent State Machine',
      subtext: '4-Node Deterministic Guardrail Graph & Tool-Calling Pipeline',
      badges: ['LangGraph', '99.8% Accuracy', 'Zero Hallucinations'],
      statHighlight: { value: '99.8%', label: 'Fact Verification Accuracy' },
      mockupType: 'architecture-node-graph',
      mockupDetails: {
        headerTitle: 'LangGraph Agent Execution Topology',
        kpis: [
          { label: 'Query Decomposition', value: 'Node 1 (FastAPI)' },
          { label: 'Vector & BM25 Retr', value: 'Node 2 (Qdrant)' },
          { label: 'Source Verification', value: 'Node 3 (Guardrail)' }
        ],
        tags: ['LangGraph', 'Claude 3.5 Sonnet', 'Tool Calling', 'State Machine']
      }
    },
    deliverables: [
      'LangGraph Multi-Agent State Machine Microservice',
      'Deterministic Fact-Verification Guardrail Module',
      'Next.js 15 Streaming Chat UI with Inline Document Citations',
      'DeepEval Automated Regression Evaluation Benchmark Suite'
    ],
    technologies: ['LangGraph', 'Python FastAPI', 'Claude 3.5 Sonnet', 'Next.js 15', 'Docker'],
    keyInnovations: [
      'Self-correcting agent loop that re-queries the vector store if retrieval confidence falls below 95%',
      'Direct visual PDF document page and paragraph source anchoring'
    ]
  },
  {
    id: 'port_32',
    slug: 'hybrid-bm25-vector-rag-pipeline',
    title: 'Hybrid BM25 & Dense Vector Search RAG Architecture',
    clientArchetype: 'Financial & Legal Document Intelligence Platform',
    pillar: 'ai-automation',
    pillarLabel: 'AI Agents & Automation',
    category: '6. AI Agents & Automation',
    serviceSlug: 'vector-search-and-rag-architecture',
    serviceName: 'Vector Search & Enterprise RAG',
    tagline: 'Two-stage retrieval pipeline with Qdrant and Cohere Rerank v3 cutting latency to 380ms.',
    summary: 'Chunked and indexed 2.4 million enterprise filings into a hybrid lexical/vector database with Redis semantic caching.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#6366f1',
      aspectRatio: '16:9',
      heroHeadline: 'Hybrid BM25 & Qdrant Vector RAG',
      subtext: 'Cohere Rerank v3 & Redis Semantic Cache on 2.4M Documents',
      badges: ['Qdrant Vector DB', '380ms Latency', '2.4M Documents'],
      statHighlight: { value: '380ms', label: 'Average Retrieval Latency' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Vector RAG Telemetry & Chunk Inspector',
        kpis: [
          { label: 'Documents Indexed', value: '2,400,000+' },
          { label: 'Cache Hit Latency', value: '18ms' },
          { label: 'Retrieval Precision', value: '96.8%' }
        ],
        tags: ['Qdrant', 'BM25 Index', 'Cohere Rerank', 'Redis Cache']
      }
    },
    deliverables: [
      'Two-Stage Hybrid Lexical (BM25) & Dense Vector Indexing Pipeline',
      'Cohere Rerank v3 Integration Layer for Top-K Chunk Scoring',
      'Redis Semantic Caching Cluster for Repeated Enterprise Queries',
      'Automated Document Ingestion & Chunking ETL Microservice'
    ],
    technologies: ['Qdrant', 'pgvector', 'Redis', 'Python', 'Cohere API', 'FastAPI'],
    keyInnovations: [
      'Semantic caching serving 38% of common enterprise compliance questions in sub-20ms',
      'Table-aware PDF parser preserving numeric cell coordinates in financial balance sheets'
    ]
  },
  {
    id: 'port_33',
    slug: 'selfhosted-n8n-enterprise-automation',
    title: 'Self-Hosted Enterprise n8n Workflow Automation Cluster',
    clientArchetype: 'Global Ocean Freight & Customs Brokerage',
    pillar: 'ai-automation',
    pillarLabel: 'AI Agents & Automation',
    category: '6. AI Agents & Automation',
    serviceSlug: 'enterprise-workflow-automation',
    serviceName: 'Enterprise Workflow Automation (n8n)',
    tagline: 'Self-healing automated document pipelines processing 4,000 weekly customs forms and saving $420k/yr.',
    summary: 'Deployed an enterprise n8n workflow cluster connected to vision LLMs and legacy ERPs with automated exception handling in Slack.',
    visualPreview: {
      theme: 'neon-accent',
      accentColor: '#ff5500',
      aspectRatio: '16:9',
      heroHeadline: 'Enterprise n8n Automation Engine',
      subtext: '4,000 Weekly Freight Forms Processed with Zero Customs Penalties',
      badges: ['n8n Cluster', '-85% Labor Time', '$420k Savings'],
      statHighlight: { value: '-85%', label: 'Manual Processing Time' },
      mockupType: 'architecture-node-graph',
      mockupDetails: {
        headerTitle: 'n8n Workflow Execution Mesh',
        kpis: [
          { label: 'Weekly Manifests', value: '4,200 Forms' },
          { label: 'Error Rate', value: '0.01%' },
          { label: 'Annual Hours Saved', value: '18,500 hrs' }
        ],
        tags: ['n8n Enterprise', 'Vision LLMs', 'ERP Webhooks', 'Slack Exception Bot']
      }
    },
    deliverables: [
      'High-Availability Self-Hosted n8n Docker Cluster on AWS ECS',
      'Multi-Modal Vision LLM Manifest Parsing Workflows',
      'Bidirectional Webhook Connectors for CargoWise and SAP ERPs',
      'Interactive Slack Bot for 1-Click Human Exception Resolution'
    ],
    technologies: ['n8n', 'Python', 'Claude 3.5 Sonnet Vision', 'Docker', 'AWS ECS', 'PostgreSQL'],
    keyInnovations: [
      'Self-healing queue backpressure handling 500 simultaneous shipping manifest uploads without dropped packets',
      '1-click Slack interactive approval cards for rare edge-case customs documents'
    ]
  },
  {
    id: 'port_34',
    slug: 'snowflake-dbt-modern-data-stack',
    title: 'Snowflake, BigQuery & dbt Modern Data Warehouse Stack',
    clientArchetype: 'Multi-Location Enterprise Industrial & Logistics Network',
    pillar: 'ai-automation',
    pillarLabel: 'AI Agents & Automation',
    category: '6. AI Agents & Automation',
    serviceSlug: 'modern-data-stack-and-warehousing',
    serviceName: 'Modern Data Stack (Snowflake/dbt)',
    tagline: 'Unified BI telemetry models processing 10M+ daily events with sub-second Metabase dashboards.',
    summary: 'Constructed an automated data warehouse architecture using Fivetran, Snowflake, dbt data modeling, and self-hosted Metabase BI dashboards.',
    visualPreview: {
      theme: 'dark-obsidian',
      accentColor: '#38bdf8',
      aspectRatio: '16:9',
      heroHeadline: 'Snowflake & dbt Data Stack',
      subtext: 'Automated ELT Pipelines, Data Modeling & Real-Time BI Telemetry',
      badges: ['Snowflake Cloud', 'dbt Modeling', 'Metabase BI'],
      statHighlight: { value: '10M+', label: 'Daily Events Processed' },
      mockupType: 'data-warehouse-schema',
      mockupDetails: {
        headerTitle: 'dbt Data Transformation Lineage',
        kpis: [
          { label: 'ELT Pipeline Sync', value: '15-Min Batch' },
          { label: 'Query Performance', value: '<240ms' },
          { label: 'Data Freshness', value: 'Real-Time' }
        ],
        tags: ['Snowflake', 'dbt Core', 'Fivetran', 'Metabase Dashboard']
      }
    },
    deliverables: [
      'Snowflake Multi-Cluster Data Warehouse Architecture',
      'Modular dbt Data Transformation & Semantic Modeling Models',
      'Fivetran Automated Connectors (HubSpot, Stripe, Salesforce, ERP)',
      'Executive Metabase BI Dashboards with Automated PDF Email Reports'
    ],
    technologies: ['Snowflake', 'dbt Core', 'Fivetran', 'BigQuery', 'Metabase', 'SQL'],
    keyInnovations: [
      'Unified data model giving C-suite executives a single pane of glass across marketing, sales, and operations',
      'Automated data quality assertions (dbt test) catching upstream schema breakages before dashboards reload'
    ]
  },
  {
    id: 'port_35',
    slug: 'distributed-playwright-scraping-pipeline',
    title: 'Distributed Playwright Scraping & Webhook Pipeline',
    clientArchetype: 'Global Freight Forwarder & Maritime Intelligence Firm',
    pillar: 'ai-automation',
    pillarLabel: 'AI Agents & Automation',
    category: '6. AI Agents & Automation',
    serviceSlug: 'web-scraping-and-data-pipelines',
    serviceName: 'Web Scraping & Data Extraction',
    tagline: 'Containerized scraper cluster polling 14 ocean freight carriers every 30 minutes with zero IP blocks.',
    summary: 'Deployed headless Playwright scrapers with residential proxy rotation on AWS Fargate, extracting container telemetry directly into Snowflake.',
    visualPreview: {
      theme: 'luxury-gradient',
      accentColor: '#10b981',
      aspectRatio: '16:9',
      heroHeadline: 'Distributed Playwright Cluster',
      subtext: 'Residential Proxy Rotation & Real-Time Freight Tracking',
      badges: ['Playwright Cluster', 'AWS Fargate', 'Zero IP Blocks'],
      statHighlight: { value: '99.9%', label: 'Scraper Success Rate' },
      mockupType: 'browser-dashboard',
      mockupDetails: {
        headerTitle: 'Scraper Mesh Telemetry & Proxy Pool',
        kpis: [
          { label: 'Carriers Monitored', value: '14 Portals' },
          { label: 'Daily Polling Cycles', value: '48 Runs/Day' },
          { label: 'Container Coordinates', value: '18,200 Active' }
        ],
        tags: ['Playwright Headless', 'BrightData Proxies', 'AWS Fargate', 'Kafka / Redis']
      }
    },
    deliverables: [
      'Containerized Playwright Headless Scraping Cluster on AWS Fargate',
      'Automated Residential Proxy Rotation & Fingerprint Masquerading',
      'Real-Time Webhook Dispatcher Syncing Data to Snowflake and Slack',
      'Automated Demurrage Risk Alert Engine'
    ],
    technologies: ['Playwright', 'Python', 'Docker', 'AWS Fargate', 'BrightData Proxies', 'Redis'],
    keyInnovations: [
      'Dynamic browser fingerprint spoofing bypassing Cloudflare and Akamai bot defenses without captcha failures',
      'Predictive port congestion detection alerting operations teams 48 hours before demurrage fees accrue'
    ]
  }
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getPortfolioItemsByPillar(pillar: string): PortfolioItem[] {
  if (pillar === 'all') return portfolioItems;
  return portfolioItems.filter((item) => item.pillar === pillar);
}

export function getPortfolioItemByServiceSlug(serviceSlug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.serviceSlug === serviceSlug);
}
