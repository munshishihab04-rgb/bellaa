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

      {/* ===== HERO BANNER ===== */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e2d5a] to-[#1c64ff] text-white overflow-hidden relative">
        {/* sfondo decorativo */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full"/>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white/3 rounded-full -translate-y-1/2"/>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Testo */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                Licenze digitali originali · Consegna in 1 minuto
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                Software Microsoft,<br/>
                <span className="text-[#60a5fa]">Autodesk e Adobe</span><br/>
                fino al <span className="text-yellow-300">–90%</span>
              </h1>
              <p className="text-white/70 text-base md:text-lg mb-6 max-w-md mx-auto md:mx-0">
                Licenze digitali originali consegnate via email entro 1 minuto dall'acquisto. Garanzia soddisfatti o rimborsati.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/catalog" className="bg-white text-[#1c64ff] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm text-center">
                  Scopri il catalogo
                </Link>
                <Link href="/catalog/windows" className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors text-sm text-center">
                  Windows 11 da 19,90 €
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex items-center gap-6 mt-8 justify-center md:justify-start flex-wrap">
                {[
                  { value: '10.000+', label: 'clienti soddisfatti' },
                  { value: '4,9/5', label: 'valutazione media' },
                  { value: '< 1 min', label: 'tempo di consegna' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-black text-white">{s.value}</p>
                    <p className="text-xs text-white/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prodotti in evidenza nel hero */}
            <div className="flex-shrink-0 w-full md:w-72">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 space-y-3">
                <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">Più venduti oggi</p>
                {[
                  { name: 'Windows 11 Pro', price: '19,90 €', slug: 'windows-11-professional', badge: '-60%' },
                  { name: 'Office 2021 Pro Plus', price: '19,70 €', slug: 'microsoft-office-2021-pro', badge: '-30%' },
                  { name: 'Office 365 Pro Plus', price: '17,90 €', slug: 'microsoft-office-365-na-1-god', badge: '-18%' },
                ].map((item) => (
                  <Link key={item.slug} href={`/product/${item.slug}`} className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3 py-2.5 group">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-60">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm font-medium text-white">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-yellow-400 text-yellow-900 font-bold px-1.5 py-0.5 rounded">{item.badge}</span>
                      <span className="text-sm font-bold text-white">{item.price}</span>
                    </div>
                  </Link>
                ))}
                <Link href="/catalog" className="block text-center text-xs text-white/60 hover:text-white pt-1 transition-colors">
                  Vedi tutto il catalogo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorie */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorie prodotti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-3">
                <Link href={cat.href} className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                    {cat.image && <img src={cat.image} alt={cat.name} className="w-12 h-12 object-contain"/>}
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
                <circle cx="9" cy="9" r="7" stroke="#1c64ff" strokeWidth="2"/>
                <path d="M14 14l4 4" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/>
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
              <div key={i} className="bg-white rounded-2xl h-64 animate-pulse"/>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product}/>
            ))}
          </div>
        )}
      </section>

      {/* Banner garanzie — SVG al posto di emoji */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-[#1d1b20] rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Consegna istantanea',
              desc: 'Via email entro 1 minuto',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="#60a5fa" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Pagamento sicuro',
              desc: 'SSL + metodi certificati',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2">
                  <path d="M9 12l2 2 4-4" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3z" stroke="#60a5fa" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Licenze originali',
              desc: 'Software autentico garantito',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2">
                  <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: 'Supporto tecnico',
              desc: 'Assistenza inclusa',
            },
          ].map((item) => (
            <div key={item.title} className="text-white">
              {item.icon}
              <div className="font-bold text-sm">{item.title}</div>
              <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
}
