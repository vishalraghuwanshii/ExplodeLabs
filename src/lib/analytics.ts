declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-HD64D7Q969';

export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export type TrafficSourceCategory = 'ai_engine' | 'social_media' | 'search_engine' | 'referral' | 'direct';

export interface TrafficSourceInfo {
  category: TrafficSourceCategory;
  name: string;
  referrer: string;
  landingPage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export function detectTrafficSource(): TrafficSourceInfo | null {
  if (typeof window === 'undefined') return null;

  const referrer = document.referrer || '';
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source') || undefined;
  const utmMedium = urlParams.get('utm_medium') || undefined;
  const utmCampaign = urlParams.get('utm_campaign') || undefined;
  const landingPage = window.location.pathname;

  const refLower = referrer.toLowerCase();

  // 1. AI & LLM Search Engines
  if (refLower.includes('chatgpt.com') || refLower.includes('chat.openai.com') || refLower.includes('openai.chatgpt') || refLower.includes('openai.chat')) {
    return { category: 'ai_engine', name: 'ChatGPT', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('perplexity.ai')) {
    return { category: 'ai_engine', name: 'Perplexity AI', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('claude.ai') || refLower.includes('anthropic.com')) {
    return { category: 'ai_engine', name: 'Claude (Anthropic)', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('gemini.google.com') || refLower.includes('bard.google.com')) {
    return { category: 'ai_engine', name: 'Google Gemini', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('copilot.microsoft.com') || refLower.includes('edgeservices.bing.com')) {
    return { category: 'ai_engine', name: 'Microsoft Copilot', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('grok.com') || refLower.includes('x.ai')) {
    return { category: 'ai_engine', name: 'Grok', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('poe.com')) {
    return { category: 'ai_engine', name: 'Poe AI', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('meta.ai')) {
    return { category: 'ai_engine', name: 'Meta AI', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('phind.com')) {
    return { category: 'ai_engine', name: 'Phind', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('you.com')) {
    return { category: 'ai_engine', name: 'You.com', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }

  // 2. Social Media Platforms
  if (refLower.includes('linkedin.com') || refLower.includes('lnkd.in') || refLower.includes('com.linkedin')) {
    return { category: 'social_media', name: 'LinkedIn', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('twitter.com') || refLower.includes('x.com') || refLower.includes('t.co')) {
    return { category: 'social_media', name: 'X / Twitter', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('youtube.com') || refLower.includes('youtu.be')) {
    return { category: 'social_media', name: 'YouTube', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('reddit.com') || refLower.includes('redd.it')) {
    return { category: 'social_media', name: 'Reddit', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('instagram.com') || refLower.includes('l.instagram.com')) {
    return { category: 'social_media', name: 'Instagram', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('facebook.com') || refLower.includes('fb.com') || refLower.includes('messenger.com') || refLower.includes('l.facebook.com')) {
    return { category: 'social_media', name: 'Facebook', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('threads.net')) {
    return { category: 'social_media', name: 'Threads', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('tiktok.com')) {
    return { category: 'social_media', name: 'TikTok', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('github.com')) {
    return { category: 'social_media', name: 'GitHub', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('producthunt.com')) {
    return { category: 'social_media', name: 'Product Hunt', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('news.ycombinator.com')) {
    return { category: 'social_media', name: 'Hacker News', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('pinterest.com')) {
    return { category: 'social_media', name: 'Pinterest', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }

  // 3. Search Engines (Organic)
  if (refLower.includes('google.')) {
    return { category: 'search_engine', name: 'Google Organic', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('bing.com')) {
    return { category: 'search_engine', name: 'Bing Organic', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('duckduckgo.com')) {
    return { category: 'search_engine', name: 'DuckDuckGo', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }
  if (refLower.includes('yahoo.com')) {
    return { category: 'search_engine', name: 'Yahoo', referrer, landingPage, utmSource, utmMedium, utmCampaign };
  }

  // 4. UTM Overrides
  if (utmSource) {
    return {
      category: utmMedium === 'social' ? 'social_media' : utmMedium === 'ai' ? 'ai_engine' : 'referral',
      name: utmSource,
      referrer,
      landingPage,
      utmSource,
      utmMedium,
      utmCampaign,
    };
  }

  // 5. External Referral
  if (referrer && !referrer.includes(window.location.hostname)) {
    try {
      const parsed = new URL(referrer);
      return { category: 'referral', name: parsed.hostname, referrer, landingPage };
    } catch {
      return { category: 'referral', name: 'External Referral', referrer, landingPage };
    }
  }

  // 6. Direct Visit
  return { category: 'direct', name: 'Direct Traffic', referrer: '', landingPage };
}

export function logTrafficSourceEvent() {
  if (typeof window === 'undefined') return;

  // Track once per session to avoid duplicate hits on internal navigation
  const SESSION_KEY = 'explodelabs_source_tracked';
  if (sessionStorage.getItem(SESSION_KEY)) return;

  const source = detectTrafficSource();
  if (!source) return;

  if (typeof window.gtag === 'function') {
    // 1. Unified Event for All Traffic
    window.gtag('event', 'traffic_source_detected', {
      source_category: source.category,
      source_name: source.name,
      landing_page: source.landingPage,
      referrer_url: source.referrer,
      utm_source: source.utmSource || '',
      utm_medium: source.utmMedium || '',
      utm_campaign: source.utmCampaign || '',
    });

    // 2. Specialized AI Event
    if (source.category === 'ai_engine') {
      window.gtag('event', 'ai_referral_visit', {
        ai_engine: source.name,
        landing_page: source.landingPage,
        referrer_url: source.referrer,
      });
    }

    // 3. Specialized Social Event
    if (source.category === 'social_media') {
      window.gtag('event', 'social_referral_visit', {
        social_platform: source.name,
        landing_page: source.landingPage,
        referrer_url: source.referrer,
      });
    }

    sessionStorage.setItem(SESSION_KEY, 'true');
  }
}
