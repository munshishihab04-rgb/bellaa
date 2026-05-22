'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const cartItems = [
{
  id: '1',
  slug: 'buy-autodesk-3ds-max-2026',
  name: 'Autodesk 3ds Max 2026 License Subscription',
  image: 'https://rusoft.shop/wp-content/uploads/2024/02/3ds-max_22.jpg',
  imageAlt: 'Autodesk 3ds Max 2026 product image',
  price: 3890,
  quantity: 1
}];


export default function CartPage() {
  const total = cartItems?.reduce((sum, item) => sum + item?.price * item?.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">▶</span>
          <span className="text-gray-700">Cart</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            {cartItems?.length === 0 ?
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <p className="text-gray-400 text-lg mb-4">Your cart is empty</p>
                <Link href="/catalog" className="bg-[#111827] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-block">
                  Go to Catalog
                </Link>
              </div> :

            <div className="space-y-4">
                {cartItems?.map((item) =>
              <div key={item?.id} className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <Image src={item?.image} alt={item?.imageAlt} width={80} height={80} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <Link href={`/product/${item?.slug}`} className="font-semibold text-gray-900 hover:text-[#1c64ff] transition-colors">
                        {item?.name}
                      </Link>
                      <p className="text-[#f1117e] font-bold text-lg mt-1">{item?.price?.toLocaleString('ru-RU')} rub.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">Qty: {item?.quantity}</span>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
              )}
              </div>
            }
          </div>

          {/* Order Summary */}
          {cartItems?.length > 0 &&
          <div className="lg:w-80">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="font-bold text-gray-900 text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium">{total?.toLocaleString('ru-RU')} rub.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Delivery</span>
                    <span className="font-medium text-green-600">Free (email)</span>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-[#f1117e] text-xl">{total?.toLocaleString('ru-RU')} rub.</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email for delivery</label>
                  <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1c64ff]" />
                
                </div>

                <button className="w-full bg-[#f1117e] text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-600 transition-colors mb-3">
                  Proceed to Payment
                </button>
                <Link href="/catalog" className="block w-full text-center border border-gray-200 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </Link>

                <p className="text-xs text-gray-400 text-center mt-3">
                  🔒 Secure payment • Instant delivery to email
                </p>
              </div>
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>);

}