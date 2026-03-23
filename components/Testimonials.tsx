"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const testimonials = [
  {
    quote:
      "ჩვენ ძალიან მოგვწონს ახალი დივანი. ის იდეალურ ბალანსს ინარჩუნებს კომფორტსა და მხარდაჭერას შორის.",
    author: "სამი",
    product: "Movie Night დივანი",
  },
  {
    quote:
      "მაგიდის ზედაპირი ისეთი გლუვია. უამრავი კომპლიმენტი მივიღეთ მასზე!",
    author: "მარკო",
    product: "Plane სასადილო მაგიდა",
  },
  {
    quote:
      "ეს საწოლი ისეთი ლამაზად არის დამზადებული. მიყვარს საზურგის სირბილე და ძალიან პრემიუმ შეგრძნებაა.",
    author: "ლაურა",
    product: "Dream საწოლი საცავით",
  },
  {
    quote:
      "ჟურნალის მაგიდამ მისაღებს ახალი სიცოცხლე შესძინა. მომსახურება საოცარი იყო.",
    author: "ანა",
    product: "Frame ჟურნალის მაგიდა",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal<HTMLElement>({
    childSelector: ".testimonial-card",
    stagger: 0.12,
  });

  return (
    <section ref={ref} className="section-gallery px-6" style={{ background: "var(--color-cream)" }}>
      <div className="site-container">
        <div className="mb-14 text-center">
          <span className="label-geo" style={{ color: "var(--color-clay)" }}>
            ხმები
          </span>
          <h2
            className="heading mt-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            თქვენი სიტყვებით
          </h2>
        </div>

        <div
          className="scrollbar-hide -mx-6 flex gap-6 overflow-x-auto px-6 pb-4"
          style={{ scrollSnapType: "x proximity" }}
        >
          {testimonials.map((t, i) => (
            <a
              key={i}
              href="#"
              className="testimonial-card flex shrink-0 flex-col justify-between rounded-sm p-7"
              style={{
                width: 360,
                scrollSnapAlign: "start",
                background: "var(--color-sand-light)",
              }}
            >
              <div>
                <span
                  className="heading"
                  style={{
                    fontSize: "3rem",
                    lineHeight: 1,
                    color: "var(--color-terracotta)",
                    display: "block",
                  }}
                >
                  &ldquo;
                </span>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {t.quote}
                </p>
              </div>
              <div
                className="mt-8 flex items-center justify-between pt-5"
                style={{ borderTop: "1px solid var(--color-earth-border)" }}
              >
                <span
                  className="label-geo"
                  style={{
                    color: "var(--color-earth-muted)",
                    fontSize: "0.6rem",
                  }}
                >
                  &mdash; {t.author}
                </span>
                <span
                  className="label-geo"
                  style={{
                    color: "var(--color-terracotta)",
                    fontSize: "0.6rem",
                  }}
                >
                  {t.product}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
