import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Proposal | Explode Labs',
  description: 'Get a comprehensive growth audit and fixed-scope investment estimate from Explode Labs in less than 24 hours.',
  alternates: { canonical: 'https://explodelabs.com/contact' }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
