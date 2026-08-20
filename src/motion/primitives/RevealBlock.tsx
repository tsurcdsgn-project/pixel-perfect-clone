import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { registerGsap, gsap, ease } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

export function RevealBlock({
  children,
  delay = 0,
  y = 48,
  as: Tag = "div",
  className = "",
  start = "top 88%",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  start?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, scale: 0.975, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.05,
          delay,
          ease: ease.premium,
          clearProps: "filter",
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [delay, y, start]);

  return (
    <Tag ref={ref} data-motion-managed className={className} style={{ opacity: 0, willChange: "transform, opacity" }}>
      {children}
    </Tag>
  );
}
