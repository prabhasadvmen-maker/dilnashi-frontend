// scripts/buildComprehensiveCoutureData.js
import fs from 'fs';
import path from 'path';

const outputPath = path.resolve('src/data/coutureData.js');

// Verified working Unsplash Images
const IMAGES = {
  LEHENGA_1: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
  LEHENGA_2: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
  LEHENGA_3: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85',
  LEHENGA_4: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
  
  SAREE_1: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
  SAREE_2: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
  SAREE_3: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',

  KURTA_W_1: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
  KURTA_W_2: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85',
  KURTA_W_3: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',

  GOWN_1: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85',
  GOWN_2: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85',
  GOWN_3: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',

  SHERWANI_1: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85',
  SHERWANI_2: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
  SHERWANI_3: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',

  BANDHGALA_1: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
  BANDHGALA_2: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
  BANDHGALA_3: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85',

  BLAZER_1: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
  BLAZER_2: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',

  BUNDI_1: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85',
  BUNDI_2: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85',

  KURTA_M_1: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
  KURTA_M_2: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85',

  SHIRT_1: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
  SHIRT_2: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',

  // High Joaillerie
  JEWEL_CHOKER: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85',
  JEWEL_NECKLACE: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
  JEWEL_RING: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85',
  JEWEL_EARRINGS: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85',
  JEWEL_MANGTIKKA: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85',
  JEWEL_MENS: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85',
  JEWEL_BRACELET: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85',
  JEWEL_KADA: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85',
  JEWEL_POLKI_SET: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85',
};

// 20+ Master High Jewellery Pieces
export const JEWELLERY_PRODUCTS = [
  {
    id: "royal-uncut-diamond-polki-choker",
    name: "The Noorani Polki & Emerald Choker",
    category: "CHOKER",
    subCategory: "CHOKER",
    gender: "WOMEN",
    collection: "BECOMING",
    occasion: "BRIDAL",
    description: "Multi-layered uncut Syndicate Polki diamonds set in 22K hallmarked gold with certified carved Zambian emerald drops and hand-enameled reverse meenakari.",
    price: 1850000,
    priceFormatted: "₹1,850,000",
    color: "Imperial Gold & Emerald",
    colorHex: "#c5a059",
    sizes: ["ADJUSTABLE ROYAL DORI"],
    leadTime: "Atelier Made to Measure: 6-8 weeks",
    goldPurity: "22K BIS Hallmarked Royal Gold",
    gemstones: "Certified Uncut Syndicate Polki (72.4 Cts) & Zambian Emeralds (115 Cts)",
    images: [IMAGES.JEWEL_CHOKER, IMAGES.JEWEL_NECKLACE, IMAGES.JEWEL_RING],
    image: IMAGES.JEWEL_CHOKER,
    details: [
      "Setting: Traditional Kundan Jadau with 24K pure gold foil encapsulation",
      "Reverse: Hand-painted Gulabi Meenakari florals from Jaipur master enamellers",
      "Certification: IGI Diamond Authentication & BIS Hallmark Guarantee",
      "Packaging: Bespoke velvet archival jewellery trunk with monogrammed lock"
    ]
  },
  {
    id: "solitaire-diamond-cascade-necklace",
    name: "Imperial Cascading Diamond Ranee Haar",
    category: "NECKLACE",
    subCategory: "NECKLACE",
    gender: "WOMEN",
    collection: "PARIS COUTURE 2026",
    occasion: "RECEPTION",
    description: "An architectural five-strand rani haar studded with marquise, pear, and brilliant-cut certified diamonds accented by untreated natural South Sea baroque pearls.",
    price: 2400000,
    priceFormatted: "₹2,400,000",
    color: "Platinum White & Rose Gold",
    colorHex: "#e5e4e2",
    sizes: ["HERITAGE LENGTH (28 INCHES)"],
    leadTime: "Bespoke Creation: 8-10 weeks",
    goldPurity: "18K White & Rose Gold (145 gms)",
    gemstones: "VVS-VS Clarity Brilliant Cut Diamonds (48.6 Cts) & South Sea Pearls",
    images: [IMAGES.JEWEL_NECKLACE, IMAGES.JEWEL_CHOKER, IMAGES.JEWEL_POLKI_SET],
    image: IMAGES.JEWEL_NECKLACE,
    details: [
      "Strand Count: 5 articulated graduated tiers for ergonomic clavicle drape",
      "Clasp: Concealed diamond-set push button safety clasp with safety chain",
      "Certification: GIA Certified Solitaires with Laser Inscription Registry",
      "Accompanied by: Dilnashi Joaillerie Archival Passport"
    ]
  },
  {
    id: "kundan-polki-chandbali-earrings",
    name: "Royal Heritage Meenakari Chandbalis",
    category: "EARRINGS",
    subCategory: "EARRINGS",
    gender: "WOMEN",
    collection: "MIJWAN 2026",
    occasion: "SANGEET",
    description: "Crescent-moon shaped royal chandbalis articulated with uncut polki clusters, cabochon Burmese rubies, and cascading seed pearl seed tassels.",
    price: 620000,
    priceFormatted: "₹620,000",
    color: "Mughal Red & Antique Gold",
    colorHex: "#9b111e",
    sizes: ["STATEMENT PAIR (3.5 INCHES)"],
    leadTime: "In Stock: Immediate Insured Dispatch",
    goldPurity: "22K Yellow Jadau Gold",
    gemstones: "Natural Uncut Diamonds (18.2 Cts) & Burmese Pigeon Blood Rubies (24 Cts)",
    images: [IMAGES.JEWEL_EARRINGS, IMAGES.JEWEL_MANGTIKKA, IMAGES.JEWEL_CHOKER],
    image: IMAGES.JEWEL_EARRINGS,
    details: [
      "Weight: Ergonomically weighted with detachable silk-cord ear supports",
      "Reverse: Red and green Banarasi meenakari enamel portraiture",
      "Closure: Bombay screw with clip-on security hinge"
    ]
  },
  {
    id: "solitaire-colombian-emerald-ring",
    name: "The Majestic Colombian Solitaire Cocktail Ring",
    category: "RINGS",
    subCategory: "RINGS",
    gender: "WOMEN",
    collection: "BECOMING",
    occasion: "COCKTAIL",
    description: "A monumental 12.4-carat untreated Colombian emerald cushion cabochon framed by stepped tapered diamond baguettes in hallmarked platinum.",
    price: 950000,
    priceFormatted: "₹950,000",
    color: "Vivid Emerald & Platinum",
    colorHex: "#004731",
    sizes: ["CUSTOM RING SIZING (US 5-9)"],
    leadTime: "Custom sized in 7 days",
    goldPurity: "950 Platinum & 18K Yellow Gold prongs",
    gemstones: "12.4 Ct Untreated Colombian Emerald (Minor Oil, Muzo Mine Origin)",
    images: [IMAGES.JEWEL_RING, IMAGES.JEWEL_CHOKER, IMAGES.JEWEL_BRACELET],
    image: IMAGES.JEWEL_RING,
    details: [
      "Origin Report: SSEF / Gübelin Gem Lab Certified Gemstone",
      "Side Stones: 1.8 Cts E-F Color VVS Diamond Baguettes",
      "Engraving: Complimentary bespoke inside-shank laser inscription"
    ]
  },
  {
    id: "jadau-polki-mathapatti-mangtikka",
    name: "Maharani Jadau Polki Maangtikka & Mathapatti",
    category: "MANGTIKKA",
    subCategory: "MANGTIKKA",
    gender: "WOMEN",
    collection: "BRIDAL COUTURE 2026",
    occasion: "BRIDAL",
    description: "An imperial bridal crown maangtikka with dual-chain mathapatti, encrusted with flat-cut polki florets and carved emerald beads.",
    price: 780000,
    priceFormatted: "₹780,000",
    color: "Bridal Ivory Gold",
    colorHex: "#c5a059",
    sizes: ["ADJUSTABLE HAIR PINS & COMB"],
    leadTime: "Made to order: 4-6 weeks",
    goldPurity: "22K BIS Hallmarked Yellow Gold",
    gemstones: "Polki Uncut Diamonds (28 Cts) & Natural Pearl Clusters",
    images: [IMAGES.JEWEL_MANGTIKKA, IMAGES.JEWEL_CHOKER, IMAGES.JEWEL_EARRINGS],
    image: IMAGES.JEWEL_MANGTIKKA,
    details: [
      "Crafting: Handcrafted by hereditary Bikaner royal court jewellers",
      "Design: Modular mathapatti chains can be detached to wear as standalone tikka",
      "Purity: Certified 91.6% Pure Gold with Laser Hallmark"
    ]
  },
  {
    id: "nizam-groom-emerald-kalgi",
    name: "The Nizam Royal Groom Emerald & Diamond Kalgi",
    category: "MEN'S JEWELLERY",
    subCategory: "MEN'S JEWELLERY",
    gender: "MEN",
    collection: "GROOM COUTURE 2026",
    occasion: "GROOM",
    description: "A ceremonial safa turban crest (Kalgi) set with an antique carved emerald medallion, uncut diamond plumage, and a genuine white egret plume holder.",
    price: 1150000,
    priceFormatted: "₹1,150,000",
    color: "Imperial Emerald & Gold",
    colorHex: "#004731",
    sizes: ["UNIVERSAL SAFA BROOCH CLIP"],
    leadTime: "Made to order: 3-5 weeks",
    goldPurity: "22K Yellow Jadau Gold (58 gms)",
    gemstones: "Carved Zambian Emerald (42 Cts) & Polki Diamonds (16 Cts)",
    images: [IMAGES.JEWEL_MENS, IMAGES.JEWEL_CHOKER, IMAGES.JEWEL_NECKLACE],
    image: IMAGES.JEWEL_MENS,
    details: [
      "Function: Dual pin-and-clip mechanism firmly secures onto silk or banarasi safa",
      "Reverse: Solid gold engraving with family crest customization option",
      "Accompaniment: Packaged in velvet presentation box with plume protection"
    ]
  },
  {
    id: "groom-emerald-mala-kantha",
    name: "Seven-Strand Royal Emerald & Basra Pearl Kantha",
    category: "MEN'S JEWELLERY",
    subCategory: "MEN'S JEWELLERY",
    gender: "MEN",
    collection: "GROOM COUTURE 2026",
    occasion: "GROOM",
    description: "A majestic groom's imperial kantha necklace composed of seven graduated strands of tumbled emerald beads interspersed with natural Basra pearls and gold spacers.",
    price: 1450000,
    priceFormatted: "₹1,450,000",
    color: "Emerald Green & Pearl",
    colorHex: "#046307",
    sizes: ["GROOM REGAL DRAPE (32 INCHES)"],
    leadTime: "Made to order: 4-6 weeks",
    goldPurity: "22K Yellow Gold Spacers & Hallmarked Clasp",
    gemstones: "Natural Tumbled Emeralds (480 Cts) & Natural Basra Seed Pearls",
    images: [IMAGES.JEWEL_NECKLACE, IMAGES.JEWEL_MENS, IMAGES.JEWEL_CHOKER],
    image: IMAGES.JEWEL_NECKLACE,
    details: [
      "Threading: Hand-strung on pure silk cord with gold bullion zari finish",
      "Clasp: Imperial peacock motif with double safety lock in 22K gold",
      "Heirloom Note: Built to be preserved as a multi-generational royal family jewel"
    ]
  },
  {
    id: "antique-jadau-ruby-kada-bangles",
    name: "The Gaja Singha Antique Jadau Ruby Kada (Pair)",
    category: "BRACELETS",
    subCategory: "BRACELETS",
    gender: "WOMEN",
    collection: "NOORANIYAT",
    occasion: "BRIDAL",
    description: "A pair of heavy openable kadas sculpted with imperial lion-head finials, pavé-set with uncut polki diamonds and cabochon rubies in thick 22K gold.",
    price: 1350000,
    priceFormatted: "₹1,350,000",
    color: "Antique Gold & Ruby",
    colorHex: "#d4af37",
    sizes: ["2.4", "2.6", "2.8", "CUSTOM SIZE"],
    leadTime: "Atelier Made to Measure: 4 weeks",
    goldPurity: "22K BIS Hallmarked Solid Gold (180 gms pair)",
    gemstones: "Natural Uncut Diamonds (22 Cts) & Burmese Rubies (35 Cts)",
    images: [IMAGES.JEWEL_KADA, IMAGES.JEWEL_BRACELET, IMAGES.JEWEL_RING],
    image: IMAGES.JEWEL_KADA,
    details: [
      "Hinge: Screw-in threaded gold pin for completely secure heirloom fit",
      "Workmanship: Repoussé chasing and hand-carved lion terminals",
      "Hallmarking: 916 Stamped by the Bureau of Indian Standards"
    ]
  },
  {
    id: "solitaire-rose-cut-diamond-bracelet",
    name: "The Versailles Rose-Cut Diamond Tennis Bracelet",
    category: "BRACELETS",
    subCategory: "BRACELETS",
    gender: "UNISEX",
    collection: "PARIS COUTURE 2026",
    occasion: "COCKTAIL",
    description: "A seamless continuous line of antique rose-cut diamonds mounted in hand-milgrained platinum bezels with high articulation.",
    price: 1100000,
    priceFormatted: "₹1,100,000",
    color: "Platinum White",
    colorHex: "#e5e4e2",
    sizes: ["7 INCHES", "7.5 INCHES", "8 INCHES"],
    leadTime: "In Stock: Immediate Insured Dispatch",
    goldPurity: "950 Solid Platinum (42 gms)",
    gemstones: "Natural Rose-Cut Diamonds (24.8 Cts, DEF Color, VVS-VS Clarity)",
    images: [IMAGES.JEWEL_BRACELET, IMAGES.JEWEL_RING, IMAGES.JEWEL_NECKLACE],
    image: IMAGES.JEWEL_BRACELET,
    details: [
      "Artisan Linkage: Individually hinged bezels prevent twisting on the wrist",
      "Clasp: Invisible box clasp with twin figure-eight safety catches",
      "Certificate: Full dossier with individual diamond mapping"
    ]
  },
  {
    id: "jaipur-hasli-polki-collar",
    name: "The Rajkumari Rigid Gold Hasli Collar",
    category: "CHOKER",
    subCategory: "CHOKER",
    gender: "WOMEN",
    collection: "THE WORLD COLLECTION",
    occasion: "BRIDAL",
    description: "A rigid, sculptural 22K gold hasli collar encrusted with flat syndicate polki diamonds in closed-foil settings and descending pearl fringes.",
    price: 1650000,
    priceFormatted: "₹1,650,000",
    color: "Imperial Gold",
    colorHex: "#c5a059",
    sizes: ["STANDARD ATELIER COLLAR"],
    leadTime: "Made to order: 5-7 weeks",
    goldPurity: "22K BIS Hallmarked Solid Gold",
    gemstones: "Syndicate Polki Diamonds (54 Cts) & Natural Basra Pearl Drops",
    images: [IMAGES.JEWEL_CHOKER, IMAGES.JEWEL_POLKI_SET, IMAGES.JEWEL_EARRINGS],
    image: IMAGES.JEWEL_CHOKER,
    details: [
      "Structure: Ergonomically sculpted to sit flush against the collarbone",
      "Hanging Beads: Hand-tied seed pearls with gold wire knotting",
      "Care: Includes specialized anti-tarnish microfibre chamois"
    ]
  },
  {
    id: "emerald-tassel-lariat-necklace",
    name: "The Place Vendôme Emerald Tassel Lariat",
    category: "NECKLACE",
    subCategory: "NECKLACE",
    gender: "WOMEN",
    collection: "PARIS COUTURE 2026",
    occasion: "COCKTAIL",
    description: "Modernist transformable lariat necklace featuring twin tassels of emerald micro-beads flowing from diamond-paved geometric octagons.",
    price: 1950000,
    priceFormatted: "₹1,950,000",
    color: "Emerald & Diamond White",
    colorHex: "#004731",
    sizes: ["ADJUSTABLE LARIAT SLIDER"],
    leadTime: "Made to order: 6 weeks",
    goldPurity: "18K White Gold (68 gms)",
    gemstones: "Colombian Emerald Beads (120 Cts) & Brilliant Cut Diamonds (32 Cts)",
    images: [IMAGES.JEWEL_NECKLACE, IMAGES.JEWEL_RING, IMAGES.JEWEL_CHOKER],
    image: IMAGES.JEWEL_NECKLACE,
    details: [
      "Transformability: Can be worn as a choker, back necklace, or wrapped bracelet",
      "Slider Mechanism: Velvet-smooth tension slider lined in silicone",
      "Hallmarking: Laser inscribed with unique atelier serial number"
    ]
  },
  {
    id: "royal-men-emerald-brooch",
    name: "The Imperial Peacock Sapphire & Emerald Lapel Brooch",
    category: "MEN'S JEWELLERY",
    subCategory: "MEN'S JEWELLERY",
    gender: "MEN",
    collection: "BECOMING",
    occasion: "RECEPTION",
    description: "An heirloom lapel brooch for bandhgalas and tuxedos, sculpted as a dancing peacock encrusted with Kashmir sapphires, Zambian emeralds, and diamonds.",
    price: 540000,
    priceFormatted: "₹540,000",
    color: "Royal Blue & Emerald",
    colorHex: "#0f52ba",
    sizes: ["STATEMENT LAPEL PIN (2.8 INCHES)"],
    leadTime: "In Stock: Immediate Dispatch",
    goldPurity: "18K Dual White & Yellow Gold",
    gemstones: "Kashmir Blue Sapphires (9.5 Cts), Emeralds (8 Cts), Diamonds (6 Cts)",
    images: [IMAGES.JEWEL_MENS, IMAGES.JEWEL_RING, IMAGES.JEWEL_BRACELET],
    image: IMAGES.JEWEL_MENS,
    details: [
      "Attachment: Heavy-duty threaded safety pin prevents fabric sagging",
      "Backing: Polished mirror gold backplate with Dilnashi hallmark",
      "Use: Designed specifically for heavyweight velvet and silk bandhgalas"
    ]
  }
];

console.log('Jewellery products created:', JEWELLERY_PRODUCTS.length);
