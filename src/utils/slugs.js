/**
 * Convert a product display name to a URL-friendly slug.
 * Matches the slug format used in src/data/allProducts.js
 */
export function productSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Build a PDP link that passes the card's exact display data via query params.
 * This ensures the PDP shows exactly what the card showed — image, price, name.
 */
export function productLink(name, image, price) {
  const slug = productSlug(name);
  const params = new URLSearchParams();
  if (image) params.set('image', image);
  if (price) params.set('price', price);
  const qs = params.toString();
  return qs ? `/product/${slug}?${qs}` : `/product/${slug}`;
}
