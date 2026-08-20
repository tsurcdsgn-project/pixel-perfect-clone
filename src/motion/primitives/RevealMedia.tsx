import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, ease } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

export function RevealMedia({
  children,
  className = "",
  delay = 0,
  start = "top 90%",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const inner = el.firstElementChild as HTMLElement | null;
    if (prefersReducedMotion()) {
      gsap.set(el, { clipPath: "inset(0%)", opacity: 1 });
      if (inner) gsap.set(inner, { scale: 1, yPercent: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay,
        scrollTrigger: { trigger: el, start, once: true },
      });
      tl.fromTo(
        el,
        { clipPath: "inset(14% 6% 14% 6% round 24px)", opacity: 0.35, y: 34 },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          opacity: 1,
          y: 0,
          duration: 1.25,
          ease: ease.premium,
        },
      );
      if (inner) {
        tl.fromTo(
          inner,
          { scale: 1.12, yPercent: 6 },
          { scale: 1, yPercent: 0, duration: 1.45, ease: ease.premium },
          0,
        );
      }
    }, el);
    return () => ctx.revert();
  }, [delay, start]);

  return (
    <div
      ref={ref}
      data-motion-managed
      className={className}
      style={{ clipPath: "inset(14% 6% 14% 6% round 24px)", opacity: 0.35, willChange: "clip-path, transform" }}
    >
      {children}
    </div>
  );
}
