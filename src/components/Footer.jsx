import React, { useState } from 'react';
import { DilnashiCrest, ArrowRightIcon } from './CoutureIcons';

export default function Footer({ navigate }) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="couture-footer">
      <div className="couture-container">
        {/* Single Cohesive Brand Gold Logo */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-light)' }}>
          <img
            src="/dilnashi-gold-logo.png"
            alt="DILNASHI Haute Couture & High Jewellery"
            style={{
              height: '95px',
              width: 'auto',
              objectFit: 'contain',
              margin: '0 auto 0.6rem',
              display: 'block',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.36em',
              color: 'var(--gold-deep)',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            HAUTE COUTURE & HIGH JEWELLERY • NEW DELHI • MUMBAI • DUBAI • LONDON
          </span>
        </div>

        <div className="footer-top-grid">
          {/* Col 1: Newsletter & Stores */}
          <div>
            <h4 className="footer-newsletter-title">
              Sign up for our newsletter to get exclusive updates and surprise launch events pass.
            </h4>
            
            <form onSubmit={handleSubscribe} className="footer-input-row">
              <input
                type="email"
                placeholder="Your email"
                className="footer-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe" style={{ color: 'var(--gold-primary)' }}>
                <ArrowRightIcon size={18} />
              </button>
            </form>

            {subscribed && (
              <p style={{ fontSize: '0.72rem', color: '#2e7d32', marginBottom: '0.8rem' }}>
                Thank you for subscribing to Dilnashi Private Salon updates.
              </p>
            )}

            <label className="footer-terms-row">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>I agree with <a href="#terms" onClick={(e) => { e.preventDefault(); navigate('/about'); }} style={{ textDecoration: 'underline' }}>Terms and conditions</a></span>
            </label>

            <div style={{ marginTop: '2rem' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                4 Flagship Ateliers Worldwide
              </span>
              <a
                href="#find-store"
                className="footer-find-store-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                }}
              >
                Find a Store
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', color: 'var(--text-main)', fontSize: '0.8rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">Facebook</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" title="Pinterest">Pinterest</a>
            </div>
          </div>

          {/* Col 2: The Company */}
          <div>
            <h4 className="footer-col-heading">THE COMPANY</h4>
            <div className="footer-links-list">
              <a href="#about" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About Us</a>
              <a href="#press" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Press & Editorial</a>
              <a href="#sustainability" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Sustainability</a>
              <a href="#couture-process" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/vows'); }}>Couture Process</a>
              <a href="#runways" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/runways'); }}>Runways</a>
              <a href="#association" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Mijwan Association</a>
              <a href="#career" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Careers at Atelier</a>
            </div>
          </div>

          {/* Col 3: Need Help */}
          <div>
            <h4 className="footer-col-heading">NEED HELP</h4>
            <div className="footer-links-list">
              <a href="#contact" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Contact Us</a>
              <a href="#visit" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Visit Store / Salon</a>
              <a href="#shipping" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Shipping & White Glove</a>
              <a href="#faqs" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Bespoke FAQs</a>
              <a href="#profile" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>VIP Client Profile</a>
            </div>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="footer-col-heading">LEGAL</h4>
            <div className="footer-links-list">
              <a href="#privacy" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Privacy & Cookies Policy</a>
              <a href="#payment" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Safe & Secure Payment</a>
              <a href="#terms" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Terms & Conditions</a>
              <a href="#authenticity" className="footer-link-item" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Certificate of Authenticity</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 DILNASHI HAUTE COUTURE. All Rights Reserved.
          </div>
          <div>
            Bespoke Haute Couture Atelier: Dilnashi Global
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span>Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-light)',
                padding: '0.2rem 0.5rem',
                fontSize: '0.72rem',
                fontFamily: 'inherit',
                cursor: 'pointer',
              }}
            >
              <option value="INR">🇮🇳 INR (₹)</option>
              <option value="USD">🇺🇸 USD ($)</option>
              <option value="EUR">🇪🇺 EUR (€)</option>
              <option value="GBP">🇬🇧 GBP (£)</option>
              <option value="AED">🇦🇪 AED (د.إ)</option>
            </select>
          </div>
        </div>

      </div>
    </footer>
  );
}
