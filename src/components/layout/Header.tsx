'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ExplodeLogo } from '@/components/ui/ExplodeLogo';
import { 
  Search, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  Film, 
  Code2, 
  Bot, 
  ArrowRight,
  SearchCheck,
  Target,
  Palette,
  Layout,
  ShoppingBag,
  MailCheck,
  Workflow,
  ShieldCheck,
  Sliders,
  Layers,
  Box,
  Share2,
  Rocket,
  Server,
  Smartphone,
  Cloud,
  RefreshCw,
  Database,
  BarChart3,
  FileText,
  BookOpen,
  Megaphone,
  Inbox,
  Lock,
  Zap,
  Globe,
  CheckCircle2,
  Users,
  Compass,
  Check,
  ArrowUpRight,
  Award,
  Cpu,
  Monitor,
  Video,
  PenTool,
  TrendingUp
} from 'lucide-react';
import { SearchModal } from './SearchModal';
import { canonicalServices } from '@/data/services/registry';

interface NavItem {
  label: string;
  href: string;
  desc: string;
  icon: any;
  tag?: string;
}

interface NavColumn {
  title: string;
  items: NavItem[];
}

interface MegaMenuData {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  columns: NavColumn[];
  featured: {
    badge: string;
    title: string;
    desc: string;
    href: string;
    buttonText: string;
    statNumber: string;
    statLabel: string;
  };
}

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const megaMenus: Record<string, MegaMenuData> = {
    'web-ecommerce': {
      id: 'web-ecommerce',
      title: 'Web & E-commerce',
      tagline: 'Custom websites, headless Shopify stores, SaaS platforms, and high-performance frontends built for scale.',
      badge: 'FULL-STACK ENGINEERING',
      columns: [
        {
          title: 'Websites & Frontends',
          items: [
            { label: 'Website Development', href: '/services/website-development', desc: 'Fast, responsive Next.js and custom websites', icon: Code2, tag: 'CORE' },
            { label: 'Website Design', href: '/services/website-design', desc: 'Conversion-focused UX wireframing & Figma layouts', icon: Layout, tag: 'CORE' },
            { label: 'Landing Page Development', href: '/services/landing-page-development', desc: 'Sub-second conversion funnels & lead capture', icon: Layers, tag: 'HIGH' },
            { label: 'SaaS Platform Development', href: '/services/saas-development', desc: 'Multi-tenant apps, billing systems & dashboards', icon: Server, tag: 'CORE' },
          ]
        },
        {
          title: 'E-commerce & Platforms',
          items: [
            { label: 'Shopify Development', href: '/services/shopify-development', desc: 'Custom Liquid themes & headless Hydrogen stores', icon: ShoppingBag, tag: 'CORE' },
            { label: 'E-commerce Development', href: '/services/ecommerce-development', desc: 'Scalable multi-channel digital storefronts', icon: Box, tag: 'CORE' },
            { label: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'iOS & Android mobile apps with React Native', icon: Smartphone, tag: 'HIGH' },
            { label: 'Website Maintenance & Support', href: '/services/website-maintenance', desc: 'Updates, security patching, and SLA support', icon: ShieldCheck, tag: 'STANDARD' },
          ]
        }
      ],
      featured: {
        badge: 'ENGINEERING STANDARD',
        title: 'Modern Full-Stack Architecture',
        desc: 'Every website and application is engineered with clean code, responsive layouts, and technical SEO foundations.',
        href: '/architect',
        buttonText: 'Scope with AI Architect',
        statNumber: '95+',
        statLabel: 'Lighthouse Performance Goal',
      }
    },

    'marketing-growth': {
      id: 'marketing-growth',
      title: 'Marketing & Growth',
      tagline: 'Search engine optimization, paid advertising, and conversion optimization to drive measurable revenue.',
      badge: 'REVENUE-DRIVEN GROWTH',
      columns: [
        {
          title: 'Search & Organic Growth',
          items: [
            { label: 'Search Engine Optimization (SEO)', href: '/services/seo', desc: 'Rank higher on Google and capture organic demand', icon: SearchCheck, tag: 'CORE' },
            { label: 'AI Search Optimization (GEO/AEO)', href: '/services/ai-search-optimization', desc: 'Citations across ChatGPT, Perplexity & AI Overviews', icon: Sparkles, tag: 'CORE' },
            { label: 'Technical SEO', href: '/services/technical-seo', desc: 'Core Web Vitals, crawl budget & schema graphs', icon: Code2, tag: 'HIGH' },
            { label: 'Content Marketing', href: '/services/content-marketing', desc: 'Keyword-targeted articles, guides & pillar content', icon: FileText, tag: 'HIGH' },
          ]
        },
        {
          title: 'Paid Media & Conversion',
          items: [
            { label: 'Google Ads Management', href: '/services/google-ads', desc: 'Search, Shopping, and YouTube paid campaigns', icon: Target, tag: 'CORE' },
            { label: 'Meta Ads Management', href: '/services/meta-ads', desc: 'Facebook & Instagram creative and conversion ads', icon: Megaphone, tag: 'CORE' },
            { label: 'Social Media Marketing', href: '/services/social-media-marketing', desc: 'Multi-channel social strategy & paid audience targeting', icon: Share2, tag: 'STANDARD' },
            { label: 'Conversion Rate Optimization (CRO)', href: '/services/conversion-rate-optimization', desc: 'A/B testing and checkout friction elimination', icon: TrendingUp, tag: 'HIGH' },
          ]
        }
      ],
      featured: {
        badge: 'FREE AUDIT',
        title: 'Free SEO & AI Search Audit',
        desc: 'Scan your domain for search visibility, AI engine citation readiness, and technical health in 60s.',
        href: '/tools/seo-auditor',
        buttonText: 'Run Domain Audit',
        statNumber: '360°',
        statLabel: 'Full-Funnel Measurement',
      }
    },

    'design-creative': {
      id: 'design-creative',
      title: 'Design & Creative',
      tagline: 'Brand identity design, video editing, motion graphics, 3D renders, and user interface systems.',
      badge: 'STUDIO-GRADE CREATIVE',
      columns: [
        {
          title: 'Branding & UI/UX Design',
          items: [
            { label: 'Branding & Identity Design', href: '/services/branding', desc: 'Logos, color palettes, brand guidelines & voice', icon: Palette, tag: 'CORE' },
            { label: 'UI/UX Design', href: '/services/ui-ux-design', desc: 'User journey maps, Figma design systems & prototypes', icon: Layout, tag: 'CORE' },
            { label: 'Logo Design', href: '/services/logo-design', desc: 'Distinctive brand marks and scalable SVG asset packages', icon: PenTool, tag: 'STANDARD' },
            { label: 'Graphic Design', href: '/services/graphic-design', desc: 'Marketing collateral, pitch decks & digital graphics', icon: Layers, tag: 'STANDARD' },
          ]
        },
        {
          title: 'Video & Motion Production',
          items: [
            { label: 'Video Editing & Post-Production', href: '/services/video-editing', desc: 'DaVinci color grading, pacing, audio & captions', icon: Film, tag: 'CORE' },
            { label: 'YouTube Video Editing', href: '/services/youtube-video-editing', desc: 'Retention-optimized YouTube long-form & Shorts', icon: Video, tag: 'HIGH' },
            { label: 'Motion Graphics & Animation', href: '/services/motion-graphics', desc: 'Kinetic typography, 2D explainers & Lottie animations', icon: Sparkles, tag: 'HIGH' },
            { label: '3D Modeling & Rendering', href: '/services/3d-modeling', desc: 'Photorealistic CGI product renders & animations', icon: Box, tag: 'HIGH' },
          ]
        }
      ],
      featured: {
        badge: 'CASE STUDIES',
        title: 'Featured Creative Portfolio',
        desc: 'Explore our studio post-production, 3D CGI product renders, and UI/UX systems across high-growth brands.',
        href: '/case-studies',
        buttonText: 'View Work & Reel',
        statNumber: '100%',
        statLabel: 'Tailored Brand Assets',
      }
    },

    'ai-automation': {
      id: 'ai-automation',
      title: 'AI & Automation',
      tagline: 'Custom AI agents, enterprise workflow automation, RAG pipelines, and intelligent data integration.',
      badge: 'INTELLIGENT SYSTEMS',
      columns: [
        {
          title: 'AI Solutions & Agents',
          items: [
            { label: 'AI Agent Development', href: '/services/ai-agent-development', desc: 'Autonomous multi-step agents with tool-calling', icon: Bot, tag: 'CORE' },
            { label: 'AI Chatbot Development', href: '/services/ai-chatbot-development', desc: '24/7 intelligent customer service & sales bots', icon: Zap, tag: 'HIGH' },
            { label: 'Enterprise RAG Systems', href: '/services/rag-development', desc: 'Semantic search over private company documents', icon: Database, tag: 'HIGH' },
            { label: 'Web Scraping Automation', href: '/services/web-scraping-automation', desc: 'Automated data extraction and structured pipelines', icon: ShieldCheck, tag: 'STANDARD' },
          ]
        },
        {
          title: 'Workflows & Integration',
          items: [
            { label: 'Workflow Automation', href: '/services/workflow-automation', desc: 'Connect apps and eliminate repetitive manual tasks', icon: Workflow, tag: 'CORE' },
            { label: 'CRM Setup & Management', href: '/services/crm-setup-management', desc: 'HubSpot, Salesforce, and pipeline automations', icon: Users, tag: 'HIGH' },
            { label: 'Data Engineering & Pipelines', href: '/services/data-engineering', desc: 'ETL pipelines, data warehousing & modeling', icon: Database, tag: 'HIGH' },
            { label: 'Cloud Infrastructure & DevOps', href: '/services/cloud-infrastructure-devops', desc: 'AWS/GCP cloud setup, CI/CD, and monitoring', icon: Cloud, tag: 'HIGH' },
          ]
        }
      ],
      featured: {
        badge: 'TECHNICAL GUIDE',
        title: 'Enterprise RAG Blueprint',
        desc: 'Read our engineering guide on deploying enterprise AI search, citation verification, and data governance.',
        href: '/guides/enterprise-rag-architecture-blueprint',
        buttonText: 'Read RAG Blueprint',
        statNumber: '24/7',
        statLabel: 'Autonomous Execution',
      }
    },

    'content-sales': {
      id: 'content-sales',
      title: 'Content & Sales',
      tagline: 'Strategic copywriting, B2B lead generation, cold email infrastructure, and digital PR.',
      badge: 'PIPELINE GENERATION',
      columns: [
        {
          title: 'Content & Messaging',
          items: [
            { label: 'Copywriting & Editorial', href: '/services/copywriting', desc: 'High-converting sales copy, website copy & scripts', icon: FileText, tag: 'CORE' },
            { label: 'Content Marketing Strategy', href: '/services/content-marketing', desc: 'High-intent search articles & customer education', icon: BookOpen, tag: 'CORE' },
            { label: 'Digital PR & Authority Building', href: '/services/digital-pr', desc: 'Editorial mentions, brand features & authoritative links', icon: Share2, tag: 'HIGH' },
            { label: 'Email Marketing', href: '/services/email-marketing', desc: 'Klaviyo automated flows, newsletters & retention', icon: MailCheck, tag: 'CORE' },
          ]
        },
        {
          title: 'Sales & Outbound',
          items: [
            { label: 'B2B Lead Generation', href: '/services/lead-generation', desc: 'Targeted account lists and verified sales prospects', icon: Target, tag: 'CORE' },
            { label: 'CRM Setup & Pipelines', href: '/services/crm-setup-management', desc: 'HubSpot sales stages and automated lead routing', icon: Users, tag: 'HIGH' },
            { label: 'B2B Revenue Blueprint', href: '/solutions/scale-b2b-lead-engine', desc: 'Turnkey multichannel outbound and search pipeline', icon: Rocket, tag: 'SOLUTION' },
            { label: 'Conversion Optimization', href: '/services/conversion-rate-optimization', desc: 'Sales funnel optimization and lead capture forms', icon: TrendingUp, tag: 'HIGH' },
          ]
        }
      ],
      featured: {
        badge: 'STRATEGY SESSION',
        title: 'Book a 30-Min Strategy Call',
        desc: 'Discuss your growth roadmap, architecture, or creative sprints directly with our senior team.',
        href: 'https://calendly.com/vishal-invokeiq/30min',
        buttonText: 'Book 30-Min Call',
        statNumber: '30 Min',
        statLabel: 'Direct Consultation',
      }
    },

    'more-services': {
      id: 'more-services',
      title: 'More Specialized Disciplines',
      tagline: 'Deep analytics, enterprise security, compliance audits, and specialized emerging technologies.',
      badge: 'SPECIALIZED EXPERTISE',
      columns: [
        {
          title: 'Data & Analytics',
          items: [
            { label: 'Data Analytics & Dashboards', href: '/services/data-analytics', desc: 'Executive KPI reporting and business intelligence', icon: BarChart3, tag: 'HIGH' },
            { label: 'Data Engineering & ETL', href: '/services/data-engineering', desc: 'Data warehouse architecture with BigQuery & Snowflake', icon: Database, tag: 'HIGH' },
            { label: 'Web Scraping Automation', href: '/services/web-scraping-automation', desc: 'Automated catalog extraction and market monitoring', icon: ShieldCheck, tag: 'STANDARD' },
          ]
        },
        {
          title: 'Infrastructure & Specialized Tech',
          items: [
            { label: 'Cloud Infrastructure & DevOps', href: '/services/cloud-infrastructure-devops', desc: 'AWS/GCP architecture, Docker, and CI/CD pipelines', icon: Cloud, tag: 'HIGH' },
            { label: 'Cybersecurity Audits', href: '/services/cybersecurity-audits', desc: 'Vulnerability assessment, code review & compliance', icon: Lock, tag: 'SPECIALIZED' },
            { label: 'QA Software Testing', href: '/services/qa-software-testing', desc: 'Automated test suites, regression & load testing', icon: CheckCircle2, tag: 'STANDARD' },
            { label: 'Web Accessibility (ADA/WCAG)', href: '/services/web-accessibility', desc: 'WCAG 2.2 AA audit and code remediation', icon: ShieldCheck, tag: 'STANDARD' },
          ]
        }
      ],
      featured: {
        badge: 'ALL DISCIPLINES',
        title: 'Complete Services Directory',
        desc: 'Browse our full catalog of digital agency services organized across web, marketing, design, AI, and data.',
        href: '/services',
        buttonText: 'View All Services',
        statNumber: `${canonicalServices.length}+`,
        statLabel: 'Full Agency Offerings',
      }
    },

    'company': {
      id: 'company',
      title: 'About Explode Labs & Resources',
      tagline: 'An anti-agency digital studio delivering transparent milestone sprints, commercial video, and high-performance web engineering.',
      badge: 'STUDIO & RESOURCES',
      columns: [
        {
          title: 'Company & Culture',
          items: [
            { label: 'About Explode Labs', href: '/about', desc: 'Our anti-agency mission, leadership team & story', icon: Users, tag: 'FOUNDATION' },
            { label: 'Our Delivery Process', href: '/process', desc: 'Agile 2-week milestone sprints with zero agency bloat', icon: Workflow, tag: 'CORE' },
            { label: 'Case Studies & Results', href: '/case-studies', desc: 'In-depth revenue growth & engineering outcomes', icon: Rocket, tag: 'VERIFIED' },
            { label: 'Client Work & Portfolio', href: '/portfolio', desc: 'Visual gallery of live websites, apps & video cuts', icon: Layout, tag: 'PORTFOLIO' },
            { label: 'Security & IP Standards', href: '/security', desc: '100% code ownership, mutual NDAs & compliance', icon: ShieldCheck, tag: 'ASSURED' },
          ]
        },
        {
          title: 'Resources & Insights',
          items: [
            { label: 'Engineering & Growth Blog', href: '/blog', desc: 'Actionable teardowns, playbooks & studio insights', icon: BookOpen, tag: 'NEW' },
            { label: 'Strategic Guides & Playbooks', href: '/guides', desc: 'In-depth architectural blueprints and cost guides', icon: FileText, tag: 'GUIDE' },
            { label: 'Instant SEO/AEO Scanner', href: '/tools/seo-auditor', desc: 'Free 60-second domain entity diagnostic scan', icon: SearchCheck, tag: 'FREE' },
            { label: 'AI Project Architect', href: '/architect', desc: 'Interactive scope & stack diagnosis in natural language', icon: Bot, tag: 'AI' },
          ]
        }
      ],
      featured: {
        badge: 'STRATEGY SESSION',
        title: 'Book a 30-Min Strategy Call',
        desc: 'Schedule a direct 1-on-1 discovery call with Vishal Raghuwanshi and our senior studio team.',
        href: 'https://calendly.com/vishal-invokeiq/30min',
        buttonText: 'Book 30-Min Call',
        statNumber: '30 Min',
        statLabel: 'Direct Consultation',
      }
    }
  };

  const navLinks = [
    { key: 'web-ecommerce', label: 'Web & E-commerce' },
    { key: 'marketing-growth', label: 'Marketing & Growth' },
    { key: 'design-creative', label: 'Design & Creative' },
    { key: 'ai-automation', label: 'AI & Automation' },
    { key: 'content-sales', label: 'Content & Sales' },
    { key: 'more-services', label: 'More' },
    { key: 'company', label: 'Company' },
  ];

  const currentMenu = activeDropdown ? megaMenus[activeDropdown] : null;

  return (
    <>
      <header 
        className="sticky top-0 z-40 w-full border-b border-[#181818] bg-[#080808]/95 backdrop-blur-xl transition-all"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo with Custom Vector Starburst Mark */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <ExplodeLogo size={28} />
            <span className="font-bold tracking-tight text-[15px] text-[#f5f5f0] flex items-center gap-1">
              EXPLODE<span className="text-[#8e8e93] font-normal">LABS</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map(({ key, label }) => {
              const isOpen = activeDropdown === key;

              return (
                <button 
                  key={key}
                  type="button"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                  className={`flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium tracking-tight transition-all rounded-lg cursor-pointer ${
                    isOpen 
                       ? 'text-[#ff5500] bg-[#141414] shadow-[0_0_15px_rgba(255,85,0,0.15)] border border-[#ff5500]/20' 
                      : 'text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#111111] border border-transparent'
                  }`}
                >
                  <span>{label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#ff5500]' : 'text-[#5c5c60]'}`} />
                </button>
              );
            })}
          </nav>

          {/* Action Area: Book Call & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Primary Action CTA */}
            <Button href="/contact" size="sm" variant="primary" withArrow>
              Get a Proposal
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#8e8e93] hover:text-[#f5f5f0] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* FULL-WIDTH LUXURY MEGA DROPDOWN (Edge-to-Edge Spanning Canvas) */}
        {currentMenu && (
          <div 
            className="absolute top-full left-0 w-full bg-[#090909]/98 backdrop-blur-3xl border-b border-[#222222] shadow-[0_40px_100px_rgba(0,0,0,0.95)] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            onMouseEnter={() => handleMouseEnter(currentMenu.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
              
              {/* Main 12-Column Grid */}
              <div className="grid grid-cols-12 gap-8 items-stretch">
                
                {/* COLUMN 1 (3 Cols): Category Identity & Quick Switcher Rail */}
                <div className="col-span-3 pr-6 border-r border-[#181818] flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#141414] border border-[#222] text-[#ff5500] text-xs font-medium mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentMenu.badge}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#f5f5f0] tracking-tight mb-2">
                      {currentMenu.title}
                    </h3>

                    <p className="text-xs text-[#8e8e93] leading-relaxed mb-6">
                      {currentMenu.tagline}
                    </p>

                    {/* Quick Switcher across other categories */}
                    <div className="space-y-1.5 pt-4 border-t border-[#181818]">
                      <div className="text-xs font-semibold text-[#5c5c60] mb-2">
                        Explore Categories
                      </div>
                      {navLinks.map(({ key, label }) => {
                        const isCurrent = currentMenu.id === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setActiveDropdown(key)}
                            onMouseEnter={() => setActiveDropdown(key)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                              isCurrent 
                                ? 'bg-[#141414] text-[#ff5500] font-semibold border border-[#ff5500]/20' 
                                : 'text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#111111]'
                            }`}
                          >
                            <span>{label}</span>
                            {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]"></span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#181818] mt-6">
                    <Link 
                      href="/services" 
                      className="text-xs font-medium text-[#ff5500] hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <span>Explore all services directory</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* COLUMN 2 & 3 (6 Cols): 2 Semantic Columns of High-Density Service Cards */}
                <div className="col-span-6 grid grid-cols-2 gap-6">
                  {currentMenu.columns.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-xs uppercase tracking-wide text-[#71717a] font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]"></span>
                        <span>{col.title}</span>
                      </div>

                      <div className="space-y-1.5">
                        {col.items.map((item, i) => {
                          const IconComponent = item.icon;
                          return (
                            <Link 
                              key={i} 
                              href={item.href} 
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#121212] border border-transparent hover:border-[#222222] transition-all"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222222] group-hover:border-[#ff5500]/40 group-hover:bg-[#ff5500]/10 flex items-center justify-center text-[#8e8e93] group-hover:text-[#ff5500] transition-all shrink-0 mt-0.5 shadow-sm">
                                <IconComponent className="w-4 h-4" />
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-semibold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors flex items-center justify-between gap-1.5">
                                  <span className="truncate">{item.label}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 text-[#ff5500] transition-all shrink-0" />
                                </div>
                                <div className="text-[11px] text-[#71717a] group-hover:text-[#8e8e93] transition-colors leading-tight line-clamp-1 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* COLUMN 4 (3 Cols): Featured Conversion Card / Interactive Tool Showcase */}
                <div className="col-span-3 pl-6 border-l border-[#181818] flex flex-col justify-between">
                  <div className="p-5 bg-[#121212] border border-[#222222] rounded-2xl flex flex-col justify-between h-full shadow-lg relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] text-[#ff5500] font-semibold uppercase tracking-wide bg-[#ff5500]/10 px-2 py-0.5 rounded border border-[#ff5500]/25">
                          {currentMenu.featured.badge}
                        </span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-[#f5f5f0] leading-none">{currentMenu.featured.statNumber}</div>
                          <div className="text-[10px] text-[#71717a] mt-0.5">{currentMenu.featured.statLabel}</div>
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-[#f5f5f0] mb-2 leading-snug">
                        {currentMenu.featured.title}
                      </h4>

                      <p className="text-xs text-[#8e8e93] leading-relaxed mb-4">
                        {currentMenu.featured.desc}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <Button 
                        href={currentMenu.featured.href} 
                        size="sm" 
                        variant="primary" 
                        className="w-full text-xs py-2 shadow-md" 
                        withArrow
                      >
                        {currentMenu.featured.buttonText}
                      </Button>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-[#71717a]">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Milestone delivery • Zero rigid lock-in</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM UTILITY FOOTER STRIP */}
              <div className="mt-6 pt-4 border-t border-[#181818] flex items-center justify-between text-xs text-[#71717a]">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-[#5c5c60] text-[11px] uppercase font-semibold">Quick Tools:</span>
                  <Link href="/tools/seo-auditor" className="hover:text-[#ff5500] transition-colors flex items-center gap-1 font-mono text-[11px]">
                    <SearchCheck className="w-3 h-3 text-[#ff5500]" />
                    <span>Free SEO Auditor</span>
                  </Link>
                  <span className="text-[#262626]">•</span>
                  <Link href="/tools/project-estimator" className="hover:text-[#ff5500] transition-colors flex items-center gap-1 font-mono text-[11px]">
                    <Sliders className="w-3 h-3 text-[#ff5500]" />
                    <span>Scope Estimator</span>
                  </Link>
                  <span className="text-[#262626]">•</span>
                  <Link href="/architect" className="hover:text-[#ff5500] transition-colors flex items-center gap-1 font-mono text-[11px]">
                    <Bot className="w-3 h-3 text-[#ff5500]" />
                    <span>AI Project Architect</span>
                  </Link>
                  <span className="text-[#262626]">•</span>
                  <Link href="/guides/the-complete-b2b-seo-aeo-playbook" className="hover:text-[#ff5500] transition-colors flex items-center gap-1 font-mono text-[11px]">
                    <BookOpen className="w-3 h-3 text-[#ff5500]" />
                    <span>2026 SEO Playbook</span>
                  </Link>
                </div>

                <Link href="/case-studies" className="text-[11px] font-mono text-[#8e8e93] hover:text-[#ff5500] transition-colors flex items-center gap-1">
                  <span>Explore verified client case studies</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* Backdrop Overlay when Mega Dropdown is active */}
        {currentMenu && (
          <div 
            className="fixed inset-0 top-[64px] bg-black/65 backdrop-blur-[2px] z-30 transition-opacity"
            onClick={() => setActiveDropdown(null)}
          />
        )}

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-b border-[#1f1f1f] bg-[#0c0c0c] px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase text-[#71717a] font-semibold">Service Categories</div>
              
              <div className="space-y-2">
                <Link href="/services/website-development" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Code2 className="w-4 h-4 text-[#ff5500]" />
                  <span>Web & E-commerce (Websites, Shopify, SaaS)</span>
                </Link>
                <Link href="/services/seo" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <SearchCheck className="w-4 h-4 text-[#ff5500]" />
                  <span>Marketing & Growth (SEO, Google Ads, Meta Ads)</span>
                </Link>
                <Link href="/services/video-editing" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Film className="w-4 h-4 text-[#ff5500]" />
                  <span>Design & Creative (Video, 3D CGI, Branding, UI/UX)</span>
                </Link>
                <Link href="/services/ai-agent-development" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Bot className="w-4 h-4 text-[#ff5500]" />
                  <span>AI & Automation (AI Agents, Workflows, RAG)</span>
                </Link>
                <Link href="/services/copywriting" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <FileText className="w-4 h-4 text-[#ff5500]" />
                  <span>Content & Sales (Lead Gen, Copywriting, Email)</span>
                </Link>
              </div>
            </div>

            <div className="pt-2 border-t border-[#181818] flex flex-col gap-1 text-sm">
              <Link href="/blog" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5 flex items-center justify-between">
                <span>Blog & Insights</span>
                <span className="text-[10px] font-mono text-[#ff5500] bg-[#ff5500]/10 px-2 py-0.5 rounded">NEW</span>
              </Link>
              <Link href="/case-studies" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">Work & Case Studies</Link>
              <Link href="/about" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">About Explode Labs</Link>
              <Link href="/process" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">Delivery Process & Sprints</Link>
              <Link href="/guides" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">Strategic Guides & Playbooks</Link>
              <Link href="/tools/seo-auditor" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">Free SEO Scanner</Link>
            </div>

            <div className="pt-3 border-t border-[#181818] space-y-2">
              <Button href="https://calendly.com/vishal-invokeiq/30min" variant="primary" size="md" className="w-full text-center" withArrow>
                Book 30-Min Strategy Call
              </Button>
              <Button href="/contact" variant="outline" size="sm" className="w-full text-center">
                Send Project Inquiry
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global Cmd+K Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
