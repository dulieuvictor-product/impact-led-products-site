'use client';

import { phCapture } from '@/lib/posthog';

type Source = 'medium' | 'thiga' | 'productshift';

interface Article {
  title: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  url: string;
  source: Source;
  tag: string;
}

const articles: Article[] = ([
  {
    title: 'Product Managers pourquoi il est très utile de penser au nocode pour tester vos hypothèses produit',
    date: '2021-08-30',
    dateLabel: '30 août 2021',
    readingTime: '8 min',
    url: 'https://medium.com/@dulieu.victor/product-managers-pourquoi-il-est-très-utile-de-penser-au-nocode-pour-tester-vos-hypothèses-produit-114dbb19801b',
    source: 'medium',
    tag: 'No-code',
  },
  {
    title: "Quelques règles à toujours garder en tête lorsqu'on fait du product discovery",
    date: '2022-06-16',
    dateLabel: '16 juin 2022',
    readingTime: '5 min',
    url: 'https://medium.com/@dulieu.victor/quelques-règles-à-toujours-garder-en-tête-lorsquon-fait-du-product-discovery-8208bc035264',
    source: 'medium',
    tag: 'Discovery',
  },
  {
    title: "Comment faire du product discovery lorsque votre produit n'est pas encore lancé ?",
    date: '2022-06-16',
    dateLabel: '16 juin 2022',
    readingTime: '8 min',
    url: "https://medium.com/@dulieu.victor/comment-faire-du-product-discovery-lorsque-votre-produit-nest-pas-encore-lancé-b1eaf80e9c44",
    source: 'medium',
    tag: 'Discovery',
  },
  {
    title: 'Product Dual-track : Considérons un double flux produit entre nocode et développements',
    date: '2023-04-10',
    dateLabel: '10 avril 2023',
    readingTime: '8 min',
    url: 'https://medium.com/@dulieu.victor/product-dual-track-considérons-un-double-flux-produit-entre-nocode-et-développements-d3962532ed88',
    source: 'medium',
    tag: 'Stratégie',
  },
  {
    title: 'Pistes pour adopter une routine de continuous discovery (en contexte B2B early stage)',
    date: '2023-09-08',
    dateLabel: '8 septembre 2023',
    readingTime: '10 min',
    url: 'https://medium.com/@dulieu.victor/pistes-pour-adopter-une-routine-de-continuous-discovery-en-contexte-b2b-early-stage-94d0f00ff731',
    source: 'medium',
    tag: 'Discovery',
  },
  {
    title: 'Guide pratique : nos itérations sur un produit "intelligent"',
    date: '2025-02-19',
    dateLabel: '19 février 2025',
    readingTime: '10 min',
    url: 'https://medium.com/@dulieu.victor/guide-pratique-nos-itérations-sur-un-produit-intelligent-9176ce043a89',
    source: 'medium',
    tag: 'IA & Produit',
  },
  {
    title: '(repost) Le Product delight dans une boîte à impact, cosmétique ou vraiment utile ?',
    date: '2025-10-21',
    dateLabel: '21 octobre 2025',
    readingTime: '1 min',
    url: 'https://theproductshift.substack.com/p/le-product-delight-dans-une-boite',
    source: 'productshift',
    tag: 'Impact',
  },
  // ── Thiga ──
  {
    title: 'Product Managers, musclez vos entretiens !',
    date: '2019-03-14',
    dateLabel: '14 mars 2019',
    readingTime: '4 min',
    url: 'https://www.media.thiga.co/product-manager-tout-killer-en-entretien',
    source: 'thiga',
    tag: 'Carrière PM',
  },
  {
    title: 'Tout savoir sur le rôle de Product Ops',
    date: '2020-01-16',
    dateLabel: '16 janvier 2020',
    readingTime: '3 min',
    url: 'https://www.media.thiga.co/productops',
    source: 'thiga',
    tag: 'Organisation',
  },
  {
    title: 'Arrêtons de nous mentir sur le Product Management',
    date: '2024-02-04',
    dateLabel: '4 février 2024',
    readingTime: '9 min',
    url: 'https://www.media.thiga.co/arretons-de-nous-mentir-sur-le-product-management',
    source: 'thiga',
    tag: 'Stratégie',
  },
] as Article[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const sourceConfig = {
  medium: {
    label: 'Medium',
    cta: 'Lire dans Medium',
    color: '#A8B4C8',
    bg: 'rgba(168,180,200,0.08)',
    logo: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
  productshift: {
    label: 'The Product Shift',
    cta: 'Lire sur The Product Shift',
    color: '#F9A8D4',
    bg: 'rgba(249,168,212,0.08)',
    logo: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l16 0M4 12l10 0M4 20l16 0"/>
      </svg>
    ),
  },
  thiga: {
    label: 'Thiga',
    cta: 'Lire sur le média Thiga',
    color: '#7DD3A8',
    bg: 'rgba(125,211,168,0.08)',
    logo: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
} as const;

export default function BlogList() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingTop: '64px' }}>

      {/* Header */}
      <section style={{
        padding: '5rem 1.5rem 3rem',
        background: 'var(--bg-base)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-amber" style={{ width: '400px', height: '400px', top: '-100px', right: '10%', opacity: 0.3 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Publications
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            Réflexions produit
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '540px',
            marginBottom: '2rem',
          }}>
            Méthodes, retours d&apos;expérience et points de vue sur le product management — publiés sur Medium et le média Thiga.
          </p>

          {/* Légende sources */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {(Object.entries(sourceConfig) as [Source, typeof sourceConfig[Source]][]).map(([key, cfg]) => (
              <div key={key} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: cfg.bg,
                border: `1px solid ${cfg.color}33`,
                borderRadius: '100px',
                padding: '0.3rem 0.875rem',
              }}>
                <span style={{ color: cfg.color }}>{cfg.logo}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: cfg.color, fontWeight: 500 }}>
                  {cfg.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles — du plus ancien au plus récent */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {articles.map((article, i) => {
            const cfg = sourceConfig[article.source];
            return (
              <article
                key={i}
                className="glass-card"
                style={{
                  padding: '1.75rem 2rem',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderLeft: `3px solid ${cfg.color}44`,
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderLeftColor = cfg.color;
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.35)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderLeftColor = `${cfg.color}44`;
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    background: cfg.bg,
                    border: `1px solid ${cfg.color}33`,
                    borderRadius: '100px',
                    padding: '0.2rem 0.625rem',
                  }}>
                    <span style={{ color: cfg.color }}>{cfg.logo}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: cfg.color, letterSpacing: '0.04em' }}>
                      {cfg.label}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--accent)',
                    background: 'rgba(217,203,181,0.08)',
                    border: '1px solid rgba(217,203,181,0.15)',
                    borderRadius: '100px',
                    padding: '0.2rem 0.625rem',
                  }}>
                    {article.tag}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {article.dateLabel} · {article.readingTime} de lecture
                  </span>
                </div>

                {/* Titre */}
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.4,
                  margin: 0,
                }}>
                  {article.title}
                </h2>

                {/* CTA */}
                <div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => phCapture('blog_article_clicked', {
                      title: article.title,
                      source: article.source,
                      tag: article.tag,
                      url: article.url,
                      date: article.date,
                    })}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: cfg.color,
                      textDecoration: 'none',
                      border: `1px solid ${cfg.color}44`,
                      borderRadius: '6px',
                      padding: '0.5rem 1rem',
                      transition: 'background 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = cfg.bg;
                      (e.currentTarget as HTMLElement).style.borderColor = cfg.color;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.borderColor = `${cfg.color}44`;
                    }}
                  >
                    {cfg.cta}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </section>
    </div>
  );
}
