import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProducts, type ShopifyProduct, parsePrice } from '@/lib/shopify';

const fallbackProducts = [
  { id: '1', slug: 'windows-11-professional', name: 'Windows 11 Pro', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Pro', rating: 5.0, reviewCount: 452, price: 1990, originalPrice: 4990, category: 'windows' },
  { id: '2', slug: 'microsoft-office-2021-pro', name: 'Microsoft Office 2021 Professional Plus', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Office 2021', rating: 4.85, reviewCount: 572, price: 1970, originalPrice: 2790, category: 'office' },
  { id: '3', slug: 'windows-11-home', name: 'Windows 11 Home', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Home', rating: 4.99, reviewCount: 177, price: 1790, originalPrice: 3790, category: 'windows' },
  { id: '4', slug: 'buy-autodesk-all-apps', name: 'Autodesk All Apps Subscription', image: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png', imageAlt: 'Autodesk All Apps', rating: 4.81, reviewCount: 27, price: 3940, originalPrice: 7880, category: 'autodesk' },
  { id: '5', slug: 'microsoft-office-365-na-1-god', name: 'Office 365 Pro Plus per 1 anno', image: 'https://rusoft.shop/wp-content/uploads/2026/03/microsoft-365-2022-logo-7b23759a49-seeklogo.com_-150x150-1.png', imageAlt: 'Office 365', rating: 4.99, reviewCount: 179, price: 1790, originalPrice: 2190, category: 'office' },
  { id: '6', slug: 'buy-microsoft-office-2024', name: 'Microsoft Office 2024', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Office 2024', rating: 5.0, reviewCount: 24, price: 8990, originalPrice: 16470, category: 'office' },
  { id: '7', slug: 'buy-autodesk-3ds-max-2026', name: 'Autodesk 3ds Max 2026 License Subscription', image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg', imageAlt: '3ds Max 2026', rating: 4.9, reviewCount: 45, price: 3890, originalPrice: 4990, category: 'autodesk' },
  { id: '8', slug: 'buy-autodesk-3ds-max-2022', name: 'Autodesk 3ds Max 2022 License Subscription', image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg', imageAlt: '3ds Max 2022', rating: 4.8, reviewCount: 5, price: 2790, originalPrice: 0, category: 'autodesk' },
];

const categoryFilters = [
  { id: 'all', label: 'Tutti' },
  { id: 'windows', label: 'Windows' },
  { id: 'office', label: 'Office' },
  { id: 'autodesk', label: 'Autodesk' },
  { id: 'adobe', label: 'Adobe' },
  { id: 'antivirus', label: 'Antivirus' },
];

function guessCategory(p: ShopifyProduct): string {
  const t = (p.title + ' ' + p.tags.join(' ')).toLowerCase();
  if (t.includes('windows')) return 'windows';
  if (t.includes('office') || t.includes('365')) return 'office';
  if (t.includes('autodesk') || t.includes('3ds') || t.includes('autocad')) return 'autodesk';
  if (t.includes('adobe')) return 'adobe';
  if (t.includes('antivirus') || t.includes('kaspersky') || t.includes('eset')) return 'antivirus';
  return 'other';
}

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(50).then((items) => {
      if (items.length > 0) {
        setProducts(items.map((p) => ({
          id: p.id,
          slug: p.handle,
          name: p.title,
          image: p.images.edges[0]?.node.url ?? '',
          imageAlt: p.images.edges[0]?.node.altText ?? p.title,
          rating: 5.0,
          reviewCount: 0,
          price: parsePrice(p.priceRange.minVariantPrice.amount),
          originalPrice: parsePrice(p.compareAtPriceRange?.minVariantPrice?.amount ?? '0'),
          category: guessCategory(p),
          variantId: p.variants.edges[0]?.node.id ?? undefined,
        })));
      }
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Catalogo</span>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Catalogo software</h1>
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-wrap gap-2 flex-1">
            {categoryFilters.map((f) => (
              <button key={f.id} onClick={() => setActiveFilter(f.id)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${activeFilter === f.id ? 'bg-[#111827] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#9ca3af" strokeWidth="2" />
              <path d="M14 14l4 4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Cerca prodotti..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#1c64ff]" />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="bg-white rounded-2xl h-52 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => <ProductCard key={product.id} {...product} />)}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">Nessun prodotto trovato</p>
            <p className="text-sm mt-2">Prova a cambiare la ricerca o il filtro</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
