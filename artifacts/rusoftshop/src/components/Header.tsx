import React, { useState } from 'react';
import { Link } from 'wouter';
import { useCart } from '@shopify/hydrogen-react';
import { useCartUI } from '@/context/CartContext';

export default function Header() {
  const [showCatalog, setShowCatalog] = useState(false);
  const { totalQuantity } = useCart();
  const { toggleCart } = useCartUI();

  const catalogCategories = [
    { name: 'Microsoft Office', href: '/catalog/office' },
    { name: 'Microsoft Windows', href: '/catalog/windows' },
    { name: 'Autodesk', href: '/catalog/autodesk' },
    { name: 'Adobe', href: '/catalog/adobe' },
    { name: 'Antivirus', href: '/catalog/antivirus' },
    { name: 'Pacchetti', href: '/catalog/sets' },
    { name: 'Abbonamenti', href: '/catalog/subscriptions' },
    { name: 'Offerte', href: '/catalog/sale' },
  ];

  return (
    <>
      <div className="bg-[#1d1b20] text-white text-sm py-2 px-4 flex items-center justify-center">
        <span>🔒 Consegna istantanea via email · Supporto tecnico incluso · Licenze originali garantite</span>
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-black text-[#1c64ff] tracking-tight">Licenvo</span>
            <span className="text-xs text-gray-400 font-medium hidden sm:block">.com</span>
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
              Catalogo
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
                Informazioni
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-xl border border-gray-100 w-52 z-50 hidden group-hover:block">
                <Link href="/blog" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Articoli e guide</Link>
                <Link href="/reviews" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Recensioni</Link>
                <Link href="/contacts" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Contatti</Link>
                <Link href="/wholesale" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Per aziende</Link>
              </div>
            </div>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">Blog</Link>
            <Link href="/download" className="text-sm font-medium text-gray-700 hover:text-gray-900">Download</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-gray-900">FAQ</Link>
          </nav>

          {/* Cart button — opens drawer */}
          <button onClick={toggleCart} className="flex items-center gap-2 ml-auto hover:opacity-80 transition-opacity">
            <div className="relative">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                <path d="M1 1h3l2 10h12l2-8H6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="19" r="1.5" fill="#111827" />
                <circle cx="18" cy="19" r="1.5" fill="#111827" />
              </svg>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#1c64ff] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
                  {totalQuantity}
                </span>
              )}
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-[#1c64ff] text-xs font-semibold">{totalQuantity > 0 ? totalQuantity : ''}</div>
              <div className="text-sm font-medium text-gray-800">Carrello</div>
            </div>
          </button>
        </div>

        {showCatalog && <div className="fixed inset-0 z-40" onClick={() => setShowCatalog(false)} />}
      </header>
    </>
  );
}
