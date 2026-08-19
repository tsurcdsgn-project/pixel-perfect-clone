import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap } from "../gsap";
import { prefersReducedMotion, isTouch } from "../useReducedMotion";

/** Desktop pointer magnetism, max 4–6px. No bounce. */
export function MagneticButton({
  children,
  className = "",
  strength = 6,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    if (prefersReducedMotion() || isTouch()) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      quickX(Math.max(-1, Math.min(1, dx)) * strength);
      quickY(Math.max(-1, Math.min(1, dy)) * strength);
    };
    const leave = () => {
      quickX(0);
      quickY(0);
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {children}
    </span>
  );
}
