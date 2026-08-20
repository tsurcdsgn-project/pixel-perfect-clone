import { registerGsap, gsap, ease, ScrollTrigger } from "./gsap";
import { prefersReducedMotion, isTouch } from "./useReducedMotion";

const MANAGED = "[data-motion-managed], [data-cascade-item], [data-line-inner], [data-no-auto]";

function isManaged(el: Element) {
  return !!el.closest(MANAGED);
}

/**
 * Site-wide arrival choreography.
 * Finds content blocks that are not already driven by a motion primitive and
 * gives them a smooth, staggered, depth-aware entrance tied to scroll position.
 */
export function initAutoChoreography(root: ParentNode = document): () => void {
  registerGsap();
  if (prefersReducedMotion()) return () => {};

  const mobile = isTouch() || window.innerWidth < 768;
  const groups: HTMLElement[][] = [];
  const claimed = new Set<HTMLElement>();

  const sections = Array.from(root.querySelectorAll<HTMLElement>("section"));

  for (const section of sections) {
    // Candidate rows: grids / flex rows first, then direct children.
    const containers = Array.from(
      section.querySelectorAll<HTMLElement>('[class*="grid-cols"], [class*="md:grid-cols"], [class*="flex-wrap"]'),
    );
    const pools: HTMLElement[][] = [];

    for (const c of containers) {
      if (isManaged(c)) continue;
      const kids = Array.from(c.children).filter((n): n is HTMLElement => n instanceof HTMLElement);
      if (kids.length < 2) continue;
      if (kids.some((k) => isManaged(k) || claimed.has(k))) continue;
      kids.forEach((k) => claimed.add(k));
      pools.push(kids);
    }

    const direct = Array.from(section.children).filter(
      (n): n is HTMLElement =>
        n instanceof HTMLElement &&
        !isManaged(n) &&
        !claimed.has(n) &&
        !n.querySelector(MANAGED) &&
        ![...claimed].some((c) => n.contains(c)),
    );
    if (direct.length) {
      direct.forEach((k) => claimed.add(k));
      pools.push(direct);
    }

    groups.push(...pools);
  }

  const ctx = gsap.context(() => {
    groups.forEach((items) => {
      items.forEach((el, i) => {
        gsap.set(el, { willChange: "transform, opacity" });
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: mobile ? 34 : 56,
            scale: mobile ? 1 : 0.978,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: mobile ? 0.8 : 1.05,
            delay: i * (mobile ? 0.05 : 0.09),
            ease: ease.premium,
            clearProps: "filter,willChange",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });
    });
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}
