import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProduct, buildCheckoutUrl, parsePrice, getDiscount, type ShopifyProduct } from '@/lib/shopify';

interface FAQItem { question: string; answer: string; }
interface Review { initial: string; email: string; date: string; product: string; text: string; rating: number; }

interface ProductData {
  name: string; brand: string; brandLogo: string; shortName: string;
  images: string[]; rating: number; reviewCount: number;
  price: number; originalPrice: number; discount: number;
  versions: { year: string; slug: string; discount?: number }[];
  platforms: string[];
  description: string; descriptionExtra: string[]; note: string;
  features: string[];
  whatYouGet: string[];
  systemRequirements: { label: string; value: string }[];
  characteristics: { label: string; value: string }[];
  faqProduct: FAQItem[];
  reviews: Review[];
  variantId?: string;
}

const staticProducts: Record<string, ProductData> = {
  'buy-autodesk-3ds-max-2026': {
    name: 'Autodesk 3ds Max 2026 Licenza in abbonamento', brand: 'AUTODESK',
    brandLogo: 'https://rusoft.shop/wp-content/uploads/2024/03/autodesk_podpiska.png', shortName: '3ds Max',
    images: ['https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg','https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp','https://rusoft.shop/wp-content/uploads/2025/08/tsifry.webp','https://rusoft.shop/wp-content/uploads/2025/08/garantiya.webp','https://rusoft.shop/wp-content/uploads/2025/08/otzyvy.webp'],
    rating: 4.9, reviewCount: 45, price: 3890, originalPrice: 4990, discount: 22,
    versions: [{ year: '2026', slug: 'buy-autodesk-3ds-max-2026', discount: 22 },{ year: '2025', slug: 'buy-autodesk-3ds-max-2025' },{ year: '2024', slug: 'buy-autodesk-3ds-max-2024' },{ year: '2023', slug: 'buy-autodesk-3ds-max-2023' },{ year: '2022', slug: 'buy-autodesk-3ds-max-2022' }],
    platforms: ['Windows', 'macOS'],
    description: 'Autodesk 3ds Max 2026 è un software professionale per la modellazione 3D, la visualizzazione e l\'animazione. Ideale per designer, architetti, professionisti della grafica e sviluppatori di videogiochi.',
    descriptionExtra: ['Con 3ds Max 2026 puoi:', 'Il software è utilizzato per la visualizzazione architettonica, il design d\'interni, i giochi e i contenuti multimediali.', 'Dopo l\'attivazione, 3ds Max funziona senza restrizioni.'],
    note: 'L\'abbonamento viene assegnato direttamente al tuo account Autodesk entro 5 minuti dall\'ordine. Puoi scaricare e usare il software da manage.autodesk.com/it.',
    features: ['creare modelli e scene 3D', 'eseguire rendering fotorealistici', 'lavorare con materiali, luci e texture', 'creare animazioni ed effetti visivi complessi'],
    whatYouGet: ['L\'abbonamento sarà assegnato all\'email indicata al checkout entro 5 minuti', 'Accesso immediato al software da manage.autodesk.com/it', 'Istruzioni passo-passo per il login e l\'utilizzo', 'Supporto tecnico incluso per tutta la durata dell\'abbonamento'],
    systemRequirements: [{ label: 'Sistema operativo', value: 'Windows 10/11 (64-bit) o macOS 12+' },{ label: 'CPU', value: 'Processore Intel o AMD multi-core 64-bit, 2.5 GHz+' },{ label: 'RAM', value: '8 GB minimo (16 GB consigliati)' },{ label: 'GPU', value: '4 GB VRAM, compatibile DirectX 11' },{ label: 'Spazio disco', value: '9 GB liberi' }],
    characteristics: [{ label: 'Sviluppatore', value: 'Autodesk' },{ label: 'Versione', value: '2026' },{ label: 'Tipo di licenza', value: 'Abbonamento (subscription)' },{ label: 'Piattaforma', value: 'Windows / macOS' },{ label: 'Lingua', value: 'Multilingua' },{ label: 'Consegna', value: 'Via email entro 5 minuti' }],
    faqProduct: [
      { question: 'Quando riceverò l\'accesso dopo il pagamento?', answer: 'L\'abbonamento viene assegnato al tuo account Autodesk entro un massimo di 5 minuti dalla conferma dell\'ordine. Riceverai una notifica all\'email indicata al checkout.' },
      { question: 'È una chiave di licenza o un abbonamento?', answer: 'Non è una chiave: è un abbonamento Autodesk che viene assegnato direttamente alla tua email. Non devi inserire nessun codice — basta accedere a manage.autodesk.com/it con il tuo account.' },
      { question: 'Avevo già un abbonamento Autodesk scaduto. Cosa succede?', answer: 'Se hai già un account Autodesk con un abbonamento scaduto, l\'abbonamento precedente verrà rinnovato automaticamente. Troverai tutto esattamente come prima, con la stessa cronologia e i tuoi file.' },
      { question: 'Come installo e uso il software?', answer: 'Dopo che l\'abbonamento è stato assegnato, accedi a manage.autodesk.com/it con la tua email, scarica l\'installer e avvia il software. Tutto funziona in cloud tramite il tuo account Autodesk.' },
    ],
    reviews: [{ initial: 'G', email: 'g***@gmail.com', date: '6 aprile 2026', product: 'Autodesk 3ds Max 2026', text: 'Abbonamento assegnato in meno di 3 minuti. Nessun problema, tutto funziona perfettamente da manage.autodesk.com.', rating: 5 },{ initial: 'N', email: 'ni***@gmail.com', date: '19 marzo 2026', product: 'Autodesk 3ds Max 2023', text: 'Avevo l\'abbonamento scaduto da mesi, si è rinnovato in automatico sulla mia email. Ottimo servizio!', rating: 5 }],
  },
  'windows-11-professional': {
    name: 'Windows 11 Pro', brand: 'MICROSOFT',
    brandLogo: 'https://rusoft.shop/wp-content/uploads/2025/04/logowin11.svg', shortName: 'Windows 11 Pro',
    images: ['https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png','https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp','https://rusoft.shop/wp-content/uploads/2025/08/tsifry.webp','https://rusoft.shop/wp-content/uploads/2025/08/garantiya.webp'],
    rating: 5.0, reviewCount: 452, price: 1990, originalPrice: 4990, discount: 60,
    versions: [{ year: '2024', slug: 'windows-11-professional' }],
    platforms: ['Windows'],
    description: 'Windows 11 Pro è l\'ultimo sistema operativo di Microsoft con funzionalità di sicurezza avanzate, nuova interfaccia e prestazioni migliorate.',
    descriptionExtra: ['Con Windows 11 Pro ottieni:', 'Il sistema operativo è progettato per utenti domestici e professionali che necessitano di massima sicurezza e produttività.'],
    note: 'L\'attivazione avviene tramite il codice prodotto inviato via email. La licenza è permanente — nessun abbonamento richiesto.',
    features: ['Sicurezza avanzata con BitLocker e TPM 2.0', 'Nuovo menu Start e barra delle applicazioni', 'Snap Layout per il multitasking', 'DirectStorage per gaming più veloce', 'Supporto app Android tramite Amazon Appstore'],
    whatYouGet: ['Codice prodotto inviato via email', 'Istruzioni di attivazione passo-passo', 'Supporto tecnico per tutta la durata della licenza'],
    systemRequirements: [{ label: 'CPU', value: '1 GHz o più veloce, 2+ core, 64-bit' },{ label: 'RAM', value: '4 GB minimo' },{ label: 'Spazio disco', value: '64 GB minimo' },{ label: 'Firmware', value: 'UEFI, Secure Boot' },{ label: 'TPM', value: 'Versione 2.0' }],
    characteristics: [{ label: 'Sviluppatore', value: 'Microsoft' },{ label: 'Versione', value: 'Professional' },{ label: 'Tipo di licenza', value: 'Chiave retail' },{ label: 'Piattaforma', value: 'Windows' },{ label: 'Lingua', value: 'Multilingua' },{ label: 'Consegna', value: 'Email (istantanea)' }],
    faqProduct: [{ question: 'Per quanto tempo è valida l\'attivazione?', answer: 'La chiave di Windows 11 Pro fornisce una licenza a vita — viene attivata una volta e rimane valida in modo permanente.' },{ question: 'Posso installarlo su più computer?', answer: 'La licenza è per 1 PC. Per più dispositivi, contattaci per soluzioni di licenza in volume.' },{ question: 'Non ho trovato risposta alla mia domanda', answer: 'Contatta il nostro supporto via email assistenza@licenvo.com e ti risponderemo entro 1 ora.' }],
    reviews: [{ initial: 'M', email: 'ma***@gmail.com', date: '10 aprile 2026', product: 'Windows 11 Pro', text: 'Eccellente! La chiave è arrivata in 30 secondi. Attivazione senza problemi. Raccomando questo store!', rating: 5 },{ initial: 'S', email: 'se***@gmail.com', date: '5 aprile 2026', product: 'Windows 11 Pro', text: 'Consegna rapida, chiave originale, funziona perfettamente. Riacquisterò.', rating: 5 }],
  },
  'microsoft-office-2021-pro': {
    name: 'Microsoft Office 2021 Professional Plus', brand: 'MICROSOFT',
    brandLogo: 'https://rusoft.shop/wp-content/uploads/2025/04/microsoft-office-logo-8b0ef31e09-seeklogo.com-1.svg', shortName: 'Office 2021',
    images: ['https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png','https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp'],
    rating: 4.85, reviewCount: 572, price: 1970, originalPrice: 2790, discount: 29,
    versions: [{ year: '2021', slug: 'microsoft-office-2021-pro' },{ year: '2024', slug: 'buy-microsoft-office-2024' }],
    platforms: ['Windows', 'macOS'],
    description: 'Microsoft Office 2021 Professional Plus — la suite completa di applicazioni per la produttività, per lavoro e studio.',
    descriptionExtra: ['Include:', 'Licenza a vita — nessun abbonamento richiesto. Funziona senza connessione internet.'],
    note: 'L\'attivazione avviene tramite il codice prodotto inviato via email.',
    features: ['Word, Excel, PowerPoint, Outlook, OneNote', 'Teams, Access, Publisher (solo Windows)', 'Licenza a vita — nessun abbonamento', 'Funziona senza internet'],
    whatYouGet: ['Codice prodotto inviato via email', 'Istruzioni di attivazione passo-passo', 'Supporto tecnico per tutta la durata della licenza'],
    systemRequirements: [{ label: 'Sistema operativo', value: 'Windows 10/11 o macOS 10.14+' },{ label: 'CPU', value: '1.6 GHz o più veloce, dual-core' },{ label: 'RAM', value: '4 GB (64-bit), 2 GB (32-bit)' },{ label: 'Spazio disco', value: '4 GB disponibili' }],
    characteristics: [{ label: 'Sviluppatore', value: 'Microsoft' },{ label: 'Versione', value: '2021 Professional Plus' },{ label: 'Tipo di licenza', value: 'Chiave retail' },{ label: 'Piattaforma', value: 'Windows / macOS' },{ label: 'Lingua', value: 'Multilingua' },{ label: 'Consegna', value: 'Email (istantanea)' }],
    faqProduct: [{ question: 'Office 2021 richiede un abbonamento?', answer: 'No, Office 2021 è un acquisto una tantum con licenza a vita. Nessun abbonamento richiesto.' },{ question: 'Posso installarlo su più computer?', answer: 'La licenza è per 1 PC o Mac. Contattaci per opzioni di licenza in volume.' }],
    reviews: [{ initial: 'K', email: 'ka***@gmail.com', date: '10 marzo 2026', product: 'Microsoft Office 2021 Professional Plus', text: 'Acquistato Office 2021 Pro Plus. Tutto funziona perfettamente. La chiave è arrivata all\'istante. Ottimo prezzo!', rating: 5 }],
  },
};

const globalFAQ: FAQItem[] = [
  { question: 'Ci sono garanzie sui prodotti?', answer: 'Tutti gli acquisti su Licenvo.com sono conformi alla normativa europea (Direttiva UE 2019/771). Per tutti i prodotti è incluso il supporto tecnico e la garanzia di conformità.' },
  { question: 'Dove posso trovare le istruzioni per un prodotto?', answer: 'Le istruzioni vengono inviate via email insieme alla licenza. Puoi anche trovare guide nella sezione Download del sito.' },
  { question: 'Quanto tempo ci vuole per ricevere il prodotto?', answer: 'I prodotti digitali vengono consegnati istantaneamente — entro 1 minuto dalla conferma del pagamento, all\'indirizzo email indicato.' },
  { question: 'Hai altre domande?', answer: 'Contatta il nostro team di supporto via email assistenza@licenvo.com o telefono +39 393 684 1051.' },
];

const howToBuySteps = [
  { icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-1.png', label: 'Clicca "Acquista ora"' },
  { icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-2.png', label: 'Inserisci la tua email' },
  { icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-3.png', label: 'Paga il tuo ordine' },
  { icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-4.png', label: 'Ricevi l\'accesso via email' },
];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 16 16" fill={s <= Math.round(rating) ? '#f59e0b' : '#e5e7eb'}>
          <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z"/>
        </svg>
      ))}
    </div>
  );
}

function shopifyToProduct(p: ShopifyProduct, slug: string): ProductData {
  const firstVariant = p.variants.edges[0]?.node;
  const price = parsePrice(p.priceRange.minVariantPrice.amount);
  const compareAt = p.compareAtPriceRange?.minVariantPrice?.amount;
  const originalPrice = compareAt ? parsePrice(compareAt) : 0;
  const discount = getDiscount(p.priceRange.minVariantPrice.amount, compareAt);

  const mf = (key: string) => p.metafields?.find(m => m?.key === key)?.value ?? '';

  const caratteristiche = mf('caratteristiche');
  const requisiti = mf('requisiti_sistema');
  const piattaforme = mf('piattaforme');
  const cosaRicevi = mf('cosa_ricevi');
  const brandLogo = mf('brand_logo');
  const faqRaw = mf('faq');

  let parsedChars: { label: string; value: string }[] = [];
  let parsedReqs: { label: string; value: string }[] = [];
  let parsedFaq: FAQItem[] = [];
  try { parsedChars = JSON.parse(caratteristiche); } catch {}
  try { parsedReqs = JSON.parse(requisiti); } catch {}
  try { parsedFaq = JSON.parse(faqRaw); } catch {}

  const isAutodesk = (p.vendor || '').toLowerCase() === 'autodesk';
  const platforms = piattaforme ? piattaforme.split(',').map(s => s.trim()) : (isAutodesk ? ['Windows', 'macOS'] : ['Windows']);

  const whatYouGet = cosaRicevi ? cosaRicevi.split('\n').filter(Boolean) : isAutodesk ? [
    'L\'abbonamento sarà assegnato all\'email indicata al checkout entro 5 minuti',
    'Accesso immediato al software da manage.autodesk.com/it',
    'Istruzioni passo-passo per il login e l\'utilizzo',
    'Supporto tecnico incluso per tutta la durata dell\'abbonamento',
  ] : [
    'Chiave di licenza inviata via email',
    'Istruzioni passo-passo per l\'attivazione',
    'Supporto tecnico incluso',
  ];

  if (parsedChars.length === 0) {
    parsedChars = isAutodesk ? [
      { label: 'Sviluppatore', value: 'Autodesk' },
      { label: 'Tipo di licenza', value: 'Abbonamento (subscription)' },
      { label: 'Piattaforma', value: platforms.join(' / ') },
      { label: 'Lingua', value: 'Multilingua' },
      { label: 'Consegna', value: 'Via email entro 5 minuti' },
    ] : [
      { label: 'Sviluppatore', value: p.vendor || '-' },
      { label: 'Piattaforma', value: platforms.join(' / ') },
      { label: 'Lingua', value: 'Multilingua' },
      { label: 'Consegna', value: 'Email (istantanea)' },
    ];
  }

  const defaultFaq = isAutodesk ? [
    { question: 'Quando riceverò l\'accesso dopo il pagamento?', answer: 'L\'abbonamento viene assegnato al tuo account Autodesk entro un massimo di 5 minuti dalla conferma dell\'ordine.' },
    { question: 'È una chiave di licenza o un abbonamento?', answer: 'Non è una chiave: è un abbonamento Autodesk assegnato direttamente alla tua email. Accedi a manage.autodesk.com/it con il tuo account.' },
    { question: 'Avevo già un abbonamento Autodesk scaduto. Cosa succede?', answer: 'L\'abbonamento precedente verrà rinnovato automaticamente sulla stessa email — ritrovi tutto come prima.' },
    { question: 'Come installo e uso il software?', answer: 'Accedi a manage.autodesk.com/it con il tuo account Autodesk, scarica l\'installer e avvia il software.' },
  ] : [
    { question: 'Quando riceverò la licenza dopo il pagamento?', answer: 'La licenza ti verrà inviata via email entro 1 minuto dal pagamento.' },
    { question: 'Se non riesco ad installarla, mi aiutate?', answer: 'Sì! Scrivi a assistenza@licenvo.com e ti aiutiamo subito.' },
  ];

  return {
    name: p.title,
    brand: (p.vendor || 'LICENVO').toUpperCase(),
    brandLogo: brandLogo || '',
    shortName: p.title.split(' ').slice(0, 3).join(' '),
    images: p.images.edges.map(e => e.node.url).filter(Boolean),
    rating: 5.0,
    reviewCount: 0,
    price,
    originalPrice,
    discount,
    versions: [],
    platforms,
    description: p.description,
    descriptionExtra: [],
    note: isAutodesk ? 'L\'abbonamento viene assegnato direttamente al tuo account Autodesk entro 5 minuti dall\'ordine. Puoi scaricare e usare il software da manage.autodesk.com/it.' : '',
    features: [],
    whatYouGet,
    systemRequirements: parsedReqs,
    characteristics: parsedChars,
    faqProduct: parsedFaq.length > 0 ? parsedFaq : defaultFaq,
    reviews: [],
    variantId: firstVariant?.id,
  };
}

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || 'windows-11-professional';

  const [product, setProduct] = useState<ProductData>(staticProducts[slug] || staticProducts['windows-11-professional']);
  const [loading, setLoading] = useState(true);
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [openGlobalFAQ, setOpenGlobalFAQ] = useState<number | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    setLoading(true);
    setActiveImage(0);
    getProduct(slug).then((shopifyProduct) => {
      if (shopifyProduct) {
        const converted = shopifyToProduct(shopifyProduct, slug);
        setProduct(converted);
        if (converted.variantId) {
          setCheckoutUrl(buildCheckoutUrl(converted.variantId));
        }
      } else {
        const fallback = staticProducts[slug] || staticProducts['windows-11-professional'];
        setProduct(fallback);
      }
    }).catch(() => {
      const fallback = staticProducts[slug] || staticProducts['windows-11-professional'];
      setProduct(fallback);
    }).finally(() => setLoading(false));
  }, [slug]);

  const tabs = [
    { id: 'description', label: 'Descrizione' },
    { id: 'characteristics', label: 'Caratteristiche' },
    { id: 'system', label: 'Requisiti di sistema' },
    { id: 'reviews', label: 'Recensioni' },
    { id: 'howtobuy', label: 'Come acquistare?' },
    { id: 'legal', label: 'Per aziende' },
  ];

  const displayedReviews = showAllReviews ? product.reviews : product.reviews.slice(0, 3);
  const images = product.images.length > 0 ? product.images : ['https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp'];

  const handleBuyNow = () => {
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">&#9654;</span>
          <Link href="/catalog" className="hover:text-gray-800">Catalogo</Link>
          <span className="text-gray-300">&#9654;</span>
          <span className="text-gray-700 truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8 space-y-6">

        {/* Main Product Card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* LEFT: Image Gallery */}
            <div className="relative flex lg:w-[380px] flex-shrink-0 bg-white p-4 gap-3">
              <div className="flex flex-col gap-2">
                {images.map((img, idx) => (
                  <button key={idx} onClick={() => setActiveImage(idx)}
                    className={`w-[60px] h-[60px] rounded-lg overflow-hidden border-2 flex-shrink-0 transition-colors bg-gray-50 ${activeImage === idx ? 'border-[#1c64ff]' : 'border-gray-200 hover:border-gray-300'}`}>
                    <img src={img} alt="" className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex-1 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden" style={{ minHeight: 260 }}>
                  {loading ? (
                    <div className="w-full h-72 bg-gray-100 animate-pulse rounded-xl" />
                  ) : (
                    <img src={images[activeImage]} alt={product.name} className="w-full h-full object-contain p-4 max-h-72" />
                  )}
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  {product.brandLogo && <img src={product.brandLogo} alt="" className="h-4 w-auto" />}
                  {product.shortName}
                </div>
              </div>
            </div>

            {/* RIGHT: Product Info */}
            <div className="flex-1 p-6 border-l border-gray-100">
              <div className="flex items-center justify-between mb-3">
                {product.brandLogo
                  ? <img src={product.brandLogo} alt={product.brand} className="h-7 w-auto" />
                  : <span className="text-sm font-bold text-gray-600">{product.brand}</span>}
                <div className="flex gap-2">
                  {product.platforms.map((p) => (
                    <span key={p} className="text-xs border border-gray-300 text-gray-600 px-2.5 py-1 rounded-lg font-medium">{p}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Disponibile
                </span>
                {product.brand === 'AUTODESK'
                  ? <span className="text-xs font-semibold text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">⏱ Assegnazione entro 5 minuti</span>
                  : <span className="text-xs text-gray-500 border border-gray-200 px-2.5 py-1 rounded-full">Garanzia di attivazione</span>
                }
              </div>

              <h1 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={product.rating} size={15} />
                {product.reviewCount > 0 && <span className="text-sm text-gray-500">{product.reviewCount} recensioni</span>}
              </div>

              {product.versions.length > 1 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.versions.map((v) => (
                    <Link key={v.slug} href={`/product/${v.slug}`}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold border transition-colors ${v.slug === slug ? 'bg-[#1d1b20] text-white border-[#1d1b20]' : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white'}`}>
                      {v.year}
                      {v.discount ? <span className={`text-xs font-bold ${v.slug === slug ? 'text-red-300' : 'text-red-500'}`}>-{v.discount}%</span> : null}
                    </Link>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#f1117e]">{product.price.toLocaleString('it-IT')} €</span>
                {product.originalPrice > 0 && (
                  <>
                    <span className="text-gray-400 text-base line-through">{product.originalPrice.toLocaleString('it-IT')} €</span>
                    <span className="bg-[#dc2626] text-white text-xs font-bold px-1.5 py-0.5 rounded">-{product.discount}%</span>
                  </>
                )}
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center gap-3 bg-[#1d1b20] text-white py-3.5 rounded-xl font-bold text-base hover:bg-gray-800 transition-colors mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Acquista ora
              </button>
              <p className="text-center text-xs text-gray-400 mb-5">Pagamento sicuro · Sostituzione o rimborso se non adatto</p>

              {/* Autodesk subscription info block */}
              {product.brand === 'AUTODESK' && (
                <div className="mb-5 rounded-xl border border-orange-200 bg-orange-50 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-orange-100 border-b border-orange-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0"><circle cx="12" cy="12" r="10" stroke="#c2410c" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#c2410c" strokeWidth="2" strokeLinecap="round"/></svg>
                    <span className="text-xs font-bold text-orange-800">Come funziona l'abbonamento Autodesk</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">📧</span>
                      <div>
                        <p className="text-xs font-bold text-orange-900">Nessuna chiave — è un abbonamento</p>
                        <p className="text-xs text-orange-800 mt-0.5">L'abbonamento viene assegnato direttamente all'email che indichi al checkout. Non ricevi un codice da inserire.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">⏱</span>
                      <div>
                        <p className="text-xs font-bold text-orange-900">Assegnazione entro 5 minuti</p>
                        <p className="text-xs text-orange-800 mt-0.5">Dopo la conferma del pagamento, l'abbonamento viene attivato sul tuo account Autodesk entro un massimo di 5 minuti.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">🔄</span>
                      <div>
                        <p className="text-xs font-bold text-orange-900">Abbonamento scaduto? Si rinnova in automatico</p>
                        <p className="text-xs text-orange-800 mt-0.5">Se avevi già un abbonamento Autodesk scaduto sulla stessa email, verrà rinnovato automaticamente — ritrovi tutto come prima.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">🌐</span>
                      <div>
                        <p className="text-xs font-bold text-orange-900">Scarica e usa da manage.autodesk.com/it</p>
                        <p className="text-xs text-orange-800 mt-0.5">Accedi con il tuo account Autodesk su <a href="https://manage.autodesk.com/it" target="_blank" rel="noopener noreferrer" className="underline font-semibold">manage.autodesk.com/it</a> per scaricare, installare e gestire il software.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-5">
                <p className="text-sm font-bold text-gray-900 mb-3">{product.brand === 'AUTODESK' ? 'Cosa riceverai entro 5 minuti' : 'Cosa riceverai subito dopo il pagamento'}</p>
                <ul className="space-y-2">
                  {product.whatYouGet.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#1c64ff] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{idx + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                {product.faqProduct.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-sm text-gray-900 pr-3">{faq.question}</span>
                      <span className="text-gray-400 text-lg flex-shrink-0">{openFAQ === idx ? '−' : '+'}</span>
                    </button>
                    {openFAQ === idx && (
                      <div className="px-4 pb-3 bg-gray-50">
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Come acquistare */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-[#1c64ff] rounded"></div>
            <h2 className="text-xl font-bold text-gray-900">Come acquistare?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {howToBuySteps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
                <img src={step.icon} alt={step.label} className="w-20 h-20 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <span className="text-sm font-medium text-gray-700">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-100">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id ? 'text-[#1c64ff] border-[#1c64ff]' : 'text-gray-600 border-transparent hover:text-gray-900'}`}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="max-w-3xl">
                <p className="font-bold text-gray-900 mb-3">{product.description}</p>
                {product.descriptionExtra[0] && <p className="text-gray-600 mb-2 text-sm">{product.descriptionExtra[0]}</p>}
                {product.features.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {product.features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-1.5">
                        <span className="text-gray-600 flex-shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                )}
                {product.descriptionExtra.slice(1).map((p, i) => <p key={i} className="text-gray-600 text-sm mb-2">{p}</p>)}
                {product.note && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-900"><strong>Importante:</strong></p>
                    <p className="text-sm text-gray-600 mt-1">{product.note}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'characteristics' && (
              <div className="max-w-2xl">
                {product.characteristics.length > 0 ? (
                  <table className="w-full">
                    <tbody>
                      {product.characteristics.map((c, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4 text-sm font-medium text-gray-600 w-1/2">{c.label}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">{c.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : <p className="text-gray-500 text-sm">Caratteristiche non disponibili per questo prodotto.</p>}
              </div>
            )}

            {activeTab === 'system' && (
              <div className="max-w-2xl">
                {product.systemRequirements.length > 0 ? (
                  <table className="w-full">
                    <tbody>
                      {product.systemRequirements.map((r, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4 text-sm font-medium text-gray-600 w-1/3">{r.label}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">{r.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : <p className="text-gray-500 text-sm">Requisiti di sistema non disponibili per questo prodotto.</p>}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Recensioni del prodotto</h2>
                <p className="text-sm text-gray-500 mb-6">Solo chi ha acquistato il prodotto può lasciare una recensione. Così creiamo una valutazione onesta.</p>
                {product.reviews.length > 0 ? (
                  <>
                    <div className="flex items-center gap-8 mb-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-gray-900">{product.rating}</div>
                        <div className="flex justify-center mt-1"><StarRating rating={product.rating} size={16} /></div>
                        {product.reviewCount > 0 && <div className="text-sm text-gray-500 mt-1">{product.reviewCount} recensioni</div>}
                      </div>
                    </div>
                    <div className="space-y-4">
                      {displayedReviews.map((review, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl p-4">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 flex-shrink-0">{review.initial}</div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <StarRating rating={review.rating} size={12} />
                                <span className="text-sm text-gray-600">{review.email}</span>
                                <span className="text-xs text-gray-400">{review.date}</span>
                              </div>
                              <p className="text-xs text-[#1c64ff] mt-0.5">{review.product}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700">{review.text}</p>
                          <div className="mt-3 bg-gray-50 rounded-lg p-3">
                            <p className="text-xs font-semibold text-gray-700 mb-1">✓ Team Licenvo</p>
                            <p className="text-xs text-gray-600">Grazie per aver scelto Licenvo! Siamo felici che l'attivazione sia andata a buon fine.</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {product.reviews.length > 3 && !showAllReviews && (
                      <button onClick={() => setShowAllReviews(true)} className="mt-4 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Mostra altre
                      </button>
                    )}
                  </>
                ) : (
                  <div className="text-center py-10 text-gray-400">
                    <p>Ancora nessuna recensione per questo prodotto.</p>
                    <p className="text-sm mt-1">Sii il primo ad acquistarlo!</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'howtobuy' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-1 bg-[#1c64ff] rounded"></div>
                  <h2 className="text-xl font-bold text-gray-900">Come acquistare?</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {howToBuySteps.map((step, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
                      <img src={step.icon} alt={step.label} className="w-20 h-20 object-contain" />
                      <span className="text-sm font-medium text-gray-700">{step.label}</span>
                    </div>
                  ))}
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Domande frequenti</h2>
                <div className="space-y-2">
                  {globalFAQ.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button onClick={() => setOpenGlobalFAQ(openGlobalFAQ === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50">
                        <span className="font-medium text-sm text-gray-900">{faq.question}</span>
                        <span className="text-gray-400 text-lg ml-2">{openGlobalFAQ === idx ? '−' : '+'}</span>
                      </button>
                      {openGlobalFAQ === idx && <div className="px-4 pb-3 bg-gray-50"><p className="text-sm text-gray-600">{faq.answer}</p></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Per aziende e professionisti</h2>
                <p className="text-gray-600 mb-4">Lavoriamo con aziende e professionisti e forniamo tutti i documenti necessari: fattura elettronica, P.IVA, regime reverse charge per clienti UE.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><span className="font-medium text-gray-700">Telefono:</span><a href="tel:+393936841051" className="text-[#1c64ff] hover:underline">+39 393 684 1051</a></div>
                  <div className="flex items-center gap-3"><span className="font-medium text-gray-700">Email:</span><a href="mailto:assistenza@licenvo.com" className="text-[#1c64ff] hover:underline">assistenza@licenvo.com</a></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Global FAQ */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Domande frequenti</h2>
          <div className="space-y-2">
            {globalFAQ.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenGlobalFAQ(openGlobalFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-sm text-gray-900">{faq.question}</span>
                  <span className="text-gray-400 text-lg ml-2">{openGlobalFAQ === idx ? '−' : '+'}</span>
                </button>
                {openGlobalFAQ === idx && (
                  <div className="px-4 pb-3 bg-gray-50">
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
