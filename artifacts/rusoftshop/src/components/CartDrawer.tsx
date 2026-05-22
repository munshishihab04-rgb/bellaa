import React from 'react';
import { useCart } from '@shopify/hydrogen-react';
import { useCartUI } from '@/context/CartContext';

function formatEuro(amount: string | number): string {
  const n = typeof amount === 'string' ? parseFloat(amount) : amount;
  return `${n.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

export default function CartDrawer() {
  const { isOpen, closeCart } = useCartUI();
  const { lines, cost, totalQuantity, checkoutUrl, linesRemove, linesUpdate, status } = useCart();

  const cartLines = (lines ?? []) as any[];
  const isLoading = status === 'creating' || status === 'fetching' || status === 'updating';

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 22" fill="none">
              <path d="M1 1h3l2 10h12l2-8H6" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="19" r="1.5" fill="#111827"/>
              <circle cx="18" cy="19" r="1.5" fill="#111827"/>
            </svg>
            <h2 className="text-base font-bold text-gray-900">Carrello</h2>
            {totalQuantity > 0 && (
              <span className="bg-[#1c64ff] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalQuantity}</span>
            )}
          </div>
          <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {cartLines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <svg width="36" height="32" viewBox="0 0 24 22" fill="none">
                  <path d="M1 1h3l2 10h12l2-8H6" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="19" r="1.5" fill="#d1d5db"/>
                  <circle cx="18" cy="19" r="1.5" fill="#d1d5db"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">Il tuo carrello è vuoto</p>
                <p className="text-sm text-gray-400">Aggiungi qualche prodotto dal catalogo</p>
              </div>
              <button onClick={closeCart} className="mt-2 bg-[#1d1b20] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
                Sfoglia il catalogo
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {cartLines.map((line: any) => {
                const variant = line.merchandise;
                const product = variant?.product;
                const img = product?.images?.nodes?.[0]?.url || product?.images?.edges?.[0]?.node?.url;
                const title = product?.title ?? variant?.title ?? 'Prodotto';
                const variantTitle = variant?.title !== 'Default Title' ? variant?.title : '';
                const price = line.cost?.totalAmount?.amount ?? variant?.price?.amount ?? '0';

                return (
                  <div key={line.id} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                    {img && (
                      <div className="w-14 h-14 rounded-lg bg-white border border-gray-100 flex-shrink-0 overflow-hidden">
                        <img src={img} alt={title} className="w-full h-full object-contain p-1" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">{title}</p>
                      {variantTitle && <p className="text-xs text-gray-500 mt-0.5">{variantTitle}</p>}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => {
                              const newQty = line.quantity - 1;
                              if (newQty <= 0) linesRemove([line.id]);
                              else linesUpdate([{ id: line.id, quantity: newQty }]);
                            }}
                            className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 transition-colors text-sm font-bold"
                          >−</button>
                          <span className="px-2 text-sm font-semibold text-gray-800">{line.quantity}</span>
                          <button
                            onClick={() => linesUpdate([{ id: line.id, quantity: line.quantity + 1 }])}
                            className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 transition-colors text-sm font-bold"
                          >+</button>
                        </div>
                        <span className="text-sm font-bold text-[#f1117e]">{formatEuro(price)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => linesRemove([line.id])}
                      className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0 mt-0.5"
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M2 2l12 12M14 2L2 14" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                );
              })}

              {isLoading && (
                <div className="text-center py-2">
                  <div className="inline-block w-5 h-5 border-2 border-gray-300 border-t-[#1c64ff] rounded-full animate-spin" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartLines.length > 0 && (
          <div className="border-t border-gray-100 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Subtotale</span>
              <span className="text-base font-bold text-gray-900">
                {cost?.subtotalAmount?.amount ? formatEuro(cost.subtotalAmount.amount) : '—'}
              </span>
            </div>
            <p className="text-xs text-gray-400">IVA inclusa · Spedizione gratuita (digitale)</p>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#1d1b20] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vai al checkout — {cost?.subtotalAmount?.amount ? formatEuro(cost.subtotalAmount.amount) : ''}
            </a>

            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors py-1"
            >
              ← Continua a fare acquisti
            </button>

            <div className="flex items-center justify-center gap-4 pt-1">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.5 3 3.5.5-2.5 2.5.5 3.5L8 9l-3 1.5.5-3.5L3 4.5 6.5 4z" fill="#d1d5db"/></svg>
                Pagamento sicuro
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#9ca3af" strokeWidth="2" strokeLinejoin="round"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/></svg>
                SSL
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Consegna digitale
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
