import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { registerGsap, gsap, ScrollTrigger } from "./gsap";
import { prefersReducedMotion } from "./useReducedMotion";
import { setScrollVelocity } from "./scrollVelocity";
import { initAutoChoreography } from "./autoChoreography";

/**
 * One application-level scroll runtime.
 * Single Lenis instance, driven by the GSAP ticker, synced with ScrollTrigger.
 */
export function MotionRuntime({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    let lenis: { raf: (t: number) => void; destroy: () => void; on: (e: string, cb: (a: unknown) => void) => void } | null =
      null;
    let disposed = false;
    let tick: ((time: number) => void) | null = null;
    let decay = 0;

    void import("lenis").then(({ default: Lenis }) => {
      if (disposed) return;
      const instance = new Lenis({
        smoothWheel: true,
        lerp: 0.1,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
      });
      lenis = instance as unknown as typeof lenis;

      instance.on("scroll", (e: { velocity: number }) => {
        setScrollVelocity(e.velocity);
        decay = 0;
        ScrollTrigger.update();
      });

      tick = (time: number) => {
        instance.raf(time * 1000);
        decay += 1;
        if (decay > 6) setScrollVelocity(0);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();
    });

    return () => {
      disposed = true;
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      setScrollVelocity(0);
    };
  }, []);

  // Route change: attach arrival choreography, then recompute triggers after paint.
  useEffect(() => {
    registerGsap();
    let dispose: (() => void) | null = null;
    // Attach only once the document is fully loaded and hydrated, so GSAP never
    // mutates DOM that React is still matching against the server HTML.
    let attach = 0;
    const run = () => {
      attach = window.setTimeout(() => {
        dispose = initAutoChoreography(document);
      }, 900);
    };
    if (document.readyState === "complete") run();
    else window.addEventListener("load", run, { once: true });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 260);
    return () => {
      window.removeEventListener("load", run);
      window.clearTimeout(attach);
      window.clearTimeout(id);
      dispose?.();
    };
  }, [pathname]);

  // Recompute once webfonts settle so masked text is not clipped.
  useEffect(() => {
    const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
    fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return <>{children}</>;
}

export function ScrollProgress() {
  useEffect(() => {
    registerGsap();
    const el = document.getElementById("agx-scroll-progress");
    if (!el) return;
    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.body.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        el.style.transform = `scaleX(${self.progress})`;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden="true">
      <div
        id="agx-scroll-progress"
        className="h-full origin-left scale-x-0 bg-[color:var(--finance-blue-600)]"
      />
    </div>
  );
}
