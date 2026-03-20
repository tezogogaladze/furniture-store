"use client";

import { useEffect, useRef, useCallback } from "react";
import clsx from "clsx";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEsc);
      setTimeout(() => inputRef.current?.focus(), 100);
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
        "fixed inset-0 z-[60] flex flex-col transition-opacity duration-300",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(44,36,24,0.55)" }}
        onClick={onClose}
      />
      <div
        className="relative z-10 px-6 py-8"
        style={{
          background: "var(--bg)",
          transform: open ? "translateY(0)" : "translateY(-10px)",
          transition: "transform 300ms var(--ease-smooth)",
        }}
      >
        <div className="site-container flex items-center gap-4">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--color-clay)", flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="მოძებნე ავეჯი, ოთახები, კოლექციები..."
            className="w-full bg-transparent outline-none"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              fontWeight: 400,
              color: "var(--fg)",
            }}
          />
          <button
            onClick={onClose}
            className="label-geo shrink-0 transition-opacity duration-300 hover:opacity-50"
            style={{ fontSize: "0.875rem", color: "var(--color-clay)" }}
          >
            დახურვა
          </button>
        </div>
      </div>
    </div>
  );
}
