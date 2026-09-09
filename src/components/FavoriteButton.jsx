import { useState, useRef } from "react";
import { useFavorites } from "../context/favoritesUtils";

export default function FavoriteButton({ product, className = "" }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const liked = isFavorite(product.name);
  const [isAnimating, setIsAnimating] = useState(false);
  const animRef = useRef(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsAnimating(true);
    animRef.current = true;
    toggleFavorite(product);
    setTimeout(() => {
      animRef.current = false;
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button
      onClick={handleToggle}
      className={`absolute z-20 top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-surface-container-lowest/90 backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-110 sm:active:scale-110 ${className}`}
      aria-label={liked ? "Remove from favorites" : "Add to favorites"}
    >
      <span
        className={`material-symbols-outlined text-[18px] transition-all duration-300 ${
          liked ? "text-on-background" : "text-on-surface-variant"
        } ${isAnimating ? "scale-125" : "scale-100"}`}
        style={liked ? { 'font-variation-settings': 'FILL' } : {}}
      >
        {liked ? "favorite" : "favorite_border"}
      </span>
    </button>
  );
}
