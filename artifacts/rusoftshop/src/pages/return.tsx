import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReturnPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="flex-shrink-0"><path d="M1 1l3 3.5L1 8" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-gray-700">Rimborsi e Resi</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Politica di Rimborso e Reso</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Condizioni per il Rimborso</h2>
            <p className="text-gray-600 mb-4">Garantiamo la qualità di tutti i prodotti venduti. Se riscontri problemi con l'attivazione o il prodotto non funziona come descritto, provvediamo a sostituzione o rimborso completo.</p>
            <div className="space-y-4">
              {[
                { title: 'Rimborso garantito se:', items: ['La licenza non funziona o non è valida', 'Il prodotto è diverso da quanto descritto', 'La consegna non avviene entro 30 minuti dal pagamento'], ok: true },
                { title: 'Il rimborso non si applica se:', items: ['La chiave è stata già attivata correttamente', 'Il problema dipende da incompatibilità hardware non dichiarata', 'Il prodotto è stato usato e poi si decide di non volerlo'], ok: false },
              ].map((section) => (
                <div key={section.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Come richiedere un rimborso</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Contattaci', desc: 'Scrivi a assistenza@licenvo.com o chiama +39 393 684 1051 entro 14 giorni dall\'acquisto.' },
                { step: '2', title: 'Fornisci i dettagli', desc: 'Indica il numero d\'ordine, la descrizione del problema e allegha uno screenshot se possibile.' },
                { step: '3', title: 'Risoluzione rapida', desc: 'Valutiamo il caso e, se approvato, procediamo con sostituzione o rimborso entro 24 ore.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1c64ff] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0f7ff] border border-[#1c64ff]/20 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Diritto di recesso (UE)</h2>
            <p className="text-sm text-gray-700">In conformità all'art. 59, lett. l) del D.Lgs. 206/2005, il diritto di recesso di 14 giorni non si applica ai contenuti digitali (licenze software) la cui esecuzione è già iniziata con l'esplicito consenso del consumatore. Tuttavia, in caso di prodotto non conforme, si applica la nostra garanzia commerciale sopra descritta. Per info: <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
