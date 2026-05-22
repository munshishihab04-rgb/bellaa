import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ReturnPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="text-gray-300">&#9654;</span>
          <span className="text-gray-700">Exchange &amp; Return</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900 mb-8">Exchange &amp; Return Policy</h1>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Return Conditions</h2>
            <p className="text-gray-600 mb-4">
              We guarantee the quality of all products sold. If you encounter any issues with activation or the product does not work as described, we will provide a replacement or full refund.
            </p>
            <ul className="space-y-3">
              {[
                'Product key does not work or is already used',
                'Product does not match the description',
                'Technical issues that our support cannot resolve',
                'Duplicate order (accidental double purchase)',
              ]?.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How to Request a Return</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Contact Support', desc: 'Email us at support@rusoft.shop or call 8 (800) 350-10-32' },
                { step: '2', title: 'Provide Order Details', desc: 'Share your order number and describe the issue' },
                { step: '3', title: 'Resolution', desc: 'We will resolve your issue within 24 hours' },
              ]?.map((item) => (
                <div key={item?.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1c64ff] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item?.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item?.title}</h3>
                    <p className="text-sm text-gray-500">{item?.desc}</p>
                  </div>
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
