import React, { useState } from 'react';
import { ALL_PRODUCTS } from '../data/coutureData';
import { HeartIcon, FilterIcon } from '../components/CoutureIcons';

export default function NewArrivalsPage({ navigate, onToggleWishlist, isWishlisted }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedOccasion, setSelectedOccasion] = useState('ALL');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['ALL', 'LEHENGAS', 'SAREES', 'FUSION WEAR', 'SHERWANI SETS', 'GOWNS', 'JEWELLERY'];
  const occasions = ['ALL', 'BRIDAL', 'RECEPTION', 'COCKTAIL', 'SANGEET', 'GROOM'];

  let filtered = ALL_PRODUCTS.filter((item) => {
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesOcc = selectedOccasion === 'ALL' || item.occasion === selectedOccasion;
    return matchesCat && matchesOcc;
  });

  if (sortBy === 'low-to-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-to-low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: '3.5rem 0 6rem', background: '#ffffff' }}>
      <div className="couture-container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-eyebrow">SPRING / SUMMER 2026</span>
          <h1 className="section-main-title">NEW ARRIVALS</h1>
          <p className="section-subtitle-italic" style={{ marginBottom: 0 }}>
            The newest silhouettes from the Paris Salons and Mumbai Ateliers
          </p>
        </div>

        {/* Toolbar & Filters */}
        <div className="catalog-toolbar">
          <div className="catalog-filter-tags">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Showing {filtered.length} creations
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.45rem 1rem',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontFamily: 'inherit',
                cursor: 'pointer',
              }}
            >
              <option value="featured">Sort: Featured</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
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
                <img src={item.images ? item.images[0] : item.image} alt={item.name} />
                <button
                  className="product-card-wishlist-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(item);
                  }}
                >
                  <HeartIcon size={18} fill={isWishlisted(item.id) ? '#b84a4a' : 'none'} />
                </button>
              </div>
              <div className="product-card-label">{item.collection || 'HAUTE COUTURE'}</div>
              <h3 className="product-card-title">{item.name}</h3>
              <div className="product-card-price">{item.priceFormatted}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
