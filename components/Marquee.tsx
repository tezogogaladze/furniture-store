"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const cities = ["თბილისი", "ბათუმი", "ქუთაისი", "რუსთავი", "ზუგდიდი"];

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {cities.map((city, i) => (
        <span key={`${city}-${i}`} className="flex items-center">
          <a
            href="#"
            className="heading whitespace-nowrap px-6 transition-opacity duration-300 hover:opacity-50"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {city}
          </a>
          <span
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "var(--color-terracotta)",
              padding: "0 0.5rem",
              fontFamily: "var(--font-heading)",
            }}
            aria-hidden="true"
          >
            &bull;
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-gallery">
      <div className="mb-12 text-center">
        <span className="label-geo" style={{ color: "var(--color-clay)" }}>
          გამოცდილება
        </span>
        <h2
          className="heading mt-4"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          ეწვიეთ ჩვენს შოურუმებს
        </h2>
      </div>
      <div className="overflow-hidden">
        <div
          className="animate-marquee flex"
          style={{ width: "max-content" }}
        >
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
