import React from 'react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Catalog</h4>
            <ul className="space-y-2">
              {[
                { label: 'Windows', href: '/catalog/windows' },
                { label: 'Office', href: '/catalog/office' },
                { label: 'Sets', href: '/catalog/sets' },
                { label: 'Office applications', href: '/catalog/office-apps' },
                { label: 'Windows Server', href: '/catalog/windows-server' },
                { label: 'Autodesk', href: '/catalog/autodesk' },
                { label: 'Subscriptions', href: '/catalog/subscriptions' },
                { label: 'Adobe', href: '/catalog/adobe' },
                { label: 'Sale', href: '/catalog/sale' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Information</h4>
            <ul className="space-y-2">
              {[
                { label: 'Articles and instructions', href: '/blog' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Vacancies', href: '/work' },
                { label: 'Contacts', href: '/contacts' },
                { label: 'For legal entities', href: '/wholesale' },
                { label: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Additionally</h4>
            <ul className="space-y-2">
              {[
                { label: 'Payment and delivery', href: '/payment' },
                { label: 'Frequently asked questions', href: '/faq' },
                { label: 'Download programs', href: '/download' },
                { label: 'Exchange and return', href: '/return' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="border border-gray-200 rounded-xl p-4 mb-4">
              <a href="tel:88003501032" className="font-bold text-gray-900 text-base hover:text-[#1c64ff] transition-colors">
                8 (800) 350-10-32
              </a>
              <p className="text-sm text-gray-500 mt-1">Free call within Russia</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <a href="mailto:support@rusoft.shop" className="font-bold text-gray-900 text-sm hover:text-[#1c64ff] transition-colors">
                support@rusoft.shop
              </a>
              <p className="text-sm text-gray-500 mt-1">Technical support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link href="/">
            <img src="https://rusoft.shop/wp-content/uploads/2026/02/logotip.svg" alt="RuSoft Shop" className="h-8 w-auto" />
          </Link>
          <p className="text-xs text-gray-500 max-w-xs">
            Verified internet resource, domain name identifier{' '}
            <a href="https://www.reg.ru/whois/?dname=rusoft.shop" className="text-[#1c64ff] hover:underline" target="_blank" rel="noopener noreferrer">
              DO16552615-GMO. Registrar of Domain Names REG.RU LLC
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.reg.ru/" target="_blank" rel="noopener noreferrer">
              <img src="https://rusoft.shop/wp-content/uploads/2024/11/footer_logo1-1.svg" alt="REG.RU" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://rusoft.shop/wp-content/uploads/2024/11/footer_logo2-1.svg" alt="Cloudflare" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://yookassa.ru/" target="_blank" rel="noopener noreferrer">
              <img src="https://rusoft.shop/wp-content/uploads/2024/11/footer_logo3-1.svg" alt="YooKassa" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">Rusoft &copy; 2020</p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-gray-600">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-gray-600">User Agreement</Link>
            <Link href="/offer" className="text-xs text-gray-400 hover:text-gray-600">Offer Agreement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
