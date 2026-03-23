"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const publications = [
  "Architectural Digest",
  "Dwell",
  "Domino",
  "House & Home",
  "Forbes",
  "The New York Times",
];

export default function PressLogos() {
  const ref = useScrollReveal<HTMLElement>({
    childSelector: ".press-logo",
    stagger: 0.08,
  });

  return (
    <section
      ref={ref}
      className="section-gallery px-6"
      style={{ background: "var(--color-sand-light)" }}
    >
      <div className="site-container">
        <span
          className="label-geo block text-center"
          style={{ color: "var(--color-clay)" }}
        >
          პრესა
        </span>
        <h2
          className="heading mt-4 text-center"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          ნანახი მედიაში
        </h2>
        <div
          className="mt-12 flex flex-wrap items-center justify-center"
          style={{ gap: "2rem 3.5rem" }}
        >
          {publications.map((pub) => (
            <span
              key={pub}
              className="press-logo"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                color: "var(--color-clay)",
                letterSpacing: "0.02em",
              }}
            >
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
