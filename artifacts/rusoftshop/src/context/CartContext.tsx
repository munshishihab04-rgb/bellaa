import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface CartUIContextType {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartUIContext = createContext<CartUIContextType>({
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
  toggleCart: () => {},
});

export function useCartUI() {
  return useContext(CartUIContext);
}

export function CartUIProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartUIContext.Provider value={{
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen(p => !p),
    }}>
      {children}
    </CartUIContext.Provider>
  );
}
