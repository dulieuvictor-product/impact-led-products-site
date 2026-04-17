import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Réservez un créneau avec Victor Dulieu — missions produit, coaching PM, conférences et ateliers.',
  alternates: {
    canonical: 'https://www.impact-led-products.com/contact',
  },
  openGraph: {
    title: 'Contact — Impact-led products',
    description: 'Réservez un créneau avec Victor Dulieu — missions produit, coaching PM, conférences.',
    url: 'https://www.impact-led-products.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
