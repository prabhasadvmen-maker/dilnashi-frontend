import React from 'react';
import { CloseIcon, DilnashiCrest } from './CoutureIcons';

export default function SizeGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="couture-modal-backdrop" onClick={onClose}>
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          background: '#ffffff',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-mega)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-cream)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <DilnashiCrest className="w-8 h-8" />
            <h3 style={{ fontSize: '0.95rem', letterSpacing: '0.14em' }}>DILNASHI COUTURE SIZE & MEASUREMENT GUIDE</h3>
          </div>
          <button onClick={onClose} aria-label="Close">
            <CloseIcon size={20} />
          </button>
        </div>

        <div style={{ padding: '2rem', maxHeight: '500px', overflowY: 'auto' }}>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            All DILNASHI pieces are crafted with standard 4-inch bespoke inlay margins, allowing seamless alteration. We also offer complimentary custom pattern construction for every client.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem', marginBottom: '2rem' }}>
            <thead>
              <tr style={{ background: '#f5f2eb', borderBottom: '1px solid var(--border-light)' }}>
                <th style={{ padding: '0.75rem 1rem' }}>SIZE</th>
                <th style={{ padding: '0.75rem 1rem' }}>BUST (INCHES)</th>
                <th style={{ padding: '0.75rem 1rem' }}>WAIST (INCHES)</th>
                <th style={{ padding: '0.75rem 1rem' }}>HIP (INCHES)</th>
                <th style={{ padding: '0.75rem 1rem' }}>LEHENGA LENGTH</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>XS (UK 6 / US 2)</td>
                <td style={{ padding: '0.75rem 1rem' }}>32" - 33"</td>
                <td style={{ padding: '0.75rem 1rem' }}>25" - 26"</td>
                <td style={{ padding: '0.75rem 1rem' }}>35" - 36"</td>
                <td style={{ padding: '0.75rem 1rem' }}>42"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>S (UK 8 / US 4)</td>
                <td style={{ padding: '0.75rem 1rem' }}>34" - 35"</td>
                <td style={{ padding: '0.75rem 1rem' }}>27" - 28"</td>
                <td style={{ padding: '0.75rem 1rem' }}>37" - 38"</td>
                <td style={{ padding: '0.75rem 1rem' }}>42.5"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>M (UK 10 / US 6)</td>
                <td style={{ padding: '0.75rem 1rem' }}>36" - 37"</td>
                <td style={{ padding: '0.75rem 1rem' }}>29" - 30"</td>
                <td style={{ padding: '0.75rem 1rem' }}>39" - 40"</td>
                <td style={{ padding: '0.75rem 1rem' }}>43"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>L (UK 12 / US 8)</td>
                <td style={{ padding: '0.75rem 1rem' }}>38" - 39"</td>
                <td style={{ padding: '0.75rem 1rem' }}>31" - 32"</td>
                <td style={{ padding: '0.75rem 1rem' }}>41" - 42"</td>
                <td style={{ padding: '0.75rem 1rem' }}>43.5"</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>XL (UK 14 / US 10)</td>
                <td style={{ padding: '0.75rem 1rem' }}>40" - 42"</td>
                <td style={{ padding: '0.75rem 1rem' }}>33" - 35"</td>
                <td style={{ padding: '0.75rem 1rem' }}>43" - 45"</td>
                <td style={{ padding: '0.75rem 1rem' }}>44"</td>
              </tr>
              <tr style={{ background: 'var(--gold-soft)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--gold-deep)' }}>CUSTOM SIZE</td>
                <td colSpan={4} style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>
                  Tailored to your exact 35 measurements via video fitting or atelier visit.
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ textAlign: 'center' }}>
            <button className="btn-luxury-primary" onClick={onClose}>
              CLOSE SIZE GUIDE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
