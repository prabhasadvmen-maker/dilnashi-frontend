import React from 'react';
import { ATELIER_LOCATIONS, BRAND } from '../data/coutureData';
import { DilnashiCrest, MapPinIcon, PhoneIcon } from '../components/CoutureIcons';

export default function AboutUsPage({ onOpenAppointment }) {
  return (
    <div style={{ padding: '3.5rem 0 6rem', background: '#ffffff' }}>
      <div className="couture-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <DilnashiCrest className="w-16 h-16" color="var(--gold-primary)" />
          <span className="section-eyebrow" style={{ marginTop: '1rem', display: 'block' }}>
            THREE DECADES OF BESPOKE EXCELLENCE
          </span>
          <h1 className="section-main-title">THE HOUSE OF DILNASHI</h1>
          <p className="section-subtitle-italic" style={{ maxWidth: '720px', margin: '0.8rem auto 0' }}>
            Where ancient Indian needlecraft meets contemporary architectural opulence. An ode to craftsmanship, heritage, and the women who weave eternity.
          </p>
        </div>

        {/* Narrative Split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.22em', color: 'var(--gold-primary)', fontWeight: 600 }}>
              OUR FOUNDING PHILOSOPHY
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.1em', margin: '0.6rem 0 1.2rem' }}>
              REVIVING THE LOST ART OF AWADH
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '1.5rem' }}>
              Founded in 1994, DILNASHI was born with a singular, unyielding vision: to elevate the forgotten craft traditions of royal India into the most coveted salons of Paris and global red carpets.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              From the quiet courtyards of Kakori and Mijwan where female karigars hand-stitch delicate bakhia and phanda knots, to our private fittings in Mayfair and Mumbai, every DILNASHI silhouette is a living tapestry of culture, precision, and soul.
            </p>
          </div>

          <div style={{ height: '480px', overflow: 'hidden', boxShadow: 'var(--shadow-luxury)' }}>
            <img
              src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=85"
              alt="Artisan Weaving"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* The Mijwan Artisan Welfare Project */}
        <div style={{ background: '#faf8f5', border: '1px solid var(--border-light)', padding: '4rem 3rem', textAlign: 'center', marginBottom: '6rem' }}>
          <span className="section-eyebrow">ETHICAL HAUTE COUTURE</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.12em', marginBottom: '1.2rem' }}>
            THE MIJWAN ARTISAN EMPOWERMENT PROJECT
          </h2>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.2rem', color: 'var(--text-body)', maxWidth: '780px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            DILNASHI proudly sustains and employs over 450 generational women artisans in Uttar Pradesh. By providing health security, equitable living wages, and vocational design academies, we ensure that the poetry of Chikankari and Zardozi thrives for generations to come.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--gold-primary)', fontWeight: 600 }}>450+</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', marginTop: '0.4rem' }}>WOMEN ARTISANS EMPLOYED</div>
            </div>
            <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--gold-primary)', fontWeight: 600 }}>1,200+</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', marginTop: '0.4rem' }}>HOURS PER HEIRLOOM LEHENGA</div>
            </div>
            <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--gold-primary)', fontWeight: 600 }}>30</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', marginTop: '0.4rem' }}>YEARS OF COUTURE HERITAGE</div>
            </div>
          </div>
        </div>

        {/* Global Ateliers & Salons */}
        <div>
          <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.8rem', letterSpacing: '0.14em', marginBottom: '3rem' }}>
            OUR FLAGSHIP ATELIERS & SALONS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {(ATELIER_LOCATIONS || []).map((loc) => (
              <div
                key={loc.city}
                style={{
                  border: '1px solid var(--border-light)',
                  padding: '2rem 1.5rem',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '4px',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', fontWeight: 600 }}>
                    {loc.city}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: '0.4rem 0 1rem' }}>
                    {loc.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-body)', marginBottom: '0.8rem', lineHeight: '1.5' }}>
                    <MapPinIcon size={18} color="var(--gold-primary)" />
                    <span>{loc.address}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                    <PhoneIcon size={18} color="var(--gold-primary)" />
                    <span>{loc.phone}</span>
                  </div>
                </div>

                <button
                  className="btn-luxury-outline"
                  style={{ width: '100%', padding: '0.7rem', fontSize: '0.68rem' }}
                  onClick={onOpenAppointment}
                >
                  BOOK VISIT
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
