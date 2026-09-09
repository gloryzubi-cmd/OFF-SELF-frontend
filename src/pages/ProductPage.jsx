import { useState, useMemo } from 'react';
import { useParams, Link, useSearchParams } from 'react-router';
import { getProductBySlug, getProductByName, getAllProducts } from '../data/allProducts';
import { useCart } from '../context/cartUtils';
import { useFavorites } from '../context/favoritesUtils';

/**
 * Map color names to approximate swatch colours.
 */
function colorSwatch(color) {
  const map = {
    silver: '#C0C0C0',
    gold: '#D4AF37',
    black: '#1a1a1a',
    white: '#f5f5f5',
    red: '#b22222',
    burgundy: '#722f37',
    blue: '#1e3a8a',
    cobalt: '#0047ab',
    green: '#2e8b57',
    emerald: '#50c878',
    brown: '#8b4513',
    tan: '#d2b48c',
    beige: '#f5f5dc',
    grey: '#808080',
    pink: '#ffb6c1',
    rose: '#b76e79',
    'rose-gold': '#b76e79',
    multi: '#8b7355',
    chrome: '#e8e8e8',
    metal: '#a0a0a0',
    leather: '#5c3a21',
    suede: '#8b7355',
    canvas: '#d2b48c',
    acetate: '#2a2a2a',
    pearl: '#f0e6d2',
    wool: '#6b6b6b',
    silk: '#e8d5b7',
    felt: '#3a2a1a',
    rubber: '#222',
    amber: '#d4a017',
    tortoise: '#8b6914',
    titanium: '#878681',
    ceramic: '#333',
    crystal: '#e8e8ff',
    ivory: '#fffff0',
    steel: '#a8a9ad',
  };
  return map[(color || '').toLowerCase()] || '#888';
}

/** Map colour names to Unsplash hue-shift values for image variant generation */
const COLOR_HUE = {
  silver: 0, chrome: 0, metal: 0, grey: 0, titanium: 0, ceramic: 0,
  gold: 30, amber: 35, tortoise: 25,
  black: 0, acetate: 0, rubber: 0,
  white: 0, pearl: 10, ivory: 15,
  red: 0, burgundy: 350, rose: 340, 'rose-gold': 340, pink: 330,
  blue: 210, cobalt: 220,
  green: 140, emerald: 150,
  brown: 25, tan: 30, beige: 35, leather: 20, suede: 25, canvas: 30, felt: 15, wool: 20,
  silk: 30, multi: 0,
};

/** Map colour names to CSS filter values for non-Unsplash images */
const COLOR_FILTER = {
  silver: 'grayscale(0.3) brightness(1.1)',
  chrome: 'grayscale(0.3) brightness(1.1)',
  metal: 'grayscale(0.3) brightness(1.0)',
  gold: 'sepia(0.4) saturate(1.2) brightness(1.05)',
  amber: 'sepia(0.5) saturate(1.3) brightness(1.0)',
  black: 'grayscale(0.6) brightness(0.7)',
  white: 'grayscale(0.1) brightness(1.15)',
  red: 'saturate(1.4) hue-rotate(-10deg)',
  burgundy: 'saturate(1.2) hue-rotate(-15deg) brightness(0.85)',
  blue: 'saturate(1.3) hue-rotate(10deg)',
  cobalt: 'saturate(1.4) hue-rotate(15deg)',
  green: 'saturate(1.2) hue-rotate(40deg)',
  emerald: 'saturate(1.3) hue-rotate(45deg)',
  brown: 'sepia(0.3) saturate(1.1) brightness(0.9)',
  pink: 'saturate(1.2) hue-rotate(-20deg) brightness(1.05)',
  rose: 'saturate(1.1) hue-rotate(-15deg) brightness(0.95)',
  'rose-gold': 'sepia(0.2) saturate(1.1) hue-rotate(-10deg)',
};

export default function ProductPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const overrideImage = searchParams.get('image');
  const overridePrice = searchParams.get('price');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(0);
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Look up product: first by slug, then fallback by name (for old ?product= links)
  const product = useMemo(() => {
    if (!slug) return null;
    // Direct slug lookup
    const bySlug = getProductBySlug(slug);
    if (bySlug) return bySlug;
    // Fallback: decode slug as if it were a name (for backward compat)
    const nameGuess = slug.replace(/-/g, ' ');
    return getProductByName(nameGuess);
  }, [slug]);

  // Normalise product so the render never hits undefined fields.
  // Collection-page products may only pass ?image=&price= query params;
  // in that case we still have a valid slug from the registry lookup.
  const safeProduct = useMemo(() => {
    if (!product) return null;
    return {
      ...product,
      category: product.category || 'Collection',
      colours: product.colours || [],
      materials: product.materials || [],
      description: product.description || `A distinctive piece from the Off Self collection.`,
      slug: product.slug || slug,
      image: product.image || overrideImage || '',
      price: product.price || overridePrice || '—',
    };
  }, [product, slug, overrideImage, overridePrice]);

  // Related products: same category, exclude current product, max 4
  const relatedProducts = useMemo(() => {
    if (!safeProduct) return [];
    return getAllProducts(safeProduct.category)
      .filter((p) => p.slug !== safeProduct.slug)
      .slice(0, 4);
  }, [safeProduct]);

  // Product colours (must be defined before selectedColorName)
  const colors = product?.colours || [];

  // The currently selected colour name
  const selectedColorName = colors[activeColor] || null;

  // Build gallery images – colour-aware, prefer card image via ?image=
  const images = useMemo(() => {
    const baseImg = overrideImage || safeProduct?.image;
    if (!baseImg) return [];
    const hue = selectedColorName ? (COLOR_HUE[selectedColorName] ?? 0) : 0;
    const cssFilter = selectedColorName ? (COLOR_FILTER[selectedColorName] || '') : '';
    // Local images – apply CSS filter for colour shift
    if (baseImg.startsWith('/')) {
      return [
        { src: baseImg, filter: cssFilter },
        { src: baseImg, filter: cssFilter },
        { src: baseImg, filter: cssFilter },
      ];
    }
    // Unsplash URLs – create 3 crop variants with hue shift
    const base = baseImg
      .replace('w=400&h=500', 'w=900&h=1200')
      .replace('w=600&h=750', 'w=900&h=1200');
    const hueParam = hue ? `&hue=${hue}` : '';
    const withHue = base.includes('hue=') ? base : base + hueParam;
    return [
      { src: withHue, filter: '' },
      { src: withHue.replace('fit=crop', 'fit=crop&crop=face'), filter: '' },
      { src: withHue.replace('fit=crop', 'fit=crop&crop=tp'), filter: '' },
    ];
  }, [product, overrideImage, selectedColorName]);

  if (!slug || !safeProduct) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-cream text-on-surface">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
          PRODUCT NOT FOUND
        </h1>
        <p className="font-body-md text-on-surface-variant mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-surface-tint transition-colors"
        >
          RETURN HOME
        </Link>
      </div>
    );
  }

  const liked = isFavorite(safeProduct.name);
  const materials = product?.materials || [];
  // Use the exact price from the card that was clicked, falling back to registry
  const displayPrice = overridePrice || product?.price || '—';

  const handleAddToCart = () => {
    const item = {
      name: safeProduct.name,
      price: displayPrice,
      image: safeProduct.image,
      category: safeProduct.category,
      path: `/${(safeProduct.category || '').toLowerCase()}`,
      selectedColor: colors[activeColor] || null,
      quantity,
    };
    addItem(item);
  };

  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* Breadcrumb */}
      <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-8 pb-4">
        <nav className="flex items-center gap-2 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">
          <Link to="/" className="hover:text-on-surface transition-colors">
            Home
          </Link>
          <span className="text-on-surface-variant/40">/</span>
          <Link
            to={`/${(safeProduct.category || '').toLowerCase()}`}
            className="hover:text-on-surface transition-colors"
          >
            {safeProduct.category}
          </Link>
          <span className="text-on-surface-variant/40">/</span>
          <span className="text-on-surface truncate max-w-[200px]">
            {safeProduct.name}
          </span>
        </nav>
      </div>

      {/* Gallery + Info */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex-1 flex flex-col lg:flex-row gap-gutter py-4">
        {/* Image Gallery */}
        <div className="lg:col-span-2 w-full">
          <div className="relative w-full max-w-lg mx-auto bg-surface-container-low overflow-hidden group">
            <img
              src={(images[selectedImage] || {}).src || safeProduct.image}
              alt={`${safeProduct.name} — ${selectedColorName || 'default'} — view ${selectedImage + 1}`}
              className="w-full h-full object-cover aspect-square transition-all duration-500"
              style={{ filter: (images[selectedImage] || {}).filter || '' }}
            />
            {/* Category badge */}
            <div className="absolute top-4 left-4 font-label-caps text-[10px] tracking-widest bg-surface-container-lowest/90 backdrop-blur-md px-2 py-1 text-on-surface border border-outline-variant/20">
              {safeProduct.category}
            </div>
            {/* Subcategory badge */}
            {safeProduct.subcategory && (
              <div className="absolute top-4 right-4 font-label-caps text-[10px] tracking-widest bg-primary text-on-primary px-2 py-1">
                {safeProduct.subcategory.toUpperCase()}
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex justify-center gap-3 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-16 h-16 overflow-hidden border-2 transition-all ${
                    idx === selectedImage
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-outline-variant/40 hover:border-outline-variant'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                    style={{ filter: img.filter || '' }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:col-span-1 flex flex-col justify-center gap-6 min-w-0">
          {/* Category + Subcategory */}
          <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
            {safeProduct.category}
            {safeProduct.subcategory ? ` · ${safeProduct.subcategory}` : ''}
          </span>

          {/* Name */}
          <h1 className="font-headline-lg text-headline-lg leading-tight text-primary">
            {safeProduct.name}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-4">
            <span className="font-headline-md text-headline-md text-primary">
              {displayPrice}
            </span>
            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
              Free shipping
            </span>
          </div>

          {/* Color variations */}
          {colors.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
                Color — {colors[activeColor]}
              </span>
              <div className="flex gap-2">
                {colors.map((c, idx) => (
                  <button
                    key={c}
                    onClick={() => { setActiveColor(idx); setSelectedImage(0); }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      idx === activeColor
                        ? 'border-primary ring-2 ring-primary/20 scale-110'
                        : 'border-outline-variant/60 hover:border-outline-variant hover:scale-105'
                    }`}
                    style={{ backgroundColor: colorSwatch(c) }}
                    aria-label={c}
                    title={c}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Material badges */}
          {materials.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {materials.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1 bg-surface-container-low text-on-surface-variant font-label-caps text-[10px] tracking-widest uppercase rounded-full border border-outline-variant/20"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="font-body-lg text-body-lg leading-relaxed max-w-sm text-on-surface-variant">
            {safeProduct.description}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-3 pt-2">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                check_circle
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                Authenticity certificate included
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                check_circle
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                30-day returns on unused items
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                check_circle
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                Complimentary shipping on orders over $500
              </span>
            </li>
          </ul>

          {/* Quantity + Add to Bag */}
          <div className="flex gap-3 mt-2">
            <div className="flex items-center border border-outline-variant rounded-full">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Decrease quantity"
              >
                <span className="material-symbols-outlined text-[16px]">
                  remove
                </span>
              </button>
              <span className="px-4 py-2 font-body-md text-body-md text-on-surface border-x border-outline-variant min-w-[48px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-on-surface-variant hover:text-on-surface transition-colors"
                aria-label="Increase quantity"
              >
                <span className="material-symbols-outlined text-[16px]">
                  add
                </span>
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-3.5 px-6 hover:bg-primary-container transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              ADD TO BAG — {displayPrice}
            </button>
          </div>

          {/* Wishlist */}
          <button
            onClick={() => toggleFavorite(safeProduct)}
            className="flex items-center gap-2 px-4 py-3 border border-outline-variant text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors w-full"
            aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {liked ? 'favorite' : 'favorite_border'}
            </span>
            <span className="font-label-caps text-[10px] tracking-widest uppercase">
              {liked ? 'Saved to Wishlist' : 'Add to Wishlist'}
            </span>
          </button>
        </div>
      </section>

      {/* Bottom CTA bar */}
      <div className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-6 flex gap-3">
        <Link
          to={`/${(safeProduct.category || '').toLowerCase()}`}
          className="flex-1 border border-on-background text-on-background font-label-caps text-label-caps tracking-widest py-3.5 px-6 hover:bg-on-background hover:text-background transition-colors duration-300 text-center text-[10px]"
        >
          RETURN TO COLLECTION
        </Link>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-3.5 px-6 hover:bg-primary-container transition-colors duration-300 text-[10px] shadow-lg hover:shadow-xl"
        >
          ADD TO BAG — {displayPrice}
        </button>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="w-full border-t border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-md text-primary mb-2">
                  YOU MAY ALSO LIKE
                </h2>
                <p className="font-body-md text-on-surface-variant">
                  More from the {safeProduct.category} collection.
                </p>
              </div>
              <Link
                to={`/${(safeProduct.category || '').toLowerCase()}`}
                className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-surface-tint transition-colors inline-flex self-start md:self-end"
              >
                VIEW ALL {safeProduct.category?.toUpperCase()}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-gutter md:gap-y-16">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/product/${rp.slug}`}
                  className="group flex flex-col gap-2 md:gap-4 relative"
                >
                  <div className="w-full aspect-[4/5] bg-surface-container relative overflow-hidden">
                    <img
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      src={rp.image}
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="font-body-sm md:font-body-md text-on-background truncate">
                      {rp.name}
                    </h3>
                    <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
                      {rp.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
