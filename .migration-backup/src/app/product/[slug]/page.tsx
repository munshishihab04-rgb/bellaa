'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

interface Review {
  initial: string;
  email: string;
  date: string;
  product: string;
  text: string;
  rating: number;
}

interface ProductDetailProps {
  params: {slug: string;};
}

const products: Record<string, {
  name: string;
  brand: string;
  brandLogo: string;
  year: string;
  images: string[];
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  discount: number;
  versions: {year: string;slug: string;discount?: number;}[];
  platforms: string[];
  description: string;
  features: string[];
  whatYouGet: string[];
  systemRequirements: {label: string;value: string;}[];
  characteristics: {label: string;value: string;}[];
  faqProduct: FAQItem[];
  reviews: Review[];
}> = {
  'buy-autodesk-3ds-max-2026': {
    name: 'Autodesk 3ds Max 2026 License Subscription',
    brand: 'AUTODESK',
    brandLogo: 'https://rusoft.shop/wp-content/uploads/2024/03/autodesk_podpiska.png',
    year: '2026',
    images: [
    'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg',
    'https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp',
    'https://rusoft.shop/wp-content/uploads/2025/08/tsifry.webp',
    'https://rusoft.shop/wp-content/uploads/2025/08/garantiya.webp',
    'https://rusoft.shop/wp-content/uploads/2025/08/otzyvy.webp'],

    rating: 4.9,
    reviewCount: 45,
    price: 3890,
    originalPrice: 4990,
    discount: 22,
    versions: [
    { year: '2026', slug: 'buy-autodesk-3ds-max-2026', discount: 22 },
    { year: '2025', slug: 'buy-autodesk-3ds-max-2025' },
    { year: '2024', slug: 'buy-autodesk-3ds-max-2024' },
    { year: '2023', slug: 'buy-autodesk-3ds-max-2023' },
    { year: '2022', slug: 'buy-autodesk-3ds-max-2022' }],

    platforms: ['Windows', 'macOS'],
    description: 'Autodesk 3ds Max 2026 is a program for 3D modeling, visualization, and animation. Suitable for designers, architects, graphics professionals, and game developers.',
    features: [
    'create 3D models and scenes',
    'perform photorealistic rendering',
    'work with materials, light and textures',
    'create animations and complex visual effects'],

    whatYouGet: [
    'A ready-made account with access, login and password sent to your email',
    'Step-by-step instructions for logging in and setting up',
    'Support and performance guarantee for the entire period of use'],

    systemRequirements: [
    { label: 'OS', value: 'Windows 10/11 (64-bit) or macOS 12+' },
    { label: 'CPU', value: '64-bit Intel or AMD multi-core processor, 2.5 GHz+' },
    { label: 'RAM', value: '8 GB minimum (16 GB recommended)' },
    { label: 'GPU', value: '4 GB VRAM, DirectX 11 compatible' },
    { label: 'Storage', value: '9 GB free disk space' }],

    characteristics: [
    { label: 'Developer', value: 'Autodesk' },
    { label: 'Version', value: '2026' },
    { label: 'License type', value: 'Subscription' },
    { label: 'Platform', value: 'Windows / macOS' },
    { label: 'Language', value: 'Multilingual' },
    { label: 'Delivery', value: 'Email (instant)' }],

    faqProduct: [
    { question: 'When will I receive my account after payment?', answer: 'Your account will be emailed to you within 1 minute of payment. You can download and activate the program immediately.' },
    { question: 'If I can\'t install it, will you help?', answer: 'Yes! Our technical support team is available 9:00–21:00 MSK and will help you with installation and activation.' },
    { question: 'Where can I download the program?', answer: 'You can download 3ds Max from the official Autodesk website or via the link provided in your email after purchase.' }],

    reviews: [
    { initial: 'G', email: 'y-***@gmail.com', date: 'April 6, 2026', product: 'Autodesk 3ds Max 2026', text: 'Thank you for the fast processing of my order and support. The license key arrived instantly!', rating: 5 },
    { initial: 'N', email: 'ni***@yandex.ru', date: 'March 19, 2026', product: 'Autodesk 3ds Max 2023', text: 'I have been using Autodesk 3ds Max for a short time and I really like it. There were no problems with the purchase.', rating: 5 },
    { initial: 'G', email: '26***@gmail.com', date: 'March 17, 2026', product: 'Autodesk 3ds Max 2026', text: 'Huge thanks to the RuSoft team for their efficiency and help.', rating: 5 },
    { initial: 'A', email: 'an***@yandex.ru', date: 'March 17, 2026', product: 'Autodesk 3ds Max 2023', text: 'I make 3D models periodically, everything is great in this program, I have been working in it for a long time, I even sold models periodically, uploaded them to various photo stocks. They are used in games, videos, animation. Great, I recommend it!', rating: 5 },
    { initial: 'A', email: 'an***@yandex.ru', date: 'March 17, 2026', product: 'Autodesk 3ds Max 2025', text: 'Bought the activation key for Autodesk 3ds Max 2025, convenient payment, many payment methods, activation went quickly, all satisfied, will recommend to friends.', rating: 5 }]

  },
  'buy-autodesk-3ds-max-2022': {
    name: 'Autodesk 3ds Max 2022 License Subscription',
    brand: 'AUTODESK',
    brandLogo: 'https://rusoft.shop/wp-content/uploads/2024/03/autodesk_podpiska.png',
    year: '2022',
    images: [
    'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg',
    'https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp',
    'https://rusoft.shop/wp-content/uploads/2025/08/tsifry.webp',
    'https://rusoft.shop/wp-content/uploads/2025/08/garantiya.webp'],

    rating: 4.9,
    reviewCount: 45,
    price: 2790,
    originalPrice: 0,
    discount: 0,
    versions: [
    { year: '2026', slug: 'buy-autodesk-3ds-max-2026', discount: 22 },
    { year: '2025', slug: 'buy-autodesk-3ds-max-2025' },
    { year: '2024', slug: 'buy-autodesk-3ds-max-2024' },
    { year: '2023', slug: 'buy-autodesk-3ds-max-2023' },
    { year: '2022', slug: 'buy-autodesk-3ds-max-2022' }],

    platforms: ['Windows', 'macOS'],
    description: 'Autodesk 3ds Max 2022 — a proven solution for 3D modeling and visualization. Suitable for specialists who value stability and reliability.',
    features: [
    'create 3D models and scenes',
    'perform photorealistic rendering',
    'work with materials, light and textures',
    'create animations and complex visual effects'],

    whatYouGet: [
    'A ready-made account with access, login and password sent to your email',
    'Step-by-step instructions for logging in and setting up',
    'Support and performance guarantee for the entire period of use'],

    systemRequirements: [
    { label: 'OS', value: 'Windows 10 (64-bit)' },
    { label: 'CPU', value: '64-bit Intel or AMD multi-core processor, 2.5 GHz+' },
    { label: 'RAM', value: '8 GB minimum (16 GB recommended)' },
    { label: 'GPU', value: '4 GB VRAM, DirectX 11 compatible' },
    { label: 'Storage', value: '9 GB free disk space' }],

    characteristics: [
    { label: 'Developer', value: 'Autodesk' },
    { label: 'Version', value: '2022' },
    { label: 'License type', value: 'Subscription' },
    { label: 'Platform', value: 'Windows / macOS' },
    { label: 'Language', value: 'Multilingual' },
    { label: 'Delivery', value: 'Email (instant)' }],

    faqProduct: [
    { question: 'When will I receive my account after payment?', answer: 'Your account will be emailed to you within 1 minute of payment. You can download and activate the program immediately.' },
    { question: 'If I can\'t install it, will you help?', answer: 'Yes! Our technical support team is available 9:00–21:00 MSK and will help you with installation and activation.' },
    { question: 'Where can I download the program?', answer: 'You can download 3ds Max from the official Autodesk website or via the link provided in your email after purchase.' }],

    reviews: [
    { initial: 'A', email: 'an***@yandex.ru', date: 'March 15, 2026', product: 'Autodesk 3ds Max 2024', text: 'Bought 3ds Max 2024 here — everything went great! Payment was fast, within a minute the key and installation instructions arrived by email. Support worked clearly — answered quickly, explained everything clearly. Activation without problems. Great service and excellent price, I highly recommend it!', rating: 5 },
    { initial: 'N', email: 'ni***@yandex.ru', date: 'March 15, 2026', product: 'Autodesk 3ds Max 2024', text: 'Bought Autodesk 3ds Max 2024, immediately sent the key by email, payment receipt, instructions and installer. Contacted technical support, they consulted me and I easily activated it. Everything works great.', rating: 5 }]

  },
  'windows-11-professional': {
    name: 'Windows 11 Pro',
    brand: 'MICROSOFT',
    brandLogo: 'https://rusoft.shop/wp-content/uploads/2025/04/logowin11.svg',
    year: '2024',
    images: [
    'https://rusoft.shop/wp-content/uploads/2026/03/i-1-1-150x150-1.png',
    'https://rusoft.shop/wp-content/uploads/2025/08/vy-poluchaete.webp',
    'https://rusoft.shop/wp-content/uploads/2025/08/tsifry.webp',
    'https://rusoft.shop/wp-content/uploads/2025/08/garantiya.webp'],

    rating: 5.0,
    reviewCount: 452,
    price: 1990,
    originalPrice: 4990,
    discount: 60,
    versions: [
    { year: '2024', slug: 'windows-11-professional' }],

    platforms: ['Windows'],
    description: 'Windows 11 Pro is the latest operating system from Microsoft with advanced security features, new interface, and improved performance.',
    features: [
    'Advanced security with BitLocker and TPM 2.0',
    'New Start menu and taskbar design',
    'Snap Layouts for multitasking',
    'DirectStorage for faster gaming',
    'Android app support via Amazon Appstore'],

    whatYouGet: [
    'A product key sent to your email',
    'Step-by-step activation instructions',
    'Technical support for the entire period of use'],

    systemRequirements: [
    { label: 'CPU', value: '1 GHz or faster with 2+ cores on 64-bit processor' },
    { label: 'RAM', value: '4 GB minimum' },
    { label: 'Storage', value: '64 GB minimum' },
    { label: 'Firmware', value: 'UEFI, Secure Boot capable' },
    { label: 'TPM', value: 'Trusted Platform Module version 2.0' },
    { label: 'GPU', value: 'DirectX 12 compatible, WDDM 2.0 driver' },
    { label: 'Display', value: '720p, 9" diagonal, 8 bits per color channel' }],

    characteristics: [
    { label: 'Developer', value: 'Microsoft' },
    { label: 'Version', value: 'Professional' },
    { label: 'License type', value: 'Retail key' },
    { label: 'Platform', value: 'Windows' },
    { label: 'Language', value: 'Multilingual' },
    { label: 'Delivery', value: 'Email (instant)' }],

    faqProduct: [
    { question: 'What are the security benefits of Windows 11 Pro?', answer: 'Windows 11 Pro offers advanced security features like BitLocker drive encryption, malware protection, built-in Windows Defender antivirus, and TPM 2.0 support to provide a high level of data and device protection.' },
    { question: 'What new features are available in Windows 11 Pro compared to previous versions?', answer: 'Windows 11 Pro includes a redesigned Start menu, Snap Layouts, improved virtual desktops, DirectStorage for faster game loading, and Android app support.' },
    { question: 'What are the main benefits of purchasing Windows 11 Pro?', answer: 'You get a genuine license key, instant delivery to email, lifetime technical support, and the ability to activate on any compatible PC.' },
    { question: 'How long is the activation valid for?', answer: 'The Windows 11 Pro key provides a lifetime license — it is activated once and remains valid permanently.' },
    { question: "I didn't find the answer to my question", answer: 'Please contact our support team via chat or email support@rusoft.shop and we will help you.' }],

    reviews: [
    { initial: 'M', email: 'ma***@gmail.com', date: 'April 10, 2026', product: 'Windows 11 Pro', text: 'Excellent! Key arrived in 30 seconds. Activated without any issues. Highly recommend this store!', rating: 5 },
    { initial: 'S', email: 'se***@yandex.ru', date: 'April 5, 2026', product: 'Windows 11 Pro', text: 'Fast delivery, genuine key, works perfectly. Will buy again.', rating: 5 }]

  }
};

const globalFAQ: FAQItem[] = [
{ question: 'Are there any guarantees for the products?', answer: 'All purchases on our website are made in accordance with Federal Law No. 54-FZ "On the Use of Cash Registers in Settlements in the Russian Federation" dated May 22, 2003. Lifetime technical support is provided for all products purchased on our website, subject to the terms of use provided by the copyright holders.' },
{ question: 'Where can I find instructions for a product?', answer: 'Instructions are sent to your email along with the product key/account details. You can also find guides in our Blog section.' },
{ question: 'How long will it take for the goods to arrive by mail?', answer: 'Digital products are delivered instantly — within 1 minute of payment confirmation to your email address.' },
{ question: 'Any questions left?', answer: 'Contact our support team via online chat, phone 8 (800) 350-10-32 (free within Russia), or email support@rusoft.shop.' }];


const howToBuySteps = [
{ icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-1.png', label: 'Click "Buy Now"' },
{ icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-2.png', label: 'Enter your email' },
{ icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-3.png', label: 'Pay for your order' },
{ icon: 'https://rusoft.shop/wp-content/uploads/2024/03/how_buy-4.png', label: 'Get access by email' }];


export default function ProductDetailPage({ params }: ProductDetailProps) {
  const slug = params.slug;
  const product = products[slug] || products['buy-autodesk-3ds-max-2026'];

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [openGlobalFAQ, setOpenGlobalFAQ] = useState<number | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'characteristics', label: 'Characteristics' },
  { id: 'system', label: 'System requirements' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'howtobuy', label: 'How to buy?' },
  { id: 'legal', label: 'For legal entities' }];


  const displayedReviews = showAllReviews ? product.reviews : product.reviews.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <Link href="/catalog" className="hover:text-gray-800">Catalog</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Image Gallery */}
            <div className="flex gap-3 lg:w-[420px] flex-shrink-0">
              {/* Thumbnails */}
              <div className="flex flex-col gap-2">
                {product.images.map((img, idx) =>
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                  activeImage === idx ? 'border-[#1c64ff]' : 'border-gray-200'}`
                  }>
                  
                    <Image src={img} alt={`${product.name} ${idx + 1}`} width={64} height={64} className="w-full h-full object-cover" />
                  </button>
                )}
              </div>
              {/* Main Image */}
              <div className="flex-1 relative rounded-xl overflow-hidden bg-gray-50 min-h-[300px]">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-4" />
                
                {/* Brand badge */}
                <div className="absolute bottom-3 left-3 bg-white rounded-lg px-2 py-1 flex items-center gap-1 shadow-sm">
                  <div className="w-6 h-6 bg-[#1c64ff] rounded flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-xs font-medium text-gray-700">3ds Max</span>
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex-1">
              {/* Brand + Platform */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Image src={product.brandLogo} alt={product.brand} width={100} height={28} className="h-7 w-auto" />
                </div>
                <div className="flex gap-2">
                  {product.platforms.map((p) =>
                  <span key={p} className="text-xs border border-gray-300 rounded px-2 py-0.5 text-gray-600">{p}</span>
                  )}
                </div>
              </div>

              {/* Status badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm border border-gray-300 rounded-full px-3 py-1 text-gray-600">In stock</span>
                <span className="text-sm border border-gray-300 rounded-full px-3 py-1 text-gray-600">Activation Guarantee</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) =>
                  <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill={s <= Math.round(product.rating) ? '#f59e0b' : '#e5e7eb'}>
                      <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-500">{product.reviewCount} reviews</span>
              </div>

              {/* Version Switcher */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.versions.map((v) =>
                <Link
                  key={v.year}
                  href={`/product/${v.slug}`}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-sm font-semibold transition-colors ${
                  v.year === product.year ?
                  'bg-[#111827] text-white border-[#111827]' :
                  'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}`
                  }>
                  
                    {v.year}
                    {v.discount && v.year !== product.year &&
                  <span className="bg-[#dc2626] text-white text-xs px-1 rounded">-{v.discount}%</span>
                  }
                    {v.discount && v.year === product.year &&
                  <span className="bg-[#dc2626] text-white text-xs px-1 rounded">-{v.discount}%</span>
                  }
                  </Link>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#f1117e] font-bold text-3xl">{product.price.toLocaleString('ru-RU')} rubles</span>
                {product.originalPrice > 0 &&
                <>
                    <span className="text-gray-400 line-through text-lg">{product.originalPrice.toLocaleString('ru-RU')} rubles</span>
                    <span className="bg-[#111827] text-white text-sm font-bold px-2 py-0.5 rounded">-{product.discount}%</span>
                  </>
                }
              </div>

              {/* Buy Button */}
              <button className="w-full bg-[#111827] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors mb-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Buy now
                <Image src="https://rusoft.shop/wp-content/uploads/2024/12/i_methods-e1776031634614.png" alt="Payment methods" width={80} height={20} className="h-5 w-auto ml-2" />
              </button>
              <p className="text-center text-sm text-gray-500 mb-5">Secure payment • Replacement or refund if not suitable</p>

              {/* What you will receive */}
              <div className="border border-gray-200 rounded-xl p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">What you will receive immediately after payment</h3>
                <div className="space-y-2">
                  {product.whatYouGet.map((item, idx) =>
                  <div key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#1c64ff] text-white rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product FAQ accordion */}
              <div className="space-y-2">
                {product.faqProduct.map((faq, idx) =>
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                    
                      <span className="font-semibold text-sm text-gray-900">{faq.question}</span>
                      <span className="text-gray-400 text-lg ml-2">{openFAQ === idx ? '−' : '+'}</span>
                    </button>
                    {openFAQ === idx &&
                  <div className="px-4 pb-3">
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                  }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* How to Buy Section */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-1 bg-[#1c64ff] rounded"></div>
            <h2 className="text-xl font-bold text-gray-900">How to buy?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {howToBuySteps.map((step, idx) =>
            <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm border border-gray-100">
                <Image src={step.icon} alt={step.label} width={80} height={80} className="w-20 h-20 object-contain" />
                <span className="text-sm font-medium text-gray-700 text-center">{step.label}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm">
          {/* Tab Headers */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-6 overflow-x-auto">
              {tabs.map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id ?
                'border-[#111827] text-[#111827]' :
                'border-transparent text-gray-500 hover:text-gray-700'}`
                }>
                
                  {tab.label}
                </button>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'description' &&
            <div className="max-w-3xl">
                <p className="font-bold text-gray-900 mb-3">{product.description}</p>
                <p className="text-gray-600 mb-3">Suitable for designers, architects, graphics professionals, and game developers.</p>
                <p className="text-gray-600 mb-2">With 3ds Max {product.year} you can:</p>
                <ul className="mb-4 space-y-1">
                  {product.features.map((f, i) =>
                <li key={i} className="text-gray-600">✓ {f}</li>
                )}
                </ul>
                <p className="text-gray-600 mb-3">The program is used for architectural visualization, interior design, games and media content.</p>
                <p className="text-gray-600 mb-3">After activation, 3ds Max works without restrictions.</p>
                <p className="font-bold text-gray-900">Important:</p>
                <p className="text-gray-600">Activation is done through your Autodesk account.</p>
                <p className="text-gray-600">Download is available from the official website or via the provided link.</p>
              </div>
            }

            {activeTab === 'characteristics' &&
            <div className="max-w-2xl">
                <table className="w-full">
                  <tbody>
                    {product.characteristics.map((c, i) =>
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 text-sm font-medium text-gray-600 w-1/2">{c.label}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{c.value}</td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            }

            {activeTab === 'system' &&
            <div className="max-w-2xl">
                <table className="w-full">
                  <tbody>
                    {product.systemRequirements.map((r, i) =>
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 text-sm font-medium text-gray-600 w-1/3">{r.label}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{r.value}</td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            }

            {activeTab === 'reviews' &&
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Product reviews</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Only people who have purchased the product can leave reviews. This is how we create an honest rating. We don&apos;t verify reviews for authenticity, but we do remove profanity, insults, and advertising. You can view reviews for all products on the{' '}
                  <Link href="/reviews" className="text-[#1c64ff] hover:underline">reviews page</Link>.
                </p>

                {/* Rating Summary */}
                <div className="flex items-start gap-8 mb-8">
                  <div className="flex flex-col gap-2">
                    {[5, 4, 3, 2, 1].map((star) =>
                  <div key={star} className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 w-3">{star}</span>
                        <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                        className="h-full bg-[#f59e0b] rounded-full"
                        style={{ width: star === 5 ? '90%' : star === 4 ? '8%' : '1%' }} />
                      
                        </div>
                      </div>
                  )}
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900">{product.rating}</div>
                    <div className="flex justify-center mt-1">
                      {[1, 2, 3, 4, 5].map((s) =>
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill={s <= Math.round(product.rating) ? '#f59e0b' : '#e5e7eb'}>
                          <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z" />
                        </svg>
                    )}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{product.reviewCount} reviews</div>
                  </div>
                </div>

                {/* Review List */}
                <div className="space-y-4">
                  {displayedReviews.map((review, idx) =>
                <div key={idx} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                          {review.initial}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((s) =>
                          <svg key={s} width="12" height="12" viewBox="0 0 16 16" fill={s <= review.rating ? '#f59e0b' : '#e5e7eb'}>
                                  <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z" />
                                </svg>
                          )}
                            </div>
                            <span className="text-sm text-gray-600">{review.email}</span>
                            <span className="text-xs text-gray-400">{review.date}</span>
                          </div>
                          <Link href={`/product/${slug}`} className="text-xs text-[#1c64ff] hover:underline">{review.product}</Link>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 ml-13">{review.text}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className="text-xs text-gray-400">Was this review helpful?</span>
                        <button className="text-xs border border-gray-200 rounded px-2 py-0.5 hover:bg-gray-50">Yes 0</button>
                        <button className="text-xs text-gray-400 hover:text-gray-600">Report</button>
                      </div>
                      {/* RuSoft reply */}
                      <div className="mt-3 bg-gray-50 rounded-lg p-3 ml-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Image src="https://rusoft.shop/wp-content/uploads/2026/02/cropped-logotip-2-.png" alt="RuSoft" width={20} height={20} className="w-5 h-5 rounded" />
                          <span className="text-xs font-semibold text-gray-700">✓ RuSoft Team</span>
                        </div>
                        <p className="text-xs text-gray-600">Thank you for choosing RuSoft! We&apos;re glad the activation was successful.</p>
                      </div>
                    </div>
                )}
                </div>

                {product.reviews.length > 3 && !showAllReviews &&
              <button
                onClick={() => setShowAllReviews(true)}
                className="mt-4 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                
                    Show more
                  </button>
              }
              </div>
            }

            {activeTab === 'howtobuy' &&
            <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-1 bg-[#1c64ff] rounded"></div>
                  <h2 className="text-xl font-bold text-gray-900">How to buy?</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {howToBuySteps.map((step, idx) =>
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-3">
                      <Image src={step.icon} alt={step.label} width={80} height={80} className="w-20 h-20 object-contain" />
                      <span className="text-sm font-medium text-gray-700 text-center">{step.label}</span>
                    </div>
                )}
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
                <div className="space-y-2">
                  {globalFAQ.map((faq, idx) =>
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                    onClick={() => setOpenGlobalFAQ(openGlobalFAQ === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                    
                        <span className="font-medium text-sm text-gray-900">{faq.question}</span>
                        <span className="text-gray-400 text-lg ml-2">{openGlobalFAQ === idx ? '×' : '+'}</span>
                      </button>
                      {openGlobalFAQ === idx &&
                  <div className="px-4 pb-3">
                          <p className="text-sm text-gray-600">{faq.answer}</p>
                        </div>
                  }
                    </div>
                )}
                </div>
              </div>
            }

            {activeTab === 'legal' &&
            <div className="max-w-2xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4">For Legal Entities</h2>
                <p className="text-gray-600 mb-4">We work with legal entities and provide all necessary documents: invoice, act of completion, UPD.</p>
                <p className="text-gray-600 mb-4">For corporate purchases and volume licensing, please contact us:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-700">Phone:</span>
                    <a href="tel:88003501032" className="text-[#1c64ff] hover:underline">8 (800) 350-10-32</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-700">Email:</span>
                    <a href="mailto:support@rusoft.shop" className="text-[#1c64ff] hover:underline">support@rusoft.shop</a>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        {/* Description + Global FAQ */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-2">
            {globalFAQ.map((faq, idx) =>
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                onClick={() => setOpenGlobalFAQ(openGlobalFAQ === idx ? null : idx)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                
                  <span className="font-medium text-sm text-gray-900">{faq.question}</span>
                  <span className="text-gray-400 text-lg ml-2">{openGlobalFAQ === idx ? '×' : '+'}</span>
                </button>
                {openGlobalFAQ === idx &&
              <div className="px-4 pb-3">
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
              }
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>);

}