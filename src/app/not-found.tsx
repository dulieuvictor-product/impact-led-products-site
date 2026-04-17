import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      background: 'var(--bg-deep)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="orb orb-amber" style={{ width: '400px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.2 }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 700,
          color: 'var(--bg-subtle)',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.05em',
        }}>
          404
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.025em',
          marginBottom: '0.75rem',
        }}>
          Page introuvable
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
          maxWidth: '360px',
          margin: '0 auto 2.5rem',
        }}>
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            color: 'var(--bg-deep)',
            background: 'var(--accent)',
            padding: '0.875rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s ease',
          }}
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
