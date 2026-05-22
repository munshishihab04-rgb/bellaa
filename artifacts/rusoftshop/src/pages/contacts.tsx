import React, { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(`https://formsubmit.co/ajax/assistenza@licenvo.com`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `[Licenvo] ${form.subject}`,
          _captcha: 'false',
        }),
      });
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header/>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" className="flex-shrink-0">
            <path d="M1 1l3 3.5L1 8" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-gray-700">Contatti</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Contatti</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-base mb-4">Assistenza clienti</h2>
              <div className="space-y-4">
                <a href="tel:+393936841051" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Telefono</p>
                    <p className="font-bold text-gray-900 group-hover:text-[#1c64ff] transition-colors">+39 393 684 1051</p>
                  </div>
                </a>

                <a href="mailto:assistenza@licenvo.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email assistenza</p>
                    <p className="font-bold text-gray-900 group-hover:text-[#1c64ff] transition-colors text-sm">assistenza@licenvo.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#1c64ff" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="#1c64ff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Orari risposta</p>
                    <p className="font-semibold text-gray-900 text-sm">Lun–Ven entro 1h</p>
                    <p className="text-xs text-gray-500">Weekend entro 4h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-base mb-3">Dati aziendali</h2>
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-bold text-gray-900">DIGITALSOFT DI MUNSHI SHIHAB</p>
                <p className="text-gray-500">Via Aldo Pio Manuzio 24</p>
                <p className="text-gray-500">40132 Bologna (BO), Italia</p>
                <div className="pt-2 border-t border-gray-100 space-y-1 text-xs">
                  <p><span className="text-gray-400">P.IVA:</span> 04358941203</p>
                  <p><span className="text-gray-400">C.F.:</span> SHHMSH04M02Z249U</p>
                  <p><span className="text-gray-400">REA:</span> BO-588058</p>
                  <p><span className="text-gray-400">PEC:</span> <a href="mailto:munshishihab@legalmail.it" className="text-[#1c64ff] hover:underline">munshishihab@legalmail.it</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="font-bold text-gray-900 text-lg mb-1">Scrivici un messaggio</h2>
            <p className="text-sm text-gray-500 mb-6">Compila il modulo e ti risponderemo al più presto.</p>

            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Messaggio inviato!</h3>
                <p className="text-gray-500 text-sm mb-6">Ti risponderemo all'indirizzo fornito entro 1 ora nei giorni lavorativi.</p>
                <button onClick={() => setStatus('idle')} className="text-[#1c64ff] text-sm font-semibold hover:underline">
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome e cognome <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Mario Rossi"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1c64ff] focus:ring-2 focus:ring-[#1c64ff]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Indirizzo email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="mario.rossi@email.it"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1c64ff] focus:ring-2 focus:ring-[#1c64ff]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Oggetto <span className="text-red-500">*</span></label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1c64ff] focus:ring-2 focus:ring-[#1c64ff]/20 transition-all bg-white appearance-none"
                  >
                    <option value="">Seleziona un argomento...</option>
                    <option value="Non ho ricevuto la licenza">Non ho ricevuto la licenza</option>
                    <option value="La chiave non funziona">La chiave non funziona</option>
                    <option value="Richiesta rimborso">Richiesta rimborso</option>
                    <option value="Informazioni pre-acquisto">Informazioni pre-acquisto</option>
                    <option value="Ordine aziendale / grossista">Ordine aziendale / grossista</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Messaggio <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Descrivi la tua richiesta nel dettaglio. Se hai già un ordine, includi il numero d'ordine..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1c64ff] focus:ring-2 focus:ring-[#1c64ff]/20 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#dc2626" strokeWidth="2"/>
                      <line x1="15" y1="9" x2="9" y2="15" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="9" y1="9" x2="15" y2="15" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Invio fallito. Prova a scrivere direttamente a <a href="mailto:assistenza@licenvo.com" className="underline font-semibold ml-1">assistenza@licenvo.com</a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 bg-[#1c64ff] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="31" strokeDashoffset="10"/>
                      </svg>
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Invia messaggio
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Trattamento dati ai sensi del{' '}
                  <Link href="/privacy" className="text-[#1c64ff] hover:underline">Regolamento UE 2016/679 (GDPR)</Link>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ rapide */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-900 text-base mb-4">Risposte rapide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { q: 'Non ho ricevuto la licenza', a: "Controlla la cartella spam. Se non c'è, scrivi a assistenza@licenvo.com con il numero d'ordine." },
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
      <Footer/>
    </div>
  );
}
