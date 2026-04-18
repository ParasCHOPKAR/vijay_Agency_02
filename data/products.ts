// data/products.ts

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
};

export const productsData: Product[] = [
  // --- Polycarbonate Sheets ---
  {
    id: '1',
    slug: 'polycarbonate-awning',
    name: 'Polycarbonate Awning',
    category: 'Polycarbonate Sheets',
    shortDescription: 'Durable and weather-resistant awnings for optimal outdoor protection.',
    fullDescription: 'Our Polycarbonate Awnings provide superior UV protection and weather resistance while allowing natural light to filter through. Perfect for patios, windows, and entryways, offering a sleek architectural look.',
    image: '/polycarbonate_01.webp', // Using existing asset from your public folder
    features: ['High impact resistance', 'UV protection coating', 'Lightweight and easy to install', 'Weather resistant'],
  },
  {
    id: '2',
    slug: 'polycarbonate-corrugated',
    name: 'Polycarbonate Corrugated Sheets',
    category: 'Polycarbonate Sheets',
    shortDescription: 'High-strength corrugated sheets for industrial and residential roofing.',
    fullDescription: 'Engineered for exceptional durability, these corrugated sheets are practically unbreakable. They offer excellent light transmission and are ideal for skylights, greenhouses, and industrial roofing.',
    image: '/galllerrryy_hero_01.png', 
    features: ['Excellent light transmission', 'Virtually unbreakable', 'Fire retardant', 'Extreme temperature tolerance'],
  },
  // --- Tile Roof Sheets ---
  {
    id: '3',
    slug: 'pvc-tile-roof',
    name: 'PVC Tile Roof Sheet',
    category: 'Tile Roof Sheets',
    shortDescription: 'Aesthetic and durable PVC alternatives to traditional clay tiles.',
    fullDescription: 'Achieve the classic look of traditional roof tiles with the modern benefits of PVC. These sheets are lightweight, anti-corrosive, and provide excellent thermal and acoustic insulation.',
    image: '/pvc-sheets.jpg',
    features: ['Classic tile aesthetic', 'Corrosion resistant', 'Heat and sound insulation', 'Eco-friendly and recyclable'],
  },
  // Add the rest of your products following this exact same structure...
  // Slugs should be lowercase with dashes (e.g., 'pre-coated-tile', 'stone-coated', 'roof-ventilator')
];

export const getProductBySlug = (slug: string) => {
  return productsData.find((product) => product.slug === slug);
};