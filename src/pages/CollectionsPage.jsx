import React from 'react';
import { COLLECTIONS_DIRECTORY, slugify } from '../data/coutureData';
import { ArrowRightIcon, SparklesIcon } from '../components/CoutureIcons';

export default function CollectionsPage({ navigate }) {
  const collectionsList = Object.entries(COLLECTIONS_DIRECTORY).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <div style={{ padding: '3.5rem 0 6rem', background: '#faf8f5' }}>
      <div className="couture-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">ARCHIVE & RUNWAY COUTURE</span>
          <h1 className="section-main-title">ALL HAUTE COUTURE COLLECTIONS</h1>
          <p className="section-subtitle-italic" style={{ marginBottom: 0 }}>
            Sixteen distinct design universes celebrating Awadh craftsmanship, Paris runways, and regal wedding vows
          </p>
        </div>

        {/* Collections Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {collectionsList.map((col) => (
            <div
              key={col.slug}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
            >
              <div
                style={{
                  height: '320px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => navigate(`/collection/${col.slug}`)}
              >
                <img
                  src={col.heroImage}
                  alt={col.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(0,0,0,0.7)', color: 'var(--gold-bright)', fontSize: '0.65rem', letterSpacing: '0.18em', padding: '4px 10px', textTransform: 'uppercase' }}>
                  {col.year} EDITION
                </div>
              </div>

              <div
                style={{
                  padding: '2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', fontWeight: 600 }}>
                    COUTURE ARCHIVE
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '0.1em', margin: '0.4rem 0 0.5rem' }}>
                    {col.name}
                  </h3>
                  <h5 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                    {col.subtitle}
                  </h5>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', lineHeight: '1.6', color: 'var(--text-body)', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {col.description}
                  </p>
                </div>

                <div>
                  <button
                    className="btn-luxury-primary"
                    style={{ width: '100%', fontSize: '0.72rem', padding: '0.65rem 1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                    onClick={() => navigate(`/collection/${col.slug}`)}
                  >
                    EXPLORE COLLECTION <ArrowRightIcon size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
