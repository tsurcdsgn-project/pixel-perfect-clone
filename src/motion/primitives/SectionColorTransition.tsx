import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

/**
 * Scroll-linked background transition used only on major boundaries,
 * e.g. off-white -> deep navy before the trust/CTA close.
 */
export function SectionColorTransition({
  children,
  from = "var(--background)",
  to = "var(--finance-navy-950)",
  className = "",
}: {
  children: ReactNode;
  from?: string;
  to?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { backgroundColor: from },
        {
          backgroundColor: to,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 85%", end: "top 35%", scrub: 0.6 },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [from, to]);

  return (
    <div ref={ref} className={className} style={{ backgroundColor: from }}>
      {children}
    </div>
  );
}
