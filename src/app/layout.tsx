import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { CalendlyModal } from '@/components/ui/CalendlyModal';
import { FloatingBookingPill } from '@/components/ui/FloatingBookingPill';

export const metadata: Metadata = {
  title: 'Explode Labs | B2B SaaS Digital Agency | AI, Web & SEO',
  description: 'Explode Labs is a full-service digital agency specializing in B2B SaaS and enterprise growth. We build scalable Next.js websites, autonomous AI agents, and data-driven SEO & paid media revenue engines.',
  keywords: ['full-service digital agency', 'b2b saas marketing agency', 'ai automation agency', 'react nextjs development', 'technical seo agency', 'b2b outbound lead generation'],
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
    description: 'Explode Labs is a premier digital growth, creative systems, and modern web development studio delivering high-performance SEO/AEO, commercial video post-production, paid acquisition, and bespoke web platforms.',
    founder: {
      '@type': 'Person',
      name: 'Vishal Raghuwanshi',
      jobTitle: 'Founder & Principal Director',
      url: 'https://www.linkedin.com/in/vishal-raghu/',
      sameAs: [
        'https://www.linkedin.com/in/vishal-raghu/'
      ]
    },
    sameAs: [
      'https://github.com/explodelabs',
      'https://linkedin.com/company/explodelabs',
      'https://x.com/explodelabs',
      'https://www.linkedin.com/in/vishal-raghu/'
    ],
    knowsAbout: [
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'Enterprise Technical SEO',
      'Commercial Video Editing & DaVinci Resolve',
      '3D Product Modeling & CGI Rendering',
      'Performance Paid Advertising (Google & Meta Ads)',
      'B2B Outbound Lead Generation & SDR Infrastructure',
      'Modern Web Development (React & Next.js)',
      'Headless Shopify Plus Development'
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-[#f5f5f0] min-h-screen flex flex-col font-sans selection:bg-[#ff5500] selection:text-white antialiased">
        <JsonLd schema={organizationSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CalendlyModal />
        <FloatingBookingPill />
      </body>
    </html>
  );
}
