import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChevronRight = () => (
  <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="flex-shrink-0">
    <path d="M1 1l3 3.5L1 8" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <ChevronRight/>
          <span className="text-gray-700">Per aziende</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Per aziende e professionisti</h1>
        <p className="text-gray-500 mb-8">Licenvo offre prezzi dedicati, fatturazione ufficiale e supporto prioritario per aziende, studi professionali e PA.</p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="9" y1="13" x2="15" y2="13" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="9" y1="17" x2="13" y2="17" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Fattura ufficiale',
                desc: 'Emettiamo fattura elettronica con P.IVA italiana. Supporto reverse charge per aziende UE.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#1c64ff" strokeWidth="2"/>
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="12" x2="12" y2="16" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="10" y1="14" x2="14" y2="14" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Licenze volume',
                desc: 'Sconti dedicati per acquisti multipli. Richiedi un preventivo personalizzato.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" stroke="#1c64ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Supporto prioritario',
                desc: 'Account manager dedicato e SLA garantiti per i clienti business.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Dati per la fatturazione</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {[
                ['Ragione sociale', 'DIGITALSOFT DI MUNSHI SHIHAB'],
                ['P.IVA', '04358941203'],
                ['Codice Fiscale', 'SHHMSH04M02Z249U'],
                ['REA', 'BO-588058'],
                ['Indirizzo', 'Via Aldo Pio Manuzio 24, 40132 Bologna (BO)'],
                ['PEC', 'munshishihab@legalmail.it'],
                ['Codice SDI', 'Da richiedere via email'],
                ['Regime fiscale', 'Ordinario'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-2">
                  <span className="text-gray-500 w-36 flex-shrink-0">{label}:</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contattaci per un preventivo</h2>
            <div className="space-y-3">
              <a href="mailto:assistenza@licenvo.com" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">assistenza@licenvo.com</p>
                  <p className="text-sm text-gray-500">Risposta garantita entro 4 ore lavorative</p>
                </div>
              </a>
              <a href="tel:+393936841051" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">+39 393 684 1051</p>
                  <p className="text-sm text-gray-500">Lun–Sab 9:00–20:00</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
