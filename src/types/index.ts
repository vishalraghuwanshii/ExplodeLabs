export type PillarType = 'build' | 'grow' | 'automate' | 'create';
export type ServicePriority = 'CORE' | 'HIGH' | 'STANDARD' | 'SPECIALIZED';
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
  tagline: string;
  shortDescription?: string;
  longDescription?: string;
  directAnswer: string;
  definition: string;
  targetAudience: string[];
  problemsSolved: string[];
  deliverables: string[];
  technologies: string[];
  platforms?: string[];
  industries?: string[];
  aliases?: string[];
  searchIntent?: string;
  secondaryIntents?: string[];
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
  relatedServiceSlugs: string[];
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
  idealFor: string;
  problems: string[];
  bundledServiceSlugs: string[];
  deliverables: string[];
  technologies: string[];
  pricingRange: string;
  timeline: string;
  caseStudySlug: string;
  framework: {
    phase: string;
    duration: string;
    summary: string;
  }[];
}

export interface IndustryEntity {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  complianceAndRegulations: string[];
  keyChallenges: string[];
  tailoredSolutions: string[];
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
  takeaways: string[];
  sections: {
    title: string;
    content: string;
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
