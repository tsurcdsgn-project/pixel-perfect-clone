import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowIcon } from "./ui";

const NAV = [
  { label: "HOME", to: "/" },
  { label: "STUDIO", to: "/studio" },
  { label: "WORKS", to: "/work" },
  { label: "BLOG", to: "/blog" },
];

function Monogram() {
  return (
    <Link
      to="/"
      aria-label="Agencux home"
      className="grid h-[52px] w-[52px] place-items-center rounded-full bg-ink text-inverse transition-transform duration-300 hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M4 20 12 4l8 16M7.6 14.4h8.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Link>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="relative z-50">
      <div className="page flex items-center justify-between gap-4 py-4">
        <Monogram />

        <nav className="hidden items-center gap-1 rounded-full bg-surface p-[6px] shadow-[0_12px_34px_rgba(0,0,0,0.10)] lg:flex">
          {NAV.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`label-xs flex items-center gap-2 rounded-full px-6 py-3 transition-colors duration-300 ${
                  active ? "bg-ink text-inverse" : "text-ink-soft hover:text-ink"
                }`}
              >
                {active ? <span className="h-[6px] w-[6px] rounded-full bg-accent" /> : null}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="group hidden items-center gap-3 rounded-full bg-accent py-[7px] pl-5 pr-[7px] text-inverse shadow-[0_10px_34px_rgba(255,75,54,0.42)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <span className="h-[7px] w-[7px] rounded-full bg-inverse" />
            <span className="label-xs">CONTACT US</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff6b58] text-inverse transition-transform duration-300 group-hover:rotate-45">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-[52px] w-[52px] place-items-center rounded-full bg-surface shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-5 bg-ink" />
              <span className="block h-[2px] w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="page lg:hidden">
          <div className="mb-4 rounded-3xl bg-surface p-3 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
            {[...NAV, { label: "CONTACT US", to: "/contact" }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`label-xs flex items-center justify-between rounded-2xl px-5 py-4 ${
                  isActive(item.to) ? "bg-ink text-inverse" : "text-ink-soft"
                }`}
              >
                {item.label}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
