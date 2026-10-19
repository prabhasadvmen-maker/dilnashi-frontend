import React, { useState } from 'react';
import { CloseIcon, SearchIcon } from './CoutureIcons';
import { ALL_PRODUCTS } from '../data/coutureData';

export default function SearchModal({ isOpen, onClose, navigate }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? ALL_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.collection.toLowerCase().includes(query.toLowerCase()) ||
        p.occasion.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectProduct = (productId) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  const trendingTags = [
    'Fishbone Mijwan',
    'Polki Choker',
    'Bridal Lehenga',
    'Ivory Saree',
    'Velvet Sherwani',
    'Paris Couture 2026',
    'Cocktail Gowns',
  ];

  return (
    <div className="couture-modal-backdrop" onClick={onClose}>
      <div
        style={{
          width: '100%',
          maxWidth: '850px',
          background: '#ffffff',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-mega)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-light)' }}>
          <SearchIcon size={24} color="var(--gold-primary)" />
          <input
            type="text"
            placeholder="Search by collection, silhouette, embroidery, or occasion..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flexGrow: 1,
              border: 'none',
              background: 'transparent',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-sans)',
              padding: '0 1.2rem',
              outline: 'none',
            }}
          />
          <button onClick={onClose} aria-label="Close Search">
            <CloseIcon size={22} />
          </button>
        </div>

        {/* Trending Suggestions */}
        <div style={{ padding: '1.5rem 2rem', background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '1rem' }}>
            Trending:
          </span>
          <div style={{ display: 'inline-flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
            {trendingTags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(tag)}
                style={{
                  fontSize: '0.72rem',
                  padding: '0.3rem 0.8rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: '16px',
                  color: 'var(--text-main)',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Area */}
        <div style={{ maxHeight: '440px', overflowY: 'auto', padding: '2rem' }}>
          {query.trim() === '' ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem 0' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                START TYPING TO DISCOVER DILNASHI ATELIER CREATIONS
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--text-main)' }}>
                No creations found matching "{query}"
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Try searching for 'Mijwan', 'Sherwani', 'Saree', or 'Lehenga'.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {filtered.map((product) => (
                <div
                  key={product.id}
                  style={{ cursor: 'pointer', textAlign: 'center' }}
                  onClick={() => handleSelectProduct(product.id)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '0.6rem' }}
                  />
                  <div style={{ fontSize: '0.65rem', color: 'var(--gold-primary)', letterSpacing: '0.15em' }}>
                    {product.collection}
                  </div>
                  <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.04em', margin: '0.2rem 0' }}>
                    {product.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                    {product.priceFormatted}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
