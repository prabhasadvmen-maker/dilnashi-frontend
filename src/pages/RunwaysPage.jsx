import React, { useState } from 'react';
import { RUNWAY_SHOWS } from '../data/coutureData';
import { PlayIcon, CloseIcon } from '../components/CoutureIcons';

export default function RunwaysPage({ navigate }) {
  const [activeVideoShow, setActiveVideoShow] = useState(null);

  return (
    <div style={{ padding: '3.5rem 0 6rem', background: '#ffffff' }}>
      <div className="couture-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">HAUTE COUTURE PRESENTATIONS</span>
          <h1 className="section-main-title">RUNWAY ARCHIVES</h1>
          <p className="section-subtitle-italic" style={{ marginBottom: 0 }}>
            Front row access to our grand couture showcases across Paris, Dubai, and Mumbai
          </p>
        </div>

        {/* Shows List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {RUNWAY_SHOWS.map((show) => (
            <div
              key={show.id}
              style={{
                position: 'relative',
                height: '520px',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#000',
                display: 'flex',
                alignItems: 'flex-end',
                boxShadow: 'var(--shadow-luxury)',
              }}
            >
              <img
                src={show.cover}
                alt={show.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.75,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)',
                }}
              />

              {/* Center Play Button */}
              <button
                className="play-circle-btn"
                style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
                onClick={() => setActiveVideoShow(show)}
                aria-label={`Watch ${show.title}`}
              >
                <PlayIcon size={28} fill="currentColor" />
              </button>

              {/* Bottom Info */}
              <div style={{ position: 'relative', zIndex: 10, padding: '2.5rem', width: '100%', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div style={{ maxWidth: '640px' }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--gold-bright)', marginBottom: '0.4rem' }}>
                    {show.location} • {show.date}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                    {show.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {show.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    className="btn-luxury-gold"
                    onClick={() => setActiveVideoShow(show)}
                  >
                    WATCH FULL RUNWAY ({show.videoDuration})
                  </button>
                  <button
                    className="btn-luxury-outline"
                    style={{ color: '#fff', borderColor: '#fff' }}
                    onClick={() => navigate('/collections')}
                  >
                    VIEW {show.looksCount} LOOKS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Playback Modal */}
        {activeVideoShow && (
          <div className="couture-modal-backdrop" onClick={() => setActiveVideoShow(null)}>
            <div
              style={{
                width: '100%',
                maxWidth: '900px',
                background: '#000',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ padding: '1.2rem', display: 'flex', justifyContent: 'space-between', color: '#fff', borderBottom: '1px solid #222' }}>
                <h3 style={{ fontSize: '0.9rem', letterSpacing: '0.12em' }}>{activeVideoShow.title} (4K STREAM)</h3>
                <button onClick={() => setActiveVideoShow(null)} style={{ color: '#fff' }}>
                  <CloseIcon size={20} />
                </button>
              </div>
              <div style={{ height: '480px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={activeVideoShow.cover}
                  alt={activeVideoShow.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                />
                <div style={{ position: 'absolute', textAlign: 'center', color: '#fff', background: 'rgba(0,0,0,0.6)', padding: '2rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--gold-bright)', marginBottom: '0.5rem' }}>
                    HAUTE COUTURE BROADCAST
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1rem' }}>
                    Front Row Experience • 4K 60FPS
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#ccc' }}>
                    Streaming direct from {activeVideoShow.location}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
