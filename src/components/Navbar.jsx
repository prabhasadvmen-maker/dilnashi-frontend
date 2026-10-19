import React, { useState } from 'react';
import {
  DilnashiCrest,
  SearchIcon,
  HeartIcon,
  BagIcon,
  UserIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  SparklesIcon,
} from './CoutureIcons';
import { NAVIGATION, WOMEN_MEGA_MENU, MEN_MEGA_MENU, slugify } from '../data/coutureData';

export default function Navbar({
  currentPath,
  navigate,
  activeUniverse,
  setActiveUniverse,
  wishlistCount,
  cartCount,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  onOpenAppointment,
}) {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'women' | 'men' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-wrapper">
      {/* Ultra-Luxury Gold Ticker Announcement Ribbon */}
      <div className="luxury-ticker-bar">
        <div className="luxury-ticker-track">
          <span>⚜️ COMPLIMENTARY WORLDWIDE INSURED DELIVERY</span>
          <span>•</span>
          <span>PRIVATE ATELIER APPOINTMENTS IN NEW DELHI, MUMBAI, DUBAI & LONDON</span>
          <span>•</span>
          <span>VIRTUAL 3D TRY-ON SUITE LIVE</span>
          <span>•</span>
          <span>AUTUMN/WINTER 2026 BRIDAL COUTURE PREVIEW</span>
          <span>•</span>
          <span>HANDCRAFTED BY 800+ MASTER KARIGARS</span>
          <span>⚜️</span>
          <span>⚜️ COMPLIMENTARY WORLDWIDE INSURED DELIVERY</span>
          <span>•</span>
          <span>PRIVATE ATELIER APPOINTMENTS IN NEW DELHI, MUMBAI, DUBAI & LONDON</span>
          <span>•</span>
          <span>VIRTUAL 3D TRY-ON SUITE LIVE</span>
          <span>•</span>
          <span>AUTUMN/WINTER 2026 BRIDAL COUTURE PREVIEW</span>
          <span>•</span>
          <span>HANDCRAFTED BY 800+ MASTER KARIGARS</span>
          <span>⚜️</span>
        </div>
      </div>

      {/* Top Utility Tier */}
      <div className="header-top-bar">
        {/* Left: Couture / Jewellery / Accessories Switcher */}
        <div className="brand-universe-tabs">
          <button
            className={`brand-tab-btn ${activeUniverse === 'COUTURE' ? 'active' : ''}`}
            onClick={() => {
              setActiveUniverse('COUTURE');
              navigate('/women');
            }}
          >
            COUTURE
          </button>
          <button
            className={`brand-tab-btn ${activeUniverse === 'JEWELLERY' ? 'active' : ''}`}
            onClick={() => {
              setActiveUniverse('JEWELLERY');
              navigate('/jewellery');
            }}
          >
            JEWELLERY
          </button>
          <button
            className={`brand-tab-btn ${activeUniverse === 'ACCESSORIES' ? 'active' : ''}`}
            onClick={() => {
              setActiveUniverse('ACCESSORIES');
              navigate('/new-arrivals');
            }}
          >
            ACCESSORIES
          </button>
        </div>

        {/* Center: DILNASHI Regal Monogram & Logo */}
        <div className="brand-logo-center" onClick={() => handleNavClick('/')} title="DILNASHI Haute Couture Home">
          <img
            src="/dilnashi-gold-logo.png"
            alt="DILNASHI Haute Couture & High Jewellery"
            className="navbar-brand-gold-logo"
            style={{
              height: '58px',
              width: 'auto',
              maxHeight: '62px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              transition: 'transform 0.3s ease',
              filter: 'drop-shadow(0 2px 4px rgba(184, 134, 11, 0.15))',
            }}
          />
          <span
            className="brand-logo-sub"
            style={{
              fontSize: '0.53rem',
              letterSpacing: '0.34em',
              color: 'var(--gold-deep)',
              marginTop: '1px',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            HAUTE COUTURE & HIGH JEWELLERY
          </span>
        </div>

        {/* Right: Actions (Search, Wishlist, Cart, VIP Atelier) */}
        <div className="header-actions">
          <button
            className="header-action-btn"
            onClick={onOpenSearch}
            title="Search Couture & Jewellery"
            aria-label="Search"
          >
            <SearchIcon size={20} />
          </button>

          <button
            className="header-action-btn"
            onClick={onOpenWishlist}
            title="Your Wishlist"
            aria-label="Wishlist"
          >
            <HeartIcon size={20} />
            {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
          </button>

          <button
            className="header-action-btn"
            onClick={onOpenCart}
            title="Shopping Bag"
            aria-label="Cart"
          >
            <BagIcon size={20} />
            {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
          </button>

          <button
            className="header-action-btn"
            onClick={onOpenAppointment}
            title="Private Atelier Appointment"
            aria-label="Account / Appointment"
          >
            <UserIcon size={20} />
          </button>

          {/* Mobile hamburger */}
          <button
            className="header-action-btn mobile-menu-toggle"
            style={{ display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav
        className="header-nav-bar"
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        {NAVIGATION.map((item) => {
          const isActive = currentPath === item.path;

          return (
            <div
              key={item.id}
              className="nav-item-wrapper"
              onMouseEnter={() => {
                if (item.id === 'women') setActiveMegaMenu('women');
                else if (item.id === 'men') setActiveMegaMenu('men');
                else setActiveMegaMenu(null);
              }}
            >
              <button
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.path)}
              >
                {item.isNew && <span className="new-tag">NEW</span>}
                {item.label}
              </button>
            </div>
          );
        })}

        {/* Mega Menu: WOMEN (Screenshot 2 exact replica) */}
        {activeMegaMenu === 'women' && (
          <div
            className="mega-menu-container couture-container"
            onMouseEnter={() => setActiveMegaMenu('women')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            {/* Col 1: Collections */}
            <div>
              <h4 className="mega-column-title">COLLECTIONS</h4>
              <div className="mega-links-list">
                {WOMEN_MEGA_MENU.collections.map((col, idx) => (
                  <a
                    key={idx}
                    href={`#/collection/${slugify(col)}`}
                    className="mega-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/collection/${slugify(col)}`);
                    }}
                  >
                    {col}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Occasion */}
            <div>
              <h4 className="mega-column-title">OCCASION</h4>
              <div className="mega-links-list">
                {WOMEN_MEGA_MENU.occasions.map((occ, idx) => (
                  <a
                    key={idx}
                    href={`#/occasion/${slugify(occ)}`}
                    className="mega-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/occasion/${slugify(occ)}`);
                    }}
                  >
                    {occ}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Categories */}
            <div>
              <h4 className="mega-column-title">CATEGORIES</h4>
              <div className="mega-links-list">
                {WOMEN_MEGA_MENU.categories.map((cat, idx) => (
                  <a
                    key={idx}
                    href={`#/category/${slugify(cat)}`}
                    className="mega-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/category/${slugify(cat)}`);
                    }}
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: 3 Curated Model Cards */}
            <div>
              <div className="mega-showcase-grid">
                {(WOMEN_MEGA_MENU?.featuredCards || []).map((card, idx) => (
                  <div
                    key={idx}
                    className="mega-card"
                    onClick={() => handleNavClick('/women')}
                  >
                    <img src={card.image} alt={card.title} />
                    <div className="mega-card-overlay">
                      <span className="mega-card-tag">{card.tag}</span>
                      <h5 className="mega-card-title">{card.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mega Menu: MEN (Screenshot 3 exact replica) */}
        {activeMegaMenu === 'men' && (
          <div
            className="mega-menu-container couture-container"
            onMouseEnter={() => setActiveMegaMenu('men')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            {/* Col 1: Collections */}
            <div>
              <h4 className="mega-column-title">COLLECTIONS</h4>
              <div className="mega-links-list">
                {MEN_MEGA_MENU.collections.map((col, idx) => (
                  <a
                    key={idx}
                    href={`#/collection/${slugify(col)}`}
                    className="mega-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/collection/${slugify(col)}`);
                    }}
                  >
                    {col}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Occasion */}
            <div>
              <h4 className="mega-column-title">OCCASION</h4>
              <div className="mega-links-list">
                {MEN_MEGA_MENU.occasions.map((occ, idx) => (
                  <a
                    key={idx}
                    href={`#/occasion/${slugify(occ)}`}
                    className="mega-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/occasion/${slugify(occ)}`);
                    }}
                  >
                    {occ}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Categories */}
            <div>
              <h4 className="mega-column-title">CATEGORIES</h4>
              <div className="mega-links-list">
                {MEN_MEGA_MENU.categories.map((cat, idx) => (
                  <a
                    key={idx}
                    href={`#/category/${slugify(cat)}`}
                    className="mega-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/category/${slugify(cat)}`);
                    }}
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: 3 Curated Menswear Cards */}
            <div>
              <div className="mega-showcase-grid">
                {(MEN_MEGA_MENU?.featuredCards || []).map((card, idx) => (
                  <div
                    key={idx}
                    className="mega-card"
                    onClick={() => handleNavClick('/men')}
                  >
                    <img src={card.image} alt={card.title} />
                    <div className="mega-card-overlay">
                      <span className="mega-card-tag">{card.tag}</span>
                      <h5 className="mega-card-title">{card.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="couture-modal-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="couture-slideover"
            style={{ left: 0, right: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <DilnashiCrest className="w-8 h-8" />
                <span style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.2em', fontWeight: 600 }}>DILNASHI</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <CloseIcon size={20} />
              </button>
            </div>
            <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {NAVIGATION.map((item) => (
                <button
                  key={item.id}
                  style={{
                    textAlign: 'left',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.95rem',
                    letterSpacing: '0.12em',
                    color: currentPath === item.path ? 'var(--gold-primary)' : 'var(--text-main)',
                  }}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </button>
              ))}
              <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                <button
                  className="btn-luxury-gold"
                  style={{ width: '100%' }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                >
                  BOOK PRIVATE APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
