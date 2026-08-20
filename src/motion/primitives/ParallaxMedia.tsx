import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap } from "../gsap";
import { prefersReducedMotion, isTouch } from "../useReducedMotion";

export function ParallaxMedia({
  children,
  className = "",
  /** vertical travel in percent of element height */
  amount = 9,
  scrub = 1,
  scale = 1.06,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  scrub?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    if (prefersReducedMotion()) return;
    const inner = el.firstElementChild as HTMLElement | null;
    if (!inner) return;
    const travel = isTouch() ? amount * 0.5 : amount;
    const ctx = gsap.context(() => {
      gsap.set(inner, { willChange: "transform" });
      gsap.fromTo(
        inner,
        { yPercent: -travel, scale },
        {
          yPercent: travel,
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub,
            invalidateOnRefresh: true,
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [amount, scrub, scale]);

  return (
    <div ref={ref} data-motion-managed className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
