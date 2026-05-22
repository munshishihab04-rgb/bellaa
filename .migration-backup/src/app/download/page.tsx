'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const downloadCategories = [
{
  name: 'Office',
  href: '/download/office',
  count: 28,
  icon: 'https://rusoft.shop/wp-content/uploads/2025/04/microsoft-office-logo-8b0ef31e09-seeklogo.com-1.svg',
  iconAlt: 'Microsoft Office logo',
  bgColor: '#fff'
},
{
  name: 'Office applications',
  href: '/download/office-apps',
  count: 33,
  icon: 'https://rusoft.shop/wp-content/uploads/2025/04/windows-copilot-1.svg',
  iconAlt: 'Office applications logo',
  bgColor: '#fff'
},
{
  name: 'Autodesk',
  href: '/download/autodesk',
  count: 25,
  icon: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png',
  iconAlt: 'Autodesk logo',
  bgColor: '#fff'
},
{
  name: 'Windows 11',
  href: '/download/windows-11',
  count: 6,
  icon: 'https://rusoft.shop/wp-content/uploads/2025/04/logowin11.svg',
  iconAlt: 'Windows 11 logo',
  bgColor: '#fff'
},
{
  name: 'Windows 10',
  href: '/download/windows-10',
  count: 5,
  icon: 'https://rusoft.shop/wp-content/uploads/2026/03/vinda10.png',
  iconAlt: 'Windows 10 logo',
  bgColor: '#fff'
},
{
  name: 'Windows 7',
  href: '/download/windows-7',
  count: 6,
  icon: 'https://rusoft.shop/wp-content/uploads/2024/01/6677712439-1.jpg',
  iconAlt: 'Windows 7 logo',
  bgColor: '#fff'
},
{
  name: 'Windows 8.1',
  href: '/download/windows-8',
  count: 3,
  icon: 'https://rusoft.shop/wp-content/uploads/2024/01/logo-windows-1.png',
  iconAlt: 'Windows 8.1 logo',
  bgColor: '#fff'
},
{
  name: 'Windows server',
  href: '/download/windows-server',
  count: 8,
  icon: 'https://rusoft.shop/wp-content/uploads/2026/03/vinda-server-logo-1.png',
  iconAlt: 'Windows Server logo',
  bgColor: '#fff'
}];


const quickLinks = [
{ label: 'Microsoft Office', href: '/download/office' },
{ label: 'Office programs', href: '/download/office-apps' },
{ label: 'Autodesk programs', href: '/download/autodesk' },
{ label: 'Microsoft Windows 11', href: '/download/windows-11' },
{ label: 'Microsoft Windows 10', href: '/download/windows-10' },
{ label: 'Microsoft Windows 7', href: '/download/windows-7' },
{ label: 'Microsoft Windows 8.1', href: '/download/windows-8' },
{ label: 'Windows server', href: '/download/windows-server' }];


export default function DownloadPage() {
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

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">RuSoft Download Center</h1>
            <p className="text-gray-500 mb-6">Everything is as simple as possible! For your convenience, we&apos;ve categorized all the distributions.</p>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) =>
              <Link
                key={link.label}
                href={link.href}
                className="text-sm border border-gray-200 rounded-full px-3 py-1 text-gray-600 hover:border-[#1c64ff] hover:text-[#1c64ff] transition-colors">
                
                  {link.label}
                </Link>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://rusoft.shop/wp-content/uploads/2024/11/blog.svg"
              alt="Download center illustration"
              width={220}
              height={180}
              className="w-52 h-auto" />
            
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Search for products</h2>
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
              placeholder="Search the site"
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#1c64ff] transition-colors" />
            
          </form>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {downloadCategories.map((cat) =>
            <Link
              key={cat.name}
              href={cat.href}
              className="relative bg-[#f6f7fa] rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-md transition-shadow group">
              
                {/* Product count badge */}
                <span className="absolute top-3 right-3 bg-[#6d28d9] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {cat.count} products
                </span>

                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden">
                  <Image
                  src={cat.icon}
                  alt={cat.iconAlt}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain" />
                
                </div>

                {/* Name + arrow */}
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#1c64ff] transition-colors">{cat.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 group-hover:text-[#1c64ff] transition-colors">Go to category →</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}