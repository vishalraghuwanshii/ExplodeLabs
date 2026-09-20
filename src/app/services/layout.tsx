import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full-Service Digital Capabilities | Explode Labs',
  description: 'Explore our complete registry of B2B SaaS engineering, AI search optimization, paid media, and creative services.',
  alternates: { canonical: 'https://explodelabs.com/services' }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
