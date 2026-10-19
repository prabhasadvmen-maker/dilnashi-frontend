import React, { useState } from 'react';
import { ALL_PRODUCTS, JEWELLERY_ICONS } from '../data/coutureData';
import {
  HeartIcon,
  DilnashiCrest,
  ArrowRightIcon,
  SparklesIcon,
  BagIcon,
  CheckIcon,
} from '../components/CoutureIcons';
import { handleImageError } from '../utils/imageFallbacks';

export default function JewelleryPage({
  navigate,
  onToggleWishlist,
  isWishlisted,
  onOpenAppointment,
  onAddToCart,
  onQuickView,
}) {
  const [activeSubCategory, setActiveSubCategory] = useState('ALL');
  const [selectedPurityFilter, setSelectedPurityFilter] = useState('ALL');

  // Master High Jewellery Catalog (18+ Heirloom Pieces)
  const masterJewellery = [
    {
      id: 'royal-uncut-diamond-polki-choker',
      name: 'The Noorani Polki & Emerald Choker',
      category: 'CHOKER',
      priceFormatted: '₹1,850,000',
      price: 1850000,
      gold: '22K BIS Hallmarked Royal Gold',
      gemstones: 'Certified Uncut Syndicate Polki (72.4 Cts) & Zambian Emeralds (115 Cts)',
      carat: '187.4 Carats Total Weight',
      origin: 'Jaipur Royal Guild',
      leadTime: 'Bespoke Atelier: 6-8 weeks',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'Multi-layered uncut Syndicate Polki diamonds set in 22K hallmarked gold with carved Zambian emerald drops and hand-enameled reverse meenakari.',
    },
    {
      id: 'solitaire-diamond-cascade-necklace',
      name: 'Imperial Cascading Diamond Ranee Haar',
      category: 'NECKLACE',
      priceFormatted: '₹2,400,000',
      price: 2400000,
      gold: '18K White & Rose Gold (145 gms)',
      gemstones: 'VVS-VS Brilliant Cut Diamonds (48.6 Cts) & South Sea Pearls',
      carat: '48.6 Cts Diamonds + 110 Cts Pearls',
      origin: 'Paris Haute Joaillerie Archive',
      leadTime: 'Bespoke Creation: 8-10 weeks',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'An architectural five-strand rani haar studded with marquise, pear, and brilliant-cut certified diamonds accented by untreated natural South Sea baroque pearls.',
    },
    {
      id: 'kundan-polki-chandbali-earrings',
      name: 'Royal Heritage Meenakari Chandbalis',
      category: 'EARRINGS',
      priceFormatted: '₹620,000',
      price: 620000,
      gold: '22K Yellow Jadau Gold (44 gms)',
      gemstones: 'Natural Uncut Diamonds (18.2 Cts) & Burmese Pigeon Blood Rubies',
      carat: '42.2 Carats Total Gem Weight',
      origin: 'Bikaner Jadau Atelier',
      leadTime: 'Immediate Insured Dispatch',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'Crescent-moon shaped royal chandbalis articulated with uncut polki clusters, cabochon Burmese rubies, and cascading seed pearl tassels.',
    },
    {
      id: 'solitaire-colombian-emerald-ring',
      name: 'The Majestic Colombian Solitaire Cocktail Ring',
      category: 'RINGS',
      priceFormatted: '₹950,000',
      price: 950000,
      gold: '950 Solid Platinum & 18K Yellow Gold',
      gemstones: '12.4 Ct Untreated Colombian Emerald (Minor Oil, Muzo Origin)',
      carat: '14.2 Carats Total Weight',
      origin: 'Muzo Mine / Bogotá Certified',
      leadTime: 'Custom Sized in 7 days',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'A monumental 12.4-carat untreated Colombian emerald cushion cabochon framed by stepped tapered diamond baguettes in hallmarked platinum.',
    },
    {
      id: 'maharani-jadau-mathapatti-mangtikka',
      name: 'Maharani Jadau Polki Maangtikka & Mathapatti',
      category: 'MANGTIKKA',
      priceFormatted: '₹780,000',
      price: 780000,
      gold: '22K BIS Hallmarked Yellow Gold',
      gemstones: 'Polki Uncut Diamonds (28 Cts) & Natural Pearl Clusters',
      carat: '36.5 Carats Total Weight',
      origin: 'Royal Rajputana Vaults',
      leadTime: 'Made to order: 4-6 weeks',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'An imperial bridal crown maangtikka with dual-chain mathapatti, encrusted with flat-cut polki florets and carved emerald beads.',
    },
    {
      id: 'nizam-groom-emerald-kalgi',
      name: 'The Nizam Royal Groom Emerald & Diamond Kalgi',
      category: "MEN'S JEWELLERY",
      priceFormatted: '₹1,150,000',
      price: 1150000,
      gold: '22K Yellow Jadau Gold (58 gms)',
      gemstones: 'Carved Zambian Emerald (42 Cts) & Polki Diamonds (16 Cts)',
      carat: '58 Carats Total Weight',
      origin: 'Hyderabad Asaf Jahi Archive',
      leadTime: 'Made to order: 3-5 weeks',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'A ceremonial safa turban crest (Kalgi) set with an antique carved emerald medallion, uncut diamond plumage, and a genuine plume holder.',
    },
    {
      id: 'groom-emerald-mala-kantha',
      name: 'Seven-Strand Royal Emerald & Basra Pearl Kantha',
      category: "MEN'S JEWELLERY",
      priceFormatted: '₹1,450,000',
      price: 1450000,
      gold: '22K Yellow Gold Spacers & Hallmarked Clasp',
      gemstones: 'Natural Tumbled Emeralds (480 Cts) & Basra Seed Pearls',
      carat: '480 Cts Emeralds + 90 Cts Pearls',
      origin: 'Imperial Groom Court Collection',
      leadTime: 'Made to order: 4-6 weeks',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'A majestic groom imperial kantha necklace composed of seven graduated strands of tumbled emerald beads interspersed with natural Basra pearls and gold spacers.',
    },
    {
      id: 'antique-jadau-ruby-kada-bangles',
      name: 'The Gaja Singha Antique Jadau Ruby Kada (Pair)',
      category: 'BRACELETS',
      priceFormatted: '₹1,350,000',
      price: 1350000,
      gold: '22K BIS Hallmarked Solid Gold (180 gms pair)',
      gemstones: 'Natural Uncut Diamonds (22 Cts) & Burmese Rubies (35 Cts)',
      carat: '57 Carats Gem Weight',
      origin: 'Rajasthan Royal Court Jewellers',
      leadTime: 'Atelier Made to Measure: 4 weeks',
      image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'A pair of heavy openable kadas sculpted with imperial lion-head finials, pavé-set with uncut polki diamonds and cabochon rubies in thick 22K gold.',
    },
    {
      id: 'solitaire-rose-cut-diamond-bracelet',
      name: 'The Versailles Rose-Cut Diamond Tennis Bracelet',
      category: 'BRACELETS',
      priceFormatted: '₹1,100,000',
      price: 1100000,
      gold: '950 Solid Platinum (42 gms)',
      gemstones: 'Natural Rose-Cut Diamonds (24.8 Cts, DEF Color, VVS-VS)',
      carat: '24.8 Carats Solitaires',
      origin: 'Place Vendôme, Paris',
      leadTime: 'Immediate Insured Dispatch',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'A seamless continuous line of antique rose-cut diamonds mounted in hand-milgrained platinum bezels with articulated links.',
    },
    {
      id: 'jaipur-hasli-polki-collar',
      name: 'The Rajkumari Rigid Gold Hasli Collar',
      category: 'CHOKER',
      priceFormatted: '₹1,650,000',
      price: 1650000,
      gold: '22K BIS Hallmarked Solid Gold',
      gemstones: 'Syndicate Polki Diamonds (54 Cts) & Basra Pearl Drops',
      carat: '74 Carats Total Weight',
      origin: 'Jaipur Meenakari Atelier',
      leadTime: 'Made to order: 5-7 weeks',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'A rigid, sculptural 22K gold hasli collar encrusted with flat syndicate polki diamonds in closed-foil settings and descending pearl fringes.',
    },
    {
      id: 'emerald-tassel-lariat-necklace',
      name: 'The Place Vendôme Emerald Tassel Lariat',
      category: 'NECKLACE',
      priceFormatted: '₹1,950,000',
      price: 1950000,
      gold: '18K White Gold (68 gms)',
      gemstones: 'Colombian Emerald Beads (120 Cts) & Brilliant Cut Diamonds',
      carat: '152 Carats Total Weight',
      origin: 'Paris Atelier High Joaillerie',
      leadTime: 'Made to order: 6 weeks',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'Modernist transformable lariat necklace featuring twin tassels of emerald micro-beads flowing from diamond-paved geometric octagons.',
    },
    {
      id: 'royal-men-emerald-brooch',
      name: 'The Imperial Peacock Sapphire & Emerald Lapel Brooch',
      category: "MEN'S JEWELLERY",
      priceFormatted: '₹540,000',
      price: 540000,
      gold: '18K Dual White & Yellow Gold',
      gemstones: 'Kashmir Blue Sapphires (9.5 Cts), Emeralds (8 Cts), Diamonds',
      carat: '23.5 Carats Gemstones',
      origin: 'Heritage Men\'s Joaillerie Vault',
      leadTime: 'Immediate Dispatch',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85',
      thumbnails: [
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=85',
        'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=85',
      ],
      description: 'An heirloom lapel brooch for bandhgalas and tuxedos, sculpted as a dancing peacock encrusted with Kashmir sapphires, Zambian emeralds, and diamonds.',
    },
  ];

  const subCategories = [
    'ALL',
    'CHOKER',
    'NECKLACE',
    'MANGTIKKA',
    'RINGS',
    "MEN'S JEWELLERY",
    'EARRINGS',
    'BRACELETS',
  ];

  const filteredItems = activeSubCategory === 'ALL'
    ? masterJewellery
    : masterJewellery.filter((item) => item.category === activeSubCategory);

  return (
    <div style={{ background: '#0a0908', color: '#ffffff', minHeight: '100vh', paddingBottom: '7rem' }}>
      {/* 1. Grand Joaillerie Atelier Hero Banner */}
      <section
        style={{
          position: 'relative',
          padding: '6rem 1.5rem 4.5rem',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 30%, #1c1813 0%, #0a0908 75%)',
          borderBottom: '1px solid rgba(197, 160, 89, 0.25)',
        }}
      >
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <DilnashiCrest size={48} color="var(--gold-bright)" />
          </div>
          <span
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.38em',
              color: 'var(--gold-bright)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.8rem',
              fontWeight: 500,
            }}
          >
            HAUTE JOAILLERIE ATELIER • PARIS & JAIPUR
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              letterSpacing: '0.18em',
              marginBottom: '1.2rem',
              fontWeight: 500,
              color: '#ffffff',
            }}
          >
            DILNASHI HIGH JEWELLERY
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.35rem',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            "Rare certified uncut Syndicate diamonds, untreated Colombian emeralds, and hallmarked 22K gold handcrafted by generational master court jewellers."
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              className="btn-luxury-gold"
              onClick={onOpenAppointment}
              style={{ padding: '0.8rem 1.8rem' }}
            >
              BOOK PRIVATE SALON VIEWING
            </button>
            <button
              onClick={() => navigate('/virtual-try-on')}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                color: '#ffffff',
                padding: '0.8rem 1.8rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              VIRTUAL 3D TRY-ON SUITE
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Sub-Category Filter Navigation Bar */}
      <section style={{ background: '#12100e', borderBottom: '1px solid rgba(197, 160, 89, 0.15)', position: 'sticky', top: '75px', zIndex: 40, backdropFilter: 'blur(10px)' }}>
        <div className="couture-container" style={{ padding: '0.9rem 1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {subCategories.map((cat) => {
            const isActive = activeSubCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveSubCategory(cat)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #2b241a 0%, #151310 100%)' : 'transparent',
                  border: isActive ? '1px solid var(--gold-bright)' : '1px solid transparent',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.25s ease',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. High Joaillerie Catalog Grid with Detail Shots */}
      <div className="couture-container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.22em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
              IMPERIAL ARCHIVE
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', letterSpacing: '0.12em', marginTop: '0.2rem' }}>
              {activeSubCategory === 'ALL' ? 'COMPLETE HIGH JOAILLERIE VAULT' : `${activeSubCategory} CREATIONS`} ({filteredItems.length} MASTERPIECES)
            </h2>
          </div>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
            ALL PIECES BIS & IGI CERTIFIED
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2.5rem' }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: '#141210',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                boxShadow: '0 15px 45px rgba(0, 0, 0, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
              }}
              className="jewellery-card-hover"
            >
              {/* Main Image Box */}
              <div
                style={{
                  position: 'relative',
                  height: '380px',
                  overflow: 'hidden',
                  background: '#0d0c0b',
                  cursor: 'pointer',
                }}
                onClick={() => onQuickView && onQuickView(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  onError={(e) => handleImageError(e, 'JEWELLERY')}
                />

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(item);
                  }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(10, 9, 8, 0.75)',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isWishlisted(item.id) ? 'var(--gold-bright)' : '#ffffff',
                    cursor: 'pointer',
                    zIndex: 10,
                  }}
                  title="Save to Wishlist"
                >
                  <HeartIcon size={17} fill={isWishlisted(item.id) ? 'var(--gold-primary)' : 'none'} />
                </button>

                {/* Lead Time / Purity Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    background: 'rgba(10, 9, 8, 0.85)',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    color: 'var(--gold-bright)',
                    padding: '4px 10px',
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {item.gold.split(' ')[0]} {item.gold.split(' ')[1] || 'HALLMARKED'}
                </div>
              </div>

              {/* Detail Thumbnail Gallery Row */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  padding: '0.75rem 1.2rem',
                  background: '#0d0c0b',
                  borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
                }}
              >
                {item.thumbnails.map((thumb, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      border: '1px solid rgba(197, 160, 89, 0.25)',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                    onClick={() => {
                      if (onQuickView) onQuickView({ ...item, image: thumb });
                    }}
                    title="View Detail Macro Shot"
                  >
                    <img
                      src={thumb}
                      alt={`Macro Detail ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => handleImageError(e, 'JEWELLERY')}
                    />
                  </div>
                ))}
                <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'right' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--gold-primary)', letterSpacing: '0.1em' }}>
                    PROVENANCE
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#ffffff', letterSpacing: '0.05em' }}>
                    {item.origin}
                  </span>
                </div>
              </div>

              {/* Product Specifications & Details */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: 'var(--gold-bright)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    display: 'block',
                  }}
                >
                  {item.category} • {item.carat}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    letterSpacing: '0.08em',
                    marginBottom: '0.6rem',
                    color: '#ffffff',
                    lineHeight: 1.35,
                    cursor: 'pointer',
                  }}
                  onClick={() => onQuickView && onQuickView(item)}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.05rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                  }}
                >
                  {item.description}
                </p>

                {/* Gemstone specs strip */}
                <div
                  style={{
                    background: 'rgba(197, 160, 89, 0.08)',
                    borderLeft: '2px solid var(--gold-primary)',
                    padding: '0.6rem 0.8rem',
                    fontSize: '0.72rem',
                    color: '#dedbd2',
                    fontFamily: 'var(--font-sans)',
                    marginBottom: '1.2rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  <strong style={{ color: 'var(--gold-bright)' }}>Gemstones:</strong> {item.gemstones}
                </div>

                {/* Price & Actions */}
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--gold-bright)',
                      letterSpacing: '0.08em',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.priceFormatted}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem' }}>
                    <button
                      onClick={() => onAddToCart && onAddToCart(item)}
                      style={{
                        background: 'linear-gradient(135deg, #c5a059 0%, #9d7c35 100%)',
                        color: '#0d0c0b',
                        border: 'none',
                        padding: '0.65rem 0.8rem',
                        fontSize: '0.68rem',
                        letterSpacing: '0.14em',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <BagIcon size={14} color="#0d0c0b" />
                      <span>Acquire Piece</span>
                    </button>

                    <button
                      onClick={onOpenAppointment}
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(197, 160, 89, 0.4)',
                        color: '#ffffff',
                        padding: '0.65rem 0.8rem',
                        fontSize: '0.66rem',
                        letterSpacing: '0.12em',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                      }}
                    >
                      Salon Viewing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. The 5 Royal Joaillerie Pillars */}
      <section style={{ marginTop: '6rem', padding: '5.5rem 0', background: '#0e0c0a', borderTop: '1px solid rgba(197, 160, 89, 0.25)', borderBottom: '1px solid rgba(197, 160, 89, 0.25)' }}>
        <div className="couture-container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: 'var(--gold-bright)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              HEREDITARY STANDARDS
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', letterSpacing: '0.14em' }}>
              THE 5 PILLARS OF DILNASHI HIGH JOAILLERIE
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', marginTop: '0.6rem' }}>
              Strict adherence to ancient royal gemstone ethics and uncompromising metallurgical purity
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#161412', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '2.2rem 1.6rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-bright)', fontSize: '1.6rem', marginBottom: '0.8rem' }}>💎</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', letterSpacing: '0.12em', color: '#ffffff', marginBottom: '0.6rem' }}>
                UNCUT SYNDICATE POLKI
              </h3>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                100% natural, untreated flat-cut diamonds with pure natural luster. Zero glass resin filling or synthetic enhancements.
              </p>
            </div>

            <div style={{ background: '#161412', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '2.2rem 1.6rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-bright)', fontSize: '1.6rem', marginBottom: '0.8rem' }}>🟢</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', letterSpacing: '0.12em', color: '#ffffff', marginBottom: '0.6rem' }}>
                MUZO COLOMBIAN EMERALDS
              </h3>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                Selected exclusively for deep royal green saturation with minimal natural cedarwood oil treatment, verified by SSEF / Gübelin.
              </p>
            </div>

            <div style={{ background: '#161412', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '2.2rem 1.6rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-bright)', fontSize: '1.6rem', marginBottom: '0.8rem' }}>⚜️</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', letterSpacing: '0.12em', color: '#ffffff', marginBottom: '0.6rem' }}>
                24K FOIL JADAU & MEENAKARI
              </h3>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                Ancestral closed-back setting using pure 24K gold foil (Daak), with vibrant hand-enameled reverse portraits of Awadh flora.
              </p>
            </div>

            <div style={{ background: '#161412', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '2.2rem 1.6rem', textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-bright)', fontSize: '1.6rem', marginBottom: '0.8rem' }}>📜</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', letterSpacing: '0.12em', color: '#ffffff', marginBottom: '0.6rem' }}>
                IGI & BIS HALLMARK PASSPORT
              </h3>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                Every single creation is stamped with 916/750 laser hallmarks and accompanied by an official archival gemstone provenance dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Imperial Groom Joaillerie Spotlight */}
      <section className="couture-container" style={{ marginTop: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', color: 'var(--gold-bright)', textTransform: 'uppercase' }}>
              ROYAL GROOM ATELIER
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', letterSpacing: '0.14em', margin: '0.5rem 0 1.2rem', color: '#ffffff' }}>
              IMPERIAL GROOM KALGI & KANTHA ARCHIVE
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              From Mughal court turban plumes encrusted with uncut diamonds and carved emerald medallions to 7-strand Basra pearl malas, we craft heirloom groom jewels designed to command absolute authority and royal presence.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="btn-luxury-gold"
                onClick={() => setActiveSubCategory("MEN'S JEWELLERY")}
              >
                EXPLORE GROOM JEWELS
              </button>
              <button
                onClick={onOpenAppointment}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(197, 160, 89, 0.4)',
                  color: '#ffffff',
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  fontFamily: 'var(--font-sans)',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                REQUEST GROOM CONSULTATION
              </button>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85"
              alt="Imperial Groom Kalgi"
              style={{
                width: '100%',
                maxHeight: '480px',
                objectFit: 'cover',
                border: '1px solid var(--gold-border)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
              onError={(e) => handleImageError(e, 'MENS_JEWELLERY')}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                background: 'rgba(10, 9, 8, 0.9)',
                border: '1px solid var(--gold-bright)',
                padding: '0.8rem 1.4rem',
                color: 'var(--gold-bright)',
                fontFamily: 'var(--font-serif)',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
              }}
            >
              CARVED EMERALD & POLKI SAFA CREST
            </div>
          </div>
        </div>
      </section>

      {/* 6. Private Salon Consultation Booking Banner */}
      <section
        style={{
          marginTop: '6.5rem',
          padding: '5rem 1.5rem',
          background: 'linear-gradient(135deg, #181511 0%, #0d0c0b 100%)',
          borderTop: '1px solid rgba(197, 160, 89, 0.3)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <DilnashiCrest size={40} color="var(--gold-bright)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.16em', color: '#ffffff', marginBottom: '0.8rem' }}>
            PRIVATE JOAILLERIE SALON RENDEZVOUS
          </h2>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
            View high joaillerie pieces in the private security of our private suites in New Delhi, Mumbai, Dubai, or Mayfair London. Insured armored vehicle delivery available worldwide.
          </p>
          <button
            className="btn-luxury-gold"
            onClick={onOpenAppointment}
            style={{ padding: '0.9rem 2.2rem', fontSize: '0.78rem' }}
          >
            SCHEDULE PRIVATE SALON VIEWING
          </button>
        </div>
      </section>
    </div>
  );
}
