import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Payment &amp; Delivery</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Payment &amp; Delivery</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Methods</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{ name: 'Bank Card', desc: 'Visa, MasterCard, Mir' }, { name: 'Online Banking', desc: 'SberPay, T-Pay' }, { name: 'E-Wallets', desc: 'YooMoney, QIWI' }, { name: 'Cryptocurrency', desc: 'Bitcoin, USDT' }].map((method) => (
                <div key={method.name} className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="font-semibold text-gray-900 text-sm">{method.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery</h2>
            <div className="space-y-4">
              {[{ step: '1', color: 'green', title: 'Instant Delivery', desc: 'All digital products are delivered to your email within 1 minute of payment confirmation.' }, { step: '2', color: 'blue', title: '24/7 Automatic Processing', desc: 'Orders are processed automatically around the clock, even on weekends and holidays.' }, { step: '3', color: 'purple', title: 'What You Receive', desc: 'Product key or account credentials, activation instructions, and receipt — all sent to your email.' }].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-${item.color}-600 font-bold`}>{item.step}</span>
                  </div>
                  <div><h3 className="font-semibold text-gray-900">{item.title}</h3><p className="text-sm text-gray-500">{item.desc}</p></div>
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
