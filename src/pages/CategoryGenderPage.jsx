import { useParams, Link, useNavigate } from "react-router";
import { useCart } from "../context/cartUtils";
import FavoriteButton from "../components/FavoriteButton";
import { getCategoryGenderProducts } from "../data/allProducts";

const CATEGORY_META = {
  jewelry: { title: "JEWELRY", subtitle: "Sculptural forms and distinctive metals. Pieces that speak before you do." },
  watches: { title: "WATCHES", subtitle: "Precision engineering meets architectural design. Time, your way." },
  eyewear: { title: "EYEWEAR", subtitle: "Architectural clarity. Frames that define how the world sees you." },
  headwear: { title: "HEADWEAR", subtitle: "The finishing touch. Hats and caps that complete the silhouette." },
  footwear: { title: "FOOTWEAR", subtitle: "Step outside the obvious. Shapes that move with intention." },
  accessories: { title: "ACCESSORIES", subtitle: "The details that complete the look. Curated essentials with character." },
};

const GENDER_LABELS = {
  male: "MALE",
  female: "FEMALE",
  unisex: "UNISEX",
};

export default function CategoryGenderPage() {
  const { category, gender } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const meta = CATEGORY_META[category];

  // Get products from unified registry – filters by category and gender
  // When gender is missing or 'all', returns ALL products in the category
  const products = getCategoryGenderProducts(category, gender || 'all');

  if (!meta) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-cream text-on-surface">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
          PAGE NOT FOUND
        </h1>
        <Link
          to="/"
          className="font-label-caps text-label-caps text-primary border-b border-primary pb-1"
        >
          GO HOME
        </Link>
      </div>
    );
  }

  const handleTabClick = (path) => {
    navigate(path, { replace: true });
  };

  // Determine which gender filter is active
  const activeGender = gender || 'all';

  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* Header */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-16 pb-8">
        <div className="text-center flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase tracking-widest text-primary mb-4">
            {meta.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center">
            {meta.subtitle}
          </p>

          {/* Gender Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => handleTabClick(`/${category}`)}
              className={`px-4 py-1.5 rounded-full border font-label-caps text-label-caps uppercase whitespace-nowrap transition-colors ${
                activeGender === 'all'
                  ? "bg-primary text-on-primary border-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-on-background"
              }`}
            >
              ALL
            </button>
            {["male", "female", "unisex"].map((g) => (
              <button
                key={g}
                onClick={() => handleTabClick(`/category/${category}/${g}`)}
                className={`px-4 py-1.5 rounded-full border font-label-caps text-label-caps uppercase whitespace-nowrap transition-colors ${
                  g === gender
                    ? "bg-primary text-on-primary border-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-on-background"
                }`}
              >
                {GENDER_LABELS[g]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              No products found for this filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-gutter md:gap-y-16">
            {products.map((product) => (
              <div
                key={product.slug}
                data-product-name={product.name}
                className="group flex flex-col gap-2 md:gap-4 relative transition-all duration-300"
              >
                <FavoriteButton product={product} />
                <div className="w-full aspect-[4/5] bg-surface-container relative overflow-hidden group/product-card">
                  <Link
                    to={`/product/${product.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`View ${product.name}`}
                  />
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/product-card:scale-105"
                    src={product.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover/product-card:opacity-100 transition-all duration-400 ease-out flex justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); addItem(product); }}
                      className="bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-2 px-4 md:py-3 md:px-8 w-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      ADD TO BAG
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-center text-center px-2">
                  <h3 className="font-body-sm md:font-body-md text-on-background w-full">
                    {product.name}
                  </h3>
                  <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
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
