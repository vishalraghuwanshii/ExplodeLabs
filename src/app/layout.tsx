import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Explode Labs | Full-Stack Engineering, AI Systems & Revenue Architecture',
  description: 'Explode Labs is a premier digital engineering partner. We architect enterprise web platforms, autonomous AI systems, and high-performance revenue engines.',
  keywords: ['software development', 'react nextjs agency', 'b2b saas engineering', 'ai agents', 'technical seo', 'shopify plus', 'explodelabs'],
  authors: [{ name: 'Explode Labs Architecture Team' }],
  openGraph: {
    title: 'Explode Labs | Build. Grow. Automate.',
    description: 'Premier digital engineering, autonomous AI systems, and high-performance revenue engines.',
    url: 'https://explodelabs.com',
    siteName: 'Explode Labs',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Explode Labs',
    url: 'https://explodelabs.com',
    logo: 'https://explodelabs.com/logo.png',
    description: 'Premier digital engineering, autonomous AI systems, and high-performance revenue engines.',
    sameAs: [
      'https://github.com/explodelabs',
      'https://linkedin.com/company/explodelabs',
      'https://x.com/explodelabs'
    ],
    knowsAbout: [
      'React & Next.js Development',
      'SaaS Platform Engineering',
      'Autonomous AI Agents & RAG',
      'Enterprise Technical SEO',
      'Cloud Architecture & DevOps',
      'Custom Shopify Plus'
    ]
  };

  return (
    <html lang="en" className="dark">
      <body className="bg-[#080808] text-[#f5f5f0] min-h-screen flex flex-col selection:bg-[#ff5500] selection:text-white">
        <JsonLd schema={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
