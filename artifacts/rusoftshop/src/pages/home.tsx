import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProducts, type ShopifyProduct, parsePrice, getDiscount } from '@/lib/shopify';

const categories = [
  { name: 'Microsoft Office', href: '/catalog/office', image: 'https://rusoft.shop/wp-content/uploads/2025/04/microsoft-office-logo-8b0ef31e09-seeklogo.com-1.svg', subtitle: 'Pacchetti Office', subcategories: ['Microsoft 365', 'Office 2021', 'Office 2019', 'E altri'] },
  { name: 'Microsoft Windows', href: '/catalog/windows', image: 'https://rusoft.shop/wp-content/uploads/2025/04/logowin11.svg', subtitle: 'Sistemi operativi', subcategories: ['Windows 11', 'Windows 10', 'Windows Server', 'E altri'] },
  { name: 'Antivirus', href: '/catalog/antivirus', image: 'https://rusoft.shop/wp-content/uploads/2025/04/windows-copilot-1.svg', subtitle: 'Protezione antivirus', subcategories: ['Kaspersky', 'ESET', 'Dr. Web', 'E altri'] },
  { name: 'Autodesk', href: '/catalog/autodesk', image: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png', subtitle: 'Software industriale', subcategories: ['All Apps', '3ds Max', 'AutoCAD', 'Revit', 'E altri'] },
  { name: 'Pacchetti', href: '/catalog/sets', image: 'https://rusoft.shop/wp-content/uploads/2025/04/vector1.svg', subtitle: 'Insieme si risparmia', subcategories: ['Windows 11 Pro + Office 2021', 'E altri'] },
  { name: 'Abbonamenti', href: '/catalog/subscriptions', image: 'https://rusoft.shop/wp-content/uploads/2025/04/group-5.svg', subtitle: 'Servizi digitali', subcategories: ['Adobe', 'Autodesk', 'Microsoft 365', 'E altri'] },
];

const fallbackProducts = [
  { id: '1', slug: 'windows-11-professional', name: 'Windows 11 Pro', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Pro', rating: 5.0, reviewCount: 452, price: 1990, originalPrice: 4990 },
  { id: '2', slug: 'microsoft-office-2021-pro', name: 'Microsoft Office 2021 Professional Plus', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Microsoft Office 2021', rating: 4.85, reviewCount: 572, price: 1970, originalPrice: 2790 },
  { id: '3', slug: 'windows-11-home', name: 'Windows 11 Home', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Home', rating: 4.99, reviewCount: 177, price: 1790, originalPrice: 3790 },
  { id: '4', slug: 'buy-autodesk-all-apps', name: 'Autodesk All Apps Subscription', image: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png', imageAlt: 'Autodesk All Apps', rating: 4.81, reviewCount: 27, price: 3940, originalPrice: 7880 },
  { id: '5', slug: 'microsoft-office-365-na-1-god', name: 'Office 365 Pro Plus per 1 anno', image: 'https://rusoft.shop/wp-content/uploads/2026/03/microsoft-365-2022-logo-7b23759a49-seeklogo.com_-150x150-1.png', imageAlt: 'Office 365', rating: 4.99, reviewCount: 179, price: 1790, originalPrice: 2190 },
  { id: '6', slug: 'buy-microsoft-office-2024', name: 'Microsoft Office 2024', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Microsoft Office 2024', rating: 5.0, reviewCount: 24, price: 8990, originalPrice: 16470 },
];

function shopifyToCard(p: ShopifyProduct) {
  const price = parsePrice(p.priceRange.minVariantPrice.amount);
  const compareAt = p.compareAtPriceRange?.minVariantPrice?.amount;
  const originalPrice = compareAt ? parsePrice(compareAt) : 0;
  return {
    id: p.id,
    slug: p.handle,
    name: p.title,
    image: p.images.edges[0]?.node.url ?? '',
    imageAlt: p.images.edges[0]?.node.altText ?? p.title,
    rating: 5.0,
    reviewCount: 0,
    price,
    originalPrice,
  };
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(fallbackProducts);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    getProducts(12).then((items) => {
      if (items.length > 0) setProducts(items.map(shopifyToCard));
    }).catch(() => {}).finally(() => setLoadingProducts(false));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      {/* Categorie */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorie prodotti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-3">
                <Link href={cat.href} className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                    {cat.image && <img src={cat.image} alt={cat.name} className="w-12 h-12 object-contain" />}
                  </div>
                </Link>
                <div className="flex-1">
                  <Link href={cat.href} className="font-bold text-gray-900 hover:text-[#1c64ff] transition-colors block">{cat.name}</Link>
                  <p className="text-xs text-gray-500 mt-0.5">{cat.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {cat.subcategories.map((sub) => (
                  <Link key={sub} href={cat.href} className={`text-xs px-2 py-0.5 rounded-full transition-colors ${sub === 'E altri' ? 'text-gray-400' : 'text-[#1c64ff] hover:bg-blue-50'}`}>
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ricerca */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cerca un prodotto</h2>
          <form onSubmit={handleSearch} className="relative">
            <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#1c64ff" strokeWidth="2" />
                <path d="M14 14l4 4" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Es. Windows 11, Office 2021, Autodesk..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1c64ff] focus:ring-2 focus:ring-[#1c64ff]/20 transition-all"
            />
          </form>
        </div>
      </section>

      {/* Prodotti in evidenza */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prodotti più venduti</h2>
        {loadingProducts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-2xl h-64 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </section>

      {/* Banner garanzie */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-[#1d1b20] rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: '⚡', title: 'Consegna istantanea', desc: 'Via email entro 1 minuto' },
            { icon: '🔒', title: 'Pagamento sicuro', desc: 'SSL + metodi certificati' },
            { icon: '✅', title: 'Licenze originali', desc: 'Software autentico garantito' },
            { icon: '🛟', title: 'Supporto tecnico', desc: 'Assistenza inclusa' },
          ].map((item) => (
            <div key={item.title} className="text-white">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="font-bold text-sm">{item.title}</div>
              <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
