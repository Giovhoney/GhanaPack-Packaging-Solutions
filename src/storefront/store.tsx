import React, { createContext, useContext, useMemo, useState } from 'react';
import { defaultProducts, inquiryStorageKey, productStorageKey } from './data';
import type { CartItem, Inquiry, Product } from './types';

type StoreContextValue = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const readStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
};

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProductsState] = useState<Product[]>(() => readStorage(productStorageKey, defaultProducts));
  const [cart, setCart] = useState<CartItem[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => readStorage(inquiryStorageKey, []));

  const setProducts: React.Dispatch<React.SetStateAction<Product[]>> = (value) => {
    setProductsState((current) => {
      const next = typeof value === 'function' ? value(current) : value;
      window.localStorage.setItem(productStorageKey, JSON.stringify(next));
      return next;
    });
  };

  const addToCart = (item: CartItem) => {
    setCart((current) => {
      const index = current.findIndex(
        (entry) => entry.productId === item.productId && entry.size === item.size && entry.color === item.color,
      );
      if (index === -1) return [...current, item];
      return current.map((entry, entryIndex) =>
        entryIndex === index ? { ...entry, quantity: entry.quantity + item.quantity } : entry,
      );
    });
  };

  const removeFromCart = (index: number) => {
    setCart((current) => current.filter((_, entryIndex) => entryIndex !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    setCart((current) =>
      current.map((entry, entryIndex) => (entryIndex === index ? { ...entry, quantity: Math.max(1, quantity) } : entry)),
    );
  };

  const clearCart = () => setCart([]);

  const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt'>) => {
    const nextInquiry: Inquiry = {
      ...inquiry,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setInquiries((current) => {
      const next = [nextInquiry, ...current];
      window.localStorage.setItem(inquiryStorageKey, JSON.stringify(next));
      return next;
    });
  };

  const value = useMemo(
    () => ({ products, setProducts, cart, addToCart, removeFromCart, updateQuantity, clearCart, inquiries, addInquiry }),
    [products, cart, inquiries],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used inside StoreProvider');
  return context;
};
