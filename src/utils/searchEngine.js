import { ENRICHED_PRODUCTS, INTENT_KEYWORDS } from "../data/searchProducts";

function extractIntent(query) {
  const q = query.toLowerCase().trim();
  const intent = {
    gender: null,
    age: null,
    season: null,
    style: null,
    occasion: null,
    colour: null,
    category: null,
    material: null,
    keywords: [],
  };

  // Extract gender intent
  for (const [gender, words] of Object.entries(INTENT_KEYWORDS.gender)) {
    if (words.some((w) => q.includes(w))) {
      intent.gender = gender;
      break;
    }
  }

  // Extract age intent
  for (const [age, words] of Object.entries(INTENT_KEYWORDS.age)) {
    if (words.some((w) => q.includes(w))) {
      intent.age = age;
      break;
    }
  }

  // Extract season intent
  for (const [season, words] of Object.entries(INTENT_KEYWORDS.season)) {
    if (words.some((w) => q.includes(w))) {
      intent.season = season;
      break;
    }
  }

  // Extract style intent
  for (const [style, words] of Object.entries(INTENT_KEYWORDS.style)) {
    if (words.some((w) => q.includes(w))) {
      intent.style = style;
      break;
    }
  }

  // Extract occasion intent
  for (const [occasion, words] of Object.entries(INTENT_KEYWORDS.occasion)) {
    if (words.some((w) => q.includes(w))) {
      intent.occasion = occasion;
      break;
    }
  }

  // Extract colour intent
  for (const [colour, words] of Object.entries(INTENT_KEYWORDS.colour)) {
    if (words.some((w) => q.includes(w))) {
      intent.colour = colour;
      break;
    }
  }

  // Extract category intent
  for (const [category, words] of Object.entries(INTENT_KEYWORDS.category)) {
    if (words.some((w) => q.includes(w))) {
      intent.category = category;
      break;
    }
  }

  // Extract material intent
  for (const [material, words] of Object.entries(INTENT_KEYWORDS.material)) {
    if (words.some((w) => q.includes(w))) {
      intent.material = material;
      break;
    }
  }

  // Collect remaining keywords for fuzzy matching
  intent.keywords = q
    .split(/\s+/)
    .filter(
      (w) =>
        w.length > 2 &&
        !Object.values(INTENT_KEYWORDS).some((group) =>
          Object.values(group).flat().includes(w)
        )
    );

  return intent;
}

function scoreProduct(product, intent) {
  let score = 0;

  // Gender match
  if (intent.gender) {
    if (product.gender.includes(intent.gender)) score += 30;
    else return -1; // Hard filter: exclude non-matching gender
  }

  // Age match
  if (intent.age) {
    if (product.age.includes(intent.age)) score += 15;
    else if (intent.age === "18-24" && product.age.includes("25-34")) score += 5;
  }

  // Season match
  if (intent.season) {
    if (
      product.season.includes(intent.season) ||
      product.season.includes("all-season")
    ) {
      score += 20;
    } else {
      score -= 5;
    }
  }

  // Style match
  if (intent.style) {
    if (product.style.includes(intent.style)) score += 25;
  }

  // Occasion match
  if (intent.occasion) {
    if (product.occasion.includes(intent.occasion)) score += 20;
  }

  // Colour match
  if (intent.colour) {
    if (product.colour.includes(intent.colour)) score += 15;
  }

  // Category match
  if (intent.category) {
    if (product.category === intent.category) score += 30;
    else if (product.subcategory?.toLowerCase() === intent.category.toLowerCase())
      score += 25;
  }

  // Material match
  if (intent.material) {
    if (product.material.includes(intent.material)) score += 15;
  }

  // Keyword fuzzy matching on name
  for (const kw of intent.keywords) {
    if (product.name.toLowerCase().includes(kw)) score += 10;
    if (product.characteristics.some((c) => c.includes(kw))) score += 8;
    if (product.subcategory?.toLowerCase().includes(kw)) score += 8;
  }

  return score;
}

export function smartSearch(query) {
  if (!query || query.trim().length === 0) return [];

  const intent = extractIntent(query);

  // If no intent was extracted, do a simple keyword search
  const hasIntent =
    intent.gender ||
    intent.age ||
    intent.season ||
    intent.style ||
    intent.occasion ||
    intent.colour ||
    intent.category ||
    intent.material;

  if (!hasIntent && intent.keywords.length === 0) return [];

  const results = ENRICHED_PRODUCTS.map((product) => ({
    ...product,
    score: scoreProduct(product, intent),
  }))
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score);

  return results;
}

export function getAutocompleteSuggestions(query) {
  if (!query || query.trim().length === 0) return [];

  const q = query.toLowerCase().trim();
  const seen = new Set();
  const results = [];

  // Category suggestions
  for (const [category, words] of Object.entries(INTENT_KEYWORDS.category)) {
    if (words.some((w) => w.startsWith(q) || w.includes(q))) {
      if (!seen.has(category)) {
        results.push({
          label: category,
          type: "category",
          icon: "category",
        });
        seen.add(category);
      }
    }
  }

  // Product name suggestions
  for (const product of ENRICHED_PRODUCTS) {
    if (
      product.name.toLowerCase().includes(q) &&
      !seen.has(product.name)
    ) {
      results.push({
        label: product.name,
        type: "product",
        icon: "shopping_bag",
        path: product.path,
      });
      seen.add(product.name);
    }
  }

  // Style suggestions
  for (const [style, words] of Object.entries(INTENT_KEYWORDS.style)) {
    if (words.some((w) => w.includes(q))) {
      const label = style
        .replace("-", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      if (!seen.has(label)) {
        results.push({
          label: `${label} Pieces`,
          type: "style",
          icon: "auto_awesome",
        });
        seen.add(label);
      }
    }
  }

  // Occasion suggestions
  for (const [occasion, words] of Object.entries(INTENT_KEYWORDS.occasion)) {
    if (words.some((w) => w.includes(q))) {
      const label = occasion
        .replace("-", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      if (!seen.has(label)) {
        results.push({
          label: `${label} Picks`,
          type: "occasion",
          icon: "event",
        });
        seen.add(label);
      }
    }
  }

  // Season suggestions
  for (const [season, words] of Object.entries(INTENT_KEYWORDS.season)) {
    if (words.some((w) => w.includes(q))) {
      const label = season.charAt(0).toUpperCase() + season.slice(1);
      if (!seen.has(label)) {
        results.push({
          label: `${label} Collection`,
          type: "season",
          icon: "wb_sunny",
        });
        seen.add(label);
      }
    }
  }

  // Gender suggestions
  for (const [gender, words] of Object.entries(INTENT_KEYWORDS.gender)) {
    if (words.some((w) => w.includes(q))) {
      const label = gender.charAt(0).toUpperCase() + gender.slice(1);
      if (!seen.has(label)) {
        results.push({
          label: `${label}'s Collection`,
          type: "gender",
          icon: "person",
        });
        seen.add(label);
      }
    }
  }

  return results.slice(0, 8);
}
