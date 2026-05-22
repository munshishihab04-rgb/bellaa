import React, { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqItems = [
  {
    category: 'Acquisto e pagamento',
    items: [
      { q: 'Quali metodi di pagamento accettate?', a: 'Accettiamo carte di credito/debito (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, bonifico bancario e criptovalute.' },
      { q: 'Il pagamento è sicuro?', a: 'Sì. Tutte le transazioni sono protette da crittografia SSL a 256-bit e i dati della carta non vengono mai salvati sui nostri server.' },
      { q: 'Posso richiedere una fattura?', a: 'Sì, scrivi a assistenza@licenvo.com con i tuoi dati fiscali e provvediamo a emetterla entro 24 ore lavorative.' },
    ],
  },
  {
    category: 'Consegna e attivazione',
    items: [
      { q: 'Quanto tempo ci vuole per ricevere la licenza?', a: 'La consegna è digitale e avviene via email entro 1–5 minuti dalla conferma del pagamento, 24 ore su 24, 7 giorni su 7.' },
      { q: 'Non ho ricevuto la licenza. Cosa faccio?', a: 'Controlla prima la cartella spam. Se non è lì, scrivi a assistenza@licenvo.com con il numero d\'ordine e ti rispondiamo entro 30 minuti.' },
      { q: 'Come attivo la licenza?', a: 'Ricevi istruzioni dettagliate passo-passo insieme alla licenza. Il processo varia per prodotto ma è sempre guidato.' },
      { q: 'Posso installare il software su più PC?', a: 'Dipende dal tipo di licenza. Le licenze retail (es. Office) di solito sono per 1 PC. Le sottoscrizioni (es. Microsoft 365) per 1-5 dispositivi. Controlla la descrizione del prodotto.' },
    ],
  },
  {
    category: 'Garanzie e rimborsi',
    items: [
      { q: 'La licenza è originale?', a: 'Sì, vendiamo esclusivamente licenze software originali provenienti da canali ufficiali e distributori autorizzati.' },
      { q: 'Cosa succede se la chiave non funziona?', a: 'Contattaci entro 14 giorni: provvediamo immediatamente alla sostituzione o al rimborso completo, senza domande.' },
      { q: 'C\'è una garanzia?', a: 'Sì. Offriamo garanzia di conformità: se il prodotto non funziona come descritto, rimborsiamo o sostituiamo. Il supporto tecnico è incluso per tutta la durata della licenza.' },
      { q: 'Posso restituire il prodotto?', a: 'Per i prodotti digitali, il diritto di recesso di 14 giorni non si applica una volta che la licenza è stata consegnata (art. 59 Cod. Consumo). Tuttavia, se il prodotto è difettoso, siamo coperti dalla nostra garanzia commerciale.' },
    ],
  },
  {
    category: 'Supporto tecnico',
    items: [
      { q: 'Offrite supporto per l\'installazione?', a: 'Sì! Il supporto tecnico è incluso in ogni acquisto. Scrivi a assistenza@licenvo.com o chiama +39 393 684 1051.' },
      { q: 'Quali sono gli orari dell\'assistenza?', a: 'Rispondiamo via email 7 giorni su 7. Per urgenze, siamo disponibili telefonicamente dal lunedì al sabato 9:00–20:00.' },
      { q: 'Dove trovo le istruzioni per il mio prodotto?', a: 'Le istruzioni sono allegate all\'email di consegna. Puoi anche consultare la sezione Download del nostro sito o scriverci.' },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Domande frequenti</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Domande frequenti (FAQ)</h1>
        <p className="text-gray-500 mb-8">Hai una domanda? Probabilmente l'abbiamo già risposto qui sotto. Altrimenti scrivi a <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a>.</p>

        <div className="space-y-8">
          {faqItems.map((section) => (
            <div key={section.category}>
              <h2 className="text-base font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#1c64ff] rounded inline-block"></span>
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.items.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  return (
                    <div key={key} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => setOpenItem(openItem === key ? null : key)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-sm text-gray-900 pr-4">{item.q}</span>
                        <span className="text-gray-400 text-lg flex-shrink-0">{openItem === key ? '−' : '+'}</span>
                      </button>
                      {openItem === key && (
                        <div className="px-5 pb-4 bg-gray-50">
                          <p className="text-sm text-gray-600">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#1d1b20] rounded-2xl p-6 text-center text-white">
          <p className="font-bold text-lg mb-1">Non hai trovato risposta?</p>
          <p className="text-gray-400 text-sm mb-4">Il nostro team risponde entro 1 ora nei giorni lavorativi.</p>
          <a href="mailto:assistenza@licenvo.com" className="inline-block bg-[#1c64ff] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors">
            Scrivi a assistenza@licenvo.com
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
