/**
 * Unified product registry – single source of truth for every product on the site.
 * Each entry carries a slug used for /product/:slug routing.
 *
 * Includes:
 *   - Core catalogue products (from category pages, bestsellers, etc.)
 *   - Gender-specific products (from CATEGORY_GENDER_PRODUCTS) so every
 *     product on every filtered view can link to a working PDP.
 */

// ─── Helpers ────────────────────────────────────────────────────────────────

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function desc(name, category) {
  return `A distinctive ${category.toLowerCase()} piece from the Off Self collection — curated for those who choose their own style.`;
}

// ─── Core catalogue ─────────────────────────────────────────────────────────

const core = [
  // ──── JEWELRY ────
  { name: 'Sculptural Silver Necklace', price: '$450', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&h=1200&fit=crop', description: 'A sculptural chain necklace in polished silver. Bold links and a weighty drape make this a statement piece that commands attention without raising its voice.', colours: ['silver'], materials: ['silver', 'metal'], gender: ['male', 'unisex'] },
  { name: 'Emerald Chrome Collar', price: '$850', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1515562141589-67f0d727b750?w=900&h=1200&fit=crop', description: 'A rigid collar necklace in chrome-plated steel with an emerald-green enamel inlay. Architectural form meets vibrant colour for an unforgettable collar.', colours: ['green', 'gold'], materials: ['gold', 'chrome'], gender: ['female'] },
  { name: 'Geometric Chrome Necklace', price: '$450', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&h=1200&fit=crop', description: 'A geometric chain necklace in polished chrome. Clean lines and angular links give this piece a distinctly modern silhouette.', colours: ['chrome', 'silver'], materials: ['metal', 'chrome'], gender: ['male', 'unisex'] },
  { name: 'Chrome Statement Necklace', price: '$550', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&h=1200&fit=crop&crop=face', description: 'A bold chrome chain necklace with oversized links. Designed to be noticed — a true statement for the daring.', colours: ['chrome', 'silver'], materials: ['metal', 'chrome'], gender: ['male'] },
  { name: 'Geometric Chrome Bracelet', price: '$340', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&h=1200&fit=crop', description: 'A geometric cuff bracelet in polished chrome. Angular facets catch the light and give this piece its unmistakable edge.', colours: ['silver', 'chrome'], materials: ['metal', 'chrome'], gender: ['male', 'unisex'] },
  { name: 'Sculptural Gold Signet', price: '$580', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&h=1200&fit=crop', description: 'A heavy signet ring in 18k gold with a sculpted, organic face. Classic signet proportions reimagined with a modern, abstract seal.', colours: ['gold'], materials: ['gold'], gender: ['male'] },
  { name: 'Silver Statement Ring', price: '$290', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&h=1200&fit=crop', description: 'A sculptural silver ring with a bold, organic form. Built to stand out on any hand.', colours: ['silver'], materials: ['silver'], gender: ['female', 'unisex'] },
  { name: 'Ivory Inlay Gold Ring', price: '$680', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=900&h=1200&fit=crop', description: 'A refined gold band with a hand-set ivory inlay. Quiet luxury at its finest — a ring that whispers rather than shouts.', colours: ['gold', 'white'], materials: ['gold', 'ivory'], gender: ['female', 'unisex'] },
  { name: 'Textured Cobalt Ring Set', price: '$280', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&h=1200&fit=crop', description: 'A set of three textured cobalt rings. Each band carries a unique surface treatment — stack them or wear them solo.', colours: ['blue', 'silver'], materials: ['metal', 'cobalt'], gender: ['unisex'] },
  { name: 'Pearl Drop Earrings', price: '$340', category: 'Jewelry', subcategory: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=1200&fit=crop', description: 'Lustrous pearl drops suspended from delicate gold hooks. An elegant pairing of organic beauty and refined metalwork.', colours: ['white', 'gold'], materials: ['pearl', 'gold'], gender: ['female'] },
  { name: 'Matte Black Chain Link', price: '$520', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1599459183200-59c3f81b3b8b?w=900&h=1200&fit=crop', description: 'A matte black chain-link bracelet. Heavy-gauge links with a non-reflective finish deliver understated attitude.', colours: ['black'], materials: ['metal'], gender: ['male', 'unisex'] },

  // ──── WATCHES ────
  { name: 'Hexagonal Burgundy Watch', price: '$1,200', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&h=1200&fit=crop', description: 'A hexagonal-case automatic watch with a burgundy dial and steel bracelet. Precision Swiss movement housed in an unmistakable silhouette.', colours: ['burgundy', 'silver'], materials: ['steel', 'leather'], gender: ['male'] },
  { name: 'Emerald Green Gold Watch', price: '$1,200', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900&h=1200&fit=crop', description: 'A dress watch with an emerald-green sunburst dial and gold-toned case. Luxurious, eye-catching, and unmistakably bold.', colours: ['green', 'gold'], materials: ['gold'], gender: ['male'] },
  { name: 'Cobalt Hex Watch', price: '$1,250', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&h=1200&fit=crop', description: 'A cobalt-blue dial in a hexagonal steel case. Where colour meets architecture — a watch that stands apart.', colours: ['blue'], materials: ['steel'], gender: ['male', 'unisex'] },
  { name: 'Matte Titanium Chronograph', price: '$980', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=900&h=1200&fit=crop', description: 'A lightweight titanium chronograph with a matte-black finish. Built for precision and designed for everyday resilience.', colours: ['black', 'silver'], materials: ['titanium'], gender: ['male'] },
  { name: 'Rose Gold Minimalist', price: '$890', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=900&h=1200&fit=crop', description: 'A slim rose-gold watch with a clean white dial. Minimalism distilled to its purest — elegance without excess.', colours: ['rose-gold', 'pink'], materials: ['rose-gold'], gender: ['female'] },
  { name: 'Black Ceramic Diver', price: '$1,450', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=900&h=1200&fit=crop', description: 'A black ceramic diver with 300m water resistance. Scratch-proof, lightweight, and ready for anything the ocean throws at it.', colours: ['black'], materials: ['ceramic'], gender: ['male'] },
  { name: 'Skeleton Dial Automatic', price: '$1,680', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=900&h=1200&fit=crop', description: 'A skeleton automatic watch revealing the full movement through a sapphire crystal. Mechanical artistry on full display.', colours: ['silver', 'gold'], materials: ['steel', 'sapphire'], gender: ['male'] },
  { name: 'Dual Time Zone Traveler', price: '$1,100', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&h=1200&fit=crop', description: 'A dual time-zone watch with an independent hour hand. Two time zones at a glance — designed for those who move between worlds.', colours: ['silver', 'black'], materials: ['steel'], gender: ['male'] },
  { name: 'Rose Gold Mini Watch', price: '$890', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=900&h=1200&fit=crop', description: 'A petite rose-gold watch with a delicate bracelet. Slim, feminine, and effortlessly refined.', colours: ['rose-gold', 'pink'], materials: ['rose-gold'], gender: ['female'] },
  { name: 'Crystal Dial Watch', price: '$1,100', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=900&h=1200&fit=crop', description: 'A gold-cased watch with a crystal-set dial that catches light from every angle. Time meets treasure.', colours: ['gold', 'white'], materials: ['gold', 'crystal'], gender: ['female'] },

  // ──── EYEWEAR ────
  { name: 'Amber Architectural Shades', price: '$420', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&h=1200&fit=crop', description: 'Oversized architectural sunglasses with amber-tinted lenses and bold acetate frames. A statement for those who see the world differently.', colours: ['amber', 'brown'], materials: ['acetate'], gender: ['unisex'] },
  { name: 'Amber Architect Shades', price: '$420', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&h=1200&fit=crop', description: 'Architectural sunglasses in warm amber acetate. Clean lines, bold proportions, and a lens that flatters every face.', colours: ['amber', 'brown'], materials: ['acetate'], gender: ['unisex'] },
  { name: 'Burgundy Architectural Shades', price: '$320', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&h=1200&fit=crop', description: 'Cat-eye sunglasses in rich burgundy acetate. Architectural precision meets vintage drama.', colours: ['burgundy', 'red'], materials: ['acetate'], gender: ['female'] },
  { name: 'Chrome Aviator Frames', price: '$380', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&h=1200&fit=crop', description: 'Classic aviator frames in polished chrome. Timeless design, updated with a mirror finish.', colours: ['silver', 'chrome'], materials: ['metal'], gender: ['male'] },
  { name: 'Matte Black Round Frames', price: '$290', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&h=1200&fit=crop', description: 'Round sunglasses in matte black acetate. Understated, intellectual, and endlessly versatile.', colours: ['black'], materials: ['acetate'], gender: ['unisex'] },
  { name: 'Sculptural Cat-Eye', price: '$450', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=900&h=1200&fit=crop', description: 'Sculptural cat-eye frames with a bold upswept silhouette. Dramatic, confident, and unapologetically feminine.', colours: ['brown', 'tortoise'], materials: ['acetate'], gender: ['female'] },
  { name: 'Clear Frame Optical', price: '$260', category: 'Eyewear', subcategory: 'Optical', image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&h=1200&fit=crop', description: 'Transparent optical frames with a clean rectangular shape. Nearly invisible, effortlessly modern.', colours: ['white'], materials: ['acetate'], gender: ['unisex'] },
  { name: 'Oversized Tortoiseshell', price: '$340', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&h=1200&fit=crop&q=80&sat=-50', description: 'Oversized tortoiseshell sunglasses with rich amber and brown mottling. A best seller for a reason.', colours: ['brown', 'amber'], materials: ['acetate'], gender: ['unisex'] },
  { name: 'Wire Rim Geometric', price: '$310', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&h=1200&fit=crop&q=80&sat=-30', description: 'Geometric wire-rim frames with angular lenses. Light, sharp, and distinctly modern.', colours: ['silver'], materials: ['metal'], gender: ['unisex'] },

  // ──── HEADWEAR ────
  { name: 'Structured Wool Beret', price: '$180', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=900&h=1200&fit=crop', description: 'A structured beret in dense Merino wool. French heritage, modern edge — a hat that completes any look.', colours: ['black'], materials: ['wool'], gender: ['unisex'] },
  { name: 'Leather Sculptural Cap', price: '$220', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=900&h=1200&fit=crop', description: 'A sculptural cap in smooth black leather. Structured, sleek, and unmistakably premium.', colours: ['black'], materials: ['leather'], gender: ['male'] },
  { name: 'Minimal Black Fedora', price: '$280', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1514327605112-886be6ee2965?w=900&h=1200&fit=crop', description: 'A minimal fedora in black felt. Clean lines, classic proportions — timeless headwear for the modern wardrobe.', colours: ['black'], materials: ['felt'], gender: ['male'] },
  { name: 'Knit Beanie Merino', price: '$95', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337623-91b1a0d3a03c?w=900&h=1200&fit=crop', description: 'A fine-knit beanie in soft Merino wool. Warm, lightweight, and effortlessly cool.', colours: ['black', 'grey'], materials: ['wool'], gender: ['unisex'] },
  { name: 'Wide Brim Felt Hat', price: '$320', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=900&h=1200&fit=crop', description: 'A wide-brim hat in dense wool felt. Dramatic, elegant, and built to turn heads.', colours: ['black', 'brown'], materials: ['felt'], gender: ['female'] },
  { name: 'Canvas Bucket Hat', price: '$140', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=900&h=1200&fit=crop&hue=25', description: 'A relaxed bucket hat in heavy canvas. Casual, packable, and ready for summer adventures.', colours: ['white', 'beige'], materials: ['canvas'], gender: ['unisex'] },
  { name: 'Wool Flat Cap', price: '$190', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=900&h=1200&fit=crop&q=80&hue=30', description: 'A classic flat cap in woven wool. Heritage style with a clean, structured profile.', colours: ['brown', 'grey'], materials: ['wool'], gender: ['male'] },
  { name: 'Leather Newsboy Cap', price: '$240', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1514327605112-886be6ee2965?w=900&h=1200&fit=crop&q=80&hue=30', description: 'A newsboy cap in supple leather with a buttoned crown. Rugged refinement for the modern gentleman.', colours: ['brown', 'black'], materials: ['leather'], gender: ['male'] },

  // ──── FOOTWEAR ────
  { name: 'Burgundy Buckle Clogs', price: '$460', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&h=1200&fit=crop', description: 'Clogs in rich burgundy leather with a sculptural brass buckle. Architectural form meets artisanal craft.', colours: ['burgundy', 'red'], materials: ['leather'], gender: ['female'] },
  { name: 'Cobalt Blue Clogs', price: '$380', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=900&h=1200&fit=crop', description: 'Bold cobalt-blue clogs in smooth leather. Colour-blocked and confidence-boosting.', colours: ['blue'], materials: ['leather'], gender: ['unisex'] },
  { name: 'Matte Black Luxury Clogs', price: '$410', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=1200&fit=crop', description: 'Matte-black leather clogs with a chunky wooden sole. Luxury, redefined in the most unlikely silhouette.', colours: ['black'], materials: ['leather'], gender: ['male'] },
  { name: 'Suede Chelsea Boots', price: '$520', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&h=1200&fit=crop', description: 'Chelsea boots in supple suede with elastic side panels. A refined classic for every season.', colours: ['brown', 'tan'], materials: ['suede', 'leather'], gender: ['male'] },
  { name: 'Leather Loafers', price: '$380', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900&h=1200&fit=crop', description: 'Polished leather loafers with a hand-stitched apron toe. Desk to dinner without missing a step.', colours: ['black', 'brown'], materials: ['leather'], gender: ['male'] },
  { name: 'Chunky Sole Sneakers', price: '$340', category: 'Footwear', subcategory: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&h=1200&fit=crop', description: 'Platform sneakers with a chunky rubber sole and clean leather upper. Streetwear elevated.', colours: ['white'], materials: ['leather', 'rubber'], gender: ['unisex'] },
  { name: 'Minimalist Sandals', price: '$280', category: 'Footwear', subcategory: 'Sandals', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=900&h=1200&fit=crop', description: 'Strappy leather sandals in a pared-back design. Summer essential with premium construction.', colours: ['black', 'brown'], materials: ['leather'], gender: ['unisex'] },
  { name: 'Platform Desert Boots', price: '$450', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=900&h=1200&fit=crop', description: 'Desert boots on a raised platform sole. Classic suede upper meets a modern, architectural base.', colours: ['tan', 'brown'], materials: ['suede', 'leather'], gender: ['unisex'] },

  // ──── ACCESSORIES ────
  { name: 'Structured Wool Scarf', price: '$195', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1576506542790-51241b1e7e6d?w=900&h=1200&fit=crop', description: 'A structured scarf in dense wool with clean-finished edges. Warmth and sophistication in equal measure.', colours: ['brown'], materials: ['wool'], gender: ['unisex'] },
  { name: 'Structured Chocolate Scarf', price: '$185', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1543076499-a6133cbab4be?w=900&h=1200&fit=crop', description: 'A rich chocolate-brown scarf in structured wool. The perfect autumn layer.', colours: ['brown'], materials: ['wool'], gender: ['unisex'] },
  { name: 'Structured Brown Scarf', price: '$250', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1576506542790-51241b1e7e6d?w=900&h=1200&fit=crop&q=80&hue=40', description: 'A structured brown scarf in premium wool. Clean lines, warm weave, effortless layering.', colours: ['brown'], materials: ['wool'], gender: ['unisex'] },
  { name: 'Silk Scarf', price: '$240', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc64?w=900&h=1200&fit=crop', description: 'A silk scarf with a multi-tonal print. Luxurious hand-feel, versatile styling.', colours: ['multi'], materials: ['silk'], gender: ['female'] },
  { name: 'Wool Scarf', price: '$195', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1576506542790-51241b1e7e6d?w=900&h=1200&fit=crop&q=80&hue=20', description: 'A classic wool scarf in a versatile grey-brown. Soft, warm, and endlessly wearable.', colours: ['grey', 'brown'], materials: ['wool'], gender: ['unisex'] },
  { name: 'Leather Belt Architect', price: '$220', category: 'Accessories', subcategory: 'Belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=1200&fit=crop', description: 'A sculptural leather belt with a geometric buckle. Architecture you can wear around your waist.', colours: ['black', 'brown'], materials: ['leather'], gender: ['male'] },
  { name: 'Canvas Tote Minimal', price: '$160', category: 'Accessories', subcategory: 'Bag', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=900&h=1200&fit=crop', description: 'A minimal tote in heavy canvas. Clean construction, zero embellishment — pure function, pure form.', colours: ['beige', 'white'], materials: ['canvas'], gender: ['unisex'] },
  { name: 'Leather Card Holder', price: '$120', category: 'Accessories', subcategory: 'Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&h=1200&fit=crop', description: 'A slim card holder in smooth black leather. Four slots, zero bulk — the everyday essential, refined.', colours: ['black'], materials: ['leather'], gender: ['male'] },
  { name: 'Silk Pocket Square Set', price: '$140', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=900&h=1200&fit=crop', description: 'A set of two silk pocket squares in complementary patterns. The finishing touch for any jacket.', colours: ['multi'], materials: ['silk'], gender: ['male'] },
  { name: 'Woven Leather Bracelet', price: '$95', category: 'Accessories', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1599459183200-59c3f81b3b8b?w=900&h=1200&fit=crop&q=80&hue=30', description: 'A woven leather bracelet with a magnetic clasp. Casual, tactile, and built to patina beautifully.', colours: ['brown'], materials: ['leather'], gender: ['male', 'unisex'] },
  { name: 'Minimalist Keychain', price: '$65', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=1200&fit=crop&q=80&hue=60', description: 'A minimalist keychain in brushed metal. Simple, solid, and unmistakably Off Self.', colours: ['silver'], materials: ['metal'], gender: ['unisex'] },
];

// ─── Gender-specific products (from CATEGORY_GENDER_PRODUCTS) ───────────────
// These ensure every product shown on gender-filtered views has a working PDP.

const genderSpecific = [
  // JEWELRY – Male
  { name: 'Titanium Chain Link', price: '$380', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Matte Black Cuff', price: '$290', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Silver Signet Ring', price: '$420', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Gunmetal Pendant', price: '$260', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1599459183200-59c3f81b3b8b?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Chrome Link Bracelet', price: '$340', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=750&fit=crop&q=80&hue=10', gender: ['male'] },
  { name: 'Oxidized Silver Band', price: '$190', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop&q=80&hue=10', gender: ['male'] },
  { name: 'Industrial Bar Necklace', price: '$310', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=750&fit=crop&hue=15', gender: ['male'] },
  { name: 'Black Diamond Studs', price: '$480', category: 'Jewelry', subcategory: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop', gender: ['male'] },
  // JEWELRY – Female
  { name: 'Gold Layered Necklace', price: '$520', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1515562141589-67f0d727b750?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Sculptural Gold Cuff', price: '$450', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Crystal Pendant Chain', price: '$380', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Rose Gold Signet', price: '$290', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop&hue=25', gender: ['female'] },
  { name: 'Hammered Gold Ring', price: '$260', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop&hue=20', gender: ['female'] },
  { name: 'Twisted Wire Bracelet', price: '$220', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1599459183200-59c3f81b3b8b?w=600&h=750&fit=crop&q=80&hue=15', gender: ['female'] },
  { name: 'Emerald Stud Earrings', price: '$580', category: 'Jewelry', subcategory: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  // JEWELRY – Unisex
  { name: 'Minimal Silver Band', price: '$180', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop', gender: ['unisex'] },
  { name: 'Geometric Pendant', price: '$280', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop&hue=30', gender: ['unisex'] },
  { name: 'Chrome Chain', price: '$320', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=750&fit=crop&hue=45', gender: ['unisex'] },
  { name: 'Matte Ring Set', price: '$240', category: 'Jewelry', subcategory: 'Ring', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop&q=80&hue=20', gender: ['unisex'] },
  { name: 'Sculptural Cuff', price: '$360', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Titanium Hoops', price: '$200', category: 'Jewelry', subcategory: 'Earrings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Link Bracelet', price: '$290', category: 'Jewelry', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1599459183200-59c3f81b3b8b?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Bar Pendant Necklace', price: '$250', category: 'Jewelry', subcategory: 'Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },

  // WATCHES – Male
  { name: 'Chronograph Steel', price: '$1,200', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Dive Watch Black', price: '$1,450', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Pilot Chronograph', price: '$1,100', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Skeleton Automatic', price: '$1,680', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Titanium Field Watch', price: '$980', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Racing Chrono', price: '$1,350', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Ceramic Diver', price: '$1,550', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'GMT Master', price: '$1,800', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=750&fit=crop', gender: ['male'] },
  // WATCHES – Female
  { name: 'Rose Gold Mini', price: '$890', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Pearl Bezel Watch', price: '$750', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1594534475803-b34b4bb32f0e?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Crystal Dial', price: '$1,100', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Slim Gold Bracelet', price: '$950', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1599922407934-f975f9a2073f?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Minimalist Rose', price: '$680', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Diamond Bezel', price: '$1,400', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  { name: 'Ceramic White', price: '$1,050', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1594534475803-b34b4bb32f0e?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Petite Gold', price: '$720', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1599922407934-f975f9a2073f?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  // WATCHES – Unisex
  { name: 'Classic Steel', price: '$980', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1594534475803-b34b4bb32f0e?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Minimal White', price: '$750', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1599922407934-f975f9a2073f?w=600&h=750&fit=crop&hue=30', gender: ['unisex'] },
  { name: 'Matte Black Watch', price: '$1,100', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&h=750&fit=crop&hue=25', gender: ['unisex'] },
  { name: 'Chrono Simple', price: '$1,250', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=750&fit=crop&hue=30', gender: ['unisex'] },
  { name: 'Titanium Slim', price: '$890', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Ceramic Mix', price: '$1,050', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=750&fit=crop&hue=30', gender: ['unisex'] },
  { name: 'Automatic Daily', price: '$1,200', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=750&fit=crop&hue=25', gender: ['unisex'] },
  { name: 'Pilot Simple', price: '$1,100', category: 'Watches', subcategory: 'Watch', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },

  // EYEWEAR – Male
  { name: 'Aviator Chrome', price: '$380', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Wayfarer Matte', price: '$320', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Round Titanium', price: '$290', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Clubmaster Retro', price: '$340', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Sport Shield', price: '$420', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Square Acetate', price: '$280', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Pilot Gold', price: '$450', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop&brightness=90', gender: ['male'] },
  { name: 'Browline Classic', price: '$310', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=750&fit=crop&brightness=90', gender: ['male'] },
  // EYEWEAR – Female
  { name: 'Cat-Eye Tortoise', price: '$450', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=750&fit=crop&hue=20', gender: ['female'] },
  { name: 'Oversized Round', price: '$380', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Butterfly Frame', price: '$340', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  { name: 'Rimless Crystal', price: '$520', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=750&fit=crop&hue=20', gender: ['female'] },
  { name: 'Heart Shape', price: '$290', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Square Gold', price: '$400', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  { name: 'Wire Cat-Eye', price: '$360', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=750&fit=crop&hue=30', gender: ['female'] },
  { name: 'Retro Oval', price: '$310', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop&hue=25', gender: ['female'] },
  // EYEWEAR – Unisex
  { name: 'Wayfarer Classic', price: '$320', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Round Metal', price: '$290', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Rectangle Slim', price: '$280', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Square Matte', price: '$340', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Clubmaster Semi', price: '$360', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Wire Round', price: '$260', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Sport Wrap', price: '$380', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop&hue=45', gender: ['unisex'] },
  { name: 'Pilot Classic', price: '$350', category: 'Eyewear', subcategory: 'Sunglasses', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=750&fit=crop&hue=45', gender: ['unisex'] },

  // HEADWEAR – Male
  { name: 'Leather Fedora', price: '$280', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1514327605112-886be6ee2965?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Wool Flat Cap', price: '$190', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Canvas Bucket', price: '$140', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Newsboy Cap', price: '$220', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop&hue=20', gender: ['male'] },
  { name: 'Beret Wool', price: '$160', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1514327605112-886be6ee2965?w=600&h=750&fit=crop&hue=15', gender: ['male'] },
  { name: 'Military Cap', price: '$180', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop&hue=15', gender: ['male'] },
  { name: 'Wide Brimfelt', price: '$320', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Knit Beanie', price: '$95', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337623-91b1a0d3a03c?w=600&h=750&fit=crop', gender: ['male'] },
  // HEADWEAR – Female
  { name: 'Wide Brim Wool', price: '$320', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Straw Sun Hat', price: '$240', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop&hue=25', gender: ['female'] },
  { name: 'Beret Cashmere', price: '$195', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  { name: 'Floppy Brim', price: '$280', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=750&fit=crop&hue=25', gender: ['female'] },
  { name: 'Pillbox Hat', price: '$200', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1514327605112-886be6ee2965?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  { name: 'Knit Headband', price: '$85', category: 'Headwear', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1576871337623-91b1a0d3a03c?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Felt Cloche', price: '$260', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop&hue=10', gender: ['female'] },
  { name: 'Bucket Canvas', price: '$150', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop&hue=25', gender: ['female'] },
  // HEADWEAR – Unisex
  { name: 'Classic Fedora', price: '$250', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Beanie Merino', price: '$95', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337623-91b1a0d3a03c?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Bucket Hat', price: '$140', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Beret Classic', price: '$160', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Cap Minimal', price: '$120', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Wide Brim Hat', price: '$280', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=750&fit=crop&hue=50', gender: ['unisex'] },
  { name: 'Knit Cap', price: '$80', category: 'Headwear', subcategory: 'Hat', image: 'https://images.unsplash.com/photo-1576871337623-91b1a0d3a03c?w=600&h=750&fit=crop&hue=45', gender: ['unisex'] },
  { name: 'Flat Cap', price: '$180', category: 'Headwear', subcategory: 'Cap', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },

  // FOOTWEAR – Male
  { name: 'Leather Chelsea', price: '$520', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Suede Loafer', price: '$380', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Desert Boot', price: '$450', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Oxford Classic', price: '$480', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop&hue=10', gender: ['male'] },
  { name: 'Chunky Sneaker', price: '$340', category: 'Footwear', subcategory: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Hiking Boot', price: '$550', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600&h=750&fit=crop&hue=15', gender: ['male'] },
  { name: 'Monk Strap', price: '$420', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=750&fit=crop&hue=10', gender: ['male'] },
  { name: 'Minimal Sneaker', price: '$290', category: 'Footwear', subcategory: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=750&fit=crop&hue=10', gender: ['male'] },
  // FOOTWEAR – Female
  { name: 'Kitten Heel', price: '$420', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Platform Loafer', price: '$380', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=750&fit=crop&hue=20', gender: ['female'] },
  { name: 'Strappy Sandal', price: '$340', category: 'Footwear', subcategory: 'Sandals', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Ankle Boot', price: '$480', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop&hue=20', gender: ['female'] },
  { name: 'Mule Heel', price: '$360', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Pointed Flat', price: '$280', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=750&fit=crop&hue=30', gender: ['female'] },
  { name: 'Slingback', price: '$390', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Sneaker Platform', price: '$320', category: 'Footwear', subcategory: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  // FOOTWEAR – Unisex
  { name: 'Classic Sneaker', price: '$320', category: 'Footwear', subcategory: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Minimal Loafer', price: '$360', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Canvas Slip-On', price: '$180', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Leather Boot', price: '$480', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Clog Classic', price: '$380', category: 'Footwear', subcategory: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Sandal Flat', price: '$240', category: 'Footwear', subcategory: 'Sandals', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
  { name: 'Chelsea Boot', price: '$450', category: 'Footwear', subcategory: 'Boots', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop&hue=45', gender: ['unisex'] },
  { name: 'Chunky Sole', price: '$340', category: 'Footwear', subcategory: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },

  // ACCESSORIES – Male
  { name: 'Leather Belt', price: '$220', category: 'Accessories', subcategory: 'Belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Canvas Tote', price: '$160', category: 'Accessories', subcategory: 'Bag', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Card Holder', price: '$120', category: 'Accessories', subcategory: 'Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop', gender: ['male'] },
  { name: 'Wool Scarf Male', price: '$195', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1543076499-a6133cbab4be?w=600&h=750&fit=crop&q=80&hue=20', gender: ['male'] },
  { name: 'Watch Strap', price: '$85', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop&hue=10', gender: ['male'] },
  { name: 'Leather Wallet', price: '$180', category: 'Accessories', subcategory: 'Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop&hue=10', gender: ['male'] },
  { name: 'Keychain Metal', price: '$65', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop&hue=20', gender: ['male'] },
  { name: 'Bracelet Leather', price: '$95', category: 'Accessories', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=750&fit=crop&q=80&hue=20', gender: ['male'] },
  // ACCESSORIES – Female
  { name: 'Silk Scarf Female', price: '$240', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc64?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Clutch Leather', price: '$320', category: 'Accessories', subcategory: 'Bag', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Pearl Bracelet', price: '$180', category: 'Accessories', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1599459183200-59c3f81b3b8b?w=600&h=750&fit=crop&q=80&hue=20', gender: ['female'] },
  { name: 'Pocket Square Set', price: '$140', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=750&fit=crop', gender: ['female'] },
  { name: 'Woven Bag', price: '$280', category: 'Accessories', subcategory: 'Bag', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=750&fit=crop&hue=25', gender: ['female'] },
  { name: 'Belt Chain', price: '$190', category: 'Accessories', subcategory: 'Belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop&hue=15', gender: ['female'] },
  { name: 'Scarf Cashmere', price: '$320', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1576871337623-91b1a0d3a03c?w=600&h=750&fit=crop&q=80&hue=10', gender: ['female'] },
  { name: 'Hair Clip Gold', price: '$120', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=750&fit=crop&q=80&hue=30', gender: ['female'] },
  // ACCESSORIES – Unisex
  { name: 'Minimal Belt', price: '$180', category: 'Accessories', subcategory: 'Belt', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Canvas Bag', price: '$140', category: 'Accessories', subcategory: 'Bag', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Card Wallet', price: '$100', category: 'Accessories', subcategory: 'Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Wool Scarf Unisex', price: '$170', category: 'Accessories', subcategory: 'Scarf', image: 'https://images.unsplash.com/photo-1576506542790-51241b1e7e6d?w=600&h=750&fit=crop&q=80&hue=35', gender: ['unisex'] },
  { name: 'Key Ring', price: '$55', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop&hue=45', gender: ['unisex'] },
  { name: 'Silk Pocket Square', price: '$120', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=750&fit=crop&hue=35', gender: ['unisex'] },
  { name: 'Bracelet Chain', price: '$85', category: 'Accessories', subcategory: 'Bracelet', image: 'https://images.unsplash.com/photo-1599459183200-59c3f81b3b8b?w=600&h=750&fit=crop&q=80&hue=35', gender: ['unisex'] },
  { name: 'Leather Strap', price: '$75', category: 'Accessories', subcategory: 'Accessory', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop&hue=40', gender: ['unisex'] },
];

// ─── Build unified registry with slugs ──────────────────────────────────────

// De-duplicate by name (core takes priority)
const seen = new Set();
const registry = [];

for (const p of [...core, ...genderSpecific]) {
  const key = p.name.toLowerCase();
  if (seen.has(key)) continue;
  seen.add(key);
  registry.push({
    ...p,
    slug: slug(p.name),
    description: p.description || desc(p.name, p.category),
    colours: p.colours || [],
    materials: p.materials || [],
  });
}

// ─── Lookup maps ────────────────────────────────────────────────────────────

const slugMap = new Map(registry.map((p) => [p.slug, p]));

/**
 * Find a product by its slug.
 */
export function getProductBySlug(s) {
  return slugMap.get(s) || null;
}

/**
 * Find a product by its display name (legacy support).
 */
export function getProductByName(name) {
  return registry.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  ) || null;
}

/**
 * Get all products, optionally filtered by category.
 */
export function getAllProducts(category) {
  if (!category) return registry;
  return registry.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get products filtered by category AND gender.
 * gender = 'male' | 'female' | 'unisex' | 'all' | null
 * When gender is 'all' or null, returns every product in the category
 * regardless of its gender tag.
 */
export function getCategoryGenderProducts(category, gender) {
  const cats = registry.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  if (!gender || gender === 'all') return cats;
  return cats.filter(
    (p) => p.gender && p.gender.includes(gender)
  );
}

export default registry;
