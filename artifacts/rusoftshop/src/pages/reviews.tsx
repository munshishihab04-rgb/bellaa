import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const reviews = [
  { initial: 'G', email: 'y-***@gmail.com', date: 'April 6, 2026', product: 'Autodesk 3ds Max 2026', productSlug: 'buy-autodesk-3ds-max-2026', text: 'Thank you for the fast processing of my order and support. The license key arrived instantly!', rating: 5 },
  { initial: 'N', email: 'ni***@yandex.ru', date: 'March 19, 2026', product: 'Autodesk 3ds Max 2023', productSlug: 'buy-autodesk-3ds-max-2022', text: 'I have been using Autodesk 3ds Max for a short time and I really like it. There were no problems with the purchase.', rating: 5 },
  { initial: 'M', email: 'ma***@gmail.com', date: 'April 10, 2026', product: 'Windows 11 Pro', productSlug: 'windows-11-professional', text: 'Excellent! Key arrived in 30 seconds. Activated without any issues. Highly recommend this store!', rating: 5 },
  { initial: 'S', email: 'se***@yandex.ru', date: 'April 5, 2026', product: 'Windows 11 Pro', productSlug: 'windows-11-professional', text: 'Fast delivery, genuine key, works perfectly. Will buy again.', rating: 5 },
  { initial: 'K', email: 'ka***@gmail.com', date: 'March 10, 2026', product: 'Microsoft Office 2021 Professional Plus', productSlug: 'microsoft-office-2021-pro', text: 'Bought Office 2021 Pro Plus. Everything works perfectly. The key was delivered instantly. Great price!', rating: 5 },
  { initial: 'P', email: 'pe***@yandex.ru', date: 'March 5, 2026', product: 'Office 365 Pro Plus for 1 year', productSlug: 'microsoft-office-365-na-1-god', text: 'Excellent service! Office 365 subscription activated immediately. All apps work great. Will definitely buy again.', rating: 5 },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Reviews</span>
        </nav>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Customer Reviews</h1>
          <div className="flex items-center gap-2">
            <div className="flex">{[1,2,3,4,5].map((s) => <svg key={s} width="20" height="20" viewBox="0 0 16 16" fill="#f59e0b"><path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z"/></svg>)}</div>
            <span className="font-bold text-gray-900 text-xl">4.9</span>
            <span className="text-gray-500 text-sm">({reviews.length}+ reviews)</span>
          </div>
        </div>
        <div className="space-y-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 flex-shrink-0">{review.initial}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex">{[1,2,3,4,5].map((s) => <svg key={s} width="14" height="14" viewBox="0 0 16 16" fill={s <= review.rating ? '#f59e0b' : '#e5e7eb'}><path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6z"/></svg>)}</div>
                    <span className="text-sm text-gray-600">{review.email}</span>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                  <Link href={`/product/${review.productSlug}`} className="text-xs text-[#1c64ff] hover:underline mt-0.5 block">{review.product}</Link>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
              <div className="mt-3 bg-gray-50 rounded-xl p-3">
                <span className="text-xs font-semibold text-gray-700">✓ RuSoft Team</span>
                <p className="text-xs text-gray-600 mt-1">Thank you for choosing RuSoft! We&apos;re glad the activation was successful.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
