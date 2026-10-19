import React from 'react';
import { CloseIcon, HeartIcon } from './CoutureIcons';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onAddToCart,
  navigate,
}) {
  if (!isOpen) return null;

  return (
    <div className="couture-modal-backdrop" onClick={onClose}>
      <div className="couture-slideover" onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <HeartIcon size={20} color="var(--gold-primary)" fill="var(--gold-primary)" />
            <h3 style={{ fontSize: '0.9rem', letterSpacing: '0.14em' }}>SAVED COUTURE PIECES ({wishlistItems.length})</h3>
          </div>
          <button onClick={onClose} aria-label="Close Wishlist">
            <CloseIcon size={20} />
          </button>
        </div>

        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {wishlistItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <HeartIcon size={48} color="var(--border-light)" />
              <p style={{ marginTop: '1rem', fontFamily: 'var(--font-serif)', fontSize: '0.9rem', letterSpacing: '0.12em' }}>
                YOUR WISHLIST IS EMPTY
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Save your favorite bridal lehengas, sarees, and fine jewellery.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  style={{ display: 'flex', gap: '1.2rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--border-light)' }}
                >
                  <img
                    src={item.image || (item.images && item.images[0])}
                    alt={item.name}
                    style={{ width: '85px', height: '110px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => {
                      onClose();
                      navigate(`/product/${item.id}`);
                    }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--gold-primary)', letterSpacing: '0.15em' }}>
                      {item.collection || 'HAUTE COUTURE'}
                    </div>
                    <h4
                      style={{ fontSize: '0.82rem', letterSpacing: '0.06em', margin: '0.2rem 0', cursor: 'pointer' }}
                      onClick={() => {
                        onClose();
                        navigate(`/product/${item.id}`);
                      }}
                    >
                      {item.name}
                    </h4>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.8rem' }}>
                      ₹{item.price.toLocaleString()}
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                      <button
                        className="btn-luxury-primary"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.68rem' }}
                        onClick={() => {
                          onAddToCart({ ...item, size: 'CUSTOM SIZE', quantity: 1 });
                          onRemoveWishlist(item.id);
                        }}
                      >
                        MOVE TO BAG
                      </button>
                      <button
                        onClick={() => onRemoveWishlist(item.id)}
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
      </div>
    </div>
  );
}
