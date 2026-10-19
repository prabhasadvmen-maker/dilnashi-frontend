import React, { useState } from 'react';
import { ALL_PRODUCTS, WOMEN_MEGA_MENU } from '../data/coutureData';
import { HeartIcon } from '../components/CoutureIcons';
import { handleImageError } from '../utils/imageFallbacks';

export default function WomenPage({ navigate, onToggleWishlist, isWishlisted, onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedOccasion, setSelectedOccasion] = useState('ALL');

  const womenProducts = ALL_PRODUCTS.filter(
    (p) => p.gender === 'WOMEN' || p.category === 'JEWELLERY'
  );

  const filtered = womenProducts.filter((item) => {
    const matchesCat =
      selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesOcc =
      selectedOccasion === 'ALL' || item.occasion === selectedOccasion;
    return matchesCat && matchesOcc;
  });

  return (
    <div style={{ padding: '3.5rem 0 6rem', background: '#ffffff' }}>
      <div className="couture-container">
        {/* Banner */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">DILNASHI COUTURE</span>
          <h1 className="section-main-title">WOMEN'S ATELIER</h1>
          <p className="section-subtitle-italic" style={{ marginBottom: 0 }}>
            Heirloom lehengas, incandescent metallic sarees, and sculptural corset gowns
          </p>
        </div>

        {/* Categories Toolbar */}
        <div className="catalog-toolbar">
          <div className="catalog-filter-tags">
            <button
              className={`filter-pill ${selectedCategory === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('ALL')}
            >
              ALL CREATIONS
            </button>
            {WOMEN_MEGA_MENU.categories.filter(c => c !== 'VIEW ALL').map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {WOMEN_MEGA_MENU.occasions.filter(o => o !== 'VIEW ALL').map((occ) => (
              <button
                key={occ}
                style={{
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  background: selectedOccasion === occ ? 'var(--gold-soft)' : 'transparent',
                  border: `1px solid ${selectedOccasion === occ ? 'var(--gold-primary)' : 'var(--border-light)'}`,
                  color: selectedOccasion === occ ? 'var(--gold-deep)' : 'var(--text-muted)',
                  borderRadius: '2px',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedOccasion(selectedOccasion === occ ? 'ALL' : occ)}
              >
                {occ}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
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
              <div className="product-card-label">{item.collection}</div>
              <h3 className="product-card-title">{item.name}</h3>
              <div className="product-card-price">{item.priceFormatted}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
