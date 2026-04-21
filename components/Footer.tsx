"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const columns = [
  {
    title: "მაღაზია",
    links: [
      "ბესტსელერები",
      "დივნები",
      "საწოლები",
      "სასადილო მაგიდები",
      "ჟურნალის მაგიდები",
      "ეზოს ავეჯი",
      "მთელი ავეჯი",
    ],
  },
  {
    title: "შესახებ",
    links: [
      "ჩვენი ისტორია",
      "შოურუმები",
      "კარგ კომპანიაში",
      "კარიერა",
      "პრესა",
    ],
  },
  {
    title: "დახმარება",
    links: [
      "დაგვიკავშირდით",
      "ხშირი კითხვები",
      "მიტანა და დაბრუნება",
      "გარანტია",
      "აწყობა",
      "ტრეიდ პროგრამა",
    ],
  },
];

export default function Footer() {
  const ref = useScrollReveal<HTMLElement>({ childSelector: ".footer-col" });

  return (
    <footer
      ref={ref}
      className="px-6"
      style={{
        paddingTop: "6rem",
        paddingBottom: "4rem",
        borderTop: "1px solid var(--color-earth-border)",
      }}
    >
      <div className="site-container">
        <div className="grid-footer">
          <div className="footer-col">
            <div className="flex items-center gap-2">
              <span style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
                <span style={{ fontFamily: "'Dachi Lynx', 'AR Archy', serif", fontSize: "1.05rem", letterSpacing: "0.02em" }}>
                  კაზა ტუა
                </span>
                <span style={{ opacity: 0.6, fontFamily: "sans-serif", fontSize: "1rem", lineHeight: 1 }}>·</span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1.05rem", letterSpacing: "0.03em", fontWeight: 800 }}>
                  Casa Tua
                </span>
              </span>
            </div>
            <p
              className="mt-4"
              style={{
                fontSize: "0.85rem",
                color: "var(--color-earth-muted)",
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              მშვენიერი ავეჯი, შექმნილი ნამდვილი ცხოვრებისთვის. თანამედროვე
              დიზაინი, შექმნილი ვანკუვერში.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                style={{ color: "var(--color-clay)" }}
                className="transition-opacity duration-300 hover:opacity-50"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                style={{ color: "var(--color-clay)" }}
                className="transition-opacity duration-300 hover:opacity-50"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12a4 4 0 118 0c0 4-3 6-3 6" />
                  <line x1="12" y1="12" x2="10" y2="21" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4
                className="label-geo"
                style={{ fontSize: "0.875rem", color: "var(--color-clay)" }}
              >
                {col.title}
              </h4>
              <ul
                className="mt-5"
                style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
              >
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-earth-muted)",
                      }}
                      className="transition-opacity duration-300 hover:opacity-50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-20 pt-8"
          style={{ borderTop: "1px solid var(--color-earth-border)" }}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <span
              className="label-geo"
              style={{ fontSize: "0.5625rem", color: "var(--color-clay)" }}
            >
              ჩვენი ბრენდების ოჯახი
            </span>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.95rem",
                color: "var(--color-earth-muted)",
                maxWidth: 400,
              }}
            >
              ჩვენ გთავაზობთ დახვეწილ, ტრადიციულ მიდგომას სახლისადმი.
              ტრადიციებზე დაფუძნებული. შექმნილი სამუდამოდ.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="label-geo mt-1 inline-block transition-opacity duration-300 hover:opacity-50"
              style={{
                borderBottom: "1px solid var(--fg)",
                paddingBottom: 2,
                fontSize: "0.6rem",
              }}
            >
              გვეწვიეთ
            </a>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p
            className="label-geo"
            style={{ fontSize: "0.5625rem", color: "var(--color-clay)" }}
          >
            &copy; {new Date().getFullYear()} Tezo. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
}
