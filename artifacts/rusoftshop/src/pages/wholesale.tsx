import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">For Legal Entities</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">For Legal Entities</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Corporate Purchasing</h2>
            <p className="text-gray-600 mb-4">We work with legal entities and provide all necessary documents: invoice, act of completion, UPD.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3"><span className="font-medium text-gray-700">Phone:</span><a href="tel:88003501032" className="text-[#1c64ff] hover:underline">8 (800) 350-10-32</a></div>
              <div className="flex items-center gap-3"><span className="font-medium text-gray-700">Email:</span><a href="mailto:support@rusoft.shop" className="text-[#1c64ff] hover:underline">support@rusoft.shop</a></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Volume Licensing Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ title: 'Volume Discounts', desc: 'Special pricing for orders of 5+ licenses' }, { title: 'Priority Support', desc: 'Dedicated account manager for corporate clients' }, { title: 'All Documents', desc: 'Full accounting documentation provided' }].map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
