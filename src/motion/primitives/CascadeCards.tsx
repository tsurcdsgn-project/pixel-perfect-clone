import { Children, useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, ease } from "../gsap";
import { prefersReducedMotion, isTouch } from "../useReducedMotion";

/**
 * Sequential card entrance — cards approach from slightly different
 * x / y / rotation / depth depending on index, then settle to the grid.
 */
export function CascadeCards({
  children,
  className = "",
  itemClassName = "",
  stagger = 0.14,
  start = "top 88%",
}: {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const items = Children.toArray(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const targets = Array.from(el.querySelectorAll<HTMLElement>("[data-cascade-item]"));
    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 });
      return;
    }
    const mobile = isTouch() || window.innerWidth < 768;
    const ctx = gsap.context(() => {
      targets.forEach((t, i) => {
        const dir = i % 3 === 0 ? -1 : i % 3 === 1 ? 0 : 1;
        gsap.fromTo(
          t,
          {
            opacity: 0,
            y: mobile ? 48 : 74 + (i % 3) * 14,
            x: mobile ? 0 : dir * 34,
            rotate: mobile ? 0 : dir * 2.6,
            rotateX: mobile ? 0 : 8,
            scale: mobile ? 1 : 0.95,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0,
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            delay: i * (mobile ? 0.08 : stagger),
            ease: ease.premium,
            clearProps: "filter",
            scrollTrigger: { trigger: el, start, once: true },
          },
        );
      });
    }, el);
    return () => ctx.revert();
  }, [stagger, start, items.length]);

  return (
    <div ref={ref} data-motion-managed className={className} style={{ perspective: 1200 }}>
      {items.map((child, i) => (
        <div
          key={i}
          data-cascade-item
          className={itemClassName}
          style={{ opacity: 0, willChange: "transform, opacity" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
