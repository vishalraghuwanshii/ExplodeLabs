export interface PhaseStep {
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface ComparisonRow {
  metric: string;
  explodeLabs: string;
  traditionalAgency: string;
  inHouseHire: string;
  freelancers: string;
}

export interface ToolDecision {
  category: string;
  primaryChoice: string;
  alternatives: string;
  rationale: string;
}

export interface IndustryScenario {
  industry: string;
  challenge: string;
  architecture: string;
  impactMetric: string;
}

export interface TechnicalFaq {
  question: string;
  answer: string;
}

export interface ServiceDeepDive {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  aeoDefinition: string;
  executiveSummary: string;
  fiveStagePipeline: PhaseStep[];
  deliverablesMatrix: {
    category: string;
    items: string[];
    standards: string;
  }[];
  toolDecisionTree: ToolDecision[];
  comparisonMatrix: ComparisonRow[];
  industryScenarios: IndustryScenario[];
  detailedFaqs: TechnicalFaq[];
}
