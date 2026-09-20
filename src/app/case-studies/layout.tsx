import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Case Studies & Verified Results | Explode Labs',
  description: 'Explore our track record of scaling high-growth B2B SaaS, enterprise e-commerce, and healthcare companies using Next.js, SEO, and AI automation.',
  alternates: {
    canonical: 'https://explodelabs.com/case-studies'
  }
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
