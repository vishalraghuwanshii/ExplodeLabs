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
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Amazonbot', 'Bytespider'],
        allow: '/',
        disallow: ['/portfolio'],
      },
    ],
    sitemap: 'https://explodelabs.com/sitemap.xml',
    host: 'https://explodelabs.com',
  };
}
