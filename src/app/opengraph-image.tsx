import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Impact-led products — De l'idée à l'impact";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#040715',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grille décorative */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Orbe ambre */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,203,181,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'rgba(217,203,181,0.08)',
          border: '1px solid rgba(217,203,181,0.2)',
          borderRadius: '100px',
          padding: '8px 20px',
          marginBottom: '40px',
          width: 'fit-content',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D9CBB5' }} />
          <span style={{ color: '#D9CBB5', fontSize: '18px', fontWeight: 600, letterSpacing: '0.05em' }}>
            Product Manager · Product Builder Senior
          </span>
        </div>

        {/* Titre */}
        <div style={{
          fontSize: '72px', fontWeight: 700, lineHeight: 1.1,
          letterSpacing: '-0.03em', marginBottom: '24px',
          color: '#E8E4DC',
        }}>
          De l&apos;idée{' '}
          <span style={{ color: '#D9CBB5' }}>à l&apos;impact</span>
        </div>

        {/* Sous-titre */}
        <div style={{
          fontSize: '26px', color: '#9BA3BF', lineHeight: 1.5,
          maxWidth: '700px', marginBottom: '60px',
        }}>
          Conseil produit, coaching PM et ressources pour équipes produit qui veulent créer de la valeur durable.
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: '#0D3243',
              border: '1px solid rgba(217,203,181,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', fontWeight: 700, color: '#D9CBB5',
            }}>V</div>
            <div>
              <div style={{ color: '#E8E4DC', fontSize: '20px', fontWeight: 600 }}>Victor Dulieu</div>
              <div style={{ color: '#5A6380', fontSize: '16px' }}>impact-led-products.com</div>
            </div>
          </div>
          <div style={{
            fontSize: '22px', fontWeight: 700,
            color: '#E8E4DC', letterSpacing: '-0.02em',
          }}>
            Impact-led <span style={{ color: '#D9CBB5' }}>products</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
