export { metadata } from './metadata';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ressources & templates gratuits pour équipes produit',
  description: 'Collection de templates Notion, FigJam et prompts IA gratuits pour les product managers, par Victor Dulieu.',
  url: 'https://www.impact-led-products.com/templates',
  author: {
    '@type': 'Person',
    name: 'Victor Dulieu',
    url: 'https://www.impact-led-products.com',
  },
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Template Notion — Gestion de backlog produit (Epic / US / Tâches)',
      description: 'Système Notion complet pour structurer un backlog produit avec Epics, User Stories et tâches. Avec vues par priorité, sprint et équipe.',
      url: 'https://www.impact-led-products.com/templates',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Talk Frenchproduit — Routines pour transformer vos insights en résultats',
      description: 'Support de présentation sur les routines de continuous discovery présenté à la communauté Frenchproduit.',
      url: 'https://www.impact-led-products.com/templates',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Template FigJam — Déclinaison de roadmap à partir d\'OKR',
      description: 'Template visuel FigJam pour construire une roadmap orientée outcomes à partir des OKR stratégiques.',
      url: 'https://www.impact-led-products.com/templates',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Template Notion — Définition et animation d\'OKR',
      description: 'Système Notion complet pour le cycle OKR : définition, cascade, weekly check-in, scoring et retrospective.',
      url: 'https://www.impact-led-products.com/templates',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Template Notion + Prompt IA — Extraction d\'insights d\'entretiens user research',
      description: 'Template Notion et prompt IA pour extraire automatiquement les verbatims et insights d\'entretiens utilisateurs.',
      url: 'https://www.impact-led-products.com/templates',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Template Notion + Prompt IA — Guide d\'entretien exploration problème',
      description: 'Template et prompt pour structurer des entretiens d\'exploration en product discovery.',
      url: 'https://www.impact-led-products.com/templates',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Template Notion + Prompt IA — Guide d\'entretien user test',
      description: 'Template et prompt pour conduire des tests utilisateurs avec rigueur méthodologique.',
      url: 'https://www.impact-led-products.com/templates',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Template Notion — Test card et organisation des AB tests',
      description: 'Système Notion pour piloter l\'expérimentation produit : hypothèses, AB tests, critères de succès et apprentissages.',
      url: 'https://www.impact-led-products.com/templates',
    },
  ],
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
