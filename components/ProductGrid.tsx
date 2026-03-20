"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const products = [
  {
    name: "Keep Stacking საცავი სისტემა",
    price: "₾2,350",
    img: "https://images.unsplash.com/photo-1721385675060-9982ec72385e?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    name: "Field სკამი",
    price: "₾900",
    img: "https://images.unsplash.com/photo-1771219491795-3b4dafc1cdf3?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    name: "Field სკამი — მუხა",
    price: "₾820",
    img: "https://images.unsplash.com/photo-1768144092684-c1a5dd6c7aad?w=800&h=600&fit=crop&auto=format&q=80",
  },
];

export default function ProductGrid() {
  const ref = useScrollReveal<HTMLElement>({
    childSelector: ".product-card",
    stagger: 0.15,
  });

  return (
    <section ref={ref} className="section-gallery px-6">
      <div className="site-container">
        <div className="grid-products">
          {products.map((product, i) => (
            <a
              key={`${product.name}-${i}`}
              href="#"
              className="product-card group"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{
                    aspectRatio: "4/3",
                    transitionTimingFunction: "var(--ease-cinematic)",
                  }}
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                  }}
                >
                  {product.name}
                </h3>
                <span
                  className="label-geo"
                  style={{
                    color: "var(--color-earth-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  {product.price}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
