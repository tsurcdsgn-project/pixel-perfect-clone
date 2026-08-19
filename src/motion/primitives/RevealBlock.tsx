import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { registerGsap, gsap, ease } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

export function RevealBlock({
  children,
  delay = 0,
  y = 32,
  as: Tag = "div",
  className = "",
  start = "top 86%",
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
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          delay,
          ease: ease.reveal,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [delay, y, start]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
