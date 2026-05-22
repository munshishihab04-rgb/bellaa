import React, { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CartPage() {
  const [cartItems] = useState<{ id: string; slug: string; name: string; image: string; imageAlt: string; price: number; quantity: number }[]>([]);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Cart</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <p className="text-gray-400 text-lg mb-4">Your cart is empty</p>
                <Link href="/catalog" className="bg-[#111827] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-block">
                  Go to Catalog
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <img src={item.image} alt={item.imageAlt} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <Link href={`/product/${item.slug}`} className="font-semibold text-gray-900 hover:text-[#1c64ff] transition-colors">{item.name}</Link>
                      <p className="text-[#f1117e] font-bold text-lg mt-1">{item.price.toLocaleString('ru-RU')} rub.</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="lg:w-80">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="font-bold text-gray-900 text-lg mb-4">Order Summary</h2>
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-[#f1117e] text-xl">{total.toLocaleString('ru-RU')} rub.</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email for delivery</label>
                  <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1c64ff]" />
                </div>
                <button className="w-full bg-[#f1117e] text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-600 transition-colors mb-3">
                  Proceed to Payment
                </button>
                <Link href="/catalog" className="block w-full text-center border border-gray-200 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
