import type { Metadata } from 'next';
import BlogList from './BlogList';

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Articles de Victor Dulieu sur Medium et le média Thiga — product management, product discovery, OKR, stratégie produit.',
  alternates: {
    canonical: 'https://www.impact-led-products.com/blog',
  },
  openGraph: {
    title: 'Publications — Impact-led products',
    description: 'Articles de Victor Dulieu sur le product management, la discovery et la stratégie produit.',
    url: 'https://www.impact-led-products.com/blog',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Publications — Impact-led products',
  url: 'https://www.impact-led-products.com/blog',
  description: 'Réflexions, méthodes et retours d\'expérience produit par Victor Dulieu.',
  author: {
    '@type': 'Person',
    name: 'Victor Dulieu',
    url: 'https://www.impact-led-products.com',
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogList />
    </>
  );
}
