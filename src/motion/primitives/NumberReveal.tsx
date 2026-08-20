import { useEffect, useRef } from "react";
import { registerGsap, gsap, ease } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

/**
 * Financial-grade number reveal: counts once, never loops, never scrambles.
 */
export function NumberReveal({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 1.1,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const write = (n: number) => {
      el.textContent = `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;
    };
    if (prefersReducedMotion()) {
      write(value);
      return;
    }
    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration,
        ease: ease.settle,
        onUpdate: () => write(obj.n),
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
    }, el);
    write(0);
    return () => ctx.revert();
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={ref} data-motion-managed className={className}>
      {`${prefix}${value.toLocaleString("en-US")}${suffix}`}
    </span>
  );
}
