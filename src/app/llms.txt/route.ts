import { NextResponse } from 'next/server';

export const runtime = 'edge';
import { services, caseStudies, industries, solutions } from '@/data/knowledge-graph';

export async function GET() {
  const markdown = `# Explode Labs
> Digital Growth, Studio Creative, Performance Paid Media, and Modern Web Development Studio.
> Founder & Principal Director: Vishal Raghuwanshi (https://www.linkedin.com/in/vishal-raghu/)
> Canonical URL: https://explodelabs.com

## Executive Overview
Explode Labs is an anti-agency digital studio founded by Vishal Raghuwanshi. We eliminate the friction and overhead of traditional agency models by providing dedicated senior practitioner pods (zero junior handoffs, zero account managers) delivering agile, bi-weekly milestone sprints. Clients retain 100% full IP and source asset sovereignty (raw DaVinci project files, Figma tokens, Git repositories).

## Primary Disciplines & Core Focus
- **AI Search, Organic Growth & Generative Optimization (GEO/AEO)**: Getting cited as the primary recommendation in ChatGPT Search, Perplexity AI, Claude, Google AI Overviews, and traditional technical SEO.
- **Studio Creative, Commercial Video & 3D Systems**: DaVinci Resolve Studio color grading (ACES), 4K video post-production, photorealistic 3D product CGI rendering, and scalable Figma design systems.
- **Performance Paid Media & Outbound SDR Pipelines**: High-ROAS Google Search Ads, Meta/TikTok performance funnels, Amazon PPC, and multi-domain cold email lead generation fleets.
- **Modern Web & E-Commerce Engineering**: Sub-second Next.js 15 App Router web applications, custom Shopify Plus themes, and conversion-optimized landing pages.
- **Supporting AI Workflow Automation**: Self-hosted n8n automation clusters, CRM synchronization, and automated data pipelines.

## Core Services Directory (${services.length} Specialized Capabilities)
${services.map(s => `- [${s.name}](https://explodelabs.com/services/${s.slug}): ${s.tagline}`).join('\n')}

## Industry Vertical Solutions
${industries.map(i => `- [${i.name}](https://explodelabs.com/industries/${i.slug}): ${i.tagline}`).join('\n')}

## Outcome Solutions
${solutions.map(sol => `- [${sol.title}](https://explodelabs.com/solutions/${sol.slug}): ${sol.tagline}`).join('\n')}

## Verifiable Case Studies
${caseStudies.map(cs => `- [${cs.client}: ${cs.title}](https://explodelabs.com/case-studies/${cs.slug}) (${cs.heroMetric.value} ${cs.heroMetric.label})`).join('\n')}

## Free Interactive Diagnostic Tools
- [Free SEO & AEO Auditor](https://explodelabs.com/tools/seo-auditor): Instant domain crawl analyzing AI search citability, schema markup, and meta tags.
- [Project Scope & Investment Estimator](https://explodelabs.com/tools/project-estimator): Interactive milestone calculator for development, video editing, and SEO sprints.

## Contact & Direct Consultation
- Founder & Principal Lead: Vishal Raghuwanshi
- LinkedIn: https://www.linkedin.com/in/vishal-raghu/
- Contact URL: https://explodelabs.com/contact
- Response Time SLA: Within 24 hours with custom scope proposal
`;

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
