import {
  PhaseStep,
  ComparisonRow,
  ToolDecision,
  IndustryScenario,
  TechnicalFaq,
  ServiceDeepDive
} from './deep-dives/types';

import { pillar1DeepDives } from './deep-dives/pillar1-seo-organic';
import { pillar2DeepDives } from './deep-dives/pillar2-paid-media';
import { pillar3DeepDives } from './deep-dives/pillar3-creative-media';
import { pillar4DeepDives } from './deep-dives/pillar4-b2b-outbound';
import { pillar5DeepDives } from './deep-dives/pillar5-engineering-web';
import { pillar6DeepDives } from './deep-dives/pillar6-ai-automation';

export type {
  PhaseStep,
  ComparisonRow,
  ToolDecision,
  IndustryScenario,
  TechnicalFaq,
  ServiceDeepDive
};

export const serviceDeepDives: Record<string, ServiceDeepDive> = {
  ...pillar1DeepDives,
  ...pillar2DeepDives,
  ...pillar3DeepDives,
  ...pillar4DeepDives,
  ...pillar5DeepDives,
  ...pillar6DeepDives,
};

const deepDiveAliases: Record<string, string> = {
  // Pillar 1 Aliases (AI Search, Technical SEO, Local SEO, Digital PR, CRO)
  'generative-engine-optimization-aeo': 'chatgpt-and-perplexity-ai-seo',
  'chatgpt-and-perplexity-ai-seo': 'chatgpt-and-perplexity-ai-seo',
  'ai-seo-services': 'chatgpt-and-perplexity-ai-seo',
  'geo-services': 'chatgpt-and-perplexity-ai-seo',
  'aeo-services': 'chatgpt-and-perplexity-ai-seo',
  'technical-seo': 'technical-and-programmatic-seo',
  'technical-and-programmatic-seo': 'technical-and-programmatic-seo',
  'seo-audit-services': 'technical-and-programmatic-seo',
  'enterprise-seo-services': 'technical-and-programmatic-seo',
  'programmatic-seo-services': 'technical-and-programmatic-seo',
  'local-and-franchise-seo': 'local-and-franchise-seo',
  'local-seo-services': 'local-and-franchise-seo',
  'franchise-seo-services': 'local-and-franchise-seo',
  'ecommerce-and-shopify-seo': 'ecommerce-and-shopify-seo',
  'shopify-seo-services': 'ecommerce-and-shopify-seo',
  'ecommerce-seo-services': 'ecommerce-and-shopify-seo',
  'digital-pr-and-authority-link-building': 'digital-pr-and-authority-link-building',
  'digital-pr-reputation': 'digital-pr-and-authority-link-building',
  'link-building-services': 'digital-pr-and-authority-link-building',
  'conversion-rate-optimization-cro': 'conversion-rate-optimization-cro',
  'cro-services': 'conversion-rate-optimization-cro',
  'technical-copywriting-and-editorial': 'technical-copywriting-and-editorial',
  'website-copywriting-services': 'technical-copywriting-and-editorial',
  'content-strategy-copywriting': 'technical-copywriting-and-editorial',
  'content-marketing-strategy': 'technical-copywriting-and-editorial',
  'online-reputation-management-and-reviews': 'online-reputation-management-and-reviews',
  'orm-services': 'online-reputation-management-and-reviews',

  // Pillar 2 Aliases (Paid Media, Google Ads, Meta Ads, Amazon PPC, ABM, CTV)
  'high-performance-paid-advertising': 'high-performance-paid-advertising',
  'paid-advertising-ppc': 'high-performance-paid-advertising',
  'paid-performance-sem': 'high-performance-paid-advertising',
  'google-ads-management': 'high-performance-paid-advertising',
  'google-ads-agency': 'high-performance-paid-advertising',
  'ppc-management-services': 'high-performance-paid-advertising',
  'performance-marketing-agency': 'high-performance-paid-advertising',
  'social-media-advertising': 'social-media-advertising',
  'paid-social-ads': 'social-media-advertising',
  'meta-ads-agency': 'social-media-advertising',
  'facebook-ads-agency': 'social-media-advertising',
  'tiktok-ads-agency': 'social-media-advertising',
  'linkedin-ads-agency': 'social-media-advertising',
  'amazon-and-marketplace-marketing': 'amazon-and-marketplace-marketing',
  'amazon-ppc-services': 'amazon-and-marketplace-marketing',
  'amazon-dsp-agency': 'amazon-and-marketplace-marketing',
  'amazon-marketing-agency': 'amazon-and-marketplace-marketing',
  'walmart-marketplace-ads': 'amazon-and-marketplace-marketing',
  'programmatic-and-connected-tv-advertising': 'programmatic-and-connected-tv-advertising',
  'programmatic-ads': 'programmatic-and-connected-tv-advertising',
  'ctv-advertising-agency': 'programmatic-and-connected-tv-advertising',
  'ott-advertising-agency': 'programmatic-and-connected-tv-advertising',
  'account-based-marketing-abm': 'account-based-marketing-abm',
  'abm-services': 'account-based-marketing-abm',
  'account-based-marketing-agency': 'account-based-marketing-abm',
  'b2b-abm-strategy': 'account-based-marketing-abm',
  'influencer-and-creator-marketing': 'influencer-and-creator-marketing',
  'influencer-marketing': 'influencer-and-creator-marketing',
  'creator-marketing-agency': 'influencer-and-creator-marketing',
  'influencer-whitelisting-agency': 'influencer-and-creator-marketing',

  // Pillar 3 Aliases
  'video-editing-and-post-production': 'video-editing-and-post-production',
  'video-production-editing': 'video-editing-and-post-production',
  'motion-graphics-and-visual-effects': 'motion-graphics-and-visual-effects',
  'motion-graphics-vfx': 'motion-graphics-and-visual-effects',
  '3d-product-modeling-and-rendering': '3d-product-modeling-and-rendering',
  '3d-product-rendering': '3d-product-modeling-and-rendering',
  'ui-ux-design-and-design-systems': 'ui-ux-design-and-design-systems',
  'ui-ux-design-systems': 'ui-ux-design-and-design-systems',
  'brand-identity-and-visual-systems': 'brand-identity-and-visual-systems',
  'brand-identity-design': 'brand-identity-and-visual-systems',
  'drone-and-commercial-media-production': 'drone-and-commercial-media-production',
  'drone-video-services': 'drone-and-commercial-media-production',

  // Pillar 4 Aliases (B2B Outbound SDR, Cold Email Infrastructure)
  'b2b-outbound-sdr-and-lead-generation': 'b2b-outbound-sdr-and-lead-generation',
  'b2b-lead-generation-sdr': 'b2b-outbound-sdr-and-lead-generation',
  'cold-email-agency': 'b2b-outbound-sdr-and-lead-generation',
  'b2b-sdr-services': 'b2b-outbound-sdr-and-lead-generation',
  'appointment-setting-agency': 'b2b-outbound-sdr-and-lead-generation',
  'lifecycle-and-cold-email-infrastructure': 'lifecycle-and-cold-email-infrastructure',
  'email-marketing-automation': 'lifecycle-and-cold-email-infrastructure',
  'klaviyo-agency': 'lifecycle-and-cold-email-infrastructure',
  'email-deliverability-services': 'lifecycle-and-cold-email-infrastructure',

  // Pillar 5 Aliases
  'custom-web-application-development': 'custom-web-application-development',
  'react-nextjs-development': 'custom-web-application-development',
  'enterprise-saas-architecture': 'enterprise-saas-architecture',
  'saas-mvp-development': 'enterprise-saas-architecture',
  'headless-ecommerce-and-shopify-plus': 'headless-ecommerce-and-shopify-plus',
  'headless-shopify-development': 'headless-ecommerce-and-shopify-plus',
  'ada-web-accessibility-and-compliance': 'ada-web-accessibility-and-compliance',
  'ada-compliance-services': 'ada-web-accessibility-and-compliance',
  'ios-and-android-mobile-apps': 'ios-and-android-mobile-apps',
  'mobile-app-development': 'ios-and-android-mobile-apps',
  'devops-cloud-and-cicd-infrastructure': 'devops-cloud-and-cicd-infrastructure',
  'cloud-devops-consulting': 'devops-cloud-and-cicd-infrastructure',
  'legacy-system-migration-and-refactoring': 'legacy-system-migration-and-refactoring',
  'monolith-modernization': 'legacy-system-migration-and-refactoring',
  'cybersecurity-compliance-audits': 'cybersecurity-compliance-audits',
  'penetration-testing-services': 'cybersecurity-compliance-audits',

  // Pillar 6 Aliases
  'custom-ai-agents-and-llm-pipelines': 'custom-ai-agents-and-llm-pipelines',
  'generative-ai-agents': 'custom-ai-agents-and-llm-pipelines',
  'vector-search-and-rag-architecture': 'vector-search-and-rag-architecture',
  'enterprise-rag-architecture': 'vector-search-and-rag-architecture',
  'enterprise-workflow-automation': 'enterprise-workflow-automation',
  'n8n-workflow-automation': 'enterprise-workflow-automation',
  'modern-data-stack-and-warehousing': 'modern-data-stack-and-warehousing',
  'data-warehousing-bi': 'modern-data-stack-and-warehousing',
  'web-scraping-and-data-pipelines': 'web-scraping-and-data-pipelines',
  'enterprise-web-scraping': 'web-scraping-and-data-pipelines',
  'ai-model-fine-tuning-and-quantization': 'custom-ai-agents-and-llm-pipelines',
  'business-intelligence-and-dashboards': 'modern-data-stack-and-warehousing',
};

export function getDeepDiveForService(slug: string): ServiceDeepDive | undefined {
  if (serviceDeepDives[slug]) {
    return serviceDeepDives[slug];
  }
  const alias = deepDiveAliases[slug];
  if (alias && serviceDeepDives[alias]) {
    return serviceDeepDives[alias];
  }
  return undefined;
}
