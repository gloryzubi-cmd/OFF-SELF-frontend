import CollectionPage from "../components/CollectionPage";

const products = [
  {
    name: "Geometric Chrome Necklace",
    price: "$450",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
    gender: ["male", "unisex"],
  },
  {
    name: "Hexagonal Burgundy Watch",
    price: "$1,200",
    badge: null,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=750&fit=crop",
    gender: ["male"],
  },
  {
    name: "Textured Cobalt Ring Set",
    price: "$280",
    badge: "LIMITED",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop",
    gender: ["unisex"],
  },
  {
    name: "Amber Architectural Shades",
    price: "$320",
    badge: null,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop",
    gender: ["female"],
  },
  {
    name: "Sculptural Ivory Inlay Ring",
    price: "$680",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop",
    gender: ["female", "unisex"],
  },
  {
    name: "Structured Chocolate Scarf",
    price: "$185",
    badge: null,
    image: "https://images.unsplash.com/photo-1543076499-a6133cbab4be?w=600&h=750&fit=crop",
    gender: ["unisex"],
  },
  {
    name: "Chrome Statement Necklace",
    price: "$550",
    badge: null,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop&crop=face",
    gender: ["male"],
  },
];

export default function ShopTheEdit() {
  return (
    <CollectionPage
      title="THE EDIT"
      subtitle="Selected pieces for those who choose their own style."
      products={products}
      showLifestyle
      lifestyleCard={{
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=600&fit=crop",
        alt: "OFF SELF Luxury Clogs Editorial",
        title: "custom crocks",
        ctaLabel: "EXPLORE FOOTWEAR",
        ctaLink: "/footwear",
      }}
    />
  );
}
