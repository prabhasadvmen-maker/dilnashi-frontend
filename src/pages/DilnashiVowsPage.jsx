import React from 'react';
import { DilnashiCrest, ArrowRightIcon } from '../components/CoutureIcons';

export default function DilnashiVowsPage({ navigate, onOpenAppointment }) {
  const realWeddings = [
    {
      couple: 'Ananya & Kabir',
      venue: 'Lake Palace, Udaipur',
      quote: 'Walking down the marble steps in my Dilnashi ivory chikankari lehenga felt like living inside a royal dream.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85',
      outfits: 'Custom Ivory Resham Lehenga & Saffron Matka Silk Sherwani',
    },
    {
      couple: 'Meera & Rohan',
      venue: 'Villa d’Este, Lake Como',
      quote: 'The craftsmanship and precision fitting by the Dilnashi atelier exceeded every expectation.',
      image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=85',
      outfits: 'Metallic Rose Gold Taban Gown & Midnight Velvet Bandhgala',
    },
    {
      couple: 'Zoya & Farhan',
      venue: 'The Dorchester, London',
      quote: 'Having the couturier personally sketch my bridal veil with our wedding date hand-embroidered was unforgettable.',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85',
      outfits: 'Blush Pink Fishbone Mijwan Lehenga & Classic Ivory Achkan',
    },
  ];

  return (
    <div style={{ padding: '3.5rem 0 6rem', background: '#faf8f5' }}>
      <div className="couture-container">
        {/* Banner */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <DilnashiCrest className="w-12 h-12" color="var(--gold-primary)" />
          <span className="section-eyebrow" style={{ marginTop: '0.8rem', display: 'block' }}>
            THE BESPOKE BRIDAL ATELIER
          </span>
          <h1 className="section-main-title">DILNASHI VOWS</h1>
          <p className="section-subtitle-italic" style={{ maxWidth: '680px', margin: '0.5rem auto 2.5rem' }}>
            Creating the bridal dreams of a lifetime. Where heirloom needlework, authentic zardozi, and contemporary romanticism converge.
          </p>
          <button className="btn-luxury-gold" onClick={onOpenAppointment}>
            SCHEDULE BRIDAL CONCIERGE APPOINTMENT
          </button>
        </div>

        {/* Real Weddings Gallery */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '0.14em', marginBottom: '2.5rem' }}>
            REAL DILNASHI BRIDES & GROOMS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {realWeddings.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  borderRadius: '4px',
                }}
              >
                <div style={{ height: '420px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.couple}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.8rem' }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
                    {item.venue}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', margin: '0.4rem 0 0.8rem' }}>
                    {item.couple}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-body)', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                    "{item.quote}"
                  </p>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.outfits}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 5 Trousseau Pillars */}
        <div style={{ background: '#ffffff', border: '1px solid var(--border-light)', padding: '3.5rem', textAlign: 'center' }}>
          <span className="section-eyebrow">CURATING YOUR CELEBRATION</span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', letterSpacing: '0.12em', marginBottom: '2rem' }}>
            THE COMPLETE DILNASHI TROUSSEAU
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '1.5rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)' }}>01</div>
              <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.1em', margin: '0.5rem 0' }}>HALDI & MEHENDI</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lightweight resham & vibrant organza sets</p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)' }}>02</div>
              <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.1em', margin: '0.5rem 0' }}>SANGEET NIGHT</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>High-sparkle metallic taban lehengas</p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)' }}>03</div>
              <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.1em', margin: '0.5rem 0' }}>PHERAS / WEDDING</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Heirloom zardozi bridal lehenga & sherwani</p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)' }}>04</div>
              <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.1em', margin: '0.5rem 0' }}>GRAND RECEPTION</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fishtail gowns & velvet royal bandhgalas</p>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)' }}>05</div>
              <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.1em', margin: '0.5rem 0' }}>HIGH JEWELLERY</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Certified uncut polki diamond suites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
