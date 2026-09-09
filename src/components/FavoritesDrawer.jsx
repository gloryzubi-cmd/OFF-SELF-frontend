import { useFavorites } from "../context/favoritesUtils";
import { useCart } from "../context/cartUtils";

export default function FavoritesDrawer() {
  const { items, removeFavorite, closeFavorites, clearFavorites } =
    useFavorites();
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    addItem(product);
    removeFavorite(product.name);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeFavorites}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
            MY FAVORITES
          </h2>
          <button
            onClick={closeFavorites}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close favorites"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 gap-4">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
              favorite_border
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-center">
              No favorites yet. Tap the heart on any product to save it here.
            </p>
            <button
              onClick={closeFavorites}
              className="mt-4 border border-primary text-primary font-label-caps text-label-caps tracking-widest py-3 px-8 hover:bg-primary hover:text-on-primary transition-colors duration-300"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex gap-4 px-6 py-5 border-b border-outline-variant/20"
              >
                {/* Product Image */}
                <div className="w-20 h-24 bg-surface-container-low flex-shrink-0 overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="font-body-md text-body-md text-on-surface font-medium break-words">
                      {item.name}
                    </h3>
                    <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-primary text-on-primary font-label-caps py-3 text-xs uppercase tracking-widest hover:bg-primary-container transition-colors"
                    >
                      ADD TO BAG
                    </button>
                    <button
                      onClick={() => removeFavorite(item.name)}
                      className="text-on-surface-variant hover:text-error transition-colors"
                      aria-label="Remove from favorites"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-outline-variant/30 px-6 py-5 flex flex-col gap-3">
            <button
              onClick={clearFavorites}
              className="w-full border border-outline-variant text-on-surface-variant font-label-caps text-label-caps tracking-widest py-3 hover:bg-surface-container-low transition-colors"
            >
              CLEAR ALL FAVORITES
            </button>
          </div>
        )}
      </div>
    </>
  );
}
