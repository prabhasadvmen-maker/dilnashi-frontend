import React, { useState } from 'react';
import { CloseIcon, DilnashiCrest, CheckIcon } from './CoutureIcons';
import { ATELIER_LOCATIONS } from '../data/coutureData';

export default function AppointmentModal({ isOpen, onClose }) {
  const [salon, setSalon] = useState('NEW DELHI');
  const [appointmentType, setAppointmentType] = useState('Bridal Couture Trousseau');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="couture-modal-backdrop" onClick={onClose}>
      <div
        style={{
          width: '100%',
          maxWidth: '700px',
          background: '#ffffff',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-mega)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: '1.8rem 2.2rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-cream)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img
              src="/dilnashi-gold-logo.png"
              alt="DILNASHI"
              style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
            />
            <div>
              <h3 style={{ fontSize: '0.95rem', letterSpacing: '0.16em' }}>BOOK A PRIVATE ATELIER APPOINTMENT</h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Exclusive 1-on-1 Couture Consultation & Custom Fittings</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close">
            <CloseIcon size={20} />
          </button>
        </div>

        <div style={{ padding: '2rem 2.2rem', maxHeight: '520px', overflowY: 'auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--gold-soft)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <CheckIcon size={32} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', letterSpacing: '0.12em', marginBottom: '0.8rem' }}>
                APPOINTMENT CONFIRMED
              </h3>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: 'var(--text-body)', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                Thank you, {name || 'esteemed client'}. Your bespoke couture appointment has been scheduled for {salon}. Our Senior Bridal Concierge will reach out via WhatsApp & phone to confirm your bespoke styling preferences.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Select Atelier Salon
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
                  {(ATELIER_LOCATIONS || []).map((loc) => (
                    <div
                      key={loc.city}
                      onClick={() => setSalon(loc.city)}
                      style={{
                        padding: '0.8rem',
                        border: `1px solid ${salon === loc.city ? 'var(--gold-primary)' : 'var(--border-light)'}`,
                        background: salon === loc.city ? 'var(--gold-soft)' : '#fff',
                        cursor: 'pointer',
                        borderRadius: '2px',
                        transition: 'var(--transition-fast)',
                      }}
                    >
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em' }}>{loc.city}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{loc.name}</div>
                    </div>
                  ))}
                  <div
                    onClick={() => setSalon('VIRTUAL')}
                    style={{
                      padding: '0.8rem',
                      gridColumn: 'span 2',
                      border: `1px solid ${salon === 'VIRTUAL' ? 'var(--gold-primary)' : 'var(--border-light)'}`,
                      background: salon === 'VIRTUAL' ? 'var(--gold-soft)' : '#fff',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>GLOBAL VIRTUAL SUITE (ZOOM HD)</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Experience bespoke fabric & 3D draped consultations anywhere in the world</div>
                    </div>
                    <span style={{ fontSize: '0.65rem', background: 'var(--gold-bright)', color: '#000', padding: '0.2rem 0.5rem', fontWeight: 700, borderRadius: '2px' }}>
                      WORLDWIDE
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem', marginBottom: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maharani Ananya"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem', marginBottom: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@luxury.com"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Preferred Appointment Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Consultation Interest
                </label>
                <select
                  value={appointmentType}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', fontSize: '0.85rem', background: '#fff' }}
                >
                  <option value="Bridal Couture Trousseau">Bridal Couture & Royal Trousseau</option>
                  <option value="Groom Heritage Sherwani">Groom Heritage Sherwani & Safa</option>
                  <option value="Cocktail & Sangeet Evening Wear">Cocktail & Sangeet Evening Wear</option>
                  <option value="Uncut Polki & High Jewellery Consultation">Uncut Polki & High Jewellery Consultation</option>
                  <option value="Red Carpet & Gala Attire">Red Carpet & Gala Attire</option>
                </select>
              </div>

              <button type="submit" className="btn-luxury-gold" style={{ width: '100%', padding: '1rem' }}>
                CONFIRM PRIVATE APPOINTMENT
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
