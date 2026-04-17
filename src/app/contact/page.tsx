'use client';

import { useEffect } from 'react';
import { phCapture } from '@/lib/posthog';

export default function ContactPage() {
  useEffect(() => {
    // Écoute le message de confirmation de réservation Calendly
    const handleCalendly = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        phCapture('contact_booked', {
          event_type: e.data?.payload?.event_type?.name ?? 'unknown',
        });
      }
    };
    window.addEventListener('message', handleCalendly);
    return () => window.removeEventListener('message', handleCalendly);
  }, []);
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
        <div className="orb orb-amber" style={{ width: '400px', height: '400px', top: '-100px', right: '5%', opacity: 0.3 }} />
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
            Contact
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
            Parlons de votre projet
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '520px',
          }}>
            Réservez un créneau de 30 minutes pour explorer comment je peux vous aider.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: '4rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* Calendly */}
          <div className="glass-card" style={{ borderRadius: '16px', overflow: 'hidden', padding: 0 }}>
            <iframe
              src="https://calendly.com/dulieu-victor/30min"
              style={{ width: '100%', minWidth: '320px', height: '700px', border: 'none', display: 'block' }}
              title="Réserver un créneau — Victor Dulieu"
            />
          </div>

          {/* Informations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}>
                Comment puis-je vous aider ?
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                Que vous ayez un projet concret à structurer, une équipe à accompagner ou simplement une question sur le product management, n&apos;hésitez pas.
              </p>
            </div>

            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                ),
                title: 'Missions produit',
                desc: 'Audit, stratégie, discovery, lancement — sur le terrain avec vos équipes.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                ),
                title: 'Coaching individuel',
                desc: 'Accompagnement de PMs et founders qui veulent progresser vite.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                ),
                title: 'Conférences & ateliers',
                desc: "Interventions sur le product management, l'impact et l'organisation produit.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="glass-card"
                style={{ padding: '1.25rem', borderRadius: '10px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
              >
                <div style={{ color: 'var(--accent)', flexShrink: 0, paddingTop: '2px' }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/victordulieu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                background: 'rgba(13,23,67,0.4)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(217,203,181,0.25)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text-secondary)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  LinkedIn
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  linkedin.com/in/victordulieu
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
