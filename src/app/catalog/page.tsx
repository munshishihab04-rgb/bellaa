'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

const allProducts = [
{
  id: '1',
  slug: 'windows-11-professional',
  name: 'Windows 11 Pro',
  image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png',
  imageAlt: 'Windows 11 Pro product image',
  rating: 5.0,
  reviewCount: 452,
  price: 1990,
  originalPrice: 4990,
  category: 'windows'
},
{
  id: '2',
  slug: 'microsoft-office-2021-pro',
  name: 'Microsoft Office 2021 Professional Plus',
  image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png',
  imageAlt: 'Microsoft Office 2021 Professional Plus product image',
  rating: 4.85,
  reviewCount: 572,
  price: 1970,
  originalPrice: 2790,
  category: 'office'
},
{
  id: '3',
  slug: 'windows-11-home',
  name: 'Windows 11 Home',
  image: 'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png',
  imageAlt: 'Windows 11 Home product image',
  rating: 4.99,
  reviewCount: 177,
  price: 1790,
  originalPrice: 3790,
  category: 'windows'
},
{
  id: '4',
  slug: 'buy-autodesk-all-apps',
  name: 'Autodesk All Apps Subscription',
  image: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png',
  imageAlt: 'Autodesk All Apps Subscription product image',
  rating: 4.81,
  reviewCount: 27,
  price: 3940,
  originalPrice: 7880,
  category: 'autodesk'
},
{
  id: '5',
  slug: 'microsoft-office-365-na-1-god',
  name: 'Office 365 Pro Plus for 1 year',
  image: 'https://rusoft.shop/wp-content/uploads/2026/03/microsoft-365-2022-logo-7b23759a49-seeklogo.com_-150x150-1.png',
  imageAlt: 'Office 365 Pro Plus for 1 year product image',
  rating: 4.99,
  reviewCount: 179,
  price: 1790,
  originalPrice: 2190,
  category: 'office'
},
{
  id: '6',
  slug: 'buy-microsoft-office-2024',
  name: 'Microsoft Office 2024',
  image: 'https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png',
  imageAlt: 'Microsoft Office 2024 product image',
  rating: 5.0,
  reviewCount: 24,
  price: 8990,
  originalPrice: 16470,
  category: 'office'
},
{
  id: '7',
  slug: 'buy-autodesk-3ds-max-2026',
  name: 'Autodesk 3ds Max 2026 License Subscription',
  image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg',
  imageAlt: 'Autodesk 3ds Max 2026 License Subscription product image',
  rating: 4.9,
  reviewCount: 45,
  price: 3890,
  originalPrice: 4990,
  category: 'autodesk'
},
{
  id: '8',
  slug: 'buy-autodesk-3ds-max-2022',
  name: 'Autodesk 3ds Max 2022 License Subscription',
  image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg',
  imageAlt: 'Autodesk 3ds Max 2022 License Subscription product image',
  rating: 4.8,
  reviewCount: 5,
  price: 2790,
  originalPrice: 0,
  category: 'autodesk'
}];


const categoryFilters = [
{ id: 'all', label: 'All' },
{ id: 'windows', label: 'Windows' },
{ id: 'office', label: 'Office' },
{ id: 'autodesk', label: 'Autodesk' },
{ id: 'adobe', label: 'Adobe' },
{ id: 'antivirus', label: 'Antivirus' }];


export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts?.filter((p) => {
    const matchesCategory = activeFilter === 'all' || p?.category === activeFilter;
    const matchesSearch = p?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Catalog</span>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Software Catalog</h1>

        {/* Filters + Search */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-wrap gap-2 flex-1">
            {categoryFilters?.map((f) =>
            <button
              key={f?.id}
              onClick={() => setActiveFilter(f?.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeFilter === f?.id ?
              'bg-[#111827] text-white' :
              'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
              }>
              
                {f?.label}
              </button>
            )}
          </div>
          <div className="relative w-full sm:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#9ca3af" strokeWidth="2" />
              <path d="M14 14l4 4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#1c64ff]" />
            
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts?.map((product) =>
          <ProductCard key={product?.id} {...product} />
          )}
        </div>

        {filteredProducts?.length === 0 &&
        <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No products found</p>
            <p className="text-sm mt-2">Try changing your search or filter</p>
          </div>
        }
      </div>
      <Footer />
    </div>);

}