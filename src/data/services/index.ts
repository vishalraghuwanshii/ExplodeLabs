import { ServiceEntity, ServiceCategory, ServicePriority } from '@/types';
import { canonicalServices } from './registry';
import { validateServices } from './validator';

export { canonicalServices } from './registry';
export { validateServices } from './validator';

// 5 Primary Commercial Categories shown in the main navigation
export const COMMERCIAL_CATEGORIES: ServiceCategory[] = [
  'Web & E-commerce',
  'Marketing & Growth',
  'Design & Creative',
  'AI & Automation',
  'Content & Sales'
];

// All Categories including deep infrastructure & specialized
export const ALL_CATEGORIES: ServiceCategory[] = [
  'Web & E-commerce',
  'Marketing & Growth',
  'Design & Creative',
  'AI & Automation',
  'Content & Sales',
  'Data & Analytics',
  'Specialized Technology'
];

/**
 * Returns all active services in the registry.
 */
export function getAllServices(): ServiceEntity[] {
  return canonicalServices.filter((s) => s.status !== 'draft');
}

/**
 * Returns all indexable services (used for sitemap, static generation, SEO pages).
 */
export function getIndexableServices(): ServiceEntity[] {
  return canonicalServices.filter((s) => s.status !== 'draft' && s.indexable !== false);
}

/**
 * Find service by exact slug or match against search aliases.
 */
export function getServiceBySlug(slug: string): ServiceEntity | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();

  // 1. Direct slug match
  const directMatch = canonicalServices.find(
    (s) => s.slug.toLowerCase() === normalized
  );
  if (directMatch) return directMatch;

  // 2. Alias match (e.g., legacy routes or keyword aliases)
  const aliasMatch = canonicalServices.find((s) =>
    s.aliases?.some((alias) => alias.toLowerCase() === normalized || alias.toLowerCase().replace(/\s+/g, '-') === normalized)
  );
  if (aliasMatch) return aliasMatch;

  return undefined;
}

/**
 * Get services filtered by category, sorted by priority (CORE -> HIGH -> STANDARD -> SPECIALIZED).
 */
export function getServicesByCategory(category: ServiceCategory | string): ServiceEntity[] {
  const priorityWeight: Record<ServicePriority, number> = {
    CORE: 4,
    HIGH: 3,
    STANDARD: 2,
    SPECIALIZED: 1
  };

  return canonicalServices
    .filter((s) => s.category === category && s.status !== 'draft')
    .sort((a, b) => (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0));
}

/**
 * Get services by commercial priority.
 */
export function getServicesByPriority(priority: ServicePriority): ServiceEntity[] {
  return canonicalServices.filter((s) => s.priority === priority && s.status !== 'draft');
}

/**
 * Get related services for a given service (by entity or slug).
 */
export function getRelatedServices(serviceOrSlug: ServiceEntity | string, limit = 4): ServiceEntity[] {
  if (!serviceOrSlug) return [];
  const service = typeof serviceOrSlug === 'string' ? getServiceBySlug(serviceOrSlug) : serviceOrSlug;
  if (!service) return [];

  // 1. Slugs explicitly listed in relatedServiceSlugs
  const explicitRelated: ServiceEntity[] = [];
  if (Array.isArray(service.relatedServiceSlugs)) {
    for (const slug of service.relatedServiceSlugs) {
      const match = getServiceBySlug(slug);
      if (match && match.id !== service.id && !explicitRelated.some((e) => e.id === match.id)) {
        explicitRelated.push(match);
      }
    }
  }

  // 2. If fewer than limit, backfill with same category
  if (explicitRelated.length < limit) {
    const categoryPeers = getServicesByCategory(service.category as ServiceCategory)
      .filter((s) => s.id !== service.id && !explicitRelated.some((e) => e.id === s.id));
    explicitRelated.push(...categoryPeers.slice(0, limit - explicitRelated.length));
  }

  // 3. If still fewer, backfill with core services
  if (explicitRelated.length < limit) {
    const coreServices = getServicesByPriority('CORE')
      .filter((s) => s.id !== service.id && !explicitRelated.some((e) => e.id === s.id));
    explicitRelated.push(...coreServices.slice(0, limit - explicitRelated.length));
  }

  return explicitRelated.slice(0, limit);
}

/**
 * Search services by query string matching name, tagline, description, deliverables, technologies, platforms, or aliases.
 */
export function searchServicesByQuery(query: string): ServiceEntity[] {
  if (!query || !query.trim()) return getAllServices();
  const q = query.trim().toLowerCase();

  return canonicalServices.filter((s) => {
    if (s.status === 'draft') return false;
    if (s.name.toLowerCase().includes(q)) return true;
    if (s.tagline.toLowerCase().includes(q)) return true;
    if (s.category.toLowerCase().includes(q)) return true;
    if (s.subCategory?.toLowerCase().includes(q)) return true;
    if (s.shortDescription?.toLowerCase().includes(q)) return true;
    if (s.directAnswer.toLowerCase().includes(q)) return true;
    if (s.aliases?.some((a) => a.toLowerCase().includes(q))) return true;
    if (s.technologies?.some((t) => t.toLowerCase().includes(q))) return true;
    if (s.platforms?.some((p) => p.toLowerCase().includes(q))) return true;
    if (s.deliverables?.some((d) => d.toLowerCase().includes(q))) return true;
    return false;
  });
}

/**
 * Run taxonomy validation in development or testing.
 */
export function validateRegistry() {
  return validateServices(canonicalServices);
}
