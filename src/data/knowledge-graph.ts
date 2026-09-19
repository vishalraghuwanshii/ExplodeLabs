import { 
  ServiceEntity, 
  SolutionEntity, 
  IndustryEntity, 
  CaseStudyEntity, 
  ToolEntity, 
  GuideEntity 
} from '@/types';

export const services: ServiceEntity[] = [
  // =========================================================================
  // 1. SOFTWARE & WEB DEVELOPMENT (Categories 1 - 6)
  // =========================================================================
  {
    id: 'srv_1',
    slug: 'react-nextjs-development',
    name: 'React & Next.js Development',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'High-performance web applications built for speed, scale, and enterprise reliability.',
    directAnswer: 'Explode Labs architects enterprise-grade web applications and high-conversion platforms using React and Next.js App Router with Server-Side Rendering (SSR) and edge deployment.',
    definition: 'Full-cycle modern frontend and full-stack development leveraging React 19, Next.js, TypeScript, and server components to achieve sub-second page loads and seamless user experiences.',
    targetAudience: ['B2B SaaS Founders', 'E-commerce Brands Scaling Past $10M', 'Product Leaders Modernizing Legacy Frontends'],
    problemsSolved: ['Slow load times hurting Core Web Vitals', 'Unmaintainable legacy codebases', 'Difficulty scaling real-time state'],
    deliverables: ['Production-ready Next.js App Router codebase', 'Design system component library with Tailwind CSS', 'Edge-cached API routes & Server Actions', 'Lighthouse 95+ performance optimization'],
    technologies: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Supabase'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Sprint' },
    typicalTimeline: '4 to 10 weeks',
    process: [
      { step: 1, title: 'Architecture & State Modeling', description: 'System design and component taxonomy.' },
      { step: 2, title: 'Component Build', description: 'Accessible UI components in TypeScript.' },
      { step: 3, title: 'Full-Stack Integration', description: 'Server components and API routes.' },
      { step: 4, title: 'Performance Hardening', description: 'Core Web Vitals audit and edge caching.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas', 'novus-fintech-portal'],
    relatedServiceSlugs: ['saas-mvp-development', 'ui-ux-design-systems', 'technical-seo'],
    faqs: [{ question: 'Why choose Next.js over traditional SPAs?', answer: 'Next.js delivers Server-Side Rendering (SSR) so pages load instantly and are 100% crawlable by Google and AI engines.' }]
  },
  {
    id: 'srv_2',
    slug: 'saas-mvp-development',
    name: 'SaaS MVP & Multi-Tenant Platforms',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'From product concept to multi-tenant, revenue-generating SaaS in 60 days.',
    directAnswer: 'Explode Labs designs, engineers, and launches scalable B2B/B2C SaaS products complete with auth, billing, multi-tenancy, and analytics, built to withstand rapid user scaling.',
    definition: 'End-to-end SaaS engineering encompassing architecture, user authentication, subscription billing (Stripe), database design (Postgres), admin dashboards, and core product features.',
    targetAudience: ['Funded Tech Startups', 'Non-technical Founders with Industry Domain Expertise', 'Enterprises Launching Digital Ventures'],
    problemsSolved: ['Slow development velocity burning runway', 'Unreliable freelancer code', 'Complex billing and RBAC bottlenecks'],
    deliverables: ['Full-stack multi-tenant SaaS architecture with RBAC', 'Stripe / LemonSqueezy subscription billing and webhooks', 'User dashboard and administrative management console', 'SOC2-ready database architecture with RLS'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma / Drizzle', 'Stripe Billing', 'Redis'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '6 to 12 weeks',
    process: [
      { step: 1, title: 'Product Discovery', description: 'User journey mapping and technical blueprint.' },
      { step: 2, title: 'Database & Auth Foundation', description: 'Postgres schema with RLS and auth flows.' },
      { step: 3, title: 'Core Feature Sprints', description: 'Bi-weekly deployable milestones.' },
      { step: 4, title: 'Billing & Production Launch', description: 'Stripe integration and telemetry.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas'],
    relatedServiceSlugs: ['react-nextjs-development', 'generative-ai-agents'],
    faqs: [{ question: 'What is included in a SaaS MVP?', answer: 'Our MVPs include product architecture, UX/UI design, frontend/backend engineering, OAuth, Stripe billing, and production deployment.' }]
  },
  {
    id: 'srv_3',
    slug: 'mobile-app-development',
    name: 'Mobile App Development (iOS & Android)',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'High-performance iOS and Android applications with native feel and shared codebase efficiency.',
    directAnswer: 'We build production-grade mobile applications using React Native and Flutter, delivering native 60fps animations, offline capabilities, and seamless app store releases.',
    definition: 'Native and hybrid mobile app engineering providing single-codebase efficiency across iOS, iPadOS, and Android without sacrificing device-specific performance.',
    targetAudience: ['B2B Companies needing companion apps', 'Consumer Startups launching mobile-first services'],
    problemsSolved: ['Cost prohibitive separate iOS and Android teams', 'Clunky hybrid apps that feel slow', 'App Store rejection cycles'],
    deliverables: ['Production iOS and Android builds', 'Push notification engine (OneSignal/APNs/FCM)', 'In-app purchases, biometric auth, and offline sync', 'Full CI/CD distribution pipeline via Fastlane'],
    technologies: ['React Native', 'Expo', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '8 to 14 weeks',
    process: [
      { step: 1, title: 'Mobile UX Design', description: 'Native interaction mapping.' },
      { step: 2, title: 'Core Native Engine', description: 'Offline storage and hardware APIs.' },
      { step: 3, title: 'Feature Sprints', description: 'TestFlight and Play Console testing.' },
      { step: 4, title: 'Store Approval', description: 'App Store and Google Play publication.' }
    ],
    caseStudySlugs: ['apex-health-crm'],
    relatedServiceSlugs: ['react-nextjs-development', 'ui-ux-design-systems'],
    faqs: [{ question: 'Do you handle App Store approvals?', answer: 'Yes, we handle all submission metadata, compliance checks, and reviewer feedback.' }]
  },
  {
    id: 'srv_4',
    slug: 'desktop-application-development',
    name: 'Desktop Applications (macOS, Windows, Linux)',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'High-speed desktop applications and internal business tools built with Electron & Tauri.',
    directAnswer: 'Explode Labs engineers native-performance desktop software for macOS, Windows, and Linux using modern Tauri (Rust) and Electron frameworks with automatic background updates.',
    definition: 'Cross-platform desktop application development for POS systems, offline-first tools, media editors, and secure enterprise desktop clients.',
    targetAudience: ['Software companies needing native desktop presence', 'Enterprises with on-premise workstation requirements'],
    problemsSolved: ['Browser memory limitations for heavy computational tasks', 'Lack of local filesystem and hardware access in browsers', 'Platform-specific maintenance overhead'],
    deliverables: ['Universal macOS (.dmg), Windows (.exe/.msi), and Linux (.AppImage) binaries', 'Automated code signing and auto-updater pipeline', 'Hardware integration (printers, local USB devices, GPU acceleration)', 'Local SQLite / RocksDB encrypted offline cache'],
    technologies: ['Tauri', 'Rust', 'Electron', 'TypeScript', 'React', 'C++'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '6 to 12 weeks',
    process: [
      { step: 1, title: 'Native Architecture', description: 'Rust/C++ backend bridge and IPC design.' },
      { step: 2, title: 'UI & Local Storage', description: 'Fast frontend and encrypted local DB.' },
      { step: 3, title: 'Packaging & Code Signing', description: 'Apple Developer and Microsoft Authenticode certificates.' },
      { step: 4, title: 'Auto-Update Infrastructure', description: 'Zero-touch background patch delivery.' }
    ],
    caseStudySlugs: ['omniflow-logistics'],
    relatedServiceSlugs: ['react-nextjs-development', 'saas-mvp-development'],
    faqs: [{ question: 'Why choose Tauri over Electron?', answer: 'Tauri utilizes the native OS webview and Rust backend, resulting in a 10MB binary size and 90% less RAM usage than Electron.' }]
  },
  {
    id: 'srv_5',
    slug: 'enterprise-software-erp-crm',
    name: 'Enterprise Software, Custom ERP & CRM Systems',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'Custom business intelligence, HRMS, and enterprise resource planning software.',
    directAnswer: 'We engineer bespoke enterprise resource planning (ERP), custom CRM portals, and internal operations software that streamline complex multi-department workflows.',
    definition: 'Enterprise system engineering covering relational database modeling, role-based workflows, audit logging, inventory management, and automated invoicing.',
    targetAudience: ['Mid-market & enterprise companies replacing rigid legacy software', 'Operations teams outgrowing basic spreadsheets'],
    problemsSolved: ['Off-the-shelf software failing custom business logic', 'Siloed data across disconnected legacy systems', 'Exorbitant per-user license fees on commercial ERPs'],
    deliverables: ['Custom ERP / CRM web platform tailored to exact business rules', 'Multi-level approval workflows and audit trail logging', 'ERP legacy data migration and bi-directional API connectors', 'Executive KPI dashboard and automated financial reporting'],
    technologies: ['Next.js', 'PostgreSQL', 'Go / Node.js', 'Docker', 'Redis', 'AWS'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '8 to 16 weeks',
    process: [
      { step: 1, title: 'Workflow Audit', description: 'Process diagramming across departments.' },
      { step: 2, title: 'Database Schema', description: 'Relational data modeling with high query performance.' },
      { step: 3, title: 'Module Build', description: 'CRM, inventory, billing, and HR modules.' },
      { step: 4, title: 'Data Migration & Staff Training', description: 'Zero-downtime cutover and documentation.' }
    ],
    caseStudySlugs: ['omniflow-logistics', 'apex-health-crm'],
    relatedServiceSlugs: ['cloud-devops-infrastructure', 'ai-workflow-automation'],
    faqs: [{ question: 'Can you migrate data from our existing SAP or Salesforce?', answer: 'Yes, we build automated ETL scripts to migrate historical records, contacts, and transactions with 100% data fidelity.' }]
  },
  {
    id: 'srv_6',
    slug: 'ecommerce-shopify-growth',
    name: 'E-commerce Development & Shopify Plus',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'High-converting custom Shopify Plus storefronts and headless commerce engines.',
    directAnswer: 'We engineer custom Shopify Plus themes and headless e-commerce platforms engineered for rapid checkout, extreme mobile speed, and maximum average order value (AOV).',
    definition: 'End-to-end commerce development encompassing custom Liquid themes, Hydrogen/Next.js headless stores, ERP/WMS integrations, and subscription billing systems.',
    targetAudience: ['D2C Brands doing $1M-$50M+ ARR', 'Retailers migrating from WooCommerce or Magento to Shopify Plus'],
    problemsSolved: ['Bloated, slow Shopify theme templates', 'High checkout abandonment rates', 'Inventory sync errors across warehouses'],
    deliverables: ['Bespoke custom Shopify theme on 2.0 architecture', 'Shopify Checkout Extensibility custom apps and one-click upsells', 'Custom Klaviyo email flows (abandoned cart, win-back)', 'Sub-2-second page load times with 90+ mobile Lighthouse'],
    technologies: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Next.js', 'Klaviyo', 'Recharge'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '5 to 9 weeks',
    process: [
      { step: 1, title: 'Merchandising Strategy', description: 'Funnel audit and mobile wireframing.' },
      { step: 2, title: 'Custom Theme Architecture', description: 'Modular Liquid sections and fast assets.' },
      { step: 3, title: 'App Stack & ERP Integration', description: 'Klaviyo, recharge subscriptions, and 3PL warehouse sync.' },
      { step: 4, title: 'Zero-Downtime Launch', description: 'Customer/order migration and 301 redirects.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['paid-performance-sem', 'ui-ux-design-systems'],
    faqs: [{ question: 'Can you migrate customer accounts and order history?', answer: 'Yes, we migrate customer records, past orders, and product metafields seamlessly.' }]
  },

  // =========================================================================
  // 2. AI & MACHINE LEARNING (Categories 7 - 10)
  // =========================================================================
  {
    id: 'srv_7',
    slug: 'generative-ai-agents',
    name: 'Generative AI, LLM Integration & RAG Systems',
    pillar: 'build',
    category: '2. AI & Machine Learning',
    tagline: 'Custom LLM integrations, multi-agent systems, and production RAG pipelines.',
    directAnswer: 'Explode Labs develops proprietary AI agents, intelligent retrieval-augmented generation (RAG) knowledge systems, and custom LLM workflows that automate high-complexity business tasks.',
    definition: 'Enterprise machine intelligence engineering deploying tailored agents (Gemini, Claude, GPT-4, Llama 3) with secure document indexing, tool calling, and structured JSON outputs.',
    targetAudience: ['Enterprises automating knowledge work', 'SaaS products embedding generative AI features'],
    problemsSolved: ['Hallucinations and unreliable outputs from naive prompts', 'Data privacy concerns with enterprise docs', 'Standard chatbots unable to call APIs'],
    deliverables: ['Production RAG pipeline with hybrid vector + lexical search', 'Autonomous multi-agent execution framework with tool calling', 'Enterprise evaluation suites and rate-limiting middleware', 'Admin dashboard for prompt versioning and token analytics'],
    technologies: ['Gemini 1.5 Pro', 'Claude 3.5 Sonnet', 'GPT-4o', 'LangChain', 'pgvector', 'FastAPI'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '4 to 8 weeks',
    process: [
      { step: 1, title: 'Knowledge Architecture', description: 'Document chunking and vector index design.' },
      { step: 2, title: 'Agent Logic & Tool Calling', description: 'State graph architecture and API orchestration.' },
      { step: 3, title: 'Safety Guardrails', description: 'Deterministic evaluation testing.' },
      { step: 4, title: 'Production Edge Deployment', description: 'Streaming API integration and security.' }
    ],
    caseStudySlugs: ['lumina-ai-agent-suite'],
    relatedServiceSlugs: ['ai-workflow-automation', 'saas-mvp-development'],
    faqs: [{ question: 'How do you prevent hallucinations?', answer: 'We use strict hybrid vector search with verifiable source citations and automated evaluation guardrails.' }]
  },
  {
    id: 'srv_8',
    slug: 'computer-vision-ocr-document-ai',
    name: 'Computer Vision, OCR & Visual AI',
    pillar: 'build',
    category: '2. AI & Machine Learning',
    tagline: 'Automated document processing, image recognition, OCR, and visual quality inspection.',
    directAnswer: 'Explode Labs engineers custom Computer Vision and Document AI pipelines that extract structured data from images, PDFs, scans, and real-time video streams with 99%+ accuracy.',
    definition: 'Deep learning vision engineering applying YOLOv8, Vision-Language Models (VLMs), and OCR algorithms to automate industrial inspection, medical imaging, and document transcription.',
    targetAudience: ['Logistics, Legal, and Healthcare enterprises with high document volumes', 'Hardware & manufacturing companies automating visual QA'],
    problemsSolved: ['Thousands of manual hours spent transcribing physical forms', 'Human error in quality inspection on assembly lines', 'Inability to search visual product catalogues'],
    deliverables: ['High-speed OCR & Document AI extraction engine for complex multi-page PDFs', 'Custom trained object detection / defect classification model (PyTorch/YOLO)', 'API endpoint processing visual uploads with sub-second response times', 'Review portal for human-in-the-loop exception handling'],
    technologies: ['PyTorch', 'OpenCV', 'YOLOv8', 'Claude Vision', 'Tesseract', 'FastAPI', 'Docker'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '4 to 10 weeks',
    process: [
      { step: 1, title: 'Dataset Annotation', description: 'Cataloging edge-case documents and labeling data.' },
      { step: 2, title: 'Model Architecture & Training', description: 'Fine-tuning vision transformers and OCR models.' },
      { step: 3, title: 'Confidence Scoring Logic', description: 'Deterministic validation and exception queues.' },
      { step: 4, title: 'API Integration', description: 'Containerized deployment on GPU cloud clusters.' }
    ],
    caseStudySlugs: ['omniflow-logistics'],
    relatedServiceSlugs: ['ai-workflow-automation', 'generative-ai-agents'],
    faqs: [{ question: 'Can it handle distorted, low-resolution scans and handwriting?', answer: 'Yes, we combine pre-processing de-skewing filters with modern multimodal Vision LLMs to achieve 99%+ accuracy on handwritten and skewed documents.' }]
  },
  {
    id: 'srv_9',
    slug: 'ai-workflow-automation',
    name: 'AI Business Automation & n8n Pipelines',
    pillar: 'automate',
    category: '2. AI & Machine Learning',
    tagline: 'Eliminate repetitive manual operations with intelligent, self-healing automation pipelines.',
    directAnswer: 'We connect your CRM, communications, database, and operational tools with custom n8n, Make, and bespoke Python microservices that execute business workflows 24/7.',
    definition: 'End-to-end operational automation combining webhooks, event-driven architecture, and AI parsing to automate lead routing, document extraction, customer onboarding, and reporting.',
    targetAudience: ['Operations Executives', 'Agencies & Professional Service Firms', 'E-commerce operations managers'],
    problemsSolved: ['Manual hours wasted copying data between SaaS tools', 'Human error in lead qualification and contracts', 'Slow response times on customer inquiries'],
    deliverables: ['Custom self-hosted n8n / Make workflow architecture', 'Automated lead enrichment, scoring, and instant CRM synchronization', 'AI document parser for PDFs, invoices, and contracts', 'Slack/Teams notification and alert bots with approval buttons'],
    technologies: ['n8n', 'Make.com', 'Python', 'Zapier Enterprise', 'PostgreSQL', 'HubSpot API', 'Slack API'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '2 to 6 weeks',
    process: [
      { step: 1, title: 'Workflow Audit', description: 'Process diagramming and quantifying ROI.' },
      { step: 2, title: 'Secure API Setup', description: 'Webhook endpoints and security sandboxing.' },
      { step: 3, title: 'Pipeline Build', description: 'Error handling and retry queues.' },
      { step: 4, title: 'Handoff & Monitoring', description: 'Live run monitoring and documentation.' }
    ],
    caseStudySlugs: ['omniflow-logistics'],
    relatedServiceSlugs: ['generative-ai-agents', 'b2b-lead-generation-sdr'],
    faqs: [{ question: 'Why use custom n8n/Python over basic Zapier?', answer: 'Self-hosted n8n and Python scripts provide unlimited task executions without per-step fees and ensure complete data privacy within your VPC.' }]
  },

  // =========================================================================
  // 3. DESIGN & CREATIVE (Categories 10 - 15)
  // =========================================================================
  {
    id: 'srv_10',
    slug: 'ui-ux-design-systems',
    name: 'UI/UX Design & Scalable Design Systems',
    pillar: 'create',
    category: '3. Design Services',
    tagline: 'Quietly expensive product design that simplifies complexity and drives conversion.',
    directAnswer: 'Explode Labs designs intuitive, world-class user interfaces and scalable design systems in Figma that transform complex workflows into effortless digital experiences.',
    definition: 'Strategic product design encompassing UX research, user journey mapping, high-fidelity wireframing, interactive prototyping, and component design tokens.',
    targetAudience: ['SaaS Founders preparing for Series A/B', 'Enterprises redesigning mission-critical software'],
    problemsSolved: ['Clunky interfaces causing user drop-off and churn', 'Inconsistent UI across mobile and web', 'Lack of clear information hierarchy'],
    deliverables: ['Comprehensive Figma design system with tokens and auto-layout', 'High-fidelity clickable prototypes for user testing', 'Full responsive screen layouts for all breakpoints', 'Design tokens and asset handoff documentation for developers'],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Framer', 'Protopie'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '4 to 8 weeks',
    process: [
      { step: 1, title: 'UX Research', description: 'Analyzing user pain points and competitor ergonomics.' },
      { step: 2, title: 'Wireframing & IA', description: 'Structural layouts focusing on clarity and hierarchy.' },
      { step: 3, title: 'Visual Design & High-Fidelity UI', description: 'Typography, micro-interactions, and polish.' },
      { step: 4, title: 'Design System Handoff', description: 'Atomic component library and developer inspection specs.' }
    ],
    caseStudySlugs: ['novus-fintech-portal', 'apex-health-crm'],
    relatedServiceSlugs: ['react-nextjs-development', 'saas-mvp-development'],
    faqs: [{ question: 'Do you deliver ready-to-code Figma design files?', answer: 'Yes, our Figma files use strict Auto Layout, documented typography and color tokens, component variants, and interactive states.' }]
  },
  {
    id: 'srv_11',
    slug: 'graphic-design-visual-assets',
    name: 'Graphic Design, Marketing Collateral & Pitch Decks',
    pillar: 'create',
    category: '3. Design Services',
    tagline: 'High-impact investor pitch decks, marketing collateral, and high-converting ad creatives.',
    directAnswer: 'We design high-impact investor pitch decks, digital advertising creatives, brochures, whitepapers, social media design systems, and enterprise visual collateral.',
    definition: 'Comprehensive graphic design services focused on brand coherence, typography hierarchy, visual persuasion, and multi-channel marketing performance.',
    targetAudience: ['Startups pitching investors for funding', 'B2B marketing teams needing daily creatives', 'Enterprise brands redesigning collateral'],
    problemsSolved: ['Unprofessional pitch decks causing investor skepticism', 'Inconsistent visual branding across sales collateral', 'Slow creative turnaround holding back campaigns'],
    deliverables: ['Investor-ready Keynote / Pitch Deck design with custom charts', 'High-converting static and carousel ad creative packages', 'Editorial whitepapers, e-books, and case study PDFs', 'Digital banners, event signage, and packaging design'],
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'InDesign', 'Keynote'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '1 to 3 weeks',
    process: [
      { step: 1, title: 'Brand Asset Audit', description: 'Establishing typography scales and layout grids.' },
      { step: 2, title: 'Concept Mockups', description: 'Drafting 2-3 visual layouts tailored for the audience.' },
      { step: 3, title: 'Production Polish', description: 'Pixel-perfect typography and vector iconography.' },
      { step: 4, title: 'Master File Export', description: 'Editable Figma/Keynote and print-ready vector formats.' }
    ],
    caseStudySlugs: ['novus-fintech-portal', 'hyperscale-b2b-saas'],
    relatedServiceSlugs: ['brand-identity-creative', 'ui-ux-design-systems'],
    faqs: [{ question: 'Do you deliver editable pitch decks?', answer: 'Yes, we deliver natively editable Keynote, PowerPoint, and Figma decks using universal web fonts.' }]
  },
  {
    id: 'srv_12',
    slug: 'brand-identity-creative',
    name: 'Brand Identity, Positioning & Creative Strategy',
    pillar: 'create',
    category: '3. Design Services',
    tagline: 'Distinctive visual identities, positioning strategy, and editorial brand systems.',
    directAnswer: 'Explode Labs creates timeless brand identities, typography guidelines, and design collateral that position technology and modern companies as market leaders.',
    definition: 'Comprehensive branding encompassing naming, strategic positioning, logo design, typography systems, color theory, 3D motion guidelines, and brand books.',
    targetAudience: ['Startups launching out of stealth', 'Established companies undergoing strategic rebranding'],
    problemsSolved: ['Generic visual identity that blends in with competitors', 'Inconsistent brand presentation across sales and product UI', 'Weak positioning that hurts pricing power'],
    deliverables: ['Primary logo, wordmark, symbol, and responsive lockups', 'Complete Brand Guideline Book (Typography, Colors, Spacing)', 'Sales pitch deck template and social media design kit', 'Custom 3D visual assets and abstract brand illustrations'],
    technologies: ['Figma', 'Illustrator', 'After Effects', 'Cinema 4D', 'Keynote'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '3 to 6 weeks',
    process: [
      { step: 1, title: 'Brand Strategy', description: 'Competitive whitespace and brand positioning.' },
      { step: 2, title: 'Visual Identity Concepts', description: '3 distinct visual directions with mockups.' },
      { step: 3, title: 'System Refinement', description: 'Finalizing typography, color tokens, and iconography.' },
      { step: 4, title: 'Brand Book Delivery', description: 'Production vector packages and team guidelines.' }
    ],
    caseStudySlugs: ['novus-fintech-portal'],
    relatedServiceSlugs: ['ui-ux-design-systems', 'graphic-design-visual-assets'],
    faqs: [{ question: 'Do we get full copyright and ownership of all brand assets?', answer: 'Yes, 100% intellectual property and vector source files transfer to you upon project completion.' }]
  },
  {
    id: 'srv_13',
    slug: '3d-design-visualization',
    name: '3D Product Modeling, Rendering & Spatial XR',
    pillar: 'create',
    category: '3. Design Services',
    tagline: 'Photorealistic 3D product rendering, architectural visualization, and spatial web assets.',
    directAnswer: 'Explode Labs creates studio-quality 3D product models, interactive 3D web configurators, and architectural renderings that showcase products with extraordinary realism.',
    definition: 'End-to-end 3D modeling, texturing, lighting, rendering, and WebGL optimization for e-commerce configurators, product packaging, and spatial computing.',
    targetAudience: ['D2C Luxury & Hardware Brands', 'Architectural & Real Estate Developers', 'Modern E-commerce Stores'],
    problemsSolved: ['Costly and slow physical photography shoots for every SKU', 'Inability to showcase internal product mechanics', 'Slow 3D assets that lag on mobile browsers'],
    deliverables: ['Ultra-high resolution 8K photorealistic product renders', '3D interactive WebGL models optimized for Three.js', '360-degree product turntable animations and exploded views', 'Augmented Reality (USDZ / GLTF) files for mobile AR'],
    technologies: ['Blender', 'Cinema 4D', 'ZBrush', 'Substance Painter', 'Three.js', 'Unreal Engine 5'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '3 to 6 weeks',
    process: [
      { step: 1, title: 'CAD Blueprint Ingestion', description: 'Converting CAD data into clean quad-mesh 3D geometry.' },
      { step: 2, title: 'PBR Shading & Texturing', description: 'Creating realistic micro-surface textures and materials.' },
      { step: 3, title: 'Studio Virtual Lighting', description: 'Simulating studio softbox lighting and depth-of-field.' },
      { step: 4, title: '8K Rendering & WebGL Export', description: 'Generating image passes and lightweight GLTF models.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce', 'novus-fintech-portal'],
    relatedServiceSlugs: ['motion-graphics-animation', 'ecommerce-shopify-growth'],
    faqs: [{ question: 'Can these 3D models be used in an interactive web customizer?', answer: 'Yes, we optimize 3D assets specifically for Three.js and React Three Fiber to load under 2 seconds.' }]
  },

  // =========================================================================
  // 4. VIDEO & MOTION SERVICES (Categories 16 - 19)
  // =========================================================================
  {
    id: 'srv_14',
    slug: 'video-production-editing',
    name: 'Commercial Video Production & High-Impact Editing',
    pillar: 'create',
    category: '4. Video & Motion Services',
    tagline: 'Cinematic commercials, YouTube growth editing, and high-converting viral shorts.',
    directAnswer: 'Explode Labs produces and edits cinematic commercial videos, YouTube deep-dives, podcast formats, and high-velocity Reels/Shorts/TikToks designed to maximize retention and drive action.',
    definition: 'Full-pipeline video editing and creative post-production encompassing sound design, color grading, pacing optimization, kinetic typography, and multi-platform aspect ratio deliverables.',
    targetAudience: ['B2B Tech Brands launching product videos', 'Creators scaling YouTube channels', 'E-commerce brands needing high-ROAS video ad hooks'],
    problemsSolved: ['Low audience retention on long-form video', 'Ad creative fatigue requiring rapid weekly testing variations', 'Unpolished video editing making tech companies look amateur'],
    deliverables: ['Broadcast-grade 4K product demo videos and commercials', 'Monthly short-form video packages (Reels/Shorts/TikToks) with viral hook editing', 'Professional multi-track sound design, Foley, audio mastering, and DaVinci color grading', 'Subtitles, kinetic text animation, and motion graphics callouts'],
    technologies: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Descript', 'CapCut Pro', 'Cinema 4D'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '1 to 3 weeks',
    process: [
      { step: 1, title: 'Creative Brief & Hook Design', description: 'Scripting, storyboarding, and retention pacing.' },
      { step: 2, title: 'Rough Cut Review', description: 'Structuring narrative arc and B-roll selection.' },
      { step: 3, title: 'Sound Design & Color Grading', description: 'Mastering audio and professional color LUTs.' },
      { step: 4, title: 'Multi-Format Master Delivery', description: '16:9, 9:16, 1:1 exports optimized for social and paid ads.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['motion-graphics-animation', 'graphic-design-visual-assets'],
    faqs: [{ question: 'Can you handle raw footage filmed by our team?', answer: 'Yes, upload your raw footage to our cloud drive and our senior video editors handle all post-production.' }]
  },
  {
    id: 'srv_15',
    slug: 'motion-graphics-animation',
    name: '2D/3D Motion Graphics & Product Animation',
    pillar: 'create',
    category: '4. Video & Motion Services',
    tagline: 'Mind-bending 3D product animations, UI micro-interactions, and kinetic typography.',
    directAnswer: 'Explode Labs creates world-class 3D product animations, explainer videos, animated logos, and UI motion graphics that elevate tech products into visual masterpieces.',
    definition: 'Motion design engineering combining Cinema 4D, After Effects, and Blender to produce photo-real product showcases, abstract tech visualizations, and dynamic brand assets.',
    targetAudience: ['SaaS platforms launching new feature suites', 'Hardware & D2C brands showcasing product mechanics', 'Agencies needing motion collateral'],
    problemsSolved: ['Inability to film physical products with a real camera', 'Boring static illustrations on landing pages', 'Explaining abstract technical value propositions quickly'],
    deliverables: ['60-90 second photo-realistic 3D product reveal and explainer animations', 'Lottie / WebGL lightweight animated UI assets for web development', 'Dynamic logo stings, title sequences, and broadcast transitions', 'High-resolution 3D renders for web headers'],
    technologies: ['Cinema 4D', 'Octane / Redshift', 'Blender', 'After Effects', 'Lottie / Rive'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '3 to 6 weeks',
    process: [
      { step: 1, title: 'Style Frames & CAD Ingestion', description: 'Designing visual style frames and importing 3D models.' },
      { step: 2, title: 'Animatic & Motion Blocking', description: 'Camera angles and pacing review in low-res proxy.' },
      { step: 3, title: 'Photo-Real Rendering', description: 'Octane ray-tracing with studio lighting.' },
      { step: 4, title: 'Compositing & Sound FX', description: 'Final color grading and custom audio sound design.' }
    ],
    caseStudySlugs: ['novus-fintech-portal', 'kicksvault-ecommerce'],
    relatedServiceSlugs: ['video-production-editing', '3d-design-visualization'],
    faqs: [{ question: 'Can you convert our CAD models into animations?', answer: 'Yes, we ingest STEP, OBJ, and CAD files, optimize polygon topology, and animate cinematic lighting.' }]
  },

  // =========================================================================
  // 5. DIGITAL MARKETING, SEO & GROWTH (Categories 20 - 24)
  // =========================================================================
  {
    id: 'srv_16',
    slug: 'technical-seo',
    name: 'Enterprise Technical SEO & Programmatic Growth',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Data-driven search engineering to capture high-intent organic demand and dominate generative AI engines.',
    directAnswer: 'Explode Labs engineers technical SEO architectures, semantic entity graphs, and quality-gated programmatic content systems that turn organic search into a predictable revenue pipeline.',
    definition: 'Comprehensive search optimization focusing on rendering performance, crawl budget, entity recognition (Knowledge Graph), JSON-LD schema, and conversion-optimized keyword clusters.',
    targetAudience: ['B2B SaaS companies', 'High-SKU E-commerce platforms', 'Digital marketplaces seeking organic pipeline'],
    problemsSolved: ['Organic traffic plateau despite publishing content', 'Index bloat and keyword cannibalization', 'Zero visibility in Google AI Overviews & Perplexity'],
    deliverables: ['100+ point technical architecture audit & code remediation', 'Custom JSON-LD Knowledge Graph schema mapped to Schema.org standards', 'Programmatic SEO quality scoring engine and intent registry', 'Content authority roadmap targeting bottom-of-funnel commercial queries'],
    technologies: ['Google Search Console API', 'BigQuery', 'Next.js Metadata API', 'Schema.org', 'Screaming Frog', 'Ahrefs API'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing Growth Retainer or 4-week Sprint',
    process: [
      { step: 1, title: 'Deep Technical Audit', description: 'Log file analysis and indexation hygiene.' },
      { step: 2, title: 'Entity Architecture & Schema', description: 'JSON-LD structured data linking services and authors.' },
      { step: 3, title: 'High-Intent Content Engineering', description: 'Comparison, alternative, and solution page development.' },
      { step: 4, title: 'Digital PR & Authority', description: 'Proprietary research publication and high-DR backlink acquisition.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas'],
    relatedServiceSlugs: ['react-nextjs-development', 'paid-performance-sem'],
    faqs: [{ question: 'How do you optimize for AI search engines (GEO)?', answer: 'We structure content with high information density, direct answers, HTML comparison tables, and Schema.org entity relationships.' }]
  },
  {
    id: 'srv_17',
    slug: 'paid-performance-sem',
    name: 'Paid Performance Marketing & SEM (Google, Meta, LinkedIn)',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'High-ROAS customer acquisition across Google Ads, Meta, LinkedIn, and YouTube.',
    directAnswer: 'We engineer precision paid acquisition funnels combining search intent capture, predictive audience segmentation, dynamic creative testing, and ruthless conversion rate optimization.',
    definition: 'Full-funnel digital advertising management delivering profitable CAC and scalable pipeline across search, social, and display channels with server-side tracking.',
    targetAudience: ['Scaling E-commerce Brands ($1M-$50M+ ARR)', 'B2B SaaS with ACVs > $5,000'],
    problemsSolved: ['Rising ad costs and deteriorating ROAS', 'Wasted budget on low-intent search terms', 'Creative fatigue from stagnant ad assets'],
    deliverables: ['Google Ads & LinkedIn Ads campaign architecture', 'Server-Side Conversion API (CAPI) setup via GTM & Stape.io', 'High-velocity creative testing pipeline (video hooks & carousels)', 'Custom Looker Studio real-time attribution and blended ROAS dashboard'],
    technologies: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'GTM Server-Side', 'Looker Studio', 'Triple Whale'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing Monthly Management',
    process: [
      { step: 1, title: 'Tracking Audit & CAPI Setup', description: 'First-party data tracking and offline conversion imports.' },
      { step: 2, title: 'Campaign Architecture', description: 'Granular ad groups and custom intent audiences.' },
      { step: 3, title: 'Creative Testing Pipeline', description: 'Deploying variations of visual assets and copy angles.' },
      { step: 4, title: 'Bid Optimization & Scale', description: 'Algorithmic value-based bidding and landing page CRO.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['technical-seo', 'ui-ux-design-systems', 'b2b-lead-generation-sdr'],
    faqs: [{ question: 'Do you provide ad creative and copy?', answer: 'Yes, our creative team produces high-converting video hooks, motion graphics, and persuasive ad copy.' }]
  },
  {
    id: 'srv_18',
    slug: 'b2b-lead-generation-sdr',
    name: 'B2B Outbound Lead Generation & SDR Engines',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Predictable, qualified sales meetings booked with enterprise decision-makers.',
    directAnswer: 'Explode Labs builds automated outbound sales engines combining multi-domain email infrastructure, AI-enriched prospect databases, personalized copywriting, and multichannel SDR outreach.',
    definition: 'Systematized outbound revenue acquisition delivering booked sales calls with verified VP/C-level prospects through cold email, LinkedIn, and intent-driven data triggers.',
    targetAudience: ['B2B SaaS Founders', 'IT & Professional Service Agencies', 'Enterprise Solution Providers'],
    problemsSolved: ['Unpredictable founder-led sales', 'Emails landing in spam due to lack of domain warmup', 'Generic outreach templates getting ignored'],
    deliverables: ['Dedicated secondary domain infrastructure with Google Workspace warmup', 'AI-enriched lead lists filtered by tech stack and funding triggers', 'Hyper-personalized multi-touch email & LinkedIn sequence copy', 'Direct calendar booking synchronization into HubSpot/Salesforce'],
    technologies: ['Smartlead', 'Instantly', 'Clay.com', 'Apollo.io', 'LinkedIn Sales Navigator', 'HubSpot'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: '14-day setup, ongoing monthly cycles',
    process: [
      { step: 1, title: 'Infrastructure Setup', description: 'Provisioning secondary domains and automated warmup.' },
      { step: 2, title: 'ICP Targeting & Clay Enrichment', description: 'Filtering accounts by headcount, revenue, and tech stack.' },
      { step: 3, title: 'Copywriting & Offer Engineering', description: 'Designing high-value lead magnets and low-friction CTAs.' },
      { step: 4, title: 'Launch & Inbox Management', description: 'Handling replies and booking calls directly on your calendar.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas'],
    relatedServiceSlugs: ['ai-workflow-automation', 'paid-performance-sem'],
    faqs: [{ question: 'Will cold emailing hurt our main company domain reputation?', answer: 'Never. We build completely isolated secondary domains and dedicated inboxes that protect your corporate domain.' }]
  },
  {
    id: 'srv_19',
    slug: 'content-strategy-copywriting',
    name: 'Website Copywriting, Technical Content & SEO Writing',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'High-conversion sales copy, technical documentation, and authority-building content.',
    directAnswer: 'Explode Labs writes clear, persuasive website sales copy, in-depth technical guides, whitepapers, and bottom-of-funnel SEO articles that convert readers into paying clients.',
    definition: 'Strategic content production combining subject-matter expert interviews, keyword intent mapping, conversion copywriting frameworks, and editorial quality control.',
    targetAudience: ['B2B Tech Companies with complex products', 'E-commerce brands seeking higher conversions'],
    problemsSolved: ['Vague, jargon-filled website copy', 'Shallow AI-generated blog posts penalized by Google', 'Low landing page conversion rates'],
    deliverables: ['Full website copy overhaul (Homepage, Services, About, Pricing)', 'High-authority long-form guides and research whitepapers', 'Conversion-focused landing page copy for paid ads', 'Product documentation, changelogs, and onboarding sequences'],
    technologies: ['Notion', 'Clearscope', 'SurferSEO', 'Grammarly', 'Ahrefs'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '2 to 4 weeks per comprehensive copy package',
    process: [
      { step: 1, title: 'Customer Interview & Value Mapping', description: 'Extracting key objections and emotional triggers.' },
      { step: 2, title: 'Wireframe Copy Architecture', description: 'Writing headline hierarchies and CTA placements.' },
      { step: 3, title: 'Drafting & Fact-Checking', description: 'Dense, engaging copy validated by domain experts.' },
      { step: 4, title: 'A/B Testing Review', description: 'Refining headlines based on post-launch analytics.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas'],
    relatedServiceSlugs: ['technical-seo', 'ui-ux-design-systems'],
    faqs: [{ question: 'Do you write technical software documentation?', answer: 'Yes, our technical writers have engineering backgrounds and document REST APIs, SDKs, and architectural workflows.' }]
  },
  {
    id: 'srv_20',
    slug: 'email-marketing-automation',
    name: 'Email Marketing, Klaviyo Flows & Deliverability',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Automated lifecycle email flows that maximize customer lifetime value and retention.',
    directAnswer: 'We design, write, and engineer high-converting automated email flows in Klaviyo, HubSpot, and Customer.io, boosting repeat revenue and inbox deliverability.',
    definition: 'End-to-end email marketing covering welcome sequences, abandoned cart triggers, win-back flows, newsletter production, list segmentation, and SPF/DKIM/DMARC deliverability audits.',
    targetAudience: ['Shopify D2C Brands', 'B2B SaaS companies seeking higher user onboarding activation'],
    problemsSolved: ['Emails landing in Promotions tab or Spam', 'Low open rates from unsegmented blast emails', 'Missing automated abandoned cart flows'],
    deliverables: ['Automated lifecycle flows (Welcome, Abandoned Cart, Win-back, Sunset)', 'Custom HTML/MJML email templates tested across 50+ clients', 'Advanced behavioral segmentation based on RFM scores', 'Dedicated IP warmup and sender reputation monitoring'],
    technologies: ['Klaviyo', 'HubSpot', 'Customer.io', 'Postmark', 'Litmus', 'Mailgun'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing Management or 3-week setup sprint',
    process: [
      { step: 1, title: 'Deliverability & Hygiene Audit', description: 'Cleaning contacts and configuring DMARC/BIMI.' },
      { step: 2, title: 'Lifecycle Flow Architecture', description: 'Mapping trigger events and delay timing.' },
      { step: 3, title: 'Copywriting & Design Build', description: 'Writing hooks and responsive email design.' },
      { step: 4, title: 'A/B Offer Testing', description: 'Testing send times and subject lines to maximize revenue.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['ecommerce-shopify-growth', 'b2b-lead-generation-sdr'],
    faqs: [{ question: 'What percentage of e-commerce revenue should come from email?', answer: 'A healthy Shopify brand should generate 25% to 40% of total revenue from automated email flows.' }]
  },
  {
    id: 'srv_21',
    slug: 'digital-pr-reputation',
    name: 'Digital PR, Media Placement & Authority Building',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Earn tier-1 press mentions, high-DR editorial backlinks, and brand entity authority.',
    directAnswer: 'Explode Labs executes data-driven digital PR campaigns, proprietary research studies, and executive thought leadership that secure high-authority backlinks and build verifiable brand trust.',
    definition: 'Strategic PR and link acquisition leveraging original industry surveys, expert commentary (HARO/Connectively), press release distribution, and crisis reputation defense.',
    targetAudience: ['B2B SaaS companies seeking domain rating growth', 'Executives building authority', 'Companies overcoming negative search results'],
    problemsSolved: ['Inability to rank for competitive keywords due to low DR', 'Lack of third-party citations preventing LLMs from recommending brand', 'Negative review articles dominating page one Google'],
    deliverables: ['Original proprietary research report packaged for journalists', 'Guaranteed high-authority editorial placements on DR 70+ publications', 'Online reputation defense pushing positive entity assets to page one', 'Executive thought leadership placed on top business journals'],
    technologies: ['Cision', 'Muck Rack', 'Connectively / HARO', 'Ahrefs', 'Brand24'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing 3-6 month campaigns',
    process: [
      { step: 1, title: 'Entity Audit & Story Hooks', description: 'Finding unique angles and proprietary survey topics.' },
      { step: 2, title: 'Data Survey & Synthesis', description: 'Surveying 500+ professionals to create original statistics.' },
      { step: 3, title: 'Targeted Journalist Outreach', description: 'Pitching personalized hooks to top-tier media.' },
      { step: 4, title: 'Syndication & Entity Defense', description: 'Amplifying coverage across Wikipedia and Google Knowledge Graph.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas', 'novus-fintech-portal'],
    relatedServiceSlugs: ['technical-seo', 'brand-identity-creative'],
    faqs: [{ question: 'How does Digital PR improve AI Search (GEO) visibility?', answer: 'LLMs like ChatGPT and Claude cite brands that appear across authoritative external news sources and verified citations.' }]
  },

  // =========================================================================
  // 6. CLOUD, DEVOPS, SECURITY & DATA (Categories 25 - 28)
  // =========================================================================
  {
    id: 'srv_22',
    slug: 'cloud-devops-infrastructure',
    name: 'Cloud Architecture, DevOps & AWS/GCP Infrastructure',
    pillar: 'automate',
    category: '6. Infrastructure & Data',
    tagline: 'Reliable AWS/GCP cloud environments, automated CI/CD pipelines, and SOC2 compliance.',
    directAnswer: 'Explode Labs architects auto-scaling, cost-optimized cloud infrastructure on AWS and GCP using Infrastructure as Code (Terraform), Docker, and Kubernetes.',
    definition: 'Modern DevOps engineering that secures applications, automates zero-downtime deployments, optimizes cloud spend, and implements disaster recovery protocols.',
    targetAudience: ['Growth-stage SaaS companies', 'FinTech & Healthcare firms with strict compliance requirements'],
    problemsSolved: ['Server crashes during traffic spikes', 'Skyrocketing AWS/GCP monthly cloud bills', 'Manual, error-prone deployment processes causing outages'],
    deliverables: ['Terraform Infrastructure as Code (IaC) repository', 'Automated GitHub Actions CI/CD pipelines with staging gates', 'Kubernetes (EKS/GKE) or ECS container orchestration', 'Datadog / Prometheus monitoring and automated alerting'],
    technologies: ['AWS', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '3 to 6 weeks',
    process: [
      { step: 1, title: 'Infrastructure Audit', description: 'Vulnerability scan and cloud bill cost audit.' },
      { step: 2, title: 'Terraform IaC Scripting', description: 'Modular infrastructure provisioning.' },
      { step: 3, title: 'CI/CD Pipeline Build', description: 'Automated build, test, and rolling deployment.' },
      { step: 4, title: 'Monitoring & Disaster Recovery', description: 'Synthetic uptime monitors and backup automation.' }
    ],
    caseStudySlugs: ['apex-health-crm', 'hyperscale-b2b-saas'],
    relatedServiceSlugs: ['saas-mvp-development', 'react-nextjs-development'],
    faqs: [{ question: 'How much can you reduce our monthly AWS bill?', answer: 'Our audits typically eliminate 25% to 45% of unnecessary AWS spend by rightsizing instances and removing orphaned volumes.' }]
  },
  {
    id: 'srv_23',
    slug: 'cybersecurity-compliance-audits',
    name: 'Cybersecurity Audits, Penetration Testing & SOC2',
    pillar: 'automate',
    category: '6. Infrastructure & Data',
    tagline: 'Hardened application security, ethical hacking, and SOC 2 / HIPAA compliance readiness.',
    directAnswer: 'Explode Labs performs web & mobile penetration testing, cloud vulnerability audits, and automated security hardening to protect platforms and pass enterprise vendor security reviews.',
    definition: 'Comprehensive information security engineering including OWASP Top 10 vulnerability remediation, static/dynamic code analysis (SAST/DAST), and compliance mapping.',
    targetAudience: ['SaaS founders closing enterprise deals', 'Healthcare and FinTech platforms managing sensitive customer data'],
    problemsSolved: ['Failing enterprise security questionnaires', 'Undetected SQL injection or XSS vulnerabilities in web codebases', 'Lack of automated employee access control'],
    deliverables: ['Comprehensive Black-box and Gray-box Penetration Testing Report', 'Actionable vulnerability remediation code patches for frontend and backend', 'Automated security scanning integration into GitHub Actions CI/CD', 'Executive Summary Letter of Attestation for enterprise clients'],
    technologies: ['Burp Suite', 'OWASP ZAP', 'Snyk', 'SonarQube', 'AWS GuardDuty', 'Trivy'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '2 to 4 weeks',
    process: [
      { step: 1, title: 'Scope Definition', description: 'Mapping attack surfaces and API endpoints.' },
      { step: 2, title: 'Penetration Testing', description: 'Simulating real-world attacks against web and cloud assets.' },
      { step: 3, title: 'Vulnerability Triaging', description: 'Providing exact code fixes and architectural remedies.' },
      { step: 4, title: 'Attestation Letter', description: 'Verifying all patches and issuing an executive certificate.' }
    ],
    caseStudySlugs: ['apex-health-crm', 'novus-fintech-portal'],
    relatedServiceSlugs: ['cloud-devops-infrastructure', 'saas-mvp-development'],
    faqs: [{ question: 'Will penetration testing cause downtime?', answer: 'We test against dedicated staging environments or schedule low-traffic windows to ensure zero disruption.' }]
  },
  {
    id: 'srv_24',
    slug: 'data-engineering-analytics',
    name: 'Data Engineering, Data Warehouses & BI Dashboards',
    pillar: 'automate',
    category: '6. Infrastructure & Data',
    tagline: 'Modern data stack engineering, automated ETL pipelines, and real-time PowerBI/Looker dashboards.',
    directAnswer: 'We design unified data warehouses in BigQuery, Snowflake, and Postgres, with automated ETL/ELT pipelines and executive BI dashboards that give leadership real-time truth.',
    definition: 'End-to-end data architecture covering data ingestion, warehouse modeling (dbt), transformation pipelines, customer analytics, and real-time visualization.',
    targetAudience: ['Growth-stage companies with fragmented data', 'E-commerce and SaaS platforms needing single-source-of-truth metrics'],
    problemsSolved: ['Discrepant metrics across marketing, sales, and financial reports', 'Slow database queries from analytical reports hitting production DBs', 'Manual hours spent compiling weekly spreadsheets'],
    deliverables: ['Centralized Data Warehouse architecture (Snowflake / BigQuery / Supabase)', 'Automated ETL pipelines syncing Stripe, HubSpot, Google Ads, and DB tables', 'Interactive executive dashboards in Looker Studio, PowerBI, or React charts', 'dbt data models with automated schema testing and documentation'],
    technologies: ['BigQuery', 'Snowflake', 'dbt', 'Airbyte', 'Fivetran', 'PostgreSQL', 'Looker Studio', 'PowerBI'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '4 to 8 weeks',
    process: [
      { step: 1, title: 'Data Source Audit', description: 'Standardizing metric definitions (LTV, CAC, MRR).' },
      { step: 2, title: 'Warehouse Provisioning', description: 'Setting up Airbyte connectors and cloud schemas.' },
      { step: 3, title: 'dbt Data Modeling', description: 'Writing SQL transformation models and quality checks.' },
      { step: 4, title: 'Dashboard Engineering', description: 'Designing clean visualizations with automated refreshes.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas', 'omniflow-logistics'],
    relatedServiceSlugs: ['cloud-devops-infrastructure', 'ai-workflow-automation'],
    faqs: [{ question: 'Can you combine our Stripe, Ads, and CRM data into one dashboard?', answer: 'Yes, we consolidate marketing ad spend, sales pipeline, and billing data into unified CAC and LTV dashboards.' }]
  },
  {
    id: 'srv_25',
    slug: 'qa-software-testing',
    name: 'QA Engineering & Automated End-to-End Testing',
    pillar: 'automate',
    category: '6. Infrastructure & Data',
    tagline: 'Automated Playwright and Cypress test suites preventing regressions and bugs.',
    directAnswer: 'Explode Labs builds automated end-to-end (E2E), integration, and performance testing suites that run in CI/CD pipelines to guarantee flawless software releases.',
    definition: 'Comprehensive software quality assurance encompassing test strategy, automated browser testing, API load testing, visual regression testing, and manual exploratory testing.',
    targetAudience: ['SaaS teams scaling engineering headcount', 'E-commerce platforms undergoing high-traffic checkout events'],
    problemsSolved: ['Bugs slipping into production undetected', 'Engineering teams spending 30%+ of sprints manually testing', 'Regressions breaking user onboarding flows after code updates'],
    deliverables: ['Automated Playwright / Cypress E2E test suite covering critical flows', 'API regression testing suite in Postman / k6 with load testing reports', 'GitHub Actions CI/CD test gates preventing broken merges', 'Detailed QA test matrix and visual regression snapshot tests'],
    technologies: ['Playwright', 'Cypress', 'k6', 'Jest', 'GitHub Actions', 'Postman'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '3 to 6 weeks',
    process: [
      { step: 1, title: 'Critical Path Mapping', description: 'Identifying revenue-critical user flows.' },
      { step: 2, title: 'Playwright E2E Build', description: 'Writing robust automated browser tests in TypeScript.' },
      { step: 3, title: 'CI/CD Test Gates', description: 'Configuring parallel test runs with video recording.' },
      { step: 4, title: 'k6 Load Testing', description: 'Simulating 5,000+ concurrent users to find DB bottlenecks.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas', 'apex-health-crm'],
    relatedServiceSlugs: ['saas-mvp-development', 'react-nextjs-development'],
    faqs: [{ question: 'How do you prevent automated tests from being flaky?', answer: 'We use modern Playwright auto-waiting primitives, isolated mock databases, and deterministic seed data.' }]
  },

  // =========================================================================
  // 7. EMERGING TECH & SPECIALIZED (Categories 29 - 41)
  // =========================================================================
  {
    id: 'srv_26',
    slug: 'blockchain-web3-development',
    name: 'Blockchain, Web3 & Smart Contracts',
    pillar: 'build',
    category: '7. Emerging Technologies',
    tagline: 'Audited smart contracts, decentralized applications (dApps), and token architectures.',
    directAnswer: 'Explode Labs architects secure Ethereum, Solana, and EVM smart contracts, Web3 wallet integrations, and institutional dApp portals with formal verification.',
    definition: 'Full-stack Web3 engineering covering Solidity/Rust smart contracts, zero-knowledge proofs, wallet connections (Wagmi/RainbowKit), and decentralized storage protocols.',
    targetAudience: ['FinTech platforms integrating crypto payments', 'Web3 startups launching protocols or NFT marketplaces'],
    problemsSolved: ['Smart contract security vulnerabilities', 'High-friction Web3 onboarding for non-crypto native users', 'High gas fees and slow synchronization latency'],
    deliverables: ['Audited Solidity / Rust smart contracts with Foundry test suites', 'Responsive Web3 dApp frontend with social login / account abstraction (ERC-4337)', 'Subgraphs (The Graph) for real-time blockchain querying', 'Comprehensive security audit preparation report'],
    technologies: ['Solidity', 'Rust', 'Ethers.js', 'Wagmi', 'Next.js', 'Hardhat', 'The Graph'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '6 to 10 weeks',
    process: [
      { step: 1, title: 'Protocol Design', description: 'State machine and security threat modeling.' },
      { step: 2, title: 'Smart Contract Build', description: 'Gas-optimized contract code in Foundry.' },
      { step: 3, title: 'Account Abstraction', description: 'Seamless Web3 login and gasless transactions.' },
      { step: 4, title: 'Audit & Mainnet Launch', description: 'Verified contracts on block explorers.' }
    ],
    caseStudySlugs: ['novus-fintech-portal'],
    relatedServiceSlugs: ['react-nextjs-development', 'cybersecurity-compliance-audits'],
    faqs: [{ question: 'Do you provide formal smart contract security audits?', answer: 'We conduct rigorous internal automated fuzz testing and partner with top audit firms for formal verification.' }]
  },
  {
    id: 'srv_27',
    slug: 'ar-vr-spatial-computing',
    name: 'AR, VR & Spatial Computing Experiences',
    pillar: 'build',
    category: '7. Emerging Technologies',
    tagline: 'Augmented Reality web visualizers, Apple Vision Pro apps, and virtual 3D tours.',
    directAnswer: 'Explode Labs creates immersive WebAR product visualizers, Apple Vision Pro spatial computing apps, and interactive 3D virtual showroom experiences.',
    definition: 'Spatial computing engineering leveraging WebXR, Unity, RealityKit, and Three.js to build mixed-reality training simulations and interactive 3D shopping.',
    targetAudience: ['E-commerce luxury retailers', 'Real estate and architecture firms', 'Industrial training & medical simulation teams'],
    problemsSolved: ['Inability of buyers to visualize physical products in their homes', 'High cost of physical showroom spaces', 'Dangerous or expensive real-world industrial training scenarios'],
    deliverables: ['Zero-install WebAR product visualizer working directly in mobile Safari/Chrome', 'Native Apple Vision Pro / Meta Quest spatial application build', 'High-fidelity 360-degree interactive virtual tour portal', '3D spatial design assets in USDZ and GLTF formats'],
    technologies: ['WebXR', 'Three.js', 'Unity', 'RealityKit / Swift', 'WebGPU', 'Blender'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '4 to 10 weeks',
    process: [
      { step: 1, title: 'Spatial UX Storyboard', description: 'Interaction and gesture mapping.' },
      { step: 2, title: '3D Asset Optimization', description: 'Polycount optimization for 60fps mobile WebGL.' },
      { step: 3, title: 'Spatial Engine Build', description: 'Lighting, plane detection, and physical shaders.' },
      { step: 4, title: 'Cross-Device QA & Launch', description: 'Testing across iOS, Android, VisionOS, and Quest.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce', 'novus-fintech-portal'],
    relatedServiceSlugs: ['3d-design-visualization', 'mobile-app-development'],
    faqs: [{ question: 'Do users need to install an app to view WebAR products?', answer: 'No, our WebAR visualizers run natively inside standard mobile Safari and Chrome with zero app downloads required.' }]
  },
  {
    id: 'srv_28',
    slug: 'game-development-unity-unreal',
    name: 'Game Development & Interactive 3D (Unity & Unreal)',
    pillar: 'build',
    category: '7. Emerging Technologies',
    tagline: 'High-performance mobile, PC, and browser games engineered in Unity & Unreal Engine 5.',
    directAnswer: 'We design and develop cross-platform 2D/3D games, browser-based multiplayer games, and gamified enterprise training simulations using Unity and Unreal Engine 5.',
    definition: 'End-to-end game production covering game design documents (GDD), 3D character rigging, physics engines, netcode multiplayer, and in-game economy monetization.',
    targetAudience: ['Gaming startups and studios', 'Brands launching gamified marketing campaigns', 'Enterprises building simulation games'],
    problemsSolved: ['Multiplayer netcode desynchronization and server lag', 'Clunky mobile touch controls and poor frame pacing', 'Complex monetization and in-app purchase integration'],
    deliverables: ['Production game builds for iOS, Android, Steam (PC/Mac), or WebGL browser', 'Custom multiplayer networking architecture (Photon / Mirror / WebSockets)', 'In-app purchases, ad network mediation, and analytics SDK integration', 'High-framerate 60fps physics and rendering optimization'],
    technologies: ['Unity (C#)', 'Unreal Engine 5 (C++/Blueprints)', 'Photon / Mirror', 'Blender', 'FMOD'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '8 to 18 weeks',
    process: [
      { step: 1, title: 'Game Design Document (GDD)', description: 'Mechanics, level progression, and economy design.' },
      { step: 2, title: 'Core Gameplay Prototype', description: 'Character controller, physics, and gameplay loop.' },
      { step: 3, title: 'Art, Audio & Level Polish', description: '3D environments, particle VFX, and adaptive audio.' },
      { step: 4, title: 'Platform Certification & Release', description: 'Steam, App Store, and Google Play submission.' }
    ],
    caseStudySlugs: ['novus-fintech-portal'],
    relatedServiceSlugs: ['3d-design-visualization', 'mobile-app-development'],
    faqs: [{ question: 'Can you build playable 3D games directly inside a web browser?', answer: 'Yes, we optimize WebGL and WebGPU builds in Unity and Three.js that load in seconds with high frame rates.' }]
  },
  {
    id: 'srv_29',
    slug: 'audio-music-podcast-production',
    name: 'Audio Production, Sound Design & Voiceovers',
    pillar: 'create',
    category: '7. Emerging Technologies',
    tagline: 'Broadcast-quality sound design, podcast post-production, and commercial voiceovers.',
    directAnswer: 'Explode Labs provides professional podcast post-production, commercial voiceover recording, audio mastering, and custom UI sound design for digital products and commercials.',
    definition: 'Full-spectrum audio engineering encompassing multi-track vocal editing, de-noising (iZotope RX), sonic branding, spatial audio, and broadcast loudness mastering (-14 LUFS).',
    targetAudience: ['B2B Tech Podcasts & Media Networks', 'Commercial video producers needing pristine audio', 'SaaS products needing custom UI sonic branding'],
    problemsSolved: ['Muddy, echoey remote podcast recordings with background noise', 'Inconsistent audio volume levels across episodes', 'Generic stock audio tracks that undermine brand quality'],
    deliverables: ['Pristine podcast master episodes with noise reduction and vocal EQ', 'Custom UI sound effects (micro-interactions, success chimes) for web/mobile apps', 'Professional commercial voiceover recordings (human & high-fidelity AI voice cloning)', 'Original custom music themes and sonic logo stings'],
    technologies: ['Pro Tools', 'Ableton Live', 'Logic Pro', 'iZotope RX', 'ElevenLabs Pro', 'FabFilter'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '3 to 5 business days per episode or weekly retainer',
    process: [
      { step: 1, title: 'Audio Restoration & De-noising', description: 'Eliminating room reverb, plosives, and hum.' },
      { step: 2, title: 'Editorial Arrangement & Pacing', description: 'Removing filler words and aligning multi-track timing.' },
      { step: 3, title: 'Sound Design & Custom Scoring', description: 'Adding intro/outro music and dynamic sound effects.' },
      { step: 4, title: 'Broadcast Loudness Mastering', description: 'Exporting optimized MP3/WAV files mastered to Spotify/Apple standards.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['video-production-editing', 'motion-graphics-animation'],
    faqs: [{ question: 'Can you clean up low-quality Zoom or Riverside recordings?', answer: 'Yes, we utilize advanced spectral audio repair in iZotope RX to eliminate reverb and enhance vocal clarity.' }]
  },
  {
    id: 'srv_30',
    slug: 'translation-multilingual-localization',
    name: 'Translation, Multilingual Localization & Global SEO',
    pillar: 'grow',
    category: '7. Emerging Technologies',
    tagline: 'Translate and localize web applications, mobile apps, and marketing for global markets.',
    directAnswer: 'Explode Labs delivers complete website, app, and content localization across 40+ languages, with cultural adaptation, hreflang tag architecture, and multilingual SEO.',
    definition: 'Enterprise translation and software internationalization (i18n) combining native linguist review, continuous CI/CD localization pipelines (Crowdin/Lokalise), and local search optimization.',
    targetAudience: ['SaaS platforms expanding into European, Asian, and LATAM markets', 'Global E-commerce stores with multi-currency requirements'],
    problemsSolved: ['Literal machine translations that confuse international buyers', 'Broken layouts caused by expanded text lengths in German/French', 'Missing hreflang tags causing international SEO cannibalization'],
    deliverables: ['Complete software UI localization with i18n key management', 'Multilingual website translation with automated CMS syncing', 'Hreflang XML sitemap and international search architecture', 'Localized legal documents (Terms of Service, Privacy Policies, GDPR)'],
    technologies: ['Lokalise', 'Crowdin', 'Next.js i18n', 'Google Translate API', 'DeepL Pro', 'Ahrefs'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '2 to 6 weeks',
    process: [
      { step: 1, title: 'i18n Codebase Audit', description: 'Extracting hardcoded strings into structured JSON keys.' },
      { step: 2, title: 'Native Linguist Translation', description: 'High-precision contextual translation with glossary checks.' },
      { step: 3, title: 'Multilingual SEO & Hreflang', description: 'Configuring subfolder routing (/es/, /de/) and localized metadata.' },
      { step: 4, title: 'In-Context Linguistic QA', description: 'Testing localized screens to prevent UI overflow bugs.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas'],
    relatedServiceSlugs: ['technical-seo', 'react-nextjs-development'],
    faqs: [{ question: 'How do you handle ongoing translations when new features are deployed?', answer: 'We connect Lokalise/Crowdin directly into your GitHub repository so new text strings are automatically translated during CI/CD builds.' }]
  },
  {
    id: 'srv_31',
    slug: 'emerging-ai-employees-digital-humans',
    name: 'Emerging AI Employees, Digital Humans & Synthetic Media',
    pillar: 'build',
    category: '7. Emerging Technologies',
    tagline: 'Autonomous AI SDRs, AI customer support employees, and interactive digital human avatars.',
    directAnswer: 'Explode Labs builds autonomous AI employees, digital human video avatars, and voice-interactive synthetic agents that perform sales qualification and customer support 24/7.',
    definition: 'Cutting-edge AI employee engineering integrating conversational speech models (ElevenLabs/Deepgram), photorealistic video avatars (HeyGen/Synthesia), and autonomous decision engines.',
    targetAudience: ['Enterprises automating high-volume video customer onboarding', 'Sales teams deploying autonomous conversational SDRs'],
    problemsSolved: ['High labor costs of scaling 24/7 human sales and support teams', 'Inability to film personalized product video demos for every inbound lead', 'Slow response times on after-hours inbound inquiries'],
    deliverables: ['Custom-trained photorealistic AI Video Avatar communicating with natural lip-sync', 'Autonomous AI Voice Agent answering customer phone calls with <500ms latency', 'Integrated CRM pipeline updating lead notes and scheduling meetings automatically', 'Executive control dashboard to monitor agent conversations and intervene in real time'],
    technologies: ['HeyGen API', 'ElevenLabs', 'Deepgram', 'LiveKit', 'Claude 3.5', 'WebSockets', 'Python'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '4 to 8 weeks',
    process: [
      { step: 1, title: 'Persona & Voice Training', description: 'Recording studio samples for custom voice cloning and video avatar rendering.' },
      { step: 2, title: 'Conversational Knowledge Graph', description: 'Training the agent on company documentation and objection-handling rules.' },
      { step: 3, title: 'Low-Latency Streaming Build', description: 'Integrating WebSockets and WebRTC for instantaneous conversational pacing.' },
      { step: 4, title: 'CRM Integration & Live Pilot', description: 'Deploying agent with real-time human supervisor monitoring.' }
    ],
    caseStudySlugs: ['lumina-ai-agent-suite'],
    relatedServiceSlugs: ['generative-ai-agents', 'ai-workflow-automation'],
    faqs: [{ question: 'Can the AI voice agent understand accents and interrupt naturally?', answer: 'Yes, our voice agents use low-latency WebRTC streams with natural turn-taking and conversational interruption detection.' }]
  },

  // =========================================================================
  // 8. HIGH-MARGIN PERFORMANCE & MARKETPLACE (Categories 32 - 36)
  // =========================================================================
  {
    id: 'srv_32',
    slug: 'amazon-and-marketplace-marketing',
    name: 'Amazon & Multi-Channel Marketplace Marketing (PPC, SEO & Storefronts)',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Scale revenue and market share across Amazon FBA/FBM, Walmart Marketplace, and Target Plus.',
    directAnswer: 'Explode Labs manages full-funnel marketplace growth across Amazon and Walmart, combining algorithmic PPC (Sponsored Products, Brands, Display, DSP), A9/COSMO SEO, Premium A+ Content design, and Buy Box defense.',
    definition: 'End-to-end marketplace management encompassing keyword indexing, dynamic PPC bidding, TACoS optimization, conversion-optimized storefront design, and automated review acceleration.',
    targetAudience: ['D2C Brands expanding beyond Shopify', 'Amazon FBA/FBM sellers doing $1M–$50M+ GMV', 'CPG Brands scaling retail marketplace channels'],
    problemsSolved: ['Runaway ad spend with escalating ACoS and deteriorating margins', 'Losing the Buy Box to unauthorized 3P resellers and hijackers', 'Underperforming listing conversion rates due to generic copy and low-resolution graphics'],
    deliverables: ['Algorithmic Amazon PPC campaign structure (SP, SB, SD, Video)', 'Bespoke Premium A+ Content and Brand Story modules', 'Brand Storefront architecture with custom sub-category routing', 'Weekly TACoS, organic keyword rank, and market share reporting'],
    technologies: ['Amazon Advertising Console', 'Amazon DSP', 'Helium 10 Cerebro', 'Jungle Scout', 'Pacvue', 'Perpetua', 'Walmart Connect'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Performance / Retainer' },
    typicalTimeline: 'Ongoing Monthly Management or 4-week Listing Turnaround',
    process: [
      { step: 1, title: 'Marketplace & TACoS Audit', description: 'Catalog indexing audit, ACoS analysis, and Buy Box suppression review.' },
      { step: 2, title: 'Listing & A+ Content Engineering', description: 'Keyword harvesting (Helium 10), high-resolution 3D renders, and Premium A+ layouts.' },
      { step: 3, title: 'Full-Funnel Sponsored Ads & DSP', description: 'Segmenting exact/phrase/broad search terms, brand defense campaigns, and Amazon DSP retargeting.' },
      { step: 4, title: 'Multi-Channel Scale & Inventory Sync', description: 'Expanding verified listings onto Walmart.com and Target Plus with unified inventory tracking.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['ecommerce-shopify-growth', 'paid-performance-sem', '3d-design-visualization'],
    faqs: [
      { question: 'What is the difference between ACoS and TACoS, and which one do you optimize for?', answer: 'ACoS (Advertising Cost of Sales) measures direct ad spend against ad revenue. TACoS (Total Advertising Cost of Sales) measures total ad spend against total brand revenue. We optimize for TACoS to ensure paid advertising boosts organic keyword rank and lifts overall brand profitability.' }
    ]
  },
  {
    id: 'srv_33',
    slug: 'local-and-franchise-seo',
    name: 'Local & Multi-Location Franchise SEO',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Dominate Google Map Packs and hyper-local search across 10 to 500+ franchise locations.',
    directAnswer: 'Explode Labs engineers enterprise multi-location local SEO engines, managing Google Business Profiles, localized landing pages, review acceleration, and citation networks for high-growth franchise systems.',
    definition: 'Multi-unit local search optimization focusing on Google Map Pack proximity algorithms, programmatic city landing pages, automated review capture funnels, and unified Schema.org LocalBusiness architecture.',
    targetAudience: ['Franchise networks with 10–500+ locations', 'Multi-location healthcare & dental practices', 'Multi-state legal, home services, and retail chains'],
    problemsSolved: ['Inconsistent NAP (Name, Address, Phone) citations across data aggregators', 'Low map pack rankings outside immediate 1-mile radius', 'Account suspensions caused by uncoordinated Google Business Profile edits'],
    deliverables: ['100% verified and optimized Google Business Profile network', 'Programmatic hyper-local landing page architecture with localized Schema', 'Automated SMS/email review capture and reputation funnel', 'Geo-grid local rank tracking dashboards (Local Falcon)'],
    technologies: ['Google Business Profile API', 'BrightLocal', 'Whitespark', 'Local Falcon', 'Uberall / Yext', 'Next.js App Router'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing Monthly Growth & Multi-Location Sprints',
    process: [
      { step: 1, title: 'Multi-Location Citation & GBP Audit', description: 'Auditing NAP consistency across top 50 local citation directories and verifying GBP ownership.' },
      { step: 2, title: 'Proximity & Category Optimization', description: 'Tuning primary and secondary GBP categories, business descriptions, and geo-tagged visual assets.' },
      { step: 3, title: 'Dynamic Hyper-Local Landing Pages', description: 'Deploying sub-second localized city pages with custom Schema.org LocalBusiness and unique geo-content.' },
      { step: 4, title: 'Review Velocity & Geo-Grid Tracking', description: 'Integrating automated review requests via SMS/email and monitoring rank distribution with Local Falcon.' }
    ],
    caseStudySlugs: ['apex-health-crm'],
    relatedServiceSlugs: ['technical-seo', 'content-strategy-copywriting'],
    faqs: [
      { question: 'How do you prevent Google Business Profile suspensions across multi-location accounts?', answer: 'We utilize official Google Business Profile API connectors, staged rollout changes, and strict verification protocols to maintain 100% compliance with Google Merchant and Location guidelines.' }
    ]
  },
  {
    id: 'srv_34',
    slug: 'digital-pr-and-authority-link-building',
    name: 'Digital PR & High-Authority Editorial Link Building',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Earn tier-1 press mentions, DR 75+ do-follow backlinks, and authoritative entity citations.',
    directAnswer: 'Explode Labs executes data-driven digital PR campaigns, proprietary industry surveys, and reactive expert commentary that earn editorial backlinks from Forbes, TechCrunch, Bloomberg, and WSJ.',
    definition: 'High-authority organic authority acquisition combining original survey data, newsjacking, expert media commentary (Connectively/Featured), and white-hat journalist relations.',
    targetAudience: ['B2B SaaS companies needing Domain Rating acceleration', 'Venture-backed tech scaleups launching flagship products', 'High-ticket service firms overcoming low search visibility'],
    problemsSolved: ['Stagnant keyword rankings caused by low Domain Rating (DR < 30)', 'Lack of authoritative external citations preventing ChatGPT from recommending brand', 'Risk of Google algorithmic penalties from low-quality link building agencies'],
    deliverables: ['Proprietary industry research whitepaper with custom infographic assets', 'Guaranteed monthly tier-1 editorial placements (DR 70–90+)', 'Real-time media pitch tracking and syndicated coverage report', 'Entity triple seeding for Google Knowledge Graph and AI models'],
    technologies: ['Cision', 'Muck Rack', 'Connectively / HARO', 'Pitchbox', 'Ahrefs API', 'Brand24', 'BuzzSumo'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing 3 to 6-month Authority Campaigns',
    process: [
      { step: 1, title: 'Entity Authority & Gap Analysis', description: 'Evaluating competitor backlink profiles and identifying unlinked brand mentions.' },
      { step: 2, title: 'Proprietary Research & Survey Creation', description: 'Surveying 500+ verified professionals to extract unique industry benchmarks and newsworthy statistics.' },
      { step: 3, title: 'Tier-1 Journalist Outreach & Pitching', description: 'Direct pitching to journalists at major business, tech, and trade publications.' },
      { step: 4, title: 'Syndication & LLM Citation Amplification', description: 'Amplifying press coverage across high-authority networks to establish verifiable brand entities.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas', 'novus-fintech-portal'],
    relatedServiceSlugs: ['technical-seo', 'content-strategy-copywriting', 'brand-identity-creative'],
    faqs: [
      { question: 'Why is data-driven Digital PR superior to standard guest posting?', answer: 'Data-driven Digital PR produces original industry research that naturally earns Tier-1 editorial citations (DR 80+) from major publications, which Google and AI search engines view as genuine authority signals.' }
    ]
  },
  {
    id: 'srv_35',
    slug: 'ada-web-accessibility-and-compliance',
    name: 'ADA Web Accessibility & WCAG 2.2 Compliance',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'Enterprise WCAG 2.2 AA/AAA audits, screen reader remediation, and ADA lawsuit defense.',
    directAnswer: 'Explode Labs audits, remediates, and certifies web applications for full WCAG 2.2 AA/AAA and ADA Title III compliance, replacing brittle overlay widgets with clean, accessible source code.',
    definition: 'Engineering-first accessibility remediation covering keyboard navigation, screen reader compatibility (NVDA/VoiceOver), ARIA landmark architecture, contrast compliance, and VPAT statements.',
    targetAudience: ['Enterprise E-commerce brands ($10M+ GMV)', 'B2B SaaS companies bidding on government and enterprise RFPs', 'Higher education and healthcare institutions with strict compliance mandates'],
    problemsSolved: ['Vulnerability to predatory ADA Title III demand letters and lawsuits', 'Failing enterprise vendor procurement due to missing VPAT documentation', 'Checkout abandonment from assistive technology users'],
    deliverables: ['Comprehensive 100+ point WCAG 2.2 AA/AAA Technical Remediation Report', 'Direct source code pull requests remediating all accessibility defects', 'Official Voluntary Product Accessibility Template (VPAT 2.5) document', 'Automated axe-core regression testing integration into CI/CD pipelines'],
    technologies: ['Deque axe DevTools Pro', 'NVDA Screen Reader', 'Apple VoiceOver', 'PAC 2024', 'Playwright Axe', 'Lighthouse Accessibility'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Audit Sprint' },
    typicalTimeline: '2 to 5 weeks',
    process: [
      { step: 1, title: 'Automated & Manual WCAG 2.2 Audit', description: 'Full site audit combining axe-core automated scanning with manual keyboard and screen reader testing.' },
      { step: 2, title: 'Code Remediation Sprints', description: 'Remediating DOM order, ARIA attributes, semantic HTML tags, color contrast, and focus indicators.' },
      { step: 3, title: 'VPAT Statement & Legal Attestation', description: 'Drafting an official VPAT 2.5 report and public accessibility statement.' },
      { step: 4, title: 'CI/CD Automated Gate Integration', description: 'Embedding automated axe-core accessibility unit tests into GitHub Actions pipelines.' }
    ],
    caseStudySlugs: ['novus-fintech-portal', 'apex-health-crm'],
    relatedServiceSlugs: ['react-nextjs-development', 'ui-ux-design-systems', 'qa-software-testing'],
    faqs: [
      { question: 'Why don’t automated AI overlay widgets protect companies from ADA lawsuits?', answer: 'Accessibility overlay widgets only sit on top of the browser DOM and do not fix the underlying code, and federal courts have repeatedly ruled that overlay widgets do not satisfy ADA Title III requirements.' }
    ]
  },
  {
    id: 'srv_36',
    slug: 'chatgpt-and-perplexity-ai-seo',
    name: 'Generative AI SEO & LLM Optimization (ChatGPT, Perplexity & AI Overviews)',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Optimize brand visibility, knowledge graph triples, and citations across ChatGPT, Perplexity, and Google AI Overviews.',
    directAnswer: 'Explode Labs architects Generative Engine Optimization (GEO) strategies that ensure your brand is cited and recommended as the authoritative solution across ChatGPT Search, Perplexity Pro, Claude, and Google AI Overviews.',
    definition: 'Next-generation search optimization engineering semantic entity triples, high-information-gain content architectures, direct answer blocks, and Schema.org graphs to dominate AI synthesis algorithms.',
    targetAudience: ['B2B SaaS platforms competing in crowded software categories', 'High-consideration services and enterprise solutions', 'Venture-backed startups establishing category leadership'],
    problemsSolved: ['Zero visibility in Perplexity and ChatGPT when buyers ask for software recommendations', 'Declining organic traffic as Google AI Overviews answer search queries directly', 'Competitors being cited as the category standard by LLMs'],
    deliverables: ['Multi-Model AI Citation & Prompt Share-of-Voice Audit', 'Semantic Schema.org JSON-LD Knowledge Graph integration', 'Information Gain content overhaul with structured direct answer blocks', 'Third-party authority citation syndication and Wikidata entity alignment'],
    technologies: ['Perplexity Pro API', 'OpenAI SearchGPT', 'Google AI Overviews', 'DataForSEO AI Scraper', 'Wikidata', 'Schema.org Graph'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer / Sprint' },
    typicalTimeline: 'Ongoing Monthly Optimization or 4-week Sprint',
    process: [
      { step: 1, title: 'Multi-Model Brand Citation Audit', description: 'Testing 200+ high-intent category prompts across ChatGPT, Perplexity, Claude, and Gemini.' },
      { step: 2, title: 'Entity Architecture & Schema Seeding', description: 'Structuring unambiguous Schema.org JSON-LD graphs and establishing Wikidata entity triples.' },
      { step: 3, title: 'Information-Gain Content Restructuring', description: 'Adding concise 45-word direct answer blocks, comparison data tables, and proprietary benchmarks.' },
      { step: 4, title: 'Third-Party Citation Syndication', description: 'Securing citations on authoritative industry hubs, review platforms, and editorial publications.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas', 'lumina-ai-agent-suite'],
    relatedServiceSlugs: ['technical-seo', 'content-strategy-copywriting', 'digital-pr-reputation'],
    faqs: [
      { question: 'How do LLMs like Perplexity and SearchGPT decide which websites to cite?', answer: 'LLMs prioritize sources with high information density, direct answer blocks, structured HTML tables, verifiable author credentials, and frequent mentions across authoritative external third-party sites.' }
    ]
  },
  {
    id: 'srv_37',
    slug: 'ecommerce-and-shopify-seo',
    name: 'E-Commerce & Shopify SEO Services',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Scale organic revenue, collection page rankings, and product schema for Shopify & headless brands.',
    directAnswer: 'Explode Labs engineers technical and programmatic e-commerce SEO architectures for Shopify Plus and custom storefronts, optimizing faceted navigation, product schema, and collection keyword clusters.',
    definition: 'Full-funnel e-commerce search optimization focusing on crawl budget efficiency, canonicalization of variant URLs, Product/Offer JSON-LD structured data, and high-intent commercial category indexing.',
    targetAudience: ['Shopify Plus D2C Brands ($2M–$50M+ ARR)', 'High-SKU E-commerce Retailers', 'Headless Commerce Platforms'],
    problemsSolved: ['Duplicate content penalties from Shopify tag and collection URLs', 'Low organic rankings on competitive commercial category terms', 'Missing rich snippet stars and price availability in Google search results'],
    deliverables: ['Shopify technical architecture & faceted navigation audit', 'Custom automated Product, AggregateRating & ItemList JSON-LD schema', 'Category & collection page content authority blueprints', 'Internal linking optimization for high-margin SKU clusters'],
    technologies: ['Shopify Plus', 'Google Search Console API', 'Ahrefs API', 'Screaming Frog', 'Next.js Hydrogen', 'Schema.org'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing Monthly Growth Retainer',
    process: [
      { step: 1, title: 'Faceted Navigation & URL Audit', description: 'Eliminating duplicate parameter URLs and fixing canonical tags.' },
      { step: 2, title: 'Commercial Collection Keyword Mapping', description: 'Clustering high-intent category search terms with low difficulty.' },
      { step: 3, title: 'Product Rich Snippet Schema', description: 'Embedding verified pricing, stock status, and review schema.' },
      { step: 4, title: 'Internal PageRank Re-architecting', description: 'Funneling link equity to top-selling and high-margin products.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['headless-ecommerce-and-shopify-plus', 'technical-seo', 'amazon-and-marketplace-marketing'],
    faqs: [
      { question: 'How do you solve Shopify’s default duplicate collection URL issue?', answer: 'We modify the theme Liquid templates to ensure all internal product links point directly to the canonical `/products/handle` rather than `/collections/collection-name/products/handle`, instantly consolidating backlink equity.' }
    ]
  },
  {
    id: 'srv_38',
    slug: 'conversion-rate-optimization-cro',
    name: 'Conversion Rate Optimization (CRO) & UX Audits',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Increase revenue per visitor with quantitative A/B testing, session recording analysis, and friction reduction.',
    directAnswer: 'Explode Labs increases e-commerce and SaaS conversion rates through data-driven user research, session recording analysis, heatmap diagnostics, and high-velocity statistical A/B testing.',
    definition: 'Systematic conversion optimization applying behavioral psychology, statistical hypothesis testing (p < 0.05), mobile checkout streamlining, and checkout funnel friction elimination.',
    targetAudience: ['High-traffic D2C Brands seeking higher ROAS', 'B2B SaaS companies optimizing demo request funnels', 'Lead generation portals with high drop-off rates'],
    problemsSolved: ['High ad spend with declining website conversion rates', 'Checkout abandonment on mobile devices', 'Ambiguous user drop-off points in signup funnels'],
    deliverables: ['Comprehensive quantitative and qualitative CRO audit', 'Interactive A/B test wireframes and production code variants', 'Heatmap and session recording diagnostic analysis', 'Statistical significance reports with projected annual revenue impact'],
    technologies: ['PostHog', 'Microsoft Clarity', 'VWO', 'Google Optimize alternatives', 'Figma', 'Next.js'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: 'Ongoing 60-day A/B testing cycles',
    process: [
      { step: 1, title: 'Funnel Telemetry & Heatmap Audit', description: 'Identifying micro-dropoffs across cart, checkout, and pricing tiers.' },
      { step: 2, title: 'Hypothesis & Wireframe Sprints', description: 'Designing test variants that eliminate cognitive friction and clarify value.' },
      { step: 3, title: 'A/B Test Deployment', description: 'Deploying statistically sound tests without page flicker or layout shift.' },
      { step: 4, title: 'Winner Rollout & Iteration', description: 'Merging winning variants into production and launching the next experiment.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce', 'hyperscale-b2b-saas'],
    relatedServiceSlugs: ['ui-ux-design-systems', 'paid-performance-sem', 'react-nextjs-development'],
    faqs: [
      { question: 'What minimum traffic volume is needed for statistical A/B testing?', answer: 'For reliable statistical significance (95% confidence), we recommend at least 25,000 monthly unique visitors or 500+ monthly conversions per tested funnel.' }
    ]
  },
  {
    id: 'srv_39',
    slug: 'online-reputation-management-and-reviews',
    name: 'Online Reputation Management & Review Acceleration',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Protect brand search results, suppress negative URLs, and accelerate positive customer reviews.',
    directAnswer: 'Explode Labs protects corporate brand equity by suppressing negative search results, generating high-velocity authentic customer reviews on Google/Trustpilot/G2, and defending executive reputations.',
    definition: 'Strategic reputation engineering combining search result sentiment shaping, automated review capture funnels, brand entity defense, and legal removal request preparation.',
    targetAudience: ['Enterprises facing negative press or review attacks', 'High-ticket B2B service firms where trust determines close rates', 'Franchise networks managing regional review profiles'],
    problemsSolved: ['Negative or defamatory search results on page one of Google', 'Low star ratings hurting ad conversion and local map pack rank', 'Lack of automated customer feedback collection'],
    deliverables: ['Brand SERP sentiment audit and suppression action plan', 'Automated review capture webhook integration (SMS & Email)', 'Positive brand asset creation (interviews, profiles, wikis)', 'Monthly Google Business Profile & Trustpilot reputation tracking'],
    technologies: ['Brand24', 'BrightLocal', 'Trustpilot API', 'G2 Crowd API', 'Google Search Console'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer / Crisis Sprint' },
    typicalTimeline: 'Ongoing 3 to 6-month campaigns',
    process: [
      { step: 1, title: 'Brand SERP Vulnerability Audit', description: 'Mapping all page-one and page-two search results for corporate brand queries.' },
      { step: 2, title: 'Review Velocity Funnel Setup', description: 'Connecting POS/CRM webhooks to trigger post-transaction review requests.' },
      { step: 3, title: 'High-Authority Asset Seeding', description: 'Publishing optimized corporate profiles, executive bios, and podcast interviews.' },
      { step: 4, title: 'Suppression & Positive Displacement', description: 'Pushing negative third-party links off page one with high-authority brand properties.' }
    ],
    caseStudySlugs: ['novus-fintech-portal'],
    relatedServiceSlugs: ['digital-pr-reputation', 'local-and-franchise-seo'],
    faqs: [
      { question: 'Can you completely remove negative Google search results?', answer: 'If a negative result violates Google policies or contains defamatory statements, we submit formal de-indexing requests. For standard negative press, our proven approach is suppression—ranking 10+ positive, authoritative brand assets above it.' }
    ]
  },
  {
    id: 'srv_40',
    slug: 'social-media-advertising',
    name: 'Paid Social Media Advertising (Meta, LinkedIn, TikTok)',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'High-ROAS paid acquisition across Meta (Instagram/Facebook), LinkedIn, TikTok, and YouTube.',
    directAnswer: 'Explode Labs builds and scales profitable paid social advertising campaigns, combining first-party Conversion API (CAPI) server tracking, rapid creative testing, and precision audience targeting.',
    definition: 'End-to-end paid social media management encompassing creative hook production, algorithmic budget allocation, lookalike audience modeling, and server-side tracking infrastructure.',
    targetAudience: ['Scaling D2C E-commerce Brands ($50k–$500k+/mo ad spend)', 'B2B SaaS companies targeting VP/C-level decision-makers on LinkedIn', 'High-growth mobile apps driving installs'],
    problemsSolved: ['Rising CAC and deteriorating ROAS following iOS tracking restrictions', 'Ad creative fatigue causing weekly performance drops', 'Wasted ad budget on unqualified social clicks'],
    deliverables: ['Full campaign architecture across Meta, LinkedIn & TikTok', 'Server-Side Conversion API (CAPI) implementation via Stape.io', 'High-velocity creative testing pipeline (5–10 new video hooks/week)', 'Custom multi-touch attribution and blended ROAS dashboard'],
    technologies: ['Meta Ads Manager', 'LinkedIn Campaign Manager', 'TikTok Ads', 'Stape.io CAPI', 'Triple Whale', 'Looker Studio'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer + Performance' },
    typicalTimeline: 'Ongoing Monthly Management',
    process: [
      { step: 1, title: 'Tracking & CAPI Infrastructure', description: 'Configuring server-side tracking to recover 100% of conversion data.' },
      { step: 2, title: 'Audience & Account Architecture', description: 'Setting up broad targeting, dynamic creative, and retargeting pools.' },
      { step: 3, title: 'Creative Hook Testing Engine', description: 'Deploying weekly variations of UGC, 3D renders, and motion graphics.' },
      { step: 4, title: 'Scale & Value-Based Bidding', description: 'Scaling winning ad sets with algorithmic cost-cap and bid-cap rules.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce', 'hyperscale-b2b-saas'],
    relatedServiceSlugs: ['paid-performance-sem', 'video-production-editing', 'ui-ux-design-systems'],
    faqs: [
      { question: 'Why is Server-Side Conversion API (CAPI) mandatory for paid social?', answer: 'Browser-based pixel tracking loses 20%–40% of conversion signals due to ad blockers and privacy protections. CAPI sends conversion events directly from the server, providing accurate data that trains ad algorithms to find cheaper buyers.' }
    ]
  },
  {
    id: 'srv_41',
    slug: 'programmatic-and-connected-tv-advertising',
    name: 'Programmatic & Connected TV (CTV / OTT) Advertising',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Enterprise programmatic display, geofencing, and non-skippable Connected TV advertising.',
    directAnswer: 'Explode Labs executes programmatic media buying across premium Connected TV (Hulu, Roku, Prime Video), geofenced location boundaries, and private display marketplaces (PMP).',
    definition: 'Automated digital media acquisition leveraging Demand-Side Platforms (DSPs), real-time bidding (RTB), physical location geofencing, and household IP cross-device matching.',
    targetAudience: ['National brands seeking TV-level reach with digital precision', 'Franchise and multi-location businesses needing geofenced foot traffic', 'B2B enterprises running account-based IP targeting'],
    problemsSolved: ['High minimum entry costs of traditional linear TV advertising', 'Inability to track whether TV and display ads drive website visits or store visits', 'Low CTR on commoditized Google Display Network ads'],
    deliverables: ['Connected TV (CTV/OTT) campaign setup across top streaming networks', 'Geofencing coordinate mapping around competitor locations and events', 'Cross-device retargeting matching CTV viewers to mobile/desktop ads', 'Foot-traffic attribution and brand lift reporting'],
    technologies: ['The Trade Desk', 'Amazon DSP', 'StackAdapt', 'Basis Technologies', 'LiveRamp'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Media Spend + Management' },
    typicalTimeline: 'Ongoing Monthly Campaigns',
    process: [
      { step: 1, title: 'Audience & Geo-Boundary Definition', description: 'Mapping target household demographics and GPS polygon coordinates.' },
      { step: 2, title: 'Creative Asset Formatting', description: 'Formatting 15s/30s HD video commercials for TV aspect ratios.' },
      { step: 3, title: 'Programmatic DSP Bidding', description: 'Deploying real-time bids with strict fraud and viewability filters.' },
      { step: 4, title: 'Cross-Device Attribution', description: 'Measuring household lift, website conversions, and physical visits.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['paid-performance-sem', 'video-production-editing'],
    faqs: [
      { question: 'What is the difference between OTT and Connected TV (CTV)?', answer: 'OTT (Over-The-Top) refers to streaming content delivered over the internet across any device (phone, tablet, laptop). CTV (Connected TV) refers specifically to televisions connected to the internet (Smart TVs, Apple TV, Roku), delivering immersive living-room viewing experiences with 95%+ completion rates.' }
    ]
  },
  {
    id: 'srv_42',
    slug: 'account-based-marketing-abm',
    name: 'Account-Based Marketing (ABM) & B2B Paid Funnels',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'Precision IP and title-targeted advertising to close 6-figure and 7-figure enterprise accounts.',
    directAnswer: 'Explode Labs builds hyper-targeted Account-Based Marketing (ABM) programs, coordinating IP-targeted display, personalized LinkedIn ads, CRM retargeting, and outbound sales outreach.',
    definition: 'Strategic B2B marketing focusing on high-value named accounts, delivering customized messaging across ad channels, personalized landing pages, and aligned SDR outreach.',
    targetAudience: ['Enterprise B2B SaaS with ACVs > $25,000', 'IT Consulting and Professional Services firms', 'Industrial B2B manufacturers'],
    problemsSolved: ['Wasting ad budget on low-level employees who lack buying power', 'Long, stagnant enterprise sales cycles with silent buying committees', 'Lack of alignment between marketing campaigns and sales team outreach'],
    deliverables: ['Named target account tiering list (Tier 1, 2, 3)', 'IP-targeted programmatic ad campaigns displayed only to target companies', 'Personalized dynamic landing pages tailored to specific target accounts', 'Direct CRM and Slack notification triggers when target accounts visit site'],
    technologies: ['Demandbase', '6sense', 'LinkedIn Campaign Manager', 'RollWorks', 'Clay.com', 'HubSpot'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer' },
    typicalTimeline: 'Ongoing Quarterly Enterprise Sprints',
    process: [
      { step: 1, title: 'Account Tiering & Intent Signal Mapping', description: 'Identifying accounts demonstrating active surge intent data.' },
      { step: 2, title: 'Multi-Channel Air Cover Deployment', description: 'Surrounding the buying committee with targeted ads on LinkedIn and business press.' },
      { step: 3, title: 'Personalized Landing Funnels', description: 'Delivering dynamic company-branded landing pages for key accounts.' },
      { step: 4, title: 'Sales SDR Handoff', description: 'Triggering SDR outreach precisely when target accounts engage with ad media.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas'],
    relatedServiceSlugs: ['b2b-lead-generation-sdr', 'paid-performance-sem'],
    faqs: [
      { question: 'How do you target specific companies on ad networks without huge minimum budgets?', answer: 'We combine LinkedIn Matched Audiences with company domain lists and first-party IP intelligence via 6sense/Demandbase, allowing hyper-focused ad spend strictly on the 100–500 companies in your ICP.' }
    ]
  },
  {
    id: 'srv_43',
    slug: 'influencer-and-creator-marketing',
    name: 'Influencer & Performance Creator Marketing',
    pillar: 'grow',
    category: '5. Digital Marketing',
    tagline: 'High-converting creator partnerships, performance whitelisting, and viral UGC content.',
    directAnswer: 'Explode Labs manages full-lifecycle influencer and creator marketing campaigns, combining authentic creator sourcing, performance whitelisting (Spark Ads/Partnership Ads), and high-converting UGC production.',
    definition: 'Performance-driven influencer marketing focusing on verified audience demographics, contracted creative rights, paid ad amplification, and direct conversion tracking.',
    targetAudience: ['D2C Consumer Brands ($1M–$30M+ ARR)', 'Consumer Apps driving downloads and trials', 'Modern Lifestyle & Hardware Startups'],
    problemsSolved: ['Overpaying influencers for vanity impressions with zero trackable sales', 'Lack of commercial usage rights to repurpose creator content in paid ads', 'High manual overhead negotiating rates and shipping products to creators'],
    deliverables: ['Curated roster of 20–50+ vetted niche creators with verified engagement', 'End-to-end contract negotiation with full 12-month paid whitelisting rights', 'Creator-generated video assets formatted for TikTok, Reels, and Meta ads', 'Affiliate tracking, discount code attribution, and blended ROAS dashboard'],
    technologies: ['Grin', 'Mavely', 'Meta Partnership Ads', 'TikTok Spark Ads', 'Triple Whale'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Retainer + Creator Budgets' },
    typicalTimeline: 'Ongoing Monthly Creator Sprints',
    process: [
      { step: 1, title: 'Creator Discovery & Fraud Vetting', description: 'Auditing follower authenticity, audience demographics, and past engagement rates.' },
      { step: 2, title: 'Briefing & Contract Management', description: 'Structuring creative guidelines and securing paid ad whitelisting permissions.' },
      { step: 3, title: 'Asset Review & Organic Rollout', description: 'Quality checking video hook delivery and coordinating synchronized posting dates.' },
      { step: 4, title: 'Paid Whitelisting & Scaling', description: 'Running top-performing creator posts as Meta Partnership Ads to scale ROAS.' }
    ],
    caseStudySlugs: ['kicksvault-ecommerce'],
    relatedServiceSlugs: ['social-media-advertising', 'video-production-editing'],
    faqs: [
      { question: 'What is creator performance whitelisting (Partnership Ads)?', answer: 'Whitelisting allows our media buyers to run paid ads directly from the creator’s authentic social handle, unlocking granular audience targeting, custom CTA buttons, and direct pixel tracking while preserving social proof.' }
    ]
  },
  {
    id: 'srv_44',
    slug: 'drone-and-commercial-media-production',
    name: 'Drone Video & Commercial Location Media Production',
    pillar: 'create',
    category: '4. Video & Motion Services',
    tagline: 'FAA Part 107 certified 4K/6K aerial drone video, architectural photography, and on-location filming.',
    directAnswer: 'Explode Labs produces cinematic 4K/6K aerial drone video and professional on-location commercial media for real estate developments, industrial facilities, and corporate brand headquarters.',
    definition: 'Commercial aerial cinematography and on-site media production adhering to FAA Part 107 regulations, delivering ProRes footage, 360-degree interactive aerial panoramas, and edited commercial assets.',
    targetAudience: ['Commercial Real Estate Developers & Architectural Firms', 'Industrial, Logistics, and Manufacturing Enterprises', 'Luxury Hospitality & Destination Brands'],
    problemsSolved: ['Inability of standard ground cameras to capture scale of large facilities', 'Illegal uncertified drone pilots risking FAA fines and insurance liability', 'Shaky, low-resolution drone footage that looks amateurish'],
    deliverables: ['FAA Part 107 certified flight planning, airspace authorizations, and flight execution', 'Apple ProRes 422 HQ 4K/6K uncompressed master aerial footage', 'Color-graded commercial video showcases with kinetic typography callouts', 'High-resolution HDR architectural still photography packages'],
    technologies: ['DJI Inspire 3 (8K CinemaDNG)', 'DJI Mavic 3 Pro Cine (ProRes)', 'DaVinci Resolve Studio', 'AirMap / LAANC'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Shoot Day' },
    typicalTimeline: '1 to 2 weeks from shoot to final graded masters',
    process: [
      { step: 1, title: 'Flight Planning & Airspace Clearance', description: 'Securing FAA LAANC authorization and mapping camera paths.' },
      { step: 2, title: 'On-Location Multi-Pass Filming', description: 'Executing cinematic orbital, tracking, and reveal flight maneuvers in 4K/6K ProRes.' },
      { step: 3, title: 'Post-Production & Color Grading', description: 'ACES color grading in DaVinci Resolve with horizon stabilization.' },
      { step: 4, title: 'Multi-Format Export', description: 'Delivering full-length cinematic edits, social cutdowns, and raw B-roll archives.' }
    ],
    caseStudySlugs: ['omniflow-logistics'],
    relatedServiceSlugs: ['video-production-editing', '3d-design-visualization'],
    faqs: [
      { question: 'Are your drone pilots fully licensed and insured?', answer: 'Yes, all Explode Labs aerial cinematographers hold valid FAA Part 107 Remote Pilot Certifications and carry comprehensive commercial aviation liability insurance policies.' }
    ]
  },
  {
    id: 'srv_45',
    slug: 'vector-search-and-rag-architecture',
    name: 'Vector Search & Enterprise RAG Architecture',
    pillar: 'build',
    category: '2. AI & Machine Learning',
    tagline: 'Sub-second hybrid vector search, pgvector/Qdrant clusters, and zero-hallucination RAG pipelines.',
    directAnswer: 'Explode Labs architects enterprise-grade Retrieval-Augmented Generation (RAG) knowledge systems, combining dense vector embeddings, BM25 lexical search, rerankers, and secure document indexing.',
    definition: 'Deep search engineering deploying hybrid vector databases (pgvector, Qdrant, Pinecone) with chunking strategies, cross-encoder reranking, and deterministic citation guardrails for enterprise documents.',
    targetAudience: ['Enterprises indexing millions of internal PDF/Word documents', 'B2B SaaS platforms embedding intelligent search and AI Q&A', 'Healthcare & Legal compliance teams requiring 100% verifiable source citations'],
    problemsSolved: ['LLM hallucinations when answering proprietary business questions', 'Slow vector query latency on large document repositories (>100k chunks)', 'Naive RAG systems retrieving irrelevant or outdated chunks'],
    deliverables: ['Production hybrid search index combining dense vector and lexical BM25 search', 'Automated document ingestion and chunking pipeline with metadata tagging', 'Cross-encoder neural reranking layer for precision context filtering', 'Enterprise evaluation suite benchmarking precision, recall, and citation fidelity'],
    technologies: ['pgvector (PostgreSQL)', 'Qdrant', 'FastAPI', 'Cohere Rerank', 'LangChain', 'LlamaIndex', 'OpenAI / Gemini Embeddings'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '4 to 8 weeks',
    process: [
      { step: 1, title: 'Document Chunking Strategy', description: 'Designing hierarchical, semantic chunking based on document structure.' },
      { step: 2, title: 'Vector Database Provisioning', description: 'Deploying pgvector or Qdrant cluster with HNSW index tuning.' },
      { step: 3, title: 'Hybrid Retrieval & Reranker', description: 'Combining vector similarity, lexical keywords, and neural reranking.' },
      { step: 4, title: 'Citation Guardrails & Production API', description: 'Validating response citations and deploying streaming REST endpoints.' }
    ],
    caseStudySlugs: ['lumina-ai-agent-suite', 'apex-health-crm'],
    relatedServiceSlugs: ['generative-ai-agents', 'cloud-devops-infrastructure'],
    faqs: [
      { question: 'Why is hybrid search (Dense Vector + BM25 Lexical) superior to pure vector search?', answer: 'Pure vector search struggles with exact acronyms, serial numbers, and specific proper names. Hybrid search combines semantic understanding with exact-match keyword indexing and a neural reranker, delivering 98%+ retrieval accuracy.' }
    ]
  },
  {
    id: 'srv_46',
    slug: 'web-scraping-and-data-pipelines',
    name: 'Enterprise Web Scraping & Automated Data Pipelines',
    pillar: 'automate',
    category: '6. Infrastructure & Data',
    tagline: 'Distributed headless browser crawlers, proxy rotation, and automated lead enrichment pipelines.',
    directAnswer: 'Explode Labs builds resilient, high-volume web scraping engines and automated data pipelines using Playwright, Puppeteer, and distributed proxy clusters to extract clean data at scale.',
    definition: 'Automated data extraction engineering solving Cloudflare/Datadome bot mitigation, fingerprint randomization, DOM parsing, schema normalization, and automated database sync.',
    targetAudience: ['Market intelligence and competitor price monitoring platforms', 'B2B sales teams building proprietary lead and contact databases', 'Real estate and e-commerce aggregators requiring real-time inventory feeds'],
    problemsSolved: ['Scrapers getting blocked by Cloudflare, Akamai, or CAPTCHA challenges', 'Broken crawlers every time target websites change HTML layouts', 'Slow, single-threaded scraping scripts unable to process millions of URLs'],
    deliverables: ['Distributed headless browser scraping cluster on AWS/Docker', 'Automated residential proxy rotation and browser fingerprint randomization', 'Clean JSON/PostgreSQL database sync with schema validation', 'Automated health monitors alerting on DOM layout changes and extraction failures'],
    technologies: ['Playwright', 'Puppeteer', 'Python (Scrapy / BeautifulSoup)', 'Bright Data / Oxylabs', 'PostgreSQL', 'Docker'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone / Retainer' },
    typicalTimeline: '2 to 6 weeks',
    process: [
      { step: 1, title: 'Bot Mitigation Threat Modeling', description: 'Analyzing Cloudflare/Datadome protections and TLS fingerprinting.' },
      { step: 2, title: 'Distributed Crawler Architecture', description: 'Building multi-worker queue workers with automated retries and backoff.' },
      { step: 3, title: 'Data Cleaning & Normalization', description: 'Sanitizing HTML, validating data types, and deduplicating records.' },
      { step: 4, title: 'Automated Sync & Monitoring', description: 'Connecting extraction feeds directly into client databases with error alerts.' }
    ],
    caseStudySlugs: ['omniflow-logistics'],
    relatedServiceSlugs: ['data-engineering-analytics', 'ai-workflow-automation'],
    faqs: [
      { question: 'How do your scrapers bypass advanced Cloudflare and CAPTCHA protections?', answer: 'We use real browser fingerprint emulation (stealth Playwright), TLS handshake masking, residential proxy IP pools, and automated human-like interaction timing to guarantee unblocked extraction.' }
    ]
  },
  {
    id: 'srv_47',
    slug: 'legacy-system-migration-and-refactoring',
    name: 'Legacy System Migration & Monolith Modernization',
    pillar: 'build',
    category: '1. Software & Web Development',
    tagline: 'Modernize bloated WordPress, Drupal, or legacy monoliths to edge-rendered Next.js.',
    directAnswer: 'Explode Labs modernizes brittle legacy web applications and CMS monoliths into sub-second, edge-rendered Next.js architectures with zero downtime and 100% SEO preservation.',
    definition: 'Full-cycle software modernization covering database migrations, 301 redirect map generation, API middleware bridges, Strangler Fig pattern transitions, and Core Web Vitals optimization.',
    targetAudience: ['Enterprises trapped on unmaintainable WordPress or PHP monoliths', 'E-commerce brands suffering slow page loads on legacy Magento', 'Companies modernizing frontend stacks before scale'],
    problemsSolved: ['Vulnerable, outdated CMS plugins causing security breaches and slow load times', 'Fear of losing organic search traffic and search rankings during website redesigns', 'Inability of legacy codebases to support modern interactive UI features'],
    deliverables: ['Modular Next.js 15 App Router architecture with Tailwind CSS', 'Automated 1-to-1 database and content migration scripts', '100% comprehensive 301 redirect matrix preserving all backlink equity', 'Sub-second page speeds with 95+ Google Lighthouse scores'],
    technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel Edge'],
    pricingRange: { min: 'Custom', avg: 'Custom Proposal', model: 'Milestone' },
    typicalTimeline: '6 to 12 weeks',
    process: [
      { step: 1, title: 'Codebase & Redirect Audit', description: 'Mapping all legacy endpoints, database schemas, and backlink equity.' },
      { step: 2, title: 'Next.js Target Architecture', description: 'Building the new modular component system and edge caching layer.' },
      { step: 3, title: 'Automated Data Migration', description: 'Extracting historical posts, users, and orders with schema validation.' },
      { step: 4, title: 'Zero-Downtime Cutover', description: 'Executing DNS cutover with real-time log monitoring for 404 errors.' }
    ],
    caseStudySlugs: ['hyperscale-b2b-saas', 'novus-fintech-portal'],
    relatedServiceSlugs: ['react-nextjs-development', 'technical-seo', 'cloud-devops-infrastructure'],
    faqs: [
      { question: 'How do you guarantee that a migration will not hurt our existing Google search rankings?', answer: 'We crawl 100% of your legacy URLs, create an exact 1-to-1 301 redirect map, preserve all on-page metadata and schema, and stage the migration on preview environments before executing a monitored cutover.' }
    ]
  }
];

export const solutions: SolutionEntity[] = [
  {
    id: 'sol_1',
    slug: 'launch-a-b2b-saas',
    title: 'Launch a B2B SaaS from Scratch',
    tagline: 'The complete product, engineering, and go-to-market engine to take a software idea to paying ARR.',
    outcome: 'A production-ready, revenue-generating SaaS product with multi-tenancy, Stripe billing, and a qualified inbound lead pipeline.',
    idealFor: 'Founders with domain expertise, funded startups, or service companies productizing their workflows.',
    problems: [
      'Struggling to hire and coordinate separate designers, frontend coders, backend devs, and marketers',
      'Spending 9+ months building features without validating commercial demand',
      'Launching to cricket sounds with zero acquisition channels ready on Day 1'
    ],
    bundledServiceSlugs: ['saas-mvp-development', 'ui-ux-design-systems', 'technical-seo', 'b2b-lead-generation-sdr'],
    deliverables: [
      'Multi-tenant Next.js & Postgres SaaS web application with Stripe billing',
      'Pixel-perfect Figma design system and high-conversion marketing website',
      'Foundational B2B SEO architecture targeting bottom-of-funnel search intent',
      'Cold outbound email engine with warmed domains booking qualified demo calls'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Smartlead', 'HubSpot'],
    pricingRange: 'Custom Proposal',
    timeline: '8 to 14 weeks',
    caseStudySlug: 'hyperscale-b2b-saas',
    framework: [
      { phase: 'Phase 1: Architecture & UI/UX (Weeks 1-3)', duration: '3 weeks', summary: 'Product scoping, interactive wireframes, and database schema mapping.' },
      { phase: 'Phase 2: MVP Engineering & Auth (Weeks 4-8)', duration: '5 weeks', summary: 'Full-stack development, Stripe checkout, and user onboarding flows.' },
      { phase: 'Phase 3: GTM & Outbound Infrastructure (Weeks 9-11)', duration: '3 weeks', summary: 'Landing page launch, cold email warmup, and SEO schema setup.' },
      { phase: 'Phase 4: Launch & Scaling (Weeks 12-14)', duration: '3 weeks', summary: 'Production release, user analytics tracking, and outbound campaign launch.' }
    ]
  },
  {
    id: 'sol_2',
    slug: 'build-an-ai-product',
    title: 'Build & Deploy an Enterprise AI Product',
    tagline: 'Transform proprietary data and workflows into intelligent, autonomous AI applications.',
    outcome: 'A secure, production-grade AI platform with RAG pipelines, autonomous agents, and enterprise guardrails.',
    idealFor: 'Enterprises modernizing knowledge operations or startups launching AI-native tools.',
    problems: [
      'Off-the-shelf chatbots lacking domain-specific accuracy and hallucinating',
      'Strict corporate data privacy rules preventing standard open API usage',
      'High inference latency and unpredictable token costs'
    ],
    bundledServiceSlugs: ['generative-ai-agents', 'react-nextjs-development', 'cloud-devops-infrastructure'],
    deliverables: [
      'Custom hybrid RAG architecture with pgvector / Pinecone search index',
      'Fast modern web application with streaming token responses and tool-calling UI',
      'Deterministic evaluation suite ensuring zero unauthorized data leaks',
      'Scalable containerized cloud infrastructure on AWS/GCP with cost caching'
    ],
    technologies: ['Claude 3.5', 'Gemini 1.5 Pro', 'Next.js', 'Python', 'pgvector', 'Docker'],
    pricingRange: 'Custom Proposal',
    timeline: '6 to 10 weeks',
    caseStudySlug: 'lumina-ai-agent-suite',
    framework: [
      { phase: 'Phase 1: Data Audit & Embedding Strategy', duration: '2 weeks', summary: 'Document ingestion, chunking benchmarks, and vector schema setup.' },
      { phase: 'Phase 2: Agent Tooling & API Orchestration', duration: '3 weeks', summary: 'Prompt engineering, memory management, and external API connectors.' },
      { phase: 'Phase 3: Frontend Interface & Guardrails', duration: '3 weeks', summary: 'Next.js streaming UI, citation inspection, and permission controls.' },
      { phase: 'Phase 4: Production Hardening & Monitoring', duration: '2 weeks', summary: 'Latency optimization, token cost controls, and SOC2 compliance validation.' }
    ]
  },
  {
    id: 'sol_3',
    slug: 'launch-an-ecommerce-brand',
    title: 'Scale E-commerce to 8-Figure Revenue',
    tagline: 'High-speed custom Shopify storefronts paired with paid customer acquisition.',
    outcome: 'A lightning-fast, high-converting e-commerce engine with sub-2s load times, higher AOV, and scalable ad channels.',
    idealFor: 'D2C brands scaling from $1M to $10M+ ARR or traditional retailers going direct-to-consumer.',
    problems: [
      'High bounce rates on mobile due to bloated templates and slow page speed',
      'Rising customer acquisition costs (CAC) making paid ads unprofitable',
      'Low repeat purchase rates and abandoned checkout leakage'
    ],
    bundledServiceSlugs: ['ecommerce-shopify-growth', 'paid-performance-sem', 'ui-ux-design-systems', 'video-production-editing'],
    deliverables: [
      'Custom Shopify Plus 2.0 theme built for sub-second mobile navigation',
      'Custom checkout upsells and post-purchase one-click cross-sells',
      'Full-funnel Meta & Google Ads performance campaigns with CAPI server-side tracking',
      'High-converting video ad packages and Klaviyo automated lifecycle email flows'
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Meta Ads', 'Google Ads', 'Klaviyo', 'Triple Whale'],
    pricingRange: 'Custom Proposal',
    timeline: '6 to 10 weeks',
    caseStudySlug: 'kicksvault-ecommerce',
    framework: [
      { phase: 'Phase 1: Funnel & Architecture Planning', duration: '2 weeks', summary: 'AOV enhancement blueprint and mobile UX wireframing.' },
      { phase: 'Phase 2: Custom Shopify Engineering', duration: '4 weeks', summary: 'Fast Liquid coding, app integrations, and checkout extensions.' },
      { phase: 'Phase 3: Ad Creative & Tracking Pipeline', duration: '2 weeks', summary: 'Server-side CAPI setup, high-ROAS creative testing, and campaign launch.' },
      { phase: 'Phase 4: Launch & Continuous Optimization', duration: '2 weeks', summary: 'Live store cutover, A/B checkout testing, and scale.' }
    ]
  },
  {
    id: 'sol_4',
    slug: 'scale-b2b-lead-engine',
    title: 'B2B Revenue & Pipeline Acceleration',
    tagline: 'Unite Technical SEO, Paid SEM, and Outbound SDR engines to dominate your market.',
    outcome: 'A predictable, multichannel B2B customer acquisition pipeline that generates 30-80+ qualified sales meetings monthly.',
    idealFor: 'B2B companies with customer LTV > $10,000 needing predictable pipeline growth.',
    problems: [
      'Reliance on word-of-mouth leading to feast-or-famine revenue cycles',
      'Disjointed marketing agencies operating in silos without pipeline accountability',
      'Low search engine authority allowing weaker competitors to rank higher'
    ],
    bundledServiceSlugs: ['technical-seo', 'b2b-lead-generation-sdr', 'paid-performance-sem', 'content-strategy-copywriting'],
    deliverables: [
      'Entity-based SEO overhaul capturing bottom-of-funnel commercial keywords',
      'Targeted LinkedIn and Google Ads campaigns targeting in-market buyers',
      'Automated multi-domain outbound email engine booking calls directly on your sales team calendars',
      'Unified HubSpot attribution dashboard connecting every dollar to pipeline'
    ],
    technologies: ['Google Ads', 'LinkedIn Ads', 'Smartlead', 'Clay', 'HubSpot', 'BigQuery'],
    pricingRange: 'Custom Proposal',
    timeline: '90-day sprint with ongoing monthly optimization',
    caseStudySlug: 'hyperscale-b2b-saas',
    framework: [
      { phase: 'Month 1: Foundation & Infrastructure', duration: '4 weeks', summary: 'Domain warmup, tracking attribution, and high-intent keyword mapping.' },
      { phase: 'Month 2: Channel Activation & Outbound Sprints', duration: '4 weeks', summary: 'Launching outbound sequences and high-ROAS paid search campaigns.' },
      { phase: 'Month 3: Conversion Optimization & Scale', duration: '4 weeks', summary: 'Landing page A/B testing and compounding organic rank growth.' }
    ]
  }
];

export const industries: IndustryEntity[] = [
  {
    id: 'ind_1',
    slug: 'b2b-saas',
    name: 'B2B SaaS & Enterprise Software',
    tagline: 'Engineering and growth systems built for recurring revenue, high LTV, and enterprise sales cycles.',
    overview: 'In B2B SaaS, product speed, security, and customer acquisition efficiency determine valuation. We build performant web platforms and high-intent acquisition funnels specifically tailored to shorten enterprise sales cycles and lower CAC.',
    complianceAndRegulations: ['SOC 2 Type II compliance readiness', 'GDPR & CCPA data privacy architecture', 'Single Sign-On (SSO / SAML) protocols'],
    keyChallenges: [
      'High customer acquisition costs (CAC) eating up venture capital runway',
      'Complex technical onboarding leading to high Day-30 churn',
      'Difficulty ranking against established review aggregators like G2 and Capterra'
    ],
    tailoredSolutions: [
      'Bottom-of-funnel comparison and alternative pages capturing active software evaluators',
      'Multi-tenant Next.js application development with instant product activation',
      'Automated cold outbound pipelines targeting specific tech stack adopters via Clay'
    ],
    recommendedServiceSlugs: ['saas-mvp-development', 'react-nextjs-development', 'technical-seo', 'b2b-lead-generation-sdr'],
    caseStudySlugs: ['hyperscale-b2b-saas'],
    benchmarkMetrics: [
      { label: 'Avg CAC Reduction', value: '38%', context: 'Across our B2B SaaS client cohort' },
      { label: 'Time-to-MVP', value: '60 Days', context: 'From wireframes to production release' },
      { label: 'Organic Demo Growth', value: '+340%', context: 'Within 6 months of BOFU SEO execution' }
    ]
  },
  {
    id: 'ind_2',
    slug: 'healthcare-telehealth',
    name: 'Healthcare & HealthTech',
    tagline: 'HIPAA-compliant digital patient portals, telemedicine apps, and medical practice growth.',
    overview: 'Healthcare platforms require rigorous data privacy, accessible user interfaces for all demographics, and frictionless patient appointment scheduling. We architect secure, compliant digital experiences for healthcare innovators.',
    complianceAndRegulations: ['HIPAA / HITECH data protection rules', 'PHI encryption in transit and at rest', 'WCAG 2.2 AA accessibility standards for patients'],
    keyChallenges: [
      'Strict regulatory penalties for accidental patient data exposure',
      'Legacy Electronic Health Record (EHR/EMR) systems with outdated APIs',
      'Complex patient onboarding flows causing high appointment abandonment'
    ],
    tailoredSolutions: [
      'End-to-end encrypted React Native and web patient portals with HL7/FHIR connectors',
      'Local and technical medical SEO establishing local search and medical authority',
      'Frictionless telemedicine booking flows with automated SMS reminders'
    ],
    recommendedServiceSlugs: ['mobile-app-development', 'ui-ux-design-systems', 'cloud-devops-infrastructure', 'cybersecurity-compliance-audits'],
    caseStudySlugs: ['apex-health-crm'],
    benchmarkMetrics: [
      { label: 'Patient Booking Lift', value: '+185%', context: 'Through streamlined mobile UX' },
      { label: 'Compliance Audit Pass', value: '100%', context: 'Zero PHI leaks on HIPAA penetration tests' },
      { label: 'Lighthouse Score', value: '98/100', context: 'WCAG 2.2 AA accessibility compliant' }
    ]
  },
  {
    id: 'ind_3',
    slug: 'ecommerce-retail',
    name: 'E-commerce & High-Growth Retail',
    tagline: 'Lightning-fast digital storefronts engineered for high average order value and repeat purchases.',
    overview: 'Every 100ms delay in page load drops e-commerce conversions by 7%. We build custom Shopify Plus stores and performance marketing engines that maximize gross merchandise value (GMV).',
    complianceAndRegulations: ['PCI-DSS Level 1 payment compliance', 'Cookie consent & CCPA regulations', 'Sales tax automation (Avalara / Shopify Tax)'],
    keyChallenges: [
      'Sluggish mobile performance killing ad conversion rates',
      'Post-iOS tracking blind spots making ROAS attribution difficult',
      'High cart abandonment on multi-step checkout pages'
    ],
    tailoredSolutions: [
      'Headless and custom Liquid themes scoring 90+ on mobile performance tests',
      'Server-side CAPI tracking ensuring 99%+ attribution accuracy for Meta and Google Ads',
      'One-click checkout upsells and automated Klaviyo replenishment triggers'
    ],
    recommendedServiceSlugs: ['ecommerce-shopify-growth', 'paid-performance-sem', 'video-production-editing', 'ui-ux-design-systems'],
    caseStudySlugs: ['kicksvault-ecommerce'],
    benchmarkMetrics: [
      { label: 'Average ROAS Lift', value: '4.2x', context: 'Using server-side CAPI + high-intent search' },
      { label: 'Mobile Page Speed', value: '1.2s', context: 'Full interactive render on 4G networks' },
      { label: 'AOV Increase', value: '+24%', context: 'Through post-purchase checkout upsells' }
    ]
  },
  {
    id: 'ind_4',
    slug: 'fintech-financial-services',
    name: 'FinTech & Modern Financial Services',
    tagline: 'High-security financial dashboards, payment gateways, and banking portals.',
    overview: 'Financial platforms demand bulletproof security, instantaneous transaction processing, and trust-inducing editorial UX. We design and engineer modern FinTech software built for institutional credibility.',
    complianceAndRegulations: ['SOC 2 Type II & ISO 27001 standards', 'KYC / AML identity verification flows', 'PCI-DSS payment isolation'],
    keyChallenges: [
      'High user skepticism and drop-off during multi-step identity verification',
      'Strict latency requirements for real-time ledger balance updates',
      'Navigating complex financial marketing compliance rules'
    ],
    tailoredSolutions: [
      'Bank-grade Next.js web applications with Plaid, Stripe, and banking API integrations',
      'Editorial, high-trust UI design systems that elevate brand authority',
      'Automated reconciliation pipelines eliminating manual bookkeeping errors'
    ],
    recommendedServiceSlugs: ['react-nextjs-development', 'ui-ux-design-systems', 'cybersecurity-compliance-audits', 'blockchain-web3-development'],
    caseStudySlugs: ['novus-fintech-portal'],
    benchmarkMetrics: [
      { label: 'KYC Completion Rate', value: '94%', context: 'Through guided micro-interaction UX' },
      { label: 'API Response Time', value: '<80ms', context: 'Edge-cached financial data queries' },
      { label: 'Security Score', value: 'Zero CVEs', context: 'Verified via independent penetration testing' }
    ]
  }
];

export const caseStudies: CaseStudyEntity[] = [
  {
    id: 'cs_1',
    slug: 'hyperscale-b2b-saas',
    client: 'HyperScale Systems',
    industry: 'B2B SaaS',
    serviceSlugs: ['react-nextjs-development', 'saas-mvp-development', 'technical-seo', 'b2b-lead-generation-sdr'],
    title: 'Scaling an Enterprise SaaS from $0 to $3.2M ARR in 14 Months',
    tagline: 'Complete product rebuild on Next.js paired with a programmatic SEO engine and outbound SDR infrastructure.',
    heroMetric: { value: '$3.2M', label: 'Annual Recurring Revenue (ARR)' },
    secondaryMetrics: [
      { value: '+420%', label: 'Organic Inbound Demos' },
      { value: '1.1s', label: 'Dashboard Load Time' },
      { value: '68', label: 'Enterprise Accounts Closed' }
    ],
    challenge: 'HyperScale had built an early MVP with an outsourced agency that suffered from severe technical debt, 8-second dashboard load times, and zero organic search visibility.',
    strategy: 'Explode Labs executed a 6-week ground-up rewrite using Next.js 15 and PostgreSQL with Row-Level Security, followed by deploying an entity-based programmatic SEO architecture.',
    architectureDetails: [
      'Migrated legacy React SPA to Next.js App Router with Server Components, reducing client bundle size by 78%',
      'Designed a multi-tenant PostgreSQL schema with Row-Level Security (RLS) on Supabase',
      'Configured automated JSON-LD entity schema and deployed 45 bottom-of-funnel comparison pages',
      'Built a 20-domain outbound email engine in Smartlead enriched with real-time company funding data'
    ],
    execution: [
      'Weeks 1-3: Complete design system overhaul in Figma and state machine architecture',
      'Weeks 4-6: Full-stack Next.js build with zero-downtime data migration for 12,000 existing users',
      'Weeks 7-10: SEO entity cluster launch and cold outreach campaign activation',
      'Weeks 11-14: Conversion rate optimization on signup funnels increasing trial-to-paid conversion by 31%'
    ],
    deliverables: [
      'Enterprise Next.js Web Application & Admin Console',
      'Figma Design System with 120+ custom components',
      'Automated Outbound SDR Lead Pipeline',
      'Programmatic SEO Search Engine & Content Repository'
    ],
    technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Stripe Billing', 'Smartlead', 'HubSpot'],
    timeline: '14 weeks total engagement',
    testimonial: {
      quote: 'Explode Labs did not just build software; they engineered our entire revenue infrastructure. The product is lightning-fast, and our sales team now has a full calendar of qualified enterprise buyers every week.',
      author: 'David Vance',
      role: 'CEO & Co-founder',
      company: 'HyperScale Systems'
    }
  },
  {
    id: 'cs_2',
    slug: 'lumina-ai-agent-suite',
    client: 'Lumina Intelligence',
    industry: 'Enterprise AI',
    serviceSlugs: ['generative-ai-agents', 'react-nextjs-development', 'cloud-devops-infrastructure'],
    title: 'Deploying Autonomous Multi-Agent Workflows with Zero Hallucinations',
    tagline: 'Custom hybrid RAG architecture processing 2.4M enterprise documents with deterministic precision.',
    heroMetric: { value: '99.8%', label: 'Fact Verification Accuracy' },
    secondaryMetrics: [
      { value: '380ms', label: 'Average Retrieval Latency' },
      { value: '42,000 hrs', label: 'Annual Knowledge Labor Saved' },
      { value: '100%', label: 'SOC2 Compliance Pass' }
    ],
    challenge: 'Lumina needed to offer enterprise legal and financial clients an AI agent that could synthesize contracts and balance sheets without hallucinating figures.',
    strategy: 'We built a production-grade hybrid retrieval pipeline combining lexical keyword indexing with dense vector embeddings in pgvector, wrapped with an automated source-verification guardrail.',
    architectureDetails: [
      'Chunked and indexed 2.4 million enterprise PDFs into a hybrid BM25 + dense embedding vector store',
      'Implemented LangGraph autonomous state routing with automated source citation validation',
      'Built a dark-themed, ultra-responsive Next.js streaming interface with inline citation inspection',
      'Deployed containerized Python microservices on AWS ECS Fargate with Redis semantic caching'
    ],
    execution: [
      'Weeks 1-2: Embedding benchmark testing across Gemini 1.5, Claude 3.5, and proprietary models',
      'Weeks 3-4: Developing agent tool-calling logic and deterministic safety guardrails',
      'Weeks 5-6: Frontend streaming UI engineering and interactive document viewer',
      'Weeks 7-8: Stress testing with 500 concurrent legal queries and SOC2 penetration testing'
    ],
    deliverables: [
      'Hybrid RAG Autonomous Agent Architecture',
      'Streaming Next.js Web Workspace',
      'AWS ECS Production Infrastructure with IaC Terraform',
      'Comprehensive Evaluation Benchmark Suite'
    ],
    technologies: ['Claude 3.5 Sonnet', 'Python', 'pgvector', 'FastAPI', 'Next.js 15', 'AWS ECS', 'Terraform'],
    timeline: '8 weeks',
    testimonial: {
      quote: 'Explode Labs solved the hallucination barrier that had blocked our enterprise rollout for six months. Our clients now trust the AI with sensitive multi-million dollar compliance audits.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'Lumina Intelligence'
    }
  },
  {
    id: 'cs_3',
    slug: 'kicksvault-ecommerce',
    client: 'KicksVault',
    industry: 'E-commerce & Luxury Retail',
    serviceSlugs: ['ecommerce-shopify-growth', 'paid-performance-sem', 'video-production-editing', 'ui-ux-design-systems', '3d-design-visualization'],
    title: 'Custom Shopify Plus Storefront Driving $14M in GMV with 4.4x ROAS',
    tagline: 'Sub-second mobile commerce experience paired with high-precision Google & Meta acquisition and video creative.',
    heroMetric: { value: '$14.2M', label: 'Gross Merchandise Value (GMV)' },
    secondaryMetrics: [
      { value: '4.4x', label: 'Blended Paid ROAS' },
      { value: '+28%', label: 'Average Order Value (AOV)' },
      { value: '0.9s', label: 'Mobile Page Load Speed' }
    ],
    challenge: 'KicksVault was losing over 60% of mobile ad traffic due to a bloated Shopify theme loaded with 28 conflicting third-party apps.',
    strategy: 'Explode Labs designed a bespoke Shopify Plus 2.0 theme from scratch, produced cinematic video ad creatives, and implemented server-side CAPI tracking.',
    architectureDetails: [
      'Custom Shopify 2.0 architecture with zero jQuery or bulky UI libraries, scoring 96 on mobile Lighthouse',
      'Built custom one-click post-purchase checkout upsells via Shopify Checkout Extensibility',
      'Implemented server-side Google Tag Manager and Meta Conversion API (CAPI) on custom cloud containers',
      'Produced high-energy 9:16 short-form video ads testing hook variations'
    ],
    execution: [
      'Weeks 1-2: Mobile user journey mapping and AOV enhancement wireframing',
      'Weeks 3-5: Clean Liquid theme development and checkout extension setup',
      'Weeks 6-7: Server-side tracking deployment and Klaviyo lifecycle automation revamp',
      'Weeks 8-9: Cutover launch and scaling paid ad budget from $40k/mo to $180k/mo at 4.4x ROAS'
    ],
    deliverables: [
      'Custom Bespoke Shopify Plus Storefront',
      'Server-side CAPI Attribution Infrastructure',
      'High-converting Video & Static Ad Creative Suite',
      'Automated Klaviyo Lifecycle Flows'
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Meta Ads CAPI', 'Google Ads', 'Klaviyo', 'GTM Server-Side'],
    timeline: '9 weeks',
    testimonial: {
      quote: 'Our mobile conversion rate literally doubled the week we launched the new Explode Labs store. The site is blazing fast, and our paid ad efficiency has never been higher.',
      author: 'Marcus Chen',
      role: 'Head of Growth',
      company: 'KicksVault'
    }
  },
  {
    id: 'cs_4',
    slug: 'apex-health-crm',
    client: 'Apex Health Systems',
    industry: 'Healthcare & Telehealth',
    serviceSlugs: ['mobile-app-development', 'ui-ux-design-systems', 'cloud-devops-infrastructure', 'cybersecurity-compliance-audits'],
    title: 'HIPAA-Compliant Patient Portal & Mobile App for 140,000 Active Patients',
    tagline: 'End-to-end encrypted telehealth and scheduling app built with React Native and AWS.',
    heroMetric: { value: '140,000+', label: 'Active Monthly Patients' },
    secondaryMetrics: [
      { value: '100%', label: 'HIPAA Compliance Score' },
      { value: '-65%', label: 'Patient Support Call Volume' },
      { value: '4.9/5', label: 'App Store Rating (18k reviews)' }
    ],
    challenge: 'Apex Health was overwhelmed with thousands of phone calls daily for routine appointments and prescription refills.',
    strategy: 'We architected a unified, HIPAA-compliant patient experience across iOS, Android, and Web using React Native with biometrics and EHR synchronization.',
    architectureDetails: [
      'Engineered cross-platform React Native app with FaceID biometric auth and encrypted storage',
      'Built secure FHIR/HL7 API middleware bridging patient records to legacy EHR backends',
      'Implemented automated WebRTC video consulting rooms with end-to-end encryption',
      'Deployed on HIPAA-compliant AWS ECS with automated audit logging'
    ],
    execution: [
      'Weeks 1-3: Accessibility wireframes and HIPAA security protocols',
      'Weeks 4-8: React Native core build and secure EHR bridge integration',
      'Weeks 9-11: Telehealth video calling and push notification setup',
      'Weeks 12-14: Independent HIPAA compliance audit and App Store deployment'
    ],
    deliverables: [
      'iOS and Android Mobile Applications (App Store & Google Play)',
      'Responsive Web Patient Portal',
      'HIPAA-Compliant AWS Cloud Infrastructure',
      'Direct EHR Middleware Integration Engine'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'AWS HIPAA VPC', 'WebRTC', 'HL7/FHIR API'],
    timeline: '14 weeks',
    testimonial: {
      quote: 'The patient app built by Explode Labs transformed our operations. Over 80% of all appointments and prescription requests now happen digitally without staff intervention.',
      author: 'Dr. Sarah Jenkins',
      role: 'Chief Medical Information Officer',
      company: 'Apex Health Systems'
    }
  },
  {
    id: 'cs_5',
    slug: 'novus-fintech-portal',
    title: 'Institutional FinTech Platform Processing $800M in Capital Allocation',
    client: 'Novus Capital',
    industry: 'FinTech & Modern Banking',
    serviceSlugs: ['react-nextjs-development', 'ui-ux-design-systems', 'brand-identity-creative', 'motion-graphics-animation', '3d-design-visualization', 'blockchain-web3-development'],
    tagline: 'Dark cinematic interface, sub-80ms transaction feeds, and bank-grade data security.',
    heroMetric: { value: '$800M+', label: 'Capital Allocated on Platform' },
    secondaryMetrics: [
      { value: '<80ms', label: 'Ledger Query Latency' },
      { value: '94%', label: 'KYC Onboarding Pass Rate' },
      { value: '0', label: 'Security Vulnerabilities' }
    ],
    challenge: 'Novus was launching an institutional fund allocation platform requiring an interface that communicated technological prestige while meeting strict SEC standards.',
    strategy: 'Explode Labs designed a bespoke dark-themed design system inspired by Swiss modernist typography, 3D animated assets, and an edge-rendered Next.js platform.',
    architectureDetails: [
      'Built a precision dark-mode design system with financial chart components and real-time WebSockets',
      'Created 3D motion animations showcasing institutional capital flow mechanics',
      'Integrated automated KYC/AML verification with Plaid bank account verification flows',
      'Implemented hardware key multi-factor authentication (WebAuthn / YubiKey)'
    ],
    execution: [
      'Weeks 1-2: Brand strategy and compliance mapping',
      'Weeks 3-5: Figma design system creation and 3D motion asset rendering',
      'Weeks 6-9: Next.js frontend development with real-time financial chart rendering',
      'Weeks 10-11: Security penetration testing, SOC2 audit, and rollout'
    ],
    deliverables: [
      'Institutional Web Platform & Investor Portal',
      'Complete Brand Identity, 3D Motion Assets & Typography System',
      'Figma Component Design System with Financial Chart Tokens',
      'Automated KYC Verification & Banking Bridge'
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Cinema 4D', 'Plaid API', 'PostgreSQL', 'WebSockets'],
    timeline: '11 weeks',
    testimonial: {
      quote: 'Explode Labs built an interface that looks and feels like it belongs in the year 2030. Institutional investors take one look at our portal and immediately understand our standard of excellence.',
      author: 'Julian Thorne',
      role: 'Managing Partner',
      company: 'Novus Capital'
    }
  },
  {
    id: 'cs_6',
    slug: 'omniflow-logistics',
    title: 'Autonomous Operations & Workflow Automation for Global Freight',
    client: 'OmniFlow Global',
    industry: 'Enterprise Software & Logistics',
    serviceSlugs: ['ai-workflow-automation', 'generative-ai-agents', 'data-engineering-analytics', 'desktop-application-development', 'computer-vision-ocr-document-ai'],
    tagline: 'Self-healing automation pipelines cutting manual customs and dispatch processing by 85%.',
    heroMetric: { value: '-85%', label: 'Manual Processing Time' },
    secondaryMetrics: [
      { value: '18,500 hrs', label: 'Annual Ops Time Saved' },
      { value: '0.01%', label: 'Document Error Rate' },
      { value: '$420,000', label: 'Direct Annual Labor Savings' }
    ],
    challenge: 'OmniFlow was handling over 4,000 international customs declarations and bill of lading documents weekly through manual data entry.',
    strategy: 'We deployed an autonomous AI document processing pipeline using custom Python microservices and n8n workflows that ingest scanned freight PDFs and sync to ERPs.',
    architectureDetails: [
      'Automated email and webhook ingestion queue listening for new shipping manifests 24/7',
      'Deployed multi-modal vision LLMs with structured JSON schema output to parse multi-language customs forms',
      'Built automated confidence-scoring threshold: 99%+ confidence routes directly to ERP',
      'Integrated real-time Slack exception alert bots with one-click resolution buttons'
    ],
    execution: [
      'Weeks 1-2: Document taxonomy audit and error rate baselining',
      'Weeks 3-4: Python document parser build with deterministic validation rules',
      'Weeks 5-6: n8n workflow pipeline orchestration and ERP webhook connector setup',
      'Weeks 7-8: Parallel run testing against live human operations and final autonomous handoff'
    ],
    deliverables: [
      'Autonomous AI Document Extraction Engine',
      'Self-Hosted n8n Enterprise Workflow Architecture',
      'Human-in-the-Loop Review Portal',
      'Live Operations Telemetry Dashboard'
    ],
    technologies: ['Python', 'n8n', 'Claude 3.5 Sonnet Vision', 'FastAPI', 'PostgreSQL', 'Slack Bot API'],
    timeline: '8 weeks',
    testimonial: {
      quote: 'What used to take our 12-person team 40 hours a week now happens in 45 seconds with near-zero errors. Explode Labs gave us superpower-level efficiency.',
      author: 'Carlos Mendez',
      role: 'VP of Global Operations',
      company: 'OmniFlow Global'
    }
  },
  {
    id: 'cs_7',
    slug: 'titan-machinery-b2b-seo',
    client: 'Titan Machinery',
    industry: 'Industrial Manufacturing & Wholesale',
    serviceSlugs: ['technical-and-programmatic-seo', 'high-performance-paid-advertising', 'technical-copywriting-and-editorial', 'b2b-outbound-sdr-and-lead-generation', 'modern-data-stack-and-warehousing'],
    title: 'Programmatic B2B SEO & Paid Search Generating $18.4M in Pipeline',
    tagline: '12,000 indexable SKU catalog architecture paired with exact-model Google search and automated permit scrapers.',
    heroMetric: { value: '$18.4M', label: 'Closed-Won Industrial Pipeline' },
    secondaryMetrics: [
      { value: '+540%', label: 'Organic B2B Search Traffic' },
      { value: '$128', label: 'Cost Per Qualified Lead (CPL)' },
      { value: '4.8x', label: 'Industrial Search ROAS' },
      { value: '142', label: 'New High-Volume Distributors' }
    ],
    challenge: 'Titan Machinery manufactured heavy industrial CNC tools and hydraulic presses across 12,000 product SKUs buried in unindexed dynamic database parameters, resulting in zero organic search visibility and wasted $60k/month paid ad spend.',
    strategy: 'Explode Labs deployed a programmatic SEO architecture generating 12,000 semantic product pages with CAD downloads, structured high-intent Google search ads with offline CRM conversion tracking, and built an automated permit scraper for account-based outreach.',
    architectureDetails: [
      'Normalized 12,000 dynamic SKU parameters into clean semantic URL hierarchies with automated Product and Offer JSON-LD schema',
      'Engineered Single-Keyword Ad Groups (SKAGs) with 1,500+ negative keyword filters and offline CRM deal attribution in HubSpot',
      'Authored 18 deep engineering whitepapers on multi-axis CNC tolerances capturing procurement buyers',
      'Built an automated scraper tracking industrial building permits and equipment leasing expirations'
    ],
    execution: [
      'Weeks 1-3: Technical taxonomy audit and URL normalization strategy',
      'Weeks 4-7: Programmatic catalog page generator build and XML sitemap clustering',
      'Weeks 8-10: High-intent Google Search campaign restructure and negative keyword sculpting',
      'Weeks 11-14: Offline CRM conversion sync, permit scraping pipeline launch, and whitepaper distribution'
    ],
    deliverables: [
      '12,000+ Normalized Programmatic Catalog Pages',
      'High-Intent Google Ads Architecture with Offline Tracking',
      '18 Technical Engineering Whitepapers & CAD Teardowns',
      'Automated Permit & Leasing Expiration SDR Pipeline'
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Google Ads API', 'HubSpot CRM', 'PostgreSQL', 'Smartlead'],
    timeline: '14 weeks total engagement',
    testimonial: {
      quote: 'Explode Labs took our massive, complex catalog and turned it into an organic search powerhouse. We are closing multi-hundred-thousand dollar equipment contracts with buyers who found us on Google.',
      author: 'Robert Callahan',
      role: 'VP of Global Sales',
      company: 'Titan Machinery'
    }
  },
  {
    id: 'cs_8',
    slug: 'proshield-franchise-seo',
    client: 'ProShield Home Services',
    industry: 'Multi-Location Franchise & Home Services',
    serviceSlugs: ['local-and-franchise-seo', 'online-reputation-management-and-reviews', 'conversion-rate-optimization-cro', 'high-performance-paid-advertising'],
    title: 'Multi-Location Local SEO Dominance & 380% Lead Surge Across 85 Franchise Units',
    tagline: '85 localized landing page hubs, automated SMS review generation, and 1-click emergency dispatch booking.',
    heroMetric: { value: '+380%', label: 'Inbound Service Call Surge' },
    secondaryMetrics: [
      { value: '72/85', label: '#1-#3 Google Map Pack Positions' },
      { value: '4.8 ★', label: 'Average Google Rating (14k Reviews)' },
      { value: '-52%', label: 'Cost Per Lead (CPL)' },
      { value: '$22.8M', label: 'Total Network Revenue Growth' }
    ],
    challenge: 'ProShield operated 85 franchise territories across 14 states with cannibalizing local search listings, a poor 3.4-star Google review average, and an exorbitant $180 cost per emergency call.',
    strategy: 'We engineered 85 geographically isolated city landing pages, built an automated ServiceTitan SMS review engine routing 5-star reviews to Google, and replaced clunky forms with an instant 30-second mobile dispatch widget.',
    architectureDetails: [
      'Deployed 85 localized city landing pages with localized geo-coordinates, local customer testimonials, and LocalBusiness schema',
      'Integrated ServiceTitan dispatch webhooks triggering automated SMS review requests 15 minutes post-completion',
      'Restructured geo-fenced Google Ads and Local Services Ads with dynamic number insertion via CallRail',
      'Engineered 1-click mobile emergency booking funnel with real-time technician dispatch estimation'
    ],
    execution: [
      'Weeks 1-2: 85 Google Business Profile citation audit and NAP consistency cleanup',
      'Weeks 3-5: Programmatic city page generator build with ServiceTitan live review integration',
      'Weeks 6-7: SMS review generation engine rollout across all 85 franchise territories',
      'Weeks 8-10: Geo-fenced Google Ads & LSA restructuring with dynamic call tracking'
    ],
    deliverables: [
      '85 Localized Franchise Landing Page Hubs',
      'ServiceTitan SMS Review Generation Engine',
      'Geo-Targeted Google Ads & LSA Campaign Hierarchy',
      '1-Click Mobile Emergency Dispatch Funnel'
    ],
    technologies: ['Next.js 15', 'ServiceTitan API', 'Twilio SMS', 'Google Business Profile API', 'CallRail', 'Tailwind CSS'],
    timeline: '10 weeks total engagement',
    testimonial: {
      quote: 'Explode Labs gave our franchise network an unfair competitive advantage. Every single one of our 85 branches is now dominating their local Google Map Pack, and our phones ring non-stop.',
      author: 'Amanda Sterling',
      role: 'VP of Marketing',
      company: 'ProShield Franchise Systems'
    }
  },
  {
    id: 'cs_9',
    slug: 'sentinel-cyber-abm',
    client: 'Sentinel Cyber Systems',
    industry: 'Enterprise Cybersecurity & SaaS',
    serviceSlugs: ['account-based-marketing-abm', 'video-editing-and-post-production', 'drone-and-commercial-media-production', 'brand-identity-and-visual-systems', 'digital-pr-and-authority-link-building', 'programmatic-and-connected-tv-advertising'],
    title: 'Account-Based Marketing (ABM) & Brand Film Engine Securing $45.2M in Pipeline',
    tagline: 'Cinematic 4K brand film, Connected TV media buy, and 1-to-1 dynamic account hubs for 250 Fortune 1000 targets.',
    heroMetric: { value: '$45.2M', label: 'Qualified Enterprise Pipeline' },
    secondaryMetrics: [
      { value: '48', label: 'Fortune 500 POCs Active' },
      { value: '88%', label: 'Connected TV Completion Rate' },
      { value: '64%', label: 'Executive Response Rate' },
      { value: '14', label: 'Tier-1 National Press Features' }
    ],
    challenge: 'Sentinel Cyber possessed an elite zero-trust security platform but suffered from generic stock-photo branding and cold outreach that was completely ignored by Fortune 500 CISOs.',
    strategy: 'Explode Labs produced a Hollywood-grade 4K cinematic brand film, surrounded buying committees with Connected TV ads on Bloomberg/CNBC, generated 250 personalized 1-to-1 executive briefing hubs, and secured Tier-1 press in Forbes and TechCrunch.',
    architectureDetails: [
      'Produced 90-second 4K cinematic film with RED V-Raptor cameras and commercial drone footage',
      'Engineered 250 dynamic 1-to-1 personalized executive portals displaying custom threat analysis',
      'Deployed programmatic Connected TV (CTV) ad buys targeted at corporate campus IP ranges',
      'Authored proprietary Threat Vulnerability Index securing editorial coverage in TechCrunch and Forbes'
    ],
    execution: [
      'Weeks 1-3: 250 target enterprise account mapping and cinematic scriptwriting',
      'Weeks 4-6: 4-day RED 8K cinema production and drone filming in commercial data centers',
      'Weeks 7-9: 1-to-1 personalized web portal deployment and Bombora intent webhook integration',
      'Weeks 10-12: Connected TV and LinkedIn executive media rollout with direct gifting'
    ],
    deliverables: [
      '90-Second 4K Cinema Brand Film & 6 Social Cutdowns',
      '250 Dynamic 1-to-1 Personalized Account Briefing Portals',
      'Connected TV & LinkedIn ABM Ad Campaign Suite',
      'Proprietary Threat Intelligence Whitepaper & PR Placements'
    ],
    technologies: ['RED 8K Cinema Suite', 'DaVinci Resolve Studio', 'Next.js 15', 'Bombora Intent Data', 'Demandbase', 'The Trade Desk'],
    timeline: '12 weeks total engagement',
    testimonial: {
      quote: 'The brand film and ABM engine created by Explode Labs completely elevated Sentinel into the top tier of enterprise cybersecurity. CISOs at Fortune 500 banks now reach out to us by name.',
      author: 'Alexander Hayes',
      role: 'Chief Marketing Officer',
      company: 'Sentinel Cyber Systems'
    }
  },
  {
    id: 'cs_10',
    slug: 'velocity-athletics-marketplace',
    client: 'Velocity Athletics',
    industry: 'Fitness Tech & Amazon Marketplace',
    serviceSlugs: ['amazon-and-marketplace-marketing', 'social-media-advertising', 'influencer-and-creator-marketing', 'ecommerce-and-shopify-seo', 'lifecycle-and-cold-email-infrastructure'],
    title: 'Amazon Marketplace Dominance & TikTok Creator Whitelisting Driving $8.6M',
    tagline: 'Premium A+ listing re-engineering, long-tail keyword harvesting, and a 65-creator UGC Spark Ad flywheel.',
    heroMetric: { value: '$8.6M', label: 'Total Marketplace & Direct Sales' },
    secondaryMetrics: [
      { value: '17.8%', label: 'Amazon ACOS (Down from 52%)' },
      { value: '22.4%', label: 'Listing Conversion Rate' },
      { value: '#1', label: 'Amazon Best Seller Badge' },
      { value: '4.2x', label: 'TikTok Spark Ads ROAS' }
    ],
    challenge: 'Velocity Athletics suffered from an unsustainable 52% Amazon ACOS, poor 9.2% listing conversion rates, and zero off-Amazon creator flywheel to capture brand referral bonuses.',
    strategy: 'Explode Labs overhauled all listings with 3D CGI renders and Premium A+ Content, deployed automated hourly PPC bid-harvesting algorithms, and partnered with 65 fitness creators running TikTok Spark Ads with Amazon Attribution tags.',
    architectureDetails: [
      'Overhauled 14 Amazon storefront listings with 3D exploded view CGI renders and Premium A+ modules',
      'Engineered hourly bid harvesting script isolating converting search terms into exact match campaigns',
      'Coordinated 65 creator UGC production run running paid Spark Ads directly through creator handles',
      'Deployed smart on-pack QR codes routing buyers to a mobile hydration web app to capture customer emails'
    ],
    execution: [
      'Weeks 1-2: Amazon search term harvesting audit and 3D CGI supplement modeling',
      'Weeks 3-4: Premium A+ listing upload, video module integration, and PPC restructuring',
      'Weeks 5-7: 65 creator brief distribution and TikTok Spark Ad whitelisting setup',
      'Weeks 8-10: Amazon Attribution tag campaign launch and on-pack QR code distribution'
    ],
    deliverables: [
      'Premium A+ Brand Storefront & 3D Render Suite',
      'Algorithmic Amazon PPC Keyword Harvesting Engine',
      '65-Creator UGC Production & Spark Ads Campaign',
      'Smart On-Pack QR Code Platform & Retention Flows'
    ],
    technologies: ['Amazon Advertising API', 'Helium 10', 'Cinema 4D', 'TikTok Spark Ads', 'Klaviyo', 'Shopify Plus'],
    timeline: '10 weeks total engagement',
    testimonial: {
      quote: 'Explode Labs revolutionized our Amazon business. They slashed our ad waste, turned our listings into conversion machines, and built a creator flywheel that keeps us at the top of our category.',
      author: 'Tyler Morgan',
      role: 'Founder & CEO',
      company: 'Velocity Athletics'
    }
  },
  {
    id: 'cs_11',
    slug: 'aerovant-legacy-modernization',
    client: 'AeroVant Technologies',
    industry: 'Aerospace & Enterprise Manufacturing',
    serviceSlugs: ['legacy-system-migration-and-refactoring', 'custom-web-application-development', 'devops-cloud-and-cicd-infrastructure', 'ada-web-accessibility-and-compliance'],
    title: 'Zero-Downtime Legacy Monolith Modernization to Next.js 15 & Kubernetes',
    tagline: 'Strangler Fig pattern migration of a 12-year-old mission-critical aerospace platform for 25,000 contractors.',
    heroMetric: { value: '0 sec', label: 'Total Platform Downtime' },
    secondaryMetrics: [
      { value: '-78%', label: 'Annual Infrastructure Cost' },
      { value: '15 min', label: 'Deployment Cycle (Down from 3 Wks)' },
      { value: '420ms', label: 'Page Load Speed (Down from 12.4s)' },
      { value: '100%', label: 'Defense Accessibility Pass' }
    ],
    challenge: 'AeroVant maintained a mission-critical aerospace parts procurement portal on a 12-year-old PHP 5.4 monolith suffering from 12-second load times, 3-week deployment cycles, and failing federal accessibility standards.',
    strategy: 'Explode Labs executed a zero-downtime migration using the Strangler Fig Pattern on Cloudflare Workers, replacing the backend with type-safe Node.js GraphQL services and containerized Next.js 15 micro-frontends on AWS EKS.',
    architectureDetails: [
      'Deployed Cloudflare Workers edge reverse proxy progressively strangling legacy PHP routes to Next.js',
      'Engineered type-safe Node.js GraphQL API gateway and PostgreSQL schema with automated migration scripts',
      'Built automated GitHub Actions CI/CD deploying to AWS EKS with blue/green zero-downtime cutover',
      'Remediated all UI components to achieve full Section 508 / WCAG 2.2 AA federal defense compliance'
    ],
    execution: [
      'Weeks 1-3: Codebase dependency graph audit and Cloudflare Workers reverse proxy deployment',
      'Weeks 4-7: Authentication and parts catalog module migration to Next.js 15 App Router',
      'Weeks 8-11: Order bidding and billing module migration with live database replication',
      'Weeks 12-14: Legacy server decommissioning, 50,000 virtual user load testing, and compliance sign-off'
    ],
    deliverables: [
      'Modular Next.js 15 Micro-Frontends',
      'Node.js GraphQL API Gateway & PostgreSQL Database',
      'AWS EKS Kubernetes Cluster with GitHub Actions CI/CD',
      'VPAT Section 508 Defense Accessibility Compliance Report'
    ],
    technologies: ['Next.js 15', 'TypeScript', 'GraphQL', 'AWS EKS', 'Kubernetes', 'Cloudflare Workers', 'PostgreSQL', 'Terraform'],
    timeline: '14 weeks total engagement',
    testimonial: {
      quote: 'Migrating a 12-year-old mission-critical aerospace platform without a single minute of downtime felt impossible until Explode Labs took over. Their technical execution was flawless.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'AeroVant Technologies'
    }
  },
  {
    id: 'cs_12',
    slug: 'clarity-intel-geo-aeo',
    client: 'Clarity Intel',
    industry: 'Market Intelligence & B2B SaaS',
    serviceSlugs: ['chatgpt-and-perplexity-ai-seo', 'technical-and-programmatic-seo', 'technical-copywriting-and-editorial', 'digital-pr-and-authority-link-building'],
    title: 'Capturing 84% Answer Engine Citation Share in ChatGPT, Perplexity & Claude',
    tagline: 'First-principles Generative Engine Optimization (GEO/AEO) establishing default vendor authority in AI search.',
    heroMetric: { value: '84%', label: 'AI Answer Engine Citation Share' },
    secondaryMetrics: [
      { value: '+310%', label: 'AI Platform Referral Traffic' },
      { value: '$2.8M', label: 'Pipeline Sourced from AI Engines' },
      { value: '#1', label: 'Default Recommended Vendor' },
      { value: '98/100', label: 'Entity Knowledge Graph Score' }
    ],
    challenge: 'Clarity Intel was losing enterprise software buyers to competitors because ChatGPT and Perplexity were summarizing competitors as default recommendations in 82% of synthesized market intelligence queries.',
    strategy: 'Explode Labs deployed a comprehensive GEO/AEO framework featuring 40-word direct citation blocks, structured Knowledge Graph JSON-LD entity linking to Wikidata, and proprietary statistical benchmark datasets designed for LLM citations.',
    architectureDetails: [
      'Restructured 45 feature and solution pages with 40-50 word bold factual definition blocks in the hero viewport',
      'Deployed Schema.org SoftwareApplication, Dataset, and FAQPage JSON-LD linked to Wikidata entities',
      'Published original research reports with downloadable CSV datasets and structured comparison tables',
      'Configured edge caching and server headers optimized for verified GPTBot, PerplexityBot, and ClaudeBot crawlers'
    ],
    execution: [
      'Weeks 1-2: 200-prompt generative AI query benchmark audit across ChatGPT, Perplexity, Claude, and Gemini',
      'Weeks 3-4: On-page AEO restructuring with definition callout blocks and structured comparison tables',
      'Weeks 5-6: JSON-LD Knowledge Graph entity injection and Wikidata entity linking',
      'Weeks 7-8: Original research benchmark data hub launch and automated daily prompt citation tracker setup'
    ],
    deliverables: [
      '45 Answer Engine Optimized Solution Pages',
      'Comprehensive JSON-LD Entity Knowledge Graph',
      'Proprietary Benchmark Data Hub & Downloadable Datasets',
      'Automated Daily LLM Prompt Citation Tracking System'
    ],
    technologies: ['Next.js 15', 'JSON-LD / Schema.org', 'Wikidata API', 'Python LLM Telemetry', 'Cloudflare Edge', 'Tailwind CSS'],
    timeline: '8 weeks total engagement',
    testimonial: {
      quote: 'Explode Labs positioned us as the default, authoritative answer across ChatGPT and Perplexity. When enterprise buyers ask AI which platform to choose, Clarity Intel is consistently the number one recommendation.',
      author: 'Dr. Aris Thorne',
      role: 'Chief Strategy Officer',
      company: 'Clarity Intel'
    }
  }
];

export const tools: ToolEntity[] = [
  {
    id: 'tool_1',
    slug: 'project-estimator',
    name: 'Interactive Project Scope & Cost Estimator',
    tagline: 'Calculate real-time budget ranges, timelines, and team complexity for your project.',
    description: 'An interactive, transparent calculator based on real delivery data across web, mobile, SaaS, AI, and marketing projects. Receive an instant estimate and download a detailed architecture breakdown.',
    iconName: 'Calculator',
    badge: 'Real-Time Estimate',
    relatedServiceSlugs: ['react-nextjs-development', 'saas-mvp-development', 'generative-ai-agents']
  },
  {
    id: 'tool_2',
    slug: 'seo-auditor',
    name: 'SEO, Core Web Vitals & GEO Audit Tool',
    tagline: 'Instant scan of your website for search ranking factors and AI engine retrievability.',
    description: 'Analyzes page speed (LCP, INP, CLS), Schema.org entity structured data, and content density factors that search engines and AI assistants use to cite sources.',
    iconName: 'Search',
    badge: 'Free Instant Audit',
    relatedServiceSlugs: ['technical-seo', 'react-nextjs-development']
  }
];

export const guides: GuideEntity[] = [
  {
    id: 'gd_1',
    slug: 'how-much-does-it-cost-to-build-a-saas',
    title: 'How Much Does It Cost to Build a B2B SaaS in 2026? (Comprehensive Breakdown)',
    category: 'Engineering & Product Strategy',
    readTime: '8 min read',
    publishedDate: '2026-03-12',
    author: {
      name: 'Explode Labs Technical Architecture Team',
      role: 'Senior Product Engineers'
    },
    summary: 'A transparent, line-by-line financial and technical breakdown of building a modern B2B SaaS MVP—from authentication, database architecture, and Stripe billing to infrastructure and compliance.',
    takeaways: [
      'A true production-grade B2B SaaS MVP ranges from $25,000 to $65,000 depending on real-time features, AI integrations, and compliance requirements.',
      'Using modern stacks like Next.js 15, Supabase (Postgres with RLS), and Tailwind reduces engineering hours by up to 40% compared to legacy architectures.',
      'The biggest hidden SaaS costs are not frontend UI, but authorization (RBAC), multi-tenant data isolation, and edge-case Stripe webhook handlers.'
    ],
    sections: [
      {
        title: '1. The Four Cost Tiers of SaaS Development',
        content: 'Building a SaaS is not a single price point. An early prototype with basic auth and CRUD operations starts around $15,000-$25,000. A commercially ready B2B MVP with Stripe billing, role-based access control (RBAC), and team workspaces averages $30,000-$60,000. Complex enterprise platforms with SOC2 compliance and AI pipelines exceed $80,000.'
      },
      {
        title: '2. The Anatomy of Modern SaaS Architecture',
        content: 'In 2026, the optimal stack for speed and developer velocity is Next.js App Router for frontend/server actions, PostgreSQL with Row-Level Security for database isolation, and Stripe Billing for subscription lifecycle management. This stack eliminates the need for separate frontend/backend teams.'
      },
      {
        title: '3. What to Build vs. What to Buy',
        content: 'Never build authentication, transactional email, or subscription billing from scratch. Use Auth.js/Clerk for identity, Resend for email, and Stripe for payments. Focus 100% of your custom engineering budget on your proprietary core value proposition.'
      }
    ],
    relatedServiceSlugs: ['saas-mvp-development', 'react-nextjs-development', 'cloud-devops-infrastructure']
  },
  {
    id: 'gd_2',
    slug: 'the-complete-b2b-seo-aeo-playbook',
    title: 'The Modern B2B SEO & AEO Playbook: How to Get Cited by Google & AI Engines',
    category: 'Search & Generative Engine Optimization',
    readTime: '10 min read',
    publishedDate: '2026-02-28',
    author: {
      name: 'Explode Labs Growth & SEO Team',
      role: 'Search Strategists'
    },
    summary: 'How search has shifted from keyword stuffing to entity authority, structured Schema.org data, and high information density required to win Google AI Overviews and LLM citations.',
    takeaways: [
      'Keyword density is dead; AI engines and Google rely on semantic entity relationships, clear direct answers, and structured HTML tables.',
      'Bottom-of-funnel (BOFU) comparison and alternative pages generate 70%+ of all qualified enterprise pipeline from search.',
      'Structured JSON-LD schema linking Organization, Service, and Person nodes is mandatory for establishing verifiable topical authority.'
    ],
    sections: [
      {
        title: '1. The Death of 2,000-Word Fluff Articles',
        content: 'Search engines and LLMs now reward information density. If a user queries a cost, definition, or process, your page must provide a bolded, 40-50 word direct answer immediately beneath the H2, followed by structured tables and concrete data.'
      },
      {
        title: '2. Winning Generative Engine Optimization (GEO)',
        content: 'To get recommended by ChatGPT, Gemini, and Claude, your brand must be associated with original research, proprietary tools, and verifiable client case studies. LLMs synthesize citations from authoritative third-party references and distinct, citable facts.'
      }
    ],
    relatedServiceSlugs: ['technical-seo', 'paid-performance-sem']
  },
  {
    id: 'gd_3',
    slug: 'enterprise-rag-architecture-blueprint',
    title: 'Enterprise RAG Architecture Blueprint: Scaling Vector Search with Zero Hallucination',
    category: 'AI & Data Engineering',
    readTime: '12 min read',
    publishedDate: '2026-03-01',
    author: {
      name: 'Explode Labs AI Architecture Team',
      role: 'Principal AI Engineers'
    },
    summary: 'A production-tested blueprint for architecting enterprise Retrieval-Augmented Generation (RAG) systems using hybrid dense-sparse vector search, contextual chunking, and metadata filtering.',
    takeaways: [
      'Naive RAG with basic chunking fails on complex enterprise schemas; hybrid search combining pgvector and BM25 BM25 keyword matching achieves 94%+ retrieval precision.',
      'Contextual retrieval (prepending document-level context to chunks) reduces semantic search ambiguity by over 35%.',
      'Deploying self-hosted vector databases within your VPC guarantees strict enterprise data governance and zero third-party training data leakage.'
    ],
    sections: [
      {
        title: '1. Beyond Naive RAG: The Hybrid Retrieval Standard',
        content: 'Enterprise search requires both semantic vector embeddings and exact lexical keyword matching. By unifying Qdrant/pgvector embeddings with BM25 sparse keyword indices and reciprocal rank fusion (RRF), retrieval accuracy scales across technical manuals, legal contracts, and financial datasets.'
      },
      {
        title: '2. Contextual Chunking & Metadata Filtering',
        content: 'Chunking raw text blindly causes semantic loss. Our architecture injects document metadata, hierarchical parent context, and role-based access control (RBAC) tags directly into vector payload indices for deterministic query resolution.'
      },
      {
        title: '3. Production Guardrails & Hallucination Mitigation',
        content: 'All LLM responses are validated using cross-encoder rerankers, deterministic schema parsers, and citation verification against raw retrieved text chunks before delivery to the end user.'
      }
    ],
    relatedServiceSlugs: ['generative-ai-agents', 'data-engineering-analytics', 'react-nextjs-development']
  }
];

const slugAliases: Record<string, string> = {
  'technical-and-programmatic-seo': 'technical-seo',
  'technical-seo': 'technical-and-programmatic-seo',
  'custom-web-application-development': 'react-nextjs-development',
  'react-nextjs-development': 'custom-web-application-development',
  'custom-ai-agents-and-llm-pipelines': 'generative-ai-agents',
  'generative-ai-agents': 'custom-ai-agents-and-llm-pipelines',
  'ai-model-fine-tuning-and-quantization': 'generative-ai-agents',
  'business-intelligence-and-dashboards': 'data-engineering-analytics',
  'video-editing-and-post-production': 'video-production-editing',
  'video-production-editing': 'video-editing-and-post-production',
  'b2b-outbound-sdr-and-lead-generation': 'b2b-lead-generation-sdr',
  'b2b-lead-generation-sdr': 'b2b-outbound-sdr-and-lead-generation',
  'high-performance-paid-advertising': 'paid-performance-sem',
  'paid-performance-sem': 'high-performance-paid-advertising',
  'headless-ecommerce-and-shopify-plus': 'ecommerce-shopify-growth',
  'ecommerce-shopify-growth': 'headless-ecommerce-and-shopify-plus',
  'ui-ux-design-and-design-systems': 'ui-ux-design-systems',
  'ui-ux-design-systems': 'ui-ux-design-and-design-systems',
  'brand-identity-and-visual-systems': 'brand-identity-creative',
  'brand-identity-creative': 'brand-identity-and-visual-systems',
  'motion-graphics-and-visual-effects': 'motion-graphics-animation',
  'motion-graphics-animation': 'motion-graphics-and-visual-effects',
  '3d-product-modeling-and-rendering': '3d-design-visualization',
  '3d-design-visualization': '3d-product-modeling-and-rendering',
  'lifecycle-and-cold-email-infrastructure': 'email-marketing-automation',
  'email-marketing-automation': 'lifecycle-and-cold-email-infrastructure',
  'technical-copywriting-and-editorial': 'content-strategy-copywriting',
  'content-strategy-copywriting': 'technical-copywriting-and-editorial',
  'devops-cloud-and-cicd-infrastructure': 'cloud-devops-infrastructure',
  'cloud-devops-infrastructure': 'devops-cloud-and-cicd-infrastructure',
  'enterprise-workflow-automation': 'ai-workflow-automation',
  'ai-workflow-automation': 'enterprise-workflow-automation',
  'modern-data-stack-and-warehousing': 'data-engineering-analytics',
  'data-engineering-analytics': 'modern-data-stack-and-warehousing',
  'enterprise-saas-architecture': 'saas-mvp-development',
  'saas-mvp-development': 'enterprise-saas-architecture',
  'ios-and-android-mobile-apps': 'mobile-app-development',
  'mobile-app-development': 'ios-and-android-mobile-apps',
  'generative-engine-optimization-aeo': 'chatgpt-and-perplexity-ai-seo',
  'chatgpt-and-perplexity-ai-seo': 'generative-engine-optimization-aeo',
  'digital-pr-reputation': 'digital-pr-and-authority-link-building',
  'digital-pr-and-authority-link-building': 'digital-pr-reputation',
  'google-ads-management': 'paid-performance-sem',
  'google-ads-agency': 'paid-performance-sem',
  'ppc-management-services': 'paid-performance-sem',
  'amazon-ppc-services': 'amazon-and-marketplace-marketing',
  'amazon-dsp-agency': 'amazon-and-marketplace-marketing',
  'paid-social-ads': 'social-media-advertising',
  'meta-ads-agency': 'social-media-advertising',
  'tiktok-ads-agency': 'social-media-advertising',
  'linkedin-ads-agency': 'social-media-advertising',
  'cold-email-agency': 'b2b-lead-generation-sdr',
  'b2b-sdr-services': 'b2b-lead-generation-sdr',
  'appointment-setting-agency': 'b2b-lead-generation-sdr',
  'klaviyo-agency': 'email-marketing-automation',
  'programmatic-ads': 'programmatic-and-connected-tv-advertising',
  'abm-services': 'account-based-marketing-abm',
  'influencer-marketing': 'influencer-and-creator-marketing',
  'video-editing-service': 'video-production-editing',
  'commercial-video-editing': 'video-production-editing',
  'davinci-resolve-color-grading': 'video-production-editing',
  'youtube-video-editing': 'video-production-editing',
  'motion-graphics-vfx': 'motion-graphics-animation',
  '2d-3d-explainer-videos': 'motion-graphics-animation',
  'lottie-animation-services': 'motion-graphics-animation',
  '3d-product-rendering': '3d-design-visualization',
  'cgi-product-rendering': '3d-design-visualization',
  '3d-animation-agency': '3d-design-visualization',
  'cad-rendering-services': '3d-design-visualization',
  'product-design-agency': 'ui-ux-design-systems',
  'figma-design-systems': 'ui-ux-design-systems',
  'ui-ux-design-agency': 'ui-ux-design-systems',
  'brand-identity-design': 'brand-identity-creative',
  'corporate-identity-design': 'brand-identity-creative',
  'branding-agency': 'brand-identity-creative',
  'visual-identity-design': 'brand-identity-creative',
  'graphic-design-services': 'graphic-design-visual-assets',
  'drone-video-services': 'drone-and-commercial-media-production',
  'commercial-video-production': 'drone-and-commercial-media-production',
  'fpv-drone-filming': 'drone-and-commercial-media-production',
  'web-development-agency': 'react-nextjs-development',
  'nextjs-development-agency': 'react-nextjs-development',
  'custom-software-development': 'react-nextjs-development',
  'full-stack-development': 'react-nextjs-development',
  'saas-development-agency': 'saas-mvp-development',
  'saas-software-engineering': 'saas-mvp-development',
  'b2b-saas-developers': 'saas-mvp-development',
  'shopify-plus-agency': 'ecommerce-shopify-growth',
  'headless-commerce-agency': 'ecommerce-shopify-growth',
  'wcag-compliance-agency': 'ada-web-accessibility-and-compliance',
  'web-accessibility-audit': 'ada-web-accessibility-and-compliance',
  'vpat-compliance-services': 'ada-web-accessibility-and-compliance',
  'react-native-development': 'mobile-app-development',
  'flutter-app-development': 'mobile-app-development',
  'ios-app-development-agency': 'mobile-app-development',
  'aws-consulting-agency': 'cloud-devops-infrastructure',
  'terraform-devops-services': 'cloud-devops-infrastructure',
  'legacy-code-refactoring': 'legacy-system-migration-and-refactoring',
  'software-modernization-agency': 'legacy-system-migration-and-refactoring',
  'soc2-compliance-consulting': 'cybersecurity-compliance-audits',
  'security-audit-services': 'cybersecurity-compliance-audits'
};

export function getServiceBySlug(slug: string): ServiceEntity | undefined {
  const direct = services.find(s => s.slug === slug);
  if (direct) return direct;
  const alias = slugAliases[slug];
  if (alias) {
    return services.find(s => s.slug === alias);
  }
  return undefined;
}

export function getSolutionBySlug(slug: string): SolutionEntity | undefined {
  return solutions.find(s => s.slug === slug);
}

export function getIndustryBySlug(slug: string): IndustryEntity | undefined {
  return industries.find(i => i.slug === slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudyEntity | undefined {
  return caseStudies.find(c => c.slug === slug);
}

export function getGuideBySlug(slug: string): GuideEntity | undefined {
  return guides.find(g => g.slug === slug);
}

export function getCaseStudiesForService(serviceSlug: string): CaseStudyEntity[] {
  const alias = slugAliases[serviceSlug];
  return caseStudies.filter(c => 
    c.serviceSlugs.includes(serviceSlug) || (alias && c.serviceSlugs.includes(alias))
  );
}

export function getRelatedServices(serviceSlug: string): ServiceEntity[] {
  const current = getServiceBySlug(serviceSlug);
  if (!current) return [];
  return services.filter(s => current.relatedServiceSlugs.includes(s.slug) || (slugAliases[s.slug] && current.relatedServiceSlugs.includes(slugAliases[s.slug])));
}

export function searchKnowledgeGraph(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return { services: [], solutions: [], industries: [], caseStudies: [], tools: [] };

  return {
    services: services.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.tagline.toLowerCase().includes(q) || 
      s.technologies.some(t => t.toLowerCase().includes(q))
    ),
    solutions: solutions.filter(s => 
      s.title.toLowerCase().includes(q) || 
      s.tagline.toLowerCase().includes(q)
    ),
    industries: industries.filter(i => 
      i.name.toLowerCase().includes(q) || 
      i.tagline.toLowerCase().includes(q)
    ),
    caseStudies: caseStudies.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.client.toLowerCase().includes(q) || 
      c.industry.toLowerCase().includes(q)
    ),
    tools: tools.filter(t => 
      t.name.toLowerCase().includes(q) || 
      t.description.toLowerCase().includes(q)
    )
  };
}
