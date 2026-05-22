import React from 'react';
import { Link } from 'wouter';

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
}

export default function ProductCard({ slug, name, image, imageAlt, rating, reviewCount, price, originalPrice }: ProductCardProps) {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col hover:shadow-md transition-shadow">
      <Link href={`/product/${slug}`} className="block mb-3">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
          <img src={image} alt={imageAlt} className="w-full h-full object-contain p-2" />
        </div>
      </Link>

      <Link href={`/product/${slug}#reviews`} className="flex items-center gap-1 mb-2">
        <div className="flex">
          {[1,2,3,4,5].map((s) => (
            <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill={s <= Math.round(rating) ? '#f59e0b' : '#e5e7eb'}>
              <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z"/>
            </svg>
          ))}
        </div>
        <span className="text-xs text-gray-500">{reviewCount} reviews</span>
      </Link>

      <Link href={`/product/${slug}`} className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2 hover:text-[#1c64ff] transition-colors flex-1">
        {name}
      </Link>

      <div className="flex items-center justify-between mt-auto">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#f1117e] font-bold text-lg">{price.toLocaleString('ru-RU')} rub.</span>
            {discount > 0 && (
              <span className="bg-[#dc2626] text-white text-xs font-bold px-1.5 py-0.5 rounded">-{discount}%</span>
            )}
          </div>
          {originalPrice && (
            <span className="text-gray-400 text-sm line-through">{originalPrice.toLocaleString('ru-RU')} rub.</span>
          )}
        </div>
        <button className="bg-[#1d1b20] text-white rounded-xl p-2 hover:bg-gray-700 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
