// scripts/testImages.js
import https from 'https';

const candidates = [
  // Celebrities / Actors
  { name: 'Janhvi Kapoor - Indian Royal Blue Saree', url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Janhvi Kapoor - Indian Bridal Portrait', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80' },
  { name: 'Diana Penty - Ivory Couture Runway', url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80' },
  { name: 'Kiara Advani - Golden Bridal Lehenga', url: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sidharth Malhotra - Royal Indian Groom Sherwani', url: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sidharth Malhotra - Black Bandhgala Tuxedo', url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80' },
  
  // Visionary Couturier
  { name: 'Dilnashi Master Couturier - Tailored Bandhgala', url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80' },
  { name: 'Couturier Atelier 2', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
  { name: 'Couturier Atelier 3', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Couturier Atelier 4 (Distinguished suit)', url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80' },

  // Jewellery Icons
  { name: 'Necklace', url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Choker candidate 1', url: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Choker candidate 2', url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80' },
  { name: 'Mangtikka', url: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80' },
  { name: 'Rings', url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Mens Jewellery', url: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=400&q=80' },
  { name: 'Earrings', url: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80' },
  { name: 'Bracelets candidate 1', url: 'https://images.unsplash.com/photo-1611591475155-4264754f931b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Bracelets candidate 2', url: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=400&q=80' },
  { name: 'Bracelets candidate 3', url: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=400&q=80' },
];

async function checkUrl(item) {
  return new Promise((resolve) => {
    https.get(item.url, (res) => {
      resolve({ name: item.name, status: res.statusCode, ok: res.statusCode === 200, url: item.url });
    }).on('error', () => {
      resolve({ name: item.name, status: 500, ok: false, url: item.url });
    });
  });
}

async function run() {
  const results = await Promise.all(candidates.map(checkUrl));
  results.forEach(r => {
    console.log(`${r.ok ? '✓' : '✗'} [${r.status}] ${r.name}: ${r.url}`);
  });
}

run();
