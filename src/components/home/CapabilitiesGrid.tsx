import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { 
  Search, 
  Video, 
  TrendingUp, 
  Layout, 
  Bot, 
  ArrowRight 
} from 'lucide-react';

export function CapabilitiesGrid() {
  const categories = [
    { 
      title: 'AI Search & SEO', 
      icon: Search,
      desc: 'Generative engine optimization (GEO), programmatic SEO, and high-intent organic ranking.',
      links: [
        { name: 'Generative Engine Optimization (GEO/AEO)', href: '/services/generative-engine-optimization-aeo' },
        { name: 'Technical & Programmatic SEO', href: '/services/technical-and-programmatic-seo' },
        { name: 'Technical & Conversion Copywriting', href: '/services/technical-copywriting-and-editorial' },
        { name: 'Conversion Rate Optimization (CRO)', href: '/services/conversion-rate-optimization-cro' },
      ],
      hubHref: '/services'
    },
    { 
      title: 'Creative, Video & 3D', 
      icon: Video,
      desc: 'High-retention video editing, 3D CGI product renders, motion graphics, and UI/UX design systems.',
      links: [
        { name: 'Video Editing & Post-Production', href: '/services/video-editing-and-post-production' },
        { name: '3D Product Modeling & CGI', href: '/services/3d-product-modeling-and-rendering' },
        { name: 'Motion Graphics & Visual Effects', href: '/services/motion-graphics-and-visual-effects' },
        { name: 'UI/UX & Product Design Systems', href: '/services/ui-ux-design-and-design-systems' },
      ],
      hubHref: '/services'
    },
    { 
      title: 'Paid Media & Outbound', 
      icon: TrendingUp,
      desc: 'High-ROAS Google/Meta ads, cold email domain fleets, and B2B SDR meeting booking engines.',
      links: [
        { name: 'High-Performance Paid Ads (PPC)', href: '/services/high-performance-paid-advertising' },
        { name: 'B2B Outbound SDR & Lead Gen', href: '/services/b2b-outbound-sdr-and-lead-generation' },
        { name: 'Lifecycle & Cold Email Infrastructure', href: '/services/lifecycle-and-cold-email-infrastructure' },
        { name: 'Influencer & Creator Growth', href: '/services/influencer-and-creator-marketing' },
      ],
      hubHref: '/services'
    },
    { 
      title: 'Web & E-Commerce', 
      icon: Layout,
      desc: 'Sub-second Next.js web applications, headless Shopify Plus storefronts, and conversion-optimized funnels.',
      links: [
        { name: 'Custom Web Application Dev', href: '/services/custom-web-application-development' },
        { name: 'Headless E-Commerce & Shopify Plus', href: '/services/headless-ecommerce-and-shopify-plus' },
        { name: 'Enterprise SaaS Architecture', href: '/services/enterprise-saas-architecture' },
        { name: 'iOS & Android Mobile Apps', href: '/services/ios-and-android-mobile-apps' },
      ],
      hubHref: '/services'
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090909] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Full Service Spectrum"
          title="Growth, Creative, Web & Performance Execution."
          description="Every discipline is led by dedicated senior specialists with proven domain results. Zero junior handoffs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="p-6 bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#333333] transition-colors rounded-xl flex flex-col justify-between group">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-[#ff5500] mb-4 group-hover:border-[#ff5500]/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#71717a] leading-relaxed mb-4 pb-3 border-b border-[#1a1a1a]">
                    {cat.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {cat.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="text-xs text-[#a1a1aa] hover:text-[#f5f5f0] flex items-center justify-between group/link transition-colors py-1"
                        >
                          <span className="group-hover/link:text-[#ff5500] transition-colors">{link.name}</span>
                          <ArrowRight className="w-3 h-3 text-[#5c5c60] group-hover/link:text-[#ff5500] transition-colors shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-6 border-t border-[#181818]">
                  <Link
                    href={cat.hubHref}
                    className="text-xs font-medium text-[#8e8e93] hover:text-[#ff5500] flex items-center gap-1 transition-colors"
                  >
                    <span>Explore {cat.title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Automation & Data Stack Strip */}
        <div className="p-6 bg-[#0c0c0c] border border-[#1c1c1c] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-[#161616] border border-[#242424] flex items-center justify-center text-[#ff5500] shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#f5f5f0]">
                Looking for Custom AI Workflow Automation & Data Pipelines?
              </div>
              <div className="text-[11px] text-[#71717a]">
                We also engineer self-hosted n8n workflows, CRM data syncs, and custom scraping systems.
              </div>
            </div>
          </div>
          <Link
            href="/services/enterprise-workflow-automation"
            className="text-xs text-[#ff5500] hover:underline font-mono font-medium flex items-center gap-1 shrink-0"
          >
            <span>View Automation Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
