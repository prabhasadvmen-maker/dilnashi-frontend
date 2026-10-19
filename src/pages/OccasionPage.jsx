import React, { useState } from 'react';
import { ALL_PRODUCTS, OCCASIONS_DIRECTORY, slugify, JEWELLERY_ICONS } from '../data/coutureData';
import { HeartIcon, SparklesIcon, ArrowRightIcon } from '../components/CoutureIcons';
import { handleImageError } from '../utils/imageFallbacks';

export default function OccasionPage({ occasionSlug, navigate, onToggleWishlist, isWishlisted, onQuickView }) {
  const isViewAll = occasionSlug === 'all' || occasionSlug === 'view-all';
  const normalizedSlug = isViewAll ? 'all' : occasionSlug;

  const meta = OCCASIONS_DIRECTORY[normalizedSlug] || {
    name: isViewAll ? 'ALL CELEBRATIONS & OCCASIONS' : (occasionSlug ? occasionSlug.replace(/-/g, ' ').toUpperCase() : 'COUTURE OCCASION'),
    title: isViewAll ? 'Complete Festive & Bridal Portfolio' : 'Bespoke Celebration Edit',
    subtitle: isViewAll ? 'Curated silhouettes for every grand chapter of the Indian wedding' : 'Curated silhouettes for milestone festivities',
    heroImage: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1920&q=85',
    description: 'Mastercrafted silhouettes tailored for grandeur, celebratory movement, and unforgettable heirloom presence.',
    stylingTips: 'Pair with fine uncut diamond jewellery and custom monogrammed shoes.',
    atmosphere: 'Imperial Weddings & Grand Banquets',
    palette: 'Royal Vermilion, Saffron Gold, Midnight Noir & Liquid Platinum',
  };

  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('FEATURED');

  // Find products matching this occasion
  const matchingProducts = ALL_PRODUCTS.filter((p) => {
    if (isViewAll) return true;
    return slugify(p.occasion) === normalizedSlug || slugify(p.category).includes(normalizedSlug);
  });

  const baseProducts = matchingProducts.length > 0 ? matchingProducts : ALL_PRODUCTS.slice(0, 8);

  // Category filter
  let filtered = activeCategoryFilter === 'ALL'
    ? baseProducts
    : baseProducts.filter((p) => p.category === activeCategoryFilter);

  // Sort
  if (sortBy === 'PRICE_LOW') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'PRICE_HIGH') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const occasionsList = [
    { name: 'VIEW ALL', slug: 'view-all' },
    { name: 'BRIDAL', slug: 'bridal' },
    { name: 'RECEPTION', slug: 'reception' },
    { name: 'SANGEET', slug: 'sangeet' },
    { name: 'COCKTAIL', slug: 'cocktail' },
    { name: 'HALDI & MEHENDI', slug: 'haldi-and-mehendi' },
    { name: 'GROOM WEAR', slug: 'groom' },
  ];

  const categoryPills = ['ALL', 'LEHENGAS', 'SAREES', 'GOWNS', 'KURTA SETS', 'FUSION WEAR', 'SHERWANI SETS'];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* 1. Grand Occasion Hero */}
      <section
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '460px',
          background: '#0d0c0b',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <img
          src={meta.heroImage}
          alt={meta.name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.78,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.9) 100%)',
          }}
        />

        <div className="couture-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '3.5rem', color: '#ffffff' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.68rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>HOME</span>
            <span>/</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/women')}>OCCASION</span>
            <span>/</span>
            <span style={{ color: 'var(--gold-bright)' }}>{meta.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--gold-bright)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <SparklesIcon size={14} color="var(--gold-bright)" />
            <span>OCCASION ATELIER SUITE</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)', letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
            {meta.name}
          </h1>
          <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.3rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '700px', marginBottom: '1rem' }}>
            {meta.subtitle}
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: '#dedbd2', maxWidth: '700px', lineHeight: 1.6 }}>
            {meta.description}
          </p>
        </div>
      </section>

      {/* 2. Occasion Switcher Ribbon */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)', padding: '0.9rem 0' }}>
        <div className="couture-container" style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          {occasionsList.map((occ) => {
            const isTabActive = (occ.slug === 'view-all' && isViewAll) || (!isViewAll && normalizedSlug === occ.slug);
            return (
              <button
                key={occ.slug}
                className={`brand-tab-btn ${isTabActive ? 'active' : ''}`}
                style={{ fontSize: '0.7rem', padding: '0.45rem 1.1rem' }}
                onClick={() => navigate(`/occasion/${occ.slug}`)}
              >
                {occ.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Section Specific Protocol & Styling Masterclass */}
      <section style={{ background: '#faf9f6', padding: '2.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="couture-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              OCCASION ATMOSPHERE
            </span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              {meta.atmosphere || 'Imperial Weddings & Grand Banquets'}
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              Engineered for seamless transition under both natural courtyard daylight and grand indoor banquet illumination.
            </p>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              CURATED COLOR PALETTE
            </span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              {meta.palette || 'Royal Vermilion, Saffron Gold & Platinum'}
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              Drawn from historic Mughal archives and Paris couture runways to ensure majestic contrast and timeless photographs.
            </p>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              ATELIER STYLING ADVICE
            </span>
            <h4 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', fontStyle: 'italic', marginTop: '0.2rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
              "{meta.stylingTips}"
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Complimentary in-suite bridal dressing available with all bespoke couture commissions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Products Catalog Grid */}
      <section className="couture-container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.2rem', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
              CURATED SELECTIONS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              {meta.name} ({filtered.length} PIECES)
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {categoryPills.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategoryFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter(cat)}
                style={{ fontSize: '0.68rem', padding: '0.35rem 0.8rem' }}
              >
                {cat}
              </button>
            ))}

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                padding: '0.35rem 0.8rem',
                border: '1px solid var(--border-light)',
                background: '#ffffff',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              <option value="FEATURED">SORT: FEATURED</option>
              <option value="PRICE_LOW">PRICE: LOW TO HIGH</option>
              <option value="PRICE_HIGH">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

        <div className="related-grid-four">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => {
                navigate(`/product/${item.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="product-card-img-box">
                <img
                  src={item.images ? item.images[0] : item.image}
                  alt={item.name}
                  onError={(e) => handleImageError(e, item.category, item.gender)}
                />
                <button
                  className="product-card-wishlist-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(item);
                  }}
                  aria-label="Wishlist"
                >
                  <HeartIcon size={18} fill={isWishlisted(item.id) ? '#b84a4a' : 'none'} />
                </button>
                {onQuickView && (
                  <button
                    className="quick-view-hover-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(item);
                    }}
                  >
                    ✦ Quick View
                  </button>
                )}
              </div>
              <div className="product-card-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.category}</span>
                <span style={{ color: 'var(--gold-primary)' }}>{item.collection}</span>
              </div>
              <h3 className="product-card-title">{item.name}</h3>
              <div className="product-card-price">{item.priceFormatted}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. High Jewellery Guide for this Occasion */}
      <section style={{ background: '#0d0c0b', color: '#ffffff', padding: '4.5rem 0', marginTop: '5rem' }}>
        <div className="couture-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
              ROYAL ATELIER ACCENTS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', letterSpacing: '0.14em', marginTop: '0.4rem' }}>
              JEWELLERY CURATION FOR {meta.name}
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', fontStyle: 'italic', color: '#dedbd2', maxWidth: '650px', margin: '0.6rem auto 0' }}>
              Handcrafted in 22k and 24k gold with untreated Russian emeralds, Burma rubies, and syndicated uncut Polki diamonds.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {JEWELLERY_ICONS.slice(0, 4).map((j, i) => (
              <div
                key={i}
                style={{ cursor: 'pointer', textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)', padding: '1.5rem', background: 'rgba(255,255,255,0.03)' }}
                onClick={() => navigate('/jewellery')}
              >
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', marginBottom: '1rem' }}>
                  <img
                    src={j.image}
                    alt={j.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
                  CERTIFIED BIS 22K
                </span>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
                  {j.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bespoke Trousseau Booking Banner */}
      <section className="couture-container" style={{ padding: '4.5rem 0' }}>
        <div style={{ padding: '3rem', background: 'var(--bg-cream)', border: '1px solid var(--border-light)', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
            BESPOKE TROUSSEAU CONCIERGE
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', letterSpacing: '0.08em', margin: '0.5rem 0 1rem' }}>
            Planning Your {meta.name} Wardrobe?
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', maxWidth: '580px', margin: '0 auto 1.8rem', lineHeight: 1.6 }}>
            Connect with our senior bridal and occasion couturiers for comprehensive trousseau planning, family coordination, and private bespoke trials.
          </p>
          <button
            className="btn-gold-primary"
            style={{ fontSize: '0.75rem', padding: '0.85rem 2.2rem' }}
            onClick={() => navigate('/about')}
          >
            SCHEDULE PRIVATE OCCASION CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
}
