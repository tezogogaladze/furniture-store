"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const items = [
  {
    title: "უფასო მიტანა",
    description: "საქართველოში, ყველა შეკვეთაზე.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "აწყობა შედის",
    description: "ყველა დიდ ნაწარმზე, დამატებითი საფასურის გარეშე.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "ხუთწლიანი გარანტია",
    description: "რადგან ჩვენ ყველა ნაწარმის უკან ვდგავართ.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function TrustRow() {
  const ref = useScrollReveal<HTMLElement>({
    childSelector: ".trust-item",
    stagger: 0.15,
  });

  return (
    <section
      ref={ref}
      className="section-gallery px-6"
      style={{
        background: "var(--color-olive)",
        color: "#f5efe6",
      }}
    >
      <div className="site-container">
        <div className="grid-trust">
          {items.map((item) => (
            <div key={item.title} className="trust-item text-center">
              <div
                className="mx-auto mb-5 flex items-center justify-center"
                style={{ color: "rgba(245,239,230,0.7)" }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                }}
              >
                {item.title}
              </h3>
              <p
                className="mt-2"
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(245,239,230,0.7)",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
