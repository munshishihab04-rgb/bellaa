'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const categoryData: Record<string, {
  title: string;
  description: string;
  products: {name: string;slug: string;image: string;imageAlt: string;price: number;originalPrice: number;rating: number;reviewCount: number;}[];
}> = {
  windows: {
    title: 'Microsoft Windows',
    description: 'Licensed Windows operating systems for home and business use.',
    products: [
    { name: 'Windows 11 Pro', slug: 'windows-11-professional', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Pro product image', price: 1990, originalPrice: 4990, rating: 5.0, reviewCount: 452 },
    { name: 'Windows 11 Home', slug: 'windows-11-home', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Home product image', price: 1790, originalPrice: 3790, rating: 4.99, reviewCount: 177 },
    { name: 'Windows 10 Pro', slug: 'windows-10-pro', image: 'https://rusoft.shop/wp-content/uploads/2026/03/vinda10.png', imageAlt: 'Windows 10 Pro product image', price: 1490, originalPrice: 3490, rating: 4.95, reviewCount: 320 }]

  },
  office: {
    title: 'Microsoft Office',
    description: 'Licensed Microsoft Office packages for work and study.',
    products: [
    { name: 'Microsoft Office 2021 Professional Plus', slug: 'microsoft-office-2021-pro', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Microsoft Office 2021 Professional Plus product image', price: 1970, originalPrice: 2790, rating: 4.85, reviewCount: 572 },
    { name: 'Office 365 Pro Plus for 1 year', slug: 'microsoft-office-365-na-1-god', image: 'https://rusoft.shop/wp-content/uploads/2026/03/microsoft-365-2022-logo-7b23759a49-seeklogo.com_-150x150-1.png', imageAlt: 'Office 365 Pro Plus for 1 year product image', price: 1790, originalPrice: 2190, rating: 4.99, reviewCount: 179 },
    { name: 'Microsoft Office 2024', slug: 'buy-microsoft-office-2024', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Microsoft Office 2024 product image', price: 8990, originalPrice: 16470, rating: 5.0, reviewCount: 24 }]

  },
  autodesk: {
    title: 'Autodesk',
    description: 'Professional Autodesk software for design, engineering and visualization.',
    products: [
    { name: 'Autodesk 3ds Max 2026 License Subscription', slug: 'buy-autodesk-3ds-max-2026', image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg', imageAlt: 'Autodesk 3ds Max 2026 product image', price: 3890, originalPrice: 4990, rating: 4.9, reviewCount: 45 },
    { name: 'Autodesk All Apps Subscription', slug: 'buy-autodesk-all-apps', image: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png', imageAlt: 'Autodesk All Apps Subscription product image', price: 3940, originalPrice: 7880, rating: 4.81, reviewCount: 27 },
    { name: 'Autodesk 3ds Max 2022 License Subscription', slug: 'buy-autodesk-3ds-max-2022', image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg', imageAlt: 'Autodesk 3ds Max 2022 product image', price: 2790, originalPrice: 0, rating: 4.8, reviewCount: 5 }]

  },
  adobe: {
    title: 'Adobe',
    description: 'Adobe Creative Cloud and other Adobe software subscriptions.',
    products: [
    { name: 'Adobe Creative Cloud 1 Year', slug: 'adobe-creative-cloud-12', image: 'https://rusoft.shop/wp-content/uploads/2025/04/windows-copilot-1.svg', imageAlt: 'Adobe Creative Cloud 1 Year product image', price: 4990, originalPrice: 9990, rating: 4.9, reviewCount: 38 }]

  },
  antivirus: {
    title: 'Antivirus',
    description: 'Licensed antivirus software to protect your devices.',
    products: [
    { name: 'Kaspersky Internet Security 1 Year', slug: 'kaspersky-internet-security', image: 'https://rusoft.shop/wp-content/uploads/2025/04/windows-copilot-1.svg', imageAlt: 'Kaspersky Internet Security 1 Year product image', price: 990, originalPrice: 1990, rating: 4.8, reviewCount: 120 }]

  },
  sets: {
    title: 'Sets',
    description: 'Bundled software packages at discounted prices.',
    products: [
    { name: 'Windows 11 Pro + Office 2021', slug: 'windows-11-pro-office-2021', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Pro + Office 2021 bundle product image', price: 2990, originalPrice: 5990, rating: 5.0, reviewCount: 89 }]

  },
  subscriptions: {
    title: 'Subscriptions',
    description: 'Digital service subscriptions for entertainment and productivity.',
    products: [
    { name: 'Adobe Creative Cloud 1 Year', slug: 'adobe-creative-cloud-12', image: 'https://rusoft.shop/wp-content/uploads/2025/04/windows-copilot-1.svg', imageAlt: 'Adobe Creative Cloud 1 Year subscription product image', price: 4990, originalPrice: 9990, rating: 4.9, reviewCount: 38 }]

  },
  sale: {
    title: 'Sale',
    description: 'Special discounts and limited-time offers.',
    products: [
    { name: 'Windows 11 Pro', slug: 'windows-11-professional', image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', imageAlt: 'Windows 11 Pro on sale product image', price: 1490, originalPrice: 4990, rating: 5.0, reviewCount: 452 },
    { name: 'Microsoft Office 2021 Professional Plus', slug: 'microsoft-office-2021-pro', image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', imageAlt: 'Microsoft Office 2021 Professional Plus on sale product image', price: 1490, originalPrice: 2790, rating: 4.85, reviewCount: 572 }]

  }
};

interface CategoryPageProps {
  params: {slug: string;};
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const slug = params.slug;
  const category = categoryData[slug] || categoryData['windows'];
  const [sortBy, setSortBy] = useState('popular');

  const sortedProducts = [...category.products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  });

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">&#9654;</span>
          <Link href="/catalog" className="hover:text-gray-800">Catalog</Link>
          <span className="text-gray-300">&#9654;</span>
          <span className="text-gray-700">{category.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{category.title}</h1>
            <p className="text-gray-500 text-sm mt-1">{category.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#1c64ff]">
              
              <option value="popular">Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {sortedProducts.map((product) => {
            const discount = product.originalPrice > 0 ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
            return (
              <div key={product.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col hover:shadow-md transition-shadow">
                <Link href={`/product/${product.slug}`} className="block mb-3">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                    <Image src={product.image} alt={product.imageAlt} fill className="object-contain p-2" />
                  </div>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) =>
                    <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill={s <= Math.round(product.rating) ? '#f59e0b' : '#e5e7eb'}>
                        <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{product.reviewCount}</span>
                </div>
                <Link href={`/product/${product.slug}`} className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2 hover:text-[#1c64ff] transition-colors flex-1">
                  {product.name}
                </Link>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#f1117e] font-bold">{product.price.toLocaleString('ru-RU')} rub.</span>
                      {discount > 0 && <span className="bg-[#dc2626] text-white text-xs font-bold px-1 rounded">-{discount}%</span>}
                    </div>
                    {product.originalPrice > 0 &&
                    <span className="text-gray-400 text-xs line-through">{product.originalPrice.toLocaleString('ru-RU')} rub.</span>
                    }
                  </div>
                  <Link href={`/product/${product.slug}`} className="bg-[#1d1b20] text-white rounded-xl p-2 hover:bg-gray-700 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>);

          })}
        </div>
      </div>

      <Footer />
    </div>);

}