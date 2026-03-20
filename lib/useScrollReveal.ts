"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";

interface ScrollRevealConfig {
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
  childSelector?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  config: ScrollRevealConfig = {}
) {
  const ref = useRef<T>(null);
  const {
    delay = 0,
    stagger = 0.1,
    y = 24,
    duration = 0.7,
    childSelector,
  } = config;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : [el];

    gsap.set(targets, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: targets.length > 1 ? stagger : 0,
          ease: "power2.out",
          clearProps: "transform",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, stagger, y, duration, childSelector]);

  return ref;
}
