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
  TrendingUp, 
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
  Award
} from 'lucide-react';
import { SearchModal } from './SearchModal';

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
    seo: {
      id: 'seo',
      title: 'AI Search & SEO',
      tagline: 'Capture high-intent organic demand across Google, SearchGPT, Perplexity & AI Overviews.',
      badge: 'AEO & LLM SEARCH READY',
      columns: [
        {
          title: 'Search Engine Optimization (SEO)',
          items: [
            { label: 'Generative Engine Opt (GEO/AEO)', href: '/services/chatgpt-and-perplexity-ai-seo', desc: 'Rank in SearchGPT, Perplexity & Google AI Overviews', icon: Sparkles, tag: 'AEO' },
            { label: 'Technical & Programmatic SEO', href: '/services/technical-and-programmatic-seo', desc: 'Database-driven scale with Next.js ISR & Schema graphs', icon: Code2, tag: 'HOT' },
            { label: 'Local & Franchise SEO', href: '/services/local-and-franchise-seo', desc: 'Multi-location map packs & Google Business Profile ops', icon: Globe, tag: 'LOCAL' },
            { label: 'Technical SEO Audits & Health', href: '/tools/seo-auditor', desc: 'Crawl budget, Core Web Vitals & indexation health', icon: SearchCheck, tag: 'TOOL' },
          ]
        },
        {
          title: 'Content, Digital PR & Authority',
          items: [
            { label: 'Digital PR & Authority Link Building', href: '/services/digital-pr-and-authority-link-building', desc: 'Tier-1 press mentions, DR 75+ backlinks & media tours', icon: Share2, tag: 'PR' },
            { label: 'Technical & Conversion Copywriting', href: '/services/technical-copywriting-and-editorial', desc: 'Authority whitepapers, teardowns & high-intent copy', icon: FileText },
            { label: 'Enterprise SEO Playbook', href: '/guides/the-complete-b2b-seo-aeo-playbook', desc: 'Comprehensive organic pipeline execution blueprint', icon: BookOpen, tag: 'GUIDE' },
            { label: 'Conversion Rate Optimization (CRO)', href: '/services/conversion-rate-optimization-cro', desc: 'Friction reduction & A/B testing on organic funnels', icon: BarChart3, tag: 'CRO' },
          ]
        }
      ],
      featured: {
        badge: 'FREE AUDIT TOOL',
        title: 'Instant SEO & AI Citation Scanner',
        desc: 'Scan your domain for Generative Engine citations, Schema health, and Core Web Vitals in 60s.',
        href: '/tools/seo-auditor',
        buttonText: 'Run Free Audit',
        statNumber: '+340%',
        statLabel: 'Avg Organic Traffic Surge',
      }
    },

    creative: {
      id: 'creative',
      title: 'Creative, Video & Design',
      tagline: 'Studio-grade video post-production, 3D CGI product renders, and conversion-first UI/UX design systems.',
      badge: 'DAVINCI ACES & 3D PIPELINE',
      columns: [
        {
          title: 'Video & Motion Production',
          items: [
            { label: 'Video Editing & Post-Production', href: '/services/video-editing-and-post-production', desc: 'DaVinci Resolve ACES color, pacing & sound design', icon: Film, tag: 'HOT' },
            { label: 'Motion Graphics & Visual Effects', href: '/services/motion-graphics-and-visual-effects', desc: 'Kinetic typography, 2D/3D explainers & Lottie animations', icon: Sparkles, tag: 'VFX' },
            { label: '3D Product Rendering & CGI', href: '/services/3d-product-modeling-and-rendering', desc: 'Photorealistic CAD visualization & interactive 3D viewers', icon: Box, tag: 'CGI' },
            { label: 'Drone & Commercial Video Sprints', href: '/services/drone-and-commercial-media-production', desc: 'High-velocity 4K FPV cinematic commercial captures', icon: Smartphone, tag: '4K' },
          ]
        },
        {
          title: 'Brand, UI/UX & Digital Design',
          items: [
            { label: 'UI/UX & Design Systems', href: '/services/ui-ux-design-and-design-systems', desc: 'Atomic design tokens, Figma libraries & WCAG AAA', icon: Layout, tag: 'FIGMA' },
            { label: 'Brand Identity & Visual Systems', href: '/services/brand-identity-and-visual-systems', desc: 'Corporate visual systems, typography & styleguides', icon: Palette, tag: 'BRAND' },
            { label: 'High-Converting Ad Creatives', href: '/services/high-performance-paid-advertising', desc: 'Iterative UGC, video hooks & Meta ad variations', icon: Megaphone },
            { label: 'Landing Page & Funnel Design', href: '/services/conversion-rate-optimization-cro', desc: 'High-converting responsive layouts engineered for CRO', icon: Layers, tag: 'CRO' },
          ]
        }
      ],
      featured: {
        badge: 'PORTFOLIO REEL',
        title: 'Cinematic Work & Creative Case Studies',
        desc: 'Explore how our DaVinci post-production and 3D modeling pipelines elevated high-growth brands.',
        href: '/case-studies',
        buttonText: 'View Creative Reel',
        statNumber: '10M+',
        statLabel: 'Video Views Generated',
      }
    },

    ads: {
      id: 'ads',
      title: 'Paid Media & Outbound',
      tagline: 'High-ROAS paid ad management, cold email domain fleets, and B2B SDR lead generation engines.',
      badge: 'PROVEN REVENUE PIPELINES',
      columns: [
        {
          title: 'Performance Paid Advertising (PPC)',
          items: [
            { label: 'High-Performance Paid Ads (PPC)', href: '/services/high-performance-paid-advertising', desc: 'Google Search, YouTube & Meta CAPI campaign management', icon: Target, tag: 'PPC' },
            { label: 'Amazon & Marketplace Marketing', href: '/services/amazon-and-marketplace-marketing', desc: 'Amazon PPC, DSP ads, A+ content & Walmart scaling', icon: ShoppingBag, tag: 'HOT' },
            { label: 'Social Media Advertising', href: '/services/social-media-advertising', desc: 'Hyper-targeted Meta, LinkedIn & TikTok ad scaling', icon: Megaphone, tag: 'ADS' },
            { label: 'Influencer & Creator Marketing', href: '/services/influencer-and-creator-marketing', desc: 'Performance creator whitelisting & sponsor networks', icon: Share2 },
          ]
        },
        {
          title: 'B2B Outbound & Lead Engines',
          items: [
            { label: 'B2B Outbound SDR & Lead Gen', href: '/services/b2b-outbound-sdr-and-lead-generation', desc: 'Secondary domains, SPF/DMARC & Clay waterfall enrichment', icon: MailCheck, tag: 'B2B' },
            { label: 'Lifecycle & Cold Email Infrastructure', href: '/services/lifecycle-and-cold-email-infrastructure', desc: 'Automated inbox warmup pools & 99% inbox placement', icon: Inbox, tag: 'EMAIL' },
            { label: 'B2B SaaS Lead Engine Solution', href: '/solutions/scale-b2b-lead-engine', desc: 'Turnkey outbound SDR & paid pipeline acquisition machine', icon: Rocket, tag: 'HOT' },
            { label: 'Conversion Rate Optimization (CRO)', href: '/services/conversion-rate-optimization-cro', desc: 'Landing page A/B testing & friction reduction', icon: TrendingUp },
          ]
        }
      ],
      featured: {
        badge: 'COST ESTIMATOR',
        title: 'Milestone Scope & Cost Estimator',
        desc: 'Calculate estimated project milestones and timelines with zero rigid price locks.',
        href: '/tools/project-estimator',
        buttonText: 'Estimate Project',
        statNumber: '4.8x',
        statLabel: 'Avg Paid Media ROAS',
      }
    },

    web: {
      id: 'web',
      title: 'Web Design & Development',
      tagline: 'Sub-second Next.js web applications, headless Shopify Plus, and high-converting websites.',
      badge: 'NEXT.JS 15 & SHOPIFY PLUS',
      columns: [
        {
          title: 'Custom Web & Software Development',
          items: [
            { label: 'Custom Web App Development', href: '/services/custom-web-application-development', desc: 'Next.js 15, React 19, TypeScript & PostgreSQL', icon: Code2, tag: 'NEXT.JS' },
            { label: 'Enterprise SaaS Architecture', href: '/services/enterprise-saas-architecture', desc: 'Multi-tenant apps, Stripe billing & Postgres RLS', icon: Server, tag: 'SAAS' },
            { label: 'ADA Web Accessibility & WCAG', href: '/services/ada-web-accessibility-and-compliance', desc: 'WCAG 2.2 AA/AAA audits, screen reader fixes & VPAT 2.5', icon: ShieldCheck, tag: 'ADA' },
            { label: 'iOS & Android Mobile App Engineering', href: '/services/ios-and-android-mobile-apps', desc: 'Cross-platform React Native & Expo applications', icon: Smartphone, tag: 'APPS' },
          ]
        },
        {
          title: 'E-Commerce & Modern Web',
          items: [
            { label: 'Headless E-Commerce & Shopify Plus', href: '/services/headless-ecommerce-and-shopify-plus', desc: 'Shopify Storefront API GraphQL & custom Hydrogen', icon: ShoppingBag, tag: 'HOT' },
            { label: 'DevOps, Cloud Architecture & CI/CD', href: '/services/devops-cloud-and-cicd-infrastructure', desc: 'Terraform, AWS, Cloudflare Workers & Docker', icon: Cloud, tag: 'CLOUD' },
            { label: 'Legacy Migration & Refactoring', href: '/services/legacy-system-migration-and-refactoring', desc: 'Modernize monoliths to edge-rendered Next.js', icon: RefreshCw },
            { label: 'Sub-Second Landing Pages', href: '/services/custom-web-application-development', desc: 'Ultra-fast conversion funnels with 100/100 Lighthouse', icon: Layout, tag: 'CRO' },
          ]
        }
      ],
      featured: {
        badge: 'INTERACTIVE INTAKE',
        title: 'Scope with AI Project Architect',
        desc: 'Describe your vision to our AI Architect to generate an instant engineering blueprint.',
        href: '/architect',
        buttonText: 'Open AI Architect',
        statNumber: '100/100',
        statLabel: 'Lighthouse Performance',
      }
    },

    automation: {
      id: 'automation',
      title: 'AI, Automation & Data',
      tagline: 'Custom AI agents, enterprise workflow automation (n8n/Make), and real-time revenue analytics.',
      badge: 'LANGGRAPH & MODERN DATA STACK',
      columns: [
        {
          title: 'Artificial Intelligence & Agents',
          items: [
            { label: 'Custom AI Agents & LLM Pipelines', href: '/services/custom-ai-agents-and-llm-pipelines', desc: 'LangGraph, Model Context Protocol (MCP) & tools', icon: Bot, tag: 'HOT' },
            { label: 'Vector Search & Enterprise RAG', href: '/services/vector-search-and-rag-architecture', desc: 'pgvector, Qdrant hybrid search & zero hallucination', icon: Database, tag: 'RAG' },
            { label: 'Enterprise RAG Architecture Guide', href: '/guides/enterprise-rag-architecture-blueprint', desc: 'Technical blueprint for enterprise doc search', icon: BookOpen, tag: 'GUIDE' },
            { label: 'AI Model Fine-Tuning & Quantization', href: '/services/ai-model-fine-tuning-and-quantization', desc: 'Custom domain models & private VPC deployment', icon: Zap },
          ]
        },
        {
          title: 'Automation & Business Intelligence',
          items: [
            { label: 'Enterprise Workflow Automation', href: '/services/enterprise-workflow-automation', desc: 'Self-hosted n8n, Make & bidirectional CRM sync', icon: Workflow, tag: 'N8N' },
            { label: 'Modern Data Stack & Warehousing', href: '/services/modern-data-stack-and-warehousing', desc: 'Snowflake, BigQuery, dbt & data modeling', icon: Database, tag: 'DATA' },
            { label: 'Real-Time Dashboards & Analytics', href: '/services/business-intelligence-and-dashboards', desc: 'Looker, Metabase & executive KPI dashboards', icon: BarChart3 },
            { label: 'Web Scraping & Data Pipelines', href: '/services/web-scraping-and-data-pipelines', desc: 'Automated extraction & lead enrichment pipelines', icon: ShieldCheck },
          ]
        }
      ],
      featured: {
        badge: 'CONSULTATION',
        title: 'Talk to a Senior Solutions Architect',
        desc: 'Schedule a technical discovery session with our senior engineers and growth directors.',
        href: '/contact',
        buttonText: 'Book Discovery Call',
        statNumber: '80%',
        statLabel: 'Operational Cost Reduction',
      }
    }
  };

  const navLinks = [
    { key: 'seo', label: 'AI Search & SEO' },
    { key: 'creative', label: 'Creative & Video' },
    { key: 'ads', label: 'Paid Ads & Outbound' },
    { key: 'web', label: 'Web & Development' },
    { key: 'automation', label: 'AI & Automation' },
  ];

  const currentMenu = activeDropdown ? megaMenus[activeDropdown] : null;

  return (
    <>
      <header 
        className="sticky top-0 z-40 w-full border-b border-[#181818] bg-[#080808]/95 backdrop-blur-xl transition-all"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo with Custom Vector Starburst Mark */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <ExplodeLogo size={30} />
            <span className="font-bold tracking-tight text-lg text-[#f5f5f0] flex items-center gap-1">
              EXPLODE<span className="text-[#8e8e93] font-normal">LABS</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map(({ key, label }) => {
              const isOpen = activeDropdown === key;

              return (
                <button 
                  key={key}
                  type="button"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-all rounded-lg cursor-pointer ${
                    isOpen 
                      ? 'text-[#ff5500] bg-[#141414] shadow-[0_0_15px_rgba(255,85,0,0.15)] border border-[#ff5500]/20' 
                      : 'text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#111111] border border-transparent'
                  }`}
                >
                  <span>{label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#ff5500]' : 'text-[#5c5c60]'}`} />
                </button>
              );
            })}

            {/* Direct Work Link */}
            <Link 
              href="/case-studies" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="px-3.5 py-2 text-sm font-medium text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#111111] rounded-lg transition-colors"
            >
              Work
            </Link>
            {/* Direct About Link */}
            <Link 
              href="/about" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="px-3.5 py-2 text-sm font-medium text-[#8e8e93] hover:text-[#f5f5f0] hover:bg-[#111111] rounded-lg transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Action Area: Minimalist Search Icon & Get a Proposal Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Minimalist Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 flex items-center justify-center text-[#8e8e93] hover:text-[#f5f5f0] bg-[#121212] hover:bg-[#181818] border border-[#222222] hover:border-[#333333] rounded-lg transition-all cursor-pointer group"
              title="Search knowledge graph (Cmd+K)"
              aria-label="Search knowledge graph"
            >
              <Search className="w-4 h-4 text-[#8e8e93] group-hover:text-[#ff5500] transition-colors" />
            </button>

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
                
                {/* COLUMN 1 (3 Cols): Pillar Identity & Quick Switcher Rail */}
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

                    {/* Quick Switcher across other pillars */}
                    <div className="space-y-1.5 pt-4 border-t border-[#181818]">
                      <div className="text-xs font-semibold text-[#5c5c60] mb-2">
                        Explore Disciplines
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
                      <span>Explore all 35 services</span>
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
                        <span>Zero rigid lock-in contracts</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM UTILITY FOOTER STRIP */}
              <div className="mt-6 pt-4 border-t border-[#181818] flex items-center justify-between text-xs text-[#71717a]">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-[#5c5c60] text-[11px] uppercase font-semibold">Fast Resources:</span>
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
                    <span>2026 B2B SEO Playbook</span>
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
            className="fixed inset-0 top-[72px] bg-black/65 backdrop-blur-[2px] z-30 transition-opacity"
            onClick={() => setActiveDropdown(null)}
          />
        )}

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-b border-[#1f1f1f] bg-[#0c0c0c] px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase text-[#71717a] font-semibold">Core Disciplines</div>
              
              <div className="space-y-2">
                <Link href="/services/chatgpt-and-perplexity-ai-seo" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Sparkles className="w-4 h-4 text-[#ff5500]" />
                  <span>AI Search & SEO (GEO/AEO, Technical SEO)</span>
                </Link>
                <Link href="/services/video-editing-and-post-production" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Film className="w-4 h-4 text-[#ff5500]" />
                  <span>Creative & Video (DaVinci Editing, 3D CGI, UI/UX)</span>
                </Link>
                <Link href="/services/high-performance-paid-advertising" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Target className="w-4 h-4 text-[#ff5500]" />
                  <span>Paid Ads & Outbound (Google Ads, Meta, Cold SDR)</span>
                </Link>
                <Link href="/services/custom-web-application-development" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Code2 className="w-4 h-4 text-[#ff5500]" />
                  <span>Web & E-Commerce (Next.js 15, Shopify Plus)</span>
                </Link>
                <Link href="/services/custom-ai-agents-and-llm-pipelines" className="flex items-center gap-2 p-2.5 bg-[#121212] border border-[#222] rounded-xl text-xs text-[#f5f5f0]">
                  <Bot className="w-4 h-4 text-[#ff5500]" />
                  <span>AI & Automation (LangGraph, n8n, Data Stack)</span>
                </Link>
              </div>
            </div>

            <div className="pt-2 border-t border-[#181818] flex flex-col gap-1 text-sm">
              <Link href="/services" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">All 35 Services</Link>
              <Link href="/case-studies" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">Work & Case Studies</Link>
              <Link href="/tools/seo-auditor" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">Free SEO Scanner</Link>
              <Link href="/tools/project-estimator" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">Cost Estimator</Link>
              <Link href="/about" className="text-[#f5f5f0] hover:text-[#ff5500] py-1.5">About Explode Labs</Link>
            </div>

            <div className="pt-3 border-t border-[#181818]">
              <Button href="/contact" variant="primary" size="md" className="w-full text-center">
                Get Free Custom Proposal
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

