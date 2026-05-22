import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ChevronRight = () => (
  <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="flex-shrink-0">
    <path d="M1 1l3 3.5L1 8" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const paymentMethods = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#1c64ff" strokeWidth="2"/><path d="M2 10h20" stroke="#1c64ff" strokeWidth="2"/></svg>
    ),
    name: 'Carta di credito/debito',
    desc: 'Visa, Mastercard, Amex',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#1c64ff" strokeWidth="2"/><path d="M8 12s1.5 2 4 2 4-2 4-2" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/><path d="M9 9h.01M15 9h.01" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    name: 'PayPal',
    desc: 'Pagamento sicuro',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="#1c64ff" strokeWidth="2"/><path d="M12 18h.01" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    name: 'Apple Pay / Google Pay',
    desc: 'Pagamento rapido',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    name: 'Bonifico bancario',
    desc: 'Per importi elevati',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    name: 'Crypto',
    desc: 'Bitcoin, USDT',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    name: 'Pagamento rateale',
    desc: 'Paga in 3 rate',
  },
];

const deliverySteps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Consegna istantanea',
    desc: 'La licenza viene inviata via email entro 1–5 minuti dalla conferma del pagamento, 24/7 anche nei festivi.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Via email',
    desc: "Ricevi la chiave di attivazione o le credenziali dell'account direttamente nella tua casella di posta. Controlla anche la cartella spam.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="9" y1="13" x2="15" y2="13" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/><line x1="9" y1="17" x2="13" y2="17" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Istruzioni incluse',
    desc: "Ogni ordine include istruzioni passo-passo per l'attivazione e il download del software.",
  },
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <ChevronRight/>
          <span className="text-gray-700">Pagamento e Consegna</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Pagamento e Consegna</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Metodi di pagamento accettati</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {paymentMethods.map((m) => (
                <div key={m.name} className="bg-gray-50 rounded-xl p-4 text-center flex flex-col items-center">
                  <div className="mb-2">{m.icon}</div>
                  <p className="font-semibold text-sm text-gray-900">{m.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 bg-green-50 rounded-xl p-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Tutte le transazioni sono protette da crittografia SSL e sistemi antifrode certificati.</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Consegna digitale</h2>
            <div className="space-y-4">
              {deliverySteps.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">{item.icon}</div>
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
      <Footer/>
    </div>
  );
}
