import { Link } from "@tanstack/react-router";
import { IMG, WORKS } from "@/lib/agencux-data";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Studio", to: "/studio" },
  { label: "Projects", to: "/work" },
  { label: "Blog", to: "/blog" },
];

const SOCIAL = ["Twitter", "Dribbble", "Instagram", "Facebook"];

export function Footer() {
  return (
    <footer className="page pb-6">
      <div className="grid gap-12 border-t border-[color:var(--line)] pt-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <div className="max-w-[420px] overflow-hidden rounded-[24px]">
            <img
              src={WORKS[1]!.image}
              alt="Agencux selected project"
              loading="lazy"
              className="h-[220px] w-full object-cover"
            />
          </div>
          <div className="mt-5 flex max-w-[420px] items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-[15px]">
              <span className="h-[6px] w-[6px] rounded-full bg-accent" />
              Stay connected
            </span>
            <a href="mailto:info@agencux.com" className="text-[17px] font-medium hover:text-accent">
              info@agencux.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <span className="text-[15px] text-ink-faint">Navigation</span>
            <ul className="mt-6 space-y-3">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link to={n.to} className="display text-[clamp(24px,3vw,34px)] hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[15px] text-ink-faint">Social Media</span>
            <ul className="mt-6 space-y-3">
              {SOCIAL.map((s) => (
                <li key={s}>
                  <a href="#" className="display text-[clamp(24px,3vw,34px)] hover:text-accent">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-6 text-[14px] text-ink-soft">
        <span>©2025 Agencux Studio. All Rights Reserverd</span>
        <div className="flex gap-16">
          <Link to="/terms" className="hover:text-ink">
            Terms of Use
          </Link>
          <Link to="/privacy" className="hover:text-ink">
            Privacy Policy
          </Link>
        </div>
      </div>

      <img src={IMG.wordmark} alt="Agencux" loading="lazy" className="mt-10 w-full select-none" />
    </footer>
  );
}
