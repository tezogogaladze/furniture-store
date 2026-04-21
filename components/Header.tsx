"use client";

import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import MegaMenu from "./MegaMenu";

interface HeaderProps {
  onSearchOpen: () => void;
}

const navLinks = [
  { label: "მაღაზია", href: "#", hasMega: true },
  { label: "ოთახები", href: "#" },
  { label: "ჩვენ შესახებ", href: "#" },
  { label: "შოურუმები", href: "#" },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function Header({ onSearchOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    },
    []
  );

  useEffect(() => {
    if (drawerOpen) document.addEventListener("keydown", handleEsc);
    else document.removeEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [drawerOpen, handleEsc]);

  useEffect(() => {
    if (!isMobile && drawerOpen) setDrawerOpen(false);
  }, [isMobile, drawerOpen]);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-40 transition-all duration-500",
          scrolled ? "backdrop-blur-md" : ""
        )}
        style={{
          background: scrolled ? "rgba(245,239,230,0.92)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(44,36,24,0.06)" : "none",
          color: scrolled ? "var(--fg)" : "#fff",
          transition: "all 500ms var(--ease-cinematic)",
        }}
      >
        <nav className="site-container flex h-16 items-center justify-between px-6">
          <a
            href="/"
            className="flex items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <img
              src="/logo.png"
              alt="Casa Tua logo"
              style={{
                height: 54,
                width: "auto",
                filter: scrolled ? "invert(1)" : "invert(0)",
                transition: "filter 500ms var(--ease-cinematic)",
              }}
            />
            <span style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
              <span
                style={{
                  fontFamily: "'Dachi Lynx', 'AR Archy', serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.02em",
                }}
              >
                კაზა ტუა
              </span>
              <span style={{ opacity: 0.3, fontFamily: "'Josefin Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>·</span>
              <span
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "0.95rem",
                  letterSpacing: "0.12em",
                  fontWeight: 700,
                }}
              >
                CASA TUA
              </span>
            </span>
          </a>

          {!isMobile && (
            <ul className="flex items-center gap-8">
              {navLinks.map((item) =>
                item.hasMega ? (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button
                      className="label-geo py-4 transition-opacity duration-300 hover:opacity-50"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {item.label}
                    </button>
                    <MegaMenu open={megaOpen} />
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="label-geo py-4 transition-opacity duration-300 hover:opacity-50"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          )}

          <div className="flex items-center gap-5">
            <button
              onClick={onSearchOpen}
              aria-label="ძებნა"
              className="transition-opacity duration-300 hover:opacity-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <a href="#" aria-label="კალათა" className="transition-opacity duration-300 hover:opacity-50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </a>

            {isMobile && (
              <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                aria-label="მენიუ"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  {drawerOpen ? (
                    <>
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="6" y1="18" x2="18" y2="6" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[35] transition-opacity duration-300",
          drawerOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(44,36,24,0.3)" }}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className="absolute right-0 top-0 h-full overflow-y-auto"
          style={{
            width: "min(320px, 85vw)",
            background: "var(--bg)",
            transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 400ms var(--ease-cinematic)",
            paddingTop: "5rem",
            paddingBottom: "3rem",
          }}
        >
          <nav className="flex flex-col gap-1 px-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="heading block py-3 transition-opacity duration-200 hover:opacity-50"
                style={{ fontSize: "1.5rem" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            className="mx-8 mt-8 pt-8"
            style={{ borderTop: "1px solid var(--color-earth-border)" }}
          >
            <a
              href="#"
              onClick={() => {
                setDrawerOpen(false);
                onSearchOpen();
              }}
              className="label-geo block py-3 transition-opacity duration-200 hover:opacity-50"
              style={{
                color: "var(--color-earth-muted)",
                fontSize: "0.7rem",
              }}
            >
              ძებნა
            </a>
            <a
              href="#"
              className="label-geo block py-3 transition-opacity duration-200 hover:opacity-50"
              style={{
                color: "var(--color-earth-muted)",
                fontSize: "0.7rem",
              }}
            >
              კალათა
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
