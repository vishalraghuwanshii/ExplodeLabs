'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight, 
  Search, 
  Video, 
  TrendingUp, 
  Layout, 
  Bot, 
  Sparkles, 
  CheckCircle2,
  Sliders,
  Clock
} from 'lucide-react';

type GrowthPillar = 'seo' | 'creative' | 'paid' | 'web' | 'ai';

export function InteractiveDiscovery() {
  const [activePillar, setActivePillar] = useState<GrowthPillar>('seo');

  const pillars: Record<GrowthPillar, {
    label: string;
    icon: any;
    title: string;
    description: string;
    services: {
      name: string;
      slug: string;
      desc: string;
      timeline: string;
      tags: string[];
    }[];
  }> = {
    seo: {
      label: 'AI Search & SEO',
      icon: Search,
      title: 'Dominate Google, SearchGPT & Perplexity Citations',
      description: 'We engineer high-intent organic search authority, programmatic landing page clusters, and generative engine optimization to capture qualified buyers at scale.',
      services: [
        {
          name: 'Generative Engine Optimization (GEO/AEO)',
          slug: 'generative-engine-optimization-aeo',
          desc: 'Position your brand as the definitive cited source in ChatGPT, Perplexity, Claude, and Google AI Overviews.',
          timeline: 'Ongoing Growth Sprint',
          tags: ['Perplexity', 'SearchGPT', 'AI Overviews', 'Schema.org']
        },
        {
          name: 'Technical & Programmatic SEO',
          slug: 'technical-and-programmatic-seo',
          desc: 'Database-driven landing page platforms scaling thousands of high-intent search queries with sub-second speed.',
          timeline: '4 to 8 Weeks Setup',
          tags: ['Next.js ISR', 'PostgreSQL', 'Sitemaps', 'Lighthouse 100']
        },
        {
          name: 'Technical & Conversion Copywriting',
          slug: 'technical-copywriting-and-editorial',
          desc: 'Authority editorial, whitepapers, comparison teardowns, and high-converting landing page copy.',
          timeline: 'Weekly Sprints',
          tags: ['Long-Form Content', 'Conversion Copy', 'E-E-A-T']
        },
        {
          name: 'Conversion Rate Optimization (CRO)',
          slug: 'conversion-rate-optimization-cro',
          desc: 'Data-backed A/B testing, session recording analysis, and frictionless lead intake funnels.',
          timeline: 'Bi-Weekly Tests',
          tags: ['PostHog', 'A/B Testing', 'Friction Removal']
        }
      ]
    },

    creative: {
      label: 'Creative & Video',
      icon: Video,
      title: 'Cinematic Post-Production, 3D CGI & Design Systems',
      description: 'High-retention video editing, photorealistic 3D product CGI, motion graphics, and conversion-first UI/UX design that elevate your brand visual prestige.',
      services: [
        {
          name: 'Video Editing & Post-Production',
          slug: 'video-editing-and-post-production',
          desc: 'DaVinci Resolve studio color grading (ACES), mathematical pacing, sound design, and multi-format social delivery.',
          timeline: '3 to 5 Days Turnaround',
          tags: ['DaVinci Resolve', 'ACES Color', '-14 LUFS Audio', 'ProRes Masters']
        },
        {
          name: '3D Product Modeling & CGI',
          slug: '3d-product-modeling-and-rendering',
          desc: 'Photorealistic 3D product renders, CAD ingestion, and interactive WebGL 3D configurators.',
          timeline: '2 to 4 Weeks Delivery',
          tags: ['Blender', 'Unreal Engine 5', 'Three.js', 'PBR Textures']
        },
        {
          name: 'Motion Graphics & Visual Effects',
          slug: 'motion-graphics-and-visual-effects',
          desc: 'Kinetic typography, 2D/3D explainer videos, and lightweight Lottie/Spline animations for web.',
          timeline: '1 to 3 Weeks Sprint',
          tags: ['After Effects', 'Cinema 4D', 'Lottie', 'Spline 3D']
        },
        {
          name: 'UI/UX & Product Design Systems',
          slug: 'ui-ux-design-and-design-systems',
          desc: 'Atomic design tokens, comprehensive Figma libraries, and WCAG 2.2 AAA accessibility compliance.',
          timeline: '3 to 6 Weeks Sprints',
          tags: ['Figma', 'Design Tokens', 'Tailwind', 'WCAG AAA']
        }
      ]
    },

    paid: {
      label: 'Paid Media & Outbound',
      icon: TrendingUp,
      title: 'High-ROAS Ad Management & Cold Outbound Engines',
      description: 'Scale acquisition velocity with full-funnel Google/Meta ad management, secondary domain cold email fleets, and waterfall lead enrichment.',
      services: [
        {
          name: 'High-Performance Paid Ads (PPC)',
          slug: 'high-performance-paid-advertising',
          desc: 'Full-funnel Google Ads, YouTube campaigns, and Meta CAPI ad management targeting maximum commercial ROAS.',
          timeline: 'Monthly Management',
          tags: ['Google Ads', 'Meta CAPI', 'YouTube Ads', 'ROAS Optimization']
        },
        {
          name: 'B2B Outbound SDR & Lead Generation',
          slug: 'b2b-outbound-sdr-and-lead-generation',
          desc: 'Dedicated secondary domains, full SPF/DKIM/DMARC alignment, and 5-tier Clay waterfall data enrichment.',
          timeline: '2 Weeks Launch',
          tags: ['Smartlead', 'Clay.com', 'DMARC Enforcement', 'Verified ICP']
        },
        {
          name: 'Lifecycle & Cold Email Infrastructure',
          slug: 'lifecycle-and-cold-email-infrastructure',
          desc: 'Multi-inbox rotation, automated warmup pools, and spam filter recovery guaranteeing 99% inbox placement.',
          timeline: '1 to 2 Weeks Setup',
          tags: ['Google Workspace', 'Microsoft 365', 'ZeroBounce', 'Warmup']
        },
        {
          name: 'Influencer & Creator Growth',
          slug: 'influencer-and-creator-marketing',
          desc: 'Performance influencer discovery, whitelisting rights, and scalable creator sponsor networks.',
          timeline: 'Monthly Sprints',
          tags: ['Creator Outreach', 'Ad Whitelisting', 'Contract Negotiation']
        }
      ]
    },

    web: {
      label: 'Web & E-Commerce',
      icon: Layout,
      title: 'High-Converting Websites, Next.js & Shopify Plus',
      description: 'Modern, sub-second web platforms engineered with Next.js 15, React 19, and headless e-commerce architectures that turn visitors into paying customers.',
      services: [
        {
          name: 'Custom Web Application Development',
          slug: 'custom-web-application-development',
          desc: 'Full-stack Next.js App Router applications, PostgreSQL databases, and sub-1.2s Core Web Vitals.',
          timeline: '4 to 10 Weeks Sprints',
          tags: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL']
        },
        {
          name: 'Headless E-Commerce & Shopify Plus',
          slug: 'headless-ecommerce-and-shopify-plus',
          desc: 'Shopify Storefront API GraphQL, custom Hydrogen frontends, and sub-second checkout conversion rates.',
          timeline: '5 to 9 Weeks Delivery',
          tags: ['Shopify Plus', 'GraphQL', 'Next Commerce', 'Algolia']
        },
        {
          name: 'Enterprise SaaS Architecture',
          slug: 'enterprise-saas-architecture',
          desc: 'Multi-tenant architecture, Stripe subscription billing, auth, and automated tenant isolation.',
          timeline: '6 to 12 Weeks MVP',
          tags: ['Multi-Tenancy', 'Stripe Billing', 'Clerk Auth', 'Postgres RLS']
        },
        {
          name: 'iOS & Android Mobile App Engineering',
          slug: 'ios-and-android-mobile-apps',
          desc: 'Cross-platform React Native and Expo applications with biometric authentication and offline sync.',
          timeline: '8 to 14 Weeks Delivery',
          tags: ['React Native', 'Expo', 'Swift', 'Kotlin']
        }
      ]
    },

    ai: {
      label: 'AI & Automation',
      icon: Bot,
      title: 'Custom AI Agents, Workflow Automation & MarTech',
      description: 'Autonomous AI agent workflows (LangGraph / MCP), self-hosted n8n automation, and real-time revenue intelligence dashboards.',
      services: [
        {
          name: 'Custom AI Agents & Multi-Agent Workflows',
          slug: 'custom-ai-agents-and-llm-pipelines',
          desc: 'Autonomous multi-agent orchestration with LangGraph, Model Context Protocol (MCP), and hallucination guardrails.',
          timeline: '4 to 8 Weeks Sprints',
          tags: ['LangGraph', 'MCP Servers', 'Claude 3.5', 'Pydantic AI']
        },
        {
          name: 'Vector Search & Enterprise RAG',
          slug: 'vector-search-and-rag-architecture',
          desc: 'Hybrid vector search (Qdrant/pgvector) and Cohere Rerank models powering zero-hallucination knowledge bases.',
          timeline: '3 to 6 Weeks Setup',
          tags: ['pgvector', 'Qdrant', 'Cohere Rerank', 'Hybrid Search']
        },
        {
          name: 'Enterprise Workflow Automation',
          slug: 'enterprise-workflow-automation',
          desc: 'Self-hosted n8n and Make automation pipelines syncing CRM, billing, customer data, and ERP systems.',
          timeline: '2 to 4 Weeks Sprints',
          tags: ['n8n', 'Make.com', 'Webhooks', 'Bidirectional Sync']
        },
        {
          name: 'Real-Time Dashboards & Analytics',
          slug: 'business-intelligence-and-dashboards',
          desc: 'Modern data stack pipelines (Snowflake / BigQuery) powering executive revenue and CAC dashboards.',
          timeline: '3 to 5 Weeks Delivery',
          tags: ['BigQuery', 'Snowflake', 'Looker', 'dbt']
        }
      ]
    }
  };

  const current = pillars[activePillar];

  return (
    <section className="py-20 sm:py-28 bg-[#090909] border-b border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Service Matrix"
          title="Growth, Creative, Web & AI Capabilities."
          description="Select a core capability pillar to explore our specialized execution pods and deliverables."
        />

        {/* Pillar Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(Object.keys(pillars) as GrowthPillar[]).map((key) => {
            const p = pillars[key];
            const Icon = p.icon;
            const isActive = activePillar === key;
            return (
              <button
                key={key}
                onClick={() => setActivePillar(key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ff5500] text-black font-semibold shadow-lg shadow-[#ff5500]/25 scale-102'
                    : 'bg-[#121212] hover:bg-[#181818] text-[#8e8e93] hover:text-[#f5f5f0] border border-[#1e1e1e]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#ff5500]'}`} />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Details */}
        <div className="p-6 sm:p-8 bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl mb-8">
          <div className="max-w-3xl mb-8">
            <Badge variant="orange" className="mb-3">{current.label}</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0] mb-3">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-[#8e8e93] leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.services.map((s, idx) => (
              <Card key={idx} className="p-6 flex flex-col justify-between group hover:border-[#333333] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="text-base font-bold text-[#f5f5f0] group-hover:text-[#ff5500] transition-colors">
                      <Link href={`/services/${s.slug}`} className="flex items-center gap-1.5">
                        <span>{s.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#ff5500]" />
                      </Link>
                    </h4>
                    <span className="text-[11px] font-mono text-[#71717a] shrink-0 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#ff5500]" />
                      <span>{s.timeline}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-4">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#181818] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono text-[#a1a1aa] bg-[#141414] border border-[#222222] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/services/${s.slug}`} className="text-xs font-semibold text-[#ff5500] hover:underline flex items-center gap-1">
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Hub CTA */}
        <div className="text-center pt-4">
          <Button href="/services" variant="outline" size="md" withArrow>
            View All 30+ Specialized Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
}
