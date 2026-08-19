import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Tone = "light" | "accent" | "dark";

const toneMap: Record<Tone, { shell: string; knob: string }> = {
  light: {
    shell: "bg-surface text-ink shadow-[0_10px_30px_rgba(0,0,0,0.10)]",
    knob: "bg-ink text-inverse",
  },
  accent: {
    shell: "bg-accent text-inverse shadow-[0_10px_34px_rgba(255,75,54,0.42)]",
    knob: "bg-surface text-ink",
  },
  dark: {
    shell: "bg-ink text-inverse shadow-[0_10px_30px_rgba(0,0,0,0.28)]",
    knob: "bg-surface text-ink",
  },
};

export function ActionButton({
  label,
  to,
  href,
  tone = "light",
  className = "",
}: {
  label: string;
  to?: string;
  href?: string;
  tone?: Tone;
  className?: string;
}) {
  const t = toneMap[tone];
  const inner = (
    <>
      <span
        className={`h-[7px] w-[7px] shrink-0 rounded-full ${tone === "light" ? "bg-accent" : "bg-inverse"}`}
      />
      <span className="label-xs whitespace-nowrap pr-1">{label}</span>
      <span
        className={`ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${t.knob}`}
      >
        <ArrowIcon className="h-4 w-4" />
      </span>
    </>
  );
  const cls = `group inline-flex items-center gap-3 rounded-full py-[7px] pl-5 pr-[7px] transition-transform duration-300 hover:-translate-y-0.5 ${t.shell} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} className={cls} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  );
}

export function Badge({
  icon,
  children,
  tone = "light",
}: {
  icon?: ReactNode;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full py-[6px] pl-[6px] pr-4 text-[15px] ${
        tone === "dark"
          ? "bg-[#141414] text-inverse shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-surface text-ink shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      }`}
    >
      <span
        className={`grid h-8 w-8 place-items-center rounded-full ${
          tone === "dark" ? "bg-surface text-ink" : "bg-ink text-inverse"
        }`}
      >
        {icon ?? <span className="h-[6px] w-[6px] rounded-full bg-accent" />}
      </span>
      {children}
    </span>
  );
}

export function MetaBar({ right, tone = "light" }: { right: string; tone?: "light" | "dark" }) {
  const border = tone === "dark" ? "border-white/12" : "border-[color:var(--line)]";
  const faint = tone === "dark" ? "text-white/45" : "text-ink-faint";
  return (
    <div className={`border-y ${border}`}>
      <div className="page flex items-center justify-between py-7">
        <span className="label-xs">
          EST <span className={faint}>2019</span>
        </span>
        <span className={`label-xs hidden items-center gap-3 md:inline-flex ${tone === "dark" ? "" : ""}`}>
          SCROLL DOWN
          <span
            className={`grid h-[22px] w-[22px] place-items-center rounded-full ${
              tone === "dark" ? "bg-surface text-ink" : "bg-ink text-inverse"
            }`}
          >
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
              <path d="M6 2v8m0 0L3 7m3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
        </span>
        <span className={`label-xs ${faint}`}>{right}</span>
      </div>
    </div>
  );
}

export function SectionHeading({
  first,
  accent,
  className = "",
}: {
  first: string;
  accent?: string;
  className?: string;
}) {
  return (
    <h2 className={`display text-[clamp(40px,7vw,86px)] ${className}`}>
      {first}
      {accent ? (
        <>
          <br />
          <span className="text-accent">{accent}</span>
        </>
      ) : null}
    </h2>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <RevealBlock delay={delay / 1000} className={className}>
      {children}
    </RevealBlock>
  );
}

export function Marquee({
  children,
  duration = 30,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`agx-marquee overflow-hidden ${className}`}>
      <div
        className={`agx-marquee-track ${reverse ? "reverse" : ""}`}
        style={{ ["--agx-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
