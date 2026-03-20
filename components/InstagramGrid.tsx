"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const images = [
  "https://images.unsplash.com/photo-1773578639782-2046b150ce28?w=400&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1748679979601-dc9ec43d900d?w=400&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1758977245854-b0ea036e0ce2?w=400&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1757439402173-2ed1421f7466?w=400&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1771219491795-3b4dafc1cdf3?w=400&h=400&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=400&h=400&fit=crop&auto=format&q=80",
];

export default function InstagramGrid() {
  const ref = useScrollReveal<HTMLElement>({
    childSelector: ".ig-item",
    stagger: 0.08,
  });

  return (
    <section ref={ref} className="section-gallery px-6">
      <div className="site-container">
        <div className="mb-12 text-center">
          <span className="label-geo" style={{ color: "var(--color-clay)" }}>
            საზოგადოება
          </span>
          <h2
            className="heading mt-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            გამოგვყევით
          </h2>
          <a
            href="https://www.instagram.com/sundaysfurniture/"
            target="_blank"
            rel="noopener noreferrer"
            className="label-geo mt-3 inline-block transition-opacity duration-300 hover:opacity-50"
            style={{ color: "var(--color-terracotta)", fontSize: "0.6rem" }}
          >
            @sundaysfurniture
          </a>
        </div>

        <div className="grid-ig">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/sundaysfurniture/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-item overflow-hidden rounded-sm transition-opacity duration-300 hover:opacity-80"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={src}
                alt={`ინტერიერი ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
