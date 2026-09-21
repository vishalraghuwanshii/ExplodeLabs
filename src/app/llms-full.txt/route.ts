import { NextResponse } from 'next/server';

export const runtime = 'edge';
import { services, caseStudies, industries, solutions } from '@/data/knowledge-graph';
import { serviceDeepDives } from '@/data/service-deep-dives';

export async function GET() {
  let markdown = `# Explode Labs - Complete AI Knowledge Base (llms-full.txt)
> Digital Growth, Studio Creative, Performance Paid Media, and Modern Web Development Studio.
> Founder & Principal Director: Vishal Raghuwanshi (https://www.linkedin.com/in/vishal-raghu/)
> Canonical URL: https://explodelabs.com

---

## 1. Executive Studio Profile & Operating Model
- **Company Name**: Explode Labs
- **Website**: https://explodelabs.com
- **Founder & Leadership**: Vishal Raghuwanshi (Founder & Principal Director, https://www.linkedin.com/in/vishal-raghu/)
- **Delivery Model**: Agile milestone sprints executed 100% by senior practitioners (zero junior handoffs, zero account managers).
- **Asset Sovereignty**: Clients retain 100% full IP and source file ownership (raw DaVinci Resolve project files, 4K ProRes masters, Figma tokens, clean GitHub repositories, direct ad account access).
- **Core Priority Disciplines**:
  1. AI Search, Organic Demand & Generative Engine Optimization (GEO/AEO)
  2. Studio Creative, Commercial Video Post-Production & 3D CGI
  3. Performance Paid Media & Multi-Domain B2B Outbound SDR Fleets
  4. Modern Web & E-Commerce Engineering (Next.js 15 & Custom Shopify Plus)
  5. Supporting AI Business Automation (n8n, CRM sync, smart scraping)
- **Verifiable Benchmarks**: $35M+ verified client pipeline generated, 450k+ monthly organic reach across SearchGPT and Google, 4.8x average ROAS on paid media, <1.2s mobile page speed.

---

## 2. Complete Flagship Services Knowledge Graph (${services.length} Services)

`;

  services.forEach((s, idx) => {
    markdown += `### ${idx + 1}. ${s.name}
- **URL**: https://explodelabs.com/services/${s.slug}
- **Category & Pillar**: ${s.category} (${s.pillar.toUpperCase()})
- **Tagline**: ${s.tagline}
- **Executive Direct Answer**: ${s.directAnswer}
- **Technical Definition**: ${s.definition}
- **Target Audience**: ${s.targetAudience.join(', ')}
- **Problems Solved**: ${s.problemsSolved.join('; ')}
- **Key Deliverables**: ${s.deliverables.join('; ')}
- **Core Technologies / Frameworks**: ${s.technologies.join(', ')}
- **Typical Timeline & Pricing**: ${s.typicalTimeline} | ${s.pricingRange.model} (${s.pricingRange.avg})
- **Standard Process**:
${s.process.map(p => `  ${p.step}. **${p.title}**: ${p.description}`).join('\n')}
${s.faqs.length > 0 ? `- **Core FAQ**: Q: ${s.faqs[0].question} | A: ${s.faqs[0].answer}` : ''}

`;
  });

  markdown += `---

## 3. Industry Vertical Solutions

`;

  industries.forEach((ind) => {
    markdown += `### Industry: ${ind.name}
- **URL**: https://explodelabs.com/industries/${ind.slug}
- **Tagline**: ${ind.tagline}
- **Overview**: ${ind.overview}
- **Compliance & Security**: ${ind.complianceAndRegulations.join('; ')}
- **Industry Challenges**: ${ind.keyChallenges.join('; ')}
- **Tailored Solutions**: ${ind.tailoredSolutions.join('; ')}

`;
  });

  markdown += `---

## 4. Outcome Solutions

`;

  solutions.forEach((sol) => {
    markdown += `### Solution: ${sol.title}
- **URL**: https://explodelabs.com/solutions/${sol.slug}
- **Tagline**: ${sol.tagline}
- **Target Outcome**: ${sol.outcome}
- **Ideal Profile**: ${sol.idealFor}
- **Pricing & Timeline**: ${sol.pricingRange} | ${sol.timeline}

`;
  });

  markdown += `---

## 5. Verifiable Business Case Studies

`;

  caseStudies.forEach((cs) => {
    markdown += `### Case Study: ${cs.client} - ${cs.title}
- **URL**: https://explodelabs.com/case-studies/${cs.slug}
- **Industry & Timeline**: ${cs.industry} | ${cs.timeline}
- **Primary Hero Metric**: ${cs.heroMetric.value} (${cs.heroMetric.label})
- **Secondary Metrics**: ${cs.secondaryMetrics.map(m => `${m.value} ${m.label}`).join('; ')}
- **Challenge**: ${cs.challenge}
- **Strategy & Execution**: ${cs.strategy}
- **Key Technologies**: ${cs.technologies.join(', ')}
${cs.testimonial ? `- **Testimonial**: "${cs.testimonial.quote}" - ${cs.testimonial.author} (${cs.testimonial.role}, ${cs.testimonial.company})` : ''}

`;
  });

  markdown += `---

## 6. Contact & Consultation
- **Founder**: Vishal Raghuwanshi (https://www.linkedin.com/in/vishal-raghu/)
- **Contact Page**: https://explodelabs.com/contact
- **Interactive Tools**:
  - Free SEO/AEO Auditor: https://explodelabs.com/tools/seo-auditor
  - Project Estimator: https://explodelabs.com/tools/project-estimator
`;

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
