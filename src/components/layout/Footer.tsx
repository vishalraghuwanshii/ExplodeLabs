import React from 'react';
import Link from 'next/link';
import { ExplodeLogo } from '@/components/ui/ExplodeLogo';
import { 
  Sparkles, 
  SearchCheck, 
  Sliders, 
  Bot, 
  BookOpen, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Layers, 
  ArrowRight,
  Code2,
  Film,
  Target,
  MailCheck,
  Zap,
  Lock,
  Workflow,
  TrendingUp,
  Award
} from 'lucide-react';

export function Footer() {
  const seoLinks = [
    { label: 'Generative Engine Opt (GEO/AEO)', href: '/services/chatgpt-and-perplexity-ai-seo' },
    { label: 'Technical & Programmatic SEO', href: '/services/technical-and-programmatic-seo' },
    { label: 'Local & Franchise SEO', href: '/services/local-and-franchise-seo' },
    { label: 'Ecommerce & Shopify Plus SEO', href: '/services/ecommerce-and-shopify-seo' },
    { label: 'Digital PR & Authority Backlinks', href: '/services/digital-pr-and-authority-link-building' },
    { label: 'Conversion Rate Optimization (CRO)', href: '/services/conversion-rate-optimization-cro' },
    { label: 'Technical Copywriting & Teardowns', href: '/services/technical-copywriting-and-editorial' },
    { label: 'Online Reputation Management (ORM)', href: '/services/online-reputation-management-and-reviews' },
  ];

  const paidMediaLinks = [
    { label: 'High-Performance Google Ads PPC', href: '/services/high-performance-paid-advertising' },
    { label: 'Social Media Advertising (Meta/TikTok)', href: '/services/social-media-advertising' },
    { label: 'Amazon & Marketplace Marketing', href: '/services/amazon-and-marketplace-marketing' },
    { label: 'Programmatic & Connected TV (CTV)', href: '/services/programmatic-and-connected-tv-advertising' },
    { label: 'B2B Outbound SDR Lead Engines', href: '/services/b2b-outbound-sdr-and-lead-generation' },
    { label: 'Lifecycle & Cold Email Infrastructure', href: '/services/lifecycle-and-cold-email-infrastructure' },
    { label: 'Account-Based Marketing (ABM)', href: '/services/account-based-marketing-abm' },
    { label: 'Influencer & Creator Whitelisting', href: '/services/influencer-and-creator-marketing' },
  ];

  const creativeLinks = [
    { label: 'Video Editing & Post-Production', href: '/services/video-editing-and-post-production' },
    { label: 'Motion Graphics & Visual Effects (VFX)', href: '/services/motion-graphics-and-visual-effects' },
    { label: '3D Product Rendering & CGI Modeling', href: '/services/3d-product-modeling-and-rendering' },
    { label: 'UI/UX Design & Design Systems', href: '/services/ui-ux-design-and-design-systems' },
    { label: 'Brand Identity & Visual Architecture', href: '/services/brand-identity-and-visual-systems' },
    { label: 'Drone & Commercial 4K FPV Media', href: '/services/drone-and-commercial-media-production' },
  ];

  const engineeringLinks = [
    { label: 'Custom Web Apps (Next.js 15 / React 19)', href: '/services/custom-web-application-development' },
    { label: 'Enterprise SaaS MVP Architecture', href: '/services/enterprise-saas-architecture' },
    { label: 'Headless Shopify Plus & Hydrogen', href: '/services/headless-ecommerce-and-shopify-plus' },
    { label: 'ADA Web Accessibility (WCAG 2.2 AA)', href: '/services/ada-web-accessibility-and-compliance' },
    { label: 'iOS & Android Apps (React Native)', href: '/services/ios-and-android-mobile-apps' },
    { label: 'Cloud Architecture & DevOps CI/CD', href: '/services/devops-cloud-and-cicd-infrastructure' },
    { label: 'Legacy Monolith Modernization', href: '/services/legacy-system-migration-and-refactoring' },
    { label: 'Cybersecurity & Penetration Audits', href: '/services/cybersecurity-compliance-audits' },
  ];

  const aiAutomationLinks = [
    { label: 'Custom AI Agents & LangGraph', href: '/services/custom-ai-agents-and-llm-pipelines' },
    { label: 'Vector Search & Enterprise RAG', href: '/services/vector-search-and-rag-architecture' },
    { label: 'Enterprise Workflow Automation (n8n)', href: '/services/enterprise-workflow-automation' },
    { label: 'Modern Data Stack (Snowflake/dbt)', href: '/services/modern-data-stack-and-warehousing' },
    { label: 'Web Scraping & Data Extraction', href: '/services/web-scraping-and-data-pipelines' },
  ];

  const solutionsAndToolsLinks = [
    { label: 'Scale B2B SaaS Lead Engine', href: '/solutions/scale-b2b-lead-engine' },
    { label: 'Launch E-Commerce Brand', href: '/solutions/launch-an-ecommerce-brand' },
    { label: 'Build an AI Product MVP', href: '/solutions/build-an-ai-product' },
    { label: 'Launch a B2B SaaS Platform', href: '/solutions/launch-a-b2b-saas' },
    { label: 'Free Instant SEO & AI Scanner', href: '/tools/seo-auditor' },
    { label: 'Project Scope Estimator', href: '/tools/project-estimator' },
    { label: 'AI Project Architect Intake', href: '/architect' },
    { label: 'The 2026 B2B SEO Playbook', href: '/guides/the-complete-b2b-seo-aeo-playbook' },
    { label: 'Enterprise RAG Blueprint', href: '/guides/enterprise-rag-architecture-blueprint' },
    { label: 'Verified Client Case Studies', href: '/case-studies' },
  ];

  return (
    <footer className="border-t border-[#181818] bg-[#060606] text-[#8e8e93] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* TOP BRAND & CAPABILITIES MANIFESTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#181818] items-center">
          <div className="lg:col-span-7 space-y-3">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              <ExplodeLogo size={30} />
              <span className="font-bold tracking-tight text-lg text-[#f5f5f0] flex items-center gap-1">
                EXPLODE<span className="text-[#8e8e93] font-normal">LABS</span>
              </span>
            </Link>
            
            <p className="text-sm text-[#8e8e93] leading-relaxed max-w-2xl">
              Explode Labs is a full-service digital growth, performance marketing, creative media, and web engineering agency. We scale organic search visibility, produce high-impact commercial video, and build high-converting web applications for modern brands.
            </p>
          </div>

          {/* Direct Proposal CTA Box */}
          <div className="lg:col-span-5 p-5 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-[#f5f5f0]">
                Ready to scale your digital presence?
              </div>
              <p className="text-xs text-[#71717a] mt-0.5">
                Receive a custom growth plan and milestone estimate within 24 hours.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-semibold shadow-md transition-all shrink-0 cursor-pointer"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6-COLUMN COMPREHENSIVE SEO & GEO SITEMAP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-[#181818]">
          
          {/* Column 1: AI Search & Organic Growth */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#f5f5f0] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>AI Search & SEO</span>
            </div>
            <ul className="space-y-2.5">
              {seoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#8e8e93] hover:text-[#ff5500] transition-colors block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Paid Media & Outbound */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#f5f5f0] font-bold">
              <Target className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Paid Ads & SDR</span>
            </div>
            <ul className="space-y-2.5">
              {paidMediaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#8e8e93] hover:text-[#ff5500] transition-colors block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Creative Media & Video */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#f5f5f0] font-bold">
              <Film className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Creative & Video</span>
            </div>
            <ul className="space-y-2.5">
              {creativeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#8e8e93] hover:text-[#ff5500] transition-colors block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Engineering & Web */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#f5f5f0] font-bold">
              <Code2 className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Web & Software</span>
            </div>
            <ul className="space-y-2.5">
              {engineeringLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#8e8e93] hover:text-[#ff5500] transition-colors block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: AI & Automation */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#f5f5f0] font-bold">
              <Bot className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>AI & Automation</span>
            </div>
            <ul className="space-y-2.5">
              {aiAutomationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#8e8e93] hover:text-[#ff5500] transition-colors block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Solutions, Tools & Playbooks */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#f5f5f0] font-bold">
              <Sliders className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Tools & Solutions</span>
            </div>
            <ul className="space-y-2.5">
              {solutionsAndToolsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#8e8e93] hover:text-[#ff5500] transition-colors block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* AGENCY SUMMARY & QUICK TOOLS */}
        <div className="py-8 border-b border-[#181818] grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-xs">
          <div className="md:col-span-8 space-y-1.5">
            <div className="text-xs font-semibold text-[#f5f5f0]">
              About Explode Labs
            </div>
            <p className="text-[#71717a] leading-relaxed">
              Explode Labs is a full-service digital agency delivering organic search optimization (SEO & GEO), performance paid media (Google Ads & Meta), commercial video editing, 3D CGI product rendering, and custom Next.js web development. We operate on transparent milestone deliverables with full intellectual property transfer.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
            <Link
              href="/tools/seo-auditor"
              className="px-3 py-1.5 bg-[#101010] hover:bg-[#161616] border border-[#222] hover:border-[#333] rounded-lg text-xs text-[#8e8e93] hover:text-[#f5f5f0] transition-colors inline-flex items-center gap-1.5"
            >
              <SearchCheck className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>SEO Audit Scanner</span>
            </Link>
            <Link
              href="/tools/project-estimator"
              className="px-3 py-1.5 bg-[#101010] hover:bg-[#161616] border border-[#222] hover:border-[#333] rounded-lg text-xs text-[#8e8e93] hover:text-[#f5f5f0] transition-colors inline-flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Project Estimator</span>
            </Link>
            <Link
              href="/case-studies"
              className="px-3 py-1.5 bg-[#101010] hover:bg-[#161616] border border-[#222] hover:border-[#333] rounded-lg text-xs text-[#8e8e93] hover:text-[#f5f5f0] transition-colors inline-flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Case Studies</span>
            </Link>
          </div>
        </div>

        {/* BOTTOM UTILITY, LEGAL & SITEMAP DIRECTIVES */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5c5c60]">
          <p>© {new Date().getFullYear()} Explode Labs Inc. All rights reserved. Built for sub-second performance.</p>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px]">
            <Link href="/privacy" className="hover:text-[#a1a1aa] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#a1a1aa] transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-[#a1a1aa] transition-colors">Security Standards</Link>
            <Link href="/about" className="hover:text-[#a1a1aa] transition-colors">About</Link>
            <Link href="/process" className="hover:text-[#a1a1aa] transition-colors">Process</Link>
            <Link href="/contact" className="hover:text-[#a1a1aa] transition-colors">Contact</Link>
            <Link href="/llms.txt" className="hover:text-[#ff5500] transition-colors">llms.txt</Link>
            <Link href="/sitemap.xml" className="hover:text-[#ff5500] transition-colors">Sitemap XML</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

