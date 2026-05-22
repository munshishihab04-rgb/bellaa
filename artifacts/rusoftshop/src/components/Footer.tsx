import React from 'react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Catalogo</h4>
            <ul className="space-y-2">
              {[
                { label: 'Windows', href: '/catalog/windows' },
                { label: 'Office', href: '/catalog/office' },
                { label: 'Pacchetti', href: '/catalog/sets' },
                { label: 'Applicazioni Office', href: '/catalog/office-apps' },
                { label: 'Windows Server', href: '/catalog/windows-server' },
                { label: 'Autodesk', href: '/catalog/autodesk' },
                { label: 'Abbonamenti', href: '/catalog/subscriptions' },
                { label: 'Adobe', href: '/catalog/adobe' },
                { label: 'Offerte', href: '/catalog/sale' },
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
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Informazioni</h4>
            <ul className="space-y-2">
              {[
                { label: 'Articoli e guide', href: '/blog' },
                { label: 'Recensioni', href: '/reviews' },
                { label: 'Contatti', href: '/contacts' },
                { label: 'Per aziende', href: '/wholesale' },
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
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Supporto</h4>
            <ul className="space-y-2">
              {[
                { label: 'Pagamento e consegna', href: '/payment' },
                { label: 'Domande frequenti', href: '/faq' },
                { label: 'Download programmi', href: '/download' },
                { label: 'Rimborsi e resi', href: '/return' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Termini e condizioni', href: '/terms' },
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
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Contatti</h4>
            <div className="space-y-3">
              <a href="tel:+393936841051" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-blue-200 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-[#1c64ff] transition-colors">+39 393 684 1051</p>
                  <p className="text-xs text-gray-500">Assistenza clienti</p>
                </div>
              </a>
              <a href="mailto:assistenza@licenvo.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-blue-200 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-[#1c64ff] transition-colors break-all">assistenza@licenvo.com</p>
                  <p className="text-xs text-gray-500">Supporto tecnico</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Dati aziendali */}
        <div className="border border-gray-100 rounded-xl p-5 mb-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500">
            <div>
              <p className="font-bold text-gray-700 mb-1">DIGITALSOFT DI MUNSHI SHIHAB</p>
              <p>Via Aldo Pio Manuzio 24 – 40132 Bologna (BO)</p>
              <p>P.IVA: 04358941203</p>
              <p>Codice Fiscale: SHHMSH04M02Z249U</p>
              <p>REA: BO-588058</p>
            </div>
            <div>
              <p>Forma giuridica: Impresa individuale</p>
              <p>Codice ATECO: 47.40.10</p>
              <p>PEC: <a href="mailto:munshishihab@legalmail.it" className="text-[#1c64ff] hover:underline">munshishihab@legalmail.it</a></p>
              <p className="mt-2 text-gray-400">Iscrizione CCIAA: 16/03/2026 · Titolare: Shihab Munshi</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-black text-[#1c64ff]">Licenvo</span>
            <span className="text-sm text-gray-400">.com</span>
          </Link>
          <p className="text-xs text-gray-500 max-w-sm">
            Licenvo è un marchio di DIGITALSOFT DI MUNSHI SHIHAB. Tutti i software sono licenze digitali originali consegnate via email.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#6b7280" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              SSL
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#6b7280" strokeWidth="2"/>
              </svg>
              Pagamento sicuro
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">© 2024 Licenvo.com – DIGITALSOFT DI MUNSHI SHIHAB. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-gray-600">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-gray-600">Termini e Condizioni</Link>
            <Link href="/return" className="text-xs text-gray-400 hover:text-gray-600">Politica di Rimborso</Link>
            <Link href="/payment" className="text-xs text-gray-400 hover:text-gray-600">Pagamento e Consegna</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
