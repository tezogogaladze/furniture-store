"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function SectionIntro() {
  const ref = useScrollReveal<HTMLElement>({ childSelector: ".reveal-child" });

  return (
    <section ref={ref} className="section-gallery px-6">
      <div className="mx-auto" style={{ maxWidth: 720 }}>
        <span
          className="reveal-child label-geo block text-center"
          style={{ color: "var(--color-clay)" }}
        >
          ჩვენი ფილოსოფია
        </span>
        <h2
          className="reveal-child heading mt-6 text-center"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          ჩვენ ვეხმარებით ადამიანებს შექმნან სივრცე,
          <br />
          სადაც კომფორტი და დიზაინი ერთიანდება.
        </h2>
        <p
          className="reveal-child mt-8 text-center"
          style={{ color: "var(--color-earth-muted)", lineHeight: 1.8 }}
        >
          თითოეული პროდუქტი შერჩეულია კომფორტისა და ვიზუალური ბალანსის მიხედვით.
        </p>
        <div className="reveal-child mt-10 text-center">
          <a
            href="#"
            className="label-geo inline-block transition-opacity duration-300 hover:opacity-50"
            style={{
              borderBottom: "1px solid var(--fg)",
              paddingBottom: 3,
              letterSpacing: "0.15em",
            }}
          >
            ჩვენ შესახებ
          </a>
        </div>
      </div>
    </section>
  );
}
