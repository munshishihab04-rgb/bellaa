import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Per aziende</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Per aziende e professionisti</h1>
        <p className="text-gray-500 mb-8">Licenvo offre prezzi dedicati, fatturazione ufficiale e supporto prioritario per aziende, studi professionali e PA.</p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '📄', title: 'Fattura ufficiale', desc: 'Emettiamo fattura elettronica con P.IVA italiana. Supporto reverse charge per aziende UE.' },
              { icon: '💼', title: 'Licenze volume', desc: 'Sconti dedicati per acquisti multipli. Richiedi un preventivo personalizzato.' },
              { icon: '🛟', title: 'Supporto prioritario', desc: 'Account manager dedicato e SLA garantiti per i clienti business.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
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
              <a href="mailto:assistenza@licenvo.com" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-900">assistenza@licenvo.com</p>
                  <p className="text-sm text-gray-500">Risposta garantita entro 4 ore lavorative</p>
                </div>
              </a>
              <a href="tel:+393936841051" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-900">+39 393 684 1051</p>
                  <p className="text-sm text-gray-500">Lun–Sab 9:00–20:00</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
