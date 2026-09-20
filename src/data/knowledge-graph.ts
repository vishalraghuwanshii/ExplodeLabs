import { 
  SolutionEntity, 
  IndustryEntity, 
  CaseStudyEntity, 
  ToolEntity, 
  GuideEntity,
  ServiceEntity
} from '@/types';
import { canonicalServices } from './services/registry';
import { getServiceBySlug as getCanonicalServiceBySlug } from './services';

export { canonicalServices as services, canonicalServices } from './services/registry';
export * from './services';

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
    bundledServiceSlugs: ['saas-development', 'website-design', 'technical-seo', 'b2b-lead-generation-sdr'],
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
    bundledServiceSlugs: ['ai-agent-development', 'website-development', 'devops-cloud-infrastructure'],
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
    bundledServiceSlugs: ['shopify-development', 'google-ads', 'meta-ads', 'video-editing', 'ui-ux-design'],
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
    bundledServiceSlugs: ['technical-seo', 'b2b-lead-generation-sdr', 'google-ads', 'content-marketing'],
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
    recommendedServiceSlugs: ['saas-development', 'website-development', 'technical-seo', 'b2b-lead-generation-sdr'],
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
    recommendedServiceSlugs: ['mobile-app-development', 'ui-ux-design', 'devops-cloud-infrastructure', 'cybersecurity-audits'],
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
    recommendedServiceSlugs: ['shopify-development', 'google-ads', 'meta-ads', 'video-editing', 'ui-ux-design'],
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
    recommendedServiceSlugs: ['website-development', 'ui-ux-design', 'cybersecurity-audits', 'blockchain-development'],
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
    serviceSlugs: ['website-development', 'saas-development', 'technical-seo', 'b2b-lead-generation-sdr'],
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
    serviceSlugs: ['ai-agent-development', 'website-development', 'devops-cloud-infrastructure'],
    title: 'Deploying Autonomous Multi-Agent Workflows with Deterministic Grounding',
    tagline: 'Custom hybrid RAG architecture processing 2.4M enterprise documents with deterministic precision.',
    heroMetric: { value: '99.8%', label: 'Fact Verification Accuracy' },
    secondaryMetrics: [
      { value: '380ms', label: 'Average Retrieval Latency' },
      { value: '42,000 hrs', label: 'Annual Knowledge Labor Saved' },
      { value: '100%', label: 'SOC2 Compliance Pass' }
    ],
    challenge: 'Lumina needed to offer enterprise legal and financial clients an AI agent that could synthesize contracts and balance sheets with strict source citations and minimal error.',
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
      quote: 'Explode Labs solved the verification barrier that had blocked our enterprise rollout for six months. Our clients now trust the AI with sensitive compliance audits.',
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
    serviceSlugs: ['shopify-development', 'google-ads', 'meta-ads', 'video-editing', 'ui-ux-design', '3d-modeling'],
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
    serviceSlugs: ['mobile-app-development', 'ui-ux-design', 'devops-cloud-infrastructure', 'cybersecurity-audits'],
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
    serviceSlugs: ['website-development', 'ui-ux-design', 'branding', 'motion-graphics', '3d-modeling', 'blockchain-development'],
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
    serviceSlugs: ['workflow-automation', 'ai-agent-development', 'data-engineering', 'custom-software-development'],
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
    serviceSlugs: ['technical-seo', 'google-ads', 'content-marketing', 'b2b-lead-generation-sdr', 'data-engineering'],
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
    serviceSlugs: ['local-seo', 'online-reputation-management', 'conversion-rate-optimization', 'google-ads'],
    title: 'Multi-Location Local SEO Dominance & 380% Lead Surge Across 85 Franchise Units',
    tagline: '85 localized landing page hubs, automated SMS review generation, and 1-click emergency dispatch booking.',
    heroMetric: { value: '+380%', label: 'Inbound Service Call Surge' },
    secondaryMetrics: [
      { value: '72/85', label: '#1-#3 Google Map Pack Positions' },
      { value: '4.8 ★', label: 'Average Google Rating (14k Reviews)' },
      { value: '-52%', label: 'Cost Per Lead (CPL)' },
      { value: '$22.8M', label: 'Total Network Revenue Growth' }
    ],
    challenge: 'ProShield operated 85 franchise territories across 14 states with cannibalizing local search listings, a poor 3.4-star Google review average, and an high cost per emergency call.',
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
    serviceSlugs: ['account-based-marketing', 'video-editing', 'commercial-video-production', 'branding', 'digital-pr', 'programmatic-ads'],
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
    serviceSlugs: ['amazon-marketing', 'social-media-advertising', 'influencer-marketing', 'ecommerce-seo', 'email-marketing'],
    title: 'Amazon Marketplace Dominance & TikTok Creator Whitelisting Driving $8.6M',
    tagline: 'Premium A+ listing re-engineering, long-tail keyword harvesting, and a 65-creator UGC Spark Ad flywheel.',
    heroMetric: { value: '$8.6M', label: 'Total Marketplace & Direct Sales' },
    secondaryMetrics: [
      { value: '17.8%', label: 'Amazon ACOS' },
      { value: '22.4%', label: 'Listing Conversion Rate' },
      { value: '#1', label: 'Amazon Best Seller Badge' },
      { value: '4.2x', label: 'TikTok Spark Ads ROAS' }
    ],
    challenge: 'Velocity Athletics suffered from high Amazon ACOS, poor listing conversion rates, and zero off-Amazon creator flywheel to capture brand referral bonuses.',
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
    serviceSlugs: ['legacy-system-modernization', 'custom-software-development', 'devops-cloud-infrastructure', 'web-accessibility-audit'],
    title: 'Zero-Downtime Legacy Monolith Modernization to Next.js 15 & Kubernetes',
    tagline: 'Strangler Fig pattern migration of a 12-year-old mission-critical aerospace platform for 25,000 contractors.',
    heroMetric: { value: '0 sec', label: 'Total Platform Downtime' },
    secondaryMetrics: [
      { value: '-78%', label: 'Annual Infrastructure Cost' },
      { value: '15 min', label: 'Deployment Cycle (Down from 3 Wks)' },
      { value: '420ms', label: 'Page Load Speed (Down from 12.4s)' },
      { value: '100%', label: 'Defense Accessibility Pass' }
    ],
    challenge: 'AeroVant maintained a mission-critical aerospace parts procurement portal on a 12-year-old legacy monolith suffering from 12-second load times and 3-week deployment cycles.',
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
    serviceSlugs: ['ai-search-optimization', 'technical-seo', 'content-marketing', 'digital-pr'],
    title: 'Capturing 84% Answer Engine Citation Share in ChatGPT, Perplexity & Claude',
    tagline: 'First-principles Generative Engine Optimization (GEO/AEO) establishing default vendor authority in AI search.',
    heroMetric: { value: '84%', label: 'AI Answer Engine Citation Share' },
    secondaryMetrics: [
      { value: '+310%', label: 'AI Platform Referral Traffic' },
      { value: '$2.8M', label: 'Pipeline Sourced from AI Engines' },
      { value: '#1', label: 'Default Recommended Vendor' },
      { value: '98/100', label: 'Entity Knowledge Graph Score' }
    ],
    challenge: 'Clarity Intel was losing enterprise software buyers to competitors because ChatGPT and Perplexity were summarizing competitors as default recommendations.',
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
    relatedServiceSlugs: ['website-development', 'saas-development', 'ai-agent-development']
  },
  {
    id: 'tool_2',
    slug: 'seo-auditor',
    name: 'SEO, Core Web Vitals & GEO Audit Tool',
    tagline: 'Instant scan of your website for search ranking factors and AI engine retrievability.',
    description: 'Analyzes page speed (LCP, INP, CLS), Schema.org entity structured data, and content density factors that search engines and AI assistants use to cite sources.',
    iconName: 'Search',
    badge: 'Free Instant Audit',
    relatedServiceSlugs: ['technical-seo', 'website-development']
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
    summary: 'A transparent, line-by-line financial and technical breakdown of building a modern B2B SaaS MVP (from authentication, database architecture, and Stripe billing to infrastructure and compliance.',
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
    relatedServiceSlugs: ['saas-development', 'website-development', 'devops-cloud-infrastructure']
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
    relatedServiceSlugs: ['technical-seo', 'google-ads']
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
      'Naive RAG with basic chunking fails on complex enterprise schemas; hybrid search combining pgvector and BM25 keyword matching achieves high retrieval precision.',
      'Contextual retrieval (prepending document-level context to chunks) reduces semantic search ambiguity significantly.',
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
    relatedServiceSlugs: ['ai-agent-development', 'data-engineering', 'website-development']
  }
];

export function getServiceBySlug(slug: string): ServiceEntity | undefined {
  return getCanonicalServiceBySlug(slug);
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
  const s = getCanonicalServiceBySlug(serviceSlug);
  const targetSlug = s ? s.slug : serviceSlug;
  return caseStudies.filter(c => 
    c.serviceSlugs.includes(targetSlug) || c.serviceSlugs.includes(serviceSlug)
  );
}

export function searchKnowledgeGraph(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return { services: [], solutions: [], industries: [], caseStudies: [], tools: [] };

  return {
    services: canonicalServices.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.tagline.toLowerCase().includes(q) || 
      s.technologies?.some(t => t.toLowerCase().includes(q)) ||
      s.aliases?.some(a => a.toLowerCase().includes(q))
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
