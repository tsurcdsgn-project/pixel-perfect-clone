import { Children, useEffect, useRef, type ReactNode } from "react";
import { registerGsap, gsap, ScrollTrigger } from "../gsap";
import { prefersReducedMotion } from "../useReducedMotion";

/**
 * Sticky project card deck. Cards enter from below and previous cards
 * compress slightly. Max 3 cards visually stacked. Disabled on mobile
 * and under reduced motion — falls back to a plain stacked flow.
 */
export function StickyStack({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const items = Children.toArray(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-stack-card]"));
      if (cards.length < 2) return;

      cards.forEach((card, i) => {
        if (i === 0) return;
        gsap.set(card, { yPercent: 16, scale: 0.95, rotate: i % 2 ? 1.6 : -1.6, opacity: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${(cards.length - 1) * window.innerHeight * 0.9}`,
          pin: el.querySelector("[data-stack-viewport]"),
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { yPercent: 0, scale: 1, rotate: 0, opacity: 1, ease: "none" }, i - 1);
        tl.to(cards[i - 1]!, { scale: 0.955, yPercent: -2.5, ease: "none" }, i - 1);
        if (i >= 3) tl.to(cards[i - 3]!, { opacity: 0, ease: "none" }, i - 1);
      });

      return () => {
        gsap.set(cards, { clearProps: "all" });
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, [items.length]);

  return (
    <div ref={ref} data-motion-managed className={className}>
      <div data-stack-viewport className="lg:relative lg:h-screen lg:overflow-visible">
        <div className="flex flex-col gap-6 lg:block lg:h-full">
          {items.map((child, i) => (
            <div
              key={i}
              data-stack-card
              className="lg:absolute lg:inset-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:will-change-transform"
              style={{ zIndex: i + 1 }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
