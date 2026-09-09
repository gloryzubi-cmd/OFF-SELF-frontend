import { useNavigate } from "react-router";
import { useCart } from "../context/cartUtils";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    closeCart,
    previousPath,
    scrollPosition,
    subtotal,
    totalItems,
  } = useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    closeCart();
    // Store the scroll position in sessionStorage so ScrollToTop can read it
    sessionStorage.setItem('scrollRestore', JSON.stringify(scrollPosition));
    navigate(previousPath);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
            YOUR BAG
          </h2>
          <button
            onClick={closeCart}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 gap-4">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
              shopping_bag
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-center">
              Your bag is empty.
            </p>
            <button
              onClick={handleContinueShopping}
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

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-outline-variant">
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity - 1)
                        }
                        className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          remove
                        </span>
                      </button>
                      <span className="px-3 py-1 font-body-md text-body-md text-on-surface border-x border-outline-variant min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity + 1)
                        }
                        className="px-3 py-1 text-on-surface-variant hover:text-on-surface transition-colors"
                        aria-label="Increase quantity"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          add
                        </span>
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-on-surface-variant hover:text-error transition-colors"
                      aria-label="Remove item"
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
          <div className="border-t border-outline-variant/30 px-6 py-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                SUBTOTAL ({totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"})
              </span>
              <span className="font-headline-md text-headline-md text-on-surface">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-4 hover:bg-primary-container transition-colors duration-300">
              CHECKOUT
            </button>
            <button
              onClick={handleContinueShopping}
              className="w-full border border-primary text-primary font-label-caps text-label-caps tracking-widest py-3 hover:bg-primary hover:text-on-primary transition-colors duration-300"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
}
