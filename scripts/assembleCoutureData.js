// scripts/assembleCoutureData.js
import fs from 'fs';
import path from 'path';
import ALL_PRODUCTS from './masterProducts.js';

const targetFile = path.resolve('src/data/coutureData.js');

const BRAND_AND_NAV = `// DILNASHI Haute Couture & High Jewellery — Master Data

export const BRAND = {
  name: "DILNASHI",
  tagline: "HAUTE COUTURE & HIGH JEWELLERY",
  founded: "1994",
  headquarters: "NEW DELHI • MUMBAI • DUBAI • LONDON",
  designerQuote: "Each piece is an everyday icon - designed to reflect your individuality and be worn, loved, and treasured.",
  signature: "Dilnashi",
};

export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/:/g, '')
    .replace(/[^\w\\s-]/g, '')
    .replace(/[\\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const NAVIGATION = [
  { id: "virtual-try-on", label: "VIRTUAL TRY ON", isNew: true, path: "/virtual-try-on" },
  { id: "new-arrivals", label: "NEW ARRIVALS", path: "/new-arrivals" },
  { id: "women", label: "WOMEN", path: "/women", hasMegaMenu: true },
  { id: "men", label: "MEN", path: "/men", hasMegaMenu: true },
  { id: "collections", label: "COLLECTIONS", path: "/collections" },
  { id: "jewellery", label: "JEWELLERY", path: "/jewellery" },
  { id: "stars", label: "STARS OF DILNASHI", path: "/stars" },
  { id: "vows", label: "DILNASHI VOWS", path: "/vows" },
  { id: "runways", label: "RUNWAYS", path: "/runways" },
  { id: "about", label: "ABOUT US", path: "/about" },
];

export const WOMEN_MEGA_MENU = {
  collections: [
    "MIJWAN 2026",
    "BECOMING",
    "THE FLORAL EDIT 2026",
    "THE INDIA STORY WOMEN - DUBAI 2026",
    "INAYA SUMMER WOMEN 2026",
    "AZTEC & FLORAL",
    "LUXE PRET 2025",
    "INAYA",
    "FESTIVE 2025",
    "HT SHOW",
    "DILNASHI READY TO WEAR",
    "EVARA",
    "WORLD COLLECTION: DUBAI WOMEN",
    "THE WORLD COLLECTION",
    "SUMMER 2024 - WOMEN",
    "SUMMER SAREES 24",
  ],
  occasions: [
    "BRIDAL",
    "RECEPTION",
    "SANGEET",
    "COCKTAIL",
    "HALDI AND MEHENDI",
    "VIEW ALL",
  ],
  categories: [
    "LEHENGAS",
    "SAREES",
    "KURTA SETS",
    "GOWNS",
    "FUSION WEAR",
    "VIEW ALL",
  ],
  featuredCards: [
    {
      title: "Silver Mermaid Corset Gown",
      collection: "BECOMING 2026",
      image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80",
      tag: "COUTURE",
    },
    {
      title: "Regal Ivory Zardozi Bridal Lehenga",
      collection: "DILNASHI VOWS",
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
      tag: "BRIDAL BESPOKE",
    },
    {
      title: "Pearl Embellished Gossamer Saree",
      collection: "PARIS COUTURE",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      tag: "HAUTE COUTURE",
    },
  ],
};

export const MEN_MEGA_MENU = {
  collections: [
    "MIJWAN 2026",
    "BECOMING",
    "THE INDIA STORY MEN - DUBAI 2026",
    "INAYA SUMMER MEN 2026",
    "WORLD COLLECTION: DUBAI MEN",
    "EVARA",
    "SUMMER '24",
    "BRIDAL COUTURE 2023-24 - MEN",
    "KHAAB BRIDAL COUTURE' 22",
    "NOORANIYAT '21",
    "KHAAB MENSWEAR",
    "RUHAANIYAT",
    "VIEW ALL",
  ],
  occasions: [
    "GROOM",
    "RECEPTION",
    "SANGEET",
    "COCKTAIL",
    "HALDI & MEHENDI",
    "VIEW ALL",
  ],
  categories: [
    "SHERWANI SETS",
    "BANDHGALA SETS",
    "BLAZER & JACKET SETS",
    "BUNDI SETS",
    "KURTA SETS",
    "SHIRTS",
    "VIEW ALL",
  ],
  featuredCards: [
    {
      title: "Velvet Embroidered Tuxedo Jacket",
      collection: "NOIR COUTURE",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      tag: "EVENING",
    },
    {
      title: "Royal Saffron Chikankari Sherwani",
      collection: "DILNASHI GROOM",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      tag: "ROYAL WEDDING",
    },
    {
      title: "Paris Runway Brocade Silk Ensemble",
      collection: "PARIS 2026",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
      tag: "RUNWAY",
    },
  ],
};

// Detailed metadata for EVERY collection in the mega menu
export const COLLECTIONS_DIRECTORY = {
  "mijwan-2026": {
    name: "MIJWAN 2026",
    subtitle: "The Awadh Chikankari Revival & Fishbone Pearls",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "Hand-loomed in the historic villages of Uttar Pradesh, sculpted with fishbone pearl highlights and metallic taban sequins. A bridge between village needlecraft and red carpet royalty.",
    highlights: ["Handcrafted Chikankari", "Swarovski Seed Pearls", "24-Kali Flared Skirts", "Raw Silk & Mulberry Organza"],
    fabricNotes: "Spun from 100% certified pure Mulberry organza, hand-loomed Chanderi tissue, and high-twist raw silk.",
    artisanHours: "1,200+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "becoming": {
    name: "BECOMING",
    subtitle: "Liquid Metallics & Sculptural Corsetry",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "An architectural exploration of power and sensual grace. Shimmering metallic taban threads, boned corsets, and cascading evening trains designed for the fearless modern empress.",
    highlights: ["Melted Metal Sheens", "Architectural Capes", "Illusion Mesh Bustiers", "Fluid Micro-Pleats"],
    fabricNotes: "Engineered with Japanese liquid metallic lurex, micro-pleated tulle, and featherlight taban organza.",
    artisanHours: "950+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "the-floral-edit-2026": {
    name: "THE FLORAL EDIT 2026",
    subtitle: "Blooms of Awadh & Kashmiri Resham Tilla",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    description: "Botanical poetry captured through multi-hued resham silk threads, blooming peonies, and delicate vine jaals embroidered across tissue chanderi and fluid organza.",
    highlights: ["3D Silk Petals", "Fine Needlework", "Pastel Garden Palettes", "Lightweight Trousseau"],
    fabricNotes: "Woven on pit-looms using pastel-dyed ahimsa silk threads and iridescent spun tissue borders.",
    artisanHours: "1,100+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "the-india-story-women-dubai-2026": {
    name: "THE INDIA STORY WOMEN - DUBAI 2026",
    subtitle: "Desert Sunset Opulence & Royal Beaten Zari",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=85",
    description: "Presented against the sands of Dubai, this collection celebrates international grand galas with molten amber zardozi, hand-beaten gold tissue, and royal velvet capes.",
    highlights: ["Beaten Gold Bullion", "Micro-Velvet Trims", "Floor-Sweeping Trains", "Heirloom Brocades"],
    fabricNotes: "Heavyweight pure Katan silk base adorned with 24-carat gold plated silver zari threadwork.",
    artisanHours: "1,450+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "inaya-summer-women-2026": {
    name: "INAYA SUMMER WOMEN 2026",
    subtitle: "Sun-drenched Gossamer & Chiffon",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85",
    description: "Effortless, breezy luxury crafted for destination weddings and sunset pheras. Sheer dupattas, feather-light chikankari kurtas, and sorbet-tinted lehengas.",
    highlights: ["Breathable Mulberry Chiffon", "Sorbet Colors", "Delicate Gota Patti", "Resort Wedding Ready"],
    fabricNotes: "Ultra-fine French chiffon and pure gossamer mulmul hand-dyed in gentle sorbet undertones.",
    artisanHours: "800+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "aztec-and-floral": {
    name: "AZTEC & FLORAL",
    subtitle: "Geometric Precision Meets Royal Florals",
    year: "2025/26",
    heroImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1920&q=85",
    description: "A daring juxtaposition of ancient geometric chevron motifs alongside delicate Persian floral medallions, rendered in shimmering bugle beads and metallic thread.",
    highlights: ["Chevron Beadwork", "Structured Jackets", "Modern Draping", "Cutdana Embroidery"],
    fabricNotes: "Structured Italian silk-wool blend, high-tensile mesh, and hand-cut bugle beads.",
    artisanHours: "1,050+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "luxe-pret-2025": {
    name: "LUXE PRET 2025",
    subtitle: "Contemporary Tailored Evening Glamour",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1920&q=85",
    description: "Versatile couture for high-profile celebrations. Co-ord blazer suits, embellished bralettes, and wide-leg trousers that transition from cocktail soirées to red carpets.",
    highlights: ["Tailored Tuxedo Suits", "High-Waist Palazzos", "Crystal Crop Tops", "Day-to-Night Versatility"],
    fabricNotes: "Stretch crepe silk, metallic lurex jacquard, and hand-beaded crystal lapels.",
    artisanHours: "650+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "inaya": {
    name: "INAYA",
    subtitle: "Sacred Red, Divinity & Heritage Bridal",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1920&q=85",
    description: "The timeless cornerstone of DILNASHI bridal elegance. Celebrating sacred vows through deep vermilion reds, blush ivories, and hand-beaten gold zari work.",
    highlights: ["Traditional Bridal Red", "Intricate Zardozi Jaal", "Pure Katan Silk", "Double Dupattas"],
    fabricNotes: "Handwoven in Varanasi using vintage gold wires and deep vermilion dyed mulberry katan silk.",
    artisanHours: "1,600+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "festive-2025": {
    name: "FESTIVE 2025",
    subtitle: "Celebrations in Regal Velvet & Marodi Gold",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "Rich jewel-toned silks and velvets enriched with antique Marodi embroidery, designed for grand Diwali banquets and sangeet celebrations.",
    highlights: ["Royal Emerald & Ruby Tones", "Marodi Needlework", "Hand-pleated Kurtas", "Brocade Dupattas"],
    fabricNotes: "Micro-velvet lined with pure mulberry habotai silk and antique copper-gold zari.",
    artisanHours: "900+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "ht-show": {
    name: "HT SHOW",
    subtitle: "The Grand Fashion Week Runway Edit",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "The signature showcase that captivated the global fashion press. Dramatic feathered trains, sheer net corsets, and statement high jewellery collars.",
    highlights: ["Runway Exclusives", "Feather-trim Pallus", "Crystalline Bodices", "Museum Quality"],
    fabricNotes: "Illusion tulle, hand-applied ostrich feathers, and micro-cut Swarovski crystals.",
    artisanHours: "1,500+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "dilnashi-ready-to-wear": {
    name: "DILNASHI READY TO WEAR",
    subtitle: "Everyday Luxury & Effortless Chic",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "Prêt-à-porter silhouettes infused with couture sensibilities. Hand-embroidered tunics, pre-draped georgette sarees, and lightweight evening capes.",
    highlights: ["Instant Dispatch Available", "Pre-stitched Drapes", "Lightweight Luxury", "Signature Hardware"],
    fabricNotes: "Crepe de Chine, lightweight georgette, and wrinkle-resistant silk blends for effortless travel.",
    artisanHours: "350+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "evara": {
    name: "EVARA",
    subtitle: "Celestial Ombre & Crystal Geometry",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    description: "Inspired by cosmic constellations and twilight skies. Gradient lilac and icy silver hues encrusted with micro-sequins and Swarovski drops.",
    highlights: ["Ombre Gradient Dyes", "Swarovski Crystals", "Halter-neck Blouses", "Liquid Metallic Glow"],
    fabricNotes: "Ombre hand-dipped georgette with silver taban sequins and translucent micro bugle beads.",
    artisanHours: "1,150+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "world-collection-dubai-women": {
    name: "WORLD COLLECTION: DUBAI WOMEN",
    subtitle: "Cross-Cultural Grandeur & Gilded Desert Silhouettes",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=85",
    description: "Bespoke creations engineered for royal destinations from the Burj Khalifa suites to the Mediterranean coast.",
    highlights: ["Gilded Kaftans", "Velvet Capes", "Uncut Diamond Brooches", "Sculptural Drapes"],
    fabricNotes: "Heavy silk faille, crushed metallic tissue, and pure beaten zardozi thread.",
    artisanHours: "1,350+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "the-world-collection": {
    name: "THE WORLD COLLECTION",
    subtitle: "Global Haute Couture Archive & Banarasi Tailoring",
    year: "2024/25",
    heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85",
    description: "Bridging East and West with hand-woven Banarasi brocades shaped into structured trench capes and evening gowns.",
    highlights: ["Banarasi Katan Silk", "Western Tailoring", "Global Heritage", "Collector Pieces"],
    fabricNotes: "Century-old pit loom Banarasi brocades lined with French silk satin.",
    artisanHours: "1,400+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "summer-2024-women": {
    name: "SUMMER 2024 - WOMEN",
    subtitle: "Pastel Dreams & Ivory Organza Whispers",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=85",
    description: "A tribute to summer serenity featuring delicate ivory chikankari and pale blush silhouettes for daytime garden weddings.",
    highlights: ["Daytime Wedding Edit", "Ivory & Blush", "Chikankari Phanda", "Tissue Dupattas"],
    fabricNotes: "Fine Chanderi silk, hand-spun mulmul, and hand-embroidered shadow work.",
    artisanHours: "750+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=85"
    ]
  },
  "summer-sarees-24": {
    name: "SUMMER SAREES 24",
    subtitle: "Fluid Drapes & Shimmering Metallic Borders",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "Pre-draped and classic six-yard sarees in liquid organza, French lace, and light-catching metallic borders.",
    highlights: ["Pre-draped Convenience", "French Chantilly Lace", "Feather-light Drapes", "Custom Blouses"],
    fabricNotes: "Imported French lace, pure organza tissue, and featherlight georgette.",
    artisanHours: "600+ Hand Needlework Hours",
    lookbookImages: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85"
    ]
  },
};

// Detailed metadata for EVERY Occasion
export const OCCASIONS_DIRECTORY = {
  "bridal": {
    name: "BRIDAL COUTURE",
    title: "The Royal Bridal Trousseau",
    subtitle: "Grand pheras, sacred vows, and unforgettable heirloom grandeur",
    heroImage: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1920&q=85",
    description: "For the quintessential royal bride. Ensembles woven with pure gold bullion wire, unheated seed pearls, and centuries-old zardozi techniques. Each bridal piece requires over 1,200 hours of devoted craftsmanship.",
    stylingTips: "Pair with certified uncut Polki mathapatti, multi-layered haars, and signature double dupatta styling.",
    atmosphere: "Sanctum Pheras & Imperial Palaces",
    palette: "Royal Vermilion, Imperial Crimson, Frost Ivory & Antique Gold",
  },
  "reception": {
    name: "RECEPTION GLAMOUR",
    title: "The Grand Reception Showcase",
    subtitle: "Sculptural evening silhouettes, dramatic trails, and midnight hues",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "High-voltage glamour engineered for modern wedding receptions and royal galas. Featuring hand-pleated metallic taban skirts, fishtail gowns, and liquid crystal corsetry.",
    stylingTips: "Complement with Colombian emerald drop earrings and architectural stilettos.",
    atmosphere: "Ballroom Galas & Red Carpet Entrances",
    palette: "Midnight Noir, Molten Platinum, Emerald Jewel & Liquid Chrome",
  },
  "sangeet": {
    name: "SANGEET NIGHT",
    title: "High-Sparkle Celebration",
    subtitle: "Dance-friendly weight, luminescent sequins, and mirror embroidery",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    description: "Designed for rhythmic celebrations and unforgettable music nights. Reflecting every spotlight with precision-cut Swarovski crystals and liquid metallic drapes.",
    stylingTips: "Style with chandelier diamond earrings, open hair waves, and comfortable bespoke juttis.",
    atmosphere: "Musical Celebrations & Dance Floor Glitz",
    palette: "Champagne Silver, Mint Green, Lilac Ombre & Electric Rose",
  },
  "cocktail": {
    name: "COCKTAIL SOIRÉE",
    title: "Contemporary Couture & Tuxedos",
    subtitle: "Sleek pant suits, sculpted corsets, and dark romance",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "Sharp tailoring meets couture craftsmanship. From the iconic Fishbone Mijwan Pant Suit to feather-trimmed capes and asymmetrical draping.",
    stylingTips: "Bold lip, sculptural ear cuffs, and slicked-back hair styling.",
    atmosphere: "Sunset Soirées & Penthouse Lounges",
    palette: "Dusty Pink, Obsidian Black, Liquid Gold & Titanium Grey",
  },
  "haldi-and-mehendi": {
    name: "HALDI & MEHENDI",
    title: "Vibrant Courtyard Celebrations",
    subtitle: "Golden yellows, sorbet limes, and joyful floral resham needlecraft",
    heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85",
    description: "Breezy luxury crafted for sunlit celebrations, floral jewelry, and festive music. Light silk organza kalidars and comfortable sharara sets.",
    stylingTips: "Pair with fresh jasmine gajras, uncut polki studs, and lightweight jhumkas.",
    atmosphere: "Sunlit Haveli Courtyards & Poolside Brunch",
    palette: "Lemon Sorbet, Marigold Amber, Mint Sage & Coral Peach",
  },
  "groom": {
    name: "GROOM HAUTE COUTURE",
    title: "The Regal Groom Collection",
    subtitle: "Heritage sherwanis, embroidered bandhgalas, and jewelled turbans",
    heroImage: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1920&q=85",
    description: "Commanding presence for the modern royal groom. Banarasi katan silks, Kashmiri needlework, and custom monogrammed brocade stoles.",
    stylingTips: "Adorn with antique ruby kalgi, emerald mala, and custom embroidered mojris.",
    atmosphere: "Baraat Processions & Royal Mandaps",
    palette: "Saffron Sunrise, Charcoal Slate, Raw Ivory & Royal Emerald",
  },
};

// Detailed metadata for EVERY Category
export const CATEGORIES_DIRECTORY = {
  "lehengas": {
    name: "COUTURE LEHENGAS",
    title: "Heirloom Bridal & Festive Lehengas",
    subtitle: "Full-volume 24-kali skirts, hand-beaded corsets, and gossamer veils",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "The crown jewel of Indian haute couture. Every DILNASHI lehenga is constructed with internal cancan engineering, handcrafted tassels, and ancestral hand-embroidery.",
    constructionNotes: "Crafted with 24 individual flared panels (kalis), double horsehair hem lining, and bespoke interior corset support.",
  },
  "sarees": {
    name: "HAUTE SAREES",
    title: "Liquid Drape & Sequin Sarees",
    subtitle: "Pre-draped cocktail sarees, Chantilly lace, and metallic tissue weaves",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    description: "From the iconic Bollywood metallic sequin drape to royal Banarasi heirlooms, our sarees epitomize effortless sensuality and timeless sophistication.",
    constructionNotes: "Offered in both classic six-yard lengths and innovative pre-pleated drapes with structured pallu clips.",
  },
  "kurta-sets": {
    name: "KURTA SETS",
    title: "Hand-Embroidered Kurta & Sharara Sets",
    subtitle: "Awadh Chikankari, tissue silk tunics, and palazzo ensembles",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=85",
    description: "Elegance redefined for intimate celebrations, festive dinners, and destination ceremonies. Hand-stitched with bakhia resham and seed pearl fringes.",
    constructionNotes: "Tailored with side-slit flared kalidars, relaxed silk habotai lining, and hand-embroidered organza dupattas.",
  },
  "gowns": {
    name: "EVENING GOWNS",
    title: "Sculptural Red Carpet Gowns",
    subtitle: "Fishtail silhouettes, corset gowns, and sweeping crystalline trains",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "Designed for international gala evenings and red carpets. Sculpted boning provides immaculate posture while thousands of crystals catch the light.",
    constructionNotes: "Features internal 14-piece steel boning, invisible back zip, and reinforced train loops for dancing ease.",
  },
  "fusion-wear": {
    name: "FUSION WEAR",
    title: "Contemporary Couture Ensembles",
    subtitle: "Pant suits, structured crop blazers, and cape sets",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "Where Indian artisan heritage meets Parisian bespoke tailoring. Featuring our celebrated Fishbone Mijwan pant suit and caped bustiers.",
    constructionNotes: "Sharp shoulder pads, hand-embroidered lapels, and high-waisted cigarette trousers engineered for maximum poise.",
  },
  "sherwani-sets": {
    name: "SHERWANI SETS",
    title: "Regal Royal Sherwanis",
    subtitle: "Pure matka silk, zardozi collars, and jewelled button sets",
    heroImage: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1920&q=85",
    description: "Bespoke tailoring for the groom and wedding party. Hand-embroidered with precision, paired with chintz safas and coordinating dupattas.",
    constructionNotes: "Full canvas chest piece, double-vented back, and pure gold bullion hand-embroidery on collars and cuffs.",
  },
  "bandhgala-sets": {
    name: "BANDHGALA SETS",
    title: "Structured Velvet & Silk Bandhgalas",
    subtitle: "Jodhpur royal silhouettes with modern imperial detailing",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=85",
    description: "The ultimate emblem of formal majesty. Tailored in micro-velvet, pure wool, and tussar silk with horn or jewelled crest buttons.",
    constructionNotes: "Imperial mandarin collar, concealed front placket, and hand-embroidered monogram pocket.",
  },
};
`;

const FOOTER_SECTIONS = `
export const HERO_SLIDES = [
  {
    id: 1,
    title: "PARIS COUTURE WEEK 2026",
    subtitle: "HAUTE COUTURE DILNASHI ATELIER",
    description: "An ode to hand-spun chikankari, shimmering fishbone zardozi, and architectural drapery unveiled at the grand salons of Paris.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    ctaPrimary: "EXPLORE COLLECTION",
    ctaSecondary: "BOOK PRIVATE VIEWING",
    theme: "light",
  },
  {
    id: 2,
    title: "BECOMING 2026",
    subtitle: "A NEW ERA OF COUTURE",
    description: "Sensual metallic silhouettes, hand-beaded crystalline corset gowns, and liquid drape sarees designed for the contemporary queen.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85",
    ctaPrimary: "DISCOVER BECOMING",
    ctaSecondary: "VIRTUAL TRY ON",
    theme: "dark",
  },
  {
    id: 3,
    title: "HIGH JEWELLERY ATELIER",
    subtitle: "UNCUT DIAMONDS & RUSSIAN EMERALDS",
    description: "Rare unheated gemstones handcrafted in 24k hallmarked gold by seventh-generation royal Rajasthani karigars.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85",
    ctaPrimary: "EXPLORE JEWELLERY",
    ctaSecondary: "VIEW LOOKBOOK",
    theme: "dark",
  },
];

export const CURATED_SEASONS = [
  {
    id: "lehenga",
    title: "LEHENGA",
    subtitle: "Handcrafted Zardozi & Resham",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    category: "LEHENGAS",
    link: "/category/lehengas",
  },
  {
    id: "fusion-wear",
    title: "FUSION WEAR",
    subtitle: "Sculptural Capes & Corsets",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    category: "FUSION WEAR",
    link: "/category/fusion-wear",
  },
  {
    id: "sherwanis",
    title: "SHERWANIS",
    subtitle: "Regal Heritage & Bandhgalas",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80",
    category: "SHERWANI SETS",
    link: "/category/sherwani-sets",
  },
  {
    id: "sarees",
    title: "SAREES",
    subtitle: "Fluid Metallic & Organza Drapes",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    category: "SAREES",
    link: "/category/sarees",
  },
];

export const JEWELLERY_ICONS = [
  { name: "NECKLACE", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=85", slug: "necklaces" },
  { name: "CHOKER", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=85", slug: "chokers" },
  { name: "MANGTIKKA", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=500&q=85", slug: "mangtikka" },
  { name: "RINGS", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=85", slug: "rings" },
  { name: "MEN'S JEWELLERY", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=500&q=85", slug: "mens-jewellery" },
  { name: "EARRINGS", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=85", slug: "earrings" },
  { name: "BRACELETS", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=500&q=85", slug: "bracelets" },
];

export const CELEBRITIES = [
  {
    id: 1,
    name: "JANHVI KAPOOR",
    occasion: "Royalty Gala Mumbai",
    outfit: "Deep Sapphire Velvet Zari Saree",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    details: "Custom midnight blue velvet saree embellished with 80,000 hand-sewn micro sequins and cutdana borders.",
  },
  {
    id: 2,
    name: "DIANA PENTY",
    occasion: "Paris Couture Week",
    outfit: "Frost Ivory Mijwan Gown",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
    details: "Hand-embroidered Lucknowi chikankari gossamer net gown with translucent crystal shoulder cape.",
  },
  {
    id: 3,
    name: "KIARA ADVANI",
    occasion: "Wedding Reception",
    outfit: "Champagne Gold Liquid Lehenga",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
    details: "A symphony of antique gold beaten metallic sequins with custom sweetheart bodice and cascading veil.",
  },
  {
    id: 4,
    name: "SIDHARTH MALHOTRA",
    occasion: "Royal Wedding Grandeur",
    outfit: "Embroidered Ivory Bandhgala",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
    details: "Raw silk bespoke tailored bandhgala with tone-on-tone Kashmiri threadwork and ruby buttons.",
  },
];

export const COUTURE_PROCESS_STEPS = [
  {
    id: "consultation",
    title: "Initial Consultation",
    content: "Your journey begins with a private 1-on-1 consultation either at our flagship ateliers in New Delhi, Mumbai, London, or via high-definition virtual suite. We listen to your aesthetic dreams, moodboards, and wedding palette.",
  },
  {
    id: "measurements",
    title: "Measurements",
    content: "Our master pattern-makers document over 35 bespoke anatomical measurements. We engineer the silhouette for majestic posture, absolute comfort, and seamless movement throughout hours of celebration.",
  },
  {
    id: "design-process",
    title: "Design Process",
    content: "Original couture illustrations are brought to life through custom dyed silk swatches, artisan hand-embroidery strike-offs, and micro-detailing with real gold bullion wire, seed pearls, and unheated gemstones.",
  },
  {
    id: "delivery",
    title: "Delivery",
    content: "Following two precision fitting trials, your heirloom masterpiece is placed inside a handcrafted monogrammed archival wooden trunk, complete with certificate of authenticity, and personally hand-delivered anywhere worldwide.",
  },
];

export const RUNWAY_SHOWS = [
  {
    id: "paris-couture-2026",
    title: "Paris Couture Week 2026",
    location: "Pavillon Vendôme, Paris",
    date: "July 2026",
    description: "Dilnashi presents 48 master crafted looks marrying the ancient craft of Awadh Chikankari with contemporary French architectural drapery.",
    cover: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "18:42",
    looksCount: 48,
  },
  {
    id: "becoming-mumbai-2026",
    title: "Becoming — The Grand Finale",
    location: "The Grand Ballroom, Mumbai",
    date: "February 2026",
    description: "A sensorial spectacle of light, metallic liquid tulles, and celestial embroidery inaugurated by Bollywood's brightest stars.",
    cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "24:15",
    looksCount: 62,
  },
  {
    id: "dubai-fashion-week-2025",
    title: "The India Story — Dubai",
    location: "Burj Al Arab Terrace, Dubai",
    date: "November 2025",
    description: "Global luxury couture meeting desert sunset hues, rich velvet capes, and uncut diamond body chains.",
    cover: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "15:30",
    looksCount: 36,
  },
];

export const ATELIER_LOCATIONS = [
  {
    city: "NEW DELHI",
    name: "The Mehrauli Flagship Palace",
    address: "One Style Mile, Kalka Das Marg, Mehrauli, New Delhi 110030",
    phone: "+91 11 4987 6500",
    timings: "11:00 AM – 8:00 PM (By Appointment)",
  },
  {
    city: "MUMBAI",
    name: "The Altamount Road Atelier",
    address: "Bungalow No. 4, Altamount Road, Cumballa Hill, Mumbai 400026",
    phone: "+91 22 2354 8800",
    timings: "11:00 AM – 8:00 PM (By Appointment)",
  },
  {
    city: "DUBAI",
    name: "Fashion Avenue Salon",
    address: "Fashion Avenue, Level 2, The Dubai Mall, Downtown Dubai, UAE",
    phone: "+971 4 362 7500",
    timings: "10:00 AM – 10:00 PM (VIP Walk-ins & Appointments)",
  },
  {
    city: "LONDON",
    name: "Mayfair Private Suite",
    address: "24 Mount Street, Mayfair, London W1K 2RR, United Kingdom",
    phone: "+44 20 7493 2100",
    timings: "10:00 AM – 6:30 PM (Private Concierge Booking)",
  },
];
`;

const productsCode = `\n// Master Products Catalog across ALL Sections (${ALL_PRODUCTS.length} creations)\nexport const ALL_PRODUCTS = ${JSON.stringify(ALL_PRODUCTS, null, 2)};\n`;

const finalFileContent = BRAND_AND_NAV + productsCode + FOOTER_SECTIONS;

fs.writeFileSync(targetFile, finalFileContent, 'utf-8');
console.log('Successfully written full coutureData.js! Total items:', ALL_PRODUCTS.length);
