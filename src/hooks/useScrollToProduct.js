import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function useScrollToProduct() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const productName = searchParams.get("product");
    if (!productName) return;

    // Wait for DOM to render
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll("[data-product-name]");
      for (const el of elements) {
        if (
          el.getAttribute("data-product-name").toLowerCase() ===
          productName.toLowerCase()
        ) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          // Add highlight effect
          el.classList.add("ring-2", "ring-primary", "ring-offset-4");
          setTimeout(() => {
            el.classList.remove("ring-2", "ring-primary", "ring-offset-4");
          }, 3000);
          break;
        }
      }
      // Clean up the query param after scrolling
      setSearchParams({}, { replace: true });
    }, 200);

    return () => clearTimeout(timer);
  }, [searchParams, setSearchParams]);
}
