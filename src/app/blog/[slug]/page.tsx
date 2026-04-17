import { getPost, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingTop: '64px' }}>

      {/* Header article */}
      <section style={{
        padding: '4rem 1.5rem 3rem',
        background: 'var(--bg-base)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-amber" style={{ width: '350px', height: '350px', top: '-50px', right: '5%', opacity: 0.25 }} />
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Retour */}
          <Link
            href="/blog"
            className="link-hover-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              marginBottom: '2rem',
              transition: 'color 0.2s ease',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Publications
          </Link>

          {/* Tag + meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{
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
              {post.tag}
            </span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
            }}>
              {post.date} · {post.readingTime} de lecture
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            {post.title}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}>
            {post.description}
          </p>
        </div>
      </section>

      {/* Contenu MDX */}
      <section style={{ padding: '3.5rem 1.5rem 5rem', maxWidth: '760px', margin: '0 auto' }}>
        <div className="prose-dark">
          <MDXRemote source={post.content} />
        </div>

        {/* Auteur */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--accent)' }}>V</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.125rem' }}>
              Victor Dulieu
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Product Manager & Builder senior · Impact-led products
            </div>
          </div>
        </div>

        {/* Navigation retour */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              padding: '0.75rem 1.75rem',
              borderRadius: '8px',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
          >
            ← Toutes les publications
          </Link>
        </div>
      </section>
    </div>
  );
}
