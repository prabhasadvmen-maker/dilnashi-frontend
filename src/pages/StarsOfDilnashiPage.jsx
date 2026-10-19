import React from 'react';
import { CELEBRITIES } from '../data/coutureData';
import { ArrowRightIcon } from '../components/CoutureIcons';

export default function StarsOfDilnashiPage({ navigate }) {
  const extendedStars = [
    ...CELEBRITIES,
    {
      id: 5,
      name: 'KAREENA KAPOOR KHAN',
      occasion: 'Royal Wedding Delhi',
      outfit: 'Rose Pink Chikankari Organza Saree',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
      details: 'Hand-woven blush organza saree embroidered with authentic gold bullion wire and paired with an antique zardozi blouse.',
    },
    {
      id: 6,
      name: 'RANVEER SINGH',
      occasion: 'Cannes Film Festival Gala',
      outfit: 'Sculpted Obsidian Tuxedo Cape',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
      details: 'Velvet evening tuxedo jacket with architectural sweeping cape embroidered with black jet crystals.',
    },
  ];

  return (
    <div style={{ padding: '3.5rem 0 6rem', background: '#ffffff' }}>
      <div className="couture-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">RED CARPET & WEDDING ARCHIVE</span>
          <h1 className="section-main-title">STARS OF DILNASHI</h1>
          <p className="section-subtitle-italic" style={{ marginBottom: 0 }}>
            Global icons, royalty, and stars styled in bespoke Dilnashi Couture
          </p>
        </div>

        {/* Celebrity Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {extendedStars.map((star) => (
            <div
              key={star.id}
              style={{
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                background: '#faf8f5',
                borderRadius: '4px',
              }}
            >
              <div style={{ height: '460px', overflow: 'hidden' }}>
                <img
                  src={star.image}
                  alt={star.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              <div style={{ padding: '1.8rem' }}>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {star.occasion}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', letterSpacing: '0.1em', margin: '0.4rem 0 0.6rem' }}>
                  {star.name}
                </h3>
                <h4 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '0.8rem' }}>
                  {star.outfit}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                  {star.details}
                </p>
                <button
                  className="btn-luxury-outline"
                  style={{ width: '100%', padding: '0.75rem', fontSize: '0.7rem' }}
                  onClick={() => navigate('/women')}
                >
                  ACQUIRE THIS BESPOKE SILHOUETTE <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
