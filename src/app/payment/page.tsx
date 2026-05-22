import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">&#9654;</span>
          <span className="text-gray-700">Payment &amp; Delivery</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 mb-8">Payment &amp; Delivery</h1>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Methods</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Bank Card', desc: 'Visa, MasterCard, Mir' },
                { name: 'Online Banking', desc: 'SberPay, T-Pay' },
                { name: 'E-Wallets', desc: 'YooMoney, QIWI' },
                { name: 'Cryptocurrency', desc: 'Bitcoin, USDT' },
              ]?.map((method) => (
                <div key={method?.name} className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="font-semibold text-gray-900 text-sm">{method?.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{method?.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Delivery</h3>
                  <p className="text-sm text-gray-500">All digital products are delivered to your email within 1 minute of payment confirmation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Automatic Processing</h3>
                  <p className="text-sm text-gray-500">Orders are processed automatically around the clock, even on weekends and holidays.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">What You Receive</h3>
                  <p className="text-sm text-gray-500">Product key or account credentials, activation instructions, and receipt — all sent to your email.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Security</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              All payments are processed through YooKassa — a certified payment system that meets PCI DSS security standards.
              Your payment data is encrypted and never stored on our servers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
