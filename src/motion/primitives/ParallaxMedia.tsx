import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, ScrollTrigger } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

export function ParallaxMedia({
  children,
  className = "",
  amount = 5,
  scrub = 0.8,
}: {
  children: ReactNode;
  className?: string;
  /** vertical travel in percent of element height */
  amount?: number;
  scrub?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    if (prefersReducedMotion()) return;
    const inner = el.firstElementChild as HTMLElement | null;
    if (!inner) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub },
        },
      );
    }, el);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [amount, scrub]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
