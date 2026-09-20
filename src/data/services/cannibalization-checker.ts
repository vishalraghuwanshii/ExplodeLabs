import { ServiceEntity } from '@/types';

export interface CannibalizationIssue {
  severity: 'high' | 'medium' | 'low';
  serviceA: string;
  serviceB: string;
  type: 'keyword_collision' | 'alias_overlap' | 'intent_collision' | 'definition_similarity';
  message: string;
}

export function checkCannibalization(services: ServiceEntity[]): CannibalizationIssue[] {
  const issues: CannibalizationIssue[] = [];
  const indexableServices = services.filter((s) => s.indexability === 'INDEX' && s.status !== 'draft');

  // 1. Check Primary Keyword Overlaps
  const keywordMap = new Map<string, string>();
  indexableServices.forEach((service) => {
    if (service.primaryKeyword) {
      const kw = service.primaryKeyword.toLowerCase().trim();
      if (keywordMap.has(kw)) {
        issues.push({
          severity: 'high',
          serviceA: keywordMap.get(kw)!,
          serviceB: service.slug,
          type: 'keyword_collision',
          message: `Identical primary keyword "${kw}" between "${keywordMap.get(kw)}" and "${service.slug}". Risk of search cannibalization.`
        });
      } else {
        keywordMap.set(kw, service.slug);
      }
    }
  });

  // 2. Check Alias Collisions across different indexable services
  const aliasMap = new Map<string, string>();
  indexableServices.forEach((service) => {
    if (Array.isArray(service.aliases)) {
      service.aliases.forEach((alias) => {
        const normAlias = alias.toLowerCase().trim();
        if (aliasMap.has(normAlias) && aliasMap.get(normAlias) !== service.slug) {
          issues.push({
            severity: 'medium',
            serviceA: aliasMap.get(normAlias)!,
            serviceB: service.slug,
            type: 'alias_overlap',
            message: `Shared alias query "${normAlias}" between "${aliasMap.get(normAlias)}" and "${service.slug}". Ensure distinct canonical search intent.`
          });
        } else {
          aliasMap.set(normAlias, service.slug);
        }
      });
    }
  });

  // 3. Check Parent/Child Search Intent Collisions
  indexableServices.forEach((service) => {
    if (service.parentServiceSlug) {
      const parent = indexableServices.find((s) => s.slug === service.parentServiceSlug);
      if (parent && parent.primaryKeyword && service.primaryKeyword) {
        if (parent.primaryKeyword.toLowerCase() === service.primaryKeyword.toLowerCase()) {
          issues.push({
            severity: 'high',
            serviceA: parent.slug,
            serviceB: service.slug,
            type: 'intent_collision',
            message: `Child service "${service.slug}" shares the exact same primary keyword with parent "${parent.slug}". Differentiate keyword intent or make child REGISTRY_ONLY.`
          });
        }
      }
    }
  });

  // 4. Definition Similarity Check (Jaccard similarity on word tokens)
  for (let i = 0; i < indexableServices.length; i++) {
    for (let j = i + 1; j < indexableServices.length; j++) {
      const a = indexableServices[i];
      const b = indexableServices[j];

      // Exclude different categories
      if (a.category !== b.category) continue;

      const wordsA = new Set(
        `${a.definition} ${a.directAnswer}`
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .split(/\s+/)
          .filter((w) => w.length > 3)
      );

      const wordsB = new Set(
        `${b.definition} ${b.directAnswer}`
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .split(/\s+/)
          .filter((w) => w.length > 3)
      );

      const intersection = new Set([...wordsA].filter((x) => wordsB.has(x)));
      const union = new Set([...wordsA, ...wordsB]);
      const similarity = union.size > 0 ? intersection.size / union.size : 0;

      if (similarity > 0.65) {
        issues.push({
          severity: 'low',
          serviceA: a.slug,
          serviceB: b.slug,
          type: 'definition_similarity',
          message: `High textual similarity (${(similarity * 100).toFixed(1)}%) in definitions between "${a.slug}" and "${b.slug}". Verify that each page contains distinct technical specifics.`
        });
      }
    }
  }

  return issues;
}
