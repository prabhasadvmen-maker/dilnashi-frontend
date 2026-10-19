import React, { useState } from 'react';
import { ALL_PRODUCTS, CATEGORIES_DIRECTORY, slugify, JEWELLERY_ICONS } from '../data/coutureData';
import { HeartIcon, SparklesIcon, ArrowRightIcon } from '../components/CoutureIcons';
import { handleImageError, getFallbackImage } from '../utils/imageFallbacks';

export default function CategoryPage({ categorySlug, navigate, onToggleWishlist, isWishlisted, onQuickView }) {
  const isViewAll = categorySlug === 'all' || categorySlug === 'view-all';
  const normalizedSlug = isViewAll ? 'all' : categorySlug;

  const meta = CATEGORIES_DIRECTORY[normalizedSlug] ||
    CATEGORIES_DIRECTORY[normalizedSlug.replace(/-sets$/, '')] || {
    name: isViewAll ? 'ALL COUTURE SILHOUETTES' : (categorySlug ? categorySlug.replace(/-/g, ' ').toUpperCase() : 'COUTURE CATEGORY'),
    title: isViewAll ? 'Complete Haute Couture Portfolio' : 'Haute Silhouette Portfolio',
    subtitle: isViewAll ? 'Lehengas, Sarees, Gowns, Kurta Sets & Tailored Fusion Ensembles' : 'Ancestral craftsmanship and modern drapery',
    heroImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85',
    description: 'Designed and hand-embroidered by master artisans with pure silk, bullion wire, and Austrian crystals.',
    constructionNotes: 'Hand-tailored with internal anatomical support, hand-rolled hems, and archival finishing.',
  };

  const [activeOccasionFilter, setActiveOccasionFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('FEATURED');

  // Match products with robust alias matching
  const matchingProducts = ALL_PRODUCTS.filter((p) => {
    if (isViewAll) return true;
    const catSlug = slugify(p.category);
    return (
      catSlug === normalizedSlug ||
      catSlug.includes(normalizedSlug) ||
      normalizedSlug.includes(catSlug) ||
      (normalizedSlug.includes('lehenga') && catSlug.includes('lehenga')) ||
      (normalizedSlug.includes('blazer') && catSlug.includes('blazer')) ||
      (normalizedSlug.includes('kurta') && catSlug.includes('kurta')) ||
      (normalizedSlug.includes('sherwani') && catSlug.includes('sherwani')) ||
      (normalizedSlug.includes('bandhgala') && catSlug.includes('bandhgala')) ||
      (normalizedSlug.includes('bundi') && catSlug.includes('bundi')) ||
      (normalizedSlug.includes('shirt') && catSlug.includes('shirt')) ||
      (normalizedSlug.includes('anarkali') && catSlug.includes('anarkali')) ||
      (normalizedSlug.includes('sharara') && catSlug.includes('sharara'))
    );
  });

  const baseProducts = matchingProducts.length > 0 ? matchingProducts : ALL_PRODUCTS.slice(0, 8);

  // Occasion filter
  let filtered = activeOccasionFilter === 'ALL'
    ? baseProducts
    : baseProducts.filter((p) => p.occasion === activeOccasionFilter);

  // Sort
  if (sortBy === 'PRICE_LOW') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'PRICE_HIGH') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const categoriesList = [
    { name: 'VIEW ALL', slug: 'view-all' },
    { name: 'LEHENGA SETS', slug: 'lehenga-sets' },
    { name: 'SAREES', slug: 'sarees' },
    { name: 'ANARKALIS', slug: 'anarkalis' },
    { name: 'SHARARAS', slug: 'shararas' },
    { name: 'GOWNS', slug: 'gowns' },
    { name: 'KURTA SETS', slug: 'kurta-sets' },
    { name: 'FUSION WEAR', slug: 'fusion-wear' },
    { name: 'SHERWANI SETS', slug: 'sherwani-sets' },
    { name: 'BANDHGALA SETS', slug: 'bandhgala-sets' },
    { name: 'BLAZER & JACKET SETS', slug: 'blazer-and-jacket-sets' },
    { name: 'BUNDI SETS', slug: 'bundi-sets' },
    { name: 'SHIRTS', slug: 'shirts' },
  ];

  const occasionPills = ['ALL', 'BRIDAL', 'RECEPTION', 'SANGEET', 'COCKTAIL', 'HALDI AND MEHENDI'];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* 1. Grand Category Hero */}
      <section
        style={{
          position: 'relative',
          height: '58vh',
          minHeight: '440px',
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
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.9) 100%)',
          }}
        />

        <div className="couture-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '3.2rem', color: '#ffffff' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.68rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>HOME</span>
            <span>/</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/women')}>CATEGORIES</span>
            <span>/</span>
            <span style={{ color: 'var(--gold-bright)' }}>{meta.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--gold-bright)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <SparklesIcon size={14} color="var(--gold-bright)" />
            <span>SILHOUETTE ATELIER PORTFOLIO</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
            {meta.name}
          </h1>
          <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '700px', marginBottom: '0.8rem' }}>
            {meta.subtitle}
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: '#dedbd2', maxWidth: '700px', lineHeight: 1.6 }}>
            {meta.description}
          </p>
        </div>
      </section>

      {/* 2. Category Switcher Tabs */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)', padding: '0.9rem 0' }}>
        <div className="couture-container" style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          {categoriesList.map((cat) => {
            const isTabActive = (cat.slug === 'view-all' && isViewAll) || (!isViewAll && normalizedSlug === cat.slug);
            return (
              <button
                key={cat.slug}
                className={`brand-tab-btn ${isTabActive ? 'active' : ''}`}
                style={{ fontSize: '0.7rem', padding: '0.45rem 1.1rem' }}
                onClick={() => navigate(`/category/${cat.slug}`)}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Silhouette Craft & Architecture Note */}
      <section style={{ background: '#faf9f6', padding: '2.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="couture-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              SILHOUETTE ARCHITECTURE
            </span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              Structural Perfection
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              {meta.constructionNotes || 'Tailored with internal anatomical support, hand-rolled hems, and archival finishing.'}
            </p>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              CUSTOM FIT & SIZING
            </span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              Made To Your Exact Measurements
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              Every creation can be tailored to standard sizing (XS–XL) or custom couture measurements with personalized necklines and train lengths.
            </p>
          </div>

          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              HEIRLOOM PACKAGING
            </span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              Monogrammed Archival Chest
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
              Delivered in pure unbleached muslin wrap inside a handcrafted brass-embossed wooden trunk with lifetime archival care guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section className="couture-container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.2rem', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
              SIGNATURE CREATIONS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              {meta.name} ({filtered.length} CREATIONS)
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {occasionPills.map((occ) => (
              <button
                key={occ}
                className={`filter-pill ${activeOccasionFilter === occ ? 'active' : ''}`}
                onClick={() => setActiveOccasionFilter(occ)}
                style={{ fontSize: '0.68rem', padding: '0.35rem 0.8rem' }}
              >
                {occ}
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
                <span>{item.collection}</span>
                <span style={{ color: 'var(--gold-primary)' }}>{item.occasion}</span>
              </div>
              <h3 className="product-card-title">{item.name}</h3>
              <div className="product-card-price">{item.priceFormatted}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Virtual Try-On Banner */}
      <section className="couture-container" style={{ padding: '4.5rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', background: '#0d0c0b', color: '#ffffff', border: '1px solid var(--border-gold-light)', overflow: 'hidden' }}>
          <div style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
              AUGMENTED REALITY COUTURE
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.1em', margin: '0.6rem 0 1.2rem', lineHeight: 1.2 }}>
              Try On {meta.name} in the Virtual 3D Studio
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#dedbd2', lineHeight: 1.7, marginBottom: '2rem' }}>
              Experience lighting simulation across royal palace courtyards, candlelight receptions, and runway spotlights before committing to your bespoke commission.
            </p>
            <div>
              <button
                className="btn-gold-primary"
                style={{ fontSize: '0.75rem', padding: '0.85rem 2rem' }}
                onClick={() => navigate('/virtual-try-on')}
              >
                LAUNCH VIRTUAL TRY-ON STUDIO
              </button>
            </div>
          </div>

          <div style={{ position: 'relative', minHeight: '360px' }}>
            <img
              src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85"
              alt="Virtual Studio Demo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #0d0c0b 0%, transparent 40%)' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
