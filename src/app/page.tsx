'use client';

import Link from 'next/link';
import { phCapture } from '@/lib/posthog';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Stratégie Produit',
    desc: 'Définir une vision claire, prioriser ce qui crée de la valeur réelle et aligner les équipes sur un cap commun.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Product Building',
    desc: 'De la découverte à la livraison : conception, itération rapide et validation terrain pour réduire le time-to-impact.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Coaching & Mentoring',
    desc: 'Développer des équipes produit performantes, structurer les pratiques PM et accélérer la montée en compétence.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: 'Operating system',
    desc: "Des modèles et ressources prêts à l'emploi : atelier, guide de user research, prompting product, roadmap, discovery, OKR et rituels d'équipe — disponibles en téléchargement.",
  },
];

const principles = [
  { number: '01', title: 'Impact first', desc: 'Chaque décision est évaluée à l\'aune de son impact réel sur les utilisateurs et sur le business.' },
  { number: '02', title: 'Clarté opérationnelle', desc: 'Des processus lisibles, des priorités assumées, une communication franche avec toutes les parties prenantes.' },
  { number: '03', title: 'Itération continue', desc: 'Apprendre vite, ajuster vite. La bonne solution émerge du terrain, pas des slides.' },
];

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg-deep)' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '0 1.5rem',
      }}>
        {/* Orbes de fond */}
        <div className="orb orb-amber" style={{ width: '600px', height: '600px', top: '-100px', right: '-100px', opacity: 0.5 }} />
        <div className="orb orb-blue"  style={{ width: '500px', height: '500px', bottom: '0', left: '-150px' }} />

        {/* Grille décorative */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', paddingTop: '120px', paddingBottom: '100px', position: 'relative', zIndex: 1 }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(217,203,181,0.08)',
            border: '1px solid rgba(217,203,181,0.2)',
            borderRadius: '100px',
            padding: '0.375rem 1rem',
            marginBottom: '2rem',
          }} className="glow-accent-sm">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--accent)',
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}>
              Product Manager · Product Builder Senior
            </span>
          </div>

          {/* Titre principal */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            maxWidth: '800px',
            marginBottom: '1.5rem',
          }}>
            De l&apos;idée <span className="gradient-text">à l&apos;impact</span>
          </h1>

          {/* Sous-titre */}
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '100%',
            marginBottom: '2.5rem',
            fontWeight: 400,
          }}>
            <span>
              Aider les équipes produit à avoir de l&apos;impact : pour leurs{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>clients</span>
              {', '}l&apos;
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>activité</span>
              {' '}de leur entreprise et leur{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>organisation</span>
              {'.'}
            </span>
            <br />
            <span style={{ color: 'var(--text-muted)' }}>
              Pas de méthodes ou de frameworks — des mises en pratique.
            </span>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              href="/contact"
              onClick={() => phCapture('cta_clicked', { label: 'Discutons de votre projet', location: 'hero' })}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'var(--bg-deep)',
                background: 'var(--accent)',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(217,203,181,0.35)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
            >
              Discutons de votre projet
            </Link>
            <Link
              href="/blog"
              onClick={() => phCapture('cta_clicked', { label: 'Lire les publications', location: 'hero' })}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                background: 'transparent',
                border: '1px solid var(--border)',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, color 0.2s ease',
                letterSpacing: '0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >
              Lire les publications
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {[
              { value: '10+', label: 'ans d\'expérience' },
              { value: '30+', label: 'produits lancés' },
              { value: 'B2B & B2C', label: 'tous contextes' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>{value}</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                }}>{label}</div>
              </div>
            ))}

            {/* Award */}
            <a
              href="https://www.productawards.fr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.8'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>🏆</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}>
                    Impact 2025
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                  }}>
                    Product Awards · Bene Bono
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <div style={{ background: 'var(--bg-base)', paddingTop: '2rem' }}>
        <p style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          Intervention dans des contextes variés
        </p>
      </div>
      <div style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg-base)',
        padding: '1.75rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Fondu gauche */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, var(--bg-base), transparent)',
          pointerEvents: 'none',
        }} />
        {/* Fondu droite */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, var(--bg-base), transparent)',
          pointerEvents: 'none',
        }} />

        <div className="marquee-track">
          {[
            'e-logik', 'Bene Bono', 'RATP', 'ManoMano',
            'Thiga', 'Leroy Merlin', 'Décathlon', 'SNCF Réseau',
            // doublon pour le défilement sans coupure
            'e-logik', 'Bene Bono', 'RATP', 'ManoMano',
            'Thiga', 'Leroy Merlin', 'Décathlon', 'SNCF Réseau',
          ].map((name, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 2.5rem',
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
            >
              {name}
              <span style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'var(--border)',
                marginLeft: '2.5rem',
              }} />
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg-base)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* En-tête */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Ce que je fais
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              maxWidth: '500px',
            }}>
              Expertise produit à 360°
            </h2>
          </div>

          {/* Grille services */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="glass-card glass-card-hover"
                style={{ padding: '2rem', borderRadius: '12px' }}
              >
                <div style={{
                  color: 'var(--accent)',
                  marginBottom: '1.25rem',
                  opacity: 0.9,
                }}>
                  {icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.625rem',
                  letterSpacing: '-0.01em',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPES ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-amber" style={{ width: '400px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Mon approche
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
            }}>
              Des principes, pas des méthodes
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '800px', margin: '0 auto' }}>
            {principles.map(({ number, title, desc }, i) => (
              <div
                key={number}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  padding: '2rem 0',
                  borderBottom: i < principles.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  minWidth: '32px',
                  paddingTop: '0.25rem',
                }}>
                  {number}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg-base)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          <div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              À propos
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              Victor Dulieu
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}>
              Product Manager et Product Builder avec plus de 10 ans d&apos;expérience dans la construction de produits numériques en B2B et B2C.
              J&apos;ai accompagné des startups, des scale-ups et des grands groupes à définir leur stratégie produit, structurer leurs équipes et livrer des solutions qui créent de la valeur durable.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}>
              Impact-led products est le cadre dans lequel je partage mes méthodes, mes outils Notion et mes réflexions — pour vous aider à passer de l&apos;idée à l&apos;impact.
            </p>
            <a
              href="https://www.linkedin.com/in/victordulieu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--accent)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(217,203,181,0.3)',
                paddingBottom: '2px',
                transition: 'border-color 0.2s ease',
              }}
            >
              Voir le profil LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>

          {/* Carte compétences */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Product Strategy', years: '10+ ans' },
              { label: 'Product Discovery', years: '8+ ans' },
              { label: 'OKR & KPI Frameworks', years: '6+ ans' },
              { label: 'Team Leadership', years: '7+ ans' },
              { label: 'Notion Systems Design', years: '4+ ans' },
            ].map(({ label, years }) => (
              <div
                key={label}
                className="glass-card"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {label}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  {years}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS APERÇU ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--bg-deep)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Dernières publications
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}>
                Réflexions &amp; méthodes produit
              </h2>
            </div>
            <Link
              href="/blog"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
            >
              Toutes les publications
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Teaser articles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                tag: 'Impact',
                source: 'The Product Shift',
                sourceColor: '#F9A8D4',
                title: '(repost) Le Product delight dans une boîte à impact, cosmétique ou vraiment utile ?',
                date: '21 octobre 2025',
                url: 'https://theproductshift.substack.com/p/le-product-delight-dans-une-boite',
              },
              {
                tag: 'IA & Produit',
                source: 'Medium',
                sourceColor: '#A8B4C8',
                title: 'Guide pratique : nos itérations sur un produit "intelligent"',
                date: '19 février 2025',
                url: 'https://medium.com/@dulieu.victor/guide-pratique-nos-itérations-sur-un-produit-intelligent-9176ce043a89',
              },
              {
                tag: 'Stratégie',
                source: 'Thiga',
                sourceColor: '#7DD3A8',
                title: 'Arrêtons de nous mentir sur le Product Management',
                date: '4 février 2024',
                url: 'https://www.media.thiga.co/arretons-de-nous-mentir-sur-le-product-management',
              },
            ].map(({ tag, source, sourceColor, title, date, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => phCapture('cta_clicked', { label: title, location: 'home_blog_preview' })}
                style={{ textDecoration: 'none' }}
              >
                <article
                  className="glass-card glass-card-hover"
                  style={{ padding: '1.75rem', borderRadius: '12px', height: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      background: 'rgba(217,203,181,0.08)',
                      border: '1px solid rgba(217,203,181,0.15)',
                      borderRadius: '100px',
                      padding: '0.25rem 0.75rem',
                      letterSpacing: '0.05em',
                    }}>
                      {tag}
                    </div>
                    <div style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: sourceColor,
                      background: `${sourceColor}12`,
                      border: `1px solid ${sourceColor}33`,
                      borderRadius: '100px',
                      padding: '0.25rem 0.75rem',
                    }}>
                      {source}
                    </div>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                    flex: 1,
                  }}>
                    {title}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                    }}>
                      {date}
                    </span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{
        padding: '6rem 1.5rem',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-amber" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.25 }} />

        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Commençons
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
          }}>
            Votre projet mérite mieux qu&apos;une roadmap de plus
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}>
            Parlons de vos enjeux produit. Je répondrai sous 48h pour explorer comment je peux vous aider.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              onClick={() => phCapture('cta_clicked', { label: 'Prendre contact', location: 'cta_section' })}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'var(--bg-deep)',
                background: 'var(--accent)',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(217,203,181,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
            >
              Prendre contact
            </Link>
            <Link
              href="/templates"
              onClick={() => phCapture('cta_clicked', { label: 'Explorer les templates', location: 'cta_section' })}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                background: 'transparent',
                border: '1px solid var(--border)',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >
              Explorer les templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
