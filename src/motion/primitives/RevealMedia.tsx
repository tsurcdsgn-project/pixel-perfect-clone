import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, ease } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

export function RevealMedia({
  children,
  className = "",
  delay = 0,
  start = "top 88%",
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
      gsap.set(el, { clipPath: "inset(0%)" });
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
        { clipPath: "inset(8% 0% 8% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.05, ease: ease.premium },
      );
      if (inner) {
        tl.fromTo(inner, { scale: 1.065, yPercent: 4 }, { scale: 1, yPercent: 0, duration: 1.15, ease: ease.premium }, 0);
      }
    }, el);
    return () => ctx.revert();
  }, [delay, start]);

  return (
    <div ref={ref} className={className} style={{ clipPath: "inset(8% 0% 8% 0%)" }}>
      {children}
    </div>
  );
}
