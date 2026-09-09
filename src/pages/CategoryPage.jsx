import { useNavigate } from "react-router";
import { useCart } from "../context/cartUtils";
import FavoriteButton from "../components/FavoriteButton";
import useScrollToProduct from "../hooks/useScrollToProduct";
import { getCategoryGenderProducts } from "../data/allProducts";

const GENDER_FILTERS = [
  { label: "ALL", path: null },
  { label: "MALE", path: "/category" },
  { label: "FEMALE", path: "/category" },
  { label: "UNISEX", path: "/category" },
];

export default function CategoryPage({ title, subtitle, categorySlug }) {
  const { addItem } = useCart();
  const navigate = useNavigate();
  useScrollToProduct();

  // Pull ALL products for this category from the unified registry
  const products = getCategoryGenderProducts(categorySlug, 'all');

  const handleTabClick = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* Header */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-16 pb-8">
        <div className="text-center flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase tracking-widest text-primary mb-4">
            {title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center">
            {subtitle}
          </p>

          {/* Gender Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {GENDER_FILTERS.map((filter) => {
              const genderPath = filter.path
                ? `${filter.path}/${categorySlug}/${filter.label.toLowerCase()}`
                : null;
              return genderPath ? (
                <button
                  key={filter.label}
                  onClick={() => handleTabClick(genderPath)}
                  className="px-4 py-1.5 rounded-full border border-outline-variant font-label-caps text-label-caps uppercase text-on-surface-variant hover:border-primary hover:text-on-background transition-colors whitespace-nowrap"
                >
                  {filter.label}
                </button>
              ) : (
                <span
                  key={filter.label}
                  className="px-4 py-1.5 rounded-full bg-primary border border-primary font-label-caps text-label-caps uppercase text-on-primary whitespace-nowrap"
                >
                  {filter.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-gutter md:gap-y-16">
          {products.map((product) => (
            <div
              key={product.slug}
              data-product-name={product.name}
              className="group cursor-pointer flex flex-col relative transition-all duration-300"
            >
              <FavoriteButton product={product} />
              <div className="relative w-full aspect-[4/5] bg-surface-container mb-4 overflow-hidden group/product-card">
                <a
                  href={`/product/${product.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${product.name}`}
                />
                <img
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/product-card:scale-105"
                  src={product.image}
                />
                <div className="absolute inset-0 bg-on-surface/40 opacity-0 group-hover/product-card:opacity-100 md:opacity-0 md:group-hover/product-card:opacity-100 transition-all duration-400 ease-out flex items-end p-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); addItem(product); }}
                    className="w-full bg-surface-container-lowest text-on-surface font-label-caps py-4 text-xs uppercase tracking-widest hover:bg-surface transition-all duration-300 hover:shadow-lg"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-body-md text-body-md text-on-background">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    {product.price}
                  </span>
                  <button
                    onClick={() => addItem(product)}
                    className="flex-1 max-w-[120px] bg-primary text-on-primary font-label-caps text-[9px] md:text-xs tracking-widest py-1.5 md:py-0 px-2 md:px-0 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="w-full flex justify-center mt-16">
          <button className="bg-primary text-on-primary font-label-caps py-4 px-12 hover:bg-on-background transition-colors">
            LOAD MORE
          </button>
        </div>
      </section>
    </div>
  );
}
