import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">&#9654;</span>
          <span className="text-gray-700">For Legal Entities</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">For Legal Entities</h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Corporate Purchases</h2>
          <p className="text-gray-600 mb-4">
            We work with legal entities and provide all necessary documents for accounting:
          </p>
          <ul className="space-y-2 mb-6">
            {['Invoice for payment', 'Act of completion of work', 'Universal transfer document (UPD)', 'Electronic invoice']?.map((doc) => (
              <li key={doc} className="flex items-center gap-2 text-gray-600">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">&#10003;</span>
                {doc}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <a href="tel:88003501032" className="font-bold text-gray-900 text-lg hover:text-[#1c64ff] transition-colors">
                8 (800) 350-10-32
              </a>
              <p className="text-xs text-gray-400 mt-1">Free call within Russia</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <a href="mailto:support@rusoft.shop" className="font-bold text-gray-900 hover:text-[#1c64ff] transition-colors">
                support@rusoft.shop
              </a>
              <p className="text-xs text-gray-400 mt-1">Technical support</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Volume Licensing Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Volume Discounts', desc: 'Special pricing for orders of 5+ licenses' },
              { title: 'Priority Support', desc: 'Dedicated account manager for corporate clients' },
              { title: 'All Documents', desc: 'Full accounting documentation provided' },
            ]?.map((benefit) => (
              <div key={benefit?.title} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-2">{benefit?.title}</h3>
                <p className="text-sm text-gray-500">{benefit?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
