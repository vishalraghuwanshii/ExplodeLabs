import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/portfolio'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'Applebot',
          'Applebot-Extended',
          'Amazonbot',
          'Meta-ExternalAgent',
          'Bytespider',
          'cohere-ai',
          'DuckAssistBot'
        ],
        allow: '/',
        disallow: ['/portfolio'],
      },
    ],
    sitemap: 'https://explodelabs.com/sitemap.xml',
    host: 'https://explodelabs.com',
  };
}
