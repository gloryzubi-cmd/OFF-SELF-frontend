import CollectionPage from "../components/CollectionPage";

const products = [
  {
    name: "Sculptural Silver Necklace",
    price: "$450",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
    gender: ["male", "unisex"],
  },
  {
    name: "Emerald Green Gold Watch",
    price: "$1,200",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=750&fit=crop",
    gender: ["male"],
  },
  {
    name: "Cobalt Blue Clogs",
    price: "$380",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&h=750&fit=crop",
    gender: ["unisex"],
  },
  {
    name: "Silver Statement Ring",
    price: "$290",
    badge: "MOST WANTED",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop",
    gender: ["female"],
  },
  {
    name: "Burgundy Architectural Shades",
    price: "$320",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
    gender: ["female"],
  },
  {
    name: "Structured Brown Scarf",
    price: "$250",
    badge: "OFF SELF FAVORITE",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=750&fit=crop",
    gender: ["unisex"],
  },
  {
    name: "Ivory Inlay Gold Ring",
    price: "$680",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop",
    gender: ["female", "unisex"],
  },
  {
    name: "Matte Black Luxury Clogs",
    price: "$410",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop",
    gender: ["male"],
  },
];

export default function Bestsellers() {
  return (
    <CollectionPage
      title="BEST SELLERS"
      subtitle="The pieces everyone wants. Proven distinctive character."
      products={products}
    />
  );
}
