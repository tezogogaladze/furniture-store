"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function fadeUp(
  element: gsap.TweenTarget,
  delay = 0,
  duration = 0.7
): gsap.core.Tween {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      clearProps: "transform",
    }
  );
}

export function staggerReveal(
  parent: Element,
  childSelector: string,
  stagger = 0.1
): ScrollTrigger {
  const children = parent.querySelectorAll(childSelector);

  gsap.set(children, { opacity: 0, y: 24 });

  return ScrollTrigger.create({
    trigger: parent,
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger,
        ease: "power2.out",
        clearProps: "transform",
      });
    },
  });
}
