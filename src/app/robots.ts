import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Amazonbot', 'Bytespider'],
        allow: '/',
      },
    ],
    sitemap: 'https://explodelabs.com/sitemap.xml',
    host: 'https://explodelabs.com',
  };
}
