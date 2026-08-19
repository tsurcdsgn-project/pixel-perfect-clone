import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (typeof window === "undefined") return gsap;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export const ease = {
  reveal: "power3.out",
  premium: "power4.out",
  smooth: "power2.inOut",
  settle: "expo.out",
} as const;

export { gsap, ScrollTrigger };
