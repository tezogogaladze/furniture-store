"use client";

import { useEffect, useCallback } from "react";
import clsx from "clsx";

interface RegionModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RegionModal({ open, onClose }: RegionModalProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, handleEsc]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[70] flex items-center justify-center transition-opacity duration-300",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(44,36,24,0.35)" }}
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-md rounded-sm px-10 py-12"
        style={{
          background: "var(--bg)",
          boxShadow: "0 20px 60px rgba(44,36,24,0.12)",
          transform: open ? "scale(1)" : "scale(0.98)",
          transition: "all 300ms var(--ease-smooth)",
        }}
      >
        <h3 className="heading" style={{ fontSize: "1.5rem" }}>
          როგორც ჩანს, საქართველოში ხარ
        </h3>
        <p
          className="mt-3"
          style={{
            fontSize: "0.875rem",
            color: "var(--color-earth-muted)",
            lineHeight: 1.7,
          }}
        >
          გსურთ ქართული მაღაზიიდან ყიდვა?
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="#"
            className="label-geo flex-1 rounded-sm py-3 text-center transition-opacity duration-300 hover:opacity-90"
            style={{
              background: "var(--fg)",
              color: "var(--bg)",
              fontSize: "0.875rem",
            }}
          >
            გადასვლა GE საიტზე
          </a>
          <button
            onClick={onClose}
            className="label-geo flex-1 rounded-sm py-3 transition-opacity duration-300 hover:opacity-60"
            style={{
              border: "1px solid var(--color-earth-border)",
              fontSize: "0.875rem",
            }}
          >
            დარჩი US საიტზე
          </button>
        </div>
      </div>
    </div>
  );
}
