import React, { useState } from 'react';
import { ALL_PRODUCTS } from '../data/coutureData';
import { SparklesIcon, CameraIcon, CheckIcon, ArrowRightIcon } from '../components/CoutureIcons';

export default function VirtualTryOnPage({ navigate, onAddToCart, onOpenAppointment }) {
  const [selectedProduct, setSelectedProduct] = useState(ALL_PRODUCTS[0]);
  const [activeModel, setActiveModel] = useState('model-1');
  const [lightingMode, setLightingMode] = useState('runway');
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedUserPhoto, setUploadedUserPhoto] = useState(null);

  const models = [
    {
      id: 'model-1',
      name: 'Elena (Paris Salons)',
      image: selectedProduct.images ? selectedProduct.images[0] : selectedProduct.image,
    },
    {
      id: 'model-2',
      name: 'Aishwarya (Royal Mumbai)',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'model-3',
      name: 'Zoya (Delhi Flagship)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedUserPhoto(url);
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 2500);
    }
  };

  const handleSelectProduct = (p) => {
    setSelectedProduct(p);
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1200);
  };

  const currentDisplayImage = uploadedUserPhoto || (models.find((m) => m.id === activeModel)?.image || selectedProduct.images[0]);

  return (
    <div className="vto-studio-section">
      <div className="couture-container">
        {/* Studio Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', color: 'var(--gold-bright)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <SparklesIcon size={16} color="var(--gold-bright)" /> DILNASHI ATELIER 3D INNOVATION
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', letterSpacing: '0.16em', margin: '0.6rem 0' }}>
            HAUTE COUTURE VIRTUAL TRY-ON
          </h1>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.2rem', color: '#c5b8a5', maxWidth: '650px', margin: '0 auto' }}>
            Simulate how DILNASHI bespoke silhouettes, hand-embroidered zardozi, and fine jewellery drape against your proportions in real-time.
          </p>
        </div>

        {/* Studio Layout */}
        <div className="vto-container-grid">
          {/* Left: Interactive AR Viewer Canvas */}
          <div>
            <div className="vto-canvas-frame">
              {/* Image */}
              <img
                src={currentDisplayImage}
                alt="Virtual Try On Simulation"
                className="vto-canvas-image"
                style={{
                  filter:
                    lightingMode === 'runway'
                      ? 'contrast(1.1) brightness(1.05)'
                      : lightingMode === 'palace'
                      ? 'sepia(0.2) brightness(0.95)'
                      : 'brightness(1)',
                }}
              />

              {/* Scanning laser effect */}
              {isScanning && <div className="vto-scanner-line" />}

              {/* Real-time AR overlay badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  background: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '2px',
                  borderLeft: '3px solid var(--gold-bright)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                }}
              >
                ● LIVE DRAPING: {selectedProduct.name}
              </div>

              {/* Lighting controls pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(13, 12, 11, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '30px',
                  padding: '4px',
                  display: 'flex',
                  gap: '4px',
                }}
              >
                <button
                  style={{
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.68rem',
                    borderRadius: '20px',
                    color: lightingMode === 'runway' ? '#000' : '#fff',
                    background: lightingMode === 'runway' ? 'var(--gold-bright)' : 'transparent',
                  }}
                  onClick={() => setLightingMode('runway')}
                >
                  Paris Runway
                </button>
                <button
                  style={{
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.68rem',
                    borderRadius: '20px',
                    color: lightingMode === 'palace' ? '#000' : '#fff',
                    background: lightingMode === 'palace' ? 'var(--gold-bright)' : 'transparent',
                  }}
                  onClick={() => setLightingMode('palace')}
                >
                  Royal Palace Night
                </button>
                <button
                  style={{
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.68rem',
                    borderRadius: '20px',
                    color: lightingMode === 'daylight' ? '#000' : '#fff',
                    background: lightingMode === 'daylight' ? 'var(--gold-bright)' : 'transparent',
                  }}
                  onClick={() => setLightingMode('daylight')}
                >
                  Salon Daylight
                </button>
              </div>
            </div>

            {/* Model & Upload Selectors */}
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: '#a49e95', textTransform: 'uppercase' }}>
                  Select Runway Model:
                </span>
                <div className="vto-model-selector-row">
                  {models.map((m) => (
                    <div
                      key={m.id}
                      className={`vto-model-thumb ${activeModel === m.id && !uploadedUserPhoto ? 'active' : ''}`}
                      onClick={() => {
                        setUploadedUserPhoto(null);
                        setActiveModel(m.id);
                        setIsScanning(true);
                        setTimeout(() => setIsScanning(false), 1200);
                      }}
                    >
                      <img src={m.image} alt={m.name} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload Selfie */}
              <div>
                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.65rem 1.2rem',
                    border: '1px solid var(--gold-border)',
                    background: '#1e1c19',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--gold-bright)',
                    cursor: 'pointer',
                    borderRadius: '2px',
                  }}
                >
                  <CameraIcon size={16} />
                  <span>UPLOAD YOUR FULL-LENGTH PHOTO</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Right: Silhouette Wardrobe Palette */}
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
              CURRENTLY FITTED CREATION
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', letterSpacing: '0.08em', margin: '0.4rem 0 0.8rem' }}>
              {selectedProduct.name}
            </h2>
            <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--gold-bright)', marginBottom: '0.8rem' }}>
              {selectedProduct.priceFormatted}
            </div>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: '#c5b8a5', lineHeight: '1.5', marginBottom: '2rem' }}>
              {selectedProduct.description}
            </p>

            {/* Quick Wardrobe Swatch */}
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>
                Select Silhouette To Try On:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {ALL_PRODUCTS.slice(0, 8).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p)}
                    style={{
                      cursor: 'pointer',
                      border: `1px solid ${selectedProduct.id === p.id ? 'var(--gold-bright)' : 'rgba(255, 255, 255, 0.15)'}`,
                      borderRadius: '3px',
                      overflow: 'hidden',
                      background: '#1a1816',
                      padding: '4px',
                    }}
                  >
                    <img
                      src={p.images ? p.images[0] : p.image}
                      alt={p.name}
                      style={{ width: '100%', height: '80px', objectFit: 'cover', marginBottom: '4px' }}
                    />
                    <div style={{ fontSize: '0.62rem', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn-luxury-gold"
                style={{ flexGrow: 1, padding: '1rem' }}
                onClick={() => {
                  onAddToCart({ ...selectedProduct, size: 'CUSTOM SIZE', quantity: 1 });
                  alert(`Added ${selectedProduct.name} (Custom Fitted) to your bag!`);
                }}
              >
                ADD TO CART WITH TRY-ON MEASUREMENTS
              </button>
              <button
                className="btn-luxury-outline"
                style={{ color: '#fff', borderColor: '#fff' }}
                onClick={onOpenAppointment}
              >
                BOOK IN-PERSON ATELIER TRIAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
