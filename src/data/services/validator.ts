import { ServiceEntity, PageType, Indexability } from '@/types';
import { checkCannibalization, CannibalizationIssue } from './cannibalization-checker';

export interface ValidationIssue {
  type: 'error' | 'warning';
  id?: string;
  slug?: string;
  field?: string;
  message: string;
}

export interface ValidationReport {
  valid: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
  cannibalizationIssues: CannibalizationIssue[];
}

export function validateServices(services: ServiceEntity[]): ValidationReport {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];

  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const seenNames = new Set<string>();
  const validSlugs = new Set(services.map((s) => s.slug));

  const validCategories = new Set([
    'Web & E-commerce',
    'Marketing & Growth',
    'Design & Creative',
    'AI & Automation',
    'Content & Sales',
    'Data & Analytics',
    'Specialized Technology'
  ]);

  const validPriorities = new Set(['CORE', 'HIGH', 'STANDARD', 'SPECIALIZED']);
  const validPageTypes: Set<PageType> = new Set(['PRIMARY_SERVICE', 'SUB_SERVICE', 'CAPABILITY', 'TECHNOLOGY', 'PLATFORM']);
  const validIndexabilities: Set<Indexability> = new Set(['INDEX', 'NOINDEX', 'REGISTRY_ONLY']);

  services.forEach((service, index) => {
    const loc = `Service[${index}] (${service.slug || service.id || 'unnamed'})`;

    // 1. ID Check
    if (!service.id) {
      errors.push({ type: 'error', slug: service.slug, field: 'id', message: `${loc}: Missing id` });
    } else if (seenIds.has(service.id)) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'id', message: `Duplicate id: ${service.id}` });
    } else {
      seenIds.add(service.id);
    }

    // 2. Slug Check
    if (!service.slug) {
      errors.push({ type: 'error', id: service.id, field: 'slug', message: `${loc}: Missing slug` });
    } else if (seenSlugs.has(service.slug)) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'slug', message: `Duplicate slug: ${service.slug}` });
    } else {
      seenSlugs.add(service.slug);
      // Slug format check
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(service.slug)) {
        warnings.push({ type: 'warning', id: service.id, slug: service.slug, field: 'slug', message: `Slug "${service.slug}" does not follow kebab-case convention` });
      }
    }

    // 3. Name Check
    if (!service.name) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'name', message: `${loc}: Missing name` });
    } else if (seenNames.has(service.name.toLowerCase())) {
      warnings.push({ type: 'warning', id: service.id, slug: service.slug, field: 'name', message: `Potential duplicate service name: "${service.name}"` });
    } else {
      seenNames.add(service.name.toLowerCase());
    }

    // 4. Category Check
    if (!service.category) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'category', message: `${loc}: Missing category` });
    } else if (!validCategories.has(service.category)) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'category', message: `Invalid category: "${service.category}"` });
    }

    // 5. Priority Check
    if (!service.priority) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'priority', message: `${loc}: Missing priority` });
    } else if (!validPriorities.has(service.priority)) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'priority', message: `Invalid priority: "${service.priority}"` });
    }

    // 6. PageType & Indexability Checks
    if (service.pageType && !validPageTypes.has(service.pageType)) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'pageType', message: `Invalid pageType: "${service.pageType}"` });
    }
    if (service.indexability && !validIndexabilities.has(service.indexability)) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'indexability', message: `Invalid indexability: "${service.indexability}"` });
    }
    if (service.indexability === 'INDEX' && !service.primaryKeyword) {
      warnings.push({ type: 'warning', id: service.id, slug: service.slug, field: 'primaryKeyword', message: `Indexable service "${service.slug}" is missing a primaryKeyword` });
    }

    // 7. Content Check
    if (!service.tagline) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'tagline', message: `${loc}: Missing tagline` });
    }
    if (!service.directAnswer) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'directAnswer', message: `${loc}: Missing directAnswer` });
    }
    if (!service.definition) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'definition', message: `${loc}: Missing definition` });
    }
    if (!Array.isArray(service.deliverables) || service.deliverables.length === 0) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'deliverables', message: `${loc}: Deliverables must be a non-empty array` });
    }
    if (!Array.isArray(service.process) || service.process.length === 0) {
      errors.push({ type: 'error', id: service.id, slug: service.slug, field: 'process', message: `${loc}: Process must be a non-empty array` });
    }

    // 8. Cross-reference checks (related, parent, child, complementary, alternative)
    if (Array.isArray(service.relatedServiceSlugs)) {
      service.relatedServiceSlugs.forEach((relSlug) => {
        if (!validSlugs.has(relSlug)) {
          warnings.push({
            type: 'warning',
            id: service.id,
            slug: service.slug,
            field: 'relatedServiceSlugs',
            message: `Service "${service.slug}" references non-existent related slug "${relSlug}"`
          });
        }
      });
    }

    if (service.parentServiceSlug && !validSlugs.has(service.parentServiceSlug)) {
      warnings.push({
        type: 'warning',
        id: service.id,
        slug: service.slug,
        field: 'parentServiceSlug',
        message: `Service "${service.slug}" references non-existent parent slug "${service.parentServiceSlug}"`
      });
    }

    if (Array.isArray(service.childServiceSlugs)) {
      service.childServiceSlugs.forEach((childSlug) => {
        if (!validSlugs.has(childSlug)) {
          warnings.push({
            type: 'warning',
            id: service.id,
            slug: service.slug,
            field: 'childServiceSlugs',
            message: `Service "${service.slug}" references non-existent child slug "${childSlug}"`
          });
        }
      });
    }

    // 9. Fabricated claim check (sanity check)
    const allText = JSON.stringify(service);
    const suspiciousPatterns = [/zero-hallucination/i, /\+340%/i, /4\.8x ROAS/i, /10M\+ views/i];
    suspiciousPatterns.forEach((pat) => {
      if (pat.test(allText)) {
        warnings.push({
          type: 'warning',
          id: service.id,
          slug: service.slug,
          field: 'content',
          message: `Suspicious/unsupported marketing claim detected matching ${pat.toString()}`
        });
      }
    });
  });

  // 10. Check Cannibalization
  const cannibalizationIssues = checkCannibalization(services);

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    cannibalizationIssues
  };
}
