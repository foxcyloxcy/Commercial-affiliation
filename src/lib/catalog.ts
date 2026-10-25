export type Marketplace = 'shopee' | 'lazada' | 'tiktok_shop' | 'involve_asia';
export type CatalogProduct = { slug: string; name: string; category: string; description: string; pricePhp: number; marketplace: Marketplace; outboundUrl?: string; sample: boolean; signals: { value: number; trend: number; quality: number; affordability: number; reliability: number } };
// Demo-only product data: do not label these as real deals or offers.
export const demoProducts: CatalogProduct[] = [
  { slug:'usb-c-power-bank', name:'USB-C Power Bank', category:'Trending Tech', description:'Compare capacity, charging standards and local warranty before purchasing.', pricePhp:699, marketplace:'lazada', sample:true, signals:{value:85,trend:76,quality:80,affordability:89,reliability:75}},
  { slug:'wireless-earbuds', name:'Wireless Earbuds', category:'Budget Gadgets', description:'Check codec support, battery life and return policies.', pricePhp:499, marketplace:'shopee', sample:true, signals:{value:80,trend:87,quality:70,affordability:92,reliability:76}},
  { slug:'desk-organizer', name:'Desk Organizer', category:'Daily Essentials', description:'Compare material, size and shipping fees.', pricePhp:249, marketplace:'tiktok_shop', sample:true, signals:{value:78,trend:60,quality:82,affordability:95,reliability:74}}
];
