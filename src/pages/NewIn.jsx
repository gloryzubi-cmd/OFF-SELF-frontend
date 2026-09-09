import CollectionPage from "../components/CollectionPage";

const products = [
  {
    name: "Emerald Chrome Collar",
    price: "$850",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d727b750?w=600&h=750&fit=crop",
    gender: ["female"],
  },
  {
    name: "Amber Architect Shades",
    price: "$420",
    badge: "JUST DROPPED",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop",
    gender: ["unisex"],
  },
  {
    name: "Sculptural Gold Signet",
    price: "$580",
    badge: null,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop",
    gender: ["male"],
  },
  {
    name: "Amber Architect Shades",
    price: "$340",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop&hue=20",
    gender: ["female"],
  },
  {
    name: "Structured Wool Scarf",
    price: "$195",
    badge: null,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=750&fit=crop",
    gender: ["unisex"],
  },
  {
    name: "Burgundy Buckle Clogs",
    price: "$460",
    badge: "RESTOCKED",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=750&fit=crop",
    gender: ["female"],
  },
  {
    name: "Cobalt Hex Watch",
    price: "$1,250",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=750&fit=crop",
    gender: ["male"],
  },
  {
    name: "Burgundy Buckle Clogs",
    price: "$460",
    badge: null,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=750&fit=crop&hue=15",
    gender: ["unisex"],
  },
];

export default function NewIn() {
  return (
    <CollectionPage
      title="NEW IN"
      subtitle="The latest pieces. Structural form, rich textures, unexpected silhouettes."
      products={products}
    />
  );
}
