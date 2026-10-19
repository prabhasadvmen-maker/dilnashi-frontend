// scripts/generateFullCoutureDatabase.js
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

// Helper to generate items for each category
const items = [];

const addProduct = (p) => {
  const images = p.images || [p.image || IMAGES.LEHENGA_1];
  items.push({
    ...p,
    image: images[0],
    images,
  });
};

// 1. LEHENGAS / LEHENGA SETS (12 items)
const lehengaData = [
  { id: "ivory-pearls-chikankari-lehenga", name: "Ivory Pearls Chikankari Bridal Lehenga", col: "MIJWAN 2026", occ: "BRIDAL", pr: 680000, img: IMAGES.LEHENGA_1, desc: "Hand-loomed ivory chanderi silk lehenga with 24 kalis encrusted with Austrian crystals, Japanese micro-pearls, and dual organza veils." },
  { id: "light-pink-ivory-mijwan-skirt", name: "Light Pink With Ivory Mijwan Skirt Set", col: "MIJWAN 2026", occ: "BRIDAL", pr: 520000, img: IMAGES.LEHENGA_2, desc: "Pastel blush pink bridal lehenga with tone-on-tone ivory chikankari work and 24-kali flare with pearl accents." },
  { id: "champagne-chikankari-fishbone-bridal-lehenga", name: "Champagne Chikankari Fishbone Bridal Lehenga", col: "MIJWAN 2026", occ: "BRIDAL", pr: 640000, img: IMAGES.LEHENGA_3, desc: "Grand 24-kali champagne raw silk bridal skirt encrusted with thousands of micro-pearls, metallic taban threads, and double tissue veils." },
  { id: "gulabi-meenakari-bridal-lehenga", name: "Gulabi Meenakari Rose Silk Lehenga Set", col: "BECOMING", occ: "BRIDAL", pr: 720000, img: IMAGES.LEHENGA_4, desc: "Mughal rose pink bridal silhouette embellished with real silver bullion wire zardozi, hand-cut glass stones, and floral resham motifs." },
  { id: "saffron-gold-regal-mandap-lehenga", name: "Saffron Gold Royal Mandap Lehenga", col: "INAYA", occ: "BRIDAL", pr: 790000, img: IMAGES.LEHENGA_1, desc: "Deep saffron raw silk ceremonial lehenga with antique marodi zardozi and real beaten gold leaf borders." },
  { id: "powder-blue-crystal-reception-lehenga", name: "Powder Blue Liquid Crystal Lehenga", col: "BECOMING", occ: "RECEPTION", pr: 590000, img: IMAGES.LEHENGA_2, desc: "Modern architectural lehenga drenched in over 80,000 iridescent Swarovski crystals and glass bugle beads." },
  { id: "lavender-mist-organza-sangeet-lehenga", name: "Lavender Mist Organza Sangeet Lehenga", col: "THE FLORAL EDIT 2026", occ: "SANGEET", pr: 480000, img: IMAGES.LEHENGA_3, desc: "Featherlight layered organza skirt with hand-painted watercolor blooms and delicate sequin sprays for effortless dance movement." },
  { id: "emerald-velvet-winter-bridal-lehenga", name: "Emerald Velvet Imperial Bridal Lehenga", col: "EVARA", occ: "BRIDAL", pr: 820000, img: IMAGES.LEHENGA_4, desc: "Deep forest emerald micro-velvet kalidar skirt laden with heavyweight dabka, nakshi, and uncut semi-precious jade stones." },
  { id: "midnight-noir-corset-cocktail-lehenga", name: "Midnight Noir Structured Corset Lehenga", col: "BECOMING", occ: "COCKTAIL", pr: 510000, img: IMAGES.LEHENGA_1, desc: "Dramatic raven black georgette skirt with chevron sequin embroidery and a sculpted internal steel-boned corset." },
  { id: "sunshine-yellow-gotta-patti-haldi-lehenga", name: "Sunshine Yellow Gotta Patti Haldi Lehenga", col: "FESTIVE 2025", occ: "HALDI AND MEHENDI", pr: 390000, img: IMAGES.LEHENGA_2, desc: "Vibrant marigold yellow lehenga detailed with authentic Jaipur gotta patti applique and playful mirror tassels." },
  { id: "dusty-rose-mirrorwork-mehendi-lehenga", name: "Dusty Rose Handcrafted Mirrorwork Lehenga", col: "INAYA SUMMER WOMEN 2026", occ: "HALDI AND MEHENDI", pr: 440000, img: IMAGES.LEHENGA_3, desc: "Dusty rose crepe lehenga intricately studded with convex hand-cut mirrors, silk thread bakhia, and an organza dupatta." },
  { id: "blush-organza-destination-lehenga", name: "Blush Organza Cascading Floral Lehenga", col: "SUMMER 2024 - WOMEN", occ: "SANGEET", pr: 460000, img: IMAGES.LEHENGA_4, desc: "Cascading tiered organza bridal skirt with romantic resham threadwork, styled for palatial destination weddings." },
];

lehengaData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "LEHENGAS",
    gender: "WOMEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Heritage Palette",
    sizes: ["XS", "S", "M", "L", "XL", "CUSTOM SIZE"],
    leadTime: "Made to order: 8-10 weeks",
    images: [item.img, IMAGES.LEHENGA_2, IMAGES.LEHENGA_3],
    details: [
      "Components: Hand-embroidered Lehenga, Corset Blouse, Dual Dupatta",
      "Fabric: Pure Katan Silk & Tissue Organza",
      "Embroidery: 24-kali hand-embroidery with over 1,200 needlework hours",
      "Care: Strictly Dry Clean Only in Archival Trunk"
    ]
  });
});

// 2. SAREES (10 items)
const sareeData = [
  { id: "pearl-white-fishbone-mijwan-saree", name: "Pearl White Fishbone Mijwan Georgette Saree", col: "MIJWAN 2026", occ: "RECEPTION", pr: 380000, img: IMAGES.SAREE_1, desc: "Ethereal pearl white pure georgette saree embroidered with geometric fishbone jaal and Japanese seed pearls, paired with an illusion blouse." },
  { id: "metallic-silver-liquid-sequin-saree", name: "Liquid Silver Tabani Sequin Saree", col: "BECOMING", occ: "COCKTAIL", pr: 340000, img: IMAGES.SAREE_2, desc: "The iconic Dilnashi liquid metallic drape covered in hundreds of thousands of hand-stitched micro-sequins with a sculptural bustier." },
  { id: "rose-gold-tissue-banarasi-saree", name: "Rose Gold Handloom Tissue Banarasi Saree", col: "THE INDIA STORY WOMEN - DUBAI 2026", occ: "BRIDAL", pr: 420000, img: IMAGES.SAREE_3, desc: "Woven by master weavers of Varanasi using real zari metallic wefts, finished with hand-knotted pearl tassels." },
  { id: "champagne-chikankari-tulle-saree", name: "Champagne Chikankari Tulle Red Carpet Saree", col: "HT SHOW", occ: "COCKTAIL", pr: 395000, img: IMAGES.SAREE_1, desc: "Gossamer sheer tulle saree with Awadh shadow-work embroidery and scalloped crystal edges." },
  { id: "ruby-red-heritage-zardozi-saree", name: "Crimson Royal Zardozi Heritage Saree", col: "EVARA", occ: "BRIDAL", pr: 460000, img: IMAGES.SAREE_2, desc: "Traditional bridal vermillion red crepe saree framed with 4-inch heavy antique gold zardozi border." },
  { id: "emerald-green-cocktail-pre-draped-saree", name: "Emerald Sculptural Pre-Draped Concept Saree", col: "LUXE PRET 2025", occ: "COCKTAIL", pr: 310000, img: IMAGES.SAREE_3, desc: "Effortless pre-pleated satin georgette drape with structured hip drape clip and beaded bralette." },
  { id: "lilac-ombre-organza-saree", name: "Lilac Ombré Hand-Painted Organza Saree", col: "SUMMER SAREES 24", occ: "SANGEET", pr: 260000, img: IMAGES.SAREE_1, desc: "Pastel lilac to blush gradient sheer saree with delicate gota patti and hand-cut sequin sprigs." },
  { id: "gold-taban-tissue-drape-saree", name: "Imperial Gold Taban Liquid Tissue Saree", col: "DILNASHI READY TO WEAR", occ: "RECEPTION", pr: 375000, img: IMAGES.SAREE_2, desc: "Liquid metallic spun tissue saree that catches the light like molten gold with a corset blouse." },
  { id: "peach-chikankari-pearl-saree", name: "Peach Blossom Chikankari & Pearl Saree", col: "THE FLORAL EDIT 2026", occ: "HALDI AND MEHENDI", pr: 295000, img: IMAGES.SAREE_3, desc: "Soft peach pure georgette saree worked with intricate tepchi, jaali, and seed pearls." },
  { id: "black-onyx-crystal-cocktail-saree", name: "Onyx Black Starburst Crystal Saree", col: "BECOMING", occ: "COCKTAIL", pr: 385000, img: IMAGES.SAREE_1, desc: "Dramatic black silk chiffon saree with radiating crystal constellations and an open-back halter blouse." },
];

sareeData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "SAREES",
    gender: "WOMEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Imperial Silk",
    sizes: ["CUSTOM BLOUSE INCLUDED"],
    leadTime: "Made to order: 4-6 weeks",
    images: [item.img, IMAGES.SAREE_2, IMAGES.SAREE_3],
    details: [
      "Components: 6-Yard Saree, Hand-Embroidered Blouse, Petticoat",
      "Fabric: Georgette, Silk Crepe & Tissue Organza",
      "Embroidery: Hand-stitched with Swarovski pearls & metallic bullion threads",
      "Care: Dry Clean Only"
    ]
  });
});

// 3. ANARKALIS (8 items)
const anarkaliData = [
  { id: "regal-ivory-anarkali-gown", name: "Regal Ivory Awadh Floor-Length Anarkali", col: "MIJWAN 2026", occ: "RECEPTION", pr: 380000, img: IMAGES.KURTA_W_1, desc: "A magnificent 32-kali floor-sweeping anarkali crafted in pure mulberry silk, embroidered with shadow Chikankari and seed pearls." },
  { id: "blush-pink-chikankari-anarkali", name: "Blush Pink Resham Embroidered Anarkali Set", col: "INAYA", occ: "SANGEET", pr: 320000, img: IMAGES.KURTA_W_2, desc: "Soft blush pink kalidar anarkali with layered tissue lining, delicate gota border, and a hand-painted floral dupatta." },
  { id: "emerald-green-velvet-yoke-anarkali", name: "Emerald Green Velvet Yoke Royal Anarkali", col: "BECOMING", occ: "BRIDAL", pr: 440000, img: IMAGES.KURTA_W_3, desc: "Rich bottle green silk georgette flare supported by an antique dabka and zardozi embroidered velvet bodice." },
  { id: "gold-tissue-banarasi-anarkali", name: "Gold Tissue Banarasi Kalidar Anarkali Suit", col: "THE WORLD COLLECTION", occ: "RECEPTION", pr: 410000, img: IMAGES.KURTA_W_1, desc: "Hand-loomed metallic gold tissue anarkali with woven brocade borders, paired with churidar and sheerness dupatta." },
  { id: "ruby-crimson-bridal-anarkali", name: "Ruby Crimson Bridal Court Anarkali Set", col: "EVARA", occ: "BRIDAL", pr: 490000, img: IMAGES.KURTA_W_2, desc: "Regal crimson bridal silhouette accented with real silver marodi work and heavy scalloped dupatta." },
  { id: "powder-blue-crystal-anarkali", name: "Powder Blue Crystal Embellished Anarkali", col: "FESTIVE 2025", occ: "COCKTAIL", pr: 350000, img: IMAGES.KURTA_W_3, desc: "Dreamy ice blue pure georgette anarkali with 28 flared kalis twinkling with micro-crystals." },
  { id: "turmeric-yellow-haldi-anarkali", name: "Turmeric Yellow Gotta Jaal Haldi Anarkali", col: "SUMMER 2024 - WOMEN", occ: "HALDI AND MEHENDI", pr: 280000, img: IMAGES.KURTA_W_1, desc: "Bright sunshine anarkali crafted with organic cotton silk, detailed with geometric gotta ribbons." },
  { id: "black-gold-zardozi-gala-anarkali", name: "Black Onyx & Gold Zardozi Gala Anarkali", col: "BECOMING", occ: "COCKTAIL", pr: 425000, img: IMAGES.KURTA_W_2, desc: "Midnight noir high-collar anarkali with imperial gold sleeve cuffs and an opulent banarasi dupatta." },
];

anarkaliData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "ANARKALIS",
    gender: "WOMEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Imperial Hue",
    sizes: ["XS", "S", "M", "L", "XL", "CUSTOM SIZE"],
    leadTime: "Made to order: 4-6 weeks",
    images: [item.img, IMAGES.KURTA_W_2, IMAGES.KURTA_W_3],
    details: [
      "Components: Kalidar Anarkali, Churidar Trousers, Heavy Dupatta",
      "Fabric: Pure Silk Chanderi, Georgette & Velvet",
      "Tailoring: Built-in bra pads, concealed zipper, flared horsehair hem",
      "Care: Strictly Dry Clean Only"
    ]
  });
});

// 4. SHARARAS (8 items)
const shararaData = [
  { id: "ivory-chikankari-palace-sharara", name: "Ivory Chikankari Awadh Palace Sharara Set", col: "MIJWAN 2026", occ: "BRIDAL", pr: 360000, img: IMAGES.KURTA_W_3, desc: "A timeless bridal sharara with two-tiered voluminous flared pants, short peplum kurti, and gossamer veil." },
  { id: "dusty-pink-gota-sharara-set", name: "Dusty Pink Gota Patti Peplum Sharara", col: "INAYA SUMMER WOMEN 2026", occ: "SANGEET", pr: 310000, img: IMAGES.KURTA_W_1, desc: "Playful blush pink sharara pants paired with an embroidered peplum top and matching hand-beaded potli." },
  { id: "mustard-gold-mehendi-sharara", name: "Mustard Gold Zari Embroidered Mehendi Sharara", col: "FESTIVE 2025", occ: "HALDI AND MEHENDI", pr: 295000, img: IMAGES.KURTA_W_2, desc: "Radiant golden-yellow raw silk sharara set with traditional kiran lace borders and gotta work." },
  { id: "teal-peacock-velvet-sharara", name: "Teal Peacock Embroidered Velvet Sharara", col: "BECOMING", occ: "RECEPTION", pr: 450000, img: IMAGES.KURTA_W_3, desc: "Deep jewel-toned teal micro-velvet tunic with flared silk sharara pants and heavy antique zardozi." },
  { id: "mint-green-mirrorwork-sharara", name: "Mint Green Handcrafted Mirrorwork Sharara", col: "THE FLORAL EDIT 2026", occ: "SANGEET", pr: 340000, img: IMAGES.KURTA_W_1, desc: "Refreshing pastel mint sharara pants decorated with reflective mirror rosettes and organza ruffles." },
  { id: "lavender-crystal-cocktail-sharara", name: "Lavender Dream Crystal Draped Sharara", col: "LUXE PRET 2025", occ: "COCKTAIL", pr: 380000, img: IMAGES.KURTA_W_2, desc: "Contemporary silhouette featuring a structured bustier with draped attached pallu and flared sharara." },
  { id: "ruby-wine-banarasi-sharara", name: "Ruby Wine Woven Banarasi Silk Sharara", col: "EVARA", occ: "BRIDAL", pr: 420000, img: IMAGES.KURTA_W_3, desc: "Rich burgundy wine vintage banarasi weave sharara with real metallic motifs and pure silk kurta." },
  { id: "peach-pearl-kalidar-sharara", name: "Peach Blossom Kalidar Pearl Sharara Set", col: "SUMMER 2024 - WOMEN", occ: "HALDI AND MEHENDI", pr: 285000, img: IMAGES.KURTA_W_1, desc: "Delicate peach georgette short kurti with wide flared trousers finished in freshwater seed pearl trims." },
];

shararaData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "SHARARAS",
    gender: "WOMEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Festive Palette",
    sizes: ["XS", "S", "M", "L", "XL", "CUSTOM SIZE"],
    leadTime: "Made to order: 4-6 weeks",
    images: [item.img, IMAGES.KURTA_W_2, IMAGES.KURTA_W_1],
    details: [
      "Components: Short Kurti / Peplum, Two-Tiered Sharara Pants, Dupatta",
      "Fabric: Raw Silk, Pure Georgette & Tulle",
      "Comfort: Elasticated back waistband with internal side zip and drawstrings",
      "Care: Dry Clean Only"
    ]
  });
});

// 5. GOWNS (8 items)
const gownData = [
  { id: "paris-silver-crystalline-corset-gown", name: "Paris Silver Crystalline Corset Ball Gown", col: "PARIS COUTURE 2026", occ: "RECEPTION", pr: 580000, img: IMAGES.GOWN_1, desc: "Sculptural metallic silver ball gown with hand-draped micro-pleated tulle and thousands of cascading Swarovski crystals." },
  { id: "midnight-noir-fishtail-velvet-gown", name: "Midnight Noir Fishtail Velvet Red Carpet Gown", col: "BECOMING", occ: "COCKTAIL", pr: 490000, img: IMAGES.GOWN_2, desc: "Dramatic hourglass gown in Italian micro-velvet with an asymmetrical structured shoulder and cathedral train." },
  { id: "rose-gold-liquid-sequin-gown", name: "Rose Gold Liquid Sequin Slit Gown", col: "LUXE PRET 2025", occ: "COCKTAIL", pr: 430000, img: IMAGES.GOWN_3, desc: "High-slit red carpet gown covered in gradient rose-gold sequins with an internal anatomical corset." },
  { id: "champagne-draped-trail-gown", name: "Champagne Greek Draped Silk Chiffon Gown", col: "HT SHOW", occ: "RECEPTION", pr: 460000, img: IMAGES.GOWN_1, desc: "Ethereal goddess gown in liquid champagne silk chiffon with gold-embroidered waist harness and cape." },
  { id: "emerald-architectural-mermaid-gown", name: "Emerald Architectural Mermaid Cut Gown", col: "THE WORLD COLLECTION", occ: "COCKTAIL", pr: 520000, img: IMAGES.GOWN_2, desc: "Sculpted emerald gown with structural fan pleating and jewel-encrusted high neckline." },
  { id: "blush-tulle-feather-couture-gown", name: "Blush Tulle & Ostrich Feather Gala Gown", col: "SUMMER 2024 - WOMEN", occ: "RECEPTION", pr: 610000, img: IMAGES.GOWN_3, desc: "Dreamy multi-tiered blush tulle gown trimmed with ethically-sourced ostrich feathers and bugle beads." },
  { id: "obsidian-crystal-backless-gown", name: "Obsidian Black Backless Crystal Evening Gown", col: "BECOMING", occ: "COCKTAIL", pr: 475000, img: IMAGES.GOWN_1, desc: "Sensual halterneck gown with cowl drapery and an open back framed in crystalline chandelier strands." },
  { id: "ivory-bridal-corset-cape-gown", name: "Ivory Bridal Corset Gown with Attached Cape", col: "BRIDAL COUTURE 2026", occ: "BRIDAL", pr: 550000, img: IMAGES.GOWN_2, desc: "Modern bridal gown with traditional zardozi motifs reimagined into clean contemporary silhouette lines." },
];

gownData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "GOWNS",
    gender: "WOMEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Red Carpet Luxe",
    sizes: ["XS", "S", "M", "L", "XL", "CUSTOM SIZE"],
    leadTime: "Made to order: 6-8 weeks",
    images: [item.img, IMAGES.GOWN_2, IMAGES.GOWN_3],
    details: [
      "Components: Structured Gown with Internal Boning",
      "Fabric: Imported Silk Crepe, French Tulle & Micro-Velvet",
      "Structure: 14-point steel bone corset support with hook-and-eye closure",
      "Care: Strictly Dry Clean Only"
    ]
  });
});

// 6. KURTA SETS (Women) (6 items)
const kurtaWData = [
  { id: "frost-ivory-mijwan-kalidar-kurta", name: "Frost Ivory Mijwan Kalidar Kurta Set", col: "MIJWAN 2026", occ: "HALDI AND MEHENDI", pr: 285000, img: IMAGES.KURTA_W_1, desc: "Hand-loomed ivory chanderi kalidar kurta with intricate phanda and bakhia needlework, palazzo trousers, and sheer veil." },
  { id: "pastel-mint-chikankari-straight-suit", name: "Pastel Mint Awadh Chikankari Straight Kurta Set", col: "INAYA", occ: "SANGEET", pr: 240000, img: IMAGES.KURTA_W_2, desc: "Classic straight-cut kurta with scalloped hemline, tapered silk pants, and mukaish embellished dupatta." },
  { id: "blush-pink-resham-palazzo-suit", name: "Blush Pink Resham Embroidered Palazzo Set", col: "THE FLORAL EDIT 2026", occ: "HALDI AND MEHENDI", pr: 265000, img: IMAGES.KURTA_W_3, desc: "Airy silk georgette tunic with delicate resham florals and matching flared palazzo trousers." },
  { id: "mustard-raw-silk-festive-kurta", name: "Mustard Raw Silk Zardozi Yoke Kurta Set", col: "FESTIVE 2025", occ: "HALDI AND MEHENDI", pr: 295000, img: IMAGES.KURTA_W_1, desc: "Deep mustard raw silk kurta with heavily encrusted antique marodi neckline, churidar, and banarasi dupatta." },
  { id: "midnight-blue-velvet-winter-kurta", name: "Midnight Navy Velvet Embroidered Kurta Set", col: "EVARA", occ: "RECEPTION", pr: 340000, img: IMAGES.KURTA_W_2, desc: "Sumptuous silk velvet straight kurta accented with real silver tilla needlework and organza dupatta." },
  { id: "peach-mirrorwork-chanderi-suit", name: "Peach Blossom Mirrorwork Chanderi Kurta Set", col: "SUMMER 2024 - WOMEN", occ: "SANGEET", pr: 250000, img: IMAGES.KURTA_W_3, desc: "Festive peach tunic detailed with hand-cut mirrors, soft mulmul lining, and cropped cigarette pants." },
];

kurtaWData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "KURTA SETS",
    gender: "WOMEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Artisan Tones",
    sizes: ["XS", "S", "M", "L", "XL", "CUSTOM SIZE"],
    leadTime: "Made to order: 3-5 weeks",
    images: [item.img, IMAGES.KURTA_W_2, IMAGES.KURTA_W_3],
    details: [
      "Components: Handcrafted Kurta, Pants / Palazzo, Dupatta",
      "Fabric: Chanderi Silk, Mulberry Habotai & Organza",
      "Embroidery: Traditional Lucknow Chikankari & Mukaish",
      "Care: Dry Clean Only"
    ]
  });
});

// 7. FUSION WEAR (6 items)
const fusionData = [
  { id: "dusty-pink-fishbone-mijwan", name: "Dusty Pink Fishbone Mijwan Pant Suit Set", col: "MIJWAN 2026", occ: "COCKTAIL", pr: 560000, img: IMAGES.GOWN_2, desc: "Dusty pink fishbone Mijwan blazer, pant with sequins & pearl highlights. Paired with pink fur drape." },
  { id: "ivory-embroidered-tuxedo-suit", name: "Ivory Raw Silk Embroidered Women's Tuxedo", col: "BECOMING", occ: "RECEPTION", pr: 480000, img: IMAGES.GOWN_3, desc: "Sharp peak-lapel tuxedo jacket with zardozi collar, cigarette trousers, and sheer lace bralette." },
  { id: "emerald-caped-bustier-trouser-set", name: "Emerald Sculptural Caped Bustier & Trouser Set", col: "LUXE PRET 2025", occ: "COCKTAIL", pr: 390000, img: IMAGES.GOWN_1, desc: "Sleek tailored trousers paired with a sweetheart boned bustier and floor-length asymmetric cape." },
  { id: "metallic-silver-crop-blazer-skirt", name: "Metallic Silver Cropped Blazer & Draped Skirt", col: "HT SHOW", occ: "COCKTAIL", pr: 420000, img: IMAGES.GOWN_2, desc: "High-fashion cropped dinner jacket with hand-stitched bugle beads and liquid silk draped skirt." },
  { id: "black-velvet-corset-jumpsuit", name: "Black Velvet Sculptural Corset Jumpsuit", col: "BECOMING", occ: "COCKTAIL", pr: 440000, img: IMAGES.GOWN_3, desc: "One-piece micro-velvet jumpsuit featuring sheer mesh corset waist and wide-leg trousers." },
  { id: "rose-gold-trench-cape-dress", name: "Rose Gold Hand-Woven Trench Cape Ensemble", col: "PARIS COUTURE 2026", occ: "RECEPTION", pr: 510000, img: IMAGES.GOWN_1, desc: "Avant-garde floor-length trench cape with traditional banarasi motifs reimagined into structured modern tailoring." },
];

fusionData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "FUSION WEAR",
    gender: "WOMEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Contemporary Couture",
    sizes: ["XS", "S", "M", "L", "XL", "CUSTOM SIZE"],
    leadTime: "Made to order: 4-6 weeks",
    images: [item.img, IMAGES.GOWN_2, IMAGES.GOWN_3],
    details: [
      "Components: Structured Jacket / Bustier, Tailored Trousers / Drape",
      "Fabric: Raw Silk, Wool Crepe & Habotai Silk",
      "Tailoring: Savile Row inspired internal canvassing and shoulder pads",
      "Care: Strictly Dry Clean Only"
    ]
  });
});

// 8. SHERWANI SETS (Men) (10 items)
const sherwaniData = [
  { id: "regal-rose-gold-sherwani", name: "Regal Rose Gold Handcrafted Groom Sherwani Set", col: "BRIDAL COUTURE 2023-24 - MEN", occ: "GROOM", pr: 480000, img: IMAGES.SHERWANI_1, desc: "An imperial groom ensemble hand-woven in pure tussar silk, encrusted with real gold bullion zardozi on mandarin collar and cuffs, paired with chanderi safa and churidar." },
  { id: "ivory-pearl-chikankari-groom-sherwani", name: "Ivory Raw Silk Chikankari Groom Sherwani", col: "MIJWAN 2026", occ: "GROOM", pr: 420000, img: IMAGES.SHERWANI_2, desc: "Tone-on-tone Awadh Chikankari embroidery across 10 panels, punctuated with micro-pearls and mother-of-pearl buttons." },
  { id: "obsidian-black-velvet-sherwani", name: "Obsidian Black Velvet Embroidered Sherwani", col: "BECOMING", occ: "RECEPTION", pr: 395000, img: IMAGES.SHERWANI_3, desc: "Deep black Italian micro-velvet sherwani laden with matte black dabka needlework and silver metallic piping." },
  { id: "saffron-gold-royal-mandap-sherwani", name: "Saffron Gold Royal Mandap Ceremony Sherwani", col: "THE INDIA STORY MEN - DUBAI 2026", occ: "GROOM", pr: 465000, img: IMAGES.SHERWANI_1, desc: "Ceremonial groom attire in rich amber saffron silk with heritage jaal embroidery and coordinating stole." },
  { id: "champagne-chintz-motifs-sherwani", name: "Champagne Silk Sherwani with Chintz Zardozi", col: "INAYA SUMMER MEN 2026", occ: "GROOM", pr: 380000, img: IMAGES.SHERWANI_2, desc: "Lightweight summer wedding sherwani tailored in pure mulberry silk with pastel resham vines." },
  { id: "emerald-regal-nizam-sherwani", name: "Emerald Green Imperial Nizam Court Sherwani", col: "WORLD COLLECTION: DUBAI MEN", occ: "GROOM", pr: 510000, img: IMAGES.SHERWANI_3, desc: "Magnificent bottle-green silk brocade sherwani with jewelled button set and antique kalgi loop." },
  { id: "powder-blue-summer-wedding-sherwani", name: "Powder Blue Silk Sherwani with Silver Taban", col: "SUMMER '24", occ: "SANGEET", pr: 360000, img: IMAGES.SHERWANI_1, desc: "Airy summer wedding sherwani tailored in raw silk with subtle silver thread accents and silk stole." },
  { id: "crimson-maroon-velvet-sherwani", name: "Crimson Maroon Heritage Velvet Sherwani", col: "KHAAB BRIDAL COUTURE' 22", occ: "GROOM", pr: 440000, img: IMAGES.SHERWANI_2, desc: "Classic royal groom sherwani in deep wine velvet with heavy bullion hand embroidery and embroidered belt." },
  { id: "gold-tissue-banarasi-groom-sherwani", name: "Imperial Gold Tissue Banarasi Groom Sherwani", col: "NOORANIYAT '21", occ: "GROOM", pr: 490000, img: IMAGES.SHERWANI_3, desc: "Woven in Varanasi using real metallic zari threads, finished with jewelled emerald buttons." },
  { id: "pearl-grey-geometric-chikankari-sherwani", name: "Pearl Grey Geometric Fishbone Sherwani Set", col: "MIJWAN 2026", occ: "RECEPTION", pr: 375000, img: IMAGES.SHERWANI_1, desc: "Modern architectural interpretation of Awadh Chikankari with sharp diagonal panelling and churidar." },
];

sherwaniData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "SHERWANI SETS",
    gender: "MEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Imperial Gold & Silk",
    sizes: ["38", "40", "42", "44", "46", "CUSTOM MEASURE"],
    leadTime: "Bespoke Tailoring: 6-8 weeks",
    images: [item.img, IMAGES.SHERWANI_2, IMAGES.SHERWANI_3],
    details: [
      "Components: Handcrafted Sherwani, Churidar Trousers, Silk Safa, Embroidered Stole",
      "Fabric: Raw Matka Silk, Tussar & Pure Velvet",
      "Construction: Full floating horsehair canvas chest piece for perfect drape",
      "Care: Dry Clean Only in Archival Trunk"
    ]
  });
});

// 9. BANDHGALA SETS (Men) (8 items)
const bandhgalaData = [
  { id: "obsidian-velvet-embroidered-bandhgala", name: "Obsidian Black Velvet Royal Bandhgala Set", col: "BECOMING", occ: "RECEPTION", pr: 290000, img: IMAGES.BANDHGALA_1, desc: "Tailored in structured Italian micro-velvet with hand-embroidered crest motif on the chest, monogrammed buttons, and tailored trousers." },
  { id: "midnight-navy-raw-silk-bandhgala", name: "Midnight Navy Raw Silk Imperial Bandhgala", col: "WORLD COLLECTION: DUBAI MEN", occ: "COCKTAIL", pr: 245000, img: IMAGES.BANDHGALA_2, desc: "Classic Jodhpuri silhouette with structured shoulders, concealed button placket, and hand-embroidered collar." },
  { id: "ivory-tussar-chikankari-bandhgala", name: "Ivory Tussar Silk Chikankari Bandhgala", col: "MIJWAN 2026", occ: "RECEPTION", pr: 280000, img: IMAGES.BANDHGALA_3, desc: "Sophisticated formal suit in textured tussar silk with subtle phanda stitch highlights on cuffs and pocket." },
  { id: "forest-emerald-velvet-bandhgala", name: "Forest Emerald Velvet Cocktail Bandhgala", col: "BECOMING", occ: "COCKTAIL", pr: 310000, img: IMAGES.BANDHGALA_1, desc: "Opulent emerald dinner suit with self-textured tonal embroidery and antique brass crest buttons." },
  { id: "charcoal-wool-bespoke-bandhgala", name: "Charcoal Slate Super 150s Wool Bandhgala", col: "KHAAB MENSWEAR", occ: "RECEPTION", pr: 260000, img: IMAGES.BANDHGALA_2, desc: "Fine English wool tailored with an imperial mandarin collar and hand-stitched pick lapels." },
  { id: "maroon-silk-zardozi-bandhgala", name: "Maroon Silk & Antique Zardozi Bandhgala", col: "EVARA", occ: "SANGEET", pr: 295000, img: IMAGES.BANDHGALA_3, desc: "Rich wine-toned formal bandhgala with subtle shoulder bullion embroidery, paired with slim trousers." },
  { id: "powder-blue-summer-bandhgala", name: "Powder Blue Silk Linen Summer Bandhgala", col: "INAYA SUMMER MEN 2026", occ: "HALDI AND MEHENDI", pr: 220000, img: IMAGES.BANDHGALA_1, desc: "Unstructured, breathable silk-linen jacket designed for warm-weather destination weddings." },
  { id: "black-sequin-lapel-tuxedo-bandhgala", name: "Black Sequin Collar High-Fashion Bandhgala", col: "BECOMING", occ: "COCKTAIL", pr: 330000, img: IMAGES.BANDHGALA_2, desc: "Red-carpet statement silhouette with shimmering micro-sequin collar and pocket square detailing." },
];

bandhgalaData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "BANDHGALA SETS",
    gender: "MEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Imperial Tailoring",
    sizes: ["38", "40", "42", "44", "46", "CUSTOM MEASURE"],
    leadTime: "Bespoke Tailoring: 4-6 weeks",
    images: [item.img, IMAGES.BANDHGALA_2, IMAGES.BANDHGALA_3],
    details: [
      "Components: Structured Bandhgala Jacket, Slim Tapered Trousers",
      "Fabric: Italian Velvet, Raw Silk & Super 150s Wool",
      "Buttons: Handcrafted metal crest buttons with custom monogram option",
      "Care: Strictly Dry Clean Only"
    ]
  });
});

// 10. BLAZER & JACKET SETS (Men) (6 items)
const blazerData = [
  { id: "kashmiri-tilla-resham-jacket", name: "Kashmiri Tilla & Resham Tuxedo Dinner Jacket", col: "BECOMING", occ: "COCKTAIL", pr: 245000, img: IMAGES.BLAZER_1, desc: "Structured dinner blazer tailored in pure wool with hand-stitched Kashmiri tilla threadwork across shoulders and peak lapels." },
  { id: "velvet-shawl-collar-tuxedo-blazer", name: "Midnight Navy Velvet Shawl Lapel Tuxedo Blazer", col: "THE INDIA STORY MEN - DUBAI 2026", occ: "RECEPTION", pr: 220000, img: IMAGES.BLAZER_2, desc: "Classic black-tie blazer with satin-faced shawl collar and single cloth-covered button closure." },
  { id: "ivory-raw-silk-embroidered-blazer", name: "Ivory Raw Silk Floral Embroidered Dinner Jacket", col: "MIJWAN 2026", occ: "RECEPTION", pr: 260000, img: IMAGES.BLAZER_1, desc: "Sophisticated dinner jacket with tonal chikankari motifs, paired with black satin trousers." },
  { id: "emerald-green-brocade-blazer", name: "Emerald Green Woven Brocade Cocktail Blazer", col: "WORLD COLLECTION: DUBAI MEN", occ: "COCKTAIL", pr: 235000, img: IMAGES.BLAZER_2, desc: "Lustrous jacquard woven dinner jacket with black grosgrain lapels and double vents." },
  { id: "black-crystal-constellation-blazer", name: "Black Onyx Crystal Constellation Tuxedo", col: "BECOMING", occ: "COCKTAIL", pr: 290000, img: IMAGES.BLAZER_1, desc: "Statement red-carpet jacket adorned with radiating black and smoke crystals across one shoulder." },
  { id: "rose-gold-metallic-tuxedo-jacket", name: "Rose Gold Liquid Metallic Tuxedo Jacket", col: "SUMMER '24", occ: "SANGEET", pr: 275000, img: IMAGES.BLAZER_2, desc: "Shimmering silk-blend jacket that drapes effortlessly, designed for modern sangeet evenings." },
];

blazerData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "BLAZER & JACKET SETS",
    gender: "MEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Black Tie Luxury",
    sizes: ["38", "40", "42", "44", "46", "CUSTOM MEASURE"],
    leadTime: "Bespoke Tailoring: 3-5 weeks",
    images: [item.img, IMAGES.BLAZER_2, IMAGES.BLAZER_1],
    details: [
      "Components: Tuxedo Jacket, Formal Trousers (Optional)",
      "Fabric: Pure Wool, Silk Satin & Velvet",
      "Lining: Custom jacquard crest lining with interior cigar pocket",
      "Care: Dry Clean Only"
    ]
  });
});

// 11. BUNDI SETS (Men) (6 items)
const bundiData = [
  { id: "ivory-chikankari-silk-bundi-set", name: "Ivory Chikankari Embroidered Bundi Vest Set", col: "MIJWAN 2026", occ: "HALDI AND MEHENDI", pr: 165000, img: IMAGES.BUNDI_1, desc: "Hand-embroidered Awadh Chikankari sleeveless bundi vest paired with pure munga silk kurta and churidar." },
  { id: "mustard-yellow-festive-bundi-set", name: "Mustard Yellow Silk Gota Bundi Set", col: "FESTIVE 2025", occ: "HALDI AND MEHENDI", pr: 145000, img: IMAGES.BUNDI_2, desc: "Traditional festive waistcoat in raw silk featuring geometric marodi border detailing and churidar." },
  { id: "powder-blue-chanderi-bundi-set", name: "Powder Blue Chanderi Floral Printed Bundi Set", col: "INAYA SUMMER MEN 2026", occ: "SANGEET", pr: 155000, img: IMAGES.BUNDI_1, desc: "Soft pastel bundi jacket with delicate foil printing and pearl button closures." },
  { id: "mint-green-mirrorwork-bundi-suit", name: "Mint Green Handcrafted Mirrorwork Bundi Set", col: "SUMMER '24", occ: "HALDI AND MEHENDI", pr: 175000, img: IMAGES.BUNDI_2, desc: "Festive jacket studded with convex mirrors and thread embroidery, paired with a relaxed kurta." },
  { id: "midnight-navy-velvet-bundi-set", name: "Midnight Navy Velvet Embroidered Bundi Set", col: "BECOMING", occ: "RECEPTION", pr: 195000, img: IMAGES.BUNDI_1, desc: "Heavy micro-velvet bundi with silver bullion zardozi work and raw silk kurta trousers." },
  { id: "peach-organza-layered-bundi-set", name: "Peach Blossom Asymmetric Draped Bundi Set", col: "THE FLORAL EDIT 2026", occ: "SANGEET", pr: 185000, img: IMAGES.BUNDI_2, desc: "Modern asymmetric overlapping bundi jacket styled with a pleated hem kurta." },
];

bundiData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "BUNDI SETS",
    gender: "MEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Festive Shades",
    sizes: ["38", "40", "42", "44", "46", "CUSTOM MEASURE"],
    leadTime: "Made to order: 3-4 weeks",
    images: [item.img, IMAGES.BUNDI_2, IMAGES.BUNDI_1],
    details: [
      "Components: Embroidered Bundi Vest, Pure Silk Kurta, Churidar Trousers",
      "Fabric: Raw Silk, Chanderi & Micro-Velvet",
      "Pockets: Functional jetted pockets with concealed ticket pouch",
      "Care: Dry Clean Only"
    ]
  });
});

// 12. KURTA SETS (Men) (6 items)
const kurtaMData = [
  { id: "ivory-silk-chanderi-kurta-set-men", name: "Ivory Silk Chanderi Classic Kurta Set", col: "MIJWAN 2026", occ: "HALDI AND MEHENDI", pr: 125000, img: IMAGES.KURTA_M_1, desc: "Airy chanderi silk kurta with delicate shadow-work chikankari on placket and cuffs, with churidar." },
  { id: "blush-pink-asymmetric-cowl-kurta", name: "Blush Pink Asymmetric Cowl Draped Kurta", col: "INAYA SUMMER MEN 2026", occ: "SANGEET", pr: 140000, img: IMAGES.KURTA_M_2, desc: "Contemporary fluid drape kurta with side cowl pleats and mother-of-pearl buttons." },
  { id: "saffron-gold-festive-kurta-set", name: "Saffron Gold Festive Raw Silk Kurta Set", col: "FESTIVE 2025", occ: "HALDI AND MEHENDI", pr: 135000, img: IMAGES.KURTA_M_1, desc: "Vibrant raw silk tunic with delicate metallic zari topstitching, paired with relaxed trousers." },
  { id: "midnight-black-pathani-kurta-set", name: "Midnight Black Royal Pathani Kurta Set", col: "BECOMING", occ: "COCKTAIL", pr: 155000, img: IMAGES.KURTA_M_2, desc: "Structured pathani suit with shoulder epaulets, flap chest pockets, and salwar trousers." },
  { id: "sage-green-embroidered-kurta-set", name: "Sage Green Resham Embroidered Kurta Set", col: "SUMMER '24", occ: "HALDI AND MEHENDI", pr: 130000, img: IMAGES.KURTA_M_1, desc: "Refreshing pastel sage kurta with tone-on-tone Lucknowi threadwork and cotton silk pants." },
  { id: "white-linen-chikankari-summer-kurta", name: "Pure White French Linen Chikankari Kurta", col: "DILNASHI READY TO WEAR", occ: "HALDI AND MEHENDI", pr: 110000, img: IMAGES.KURTA_M_2, desc: "Breathable pure European linen kurta with hand-stitched floral jaal on the yoke." },
];

kurtaMData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "KURTA SETS",
    gender: "MEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Subtle Pastels & Neutrals",
    sizes: ["38", "40", "42", "44", "46", "CUSTOM MEASURE"],
    leadTime: "Made to order: 2-3 weeks",
    images: [item.img, IMAGES.KURTA_M_2, IMAGES.KURTA_M_1],
    details: [
      "Components: Handcrafted Kurta, Churidar or Tapered Trousers",
      "Fabric: Pure Silk Chanderi, Raw Silk & European Linen",
      "Stitching: French seams with hand-rolled hems",
      "Care: Dry Clean Only"
    ]
  });
});

// 13. SHIRTS (Men) (6 items)
const shirtData = [
  { id: "silk-tuxedo-pleated-shirt", name: "Silk Habotai Pleated Bib Tuxedo Shirt", col: "BECOMING", occ: "COCKTAIL", pr: 65000, img: IMAGES.SHIRT_1, desc: "Formal black-tie shirt in pure mulberry silk with hand-folded pleated front bib and French cuffs." },
  { id: "ivory-embroidered-mandarin-shirt", name: "Ivory Chikankari Embroidered Mandarin Shirt", col: "MIJWAN 2026", occ: "RECEPTION", pr: 72000, img: IMAGES.SHIRT_2, desc: "Contemporary luxury band-collar shirt with delicate tone-on-tone embroidery on the placket." },
  { id: "black-silk-satin-evening-shirt", name: "Onyx Black Silk Satin Cocktail Evening Shirt", col: "BECOMING", occ: "COCKTAIL", pr: 58000, img: IMAGES.SHIRT_1, desc: "Lustrous heavy silk satin shirt with concealed button fly and structured Italian collar." },
  { id: "powder-blue-linen-resort-shirt", name: "Powder Blue European Linen Resort Shirt", col: "INAYA SUMMER MEN 2026", occ: "HALDI AND MEHENDI", pr: 48000, img: IMAGES.SHIRT_2, desc: "Casual luxury spread-collar shirt woven from pure Normandy flax linen with shell buttons." },
  { id: "blush-pink-silk-festive-shirt", name: "Blush Pink Silk Festive Dinner Shirt", col: "SUMMER '24", occ: "SANGEET", pr: 62000, img: IMAGES.SHIRT_1, desc: "Sophisticated silk shirt that layers effortlessly beneath blazers and bundi waistcoats." },
  { id: "champagne-jacquard-monogram-shirt", name: "Champagne Jacquard Woven Monogram Shirt", col: "WORLD COLLECTION: DUBAI MEN", occ: "RECEPTION", pr: 78000, img: IMAGES.SHIRT_2, desc: "Woven crest monogram fabric with pure mother-of-pearl buttons and engraved collar stays." },
];

shirtData.forEach(item => {
  addProduct({
    id: item.id,
    name: item.name,
    category: "SHIRTS",
    gender: "MEN",
    collection: item.col,
    occasion: item.occ,
    description: item.desc,
    price: item.pr,
    priceFormatted: `₹${item.pr.toLocaleString('en-IN')}`,
    color: "Couture Tailoring",
    sizes: ["38", "40", "42", "44", "46"],
    leadTime: "Immediate Dispatch / 1-2 weeks",
    images: [item.img, IMAGES.SHIRT_2, IMAGES.SHIRT_1],
    details: [
      "Components: Handcrafted Luxury Shirt",
      "Fabric: 100% Pure Mulberry Silk / European Flax Linen",
      "Buttons: Genuine Australian Mother-of-Pearl with shank stitching",
      "Care: Gentle Handwash or Dry Clean"
    ]
  });
});

// Import and add High Jewellery products
const { JEWELLERY_PRODUCTS } = await import('./buildComprehensiveCoutureData.js');
JEWELLERY_PRODUCTS.forEach(j => {
  items.push(j);
});

console.log('Total Master Products generated:', items.length);

// Now write out the master coutureData.js template
const template = `// DILNASHI Haute Couture & High Jewellery — Master Data

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
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Diana Penty",
    outfit: "Pastel Chikankari Fishbone Skirt Set",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Kiara Advani",
    outfit: "Ivory Pearls Bridal Lehenga & Uncut Polki Choker",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Sidharth Malhotra",
    outfit: "Obsidian Micro-Velvet Royal Bandhgala",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
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
export const ALL_PRODUCTS = ${JSON.stringify(items, null, 2)};

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
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    collection: "BECOMING",
  },
  {
    id: 2,
    name: "Kiara Advani",
    film: "Royal Wedding Gala",
    outfit: "Ivory Pearls Bridal Lehenga Set",
    description: "Custom ivory bridal silhouette encrusted with Austrian crystals and paired with our Noorani Polki Choker.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
    collection: "MIJWAN 2026",
  },
  {
    id: 3,
    name: "Diana Penty",
    film: "Cannes Film Festival",
    outfit: "Pastel Chikankari Fishbone Skirt Set",
    description: "An angelic blush pink fishbone chikankari ensemble featuring over 1,200 hours of delicate needlework.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85",
    collection: "MIJWAN 2026",
  },
  {
    id: 4,
    name: "Sidharth Malhotra",
    film: "HT Style Awards",
    outfit: "Obsidian Velvet Royal Bandhgala",
    description: "Tailored in micro-velvet with an imperial mandarin collar and bespoke gold crest buttons.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
    collection: "BECOMING",
  },
  {
    id: 5,
    name: "Kareena Kapoor Khan",
    film: "Vogue Leaders Conclave",
    outfit: "Midnight Noir Fishtail Velvet Gown",
    description: "Hourglass sculptural gown in Italian velvet with an asymmetrical shoulder and emerald choker.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
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
    heroImage: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1920&q=85",
    description: "DILNASHI's historic Paris debut presenting 45 hand-embroidered silhouettes alongside our high joaillerie archive.",
  },
  {
    id: "mijwan-grand-show-2026",
    title: "MIJWAN GRAND CHARITY RUNWAY",
    season: "SPRING / SUMMER 2026",
    location: "Grand Ballroom, Mumbai",
    date: "March 2026",
    heroImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1920&q=85",
    description: "Celebrating three decades of empowering rural women artisans through the revival of Chikankari.",
  },
  {
    id: "dubai-fashion-week-2025",
    title: "DUBAI ARAB LUXURY WEEK",
    season: "AUTUMN / WINTER 2025",
    location: "Dubai Opera, UAE",
    date: "October 2025",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    description: "A monumental showcase of Middle Eastern palatial grandeur fused with Indian heritage weaves.",
  },
];
`;

fs.writeFileSync(outputPath, template, 'utf8');
console.log('Successfully wrote comprehensive master coutureData.js with', items.length, 'products!');
