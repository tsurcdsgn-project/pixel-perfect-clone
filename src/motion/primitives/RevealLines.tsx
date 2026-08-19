import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { registerGsap, gsap, ease } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

/**
 * Line-mask reveal. Each child is treated as one line and rises out of a mask.
 * Never split long finance paragraphs into characters — lines only.
 */
export function RevealLines({
  lines,
  as: Tag = "div",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.08,
  start = "top 88%",
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const targets = el.querySelectorAll<HTMLElement>("[data-line-inner]");
    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0, opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          delay,
          stagger,
          ease: ease.premium,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [delay, stagger, start]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <span data-line-inner className={`block will-change-transform ${lineClassName}`} style={{ opacity: 0 }}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
