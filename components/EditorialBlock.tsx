"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function EditorialBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    if (!section || !image || !text) return;

    gsap.set([image, text], { opacity: 0, y: 30 });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(image, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          clearProps: "transform",
        });
        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          clearProps: "transform",
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} className="section-gallery px-6">
      <div className="site-container grid-editorial">
        <div
          ref={imageRef}
          className="overflow-hidden rounded-sm"
          style={{ aspectRatio: "3/4" }}
        >
          <img
            src="https://images.unsplash.com/photo-1771219491795-3b4dafc1cdf3?w=800&h=1067&fit=crop&auto=format&q=80"
            alt="ინტერიერის დიზაინი"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div ref={textRef} className="flex flex-col justify-center">
          <span
            className="label-geo"
            style={{ color: "var(--color-terracotta)" }}
          >
            კარგ კომპანიაში
          </span>
          <h3
            className="heading mt-5"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            ალისონ მაზურეკი
          </h3>
          <p
            className="mt-5"
            style={{
              color: "var(--color-earth-muted)",
              lineHeight: 1.8,
              maxWidth: 440,
            }}
          >
            ამ გამოშვებაში ჩვენ ალისონ მაზურეკს ვხვდებით — დიზაინერს, მწერალს
            და მცირე სივრცის კონსულტანტს. თავისი პლატფორმით 600sqftandababy,
            ის თავიდან განსაზღვრავს, როგორ გამოიყურება &bdquo;საკმარისი&ldquo;
            — აჩვენებს, რომ გააზრებულ დიზაინს და მცირე თავშეკავებას შეუძლია
            სახლი უსაზღვრო გახადოს.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="label-geo inline-block transition-opacity duration-300 hover:opacity-50"
              style={{
                borderBottom: "1px solid var(--fg)",
                paddingBottom: 3,
                letterSpacing: "0.15em",
              }}
            >
              წაიკითხე მეტი
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
