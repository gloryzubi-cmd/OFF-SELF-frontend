import { createContext, useState, useCallback } from "react";const FavoritesContext = createContext(null);
export { FavoritesContext };
// Pre-declare provider for react-refresh compatibility
FavoritesProvider.displayName = 'FavoritesProvider';

export const useFavoritesContextValue = FavoritesProvider;

export function FavoritesProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleFavorite = useCallback((product) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.filter((item) => item.name !== product.name);
      }
      return [...prev, product];
    });
  }, []);

  const isFavorite = useCallback(
    (name) => items.some((item) => item.name === name),
    [items]
  );

  const removeFavorite = useCallback((name) => {
    setItems((prev) => prev.filter((item) => item.name !== name));
  }, []);

  const clearFavorites = useCallback(() => setItems([]), []);
  const openFavorites = useCallback(() => setIsOpen(true), []);
  const closeFavorites = useCallback(() => setIsOpen(false), []);

  const totalFavorites = items.length;

  return (
    <FavoritesContext.Provider
      value={{
        items,
        toggleFavorite,
        isFavorite,
        removeFavorite,
        clearFavorites,
        isOpen,
        openFavorites,
        closeFavorites,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

