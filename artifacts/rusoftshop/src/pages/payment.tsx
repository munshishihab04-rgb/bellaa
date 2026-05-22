import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Pagamento e Consegna</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Pagamento e Consegna</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Metodi di pagamento accettati</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '💳', name: 'Carta di credito/debito', desc: 'Visa, Mastercard, Amex' },
                { icon: '📱', name: 'PayPal', desc: 'Pagamento sicuro' },
                { icon: '🍎', name: 'Apple Pay / Google Pay', desc: 'Pagamento rapido' },
                { icon: '🏦', name: 'Bonifico bancario', desc: 'Per importi elevati' },
                { icon: '💰', name: 'Crypto', desc: 'Bitcoin, USDT' },
                { icon: '🛡️', name: 'Pagamento rateale', desc: 'Paga in 3 rate' },
              ].map((m) => (
                <div key={m.name} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{m.icon}</div>
                  <p className="font-semibold text-sm text-gray-900">{m.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 bg-green-50 rounded-xl p-3">
              <span>🔒</span>
              <span>Tutte le transazioni sono protette da crittografia SSL e sistemi antifrode certificati.</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Consegna digitale</h2>
            <div className="space-y-4">
              {[
                { icon: '⚡', title: 'Consegna istantanea', desc: 'La licenza viene inviata via email entro 1–5 minuti dalla conferma del pagamento, 24/7 anche nei festivi.' },
                { icon: '📧', title: 'Via email', desc: 'Ricevi la chiave di attivazione o le credenziali dell\'account direttamente nella tua casella di posta. Controlla anche la cartella spam.' },
                { icon: '📋', title: 'Istruzioni incluse', desc: 'Ogni ordine include istruzioni passo-passo per l\'attivazione e il download del software.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">IVA e Fatturazione</h2>
            <p className="text-gray-600 text-sm mb-3">I prezzi visualizzati includono l'IVA al 22% (per clienti italiani) o l'aliquota applicabile nel paese di residenza UE.</p>
            <p className="text-gray-600 text-sm mb-3">Per aziende con P.IVA comunitaria: acquistando come azienda e inserendo la P.IVA, si applica il regime di inversione contabile (reverse charge) dove previsto.</p>
            <p className="text-gray-600 text-sm">Per richiedere fattura: <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
