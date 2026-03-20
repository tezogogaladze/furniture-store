"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useScrollReveal } from "@/lib/useScrollReveal";

const IMG = (id: string, w = 600, h = 450) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

const furnitureCategories = [
  { name: "ბესტსელერები", img: IMG("photo-1773578639782-2046b150ce28") },
  { name: "დივნები", img: IMG("photo-1758957701419-2c6e266f7988") },
  { name: "კონსოლები", img: IMG("photo-1721385675060-9982ec72385e") },
  { name: "საწოლები", img: IMG("photo-1748679979601-dc9ec43d900d") },
  { name: "სკამები", img: IMG("photo-1771219491795-3b4dafc1cdf3") },
  { name: "კარადები", img: IMG("photo-1721385675060-9982ec72385e", 600, 450) },
  { name: "სასადილო მაგიდები", img: IMG("photo-1758977245854-b0ea036e0ce2") },
  { name: "საცავიანი საწოლები", img: IMG("photo-1724100688109-4ad6927b8b8a") },
  { name: "სავარძლები", img: IMG("photo-1771219491795-3b4dafc1cdf3", 600, 450) },
  { name: "გვერდითი მაგიდები", img: IMG("photo-1768144092684-c1a5dd6c7aad") },
  { name: "მედია თაროები", img: IMG("photo-1759735218086-67f9f853ab8b") },
  { name: "ბენჩები", img: IMG("photo-1773578639782-2046b150ce28", 600, 450) },
  { name: "სასადილო სკამები", img: IMG("photo-1758977245854-b0ea036e0ce2", 600, 450) },
  { name: "ჟურნალის მაგიდები", img: IMG("photo-1768144092684-c1a5dd6c7aad", 600, 450) },
  { name: "ეზოს ავეჯი", img: IMG("photo-1757439402173-2ed1421f7466") },
  { name: "კომოდები", img: IMG("photo-1747336754890-85fc2ccf6d80") },
];

const roomCategories = [
  { name: "მისაღები", img: IMG("photo-1773578639782-2046b150ce28", 600, 450) },
  { name: "ეზო", img: IMG("photo-1757439402173-2ed1421f7466", 600, 450) },
  { name: "სამუშაო ოთახი", img: IMG("photo-1759735218086-67f9f853ab8b", 600, 450) },
  { name: "საძინებელი", img: IMG("photo-1748679979601-dc9ec43d900d", 600, 450) },
  { name: "სასადილო", img: IMG("photo-1758977245854-b0ea036e0ce2", 600, 450) },
  { name: "წინა ოთახი", img: IMG("photo-1771219491795-3b4dafc1cdf3", 600, 450) },
];

type Tab = "furniture" | "rooms";

export default function ShopTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("furniture");
  const [fadeState, setFadeState] = useState<"in" | "out">("in");
  const pendingTab = useRef<Tab | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>();

  const switchTab = (tab: Tab) => {
    if (tab === activeTab) return;
    pendingTab.current = tab;
    setFadeState("out");
  };

  useEffect(() => {
    if (fadeState === "out" && pendingTab.current) {
      const timeout = setTimeout(() => {
        setActiveTab(pendingTab.current!);
        pendingTab.current = null;
        setFadeState("in");
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [fadeState]);

  const categories =
    activeTab === "furniture" ? furnitureCategories : roomCategories;

  return (
    <section ref={sectionRef} className="section-gallery px-6">
      <div className="site-container">
        <div className="text-center">
          <span className="label-geo" style={{ color: "var(--color-clay)" }}>
            დათვალიერება
          </span>
          <h2
            className="heading mt-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            აირჩიე შენებურად
          </h2>
        </div>

        <div className="mt-10 flex items-center justify-center gap-8">
          {(["rooms", "furniture"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => switchTab(tab)}
              className={clsx(
                "label-geo pb-2 transition-all duration-300",
                activeTab === tab
                  ? "opacity-100"
                  : "opacity-35 hover:opacity-60"
              )}
              style={{
                borderBottom:
                  activeTab === tab
                    ? "1px solid var(--fg)"
                    : "1px solid transparent",
                fontSize: "0.8rem",
              }}
            >
              {tab === "furniture" ? "ავეჯი" : "ოთახები"}
            </button>
          ))}
        </div>

        <div
          className="mt-12"
          style={{
            opacity: fadeState === "in" ? 1 : 0,
            transition: "opacity 250ms var(--ease-smooth)",
          }}
        >
          <div
            className={
              activeTab === "furniture" ? "grid-furniture" : "grid-rooms"
            }
          >
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="group relative overflow-hidden rounded-sm"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                  style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                <div className="relative flex h-full items-end p-5">
                  <span
                    className="heading"
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      color: "#fff",
                      textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                      lineHeight: 1.1,
                    }}
                  >
                    {cat.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
