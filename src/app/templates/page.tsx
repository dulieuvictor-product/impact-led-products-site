'use client';

import { useState } from 'react';

type ResourceType = 'notion' | 'figjam' | 'talk' | 'notion-prompt';

interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  tag: string;
  description: string;
}

const resources: Resource[] = [
  {
    id: 'backlog',
    title: 'Gestion de backlog produit (Epic / US / Tâches)',
    type: 'notion',
    tag: 'Backlog & delivery',
    description: 'Un système Notion complet pour structurer et prioriser votre backlog produit avec trois niveaux de granularité : Epics, User Stories et tâches. Vues par priorité, par sprint et par équipe. Idéal pour passer d\'une liste plate à une organisation hiérarchique claire, lisible par toute l\'équipe — devs, designers et stakeholders.',
  },
  {
    id: 'frenchproduit-talk',
    title: 'Talk Frenchproduit — Routines pour transformer vos insights en résultats',
    type: 'talk',
    tag: 'Discovery',
    description: 'Le support complet du talk présenté à la communauté Frenchproduit. Couvre comment mettre en place des routines de continuous discovery qui tiennent dans la durée : collecte structurée des insights, organisation des verbatims, et transformation en décisions produit actionnables — sans y passer des heures chaque semaine.',
  },
  {
    id: 'roadmap-okr-figjam',
    title: 'Déclinaison de roadmap à partir d\'OKR',
    type: 'figjam',
    tag: 'Roadmap & OKR',
    description: 'Un template FigJam pour construire une roadmap orientée outcomes plutôt que features, en partant directement de vos OKR. Garde la traçabilité stratégie → équipes visible à tout moment. Conçu pour les sessions de planning trimestriel et la présentation roadmap aux stakeholders.',
  },
  {
    id: 'okr-notion',
    title: 'Définition et animation d\'OKR',
    type: 'notion',
    tag: 'Roadmap & OKR',
    description: 'Un système Notion complet pour le cycle OKR de bout en bout : définition des objectifs et key results, cascade company → équipe, weekly check-in intégré, scoring et retrospective trimestrielle. Conçu pour utiliser les OKR comme outil de focalisation et d\'apprentissage — pas de reporting.',
  },
  {
    id: 'user-research-insights',
    title: 'Extraction automatique d\'insights d\'entretiens user research',
    type: 'notion-prompt',
    tag: 'User research',
    description: 'Un template Notion couplé à un prompt IA pour analyser des retranscriptions d\'entretiens utilisateurs : extraction automatique des verbatims clés, regroupement par thème et émergence des insights. Réduit drastiquement le temps de synthèse post-entretien et garantit une capitalisation structurée de toute votre recherche.',
  },
  {
    id: 'guide-exploration',
    title: 'Guide d\'entretien — Exploration problème',
    type: 'notion-prompt',
    tag: 'User research',
    description: 'Un template Notion avec prompt intégré pour préparer et conduire des entretiens d\'exploration en product discovery. Inclut le cadrage de l\'objectif, les questions ouvertes structurées, les relances clés, et une grille de synthèse des opportunités identifiées. Pour les PMs qui veulent mener des entretiens rigoureux sans partir d\'une feuille blanche.',
  },
  {
    id: 'guide-user-test',
    title: 'Guide d\'entretien — User test',
    type: 'notion-prompt',
    tag: 'User research',
    description: 'Un template Notion avec prompt pour structurer et conduire des tests utilisateurs avec rigueur méthodologique : construction des scénarios de test, grille d\'observation comportementale, recueil des frictions et synthèse des apprentissages. Adapté aux tests de prototypes comme aux tests de produits existants.',
  },
  {
    id: 'test-card-ab',
    title: 'Test card et organisation des AB tests',
    type: 'notion',
    tag: 'Expérimentation',
    description: 'Un système Notion pour piloter l\'expérimentation produit en équipe : rédaction structurée des hypothèses au format test card, suivi des AB tests en cours, définition des critères de succès avant le lancement, et capitalisation des apprentissages. Pour les équipes qui veulent ancrer une vraie culture de l\'expérimentation.',
  },
];

const typeConfig: Record<ResourceType, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  notion: {
    label: 'Template Notion',
    color: '#A8B4C8',
    bg: 'rgba(168,180,200,0.08)',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h8v2H4v-2z"/>
      </svg>
    ),
  },
  figjam: {
    label: 'Template FigJam',
    color: '#C084FC',
    bg: 'rgba(192,132,252,0.08)',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  talk: {
    label: 'Support de présentation',
    color: '#7DD3A8',
    bg: 'rgba(125,211,168,0.08)',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
    ),
  },
  'notion-prompt': {
    label: 'Notion + Prompt IA',
    color: '#FCD34D',
    bg: 'rgba(252,211,77,0.08)',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
};

const tagColors: Record<string, string> = {
  'Backlog & delivery': 'rgba(99,102,241,0.15)',
  'Discovery':          'rgba(16,185,129,0.12)',
  'Roadmap & OKR':      'rgba(245,158,11,0.12)',
  'User research':      'rgba(236,72,153,0.12)',
  'Expérimentation':    'rgba(59,130,246,0.12)',
};
const tagText: Record<string, string> = {
  'Backlog & delivery': '#818CF8',
  'Discovery':          '#34D399',
  'Roadmap & OKR':      '#FCD34D',
  'User research':      '#F472B6',
  'Expérimentation':    '#60A5FA',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function TemplatesPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(resources.map(r => r.id)));
  const clearAll  = () => setSelected(new Set());

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.size === 0) return;
    setStatus('loading');
    const selectedTitles = resources.filter(r => selected.has(r.id)).map(r => r.title).join(', ');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, template: selectedTitles }),
      });
      if (!res.ok) throw new Error();
      // PostHog event
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('template_request', {
          templates: resources.filter(r => selected.has(r.id)).map(r => r.id),
          templates_count: selected.size,
          templates_titles: selectedTitles,
          has_first_name: !!firstName,
        });
      }
      setStatus('success');
      setSelected(new Set());
      setEmail('');
      setFirstName('');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(13,23,67,0.5)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--text-primary)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s ease',
  };

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
        <div className="orb orb-amber" style={{ width: '450px', height: '450px', top: '-100px', right: '5%', opacity: 0.3 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(217,203,181,0.08)', border: '1px solid rgba(217,203,181,0.2)',
            borderRadius: '100px', padding: '0.25rem 0.875rem', marginBottom: '1.5rem',
          }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--accent)', fontWeight: 500 }}>
              Gratuit · Sélectionnez et demandez
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700, color: 'var(--text-primary)',
            letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem',
          }}>
            Ressources &amp; templates
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1.0625rem',
            color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '580px',
          }}>
            Des outils opérationnels pour les équipes produit. Sélectionnez les ressources qui vous intéressent et recevez-les par email.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* ── Liste des ressources ── */}
          <div>
            {/* Contrôles */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem',
            }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                {selected.size === 0
                  ? 'Aucune ressource sélectionnée'
                  : `${selected.size} ressource${selected.size > 1 ? 's' : ''} sélectionnée${selected.size > 1 ? 's' : ''}`}
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button onClick={selectAll} style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500,
                  color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer',
                  textDecoration: 'underline', textUnderlineOffset: '3px', padding: 0,
                }}>
                  Tout sélectionner
                </button>
                {selected.size > 0 && (
                  <button onClick={clearAll} style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500,
                    color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer',
                    textDecoration: 'underline', textUnderlineOffset: '3px', padding: 0,
                  }}>
                    Effacer
                  </button>
                )}
              </div>
            </div>

            {/* Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {resources.map(r => {
                const cfg = typeConfig[r.type];
                const isSelected = selected.has(r.id);
                return (
                  <div
                    key={r.id}
                    onClick={() => toggle(r.id)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '12px',
                      background: isSelected ? 'rgba(217,203,181,0.05)' : 'rgba(13,23,67,0.5)',
                      border: isSelected ? '1px solid rgba(217,203,181,0.35)' : '1px solid rgba(255,255,255,0.07)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={e => {
                      if (!isSelected) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)';
                    }}
                    onMouseLeave={e => {
                      if (!isSelected) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    }}
                  >
                    {/* Checkbox */}
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '6px', flexShrink: 0, marginTop: '2px',
                      background: isSelected ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                      border: isSelected ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}>
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#040715" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      )}
                    </div>

                    {/* Contenu */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                        {/* Type badge */}
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                          fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600,
                          color: cfg.color, background: cfg.bg,
                          border: `1px solid ${cfg.color}33`,
                          borderRadius: '100px', padding: '0.15rem 0.55rem', letterSpacing: '0.03em',
                        }}>
                          <span style={{ color: cfg.color }}>{cfg.icon}</span>
                          {cfg.label}
                        </span>
                        {/* Tag thématique */}
                        <span style={{
                          fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500,
                          color: tagText[r.tag] ?? 'var(--accent)',
                          background: tagColors[r.tag] ?? 'rgba(217,203,181,0.08)',
                          borderRadius: '100px', padding: '0.15rem 0.55rem',
                        }}>
                          {r.tag}
                        </span>
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 600,
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-primary)',
                        lineHeight: 1.4, marginBottom: '0.375rem',
                      }}>
                        {r.title}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                        color: 'var(--text-secondary)', lineHeight: 1.6,
                      }}>
                        {r.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Formulaire de demande ── */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <div className="glass-card" style={{ borderRadius: '16px', padding: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700,
                color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '0.5rem',
              }}>
                Recevoir les ressources
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem',
              }}>
                Sélectionnez les ressources qui vous intéressent à gauche, puis renseignez votre email.
              </p>

              {/* Résumé sélection */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '10px',
                padding: '0.875rem 1rem',
                marginBottom: '1.5rem',
                minHeight: '52px',
              }}>
                {selected.size === 0 ? (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
                    Aucune ressource sélectionnée
                  </p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {resources.filter(r => selected.has(r.id)).map(r => (
                      <div key={r.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {r.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'rgba(217,203,181,0.1)', border: '1px solid rgba(217,203,181,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem',
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                    Demande envoyée !
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Vous recevrez les ressources sous 24h.
                  </p>
                  <button onClick={() => setStatus('idle')} style={{
                    marginTop: '1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.8125rem',
                    color: 'var(--text-muted)', background: 'none', border: 'none',
                    cursor: 'pointer', textDecoration: 'underline',
                  }}>
                    Faire une nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Prénom
                    </label>
                    <input
                      type="text"
                      placeholder="Victor"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(217,203,181,0.35)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vous@exemple.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(217,203,181,0.35)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'}
                      style={inputStyle}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: '#F87171', margin: 0 }}>
                      Une erreur s&apos;est produite. Réessayez.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={selected.size === 0 || status === 'loading'}
                    style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9375rem',
                      color: selected.size === 0 ? 'rgba(4,7,21,0.5)' : 'var(--bg-deep)',
                      background: selected.size === 0 ? 'rgba(217,203,181,0.4)' : 'var(--accent)',
                      padding: '0.875rem', borderRadius: '8px', border: 'none',
                      cursor: selected.size === 0 ? 'not-allowed' : 'pointer',
                      transition: 'box-shadow 0.2s ease, opacity 0.2s ease',
                      opacity: status === 'loading' ? 0.7 : 1,
                      marginTop: '0.25rem',
                    }}
                    onMouseEnter={e => { if (selected.size > 0 && status !== 'loading') (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(217,203,181,0.35)'; }}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
                  >
                    {status === 'loading'
                      ? 'Envoi en cours...'
                      : selected.size === 0
                      ? 'Sélectionnez au moins une ressource'
                      : `Recevoir ${selected.size} ressource${selected.size > 1 ? 's' : ''}`}
                  </button>

                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                    Gratuit · Pas de spam · Désinscription libre
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
