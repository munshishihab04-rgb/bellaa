import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: maggio 2024 · In conformità al Regolamento UE 2016/679 (GDPR)</p>

          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. Titolare del Trattamento</h2>
              <p><strong>DIGITALSOFT DI MUNSHI SHIHAB</strong><br />
              Via Aldo Pio Manuzio 24, 40132 Bologna (BO), Italia<br />
              P.IVA: 04358941203 · CF: SHHMSH04M02Z249U · REA: BO-588058<br />
              Email: <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a><br />
              PEC: <a href="mailto:munshishihab@legalmail.it" className="text-[#1c64ff] hover:underline">munshishihab@legalmail.it</a></p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. Dati Raccolti</h2>
              <p>Raccogliamo i seguenti dati personali:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Nome e cognome (per la fatturazione)</li>
                <li>Indirizzo email (per la consegna della licenza e comunicazioni)</li>
                <li>Dati di pagamento (gestiti da processori certificati PCI-DSS)</li>
                <li>Indirizzo IP e dati di navigazione (cookie tecnici)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. Finalità e Base Giuridica</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-50"><th className="text-left py-2 px-3 font-semibold text-gray-700 border border-gray-200">Finalità</th><th className="text-left py-2 px-3 font-semibold text-gray-700 border border-gray-200">Base giuridica</th></tr></thead>
                  <tbody>
                    {[
                      ['Esecuzione dell\'ordine e consegna licenza', 'Esecuzione contrattuale (Art. 6.1.b GDPR)'],
                      ['Fatturazione e obblighi fiscali', 'Obbligo legale (Art. 6.1.c GDPR)'],
                      ['Supporto tecnico post-vendita', 'Esecuzione contrattuale (Art. 6.1.b GDPR)'],
                      ['Newsletter e offerte (solo con consenso)', 'Consenso (Art. 6.1.a GDPR)'],
                      ['Prevenzione frodi e sicurezza', 'Legittimo interesse (Art. 6.1.f GDPR)'],
                    ].map(([fin, base], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-3 border border-gray-200">{fin}</td>
                        <td className="py-2 px-3 border border-gray-200">{base}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. Conservazione dei Dati</h2>
              <p>I dati vengono conservati per il tempo strettamente necessario:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Dati contabili e fiscali: 10 anni (obbligo di legge)</li>
                <li>Dati per supporto tecnico: 3 anni dall'ultimo contatto</li>
                <li>Cookie tecnici: sessione / max 12 mesi</li>
                <li>Dati marketing (con consenso): fino alla revoca del consenso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. Diritti dell'Interessato (Art. 15–22 GDPR)</h2>
              <p>Hai diritto a:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Accesso</strong> ai tuoi dati personali</li>
                <li><strong>Rettifica</strong> di dati inesatti</li>
                <li><strong>Cancellazione</strong> ("diritto all'oblio")</li>
                <li><strong>Limitazione</strong> del trattamento</li>
                <li><strong>Portabilità</strong> dei dati</li>
                <li><strong>Opposizione</strong> al trattamento</li>
                <li><strong>Revoca del consenso</strong> in qualsiasi momento</li>
                <li><strong>Reclamo</strong> all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it)</li>
              </ul>
              <p className="mt-3">Per esercitare i tuoi diritti: <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a></p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. Trasferimento Dati Extra-UE</h2>
              <p>I dati potrebbero essere trasferiti a fornitori di servizi (es. Shopify Inc., USA) che garantiscono un livello di protezione adeguato mediante Standard Contractual Clauses (SCC) approvate dalla Commissione Europea.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. Cookie</h2>
              <p>Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione di terze parti senza consenso esplicito.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
