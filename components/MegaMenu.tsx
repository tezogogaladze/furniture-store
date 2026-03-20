"use client";

const categories = [
  "ბესტსელერები",
  "დივნები და სექციონერები",
  "კონსოლები",
  "საწოლები",
  "სასადილო მაგიდები",
  "სასადილო სკამები",
  "ჟურნალის მაგიდები",
  "სავარძლები",
  "სკამები",
  "გვერდითი მაგიდები",
  "მედია თაროები",
  "საცავიანი საწოლები",
  "კარადები",
  "ბენჩები",
  "კომოდები",
  "ეზოს ავეჯი",
];

interface MegaMenuProps {
  open: boolean;
}

export default function MegaMenu({ open }: MegaMenuProps) {
  return (
    <div
      className="absolute top-full rounded-sm"
      style={{
        left: "50%",
        transform: open ? "translate(-50%, 0)" : "translate(-50%, 8px)",
        width: 480,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition:
          "opacity 350ms var(--ease-smooth), transform 350ms var(--ease-smooth)",
        background: "var(--bg)",
        padding: "2rem",
        boxShadow: "0 12px 40px rgba(44,36,24,0.08)",
      }}
    >
      <div
        className="grid grid-cols-2"
        style={{ columnGap: "2rem", rowGap: "0.7rem" }}
      >
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            style={{ fontSize: "0.85rem", color: "var(--color-earth-muted)" }}
            className="transition-opacity duration-200 hover:opacity-50"
          >
            {cat}
          </a>
        ))}
      </div>
    </div>
  );
}
