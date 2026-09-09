import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/cartUtils";
import FavoriteButton from "./FavoriteButton";
import useScrollToProduct from "../hooks/useScrollToProduct";
import { productLink } from "../utils/slugs";

const GENDER_FILTERS = ["ALL", "MALE", "FEMALE", "UNISEX"];

const CATEGORY_FILTERS = [
  { label: "ALL", path: null },
  { label: "JEWELRY", path: "/jewelry" },
  { label: "WATCHES", path: "/watches" },
  { label: "EYEWEAR", path: "/eyewear" },
  { label: "HEADWEAR", path: "/headwear" },
  { label: "FOOTWEAR", path: "/footwear" },
  { label: "ACCESSORIES", path: "/accessories" },
];

/**
 * Shared collection page layout for Shop The Edit, Bestsellers, and New In.
 *
 * @param {string}   title         - Hero heading (e.g. "BEST SELLERS")
 * @param {string}   subtitle      - Hero subtitle
 * @param {string}   heroImage     - Hero background image path
 * @param {string}   heroAlt       - Hero image alt text
 * @param {string}   heroCtaLabel  - CTA button label (e.g. "SHOP NOW")
 * @param {string}   heroCtaLink   - CTA button link
 * @param {Array}    products      - Product array
 * @param {boolean}  showLifestyle - Show lifestyle card at bottom of grid
 * @param {object}   lifestyleCard - { image, alt, title, ctaLabel, ctaLink }
 */
export default function CollectionPage({
  title,
  subtitle,
  heroImage,
  heroAlt,
  heroCtaLabel,
  heroCtaLink,
  products,
  showLifestyle = false,
  lifestyleCard,
}) {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [activeGender, setActiveGender] = useState("ALL");
  useScrollToProduct();

  const filteredProducts =
    activeGender === "ALL"
      ? products
      : products.filter((p) =>
          p.gender.includes(activeGender.toLowerCase())
        );

  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      {/* ─── Hero Section ─── */}
      {heroImage && (
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt={heroAlt || title}
              className="w-full h-full object-cover"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/60" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest text-on-primary mb-4 drop-shadow-lg">
              {title}
            </h1>
            <p className="font-body-md text-on-primary/90 max-w-lg mb-8 drop-shadow-md">
              {subtitle}
            </p>
            {heroCtaLabel && heroCtaLink && (
              <Link
                to={heroCtaLink}
                className="px-8 py-3 bg-surface-container-lowest text-primary font-label-caps text-label-caps tracking-widest hover:bg-primary-container hover:text-on-primary transition-colors duration-300 shadow-lg"
              >
                {heroCtaLabel}
              </Link>
            )}
          </div>
        </section>
      )}

      {/* ─── Header (when no hero image) ─── */}
      {!heroImage && (
        <section className="max-w-container-max mx-auto w-full px-margin-mobile lg:px-margin-desktop pt-16 pb-8">
          <div className="text-center flex flex-col items-center">
            <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase tracking-widest text-on-background mb-4">
              {title}
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-md text-center">
              {subtitle}
            </p>
          </div>
        </section>
      )}

      {/* ─── Filters ─── */}
      <section className="max-w-container-max mx-auto w-full px-margin-mobile lg:px-margin-desktop pb-8 border-b border-outline-variant/30 sticky top-20 z-30 bg-cream/95 backdrop-blur-sm">
        <div className="flex flex-col gap-6">
          {/* Gender Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {GENDER_FILTERS.map((label) => (
              <button
                key={label}
                onClick={() => setActiveGender(label)}
                className={`px-4 py-1.5 rounded-full border font-label-caps text-label-caps uppercase whitespace-nowrap transition-colors ${
                  activeGender === label
                    ? "bg-primary text-on-primary border-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-on-background"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2 border-t border-outline-variant/20">
            {CATEGORY_FILTERS.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => cat.path && navigate(cat.path)}
                className={`px-3 py-1 rounded-full border font-label-caps text-[10px] tracking-widest uppercase whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-primary text-on-primary border-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-on-background"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Product Grid ─── */}
      <section className="max-w-container-max mx-auto w-full px-margin-mobile lg:px-margin-desktop py-section-gap">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              No products found for this filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-gutter md:gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                addItem={addItem}
              />
            ))}

            {/* Lifestyle Card */}
            {showLifestyle && activeGender === "ALL" && lifestyleCard && (
              <div className="col-span-2 relative group overflow-hidden bg-surface-container aspect-[4/5] sm:aspect-[8/5] md:aspect-auto md:h-full min-h-[320px] md:min-h-[400px]">
                <img
                  alt={lifestyleCard.alt || lifestyleCard.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  src={lifestyleCard.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end text-on-primary">
                  <h2 className="font-headline-md text-headline-md mb-2">
                    {lifestyleCard.title}
                  </h2>
                  <Link
                    className="inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest hover:text-primary-fixed transition-colors w-max"
                    to={lifestyleCard.ctaLink}
                  >
                    {lifestyleCard.ctaLabel}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-24 flex justify-center">
          <button className="border border-on-background text-on-background font-label-caps text-label-caps tracking-widest py-4 px-12 hover:bg-on-background hover:text-background transition-colors duration-300">
            LOAD MORE
          </button>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, addItem }) {
  return (
    <div className="group flex flex-col gap-2 md:gap-4 relative">
      <FavoriteButton product={product} />
      {product.badge && (
        <div className="absolute top-4 left-4 z-20 font-label-caps text-[10px] tracking-widest bg-background/80 backdrop-blur-md px-2 py-1 text-on-background animate-badge-in">
          {product.badge}
        </div>
      )}
      <div className="w-full aspect-[4/5] bg-surface-container relative overflow-hidden group/product-card">
        <Link
          to={productLink(product.name, product.image, product.price)}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        >
          <img
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/product-card:scale-105"
            src={product.image}
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover/product-card:opacity-100 md:opacity-0 md:group-hover/product-card:opacity-100 transition-all duration-400 ease-out flex justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-2 px-4 md:py-3 md:px-8 w-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ADD TO BAG
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center text-center px-2">
        <h3 className="font-body-sm md:font-body-md text-on-background w-full">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 w-full justify-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
            {product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex-1 max-w-[120px] bg-primary text-on-primary font-label-caps text-[9px] md:text-label-caps tracking-widest py-1.5 md:py-0 px-2 md:px-0 rounded-full hover:bg-primary/90 transition-colors"
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}
