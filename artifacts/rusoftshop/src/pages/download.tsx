import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const downloadCategories = [
  { name: 'Office', href: '/download/office', count: 28, icon: 'https://rusoft.shop/wp-content/uploads/2025/04/microsoft-office-logo-8b0ef31e09-seeklogo.com-1.svg', iconAlt: 'Microsoft Office logo' },
  { name: 'Autodesk', href: '/download/autodesk', count: 25, icon: 'https://rusoft.shop/wp-content/uploads/2024/02/0e6d1d244bf344b638b90c2d675cdc8e-e1708184574767.png', iconAlt: 'Autodesk logo' },
  { name: 'Windows 11', href: '/download/windows-11', count: 6, icon: 'https://rusoft.shop/wp-content/uploads/2025/04/logowin11.svg', iconAlt: 'Windows 11 logo' },
  { name: 'Windows 10', href: '/download/windows-10', count: 5, icon: 'https://rusoft.shop/wp-content/uploads/2026/03/vinda10.png', iconAlt: 'Windows 10 logo' },
  { name: 'Windows 7', href: '/download/windows-7', count: 6, icon: 'https://rusoft.shop/wp-content/uploads/2024/01/6677712439-1.jpg', iconAlt: 'Windows 7 logo' },
  { name: 'Windows Server', href: '/download/windows-server', count: 8, icon: 'https://rusoft.shop/wp-content/uploads/2026/03/vinda-server-logo-1.png', iconAlt: 'Windows Server logo' },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Download Programs</h1>
            <p className="text-gray-500">Free and official download links for all supported software products.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {downloadCategories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center">
                <img src={cat.icon} alt={cat.iconAlt} className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{cat.name}</p>
                <p className="text-xs text-gray-400">{cat.count} programs</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
