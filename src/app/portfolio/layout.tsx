import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Creative Work | Explode Labs',
  description: 'View our gallery of bespoke Next.js web applications, high-converting UI/UX design, and premium video post-production.',
  alternates: { canonical: 'https://explodelabs.com/portfolio' }
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
