"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!videoReady) return;
    const video = videoRef.current;
    if (!video) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      video,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1.04, duration: 1.2, ease: "power2.out" }
    )
      .fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        0.2
      )
      .fromTo(
        labelRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.5
      )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.6
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.85
      );

    gsap.to(video, {
      scale: 1,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, [videoReady]);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center overflow-hidden"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        height: "100vh",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => {
          if (!videoReady) setVideoReady(true);
        }}
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: 0,
          objectPosition: "80% center",
          filter: "brightness(0.65) saturate(0.8)",
          willChange: "transform, opacity",
        }}
      >
        <source src="/hero-video-compressed.mp4" type="video/mp4" />
      </video>

      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          opacity: 0,
          background:
            "linear-gradient(180deg, rgba(44,36,24,0.2) 0%, rgba(44,36,24,0.45) 60%, rgba(44,36,24,0.6) 100%)",
        }}
      />

      <div
        className="relative z-10 px-6 text-center"
        style={{ maxWidth: 900 }}
      >
        <div
          ref={labelRef}
          className="inline-block"
          style={{ opacity: 0 }}
        >
          <img
            src="/logo.png"
            alt="Casa Tua"
            style={{
              height: 72,
              width: "auto",
              filter: "invert(0)",
              opacity: 0.85,
            }}
          />
        </div>

        <h1
          ref={headingRef}
          className="heading mt-6"
          style={{
            fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
            opacity: 0,
            color: "#fff",
          }}
        >
          თქვენი სახლი
          <br />
          იწყება სწორად
          <br />
          შერჩეული ავეჯით
        </h1>

        <div ref={ctaRef} className="mt-10" style={{ opacity: 0 }}>
          <a
            href="#"
            className="label-geo inline-block transition-opacity duration-300 hover:opacity-60"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.5)",
              paddingBottom: 4,
              letterSpacing: "0.18em",
              color: "#fff",
            }}
          >
            ბესტსელერების ნახვა
          </a>
        </div>
      </div>
    </section>
  );
}
