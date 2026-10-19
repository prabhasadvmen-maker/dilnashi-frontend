import React from 'react';
import { CloseIcon, BagIcon, ArrowRightIcon } from './CoutureIcons';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  navigate,
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="couture-modal-backdrop" onClick={onClose}>
      <div className="couture-slideover" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <BagIcon size={20} color="var(--gold-primary)" />
            <h3 style={{ fontSize: '0.9rem', letterSpacing: '0.14em' }}>SHOPPING BAG ({cartItems.length})</h3>
          </div>
          <button onClick={onClose} aria-label="Close Bag">
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Free Worldwide Shipping Notice */}
        <div style={{ padding: '0.6rem 1.5rem', background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-light)', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-body)', textAlign: 'center' }}>
          ✨ Complimentary Insured White-Glove Shipping & Heirloom Archival Trunk
        </div>

        {/* Items List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <BagIcon size={48} color="var(--border-light)" />
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-serif)', fontSize: '0.9rem', letterSpacing: '0.12em' }}>
                YOUR BAG IS CURRENTLY EMPTY
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Discover our latest Paris Couture & High Jewellery collections.
              </p>
              <button
                className="btn-luxury-primary"
                style={{ marginTop: '2rem' }}
                onClick={() => {
                  onClose();
                  navigate('/new-arrivals');
                }}
              >
                EXPLORE COUTURE
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {cartItems.map((item, idx) => (
                <div
                  key={`${item.id}-${item.size}-${idx}`}
                  style={{ display: 'flex', gap: '1.2rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--border-light)' }}
                >
                  <img
                    src={item.image || (item.images && item.images[0])}
                    alt={item.name}
                    style={{ width: '85px', height: '110px', objectFit: 'cover' }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--gold-primary)', letterSpacing: '0.15em' }}>
                      {item.collection || 'HAUTE COUTURE'}
                    </div>
                    <h4 style={{ fontSize: '0.82rem', letterSpacing: '0.06em', margin: '0.2rem 0' }}>
                      {item.name}
                    </h4>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Size: {item.size || 'Custom'} | Color: {item.color || 'Standard'}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.8rem' }}>
                      <div className="pdp-qty-row" style={{ padding: '0.2rem 0.6rem' }}>
                        <button onClick={() => onUpdateQty(item.id, item.size, item.quantity - 1)}>-</button>
                        <span style={{ fontSize: '0.75rem', minWidth: '16px', textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, item.size, item.quantity + 1)}>+</button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id, item.size)}
                        style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textDecoration: 'underline' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-light)', background: 'var(--bg-cream)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
              <span>Subtotal:</span>
              <span style={{ fontWeight: 600 }}>₹{subtotal.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>Custom Tailoring & Insured Transit:</span>
              <span style={{ color: '#2e7d32', fontWeight: 600 }}>COMPLIMENTARY</span>
            </div>

            <button
              className="btn-luxury-gold"
              style={{ width: '100%', padding: '1rem' }}
              onClick={() => {
                alert('Thank you for placing your bespoke inquiry. A senior Dilnashi Couture Stylist will contact you within 2 business hours for precision measurements & concierge billing.');
                onClose();
              }}
            >
              PROCEED TO BESPOKE CHECKOUT <ArrowRightIcon size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
