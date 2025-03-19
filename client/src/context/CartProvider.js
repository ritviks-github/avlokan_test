import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Load the cart from localStorage, or initialize as an empty array
    
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [itemQty, setItemQty] = useState(0);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, itemQty, setItemQty }}>
      {children}
    </CartContext.Provider>
  );
}
