// DILNASHI Haute Couture & High Jewellery — Master Data

export const BRAND = {
  name: "DILNASHI",
  tagline: "HAUTE COUTURE & HIGH JEWELLERY",
  founded: "1994",
  headquarters: "NEW DELHI • MUMBAI • DUBAI • LONDON",
  designerQuote: "Each piece is an everyday icon - designed to reflect your individuality and be worn, loved, and treasured.",
  signature: "Dilnashi",
};

export const ATELIER_LOCATIONS = [
  {
    city: "NEW DELHI",
    name: "The Dilnashi Flagship Haveli",
    address: "One Style Mile, Kalka Das Marg, Mehrauli, New Delhi 110030",
    phone: "+91 11 4108 8800",
    timings: "Monday - Sunday: 11:00 AM - 8:00 PM",
  },
  {
    city: "MUMBAI",
    name: "The Kala Ghoda Joaillerie Salon",
    address: "Forbes Building, VB Gandhi Marg, Kala Ghoda, Fort, Mumbai 400001",
    phone: "+91 22 6633 4400",
    timings: "Monday - Sunday: 11:00 AM - 8:00 PM",
  },
  {
    city: "DUBAI",
    name: "The Royal Fashion Avenue Salon",
    address: "Fashion Avenue Extension, The Dubai Mall, Downtown Dubai, UAE",
    phone: "+971 4 362 7500",
    timings: "Sunday - Thursday: 10:00 AM - 11:00 PM",
  },
  {
    city: "LONDON",
    name: "The Mayfair Private Couture Suite",
    address: "14 Old Bond Street, Mayfair, London W1S 4PP, United Kingdom",
    phone: "+44 20 7493 0000",
    timings: "By Appointment Only",
  },
];

export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/:/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
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
    "MEHENDI",
    "HALDI",
    "VIEW ALL",
  ],
  categories: [
    "LEHENGA SETS",
    "SAREES",
    "GOWNS",
    "ANARKALIS",
    "SHARARAS",
    "KURTA SETS",
    "VIEW ALL",
  ],
  featuredCards: [
    {
      title: "Paris Couture 2026",
      tag: "RUNWAY",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85",
    },
    {
      title: "Mijwan Chikankari",
      tag: "HERITAGE",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=85",
    },
    {
      title: "Becoming Bridal",
      tag: "NEW IN",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=85",
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
    "RULIAANIYAT",
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
      title: "Royal Groom Sherwanis",
      tag: "BESPOKE",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=85",
    },
    {
      title: "Obsidian Bandhgalas",
      tag: "ROYALTY",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=85",
    },
    {
      title: "Silk Bundi Sets",
      tag: "FESTIVE",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85",
    },
  ],
};

export const JEWELLERY_ICONS = [
  { name: "CHOKER", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=85" },
  { name: "NECKLACE", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=85" },
  { name: "MANGTIKKA", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=85" },
  { name: "RINGS", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=85" },
  { name: "MEN'S JEWELLERY", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=500&q=85" },
  { name: "EARRINGS", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=500&q=85" },
  { name: "BRACELETS", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=85" },
];

export const CELEBRITIES = [
  {
    id: 1,
    name: "Janhvi Kapoor",
    outfit: "Liquid Silver Taban Sequin Saree",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Diana Penty",
    outfit: "Pastel Chikankari Fishbone Skirt Set",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Kiara Advani",
    outfit: "Ivory Pearls Bridal Lehenga & Uncut Polki Choker",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Sidharth Malhotra",
    outfit: "Obsidian Micro-Velvet Royal Bandhgala",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=85",
  },
];

export const COUTURE_PROCESS_STEPS = [
  {
    id: "consultation",
    title: "1. BESPOKE PRIVATE ATELIER CONSULTATION",
    content: "A private rendezvous with our senior couturiers in New Delhi, Mumbai, Dubai, or Mayfair London to capture your posture, preferences, and personal design narrative.",
  },
  {
    id: "fabric",
    title: "2. TEXTILE ARCHIVE & METALLIC TABAN WEAVES",
    content: "Selecting hand-woven Katan silks from Varanasi, pure Pashmina from Kashmir, and gossamer organzas custom-dyed to your bridal palette.",
  },
  {
    id: "embroidery",
    title: "3. ANCESTRAL AWADH NEEDLECRAFT & JADAU EMBELLISHMENT",
    content: "Over 800 master artisans execute rare stitches—Bakhia, Phanda, Murri, and real beaten gold leaf zardozi—over 1,200 painstaking artisan hours.",
  },
  {
    id: "fitting",
    title: "4. THE MUSLIN TOILE & FLAWLESS FITTING",
    content: "A tailored muslin prototype is sculpted directly on your form to guarantee impeccable comfort, internal corsetry support, and fluid mobility.",
  },
  {
    id: "delivery",
    title: "5. ARCHIVAL CHEST PACKAGING & INSURED WHITE-GLOVE DISPATCH",
    content: "Your bespoke heirloom is presented in a handcrafted wooden monogrammed trunk with a certificate of provenance and global insured concierge delivery.",
  },
];

// Master Categories Directory (All 13 categories)
export const CATEGORIES_DIRECTORY = {
  "lehengas": {
    name: "COUTURE LEHENGAS",
    title: "Heirloom Bridal & Festive Lehengas",
    subtitle: "Full-volume 24-kali skirts, hand-beaded corsets, and gossamer veils",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "The crown jewel of Indian haute couture. Every DILNASHI lehenga is constructed with internal cancan engineering, handcrafted tassels, and ancestral hand-embroidery.",
    constructionNotes: "Crafted with 24 individual flared panels (kalis), double horsehair hem lining, and bespoke interior corset support.",
  },
  "lehenga-sets": {
    name: "LEHENGA SETS",
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
  "anarkalis": {
    name: "ROYAL ANARKALIS",
    title: "Court Anarkalis & Floor-Length Silhouettes",
    subtitle: "Awadh Chikankari, pure silk kalidars, and gossamer dupattas",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=85",
    description: "Inspired by the royal courts of Awadh. Fluid kalidars featuring up to 32 flared panels, sculpted bodices, and heritage mukaish embroideries.",
    constructionNotes: "Engineered with concealed side fastenings, hand-rolled hemlines, and breathable silk habotai inner linings.",
  },
  "shararas": {
    name: "FESTIVE SHARARAS",
    title: "Two-Tiered Flared Sharara Sets",
    subtitle: "Peplum tops, zardozi needlework, and vintage gota patti borders",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "A celebration of festive grace. Wide-leg tiered sharara trousers styled with embroidered short kurtas and delicate tissue dupattas.",
    constructionNotes: "Double-flared knee gathers for maximum volume during movement, with comfortable elasticated inner waistbands.",
  },
  "gowns": {
    name: "EVENING GOWNS",
    title: "Sculptural Red Carpet Gowns",
    subtitle: "Fishtail silhouettes, corset gowns, and sweeping crystalline trains",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "Designed for international gala evenings and red carpets. Sculpted boning provides immaculate posture while thousands of crystals catch the light.",
    constructionNotes: "Features internal 14-piece steel boning, invisible back zip, and reinforced train loops for dancing ease.",
  },
  "kurta-sets": {
    name: "KURTA SETS",
    title: "Hand-Embroidered Kurta & Pant Ensembles",
    subtitle: "Awadh Chikankari, tissue silk tunics, and palazzo ensembles",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=85",
    description: "Elegance redefined for intimate celebrations, festive dinners, and destination ceremonies. Hand-stitched with bakhia resham and seed pearl fringes.",
    constructionNotes: "Tailored with side-slit flared kalidars, relaxed silk habotai lining, and hand-embroidered organza dupattas.",
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
  "blazer-and-jacket-sets": {
    name: "BLAZERS & DINNER JACKETS",
    title: "Bespoke Black Tie & Sangeet Blazers",
    subtitle: "Kashmiri tilla work, silk satin shawl lapels, and crystal constellations",
    heroImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1920&q=85",
    description: "International red-carpet tailoring meets artisanal needlecraft. Cut from Super 150s wool, pure silk, and Italian velvet.",
    constructionNotes: "Hand-canvassed construction with natural horsehair, roped sleeve heads, and custom jacquard lining.",
  },
  "bundi-sets": {
    name: "BUNDI SETS",
    title: "Handcrafted Bundi Waistcoats & Kurtas",
    subtitle: "Chikankari vests, chanderi kurtas, and churidar sets",
    heroImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=85",
    description: "The quintessential Indian celebration ensemble. Sleeveless bundis decorated with mirrorwork and thread embroidery.",
    constructionNotes: "Mandarin collar with functional welt pockets, reinforced buttonholes, and curved hem styling.",
  },
  "shirts": {
    name: "LUXURY SHIRTS",
    title: "Bespoke Silk & Linen Shirts",
    subtitle: "Tuxedo bib fronts, embroidered collars, and mother-of-pearl buttons",
    heroImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1920&q=85",
    description: "Tailored to exacting standards in pure mulberry silk, Normandy flax linen, and Egyptian cotton with hand-stitched detailing.",
    constructionNotes: "Single-needle stitching at 18 stitches per inch, removable collar stays, and genuine Australian shell buttons.",
  },
  "jewellery": {
    name: "HIGH JEWELLERY",
    title: "Imperial Polki & Gemstone Archives",
    subtitle: "Uncut Syndicate Polki, Colombian Emeralds, and 22K Hallmarked Gold",
    heroImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85",
    description: "Heirloom joaillerie handcrafted by master court jewellers of Rajasthan using ancestral Jadau, Kundan, and Meenakari techniques.",
    constructionNotes: "Certified by the International Gemological Institute (IGI) and stamped with 22K/18K Bureau of Indian Standards hallmarks.",
  },
};

// Master Occasions Directory
export const OCCASIONS_DIRECTORY = {
  "bridal": {
    name: "BRIDAL COUTURE",
    title: "The Royal Matrimonial Archives",
    subtitle: "Ancestral red lehengas, rose-gold weaves, and complete bridal dossiers",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "Every bride deserves an ensemble that echoes through generations. Encrusted with real beaten gold bullion wire and uncut polki jewels.",
  },
  "groom": {
    name: "GROOM ATELIER",
    title: "Imperial Sherwanis & Regal Safas",
    subtitle: "Hand-woven matka silks, zardozi collars, and diamond kalgi crests",
    heroImage: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1920&q=85",
    description: "Commanding presence for the modern royal groom. Impeccably structured sherwanis accompanied by matching stoles and handcrafted footwear.",
  },
  "reception": {
    name: "RECEPTION GALA",
    title: "Black Tie & Contemporary Grandeur",
    subtitle: "Liquid metallic gowns, crystal sarees, and velvet bandhgalas",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "Glamour under chandelier lights. Architecturally boned evening gowns, sweeping sequin sarees, and razor-sharp dinner suits.",
  },
  "sangeet": {
    name: "SANGEET CELEBRATIONS",
    title: "Fluid Silhouettes for Rhythmic Joy",
    subtitle: "Featherlight organza lehengas, mirrorwork shararas, and silk jackets",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "Engineered for effortless twirling. Lightweight flared skirts with reflective mirror rosettes that catch every stage spotlight.",
  },
  "cocktail": {
    name: "COCKTAIL & RED CARPET",
    title: "Bold Architectural Glamour",
    subtitle: "Corset gowns, pant suits, and dramatic backless silhouettes",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=85",
    description: "Where couture meets fearless modern self-expression. Razor-sharp tailoring, liquid drapery, and high-octane embellishment.",
  },
  "haldi-and-mehendi": {
    name: "HALDI & MEHENDI",
    title: "Sun-Drenched Celebrations",
    subtitle: "Mustard gota patti, mint mirrorwork, and breezy chanderi sets",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=85",
    description: "Joyful, vibrant, and effortlessly comfortable. Breathable silk chanderis and light gota embroideries for outdoor ceremonies.",
  },
};

// Master Collections Directory
export const COLLECTIONS_DIRECTORY = {
  "mijwan-2026": {
    name: "MIJWAN 2026",
    subtitle: "An Ode to Awadh Chikankari",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "A tribute to our 30-year patronage of rural women artisans in Awadh. Featuring intricate bakhia, phanda, and fishbone needlework.",
  },
  "becoming": {
    name: "BECOMING",
    subtitle: "Liquid Metal & Dark Luxe",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "Ancestral silver bullion wire meets liquid drapery. An exploration of bold self-expression, dark romance, and eternal glamour.",
  },
  "the-floral-edit-2026": {
    name: "THE FLORAL EDIT 2026",
    subtitle: "Romantic Watercolor Flora",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85",
    description: "Hand-painted watercolor botanical blooms translated onto pure organza and silk with crystal seed dewdrops.",
  },
  "the-india-story-women-dubai-2026": {
    name: "THE INDIA STORY - DUBAI 2026",
    subtitle: "Palatial Global Couture",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "Presented at Dubai Couture Week. An architectural symphony of Mughal geometries and contemporary cosmopolitan drape.",
  },
  "inaya-summer-women-2026": {
    name: "INAYA SUMMER 2026",
    subtitle: "Breezy Pastel Festivities",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=85",
    description: "Featherlight silk chanderi and tissue ensembles designed for destination celebrations across Lake Como and Udaipur.",
  },
  "aztec-and-floral": {
    name: "AZTEC & FLORAL",
    subtitle: "Geometric Fusion Heritage",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1920&q=85",
    description: "Intriguing juxtaposed geometries where tribal symmetry meets soft Lucknowi threadwork.",
  },
  "luxe-pret-2025": {
    name: "LUXE PRET 2025",
    subtitle: "Contemporary Evening Pret",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    description: "Effortless pre-draped sarees, blazer gowns, and cape bustiers for modern evening revelry.",
  },
  "inaya": {
    name: "INAYA",
    subtitle: "Regal Heritage Weaves",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "The timeless beauty of pure Katan silk and traditional Awadh zardozi court embroidery.",
  },
  "festive-2025": {
    name: "FESTIVE 2025",
    subtitle: "Luminous Celebratory Silhouettes",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=85",
    description: "Vibrant hues of marigold, saffron, and fuchsia accented with gold gota patti and mirror rosettes.",
  },
  "ht-show": {
    name: "HT SHOW COUTURE",
    subtitle: "Grand Runway Masterpieces",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "The dramatic runway collection showcased at the prestigious Hindustan Times Luxury Fashion Conclave.",
  },
  "dilnashi-ready-to-wear": {
    name: "DILNASHI READY TO WEAR",
    subtitle: "Everyday Luxury Staples",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "Elevated casual kurtas, silk tunics, and linen shirts crafted with the same obsessive attention to craft.",
  },
  "evara": {
    name: "EVARA",
    subtitle: "Heirloom Velvet & Brocade",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    description: "Regal micro-velvets and gold taban tissue created for royal winter weddings and galas.",
  },
  "world-collection-dubai-women": {
    name: "WORLD COLLECTION: DUBAI",
    subtitle: "Global Luxury Perspectives",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "A bridge between ancient Indian handlooms and the ultra-modern skyline of Dubai.",
  },
  "the-world-collection": {
    name: "THE WORLD COLLECTION",
    subtitle: "International Couture Series",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "Presented across Paris, London, and New York. Global silhouettes with Indian artisan souls.",
  },
  "summer-2024-women": {
    name: "SUMMER 2024 - WOMEN",
    subtitle: "Destination Wedding Edit",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=85",
    description: "Lightweight layered organza skirts, breezy cape sets, and pastel Chikankari suits.",
  },
  "summer-sarees-24": {
    name: "SUMMER SAREES 24",
    subtitle: "Gossamer Organza & Chiffon",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    description: "Fluid sheer sarees that drape like water, embellished with delicate silver foil sprinkles.",
  },
};

// Master Products Array (110+ items)
export const ALL_PRODUCTS = [
  {
    "id": "ivory-pearls-chikankari-lehenga",
    "name": "Ivory Pearls Chikankari Bridal Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "BRIDAL",
    "description": "Hand-loomed ivory chanderi silk lehenga with 24 kalis encrusted with Austrian crystals, Japanese micro-pearls, and dual organza veils.",
    "price": 680000,
    "priceFormatted": "₹6,80,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "light-pink-ivory-mijwan-skirt",
    "name": "Light Pink With Ivory Mijwan Skirt Set",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "BRIDAL",
    "description": "Pastel blush pink bridal lehenga with tone-on-tone ivory chikankari work and 24-kali flare with pearl accents.",
    "price": 520000,
    "priceFormatted": "₹5,20,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "champagne-chikankari-fishbone-bridal-lehenga",
    "name": "Champagne Chikankari Fishbone Bridal Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "BRIDAL",
    "description": "Grand 24-kali champagne raw silk bridal skirt encrusted with thousands of micro-pearls, metallic taban threads, and double tissue veils.",
    "price": 640000,
    "priceFormatted": "₹6,40,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "gulabi-meenakari-bridal-lehenga",
    "name": "Gulabi Meenakari Rose Silk Lehenga Set",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "BRIDAL",
    "description": "Mughal rose pink bridal silhouette embellished with real silver bullion wire zardozi, hand-cut glass stones, and floral resham motifs.",
    "price": 720000,
    "priceFormatted": "₹7,20,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "saffron-gold-regal-mandap-lehenga",
    "name": "Saffron Gold Royal Mandap Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "INAYA",
    "occasion": "BRIDAL",
    "description": "Deep saffron raw silk ceremonial lehenga with antique marodi zardozi and real beaten gold leaf borders.",
    "price": 790000,
    "priceFormatted": "₹7,90,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "powder-blue-crystal-reception-lehenga",
    "name": "Powder Blue Liquid Crystal Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "RECEPTION",
    "description": "Modern architectural lehenga drenched in over 80,000 iridescent Swarovski crystals and glass bugle beads.",
    "price": 590000,
    "priceFormatted": "₹5,90,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "lavender-mist-organza-sangeet-lehenga",
    "name": "Lavender Mist Organza Sangeet Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "THE FLORAL EDIT 2026",
    "occasion": "SANGEET",
    "description": "Featherlight layered organza skirt with hand-painted watercolor blooms and delicate sequin sprays for effortless dance movement.",
    "price": 480000,
    "priceFormatted": "₹4,80,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "emerald-velvet-winter-bridal-lehenga",
    "name": "Emerald Velvet Imperial Bridal Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "EVARA",
    "occasion": "BRIDAL",
    "description": "Deep forest emerald micro-velvet kalidar skirt laden with heavyweight dabka, nakshi, and uncut semi-precious jade stones.",
    "price": 820000,
    "priceFormatted": "₹8,20,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "midnight-noir-corset-cocktail-lehenga",
    "name": "Midnight Noir Structured Corset Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Dramatic raven black georgette skirt with chevron sequin embroidery and a sculpted internal steel-boned corset.",
    "price": 510000,
    "priceFormatted": "₹5,10,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "sunshine-yellow-gotta-patti-haldi-lehenga",
    "name": "Sunshine Yellow Gotta Patti Haldi Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "FESTIVE 2025",
    "occasion": "HALDI AND MEHENDI",
    "description": "Vibrant marigold yellow lehenga detailed with authentic Jaipur gotta patti applique and playful mirror tassels.",
    "price": 390000,
    "priceFormatted": "₹3,90,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "dusty-rose-mirrorwork-mehendi-lehenga",
    "name": "Dusty Rose Handcrafted Mirrorwork Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "INAYA SUMMER WOMEN 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Dusty rose crepe lehenga intricately studded with convex hand-cut mirrors, silk thread bakhia, and an organza dupatta.",
    "price": 440000,
    "priceFormatted": "₹4,40,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "blush-organza-destination-lehenga",
    "name": "Blush Organza Cascading Floral Lehenga",
    "category": "LEHENGAS",
    "gender": "WOMEN",
    "collection": "SUMMER 2024 - WOMEN",
    "occasion": "SANGEET",
    "description": "Cascading tiered organza bridal skirt with romantic resham threadwork, styled for palatial destination weddings.",
    "price": 460000,
    "priceFormatted": "₹4,60,000",
    "color": "Heritage Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 8-10 weeks",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "pearl-white-fishbone-mijwan-saree",
    "name": "Pearl White Fishbone Mijwan Georgette Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "RECEPTION",
    "description": "Ethereal pearl white pure georgette saree embroidered with geometric fishbone jaal and Japanese seed pearls, paired with an illusion blouse.",
    "price": 380000,
    "priceFormatted": "₹3,80,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "metallic-silver-liquid-sequin-saree",
    "name": "Liquid Silver Tabani Sequin Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "The iconic Dilnashi liquid metallic drape covered in hundreds of thousands of hand-stitched micro-sequins with a sculptural bustier.",
    "price": 340000,
    "priceFormatted": "₹3,40,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "rose-gold-tissue-banarasi-saree",
    "name": "Rose Gold Handloom Tissue Banarasi Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "THE INDIA STORY WOMEN - DUBAI 2026",
    "occasion": "BRIDAL",
    "description": "Woven by master weavers of Varanasi using real zari metallic wefts, finished with hand-knotted pearl tassels.",
    "price": 420000,
    "priceFormatted": "₹4,20,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "champagne-chikankari-tulle-saree",
    "name": "Champagne Chikankari Tulle Red Carpet Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "HT SHOW",
    "occasion": "COCKTAIL",
    "description": "Gossamer sheer tulle saree with Awadh shadow-work embroidery and scalloped crystal edges.",
    "price": 395000,
    "priceFormatted": "₹3,95,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ruby-red-heritage-zardozi-saree",
    "name": "Crimson Royal Zardozi Heritage Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "EVARA",
    "occasion": "BRIDAL",
    "description": "Traditional bridal vermillion red crepe saree framed with 4-inch heavy antique gold zardozi border.",
    "price": 460000,
    "priceFormatted": "₹4,60,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "emerald-green-cocktail-pre-draped-saree",
    "name": "Emerald Sculptural Pre-Draped Concept Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "LUXE PRET 2025",
    "occasion": "COCKTAIL",
    "description": "Effortless pre-pleated satin georgette drape with structured hip drape clip and beaded bralette.",
    "price": 310000,
    "priceFormatted": "₹3,10,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "lilac-ombre-organza-saree",
    "name": "Lilac Ombré Hand-Painted Organza Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "SUMMER SAREES 24",
    "occasion": "SANGEET",
    "description": "Pastel lilac to blush gradient sheer saree with delicate gota patti and hand-cut sequin sprigs.",
    "price": 260000,
    "priceFormatted": "₹2,60,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "gold-taban-tissue-drape-saree",
    "name": "Imperial Gold Taban Liquid Tissue Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "DILNASHI READY TO WEAR",
    "occasion": "RECEPTION",
    "description": "Liquid metallic spun tissue saree that catches the light like molten gold with a corset blouse.",
    "price": 375000,
    "priceFormatted": "₹3,75,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "peach-chikankari-pearl-saree",
    "name": "Peach Blossom Chikankari & Pearl Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "THE FLORAL EDIT 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Soft peach pure georgette saree worked with intricate tepchi, jaali, and seed pearls.",
    "price": 295000,
    "priceFormatted": "₹2,95,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "black-onyx-crystal-cocktail-saree",
    "name": "Onyx Black Starburst Crystal Saree",
    "category": "SAREES",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Dramatic black silk chiffon saree with radiating crystal constellations and an open-back halter blouse.",
    "price": 385000,
    "priceFormatted": "₹3,85,000",
    "color": "Imperial Silk",
    "sizes": [
      "CUSTOM BLOUSE INCLUDED"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "regal-ivory-anarkali-gown",
    "name": "Regal Ivory Awadh Floor-Length Anarkali",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "RECEPTION",
    "description": "A magnificent 32-kali floor-sweeping anarkali crafted in pure mulberry silk, embroidered with shadow Chikankari and seed pearls.",
    "price": 380000,
    "priceFormatted": "₹3,80,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "blush-pink-chikankari-anarkali",
    "name": "Blush Pink Resham Embroidered Anarkali Set",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "INAYA",
    "occasion": "SANGEET",
    "description": "Soft blush pink kalidar anarkali with layered tissue lining, delicate gota border, and a hand-painted floral dupatta.",
    "price": 320000,
    "priceFormatted": "₹3,20,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "emerald-green-velvet-yoke-anarkali",
    "name": "Emerald Green Velvet Yoke Royal Anarkali",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "BRIDAL",
    "description": "Rich bottle green silk georgette flare supported by an antique dabka and zardozi embroidered velvet bodice.",
    "price": 440000,
    "priceFormatted": "₹4,40,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "gold-tissue-banarasi-anarkali",
    "name": "Gold Tissue Banarasi Kalidar Anarkali Suit",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "THE WORLD COLLECTION",
    "occasion": "RECEPTION",
    "description": "Hand-loomed metallic gold tissue anarkali with woven brocade borders, paired with churidar and sheerness dupatta.",
    "price": 410000,
    "priceFormatted": "₹4,10,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ruby-crimson-bridal-anarkali",
    "name": "Ruby Crimson Bridal Court Anarkali Set",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "EVARA",
    "occasion": "BRIDAL",
    "description": "Regal crimson bridal silhouette accented with real silver marodi work and heavy scalloped dupatta.",
    "price": 490000,
    "priceFormatted": "₹4,90,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "powder-blue-crystal-anarkali",
    "name": "Powder Blue Crystal Embellished Anarkali",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "FESTIVE 2025",
    "occasion": "COCKTAIL",
    "description": "Dreamy ice blue pure georgette anarkali with 28 flared kalis twinkling with micro-crystals.",
    "price": 350000,
    "priceFormatted": "₹3,50,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "turmeric-yellow-haldi-anarkali",
    "name": "Turmeric Yellow Gotta Jaal Haldi Anarkali",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "SUMMER 2024 - WOMEN",
    "occasion": "HALDI AND MEHENDI",
    "description": "Bright sunshine anarkali crafted with organic cotton silk, detailed with geometric gotta ribbons.",
    "price": 280000,
    "priceFormatted": "₹2,80,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "black-gold-zardozi-gala-anarkali",
    "name": "Black Onyx & Gold Zardozi Gala Anarkali",
    "category": "ANARKALIS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Midnight noir high-collar anarkali with imperial gold sleeve cuffs and an opulent banarasi dupatta.",
    "price": 425000,
    "priceFormatted": "₹4,25,000",
    "color": "Imperial Hue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-chikankari-palace-sharara",
    "name": "Ivory Chikankari Awadh Palace Sharara Set",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "BRIDAL",
    "description": "A timeless bridal sharara with two-tiered voluminous flared pants, short peplum kurti, and gossamer veil.",
    "price": 360000,
    "priceFormatted": "₹3,60,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "dusty-pink-gota-sharara-set",
    "name": "Dusty Pink Gota Patti Peplum Sharara",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "INAYA SUMMER WOMEN 2026",
    "occasion": "SANGEET",
    "description": "Playful blush pink sharara pants paired with an embroidered peplum top and matching hand-beaded potli.",
    "price": 310000,
    "priceFormatted": "₹3,10,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "mustard-gold-mehendi-sharara",
    "name": "Mustard Gold Zari Embroidered Mehendi Sharara",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "FESTIVE 2025",
    "occasion": "HALDI AND MEHENDI",
    "description": "Radiant golden-yellow raw silk sharara set with traditional kiran lace borders and gotta work.",
    "price": 295000,
    "priceFormatted": "₹2,95,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "teal-peacock-velvet-sharara",
    "name": "Teal Peacock Embroidered Velvet Sharara",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "RECEPTION",
    "description": "Deep jewel-toned teal micro-velvet tunic with flared silk sharara pants and heavy antique zardozi.",
    "price": 450000,
    "priceFormatted": "₹4,50,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "mint-green-mirrorwork-sharara",
    "name": "Mint Green Handcrafted Mirrorwork Sharara",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "THE FLORAL EDIT 2026",
    "occasion": "SANGEET",
    "description": "Refreshing pastel mint sharara pants decorated with reflective mirror rosettes and organza ruffles.",
    "price": 340000,
    "priceFormatted": "₹3,40,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "lavender-crystal-cocktail-sharara",
    "name": "Lavender Dream Crystal Draped Sharara",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "LUXE PRET 2025",
    "occasion": "COCKTAIL",
    "description": "Contemporary silhouette featuring a structured bustier with draped attached pallu and flared sharara.",
    "price": 380000,
    "priceFormatted": "₹3,80,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ruby-wine-banarasi-sharara",
    "name": "Ruby Wine Woven Banarasi Silk Sharara",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "EVARA",
    "occasion": "BRIDAL",
    "description": "Rich burgundy wine vintage banarasi weave sharara with real metallic motifs and pure silk kurta.",
    "price": 420000,
    "priceFormatted": "₹4,20,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "peach-pearl-kalidar-sharara",
    "name": "Peach Blossom Kalidar Pearl Sharara Set",
    "category": "SHARARAS",
    "gender": "WOMEN",
    "collection": "SUMMER 2024 - WOMEN",
    "occasion": "HALDI AND MEHENDI",
    "description": "Delicate peach georgette short kurti with wide flared trousers finished in freshwater seed pearl trims.",
    "price": 285000,
    "priceFormatted": "₹2,85,000",
    "color": "Festive Palette",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "paris-silver-crystalline-corset-gown",
    "name": "Paris Silver Crystalline Corset Ball Gown",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "PARIS COUTURE 2026",
    "occasion": "RECEPTION",
    "description": "Sculptural metallic silver ball gown with hand-draped micro-pleated tulle and thousands of cascading Swarovski crystals.",
    "price": 580000,
    "priceFormatted": "₹5,80,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "midnight-noir-fishtail-velvet-gown",
    "name": "Midnight Noir Fishtail Velvet Red Carpet Gown",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Dramatic hourglass gown in Italian micro-velvet with an asymmetrical structured shoulder and cathedral train.",
    "price": 490000,
    "priceFormatted": "₹4,90,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "rose-gold-liquid-sequin-gown",
    "name": "Rose Gold Liquid Sequin Slit Gown",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "LUXE PRET 2025",
    "occasion": "COCKTAIL",
    "description": "High-slit red carpet gown covered in gradient rose-gold sequins with an internal anatomical corset.",
    "price": 430000,
    "priceFormatted": "₹4,30,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "champagne-draped-trail-gown",
    "name": "Champagne Greek Draped Silk Chiffon Gown",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "HT SHOW",
    "occasion": "RECEPTION",
    "description": "Ethereal goddess gown in liquid champagne silk chiffon with gold-embroidered waist harness and cape.",
    "price": 460000,
    "priceFormatted": "₹4,60,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "emerald-architectural-mermaid-gown",
    "name": "Emerald Architectural Mermaid Cut Gown",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "THE WORLD COLLECTION",
    "occasion": "COCKTAIL",
    "description": "Sculpted emerald gown with structural fan pleating and jewel-encrusted high neckline.",
    "price": 520000,
    "priceFormatted": "₹5,20,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "blush-tulle-feather-couture-gown",
    "name": "Blush Tulle & Ostrich Feather Gala Gown",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "SUMMER 2024 - WOMEN",
    "occasion": "RECEPTION",
    "description": "Dreamy multi-tiered blush tulle gown trimmed with ethically-sourced ostrich feathers and bugle beads.",
    "price": 610000,
    "priceFormatted": "₹6,10,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "obsidian-crystal-backless-gown",
    "name": "Obsidian Black Backless Crystal Evening Gown",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Sensual halterneck gown with cowl drapery and an open back framed in crystalline chandelier strands.",
    "price": 475000,
    "priceFormatted": "₹4,75,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-bridal-corset-cape-gown",
    "name": "Ivory Bridal Corset Gown with Attached Cape",
    "category": "GOWNS",
    "gender": "WOMEN",
    "collection": "BRIDAL COUTURE 2026",
    "occasion": "BRIDAL",
    "description": "Modern bridal gown with traditional zardozi motifs reimagined into clean contemporary silhouette lines.",
    "price": 550000,
    "priceFormatted": "₹5,50,000",
    "color": "Red Carpet Luxe",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "frost-ivory-mijwan-kalidar-kurta",
    "name": "Frost Ivory Mijwan Kalidar Kurta Set",
    "category": "KURTA SETS",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Hand-loomed ivory chanderi kalidar kurta with intricate phanda and bakhia needlework, palazzo trousers, and sheer veil.",
    "price": 285000,
    "priceFormatted": "₹2,85,000",
    "color": "Artisan Tones",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Pants / Palazzo, Dupatta",
      "Fabric: Chanderi Silk, Mulberry Habotai & Organza",
      "Embroidery: Traditional Lucknow Chikankari & Mukaish",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "pastel-mint-chikankari-straight-suit",
    "name": "Pastel Mint Awadh Chikankari Straight Kurta Set",
    "category": "KURTA SETS",
    "gender": "WOMEN",
    "collection": "INAYA",
    "occasion": "SANGEET",
    "description": "Classic straight-cut kurta with scalloped hemline, tapered silk pants, and mukaish embellished dupatta.",
    "price": 240000,
    "priceFormatted": "₹2,40,000",
    "color": "Artisan Tones",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Pants / Palazzo, Dupatta",
      "Fabric: Chanderi Silk, Mulberry Habotai & Organza",
      "Embroidery: Traditional Lucknow Chikankari & Mukaish",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "blush-pink-resham-palazzo-suit",
    "name": "Blush Pink Resham Embroidered Palazzo Set",
    "category": "KURTA SETS",
    "gender": "WOMEN",
    "collection": "THE FLORAL EDIT 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Airy silk georgette tunic with delicate resham florals and matching flared palazzo trousers.",
    "price": 265000,
    "priceFormatted": "₹2,65,000",
    "color": "Artisan Tones",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Pants / Palazzo, Dupatta",
      "Fabric: Chanderi Silk, Mulberry Habotai & Organza",
      "Embroidery: Traditional Lucknow Chikankari & Mukaish",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "mustard-raw-silk-festive-kurta",
    "name": "Mustard Raw Silk Zardozi Yoke Kurta Set",
    "category": "KURTA SETS",
    "gender": "WOMEN",
    "collection": "FESTIVE 2025",
    "occasion": "HALDI AND MEHENDI",
    "description": "Deep mustard raw silk kurta with heavily encrusted antique marodi neckline, churidar, and banarasi dupatta.",
    "price": 295000,
    "priceFormatted": "₹2,95,000",
    "color": "Artisan Tones",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Pants / Palazzo, Dupatta",
      "Fabric: Chanderi Silk, Mulberry Habotai & Organza",
      "Embroidery: Traditional Lucknow Chikankari & Mukaish",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "midnight-blue-velvet-winter-kurta",
    "name": "Midnight Navy Velvet Embroidered Kurta Set",
    "category": "KURTA SETS",
    "gender": "WOMEN",
    "collection": "EVARA",
    "occasion": "RECEPTION",
    "description": "Sumptuous silk velvet straight kurta accented with real silver tilla needlework and organza dupatta.",
    "price": 340000,
    "priceFormatted": "₹3,40,000",
    "color": "Artisan Tones",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Pants / Palazzo, Dupatta",
      "Fabric: Chanderi Silk, Mulberry Habotai & Organza",
      "Embroidery: Traditional Lucknow Chikankari & Mukaish",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "peach-mirrorwork-chanderi-suit",
    "name": "Peach Blossom Mirrorwork Chanderi Kurta Set",
    "category": "KURTA SETS",
    "gender": "WOMEN",
    "collection": "SUMMER 2024 - WOMEN",
    "occasion": "SANGEET",
    "description": "Festive peach tunic detailed with hand-cut mirrors, soft mulmul lining, and cropped cigarette pants.",
    "price": 250000,
    "priceFormatted": "₹2,50,000",
    "color": "Artisan Tones",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Pants / Palazzo, Dupatta",
      "Fabric: Chanderi Silk, Mulberry Habotai & Organza",
      "Embroidery: Traditional Lucknow Chikankari & Mukaish",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "dusty-pink-fishbone-mijwan",
    "name": "Dusty Pink Fishbone Mijwan Pant Suit Set",
    "category": "FUSION WEAR",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "COCKTAIL",
    "description": "Dusty pink fishbone Mijwan blazer, pant with sequins & pearl highlights. Paired with pink fur drape.",
    "price": 560000,
    "priceFormatted": "₹5,60,000",
    "color": "Contemporary Couture",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Jacket / Bustier, Tailored Trousers / Drape",
      "Fabric: Raw Silk, Wool Crepe & Habotai Silk",
      "Tailoring: Savile Row inspired internal canvassing and shoulder pads",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-embroidered-tuxedo-suit",
    "name": "Ivory Raw Silk Embroidered Women's Tuxedo",
    "category": "FUSION WEAR",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "RECEPTION",
    "description": "Sharp peak-lapel tuxedo jacket with zardozi collar, cigarette trousers, and sheer lace bralette.",
    "price": 480000,
    "priceFormatted": "₹4,80,000",
    "color": "Contemporary Couture",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Jacket / Bustier, Tailored Trousers / Drape",
      "Fabric: Raw Silk, Wool Crepe & Habotai Silk",
      "Tailoring: Savile Row inspired internal canvassing and shoulder pads",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "emerald-caped-bustier-trouser-set",
    "name": "Emerald Sculptural Caped Bustier & Trouser Set",
    "category": "FUSION WEAR",
    "gender": "WOMEN",
    "collection": "LUXE PRET 2025",
    "occasion": "COCKTAIL",
    "description": "Sleek tailored trousers paired with a sweetheart boned bustier and floor-length asymmetric cape.",
    "price": 390000,
    "priceFormatted": "₹3,90,000",
    "color": "Contemporary Couture",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Jacket / Bustier, Tailored Trousers / Drape",
      "Fabric: Raw Silk, Wool Crepe & Habotai Silk",
      "Tailoring: Savile Row inspired internal canvassing and shoulder pads",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "metallic-silver-crop-blazer-skirt",
    "name": "Metallic Silver Cropped Blazer & Draped Skirt",
    "category": "FUSION WEAR",
    "gender": "WOMEN",
    "collection": "HT SHOW",
    "occasion": "COCKTAIL",
    "description": "High-fashion cropped dinner jacket with hand-stitched bugle beads and liquid silk draped skirt.",
    "price": 420000,
    "priceFormatted": "₹4,20,000",
    "color": "Contemporary Couture",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Jacket / Bustier, Tailored Trousers / Drape",
      "Fabric: Raw Silk, Wool Crepe & Habotai Silk",
      "Tailoring: Savile Row inspired internal canvassing and shoulder pads",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "black-velvet-corset-jumpsuit",
    "name": "Black Velvet Sculptural Corset Jumpsuit",
    "category": "FUSION WEAR",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "One-piece micro-velvet jumpsuit featuring sheer mesh corset waist and wide-leg trousers.",
    "price": 440000,
    "priceFormatted": "₹4,40,000",
    "color": "Contemporary Couture",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Jacket / Bustier, Tailored Trousers / Drape",
      "Fabric: Raw Silk, Wool Crepe & Habotai Silk",
      "Tailoring: Savile Row inspired internal canvassing and shoulder pads",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "rose-gold-trench-cape-dress",
    "name": "Rose Gold Hand-Woven Trench Cape Ensemble",
    "category": "FUSION WEAR",
    "gender": "WOMEN",
    "collection": "PARIS COUTURE 2026",
    "occasion": "RECEPTION",
    "description": "Avant-garde floor-length trench cape with traditional banarasi motifs reimagined into structured modern tailoring.",
    "price": 510000,
    "priceFormatted": "₹5,10,000",
    "color": "Contemporary Couture",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "CUSTOM SIZE"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Jacket / Bustier, Tailored Trousers / Drape",
      "Fabric: Raw Silk, Wool Crepe & Habotai Silk",
      "Tailoring: Savile Row inspired internal canvassing and shoulder pads",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "regal-rose-gold-sherwani",
    "name": "Regal Rose Gold Handcrafted Groom Sherwani Set",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "BRIDAL COUTURE 2023-24 - MEN",
    "occasion": "GROOM",
    "description": "An imperial groom ensemble hand-woven in pure tussar silk, encrusted with real gold bullion zardozi on mandarin collar and cuffs, paired with chanderi safa and churidar.",
    "price": 480000,
    "priceFormatted": "₹4,80,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-pearl-chikankari-groom-sherwani",
    "name": "Ivory Raw Silk Chikankari Groom Sherwani",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "MIJWAN 2026",
    "occasion": "GROOM",
    "description": "Tone-on-tone Awadh Chikankari embroidery across 10 panels, punctuated with micro-pearls and mother-of-pearl buttons.",
    "price": 420000,
    "priceFormatted": "₹4,20,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "obsidian-black-velvet-sherwani",
    "name": "Obsidian Black Velvet Embroidered Sherwani",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "RECEPTION",
    "description": "Deep black Italian micro-velvet sherwani laden with matte black dabka needlework and silver metallic piping.",
    "price": 395000,
    "priceFormatted": "₹3,95,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "saffron-gold-royal-mandap-sherwani",
    "name": "Saffron Gold Royal Mandap Ceremony Sherwani",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "THE INDIA STORY MEN - DUBAI 2026",
    "occasion": "GROOM",
    "description": "Ceremonial groom attire in rich amber saffron silk with heritage jaal embroidery and coordinating stole.",
    "price": 465000,
    "priceFormatted": "₹4,65,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "champagne-chintz-motifs-sherwani",
    "name": "Champagne Silk Sherwani with Chintz Zardozi",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "INAYA SUMMER MEN 2026",
    "occasion": "GROOM",
    "description": "Lightweight summer wedding sherwani tailored in pure mulberry silk with pastel resham vines.",
    "price": 380000,
    "priceFormatted": "₹3,80,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "emerald-regal-nizam-sherwani",
    "name": "Emerald Green Imperial Nizam Court Sherwani",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "WORLD COLLECTION: DUBAI MEN",
    "occasion": "GROOM",
    "description": "Magnificent bottle-green silk brocade sherwani with jewelled button set and antique kalgi loop.",
    "price": 510000,
    "priceFormatted": "₹5,10,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "powder-blue-summer-wedding-sherwani",
    "name": "Powder Blue Silk Sherwani with Silver Taban",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "SUMMER '24",
    "occasion": "SANGEET",
    "description": "Airy summer wedding sherwani tailored in raw silk with subtle silver thread accents and silk stole.",
    "price": 360000,
    "priceFormatted": "₹3,60,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "crimson-maroon-velvet-sherwani",
    "name": "Crimson Maroon Heritage Velvet Sherwani",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "KHAAB BRIDAL COUTURE' 22",
    "occasion": "GROOM",
    "description": "Classic royal groom sherwani in deep wine velvet with heavy bullion hand embroidery and embroidered belt.",
    "price": 440000,
    "priceFormatted": "₹4,40,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "gold-tissue-banarasi-groom-sherwani",
    "name": "Imperial Gold Tissue Banarasi Groom Sherwani",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "NOORANIYAT '21",
    "occasion": "GROOM",
    "description": "Woven in Varanasi using real metallic zari threads, finished with jewelled emerald buttons.",
    "price": 490000,
    "priceFormatted": "₹4,90,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "pearl-grey-geometric-chikankari-sherwani",
    "name": "Pearl Grey Geometric Fishbone Sherwani Set",
    "category": "SHERWANI SETS",
    "gender": "MEN",
    "collection": "MIJWAN 2026",
    "occasion": "RECEPTION",
    "description": "Modern architectural interpretation of Awadh Chikankari with sharp diagonal panelling and churidar.",
    "price": 375000,
    "priceFormatted": "₹3,75,000",
    "color": "Imperial Gold & Silk",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 6-8 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "obsidian-velvet-embroidered-bandhgala",
    "name": "Obsidian Black Velvet Royal Bandhgala Set",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "RECEPTION",
    "description": "Tailored in structured Italian micro-velvet with hand-embroidered crest motif on the chest, monogrammed buttons, and tailored trousers.",
    "price": 290000,
    "priceFormatted": "₹2,90,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "midnight-navy-raw-silk-bandhgala",
    "name": "Midnight Navy Raw Silk Imperial Bandhgala",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "WORLD COLLECTION: DUBAI MEN",
    "occasion": "COCKTAIL",
    "description": "Classic Jodhpuri silhouette with structured shoulders, concealed button placket, and hand-embroidered collar.",
    "price": 245000,
    "priceFormatted": "₹2,45,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-tussar-chikankari-bandhgala",
    "name": "Ivory Tussar Silk Chikankari Bandhgala",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "MIJWAN 2026",
    "occasion": "RECEPTION",
    "description": "Sophisticated formal suit in textured tussar silk with subtle phanda stitch highlights on cuffs and pocket.",
    "price": 280000,
    "priceFormatted": "₹2,80,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "forest-emerald-velvet-bandhgala",
    "name": "Forest Emerald Velvet Cocktail Bandhgala",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Opulent emerald dinner suit with self-textured tonal embroidery and antique brass crest buttons.",
    "price": 310000,
    "priceFormatted": "₹3,10,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "charcoal-wool-bespoke-bandhgala",
    "name": "Charcoal Slate Super 150s Wool Bandhgala",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "KHAAB MENSWEAR",
    "occasion": "RECEPTION",
    "description": "Fine English wool tailored with an imperial mandarin collar and hand-stitched pick lapels.",
    "price": 260000,
    "priceFormatted": "₹2,60,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "maroon-silk-zardozi-bandhgala",
    "name": "Maroon Silk & Antique Zardozi Bandhgala",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "EVARA",
    "occasion": "SANGEET",
    "description": "Rich wine-toned formal bandhgala with subtle shoulder bullion embroidery, paired with slim trousers.",
    "price": 295000,
    "priceFormatted": "₹2,95,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "powder-blue-summer-bandhgala",
    "name": "Powder Blue Silk Linen Summer Bandhgala",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "INAYA SUMMER MEN 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Unstructured, breathable silk-linen jacket designed for warm-weather destination weddings.",
    "price": 220000,
    "priceFormatted": "₹2,20,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "black-sequin-lapel-tuxedo-bandhgala",
    "name": "Black Sequin Collar High-Fashion Bandhgala",
    "category": "BANDHGALA SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Red-carpet statement silhouette with shimmering micro-sequin collar and pocket square detailing.",
    "price": 330000,
    "priceFormatted": "₹3,30,000",
    "color": "Imperial Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 4-6 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "kashmiri-tilla-resham-jacket",
    "name": "Kashmiri Tilla & Resham Tuxedo Dinner Jacket",
    "category": "BLAZER & JACKET SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Structured dinner blazer tailored in pure wool with hand-stitched Kashmiri tilla threadwork across shoulders and peak lapels.",
    "price": 245000,
    "priceFormatted": "₹2,45,000",
    "color": "Black Tie Luxury",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Tuxedo Jacket, Formal Trousers (Optional)",
      "Fabric: Pure Wool, Silk Satin & Velvet",
      "Lining: Custom jacquard crest lining with interior cigar pocket",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "velvet-shawl-collar-tuxedo-blazer",
    "name": "Midnight Navy Velvet Shawl Lapel Tuxedo Blazer",
    "category": "BLAZER & JACKET SETS",
    "gender": "MEN",
    "collection": "THE INDIA STORY MEN - DUBAI 2026",
    "occasion": "RECEPTION",
    "description": "Classic black-tie blazer with satin-faced shawl collar and single cloth-covered button closure.",
    "price": 220000,
    "priceFormatted": "₹2,20,000",
    "color": "Black Tie Luxury",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Tuxedo Jacket, Formal Trousers (Optional)",
      "Fabric: Pure Wool, Silk Satin & Velvet",
      "Lining: Custom jacquard crest lining with interior cigar pocket",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-raw-silk-embroidered-blazer",
    "name": "Ivory Raw Silk Floral Embroidered Dinner Jacket",
    "category": "BLAZER & JACKET SETS",
    "gender": "MEN",
    "collection": "MIJWAN 2026",
    "occasion": "RECEPTION",
    "description": "Sophisticated dinner jacket with tonal chikankari motifs, paired with black satin trousers.",
    "price": 260000,
    "priceFormatted": "₹2,60,000",
    "color": "Black Tie Luxury",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Tuxedo Jacket, Formal Trousers (Optional)",
      "Fabric: Pure Wool, Silk Satin & Velvet",
      "Lining: Custom jacquard crest lining with interior cigar pocket",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "emerald-green-brocade-blazer",
    "name": "Emerald Green Woven Brocade Cocktail Blazer",
    "category": "BLAZER & JACKET SETS",
    "gender": "MEN",
    "collection": "WORLD COLLECTION: DUBAI MEN",
    "occasion": "COCKTAIL",
    "description": "Lustrous jacquard woven dinner jacket with black grosgrain lapels and double vents.",
    "price": 235000,
    "priceFormatted": "₹2,35,000",
    "color": "Black Tie Luxury",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Tuxedo Jacket, Formal Trousers (Optional)",
      "Fabric: Pure Wool, Silk Satin & Velvet",
      "Lining: Custom jacquard crest lining with interior cigar pocket",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "black-crystal-constellation-blazer",
    "name": "Black Onyx Crystal Constellation Tuxedo",
    "category": "BLAZER & JACKET SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Statement red-carpet jacket adorned with radiating black and smoke crystals across one shoulder.",
    "price": 290000,
    "priceFormatted": "₹2,90,000",
    "color": "Black Tie Luxury",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Tuxedo Jacket, Formal Trousers (Optional)",
      "Fabric: Pure Wool, Silk Satin & Velvet",
      "Lining: Custom jacquard crest lining with interior cigar pocket",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "rose-gold-metallic-tuxedo-jacket",
    "name": "Rose Gold Liquid Metallic Tuxedo Jacket",
    "category": "BLAZER & JACKET SETS",
    "gender": "MEN",
    "collection": "SUMMER '24",
    "occasion": "SANGEET",
    "description": "Shimmering silk-blend jacket that drapes effortlessly, designed for modern sangeet evenings.",
    "price": 275000,
    "priceFormatted": "₹2,75,000",
    "color": "Black Tie Luxury",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Bespoke Tailoring: 3-5 weeks",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Tuxedo Jacket, Formal Trousers (Optional)",
      "Fabric: Pure Wool, Silk Satin & Velvet",
      "Lining: Custom jacquard crest lining with interior cigar pocket",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-chikankari-silk-bundi-set",
    "name": "Ivory Chikankari Embroidered Bundi Vest Set",
    "category": "BUNDI SETS",
    "gender": "MEN",
    "collection": "MIJWAN 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Hand-embroidered Awadh Chikankari sleeveless bundi vest paired with pure munga silk kurta and churidar.",
    "price": 165000,
    "priceFormatted": "₹1,65,000",
    "color": "Festive Shades",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 3-4 weeks",
    "images": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Embroidered Bundi Vest, Pure Silk Kurta, Churidar Trousers",
      "Fabric: Raw Silk, Chanderi & Micro-Velvet",
      "Pockets: Functional jetted pockets with concealed ticket pouch",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "mustard-yellow-festive-bundi-set",
    "name": "Mustard Yellow Silk Gota Bundi Set",
    "category": "BUNDI SETS",
    "gender": "MEN",
    "collection": "FESTIVE 2025",
    "occasion": "HALDI AND MEHENDI",
    "description": "Traditional festive waistcoat in raw silk featuring geometric marodi border detailing and churidar.",
    "price": 145000,
    "priceFormatted": "₹1,45,000",
    "color": "Festive Shades",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 3-4 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Embroidered Bundi Vest, Pure Silk Kurta, Churidar Trousers",
      "Fabric: Raw Silk, Chanderi & Micro-Velvet",
      "Pockets: Functional jetted pockets with concealed ticket pouch",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "powder-blue-chanderi-bundi-set",
    "name": "Powder Blue Chanderi Floral Printed Bundi Set",
    "category": "BUNDI SETS",
    "gender": "MEN",
    "collection": "INAYA SUMMER MEN 2026",
    "occasion": "SANGEET",
    "description": "Soft pastel bundi jacket with delicate foil printing and pearl button closures.",
    "price": 155000,
    "priceFormatted": "₹1,55,000",
    "color": "Festive Shades",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 3-4 weeks",
    "images": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Embroidered Bundi Vest, Pure Silk Kurta, Churidar Trousers",
      "Fabric: Raw Silk, Chanderi & Micro-Velvet",
      "Pockets: Functional jetted pockets with concealed ticket pouch",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "mint-green-mirrorwork-bundi-suit",
    "name": "Mint Green Handcrafted Mirrorwork Bundi Set",
    "category": "BUNDI SETS",
    "gender": "MEN",
    "collection": "SUMMER '24",
    "occasion": "HALDI AND MEHENDI",
    "description": "Festive jacket studded with convex mirrors and thread embroidery, paired with a relaxed kurta.",
    "price": 175000,
    "priceFormatted": "₹1,75,000",
    "color": "Festive Shades",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 3-4 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Embroidered Bundi Vest, Pure Silk Kurta, Churidar Trousers",
      "Fabric: Raw Silk, Chanderi & Micro-Velvet",
      "Pockets: Functional jetted pockets with concealed ticket pouch",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "midnight-navy-velvet-bundi-set",
    "name": "Midnight Navy Velvet Embroidered Bundi Set",
    "category": "BUNDI SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "RECEPTION",
    "description": "Heavy micro-velvet bundi with silver bullion zardozi work and raw silk kurta trousers.",
    "price": 195000,
    "priceFormatted": "₹1,95,000",
    "color": "Festive Shades",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 3-4 weeks",
    "images": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Embroidered Bundi Vest, Pure Silk Kurta, Churidar Trousers",
      "Fabric: Raw Silk, Chanderi & Micro-Velvet",
      "Pockets: Functional jetted pockets with concealed ticket pouch",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "peach-organza-layered-bundi-set",
    "name": "Peach Blossom Asymmetric Draped Bundi Set",
    "category": "BUNDI SETS",
    "gender": "MEN",
    "collection": "THE FLORAL EDIT 2026",
    "occasion": "SANGEET",
    "description": "Modern asymmetric overlapping bundi jacket styled with a pleated hem kurta.",
    "price": 185000,
    "priceFormatted": "₹1,85,000",
    "color": "Festive Shades",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 3-4 weeks",
    "images": [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Embroidered Bundi Vest, Pure Silk Kurta, Churidar Trousers",
      "Fabric: Raw Silk, Chanderi & Micro-Velvet",
      "Pockets: Functional jetted pockets with concealed ticket pouch",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-silk-chanderi-kurta-set-men",
    "name": "Ivory Silk Chanderi Classic Kurta Set",
    "category": "KURTA SETS",
    "gender": "MEN",
    "collection": "MIJWAN 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Airy chanderi silk kurta with delicate shadow-work chikankari on placket and cuffs, with churidar.",
    "price": 125000,
    "priceFormatted": "₹1,25,000",
    "color": "Subtle Pastels & Neutrals",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 2-3 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Churidar or Tapered Trousers",
      "Fabric: Pure Silk Chanderi, Raw Silk & European Linen",
      "Stitching: French seams with hand-rolled hems",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "blush-pink-asymmetric-cowl-kurta",
    "name": "Blush Pink Asymmetric Cowl Draped Kurta",
    "category": "KURTA SETS",
    "gender": "MEN",
    "collection": "INAYA SUMMER MEN 2026",
    "occasion": "SANGEET",
    "description": "Contemporary fluid drape kurta with side cowl pleats and mother-of-pearl buttons.",
    "price": 140000,
    "priceFormatted": "₹1,40,000",
    "color": "Subtle Pastels & Neutrals",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 2-3 weeks",
    "images": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Churidar or Tapered Trousers",
      "Fabric: Pure Silk Chanderi, Raw Silk & European Linen",
      "Stitching: French seams with hand-rolled hems",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "saffron-gold-festive-kurta-set",
    "name": "Saffron Gold Festive Raw Silk Kurta Set",
    "category": "KURTA SETS",
    "gender": "MEN",
    "collection": "FESTIVE 2025",
    "occasion": "HALDI AND MEHENDI",
    "description": "Vibrant raw silk tunic with delicate metallic zari topstitching, paired with relaxed trousers.",
    "price": 135000,
    "priceFormatted": "₹1,35,000",
    "color": "Subtle Pastels & Neutrals",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 2-3 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Churidar or Tapered Trousers",
      "Fabric: Pure Silk Chanderi, Raw Silk & European Linen",
      "Stitching: French seams with hand-rolled hems",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "midnight-black-pathani-kurta-set",
    "name": "Midnight Black Royal Pathani Kurta Set",
    "category": "KURTA SETS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Structured pathani suit with shoulder epaulets, flap chest pockets, and salwar trousers.",
    "price": 155000,
    "priceFormatted": "₹1,55,000",
    "color": "Subtle Pastels & Neutrals",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 2-3 weeks",
    "images": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Churidar or Tapered Trousers",
      "Fabric: Pure Silk Chanderi, Raw Silk & European Linen",
      "Stitching: French seams with hand-rolled hems",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "sage-green-embroidered-kurta-set",
    "name": "Sage Green Resham Embroidered Kurta Set",
    "category": "KURTA SETS",
    "gender": "MEN",
    "collection": "SUMMER '24",
    "occasion": "HALDI AND MEHENDI",
    "description": "Refreshing pastel sage kurta with tone-on-tone Lucknowi threadwork and cotton silk pants.",
    "price": 130000,
    "priceFormatted": "₹1,30,000",
    "color": "Subtle Pastels & Neutrals",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 2-3 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Churidar or Tapered Trousers",
      "Fabric: Pure Silk Chanderi, Raw Silk & European Linen",
      "Stitching: French seams with hand-rolled hems",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "white-linen-chikankari-summer-kurta",
    "name": "Pure White French Linen Chikankari Kurta",
    "category": "KURTA SETS",
    "gender": "MEN",
    "collection": "DILNASHI READY TO WEAR",
    "occasion": "HALDI AND MEHENDI",
    "description": "Breathable pure European linen kurta with hand-stitched floral jaal on the yoke.",
    "price": 110000,
    "priceFormatted": "₹1,10,000",
    "color": "Subtle Pastels & Neutrals",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46",
      "CUSTOM MEASURE"
    ],
    "leadTime": "Made to order: 2-3 weeks",
    "images": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Kurta, Churidar or Tapered Trousers",
      "Fabric: Pure Silk Chanderi, Raw Silk & European Linen",
      "Stitching: French seams with hand-rolled hems",
      "Care: Dry Clean Only"
    ],
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "silk-tuxedo-pleated-shirt",
    "name": "Silk Habotai Pleated Bib Tuxedo Shirt",
    "category": "SHIRTS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Formal black-tie shirt in pure mulberry silk with hand-folded pleated front bib and French cuffs.",
    "price": 65000,
    "priceFormatted": "₹65,000",
    "color": "Couture Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "leadTime": "Immediate Dispatch / 1-2 weeks",
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Luxury Shirt",
      "Fabric: 100% Pure Mulberry Silk / European Flax Linen",
      "Buttons: Genuine Australian Mother-of-Pearl with shank stitching",
      "Care: Gentle Handwash or Dry Clean"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "ivory-embroidered-mandarin-shirt",
    "name": "Ivory Chikankari Embroidered Mandarin Shirt",
    "category": "SHIRTS",
    "gender": "MEN",
    "collection": "MIJWAN 2026",
    "occasion": "RECEPTION",
    "description": "Contemporary luxury band-collar shirt with delicate tone-on-tone embroidery on the placket.",
    "price": 72000,
    "priceFormatted": "₹72,000",
    "color": "Couture Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "leadTime": "Immediate Dispatch / 1-2 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Luxury Shirt",
      "Fabric: 100% Pure Mulberry Silk / European Flax Linen",
      "Buttons: Genuine Australian Mother-of-Pearl with shank stitching",
      "Care: Gentle Handwash or Dry Clean"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "black-silk-satin-evening-shirt",
    "name": "Onyx Black Silk Satin Cocktail Evening Shirt",
    "category": "SHIRTS",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "Lustrous heavy silk satin shirt with concealed button fly and structured Italian collar.",
    "price": 58000,
    "priceFormatted": "₹58,000",
    "color": "Couture Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "leadTime": "Immediate Dispatch / 1-2 weeks",
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Luxury Shirt",
      "Fabric: 100% Pure Mulberry Silk / European Flax Linen",
      "Buttons: Genuine Australian Mother-of-Pearl with shank stitching",
      "Care: Gentle Handwash or Dry Clean"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "powder-blue-linen-resort-shirt",
    "name": "Powder Blue European Linen Resort Shirt",
    "category": "SHIRTS",
    "gender": "MEN",
    "collection": "INAYA SUMMER MEN 2026",
    "occasion": "HALDI AND MEHENDI",
    "description": "Casual luxury spread-collar shirt woven from pure Normandy flax linen with shell buttons.",
    "price": 48000,
    "priceFormatted": "₹48,000",
    "color": "Couture Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "leadTime": "Immediate Dispatch / 1-2 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Luxury Shirt",
      "Fabric: 100% Pure Mulberry Silk / European Flax Linen",
      "Buttons: Genuine Australian Mother-of-Pearl with shank stitching",
      "Care: Gentle Handwash or Dry Clean"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "blush-pink-silk-festive-shirt",
    "name": "Blush Pink Silk Festive Dinner Shirt",
    "category": "SHIRTS",
    "gender": "MEN",
    "collection": "SUMMER '24",
    "occasion": "SANGEET",
    "description": "Sophisticated silk shirt that layers effortlessly beneath blazers and bundi waistcoats.",
    "price": 62000,
    "priceFormatted": "₹62,000",
    "color": "Couture Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "leadTime": "Immediate Dispatch / 1-2 weeks",
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Luxury Shirt",
      "Fabric: 100% Pure Mulberry Silk / European Flax Linen",
      "Buttons: Genuine Australian Mother-of-Pearl with shank stitching",
      "Care: Gentle Handwash or Dry Clean"
    ],
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "champagne-jacquard-monogram-shirt",
    "name": "Champagne Jacquard Woven Monogram Shirt",
    "category": "SHIRTS",
    "gender": "MEN",
    "collection": "WORLD COLLECTION: DUBAI MEN",
    "occasion": "RECEPTION",
    "description": "Woven crest monogram fabric with pure mother-of-pearl buttons and engraved collar stays.",
    "price": 78000,
    "priceFormatted": "₹78,000",
    "color": "Couture Tailoring",
    "sizes": [
      "38",
      "40",
      "42",
      "44",
      "46"
    ],
    "leadTime": "Immediate Dispatch / 1-2 weeks",
    "images": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
    ],
    "details": [
      "Components: Handcrafted Luxury Shirt",
      "Fabric: 100% Pure Mulberry Silk / European Flax Linen",
      "Buttons: Genuine Australian Mother-of-Pearl with shank stitching",
      "Care: Gentle Handwash or Dry Clean"
    ],
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85"
  },
  {
    "id": "royal-uncut-diamond-polki-choker",
    "name": "The Noorani Polki & Emerald Choker",
    "category": "CHOKER",
    "subCategory": "CHOKER",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "BRIDAL",
    "description": "Multi-layered uncut Syndicate Polki diamonds set in 22K hallmarked gold with certified carved Zambian emerald drops and hand-enameled reverse meenakari.",
    "price": 1850000,
    "priceFormatted": "₹1,850,000",
    "color": "Imperial Gold & Emerald",
    "colorHex": "#c5a059",
    "sizes": [
      "ADJUSTABLE ROYAL DORI"
    ],
    "leadTime": "Atelier Made to Measure: 6-8 weeks",
    "goldPurity": "22K BIS Hallmarked Royal Gold",
    "gemstones": "Certified Uncut Syndicate Polki (72.4 Cts) & Zambian Emeralds (115 Cts)",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Setting: Traditional Kundan Jadau with 24K pure gold foil encapsulation",
      "Reverse: Hand-painted Gulabi Meenakari florals from Jaipur master enamellers",
      "Certification: IGI Diamond Authentication & BIS Hallmark Guarantee",
      "Packaging: Bespoke velvet archival jewellery trunk with monogrammed lock"
    ]
  },
  {
    "id": "solitaire-diamond-cascade-necklace",
    "name": "Imperial Cascading Diamond Ranee Haar",
    "category": "NECKLACE",
    "subCategory": "NECKLACE",
    "gender": "WOMEN",
    "collection": "PARIS COUTURE 2026",
    "occasion": "RECEPTION",
    "description": "An architectural five-strand rani haar studded with marquise, pear, and brilliant-cut certified diamonds accented by untreated natural South Sea baroque pearls.",
    "price": 2400000,
    "priceFormatted": "₹2,400,000",
    "color": "Platinum White & Rose Gold",
    "colorHex": "#e5e4e2",
    "sizes": [
      "HERITAGE LENGTH (28 INCHES)"
    ],
    "leadTime": "Bespoke Creation: 8-10 weeks",
    "goldPurity": "18K White & Rose Gold (145 gms)",
    "gemstones": "VVS-VS Clarity Brilliant Cut Diamonds (48.6 Cts) & South Sea Pearls",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Strand Count: 5 articulated graduated tiers for ergonomic clavicle drape",
      "Clasp: Concealed diamond-set push button safety clasp with safety chain",
      "Certification: GIA Certified Solitaires with Laser Inscription Registry",
      "Accompanied by: Dilnashi Joaillerie Archival Passport"
    ]
  },
  {
    "id": "kundan-polki-chandbali-earrings",
    "name": "Royal Heritage Meenakari Chandbalis",
    "category": "EARRINGS",
    "subCategory": "EARRINGS",
    "gender": "WOMEN",
    "collection": "MIJWAN 2026",
    "occasion": "SANGEET",
    "description": "Crescent-moon shaped royal chandbalis articulated with uncut polki clusters, cabochon Burmese rubies, and cascading seed pearl seed tassels.",
    "price": 620000,
    "priceFormatted": "₹620,000",
    "color": "Mughal Red & Antique Gold",
    "colorHex": "#9b111e",
    "sizes": [
      "STATEMENT PAIR (3.5 INCHES)"
    ],
    "leadTime": "In Stock: Immediate Insured Dispatch",
    "goldPurity": "22K Yellow Jadau Gold",
    "gemstones": "Natural Uncut Diamonds (18.2 Cts) & Burmese Pigeon Blood Rubies (24 Cts)",
    "images": [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Weight: Ergonomically weighted with detachable silk-cord ear supports",
      "Reverse: Red and green Banarasi meenakari enamel portraiture",
      "Closure: Bombay screw with clip-on security hinge"
    ]
  },
  {
    "id": "solitaire-colombian-emerald-ring",
    "name": "The Majestic Colombian Solitaire Cocktail Ring",
    "category": "RINGS",
    "subCategory": "RINGS",
    "gender": "WOMEN",
    "collection": "BECOMING",
    "occasion": "COCKTAIL",
    "description": "A monumental 12.4-carat untreated Colombian emerald cushion cabochon framed by stepped tapered diamond baguettes in hallmarked platinum.",
    "price": 950000,
    "priceFormatted": "₹950,000",
    "color": "Vivid Emerald & Platinum",
    "colorHex": "#004731",
    "sizes": [
      "CUSTOM RING SIZING (US 5-9)"
    ],
    "leadTime": "Custom sized in 7 days",
    "goldPurity": "950 Platinum & 18K Yellow Gold prongs",
    "gemstones": "12.4 Ct Untreated Colombian Emerald (Minor Oil, Muzo Mine Origin)",
    "images": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Origin Report: SSEF / Gübelin Gem Lab Certified Gemstone",
      "Side Stones: 1.8 Cts E-F Color VVS Diamond Baguettes",
      "Engraving: Complimentary bespoke inside-shank laser inscription"
    ]
  },
  {
    "id": "jadau-polki-mathapatti-mangtikka",
    "name": "Maharani Jadau Polki Maangtikka & Mathapatti",
    "category": "MANGTIKKA",
    "subCategory": "MANGTIKKA",
    "gender": "WOMEN",
    "collection": "BRIDAL COUTURE 2026",
    "occasion": "BRIDAL",
    "description": "An imperial bridal crown maangtikka with dual-chain mathapatti, encrusted with flat-cut polki florets and carved emerald beads.",
    "price": 780000,
    "priceFormatted": "₹780,000",
    "color": "Bridal Ivory Gold",
    "colorHex": "#c5a059",
    "sizes": [
      "ADJUSTABLE HAIR PINS & COMB"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "goldPurity": "22K BIS Hallmarked Yellow Gold",
    "gemstones": "Polki Uncut Diamonds (28 Cts) & Natural Pearl Clusters",
    "images": [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Crafting: Handcrafted by hereditary Bikaner royal court jewellers",
      "Design: Modular mathapatti chains can be detached to wear as standalone tikka",
      "Purity: Certified 91.6% Pure Gold with Laser Hallmark"
    ]
  },
  {
    "id": "nizam-groom-emerald-kalgi",
    "name": "The Nizam Royal Groom Emerald & Diamond Kalgi",
    "category": "MEN'S JEWELLERY",
    "subCategory": "MEN'S JEWELLERY",
    "gender": "MEN",
    "collection": "GROOM COUTURE 2026",
    "occasion": "GROOM",
    "description": "A ceremonial safa turban crest (Kalgi) set with an antique carved emerald medallion, uncut diamond plumage, and a genuine white egret plume holder.",
    "price": 1150000,
    "priceFormatted": "₹1,150,000",
    "color": "Imperial Emerald & Gold",
    "colorHex": "#004731",
    "sizes": [
      "UNIVERSAL SAFA BROOCH CLIP"
    ],
    "leadTime": "Made to order: 3-5 weeks",
    "goldPurity": "22K Yellow Jadau Gold (58 gms)",
    "gemstones": "Carved Zambian Emerald (42 Cts) & Polki Diamonds (16 Cts)",
    "images": [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Function: Dual pin-and-clip mechanism firmly secures onto silk or banarasi safa",
      "Reverse: Solid gold engraving with family crest customization option",
      "Accompaniment: Packaged in velvet presentation box with plume protection"
    ]
  },
  {
    "id": "groom-emerald-mala-kantha",
    "name": "Seven-Strand Royal Emerald & Basra Pearl Kantha",
    "category": "MEN'S JEWELLERY",
    "subCategory": "MEN'S JEWELLERY",
    "gender": "MEN",
    "collection": "GROOM COUTURE 2026",
    "occasion": "GROOM",
    "description": "A majestic groom's imperial kantha necklace composed of seven graduated strands of tumbled emerald beads interspersed with natural Basra pearls and gold spacers.",
    "price": 1450000,
    "priceFormatted": "₹1,450,000",
    "color": "Emerald Green & Pearl",
    "colorHex": "#046307",
    "sizes": [
      "GROOM REGAL DRAPE (32 INCHES)"
    ],
    "leadTime": "Made to order: 4-6 weeks",
    "goldPurity": "22K Yellow Gold Spacers & Hallmarked Clasp",
    "gemstones": "Natural Tumbled Emeralds (480 Cts) & Natural Basra Seed Pearls",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Threading: Hand-strung on pure silk cord with gold bullion zari finish",
      "Clasp: Imperial peacock motif with double safety lock in 22K gold",
      "Heirloom Note: Built to be preserved as a multi-generational royal family jewel"
    ]
  },
  {
    "id": "antique-jadau-ruby-kada-bangles",
    "name": "The Gaja Singha Antique Jadau Ruby Kada (Pair)",
    "category": "BRACELETS",
    "subCategory": "BRACELETS",
    "gender": "WOMEN",
    "collection": "NOORANIYAT",
    "occasion": "BRIDAL",
    "description": "A pair of heavy openable kadas sculpted with imperial lion-head finials, pavé-set with uncut polki diamonds and cabochon rubies in thick 22K gold.",
    "price": 1350000,
    "priceFormatted": "₹1,350,000",
    "color": "Antique Gold & Ruby",
    "colorHex": "#d4af37",
    "sizes": [
      "2.4",
      "2.6",
      "2.8",
      "CUSTOM SIZE"
    ],
    "leadTime": "Atelier Made to Measure: 4 weeks",
    "goldPurity": "22K BIS Hallmarked Solid Gold (180 gms pair)",
    "gemstones": "Natural Uncut Diamonds (22 Cts) & Burmese Rubies (35 Cts)",
    "images": [
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Hinge: Screw-in threaded gold pin for completely secure heirloom fit",
      "Workmanship: Repoussé chasing and hand-carved lion terminals",
      "Hallmarking: 916 Stamped by the Bureau of Indian Standards"
    ]
  },
  {
    "id": "solitaire-rose-cut-diamond-bracelet",
    "name": "The Versailles Rose-Cut Diamond Tennis Bracelet",
    "category": "BRACELETS",
    "subCategory": "BRACELETS",
    "gender": "UNISEX",
    "collection": "PARIS COUTURE 2026",
    "occasion": "COCKTAIL",
    "description": "A seamless continuous line of antique rose-cut diamonds mounted in hand-milgrained platinum bezels with high articulation.",
    "price": 1100000,
    "priceFormatted": "₹1,100,000",
    "color": "Platinum White",
    "colorHex": "#e5e4e2",
    "sizes": [
      "7 INCHES",
      "7.5 INCHES",
      "8 INCHES"
    ],
    "leadTime": "In Stock: Immediate Insured Dispatch",
    "goldPurity": "950 Solid Platinum (42 gms)",
    "gemstones": "Natural Rose-Cut Diamonds (24.8 Cts, DEF Color, VVS-VS Clarity)",
    "images": [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Artisan Linkage: Individually hinged bezels prevent twisting on the wrist",
      "Clasp: Invisible box clasp with twin figure-eight safety catches",
      "Certificate: Full dossier with individual diamond mapping"
    ]
  },
  {
    "id": "jaipur-hasli-polki-collar",
    "name": "The Rajkumari Rigid Gold Hasli Collar",
    "category": "CHOKER",
    "subCategory": "CHOKER",
    "gender": "WOMEN",
    "collection": "THE WORLD COLLECTION",
    "occasion": "BRIDAL",
    "description": "A rigid, sculptural 22K gold hasli collar encrusted with flat syndicate polki diamonds in closed-foil settings and descending pearl fringes.",
    "price": 1650000,
    "priceFormatted": "₹1,650,000",
    "color": "Imperial Gold",
    "colorHex": "#c5a059",
    "sizes": [
      "STANDARD ATELIER COLLAR"
    ],
    "leadTime": "Made to order: 5-7 weeks",
    "goldPurity": "22K BIS Hallmarked Solid Gold",
    "gemstones": "Syndicate Polki Diamonds (54 Cts) & Natural Basra Pearl Drops",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Structure: Ergonomically sculpted to sit flush against the collarbone",
      "Hanging Beads: Hand-tied seed pearls with gold wire knotting",
      "Care: Includes specialized anti-tarnish microfibre chamois"
    ]
  },
  {
    "id": "emerald-tassel-lariat-necklace",
    "name": "The Place Vendôme Emerald Tassel Lariat",
    "category": "NECKLACE",
    "subCategory": "NECKLACE",
    "gender": "WOMEN",
    "collection": "PARIS COUTURE 2026",
    "occasion": "COCKTAIL",
    "description": "Modernist transformable lariat necklace featuring twin tassels of emerald micro-beads flowing from diamond-paved geometric octagons.",
    "price": 1950000,
    "priceFormatted": "₹1,950,000",
    "color": "Emerald & Diamond White",
    "colorHex": "#004731",
    "sizes": [
      "ADJUSTABLE LARIAT SLIDER"
    ],
    "leadTime": "Made to order: 6 weeks",
    "goldPurity": "18K White Gold (68 gms)",
    "gemstones": "Colombian Emerald Beads (120 Cts) & Brilliant Cut Diamonds (32 Cts)",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Transformability: Can be worn as a choker, back necklace, or wrapped bracelet",
      "Slider Mechanism: Velvet-smooth tension slider lined in silicone",
      "Hallmarking: Laser inscribed with unique atelier serial number"
    ]
  },
  {
    "id": "royal-men-emerald-brooch",
    "name": "The Imperial Peacock Sapphire & Emerald Lapel Brooch",
    "category": "MEN'S JEWELLERY",
    "subCategory": "MEN'S JEWELLERY",
    "gender": "MEN",
    "collection": "BECOMING",
    "occasion": "RECEPTION",
    "description": "An heirloom lapel brooch for bandhgalas and tuxedos, sculpted as a dancing peacock encrusted with Kashmir sapphires, Zambian emeralds, and diamonds.",
    "price": 540000,
    "priceFormatted": "₹540,000",
    "color": "Royal Blue & Emerald",
    "colorHex": "#0f52ba",
    "sizes": [
      "STATEMENT LAPEL PIN (2.8 INCHES)"
    ],
    "leadTime": "In Stock: Immediate Dispatch",
    "goldPurity": "18K Dual White & Yellow Gold",
    "gemstones": "Kashmir Blue Sapphires (9.5 Cts), Emeralds (8 Cts), Diamonds (6 Cts)",
    "images": [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=85"
    ],
    "image": "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
    "details": [
      "Attachment: Heavy-duty threaded safety pin prevents fabric sagging",
      "Backing: Polished mirror gold backplate with Dilnashi hallmark",
      "Use: Designed specifically for heavyweight velvet and silk bandhgalas"
    ]
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "PARIS COUTURE WEEK 2026",
    subtitle: "AUTUMN / WINTER 2026 ARCHIVE",
    description: "An architectural symphony of Awadh Chikankari and modern Parisian drapery.",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    ctaPrimary: "EXPLORE THE RUNWAY",
    ctaSecondary: "BOOK ATELIER SALON",
  },
  {
    id: 2,
    title: "THE POLKI & EMERALD ARCHIVE",
    subtitle: "HIGH JOAILLERIE ATELIER",
    description: "Certified uncut diamonds and untreated Colombian emeralds set in 22K hallmarked gold.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&q=85",
    ctaPrimary: "VIEW HIGH JEWELLERY",
    ctaSecondary: "PRIVATE SALON VIEWING",
  },
  {
    id: 3,
    title: "DILNASHI VOWS: ROYAL WEDDINGS",
    subtitle: "CONTEMPORARY BRIDAL & GROOM COUTURE",
    description: "Harmonious bridal lehengas and regal sherwanis woven in matching heritage zardozi.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85",
    ctaPrimary: "EXPLORE BRIDAL & GROOM",
    ctaSecondary: "VIRTUAL TRY ON",
  },
];

export const CURATED_SEASONS = [
  {
    id: 1,
    title: "BRIDAL LEHENGAS",
    subtitle: "Heirloom Zardozi & Chikankari",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
    link: "/category/lehengas",
  },
  {
    id: 2,
    title: "HAUTE SAREES",
    subtitle: "Liquid Sequin & Tissue Weaves",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85",
    link: "/category/sarees",
  },
  {
    id: 3,
    title: "ROYAL SHERWANIS",
    subtitle: "Bespoke Groom Matka Silks",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=85",
    link: "/category/sherwani-sets",
  },
  {
    id: 4,
    title: "HIGH JOAILLERIE",
    subtitle: "Uncut Diamonds & Colombian Emeralds",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85",
    link: "/jewellery",
  },
];

export const STARS_CATALOG = [
  {
    id: 1,
    name: "Janhvi Kapoor",
    film: "Filmfare Red Carpet 2026",
    outfit: "Liquid Silver Taban Sequin Saree",
    description: "Janhvi wears our signature liquid metallic sequin saree with an architectural corset blouse and uncut polki studs.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    collection: "BECOMING",
  },
  {
    id: 2,
    name: "Kiara Advani",
    film: "Royal Wedding Gala",
    outfit: "Ivory Pearls Bridal Lehenga Set",
    description: "Custom ivory bridal silhouette encrusted with Austrian crystals and paired with our Noorani Polki Choker.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    collection: "MIJWAN 2026",
  },
  {
    id: 3,
    name: "Diana Penty",
    film: "Cannes Film Festival",
    outfit: "Pastel Chikankari Fishbone Skirt Set",
    description: "An angelic blush pink fishbone chikankari ensemble featuring over 1,200 hours of delicate needlework.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
    collection: "MIJWAN 2026",
  },
  {
    id: 4,
    name: "Sidharth Malhotra",
    film: "HT Style Awards",
    outfit: "Obsidian Velvet Royal Bandhgala",
    description: "Tailored in micro-velvet with an imperial mandarin collar and bespoke gold crest buttons.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
    collection: "BECOMING",
  },
  {
    id: 5,
    name: "Kareena Kapoor Khan",
    film: "Vogue Leaders Conclave",
    outfit: "Midnight Noir Fishtail Velvet Gown",
    description: "Hourglass sculptural gown in Italian velvet with an asymmetrical shoulder and emerald choker.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
    collection: "PARIS COUTURE 2026",
  },
  {
    id: 6,
    name: "Ranveer Singh",
    film: "Paris Haute Couture Debut",
    outfit: "Rose Gold Hand-Woven Sherwani & Safa",
    description: "Showstopping groom attire woven in pure tussar silk with marodi zardozi and antique emerald kalgi.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
    collection: "BRIDAL COUTURE 2023-24 - MEN",
  },
];

export const RUNWAYS_DATA = [
  {
    id: "paris-couture-2026",
    title: "PARIS HAUTE COUTURE WEEK 2026",
    season: "AUTUMN / WINTER 2026",
    location: "Place Vendôme, Paris",
    date: "January 2026",
    cover: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "DILNASHI's historic Paris debut presenting 45 hand-embroidered silhouettes alongside our high joaillerie archive.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "mijwan-grand-show-2026",
    title: "MIJWAN GRAND CHARITY RUNWAY",
    season: "SPRING / SUMMER 2026",
    location: "Grand Ballroom, Mumbai",
    date: "March 2026",
    cover: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "Celebrating three decades of empowering rural women artisans through the revival of Chikankari.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "dubai-fashion-week-2025",
    title: "DUBAI ARAB LUXURY WEEK",
    season: "AUTUMN / WINTER 2025",
    location: "Dubai Opera, UAE",
    date: "October 2025",
    cover: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "A monumental showcase of Middle Eastern palatial grandeur fused with Indian heritage weaves.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const RUNWAY_SHOWS = RUNWAYS_DATA;


