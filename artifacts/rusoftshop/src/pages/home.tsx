import React, { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const categories = [
  { name: 'Microsoft Office', href: '/catalog/office', image: 'https://rusoft.shop/wp-content/uploads/2025/04/microsoft-office-logo-8b0ef31e09-seeklogo.com-1.svg', alt: 'Microsoft Office logo', subtitle: 'Office packages', subcategories: ['Microsoft 365', 'Microsoft Office 2021', 'Microsoft Office 2019', 'And others'] },
  { name: 'Microsoft Windows', href: '/catalog/windows', image: 'https://rusoft.shop/wp-content/uploads/2025/04/logowin11.svg', alt: 'Microsoft Windows logo', subtitle: 'Operating systems', subcategories: ['Windows 11', 'Windows 10', 'Windows 8', 'Windows 7', 'Windows Server', 'And others'] },
  { name: 'Antivirus', href: '/catalog/antivirus', image: 'https://rusoft.shop/wp-content/uploads/2025/04/windows-copilot-1.svg', alt: 'Antivirus logo', subtitle: 'Antivirus protection', subcategories: ['Kaspersky', 'ESET', 'Dr. Web', 'And others'] },
  { name: 'Autodesk', href: '/catalog/autodesk', image: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png', alt: 'Autodesk logo', subtitle: 'Industrial software', subcategories: ['Autodesk All Apps', '3ds Max', 'AutoCAD', 'Civil 3D', 'Revit', 'And others'] },
  { name: 'Sets', href: '/catalog/sets', image: 'https://rusoft.shop/wp-content/uploads/2025/04/vector1.svg', alt: 'Sets logo', subtitle: 'Together cheaper', subcategories: ['Windows 11 Pro + Office 2021', 'Windows 11 Home + Office 2021', 'And others'] },
  { name: 'Subscriptions', href: '/catalog/subscriptions', image: 'https://rusoft.shop/wp-content/uploads/2025/04/group-5.svg', alt: 'Subscriptions logo', subtitle: 'Digital services', subcategories: ['Adobe', 'Autodesk', 'Acrobat', 'LitRes', 'Yandex Plus', 'And others'] },
];

const featuredProducts = [
  { id: '1', slug: 'windows-11-professional', name: 'Windows 11 Pro', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Pro product image', rating: 5.0, reviewCount: 452, price: 1990, originalPrice: 4990 },
  { id: '2', slug: 'microsoft-office-2021-pro', name: 'Microsoft Office 2021 Professional Plus', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Microsoft Office 2021', rating: 4.85, reviewCount: 572, price: 1970, originalPrice: 2790 },
  { id: '3', slug: 'windows-11-home', name: 'Windows 11 Home', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Home product image', rating: 4.99, reviewCount: 177, price: 1790, originalPrice: 3790 },
  { id: '4', slug: 'buy-autodesk-all-apps', name: 'Autodesk All Apps Subscription', image: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png', imageAlt: 'Autodesk All Apps', rating: 4.81, reviewCount: 27, price: 3940, originalPrice: 7880 },
  { id: '5', slug: 'microsoft-office-365-na-1-god', name: 'Office 365 Pro Plus for 1 year', image: 'https://rusoft.shop/wp-content/uploads/2026/03/microsoft-365-2022-logo-7b23759a49-seeklogo.com_-150x150-1.png', imageAlt: 'Office 365', rating: 4.99, reviewCount: 179, price: 1790, originalPrice: 2190 },
  { id: '6', slug: 'buy-microsoft-office-2024', name: 'Microsoft Office 2024', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Microsoft Office 2024', rating: 5.0, reviewCount: 24, price: 8990, originalPrice: 16470 },
];

const blogPosts = [
  { title: 'How to set up passwordless login in Windows 11', date: 'May 12, 2026', category: 'Blog', views: 2, image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 passwordless login', href: '/blog/passwordless-windows-11' },
  { title: 'Automatic deletion of temporary files in Windows 11', date: 'May 11, 2026', category: 'Blog', views: 1, image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Temp files deletion', href: '/blog/auto-delete-temp-files' },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-3">
                <Link href={cat.href} className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img src={cat.image} alt={cat.alt} className="w-12 h-12 object-contain" />
                  </div>
                </Link>
                <div className="flex-1">
                  <Link href={cat.href} className="font-bold text-gray-900 hover:text-[#1c64ff] transition-colors block">{cat.name}</Link>
                  <p className="text-xs text-gray-500 mt-0.5">{cat.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {cat.subcategories.map((sub) => (
                  <Link key={sub} href={cat.href} className={`text-xs px-2 py-0.5 rounded-full transition-colors ${sub === 'And others' ? 'text-gray-400' : 'text-[#1c64ff] hover:bg-blue-50'}`}>
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Search</h2>
          <form onSubmit={handleSearch} className="relative">
            <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#1c64ff" strokeWidth="2" />
                <path d="M14 14l4 4" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search the site" className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#1c64ff] transition-colors" />
          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Offers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Need help? We&apos;re always here!</h2>
            <p className="text-gray-500 mb-6">Quick resolution of any questions. Don&apos;t know what to choose? Contact us and we&apos;ll help!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="border border-gray-200 rounded-xl p-4 flex-1">
                <a href="tel:88003501032" className="font-bold text-gray-900 text-lg hover:text-[#1c64ff] transition-colors">8 (800) 350-10-32</a>
                <p className="text-sm text-gray-500 mt-1">Free call within Russia</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 flex-1">
                <a href="mailto:support@rusoft.shop" className="font-bold text-gray-900 hover:text-[#1c64ff] transition-colors">support@rusoft.shop</a>
                <p className="text-sm text-gray-500 mt-1">Technical support</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="https://rusoft.shop/wp-content/uploads/2024/11/consultation.svg" alt="Support illustration" className="w-48 h-auto" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <Link key={post.title} href={post.href} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-40 bg-gray-100">
                <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-2">{post.date} &bull; {post.category} &bull; {post.views} views</p>
                <h3 className="font-semibold text-gray-900 text-sm hover:text-[#1c64ff] transition-colors">{post.title}</h3>
              </div>
            </Link>
          ))}
          <Link href="/blog" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col items-center justify-center p-8 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <img src="https://rusoft.shop/wp-content/uploads/2024/11/blog.svg" alt="Blog" className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-600">All the most important things about software: news, articles and useful instructions.</p>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Online store of licensed software</h1>
          <div className="text-gray-600 text-sm leading-relaxed space-y-3">
            <p>rusoft.shop is an online store of electronic keys for digital products. In our store you can purchase electronic keys for operating systems, office application packages, and antivirus programs. Our customers receive fast and high-quality service, free warranty and lifetime customer support.</p>
            <p>Sincerely, the rusoft.shop team</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
