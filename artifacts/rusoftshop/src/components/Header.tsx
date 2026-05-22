import React, { useState } from 'react';
import { Link } from 'wouter';

export default function Header() {
  const [cartCount] = useState(0);
  const [showCatalog, setShowCatalog] = useState(false);

  const catalogCategories = [
    { name: 'Microsoft Office', href: '/catalog/office' },
    { name: 'Microsoft Windows', href: '/catalog/windows' },
    { name: 'Autodesk', href: '/catalog/autodesk' },
    { name: 'Adobe', href: '/catalog/adobe' },
    { name: 'Antivirus', href: '/catalog/antivirus' },
    { name: 'Sets', href: '/catalog/sets' },
    { name: 'Subscriptions', href: '/catalog/subscriptions' },
    { name: 'Sale', href: '/catalog/sale' },
  ];

  return (
    <>
      <div className="bg-[#1d1b20] text-white text-sm py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://rusoft.shop/wp-content/uploads/2025/03/banner-left-r7.png" alt="R7 Office" className="h-5 w-auto" />
          <span className="hidden sm:inline">Evaluate all the advantages of R7-Office</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://rusoft.shop/wp-content/uploads/2025/03/rusoft_r7.svg" alt="R7 Office logo" className="h-4 w-auto" />
        </div>
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            <img src="https://rusoft.shop/wp-content/uploads/2026/02/logotip.svg" alt="RuSoft Shop" className="h-10 w-auto" />
          </Link>

          <div className="relative">
            <button
              onClick={() => setShowCatalog(!showCatalog)}
              className="flex items-center gap-2 bg-[#1d1b20] text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <rect width="18" height="2" rx="1" fill="white" />
                <rect y="6" width="18" height="2" rx="1" fill="white" />
                <rect y="12" width="18" height="2" rx="1" fill="white" />
              </svg>
              Catalog
            </button>

            {showCatalog && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-xl border border-gray-100 w-64 z-50">
                {catalogCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 text-sm font-medium text-gray-800"
                    onClick={() => setShowCatalog(false)}
                  >
                    {cat.name}
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M1 1l4 4-4 4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-5 flex-1">
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1">
                Information
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl border border-gray-100 w-52 z-50 hidden group-hover:block">
                <Link href="/blog" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Articles &amp; Instructions</Link>
                <Link href="/reviews" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Reviews</Link>
                <Link href="/contacts" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Contacts</Link>
                <Link href="/wholesale" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">For Legal Entities</Link>
              </div>
            </div>
            <Link href="/work" className="text-sm font-medium text-gray-700 hover:text-gray-900">Vacancies</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">Blog</Link>
            <Link href="/download" className="text-sm font-medium text-gray-700 hover:text-gray-900">Download Programs</Link>
          </nav>

          <Link href="/cart" className="flex items-center gap-2 ml-auto">
            <div className="relative">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                <path d="M1 1h3l2 10h12l2-8H6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="19" r="1.5" fill="#111827" />
                <circle cx="18" cy="19" r="1.5" fill="#111827" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#1c64ff] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-[#1c64ff] text-xs font-semibold">{cartCount}</div>
              <div className="text-sm font-medium text-gray-800">Cart</div>
            </div>
          </Link>
        </div>

        {showCatalog && <div className="fixed inset-0 z-40" onClick={() => setShowCatalog(false)} />}
      </header>
    </>
  );
}
