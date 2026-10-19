import React, { useState } from 'react';
import { ALL_PRODUCTS } from '../data/coutureData';
import {
  HeartIcon,
  ShareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
} from '../components/CoutureIcons';

export default function ProductDetailPage({
  productId = 'dusty-pink-fishbone-mijwan',
  navigate,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide,
}) {
  // Find current product or default to the screenshot 4 item
  const product =
    ALL_PRODUCTS.find((p) => p.id === productId) || ALL_PRODUCTS[0];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('CUSTOM SIZE');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('details');
  const [addedNotice, setAddedNotice] = useState(false);

  const images = product.images || [product.image];

  // You May Also Like Products (Screenshot 4 exact items)
  const youMayAlsoLike = [
    ALL_PRODUCTS.find((p) => p.id === 'mint-green-metal-taban-skirt') || ALL_PRODUCTS[1],
    ALL_PRODUCTS.find((p) => p.id === 'light-pink-ivory-mijwan-skirt') || ALL_PRODUCTS[2],
    ALL_PRODUCTS.find((p) => p.id === 'black-tone-on-tone-fishtail') || ALL_PRODUCTS[3],
    ALL_PRODUCTS.find((p) => p.id === 'charcoal-grey-ivory-mijwan') || ALL_PRODUCTS[4],
  ];

  // Recently Viewed Products (Screenshot 4 exact items)
  const recentlyViewed = [
    ALL_PRODUCTS.find((p) => p.id === 'lilac-ombre-metal-taban-sequin') || ALL_PRODUCTS[5],
    ALL_PRODUCTS.find((p) => p.id === 'white-lace-saree-set') || ALL_PRODUCTS[6],
    ALL_PRODUCTS.find((p) => p.id === 'gold-sequin-embellished-co-ord') || ALL_PRODUCTS[7],
  ];

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      size: selectedSize,
      quantity,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Look at this breathtaking Dilnashi Haute Couture creation: ${product.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <div className="pdp-section">
      <div className="couture-container">
        {/* Breadcrumb Navigation */}
        <div className="pdp-breadcrumbs">
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>HOME</span>
          <span>/</span>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/women')}>COUTURE</span>
          <span>/</span>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/collections')}>{product.collection || 'COLLECTION'}</span>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Product Showcase Layout */}
        <div className="pdp-layout">
          {/* Left: Gallery & Zoom */}
          <div className="pdp-gallery-container">
            {/* Thumbnails */}
            <div className="pdp-thumbs-col">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`pdp-thumb-item ${activeImageIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveImageIdx(idx)}
                >
                  <img src={img} alt={`${product.name} angle ${idx + 1}`} />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="pdp-main-image-box">
              <img src={images[activeImageIdx]} alt={product.name} />
            </div>
          </div>

          {/* Right: Product Ordering Info */}
          <div className="pdp-info-side">
            {/* Top Row: Category + Wishlist/Share */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="pdp-category-tag">Couture</span>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button
                  onClick={() => onToggleWishlist(product)}
                  style={{ color: isWishlisted(product.id) ? '#b84a4a' : 'var(--text-main)' }}
                  aria-label="Wishlist"
                >
                  <HeartIcon size={20} fill={isWishlisted(product.id) ? '#b84a4a' : 'none'} />
                </button>
                <button onClick={handleShare} aria-label="Share">
                  <ShareIcon size={20} />
                </button>
              </div>
            </div>

            {/* Title & Description */}
            <h1 className="pdp-product-title">{product.name}</h1>
            <p className="pdp-product-description">{product.description}</p>

            {/* Price & Taxes */}
            <div className="pdp-price-row">
              <span className="pdp-mrp-label">MRP</span>
              <span className="pdp-price-amount">{product.priceFormatted}</span>
            </div>
            <div className="pdp-tax-note">Price included of all taxes</div>

            {/* Color Swatch */}
            <div className="pdp-option-block">
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                Colour: <strong>{product.color}</strong>
              </div>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: product.colorHex || '#e8b4b8',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 0 1px var(--text-main)',
                }}
              />
            </div>

            {/* Size Options */}
            <div className="pdp-option-block">
              <div className="pdp-option-header">
                <span>SIZE</span>
                <span className="pdp-size-guide-btn" onClick={onOpenSizeGuide}>
                  Size Guide
                </span>
              </div>
              <div className="pdp-size-chips">
                {(product.sizes || ['XS', 'S', 'M', 'L', 'XL', 'CUSTOM SIZE']).map((size) => (
                  <button
                    key={size}
                    className={`pdp-size-chip ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="pdp-option-block">
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                QUANTITY
              </div>
              <div className="pdp-qty-row">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span style={{ fontSize: '0.8rem', minWidth: '24px', textAlign: 'center' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Lead Time Box */}
            <div className="pdp-lead-time-box">
              {product.leadTime || 'Made to order: 8-10 weeks'}
            </div>

            {/* Actions Stack */}
            <div className="pdp-actions-stack">
              <button
                className="pdp-btn-virtual"
                onClick={() => navigate(`/virtual-try-on?product=${product.id}`)}
              >
                <SparklesIcon size={18} color="var(--gold-bright)" /> » VIRTUAL TRY-ON
              </button>

              <button className="pdp-btn-cart" onClick={handleAddToCart}>
                {addedNotice ? '✓ ADDED TO YOUR BAG' : 'ADD TO CART'}
              </button>
            </div>

            {/* Accordions (Screenshot 4 exact) */}
            <div className="pdp-accordions-group">
              {/* Product Details */}
              <div className="pdp-acc-item">
                <button
                  className="pdp-acc-trigger"
                  onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')}
                >
                  <span>PRODUCT DETAILS</span>
                  {openAccordion === 'details' ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {openAccordion === 'details' && (
                  <div className="pdp-acc-content">
                    {product.details ? (
                      <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                        {product.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>
                        Handcrafted with pure silk organza and delicate fishbone resham needlework. Embellished with Japanese cutdana beads and luminous freshwater pearls.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Shipping, Packaging & Returns */}
              <div className="pdp-acc-item">
                <button
                  className="pdp-acc-trigger"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                >
                  <span>SHIPPING, PACKAGING & RETURNS</span>
                  {openAccordion === 'shipping' ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pdp-acc-content">
                    <p>
                      Complimentary worldwide insured shipping. Every creation is hand-steamed and dispatched in a signature DILNASHI heirloom velvet-lined wooden trunk with moisture-resistant archival wrapping.
                    </p>
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div className="pdp-acc-item">
                <button
                  className="pdp-acc-trigger"
                  onClick={() => setOpenAccordion(openAccordion === 'disclaimer' ? '' : 'disclaimer')}
                >
                  <span>DISCLAIMER</span>
                  {openAccordion === 'disclaimer' ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {openAccordion === 'disclaimer' && (
                  <div className="pdp-acc-content">
                    <p>
                      Because each silhouette is individually hand-embroidered by master artisans, subtle variations in thread tension, sequin positioning, and fabric tone are inherent to bespoke couture.
                    </p>
                  </div>
                )}
              </div>

              {/* Legal */}
              <div className="pdp-acc-item">
                <button
                  className="pdp-acc-trigger"
                  onClick={() => setOpenAccordion(openAccordion === 'legal' ? '' : 'legal')}
                >
                  <span>LEGAL</span>
                  {openAccordion === 'legal' ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                </button>
                {openAccordion === 'legal' && (
                  <div className="pdp-acc-content">
                    <p>
                      Protected under International Intellectual Property Law. RFID chipped certificate of provenance included with every authentic DILNASHI Haute Couture acquisition.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE Section (Screenshot 4) */}
        <section className="related-products-section">
          <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', letterSpacing: '0.18em', marginBottom: '2.5rem' }}>
            YOU MAY ALSO LIKE
          </h3>

          <div className="related-grid-four">
            {youMayAlsoLike.map((item) => (
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
                <div className="product-card-label">Couture</div>
                <h4 className="product-card-title">{item.name}</h4>
                <div className="product-card-price">{item.priceFormatted}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RECENTLY VIEWED Section (Screenshot 4) */}
        <section className="related-products-section" style={{ borderTop: 'none', paddingTop: '1rem' }}>
          <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', letterSpacing: '0.18em', marginBottom: '2.5rem' }}>
            RECENTLY VIEWED
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {recentlyViewed.map((item) => (
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
                <div className="product-card-label">Couture</div>
                <h4 className="product-card-title">{item.name}</h4>
                <div className="product-card-price">{item.priceFormatted}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
