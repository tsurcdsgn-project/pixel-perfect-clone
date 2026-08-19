import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap } from "../gsap";
import { prefersReducedMotion, isTouch } from "../useReducedMotion";

/** Desktop-only, max ±2.5deg X / ±3deg Y. Media only, never copy. */
export function SoftTilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    if (prefersReducedMotion() || isTouch()) return;

    const rx = gsap.quickTo(el, "rotationX", { duration: 0.55, ease: "power3.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.55, ease: "power3.out" });

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      rx(-py * 2.5);
      ry(px * 3);
    };
    const leave = () => {
      rx(0);
      ry(0);
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div style={{ perspective: 1100 }} className={className}>
      <div ref={ref} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
