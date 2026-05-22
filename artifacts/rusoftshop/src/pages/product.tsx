import React, { useState } from 'react';
import { Link, useParams } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItem { question: string; answer: string; }
interface Review { initial: string; email: string; date: string; product: string; text: string; rating: number; }

const products: Record<string, { name: string; brand: string; brandLogo: string; images: string[]; rating: number; reviewCount: number; price: number; originalPrice: number; discount: number; versions: {year: string;slug: string;discount?: number;}[]; platforms: string[]; description: string; features: string[]; whatYouGet: string[]; systemRequirements: {label: string;value: string;}[]; characteristics: {label: string;value: string;}[]; faqProduct: FAQItem[]; reviews: Review[]; }> = {
  'buy-autodesk-3ds-max-2026': {
    name: 'Autodesk 3ds Max 2026 License Subscription', brand: 'AUTODESK', brandLogo: 'https://rusoft.shop/wp-content/uploads/2024/03/autodesk_podpiska.png',
    images: ['https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg', 'https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp', 'https://rusoft.shop/wp-content/uploads/2025/08/tsifry.webp', 'https://rusoft.shop/wp-content/uploads/2025/08/garantiya.webp'],
    rating: 4.9, reviewCount: 45, price: 3890, originalPrice: 4990, discount: 22,
    versions: [{ year: '2026', slug: 'buy-autodesk-3ds-max-2026', discount: 22 }, { year: '2022', slug: 'buy-autodesk-3ds-max-2022' }],
    platforms: ['Windows', 'macOS'],
    description: 'Autodesk 3ds Max 2026 is a program for 3D modeling, visualization, and animation. Suitable for designers, architects, graphics professionals, and game developers.',
    features: ['Create 3D models and scenes', 'Perform photorealistic rendering', 'Work with materials, light and textures', 'Create animations and complex visual effects'],
    whatYouGet: ['A ready-made account with access, login and password sent to your email', 'Step-by-step instructions for logging in and setting up', 'Support and performance guarantee for the entire period of use'],
    systemRequirements: [{ label: 'OS', value: 'Windows 10/11 (64-bit) or macOS 12+' }, { label: 'CPU', value: '64-bit Intel or AMD multi-core processor, 2.5 GHz+' }, { label: 'RAM', value: '8 GB minimum (16 GB recommended)' }, { label: 'GPU', value: '4 GB VRAM, DirectX 11 compatible' }, { label: 'Storage', value: '9 GB free disk space' }],
    characteristics: [{ label: 'Developer', value: 'Autodesk' }, { label: 'Version', value: '2026' }, { label: 'License type', value: 'Subscription' }, { label: 'Platform', value: 'Windows / macOS' }, { label: 'Language', value: 'Multilingual' }, { label: 'Delivery', value: 'Email (instant)' }],
    faqProduct: [{ question: 'When will I receive my account after payment?', answer: 'Your account will be emailed to you within 1 minute of payment. You can download and activate the program immediately.' }, { question: "If I can't install it, will you help?", answer: 'Yes! Our technical support team is available 9:00–21:00 MSK and will help you with installation and activation.' }],
    reviews: [{ initial: 'G', email: 'y-***@gmail.com', date: 'April 6, 2026', product: 'Autodesk 3ds Max 2026', text: 'Thank you for the fast processing of my order and support. The license key arrived instantly!', rating: 5 }, { initial: 'N', email: 'ni***@yandex.ru', date: 'March 19, 2026', product: 'Autodesk 3ds Max 2023', text: 'I have been using Autodesk 3ds Max for a short time and I really like it. There were no problems with the purchase.', rating: 5 }],
  },
  'buy-autodesk-3ds-max-2022': {
    name: 'Autodesk 3ds Max 2022 License Subscription', brand: 'AUTODESK', brandLogo: 'https://rusoft.shop/wp-content/uploads/2024/03/autodesk_podpiska.png',
    images: ['https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg', 'https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp'],
    rating: 4.8, reviewCount: 5, price: 2790, originalPrice: 0, discount: 0,
    versions: [{ year: '2026', slug: 'buy-autodesk-3ds-max-2026', discount: 22 }, { year: '2022', slug: 'buy-autodesk-3ds-max-2022' }],
    platforms: ['Windows', 'macOS'],
    description: 'Autodesk 3ds Max 2022 — a proven solution for 3D modeling and visualization. Suitable for specialists who value stability and reliability.',
    features: ['Create 3D models and scenes', 'Perform photorealistic rendering', 'Work with materials, light and textures', 'Create animations and complex visual effects'],
    whatYouGet: ['A ready-made account with access, login and password sent to your email', 'Step-by-step instructions for logging in and setting up', 'Support and performance guarantee for the entire period of use'],
    systemRequirements: [{ label: 'OS', value: 'Windows 10 (64-bit)' }, { label: 'CPU', value: '64-bit Intel or AMD multi-core processor, 2.5 GHz+' }, { label: 'RAM', value: '8 GB minimum (16 GB recommended)' }, { label: 'GPU', value: '4 GB VRAM, DirectX 11 compatible' }],
    characteristics: [{ label: 'Developer', value: 'Autodesk' }, { label: 'Version', value: '2022' }, { label: 'License type', value: 'Subscription' }, { label: 'Platform', value: 'Windows / macOS' }, { label: 'Language', value: 'Multilingual' }, { label: 'Delivery', value: 'Email (instant)' }],
    faqProduct: [{ question: 'When will I receive my account after payment?', answer: 'Your account will be emailed to you within 1 minute of payment. You can download and activate the program immediately.' }],
    reviews: [{ initial: 'A', email: 'an***@yandex.ru', date: 'March 15, 2026', product: 'Autodesk 3ds Max 2024', text: 'Bought 3ds Max 2024 here — everything went great! Payment was fast, the key arrived by email. Activation without problems. Great service!', rating: 5 }],
  },
  'windows-11-professional': {
    name: 'Windows 11 Pro', brand: 'MICROSOFT', brandLogo: 'https://rusoft.shop/wp-content/uploads/2025/04/logowin11.svg',
    images: ['https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png', 'https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp', 'https://rusoft.shop/wp-content/uploads/2025/08/tsifry.webp', 'https://rusoft.shop/wp-content/uploads/2025/08/garantiya.webp'],
    rating: 5.0, reviewCount: 452, price: 1990, originalPrice: 4990, discount: 60,
    versions: [{ year: '2024', slug: 'windows-11-professional' }],
    platforms: ['Windows'],
    description: 'Windows 11 Pro is the latest operating system from Microsoft with advanced security features, new interface, and improved performance.',
    features: ['Advanced security with BitLocker and TPM 2.0', 'New Start menu and taskbar design', 'Snap Layouts for multitasking', 'DirectStorage for faster gaming', 'Android app support via Amazon Appstore'],
    whatYouGet: ['A product key sent to your email', 'Step-by-step activation instructions', 'Technical support for the entire period of use'],
    systemRequirements: [{ label: 'CPU', value: '1 GHz or faster with 2+ cores on 64-bit processor' }, { label: 'RAM', value: '4 GB minimum' }, { label: 'Storage', value: '64 GB minimum' }, { label: 'Firmware', value: 'UEFI, Secure Boot capable' }, { label: 'TPM', value: 'Trusted Platform Module version 2.0' }],
    characteristics: [{ label: 'Developer', value: 'Microsoft' }, { label: 'Version', value: 'Professional' }, { label: 'License type', value: 'Retail key' }, { label: 'Platform', value: 'Windows' }, { label: 'Language', value: 'Multilingual' }, { label: 'Delivery', value: 'Email (instant)' }],
    faqProduct: [{ question: 'What are the security benefits of Windows 11 Pro?', answer: 'Windows 11 Pro offers advanced security features like BitLocker drive encryption, malware protection, built-in Windows Defender antivirus, and TPM 2.0 support.' }, { question: 'How long is the activation valid for?', answer: 'The Windows 11 Pro key provides a lifetime license — it is activated once and remains valid permanently.' }],
    reviews: [{ initial: 'M', email: 'ma***@gmail.com', date: 'April 10, 2026', product: 'Windows 11 Pro', text: 'Excellent! Key arrived in 30 seconds. Activated without any issues. Highly recommend this store!', rating: 5 }, { initial: 'S', email: 'se***@yandex.ru', date: 'April 5, 2026', product: 'Windows 11 Pro', text: 'Fast delivery, genuine key, works perfectly. Will buy again.', rating: 5 }],
  },
  'microsoft-office-2021-pro': {
    name: 'Microsoft Office 2021 Professional Plus', brand: 'MICROSOFT', brandLogo: 'https://rusoft.shop/wp-content/uploads/2025/04/microsoft-office-logo-8b0ef31e09-seeklogo.com-1.svg',
    images: ['https://rusoft.shop/wp-content/uploads/2024/01/microsoft-office-logo.png', 'https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp'],
    rating: 4.85, reviewCount: 572, price: 1970, originalPrice: 2790, discount: 29,
    versions: [{ year: '2021', slug: 'microsoft-office-2021-pro' }, { year: '2024', slug: 'buy-microsoft-office-2024' }],
    platforms: ['Windows', 'macOS'],
    description: 'Microsoft Office 2021 Professional Plus — a comprehensive suite of productivity applications for work and study.',
    features: ['Word, Excel, PowerPoint, Outlook, OneNote', 'Teams, Access, Publisher (Windows only)', 'Lifetime license — no subscription required', 'Works without internet connection'],
    whatYouGet: ['A product key sent to your email', 'Step-by-step activation instructions', 'Technical support for the entire period of use'],
    systemRequirements: [{ label: 'OS', value: 'Windows 10/11 or macOS 10.14+' }, { label: 'CPU', value: '1.6 GHz or faster, 2-core' }, { label: 'RAM', value: '4 GB (64-bit), 2 GB (32-bit)' }, { label: 'Storage', value: '4 GB available disk space' }],
    characteristics: [{ label: 'Developer', value: 'Microsoft' }, { label: 'Version', value: '2021 Professional Plus' }, { label: 'License type', value: 'Retail key' }, { label: 'Platform', value: 'Windows / macOS' }, { label: 'Language', value: 'Multilingual' }, { label: 'Delivery', value: 'Email (instant)' }],
    faqProduct: [{ question: 'Does Office 2021 require a subscription?', answer: 'No, Office 2021 is a one-time purchase with a lifetime license. No ongoing subscription is required.' }, { question: 'Can I install on multiple computers?', answer: 'The license is for 1 PC or Mac. Contact us for volume licensing options.' }],
    reviews: [{ initial: 'K', email: 'ka***@gmail.com', date: 'March 10, 2026', product: 'Microsoft Office 2021 Professional Plus', text: 'Bought Office 2021 Pro Plus. Everything works perfectly. The key was delivered instantly. Great price!', rating: 5 }],
  },
};

const globalFAQ: FAQItem[] = [
  { question: 'Are there any guarantees for the products?', answer: 'All purchases on our website are made in accordance with Federal Law No. 54-FZ. Lifetime technical support is provided for all products purchased on our website.' },
  { question: 'How long will it take for the goods to arrive by mail?', answer: 'Digital products are delivered instantly — within 1 minute of payment confirmation to your email address.' },
  { question: 'Any questions left?', answer: 'Contact our support team via online chat, phone 8 (800) 350-10-32 (free within Russia), or email support@rusoft.shop.' },
];

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || 'windows-11-professional';
  const product = products[slug] || products['windows-11-professional'];

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [openGlobalFAQ, setOpenGlobalFAQ] = useState<number | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'characteristics', label: 'Characteristics' },
    { id: 'system', label: 'System requirements' },
    { id: 'reviews', label: `Reviews (${product.reviewCount})` },
    { id: 'howtobuy', label: 'How to buy?' },
    { id: 'legal', label: 'For legal entities' },
  ];

  const displayedReviews = showAllReviews ? product.reviews : product.reviews.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <Link href="/catalog" className="hover:text-gray-800">Catalog</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Images */}
            <div className="flex gap-3 lg:w-[420px] flex-shrink-0">
              <div className="flex flex-col gap-2">
                {product.images.map((img, idx) => (
                  <button key={idx} onClick={() => setActiveImage(idx)} className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-[#1c64ff]' : 'border-gray-200'}`}>
                    <img src={img} alt="" className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
              <div className="flex-1 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center min-h-[300px]">
                <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-contain p-4 max-h-80" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src={product.brandLogo} alt={product.brand} className="h-8 w-auto" />
                <span className="text-xs font-bold text-gray-500 tracking-widest">{product.brand}</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">{[1,2,3,4,5].map((s) => <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill={s <= Math.round(product.rating) ? '#f59e0b' : '#e5e7eb'}><path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z"/></svg>)}</div>
                <span className="text-sm text-gray-500">{product.rating} · {product.reviewCount} reviews</span>
              </div>

              {/* Versions */}
              {product.versions.length > 1 && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Version:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.versions.map((v) => (
                      <Link key={v.slug} href={`/product/${v.slug}`} className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${v.slug === slug ? 'bg-[#1d1b20] text-white border-[#1d1b20]' : 'border-gray-200 text-gray-700 hover:border-gray-400'}`}>
                        {v.year}
                        {v.discount ? <span className="ml-1 text-xs text-red-500">-{v.discount}%</span> : null}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Platforms */}
              <div className="flex gap-2 mb-6">
                {product.platforms.map((p) => (
                  <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{p}</span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-[#f1117e]">{product.price.toLocaleString('ru-RU')} rub.</span>
                {product.originalPrice > 0 && (
                  <>
                    <span className="text-gray-400 text-xl line-through">{product.originalPrice.toLocaleString('ru-RU')} rub.</span>
                    <span className="bg-[#dc2626] text-white text-sm font-bold px-2 py-0.5 rounded">-{product.discount}%</span>
                  </>
                )}
              </div>

              <button className="w-full bg-[#f1117e] text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-600 transition-colors mb-3">
                Buy Now
              </button>
              <button className="w-full border-2 border-[#1d1b20] text-[#1d1b20] py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors mb-6">
                Add to Cart
              </button>

              {/* What you get */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-3">What you get:</h3>
                <ul className="space-y-2">
                  {product.whatYouGet.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm">
          <div className="flex overflow-x-auto border-b border-gray-100">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-[#1c64ff] border-b-2 border-[#1c64ff]' : 'text-gray-600 hover:text-gray-900'}`}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <h3 className="font-bold text-gray-900 mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((f, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-[#1c64ff] flex-shrink-0">→</span>{f}</li>)}
                </ul>
                <h3 className="font-bold text-gray-900 mt-6 mb-3">FAQ:</h3>
                <div className="space-y-2">
                  {product.faqProduct.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50">
                        <span className="font-medium text-sm text-gray-900">{faq.question}</span>
                        <span className="text-gray-400 ml-2">{openFAQ === idx ? '×' : '+'}</span>
                      </button>
                      {openFAQ === idx && <div className="px-4 pb-3"><p className="text-sm text-gray-600">{faq.answer}</p></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'characteristics' && (
              <table className="w-full max-w-2xl">
                <tbody>
                  {product.characteristics.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 text-sm font-medium text-gray-600 w-1/2">{c.label}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{c.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'system' && (
              <table className="w-full max-w-2xl">
                <tbody>
                  {product.systemRequirements.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 text-sm font-medium text-gray-600 w-1/3">{r.label}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900">{product.rating}</div>
                    <div className="flex justify-center mt-1">{[1,2,3,4,5].map((s) => <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill={s <= Math.round(product.rating) ? '#f59e0b' : '#e5e7eb'}><path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z"/></svg>)}</div>
                    <div className="text-sm text-gray-500 mt-1">{product.reviewCount} reviews</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {displayedReviews.map((review, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">{review.initial}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="flex">{[1,2,3,4,5].map((s) => <svg key={s} width="12" height="12" viewBox="0 0 16 16" fill={s <= review.rating ? '#f59e0b' : '#e5e7eb'}><path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z"/></svg>)}</div>
                            <span className="text-sm text-gray-600">{review.email}</span>
                            <span className="text-xs text-gray-400">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{review.text}</p>
                    </div>
                  ))}
                </div>
                {product.reviews.length > 3 && !showAllReviews && (
                  <button onClick={() => setShowAllReviews(true)} className="mt-4 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Show more</button>
                )}
              </div>
            )}

            {activeTab === 'howtobuy' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">How to buy?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {['Click "Buy Now"', 'Enter your email', 'Pay for your order', 'Get access by email'].map((step, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-[#1c64ff] text-white rounded-full flex items-center justify-center font-bold text-lg">{idx + 1}</div>
                      <span className="text-sm font-medium text-gray-700 text-center">{step}</span>
                    </div>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
                <div className="space-y-2">
                  {globalFAQ.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button onClick={() => setOpenGlobalFAQ(openGlobalFAQ === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50">
                        <span className="font-medium text-sm text-gray-900">{faq.question}</span>
                        <span className="text-gray-400 ml-2">{openGlobalFAQ === idx ? '×' : '+'}</span>
                      </button>
                      {openGlobalFAQ === idx && <div className="px-4 pb-3"><p className="text-sm text-gray-600">{faq.answer}</p></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4">For Legal Entities</h2>
                <p className="text-gray-600 mb-4">We work with legal entities and provide all necessary documents: invoice, act of completion, UPD.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><span className="font-medium text-gray-700">Phone:</span><a href="tel:88003501032" className="text-[#1c64ff] hover:underline">8 (800) 350-10-32</a></div>
                  <div className="flex items-center gap-3"><span className="font-medium text-gray-700">Email:</span><a href="mailto:support@rusoft.shop" className="text-[#1c64ff] hover:underline">support@rusoft.shop</a></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
