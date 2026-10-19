import React, { useState } from 'react';
import { CloseIcon, HeartIcon, BagIcon, SparklesIcon, ArrowRightIcon } from './CoutureIcons';

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  navigate,
}) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState('CUSTOM SIZE');
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const images = product.images || [product.image];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(10, 9, 8, 0.78)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid var(--border-light)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.35)',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid var(--border-light)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Close"
        >
          <CloseIcon size={20} />
        </button>

        {/* Left: Gallery */}
        <div style={{ background: '#fdfbf7', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ height: '440px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={images[selectedImgIdx] || images[0]}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {images.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '64px',
                    height: '80px',
                    cursor: 'pointer',
                    border: `1.5px solid ${selectedImgIdx === idx ? 'var(--gold-primary)' : 'var(--border-light)'}`,
                    overflow: 'hidden',
                  }}
                  onClick={() => setSelectedImgIdx(idx)}
                >
                  <img src={img} alt="Thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Fast Buy */}
        <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 600 }}>
                {product.collection}
              </span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {product.occasion}
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '0.08em', marginBottom: '0.6rem', lineHeight: 1.25 }}>
              {product.name}
            </h2>

            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.2rem' }}>
              {product.priceFormatted}
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {product.description}
            </p>

            {/* Sizes */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                SELECT SIZE:
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {(product.sizes || ['XS', 'S', 'M', 'L', 'XL', 'CUSTOM SIZE']).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      padding: '0.4rem 0.8rem',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      background: selectedSize === sz ? 'var(--text-main)' : 'transparent',
                      color: selectedSize === sz ? '#ffffff' : 'var(--text-main)',
                      border: `1px solid ${selectedSize === sz ? 'var(--text-main)' : 'var(--border-light)'}`,
                      cursor: 'pointer',
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Lead Time */}
            {product.leadTime && (
              <div style={{ fontSize: '0.72rem', color: 'var(--gold-deep)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <SparklesIcon size={14} color="var(--gold-primary)" />
                <span>{product.leadTime}</span>
              </div>
            )}
          </div>

          <div>
            <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
              <button
                className="btn-luxury-primary"
                style={{ flex: 1, padding: '0.85rem' }}
                onClick={() => {
                  onAddToCart({ ...product, size: selectedSize, quantity: 1 });
                  onClose();
                }}
              >
                ADD TO SHOPPING BAG
              </button>
              <button
                onClick={() => onToggleWishlist(product)}
                style={{
                  width: '48px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: '#faf9f6',
                }}
                aria-label="Wishlist"
              >
                <HeartIcon size={20} fill={isWishlisted(product.id) ? '#b84a4a' : 'none'} />
              </button>
            </div>

            <button
              onClick={() => {
                navigate(`/product/${product.id}`);
                onClose();
              }}
              style={{
                width: '100%',
                padding: '0.6rem',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textAlign: 'center',
                cursor: 'pointer',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              VIEW COMPLETE PRODUCT DOSSIER <ArrowRightIcon size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
