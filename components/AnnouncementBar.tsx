"use client";

import { useState, useEffect, useCallback } from "react";

const messages = [
  { text: "უფასო მიტანა ყველა შეკვეთაზე.", cta: "დეტალები" },
  { text: "ახლახანს გაიხსნა: შოურუმი თბილისში.", cta: "ეწვიეთ" },
  { text: "ეწვიეთ ჩვენს ბათუმის შოურუმს.", cta: "ეწვიეთ" },
  { text: "უფასო აწყობა დიდი ნივთებისთვის.", cta: "" },
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const cycle = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycle, 4000);
    return () => clearInterval(interval);
  }, [cycle]);

  const msg = messages[index];

  return (
    <div
      className="relative z-50 flex items-center justify-center"
      style={{ height: 38, background: "#2c2418", color: "#eee6d8" }}
    >
      <a
        href="#"
        className="label-geo flex items-center gap-2"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 300ms",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
        }}
      >
        <span>{msg.text}</span>
        {msg.cta && (
          <span style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
            {msg.cta}
          </span>
        )}
      </a>
    </div>
  );
}
