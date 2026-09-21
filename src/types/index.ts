export type PillarType = 'build' | 'grow' | 'automate' | 'create';
export type ServicePriority = 'CORE' | 'HIGH' | 'STANDARD' | 'SPECIALIZED';
export type PageType = 'PRIMARY_SERVICE' | 'SUB_SERVICE' | 'CAPABILITY' | 'TECHNOLOGY' | 'PLATFORM';
export type Indexability = 'INDEX' | 'NOINDEX' | 'REGISTRY_ONLY';

export type ServiceCategory = 
  | 'Web & E-commerce' 
  | 'Marketing & Growth' 
  | 'Design & Creative' 
  | 'AI & Automation' 
  | 'Content & Sales' 
  | 'Data & Analytics' 
  | 'Specialized Technology';

export interface ServiceEntity {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory | string;
  subCategory?: string;
  pillar: PillarType;
  priority: ServicePriority;
  pageType: PageType;
  indexability: Indexability;
  tagline: string;
  shortDescription?: string;
  longDescription?: string;
  directAnswer: string;
  definition: string;
  targetAudience: string[];
  problemsSolved: string[];
  deliverables: string[];
  subServices?: string[];
  capabilities?: string[];
  technologies: string[];
  platforms?: string[];
  industries?: string[];
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  primaryIntent?: string;
  secondaryIntents?: string[];
  aliases?: string[];
  parentServiceSlug?: string;
  childServiceSlugs?: string[];
  relatedServiceSlugs: string[];
  complementaryServiceSlugs?: string[];
  alternativeServiceSlugs?: string[];
  pricingRange: {
    min: string;
    avg: string;
    model: string;
  };
  typicalTimeline: string;
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  caseStudySlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  indexable?: boolean;
  status?: 'published' | 'draft';
}

export interface SolutionEntity {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  outcome: string;
  executiveSummary?: string;
  whyThisBundleMatters?: string;
  idealFor: string;
  problems: string[];
  bundledServiceSlugs: string[];
  deliverables: string[];
  deliverablesMatrix?: {
    category: string;
    items: string[];
    standards: string;
  }[];
  technologies: string[];
  pricingRange: string;
  timeline: string;
  caseStudySlug: string;
  framework: {
    phase: string;
    duration: string;
    summary: string;
    deliverables?: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface IndustryEntity {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  executiveSummary?: string;
  complianceAndRegulations: string[];
  keyChallenges: string[];
  tailoredSolutions: string[];
  whoWeHelp?: {
    role: string;
    focus: string;
    painPoint: string;
  }[];
  fiveStageRoadmap?: {
    phase: string;
    title: string;
    duration: string;
    summary: string;
    deliverables: string[];
  }[];
  comparisonMatrix?: {
    capability: string;
    legacyAgency: string;
    explodeLabs: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  recommendedServiceSlugs: string[];
  caseStudySlugs: string[];
  benchmarkMetrics: {
    label: string;
    value: string;
    context: string;
  }[];
}

export interface CaseStudyEntity {
  id: string;
  slug: string;
  client: string;
  industry: string;
  serviceSlugs: string[];
  title: string;
  tagline: string;
  heroMetric: {
    value: string;
    label: string;
  };
  secondaryMetrics: {
    value: string;
    label: string;
  }[];
  challenge: string;
  strategy: string;
  architectureDetails: string[];
  execution: string[];
  deliverables: string[];
  technologies: string[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ToolEntity {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  relatedServiceSlugs: string[];
}

export interface GuideEntity {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  executiveTakeaway?: string;
  takeaways: string[];
  sections: {
    title: string;
    content: string;
    keyPoints?: string[];
    calloutBox?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedServiceSlugs: string[];
}

export interface ProjectBrief {
  id: string;
  projectName: string;
  industry: string;
  primaryPillar: PillarType;
  recommendedServices: string[];
  suggestedStack: string[];
  keyDeliverables: string[];
  estimatedTimeline: string;
  estimatedBudgetRange: string;
  complexityScore: 'Low' | 'Medium' | 'High' | 'Enterprise';
  dependencies: string[];
  suggestedNextSteps: string[];
  summary: string;
}
