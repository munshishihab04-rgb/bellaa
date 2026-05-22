import React, { useState } from 'react';
import { Link } from 'wouter';
import { useCart } from '@shopify/hydrogen-react';
import { useCartUI } from '@/context/CartContext';

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
  variantId?: string;
}

export default function ProductCard({ slug, name, image, imageAlt, rating, reviewCount, price, originalPrice, variantId }: ProductCardProps) {
  const discount = originalPrice && originalPrice > price ? Math.round((1 - price / originalPrice) * 100) : 0;
  const { linesAdd, status } = useCart();
  const { openCart } = useCartUI();
  const [added, setAdded] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!variantId) {
      window.location.href = `/product/${slug}`;
      return;
    }
    linesAdd([{ merchandiseId: variantId, quantity: 1 }]);
    openCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col hover:shadow-md transition-shadow">
      <Link href={`/product/${slug}`} className="block mb-3">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
          {image && <img src={image} alt={imageAlt} className="w-full h-full object-contain p-2" />}
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-[#dc2626] text-white text-xs font-bold px-1.5 py-0.5 rounded">
              -{discount}%
            </span>
          )}
        </div>
      </Link>

      {reviewCount > 0 && (
        <Link href={`/product/${slug}#reviews`} className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill={s <= Math.round(rating) ? '#f59e0b' : '#e5e7eb'}>
                <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z"/>
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">{reviewCount}</span>
        </Link>
      )}

      <Link href={`/product/${slug}`} className="font-semibold text-sm text-gray-900 mb-3 line-clamp-2 hover:text-[#1c64ff] transition-colors flex-1">
        {name}
      </Link>

      <div className="flex items-end justify-between mt-auto">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#f1117e] font-bold text-base">{price.toLocaleString('it-IT')} €</span>
          </div>
          {originalPrice && originalPrice > price && (
            <span className="text-gray-400 text-xs line-through">{originalPrice.toLocaleString('it-IT')} €</span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          disabled={status === 'creating' || status === 'updating'}
          className={`rounded-xl p-2 transition-all flex-shrink-0 ${added ? 'bg-green-500' : 'bg-[#1d1b20] hover:bg-gray-700'} text-white`}
          title="Aggiungi al carrello"
        >
          {added ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
