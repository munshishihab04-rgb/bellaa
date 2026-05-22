import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Termini e Condizioni di Vendita</h1>
          <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: maggio 2024 · Conformi al Codice del Consumo (D.Lgs. 206/2005) e alla Direttiva UE 2019/771</p>

          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">1. Venditore</h2>
              <p><strong>DIGITALSOFT DI MUNSHI SHIHAB</strong><br />
              Via Aldo Pio Manuzio 24, 40132 Bologna (BO), Italia<br />
              P.IVA: 04358941203 · REA: BO-588058<br />
              Email: <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a> · Tel: +39 393 684 1051</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">2. Prodotti e Descrizioni</h2>
              <p>Licenvo.com vende licenze software digitali originali (chiavi di attivazione, account). Tutte le descrizioni dei prodotti, prezzi e disponibilità sono accurati al momento della pubblicazione. Ci riserviamo il diritto di correggere eventuali errori.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">3. Prezzi e Pagamento</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Tutti i prezzi sono espressi in Euro (€) e includono l'IVA applicabile</li>
                <li>Il pagamento avviene al momento dell'ordine tramite i metodi disponibili (carta di credito/debito, PayPal, altri)</li>
                <li>La transazione è protetta da crittografia SSL</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">4. Consegna</h2>
              <p>Essendo prodotti digitali, la consegna avviene via email all'indirizzo indicato in fase d'ordine, solitamente entro 1–5 minuti dalla conferma del pagamento. In caso di ritardi, contattare <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a>.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">5. Diritto di Recesso (Art. 52–58 Codice del Consumo)</h2>
              <p>In conformità all'art. 59, lett. l) del D.Lgs. 206/2005, il diritto di recesso <strong>non si applica</strong> ai contenuti digitali forniti su supporto non materiale la cui esecuzione sia iniziata con l'accordo espresso del consumatore e con la sua accettazione della perdita del diritto di recesso.</p>
              <p className="mt-2">Accettando l'ordine e richiedendo la consegna immediata della licenza, il consumatore rinuncia espressamente al diritto di recesso ai sensi dell'art. 59 lett. l).</p>
              <p className="mt-2"><strong>Eccezione:</strong> se la licenza risulta non funzionante o difforme dalla descrizione, si applica la garanzia di conformità (vedi art. 6).</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">6. Garanzia di Conformità</h2>
              <p>In caso di prodotto non funzionante o non conforme alla descrizione:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Contattaci entro <strong>14 giorni</strong> dal ricevimento a <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a></li>
                <li>Provvederemo alla sostituzione del prodotto o al rimborso completo</li>
                <li>La garanzia non copre problemi causati da uso improprio o incompatibilità hardware non dichiarata</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">7. Limitazione di Responsabilità</h2>
              <p>Licenvo.com non è responsabile per danni indiretti, perdita di dati, perdita di profitti derivanti dall'uso o dall'impossibilità di usare il software acquistato. La responsabilità massima è limitata al prezzo pagato per il prodotto.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">8. Legge Applicabile e Foro Competente</h2>
              <p>I presenti Termini sono regolati dalla legge italiana. Per le controversie con consumatori si applica il Regolamento UE n. 524/2013 sulla risoluzione online delle controversie (piattaforma ODR: <a href="https://ec.europa.eu/consumers/odr" className="text-[#1c64ff] hover:underline" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>). Il foro competente per le controversie è quello di Bologna, salvo diversa disposizione di legge a tutela del consumatore.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">9. Contatti</h2>
              <p>Per qualsiasi questione: <a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a> · Tel: <a href="tel:+393936841051" className="text-[#1c64ff] hover:underline">+39 393 684 1051</a></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
