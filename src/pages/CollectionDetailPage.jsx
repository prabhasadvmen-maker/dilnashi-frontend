import React, { useState } from 'react';
import { ALL_PRODUCTS, COLLECTIONS_DIRECTORY, slugify, JEWELLERY_ICONS } from '../data/coutureData';
import { HeartIcon, SparklesIcon, ArrowRightIcon, BagIcon, CheckIcon } from '../components/CoutureIcons';
import { handleImageError } from '../utils/imageFallbacks';

export default function CollectionDetailPage({ collectionSlug, navigate, onToggleWishlist, isWishlisted, onQuickView }) {
  // Find collection metadata or fallback
  const meta = COLLECTIONS_DIRECTORY[collectionSlug] || {
    name: collectionSlug ? collectionSlug.replace(/-/g, ' ').toUpperCase() : 'COUTURE COLLECTION',
    subtitle: 'Haute Couture Archive',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85',
    description: 'An exploration of ancestral Indian hand-embroidery and contemporary silhouette architecture, tailored to absolute perfection at the DILNASHI Ateliers.',
    highlights: ['Artisan Hand-Embroidered', 'Pure Heirloom Silks', 'Made to Measure', 'Worldwide Insured White-Glove Delivery'],
    fabricNotes: 'Hand-loomed in pure Katan silk, tissue organza, and liquid metallic taban.',
    artisanHours: '1,000+ Hand Needlework Hours',
    lookbookImages: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    ],
  };

  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('FEATURED');
  const [activeFaq, setActiveFaq] = useState(null);

  // Find products belonging to this collection
  const matchingProducts = ALL_PRODUCTS.filter((p) => {
    return slugify(p.collection) === collectionSlug || slugify(p.name).includes(collectionSlug);
  });

  // If a collection has fewer items, complement with matching luxury items
  const baseProducts = matchingProducts.length > 0 ? matchingProducts : ALL_PRODUCTS.slice(0, 6);

  // Filter by category
  let filtered = activeCategoryFilter === 'ALL'
    ? baseProducts
    : baseProducts.filter((p) => p.category === activeCategoryFilter);

  // Sort
  if (sortBy === 'PRICE_LOW') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'PRICE_HIGH') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const categoryPills = ['ALL', 'LEHENGAS', 'SAREES', 'KURTA SETS', 'GOWNS', 'FUSION WEAR'];

  const faqs = [
    {
      q: `How long does an ensemble from ${meta.name} take to be handcrafted?`,
      a: `Every piece from the ${meta.name} archive is made-to-measure. Hand-needlework requires between 6 to 10 weeks, depending on the complexity of the zardozi and chikankari embroideries. Rush bespoke orders can be accommodated upon private atelier consultation.`,
    },
    {
      q: `Can I customize the color palette or blouse neckline for ${meta.name}?`,
      a: `Yes, absolute bespoke customization is a hallmark of DILNASHI. Our master colorists can custom-dye pure silks and organzas to your exact bridal or festive moodboard, with necklines tailored to your jewellery specifications.`,
    },
    {
      q: `How is insured international delivery handled?`,
      a: `Each creation is packed inside a handcrafted monogrammed archival wooden chest with a certificate of authenticity. We provide insured, white-glove international shipping across the USA, UK, UAE, Canada, and Europe.`,
    },
  ];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* 1. Grand Collection Editorial Hero */}
      <section
        style={{
          position: 'relative',
          height: '65vh',
          minHeight: '480px',
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
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%)',
          }}
        />

        <div className="couture-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '3.5rem', color: '#ffffff' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.68rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>HOME</span>
            <span>/</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/collections')}>COLLECTIONS</span>
            <span>/</span>
            <span style={{ color: 'var(--gold-bright)' }}>{meta.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--gold-bright)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            <SparklesIcon size={14} color="var(--gold-bright)" />
            <span>COLLECTION ARCHIVE • {meta.year}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', letterSpacing: '0.14em', marginBottom: '0.5rem', lineHeight: 1.15 }}>
            {meta.name}
          </h1>
          <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.35rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '750px', marginBottom: '1.2rem' }}>
            {meta.subtitle}
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#dedbd2', maxWidth: '750px', lineHeight: 1.7 }}>
            {meta.description}
          </p>
        </div>
      </section>

      {/* 2. Collection Craft Highlights Ribbon */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)', padding: '1.2rem 0' }}>
        <div className="couture-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', textAlign: 'center' }}>
          {meta.highlights && meta.highlights.map((h, i) => (
            <div key={i} style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 600 }}>
              ✦ {h}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Section Specific Craftsmanship & Textile Dossier */}
      <section style={{ background: '#faf9f6', padding: '3.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="couture-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              ATELIER METIER & PROVENANCE
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', letterSpacing: '0.1em', marginTop: '0.4rem' }}>
              THE MAKING OF {meta.name}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#ffffff', padding: '1.8rem', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.16em', color: 'var(--gold-primary)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                HERITAGE TEXTILE
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>
                Pure Loomed Silks & Tulle
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {meta.fabricNotes || 'Hand-loomed in pure Katan silk, tissue organza, and liquid metallic taban.'}
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '1.8rem', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.16em', color: 'var(--gold-primary)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                ARTISAN DEVOTION
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>
                {meta.artisanHours || '1,000+ Needlework Hours'}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Crafted by multi-generational karigars specialized in micro-phanda chikankari, beaten bullion zardozi, and unheated seed pearl application.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '1.8rem', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.16em', color: 'var(--gold-primary)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                HAUTE ENGINEERING
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>
                Bespoke Anatomical Fit
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Each garment incorporates built-in 14-piece boning, internal cancan support, and custom shoulder weight distribution for effortless comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Catalog Section */}
      <section className="couture-container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.2rem', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
              CURATED MASTERPIECES
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
              PIECES FROM {meta.name}
            </h2>
          </div>

          {/* Filter Pills */}
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

            {/* Sorting */}
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

        {/* Product Cards Grid */}
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
                {item.leadTime && (
                  <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.65)', color: '#ffffff', fontSize: '0.62rem', letterSpacing: '0.1em', padding: '3px 7px', textTransform: 'uppercase' }}>
                    {item.leadTime.includes('Ready') ? 'INSTANT DISPATCH' : 'MADE TO MEASURE'}
                  </div>
                )}
              </div>
              <div className="product-card-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.category}</span>
                <span style={{ color: 'var(--gold-primary)' }}>{item.occasion}</span>
              </div>
              <h3 className="product-card-title">{item.name}</h3>
              <div className="product-card-price">{item.priceFormatted}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Editorial Lookbook Gallery */}
      {meta.lookbookImages && meta.lookbookImages.length > 0 && (
        <section style={{ background: '#0d0c0b', color: '#ffffff', padding: '5rem 0', marginTop: '5rem' }}>
          <div className="couture-container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
                CAMPAIGN LOOKBOOK
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.14em', marginTop: '0.5rem' }}>
                EDITORIAL ARCHIVE • {meta.name}
              </h2>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', fontStyle: 'italic', color: '#dedbd2', maxWidth: '650px', margin: '0.6rem auto 0' }}>
                "In motion, every fold reflects light like liquid gold, an unspoken dialogue between heritage and fearless modern beauty."
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {meta.lookbookImages.map((imgUrl, idx) => (
                <div key={idx} style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
                  <img
                    src={imgUrl}
                    alt={`${meta.name} lookbook ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)' }}>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.16em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
                      RUNWAY LOOK 0{idx + 1}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', letterSpacing: '0.08em', marginTop: '0.2rem' }}>
                      {meta.name} Haute Edition
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. High Jewellery Pairings Guide */}
      <section className="couture-container" style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
              SIGNATURE ATELIER PAIRING
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', letterSpacing: '0.1em', marginTop: '0.3rem' }}>
              COMPLETE THE LOOK WITH HIGH JEWELLERY
            </h2>
          </div>
          <button
            className="brand-tab-btn active"
            style={{ fontSize: '0.72rem', padding: '0.5rem 1.2rem' }}
            onClick={() => navigate('/jewellery')}
          >
            EXPLORE HIGH JEWELLERY <ArrowRightIcon size={14} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.8rem' }}>
          {JEWELLERY_ICONS.slice(0, 4).map((j, i) => (
            <div
              key={i}
              style={{ cursor: 'pointer', textAlign: 'center', border: '1px solid var(--border-light)', padding: '1.5rem', background: '#faf9f6' }}
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
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
                UNCUT DIAMONDS & GOLD
              </span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', letterSpacing: '0.1em', marginTop: '0.2rem' }}>
                {j.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bespoke Concierge FAQ & Consultation */}
      <section className="couture-container" style={{ padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
              BESPOKE ADVISORY
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', letterSpacing: '0.1em', marginTop: '0.3rem' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid var(--border-light)', padding: '1.2rem 0' }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--gold-primary)' }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </div>
                {activeFaq === idx && (
                  <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Book Appointment Banner */}
          <div style={{ marginTop: '3rem', padding: '2.5rem', background: 'var(--bg-cream)', border: '1px solid var(--border-light)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
              PRIVATE ATELIER VISIT
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '0.08em', margin: '0.5rem 0 1rem' }}>
              Book an Exclusive Viewing for {meta.name}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', maxWidth: '540px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Experience private fitting salons in New Delhi, Mumbai, Dubai, and London, or schedule a worldwide video suite consultation with a master couturier.
            </p>
            <button
              className="btn-gold-primary"
              style={{ fontSize: '0.75rem', padding: '0.8rem 2rem' }}
              onClick={() => navigate('/about')}
            >
              SCHEDULE PRIVATE VIEWING
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
