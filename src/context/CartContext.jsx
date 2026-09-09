import { createContext, useState, useCallback } from "react";const CartContext = createContext(null);
export { CartContext };
// Pre-declare provider for react-refresh compatibility
CartProvider.displayName = 'CartProvider';

export const useCartContextValue = CartProvider;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [previousPath, setPreviousPath] = useState("/");
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const addItem = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((name) => {
    setItems((prev) => prev.filter((item) => item.name !== name));
  }, []);

  const updateQuantity = useCallback((name, quantity) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.name !== name));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openCart = useCallback((currentPath) => {
    if (currentPath) setPreviousPath(currentPath);
    setScrollPosition({ x: window.scrollX, y: window.scrollY });
    setIsOpen(true);
  }, []);

  const closeCart = useCallback(() => setIsOpen(false), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart,
        closeCart,
        previousPath,
        scrollPosition,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

