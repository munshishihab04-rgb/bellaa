import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Contatti</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Contatti</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Assistenza clienti</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefono</p>
                  <a href="tel:+393936841051" className="font-bold text-gray-900 text-lg hover:text-[#1c64ff] transition-colors">+39 393 684 1051</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email assistenza</p>
                  <a href="mailto:assistenza@licenvo.com" className="font-bold text-gray-900 hover:text-[#1c64ff] transition-colors">assistenza@licenvo.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Dati aziendali</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-bold text-gray-900">DIGITALSOFT DI MUNSHI SHIHAB</p>
              <p>Via Aldo Pio Manuzio 24</p>
              <p>40132 Bologna (BO), Italia</p>
              <div className="pt-2 border-t border-gray-100 space-y-1">
                <p><span className="text-gray-500">P.IVA:</span> 04358941203</p>
                <p><span className="text-gray-500">Cod. Fiscale:</span> SHHMSH04M02Z249U</p>
                <p><span className="text-gray-500">REA:</span> BO-588058</p>
                <p><span className="text-gray-500">PEC:</span> <a href="mailto:munshishihab@legalmail.it" className="text-[#1c64ff] hover:underline">munshishihab@legalmail.it</a></p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:col-span-2">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Domande frequenti prima di contattarci</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { q: 'Non ho ricevuto la licenza', a: 'Controlla la cartella spam. Se non c\'è, scrivi a assistenza@licenvo.com con il numero d\'ordine.' },
                { q: 'La chiave non funziona', a: 'Contattaci subito: sostituiamo il prodotto o rimborsiamo completamente, senza domande.' },
                { q: 'Tempi di risposta', a: 'Rispondiamo via email entro 1 ora nei giorni lavorativi, entro 4 ore nel weekend.' },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-2">{item.q}</p>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
