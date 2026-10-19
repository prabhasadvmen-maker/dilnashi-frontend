import React, { useState, useEffect } from 'react';
import {
  HERO_SLIDES,
  CURATED_SEASONS,
  JEWELLERY_ICONS,
  CELEBRITIES,
  COUTURE_PROCESS_STEPS,
  BRAND,
  ALL_PRODUCTS,
} from '../data/coutureData';
import {
  DilnashiCrest,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PlayIcon,
  ArrowRightIcon,
  SparklesIcon,
  HeartIcon,
  BagIcon,
  CloseIcon,
  CheckIcon,
} from '../components/CoutureIcons';

export default function HomePage({
  navigate,
  onOpenAppointment,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = () => false,
  onQuickView = () => {},
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('consultation');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Hero Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="homepage-wrapper">
      {/* 1. HERO SLIDER SECTION */}
      <section className="hero-slider-section">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`hero-slide-item ${idx === currentSlide ? 'active' : ''}`}
          >
            <img src={s.image} alt={s.title} className="hero-slide-image" />
            <div className="hero-gradient-overlay" />
          </div>
        ))}

        <div className="hero-content-wrapper">
          <div className="hero-subtitle">{slide.subtitle}</div>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-description">{slide.description}</p>
          <div className="hero-actions">
            <button
              className="hero-btn-white"
              onClick={() => navigate('/collections')}
            >
              {slide.ctaPrimary}
            </button>
            <button
              className="hero-btn-trans"
              onClick={() => {
                if (slide.ctaSecondary === 'VIRTUAL TRY ON') {
                  navigate('/virtual-try-on');
                } else {
                  onOpenAppointment();
                }
              }}
            >
              {slide.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slider-dots">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. CURATED THIS SEASON */}
      <section className="curated-season-section couture-container">
        <span className="section-eyebrow">SPRING / SUMMER 2026</span>
        <h2 className="section-main-title">CURATED THIS SEASON</h2>
        <p className="section-subtitle-italic">
          A curated edit of bespoke silhouettes for every occasion of celebration
        </p>

        <div className="curated-grid-four">
          {CURATED_SEASONS.map((item) => (
            <div
              key={item.id}
              className="curated-card"
              onClick={() => navigate(item.link)}
            >
              <img src={item.image} alt={item.title} />
              <div className="curated-card-overlay">
                <h3 className="curated-card-title">{item.title}</h3>
                <span className="curated-card-sub">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DESIGNER PHILOSOPHY / CREST EMBLEM */}
      <section className="philosophy-section">
        <div className="philosophy-crest">
          <img
            src="/dilnashi-crest-logo.png"
            alt="DILNASHI Crest"
            style={{ width: '56px', height: 'auto', margin: '0 auto', display: 'block' }}
          />
        </div>
        <blockquote className="philosophy-quote">
          "{BRAND.designerQuote}"
        </blockquote>
        <div className="philosophy-author">
          — DILNASHI ATELIER • HAUTE COUTURE
        </div>
      </section>

      {/* 3B. ATELIER MASTERPIECES (HIGH COUTURE HIGHLIGHTS) */}
      <section className="curated-season-section couture-container" style={{ paddingTop: '1rem', paddingBottom: '3.5rem' }}>
        <span className="section-eyebrow">ATELIER HIGHLIGHTS</span>
        <h2 className="section-main-title">ICONIC HIGH COUTURE CREATIONS</h2>
        <p className="section-subtitle-italic">
          Mastercrafted silhouettes embodying over 1,200 hours of ancestral Awadh needlecraft
        </p>

        <div className="curated-grid-four">
          {ALL_PRODUCTS.slice(0, 4).map((product) => {
            const isFav = isWishlisted(product.id);
            return (
              <div
                key={product.id}
                className="product-card"
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  paddingBottom: '1.2rem',
                  transition: 'all 0.35s ease',
                }}
              >
                {/* Image Box */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
                    background: '#f4efe6',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Wishlist Heart Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    style={{
                      position: 'absolute',
                      top: '0.8rem',
                      right: '0.8rem',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isFav ? '#9d7c35' : 'var(--text-main)',
                      zIndex: 3,
                    }}
                    title={isFav ? 'Remove from Wishlist' : 'Save to Wishlist'}
                  >
                    <HeartIcon size={16} fill={isFav ? '#c5a059' : 'none'} color={isFav ? '#9d7c35' : 'currentColor'} />
                  </button>

                  {/* Floating Quick View Button */}
                  <button
                    className="quick-view-hover-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                  >
                    ✦ Quick View
                  </button>
                </div>

                {/* Details */}
                <div style={{ padding: '1rem 1rem 0', textAlign: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.18em',
                      color: 'var(--gold-primary)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {product.collection || 'HAUTE COUTURE'}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.86rem',
                      letterSpacing: '0.08em',
                      lineHeight: '1.4',
                      marginBottom: '0.5rem',
                      cursor: 'pointer',
                      color: 'var(--text-main)',
                    }}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      letterSpacing: '0.06em',
                      color: 'var(--text-body)',
                      marginBottom: '0.9rem',
                    }}
                  >
                    {product.priceFormatted}
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => onAddToCart(product)}
                      style={{
                        flex: 1,
                        background: '#0d0c0b',
                        color: '#ffffff',
                        border: '1px solid #0d0c0b',
                        padding: '0.55rem 0.6rem',
                        fontSize: '0.66rem',
                        letterSpacing: '0.14em',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <BagIcon size={13} />
                      <span>Add to Bag</span>
                    </button>
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      style={{
                        padding: '0.55rem 0.7rem',
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        fontSize: '0.66rem',
                        letterSpacing: '0.1em',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                      }}
                      title="View Details"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HIGH JEWELLERY CATEGORY RIBBON */}
      <section className="jewellery-ribbon-section couture-container">
        <div className="jewellery-icons-grid">
          {JEWELLERY_ICONS.map((item, idx) => (
            <div
              key={idx}
              className="jewellery-icon-item"
              onClick={() => navigate('/jewellery')}
            >
              <div className="jewellery-icon-thumb">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=85';
                  }}
                />
              </div>
              <span className="jewellery-icon-name">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CINEMATIC VIDEO CAMPAIGN BANNER */}
      <section className="video-editorial-banner">
        <img
          src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=80"
          alt="High Jewellery Campaign"
          className="video-editorial-bg"
        />
        <div className="video-editorial-overlay" />
        <div className="video-editorial-content">
          <button
            className="play-circle-btn"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            aria-label="Play Campaign Reel"
          >
            <PlayIcon size={28} fill="currentColor" />
          </button>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.6rem', fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.4' }}>
            "...for us, and make it playful, versatile, and very personal."
          </p>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.28em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
            PARIS HAUTE JOAILLERIE REEL
          </span>
        </div>
      </section>

      {/* 6. PARIS HAUTE COUTURE HIGH JEWELLERY FEATURE */}
      <section className="high-jewellery-feature">
        <div className="couture-container high-jewellery-layout">
          {/* Left Text */}
          <div className="hj-text-side">
            <div className="hj-eyebrow">PARIS HAUTE COUTURE COLLECTION 2026</div>
            <div className="hj-title-script">High Jewellery</div>
            <h2 className="hj-title-sans">THE POLKI & EMERALD ARCHIVE</h2>
            <p className="hj-desc">
              Celebrating the House's signature language with our Paris Haute Couture High Jewellery Collection 2026. From sculptural brooches and statement ear cuffs to uncut polki chokers that embody craftsmanship, glamour, and exquisite ancestral design. Presented alongside the debut Paris Couture collection.
            </p>
            <button
              className="btn-luxury-primary"
              onClick={() => navigate('/jewellery')}
            >
              EXPLORE JEWELLERY <ArrowRightIcon size={16} />
            </button>
          </div>

          {/* Right Collage */}
          <div className="hj-images-collage">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85"
              alt="High Jewellery Emerald"
              className="hj-img-primary"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=85';
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85"
              alt="High Jewellery Necklace"
              className="hj-img-secondary"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=85';
              }}
            />
          </div>
        </div>
      </section>

      {/* 7. INTIMATE ROYAL COUPLE BANNER */}
      <section
        style={{
          position: 'relative',
          height: '600px',
          overflow: 'hidden',
          backgroundImage: `url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.45)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '680px', padding: '0 1.5rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: 'var(--gold-bright)', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>
            DILNASHI VOWS
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', letterSpacing: '0.14em', marginBottom: '1rem' }}>
            THE CONTEMPORARY ROYAL WEDDING
          </h2>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2rem' }}>
            Harmonious bridal lehengas and regal sherwanis custom-woven in matching heritage zardozi weaves.
          </p>
          <button className="btn-luxury-gold" onClick={() => navigate('/vows')}>
            EXPLORE BRIDAL & GROOM COUTURE
          </button>
        </div>
      </section>

      {/* 8. IN DILNASHI (STARS & CELEBRITIES) */}
      <section className="stars-section couture-container">
        <span className="section-eyebrow">RED CARPET ARCHIVE</span>
        <h2 className="section-main-title">IN DILNASHI</h2>
        <p className="section-subtitle-italic">
          Leading icons dressed in custom bespoke Dilnashi Couture
        </p>

        <div className="stars-grid-row">
          {CELEBRITIES.map((star) => (
            <div
              key={star.id}
              className="star-card"
              onClick={() => navigate('/stars')}
            >
              <div className="star-card-image-box">
                <img src={star.image} alt={star.name} />
              </div>
              <h4 className="star-name">{star.name}</h4>
              <p className="star-outfit">{star.outfit}</p>
            </div>
          ))}
        </div>

        <button
          className="btn-luxury-outline"
          onClick={() => navigate('/stars')}
        >
          VIEW ALL STARS
        </button>
      </section>

      {/* 9. DARK LUXE: DILNASHI BECOMING */}
      <section className="dark-luxe-section">
        <div className="couture-container">
          <div className="dark-luxe-brand">DILNASHI ATELIER</div>
          <h2 className="dark-luxe-title">BECOMING</h2>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            Where ancestral silver bullion wire meets liquid drapery. An ode to bold self-expression and eternal glamour.
          </p>
          <button
            className="btn-luxury-gold"
            onClick={() => navigate('/collections')}
          >
            VIEW THE COLLECTION
          </button>
        </div>
      </section>

      {/* 10. THE COUTURE PROCESS */}
      <section className="couture-process-section couture-container">
        <div className="couture-process-layout">
          {/* Accordion Side */}
          <div>
            <span className="section-eyebrow">BESPOKE MAESTRO</span>
            <h2 className="process-accordion-title">THE COUTURE PROCESS</h2>

            <div style={{ marginTop: '2rem' }}>
              {COUTURE_PROCESS_STEPS.map((step) => {
                const isActive = activeAccordion === step.id;
                return (
                  <div
                    key={step.id}
                    className={`process-step-item ${isActive ? 'active' : ''}`}
                  >
                    <div
                      className="process-step-header"
                      onClick={() =>
                        setActiveAccordion(isActive ? '' : step.id)
                      }
                    >
                      <span>{step.title}</span>
                      {isActive ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
                    </div>

                    {isActive && (
                      <div className="process-step-body">{step.content}</div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              className="btn-luxury-primary"
              style={{ marginTop: '2.5rem' }}
              onClick={onOpenAppointment}
            >
              BOOK AN APPOINTMENT
            </button>
          </div>

          {/* Artisan Imagery Side */}
          <div className="process-artisan-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
              alt="Artisan Chikankari Craftsmanship"
            />
            <div className="process-floating-tag">
              OVER 1,200 HOURS OF ARTISANAL HAND-EMBROIDERY
            </div>
          </div>
        </div>
      </section>

      {/* 11. THE MAN HIMSELF / THE COUTURIER */}
      <section className="couturier-section">
        <div className="couture-container couturier-layout">
          {/* Portrait */}
          <div className="couturier-portrait-box">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
              alt="The Couturier — Dilnashi Master Couturier"
            />
          </div>

          {/* Story Details */}
          <div className="couturier-details">
            <span className="couturier-eyebrow">THE VISIONARY</span>
            <h2 className="couturier-heading">THE ATELIER HERITAGE</h2>
            <p className="couturier-body">
              For three decades, DILNASHI has redefined the landscape of Indian haute couture. Championing the rare, intricate needlecraft of Awadh Chikankari and transforming it into red-carpet royalty from Mumbai to Paris. Every ensemble is an ode to timeless grace, crafted by generational artisans who weave memories into thread.
            </p>
            <div className="couturier-signature-box">
              <span className="couturier-sign">Dilnashi</span>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Creative Director & Couturier
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. THE FOUR PILLARS OF WHITE-GLOVE BESPOKE LUXURY */}
      <section className="pillars-section">
        <div className="couture-container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-eyebrow">THE DILNASHI COVENANT</span>
            <h2 className="section-main-title">THE FOUR PILLARS OF WHITE-GLOVE BESPOKE LUXURY</h2>
            <p className="section-subtitle-italic">
              Every creation is governed by exacting royal atelier protocols perfected over three decades
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-number">PILLAR 01</div>
              <h3 className="pillar-title">ANATOMICAL SCULPTING</h3>
              <p className="pillar-desc">
                Each silhouette begins with a 7-point biometric posture mapping and hand-cut muslin toile crafted uniquely to your frame for effortless contouring.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-number">PILLAR 02</div>
              <h3 className="pillar-title">ARTISANAL GUILDS</h3>
              <p className="pillar-desc">
                Direct generational patronship of 800+ Master Karigars across Lucknow, Kashmir, and Jaipur, safeguarding rare Chikankari and Zardozi arts.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-number">PILLAR 03</div>
              <h3 className="pillar-title">ARCHIVAL MONOGRAM CHEST</h3>
              <p className="pillar-desc">
                Presented in brass-studded archival velvet trunks with cedarwood preservation chambers to safeguard family heirlooms across generations.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-number">PILLAR 04</div>
              <h3 className="pillar-title">WHITE-GLOVE SALON</h3>
              <p className="pillar-desc">
                Personal Master Couturiers travel worldwide for discreet private fitting salons in your private residence or VIP suite in Delhi, Mumbai, Dubai, & London.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. PRESS ACCOLADES */}
      <section className="press-accolades-section">
        <div className="couture-container">
          <span className="section-eyebrow">EDITORIAL COUTURE CRITIQUE</span>
          <h2 className="section-main-title">AS CELEBRATED IN</h2>
          
          <div className="press-quotes-grid">
            <div className="press-quote-card">
              <p className="press-quote-text">
                "Dilnashi bridges ancient Mughal court embroidery with contemporary Parisian architectural geometry in breathtaking fashion."
              </p>
              <div className="press-publication">VOGUE INTERNATIONAL</div>
            </div>

            <div className="press-quote-card">
              <p className="press-quote-text">
                "The unquestioned zenith of Indian high jewellery and royal matrimonial craft. Every silhouette is an heirloom."
              </p>
              <div className="press-publication">HARPER'S BAZAAR</div>
            </div>

            <div className="press-quote-card">
              <p className="press-quote-text">
                "A triumph of slow fashion where needlecraft meets modern grandeur. Each gown takes upwards of 1,200 painstaking hours."
              </p>
              <div className="press-publication">ELLE LUXURY EDITORIAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Paris Haute Couture Campaign Reel Lightbox Modal */}
      {isVideoPlaying && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(5, 5, 5, 0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              background: '#0d0c0b',
              border: '1px solid var(--gold-primary)',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.8)',
              padding: '2rem',
              color: '#ffffff',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                color: 'var(--gold-bright)',
                background: 'rgba(255, 255, 255, 0.1)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <CloseIcon size={18} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.25em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
                AUTUMN / WINTER 2026 ARCHIVE
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '0.12em', marginTop: '0.4rem' }}>
                PARIS HAUTE JOAILLERIE & COUTURE REEL
              </h3>
            </div>

            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#000', marginBottom: '1.5rem' }}>
              <img
                src="https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1280&q=85"
                alt="Campaign Reel Preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d0c0b', marginBottom: '1rem' }}>
                  <PlayIcon size={28} fill="#0d0c0b" />
                </div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', letterSpacing: '0.18em', color: '#ffffff' }}>
                  4K CINEMATIC ATELIER BROADCAST
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(197,160,89,0.25)', paddingTop: '1.2rem' }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)' }}>
                Directed by Dilnashi Studios • Filmed at Place Vendôme, Paris
              </div>
              <button
                className="btn-luxury-gold"
                onClick={() => {
                  setIsVideoPlaying(false);
                  onOpenAppointment();
                }}
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.72rem' }}
              >
                REQUEST SALON PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
