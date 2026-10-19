// High-resolution verified fallback images for every couture & jewellery category
export const FALLBACK_IMAGES = {
  LEHENGAS: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
  SAREES: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
  KURTA_SETS: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
  GOWNS: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85',
  ANARKALIS: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85',
  SHARARAS: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
  FUSION_WEAR: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',
  SHERWANI_SETS: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85',
  BANDHGALA_SETS: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
  BLAZERS: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
  BUNDI_SETS: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85',
  SHIRTS: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
  JEWELLERY: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85',
  CHOKER: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85',
  NECKLACE: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
  RINGS: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85',
  EARRINGS: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85',
  MANGTIKKA: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85',
  MENS_JEWELLERY: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85',
  BRACELETS: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85',
  DEFAULT: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
};

export const getFallbackImage = (category = '', gender = 'WOMEN') => {
  const c = category ? category.toUpperCase().replace(/\s+/g, '_') : '';
  if (c.includes('LEHENGA')) return FALLBACK_IMAGES.LEHENGAS;
  if (c.includes('SAREE')) return FALLBACK_IMAGES.SAREES;
  if (c.includes('KURTA')) return FALLBACK_IMAGES.KURTA_SETS;
  if (c.includes('GOWN')) return FALLBACK_IMAGES.GOWNS;
  if (c.includes('ANARKALI')) return FALLBACK_IMAGES.ANARKALIS;
  if (c.includes('SHARARA')) return FALLBACK_IMAGES.SHARARAS;
  if (c.includes('FUSION')) return FALLBACK_IMAGES.FUSION_WEAR;
  if (c.includes('SHERWANI')) return FALLBACK_IMAGES.SHERWANI_SETS;
  if (c.includes('BANDHGALA')) return FALLBACK_IMAGES.BANDHGALA_SETS;
  if (c.includes('BLAZER') || c.includes('JACKET')) return FALLBACK_IMAGES.BLAZERS;
  if (c.includes('BUNDI')) return FALLBACK_IMAGES.BUNDI_SETS;
  if (c.includes('SHIRT')) return FALLBACK_IMAGES.SHIRTS;
  if (c.includes('CHOKER')) return FALLBACK_IMAGES.CHOKER;
  if (c.includes('NECKLACE')) return FALLBACK_IMAGES.NECKLACE;
  if (c.includes('RING')) return FALLBACK_IMAGES.RINGS;
  if (c.includes('EARRING')) return FALLBACK_IMAGES.EARRINGS;
  if (c.includes('MANGTIKKA')) return FALLBACK_IMAGES.MANGTIKKA;
  if (c.includes('MEN') && c.includes('JEWEL')) return FALLBACK_IMAGES.MENS_JEWELLERY;
  if (c.includes('BRACELET') || c.includes('KADA')) return FALLBACK_IMAGES.BRACELETS;
  if (c.includes('JEWEL')) return FALLBACK_IMAGES.JEWELLERY;
  return gender === 'MEN' ? FALLBACK_IMAGES.SHERWANI_SETS : FALLBACK_IMAGES.LEHENGAS;
};

export const handleImageError = (e, category = '', gender = 'WOMEN') => {
  if (e && e.currentTarget) {
    e.currentTarget.onerror = null;
    e.currentTarget.src = getFallbackImage(category, gender);
  }
};
