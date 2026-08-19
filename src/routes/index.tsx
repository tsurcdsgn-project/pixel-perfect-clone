import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AWARDS,
  CLIENT_LOGOS,
  FAQS,
  IMG,
  IMPACT,
  LOCATIONS,
  PRICING,
  PROCESS,
  SERVICES,
  TEAM,
  TESTIMONIALS,
  WORKS,
} from "@/lib/agencux-data";
import { ActionButton, ArrowIcon, Badge, Marquee, MetaBar, Reveal, SectionHeading } from "@/components/agencux/ui";
import { ContactSection } from "@/components/agencux/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agencux — Creative & Marketing Agency Studio" },
      {
        name: "description",
        content:
          "Agencux is a creative studio building bold branding, visual design and UI/UX for brands that want every shot to drive income forward.",
      },
      { property: "og:title", content: "Agencux — Creative & Marketing Agency Studio" },
      {
        property: "og:description",
        content: "Branding, visual design and UI/UX from a studio obsessed with craft, motion and measurable growth.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="page">
      <div
        className="relative overflow-hidden rounded-[36px] bg-ink"
        style={{ backgroundImage: `url(${IMG.heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="relative grid min-h-[520px] gap-6 px-5 py-7 md:min-h-[720px] md:px-9 md:py-9 lg:grid-cols-2">
          <img
            src={IMG.heroPhone}
            alt="Agencux mobile case study"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[46%] max-w-[560px] -translate-x-[62%] -translate-y-1/2 lg:block"
          />

          <div className="relative flex flex-col justify-between">
            <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/12 py-[6px] pl-[6px] pr-5 text-[15px] text-inverse backdrop-blur-md">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-surface text-accent">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m7 10 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              True Growth
            </span>

            <div className="mt-auto text-inverse">
              <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-white text-[26px] font-semibold">
                ®
              </span>
              <div className="mt-8">
                <span className="label-xs text-white/70">OUT NOW</span>
                <p className="display mt-1 text-[26px]">Q Industrial</p>
              </div>
              <div className="relative mt-5 w-full max-w-[390px] overflow-hidden rounded-[22px] border border-white/25">
                <img src={IMG.heroCard} alt="Q Industrial concept" className="h-[200px] w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-start justify-between text-inverse lg:items-end lg:text-right">
            <div className="text-[15px] text-white/80 lg:text-right">
              <p>We're available</p>
              <p className="flex items-center gap-2 lg:justify-end">
                <span className="h-[7px] w-[7px] rounded-full bg-[#5cff8f]" />
                for you
              </p>
            </div>

            <div className="mt-10 w-full lg:mt-0">
              <h1 className="display text-[clamp(58px,10vw,140px)] font-bold leading-[0.88] tracking-[-0.045em] lg:text-right">
                <span className="relative inline-block">
                  PURE
                  <sup className="absolute -right-12 top-1 text-[clamp(14px,1.6vw,24px)] font-semibold">('25)</sup>
                </span>
                <br />
                DESIGN
              </h1>

              <div className="mt-8 max-w-[330px] lg:ml-auto lg:text-left">
                <span className="flex items-center gap-3 text-[16px] lg:justify-start">
                  <span className="h-[8px] w-[8px] rounded-full bg-surface" />
                  (ABOUT)
                </span>
                <p className="mt-3 text-[16px] leading-[1.5] text-white/80">
                  Bulding stunning website that every shot drives income fowards.
                </p>
              </div>

              <div className="mt-10 lg:flex lg:justify-end">
                <ActionButton label="BOOK A CALL" href="https://cal.com/" tone="light" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={IMG.wordmark} alt="Agencux" className="mt-6 w-full select-none md:mt-10" />
    </section>
  );
}

function Services() {
  return (
    <section className="page pt-16 md:pt-24">
      <Reveal className="grid items-start gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
        <Badge
          icon={
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M3 14 8 9l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M13 6h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          }
        >
          Creativity Meets Tech
        </Badge>
        <SectionHeading first="Design & Tech" accent="Solutions" className="lg:pl-6" />
      </Reveal>

      <div className="mt-10 overflow-hidden rounded-[40px] bg-ink px-5 py-10 md:px-10 md:py-16">
        <div className="space-y-16 md:space-y-24">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="relative overflow-hidden rounded-[26px]">
                  <img
                    src={s.image}
                    alt={s.title.replace("\n", " ")}
                    loading="lazy"
                    className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[430px]"
                  />
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-3">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/14 px-4 py-2 text-[15px] text-inverse backdrop-blur-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-inverse lg:pl-10">
                  <span className="label-xs inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                    {s.n}
                  </span>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <h3 className="display whitespace-pre-line text-[clamp(32px,4vw,50px)]">{s.title}</h3>
                    <span className="mt-4 h-3 w-3 shrink-0 rounded-full bg-accent" />
                  </div>
                  <div className="mt-6 border-t border-white/15 pt-5">
                    <p className="max-w-[430px] text-[16px] leading-[1.5] text-white/70">{s.body}</p>
                  </div>
                  <div className="mt-8">
                    <ActionButton label="VIEW MORE" to="/work" tone="light" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandMarquee() {
  return (
    <section className="py-14 md:py-20">
      <Marquee duration={26}>
        <div className="flex items-center gap-12 pr-12">
          <span className="display text-[clamp(48px,9vw,120px)] whitespace-nowrap">WHERE BRANDS</span>
          <span className="h-3 w-3 rounded-full bg-accent" />
          <img src={IMG.marqueeDisc} alt="" className="h-[80px] w-auto md:h-[130px]" />
          <span className="h-3 w-3 rounded-full bg-accent" />
          <span className="display text-[clamp(48px,9vw,120px)] whitespace-nowrap">TAKE SHAPE</span>
          <span className="h-3 w-3 rounded-full bg-accent" />
        </div>
      </Marquee>
    </section>
  );
}

function Awards() {
  return (
    <section className="page">
      <div className="rounded-[40px] bg-muted px-5 py-12 md:px-10 md:py-16">
        <Reveal>
          <Badge
            icon={
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="m10 3 7 4-7 4-7-4 7-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="m3 12 7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            }
          >
            Awards
          </Badge>
          <SectionHeading first="Industry &" accent="Honors" className="mt-8" />
        </Reveal>

        <div className="mt-12 lg:pl-[40%]">
          {AWARDS.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <div className="group border-b border-[color:var(--line)] py-6">
                <div className="flex items-center justify-between gap-6">
                  <span className="display text-[clamp(22px,2.6vw,32px)] text-ink-soft transition-colors group-hover:text-ink">
                    {a.title}
                  </span>
                  <span className="text-[17px] text-ink-faint">{a.by}</span>
                </div>
                <p className="mt-2 max-h-0 overflow-hidden text-[15px] text-ink-soft opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const [i, setI] = useState(0);
  const item = IMPACT[i];
  return (
    <section className="page relative py-16 md:py-24">
      <img
        src={IMG.earth}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2 opacity-60"
      />
      <Reveal className="relative flex items-center justify-center gap-4 md:gap-10">
        <button
          type="button"
          aria-label="Previous impact"
          onClick={() => setI((v) => (v + IMPACT.length - 1) % IMPACT.length)}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent text-inverse shadow-[0_10px_34px_rgba(255,75,54,0.42)] transition-transform hover:-translate-y-0.5"
        >
          ←
        </button>

        <div className="relative w-full max-w-[640px] rounded-[32px] bg-ink px-6 py-8 md:px-10 md:py-10">
          <Badge
            tone="dark"
            icon={
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-accent" fill="none" aria-hidden="true">
                <circle cx="8" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            }
          >
            Our Impact
          </Badge>
          <p className="display mt-6 text-[clamp(62px,10vw,120px)] text-accent">{item.value}</p>
          <p className="mt-4 max-w-[430px] text-[clamp(18px,2.2vw,26px)] leading-[1.25] text-white/80">{item.text}</p>
          <div className="mt-8 flex justify-end gap-3">
            <img src={IMG.impactA} alt="" className="h-[86px] w-[86px] rounded-2xl object-cover" />
            <img src={IMG.impactB} alt="" className="h-[86px] w-[86px] rounded-2xl object-cover" />
          </div>
        </div>

        <button
          type="button"
          aria-label="Next impact"
          onClick={() => setI((v) => (v + 1) % IMPACT.length)}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent text-inverse shadow-[0_10px_34px_rgba(255,75,54,0.42)] transition-transform hover:-translate-y-0.5"
        >
          →
        </button>
      </Reveal>

      <div className="relative mt-14">
        <Marquee duration={34}>
          <div className="flex items-center gap-6 pr-6">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <span
                key={`${logo}-${idx}`}
                className="grid h-[92px] w-[280px] shrink-0 place-items-center rounded-full bg-muted"
              >
                <img src={logo} alt="" className="h-[34px] w-auto opacity-70" />
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

function WorkGrid({ items }: { items: typeof WORKS }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((w, i) => (
        <Reveal key={w.slug} delay={i * 60} className={w.span === "full" ? "md:col-span-2" : ""}>
          <Link to="/work/$slug" params={{ slug: w.slug }} className="group block h-full">
            <div className="relative h-full overflow-hidden rounded-[26px]">
              <img
                src={w.image}
                alt={w.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                  w.span === "full" ? "h-[300px] md:h-[430px]" : "h-[300px] md:h-[470px]"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/85 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="display text-[26px] text-inverse">{w.title}</p>
                <p className="mt-2 text-[15px] text-white/70">{w.tags.join(" · ")}</p>
                <p className="mt-2 max-w-[520px] text-[14px] text-white/55">{w.body}</p>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function DarkBlock() {
  const [open, setOpen] = useState(0);
  const [t, setT] = useState(0);
  const tm = TESTIMONIALS[t];

  return (
    <section className="page">
      <div className="overflow-hidden rounded-[40px] bg-ink">
        {/* Works */}
        <div className="px-5 py-12 md:px-10 md:py-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Badge
                tone="dark"
                icon={
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                    <ellipse cx="10" cy="6" rx="6" ry="2.6" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M4 6v8c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6V6" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                }
              >
                Apexus Collective
              </Badge>
              <h2 className="display mt-8 text-[clamp(42px,7vw,86px)] text-inverse">
                Work That
                <br />
                Speaks
              </h2>
            </div>
            <ActionButton label="EXPLORE ALL WORKS" to="/work" tone="light" />
          </Reveal>

          <div className="mt-10">
            <WorkGrid items={WORKS.slice(0, 5)} />
          </div>
        </div>

        <MetaBar right="THE PROCESS" tone="dark" />

        {/* Process */}
        <div className="px-5 py-14 md:px-10 md:py-20">
          <Reveal className="flex flex-col items-center text-center">
            <Badge
              tone="dark"
              icon={
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                  <circle cx="6" cy="10" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="14" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="14" cy="14.5" r="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="m7.8 9 4.4-2.4M7.8 11l4.4 2.4" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              }
            >
              Our Approach
            </Badge>
            <h2 className="display mt-8 text-[clamp(42px,7vw,86px)] text-inverse">How We Work</h2>
          </Reveal>

          <div className="mt-12 flex items-center justify-between gap-3">
            {["Week 1", "Week 2", "Week 3"].map((w, i) => (
              <div key={w} className="flex flex-1 items-center gap-3 last:flex-none">
                <span className="rounded-full bg-white/10 px-5 py-3 text-[15px] text-inverse">{w}</span>
                {i < 2 ? <span className="h-px flex-1 bg-white/15" /> : null}
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-5 lg:relative lg:h-[330px] lg:space-y-0">
            {PROCESS.map((p, i) => {
              const active = open === i;
              const offsets = ["lg:left-[2%] lg:top-0", "lg:left-[28%] lg:top-[88px]", "lg:left-[54%] lg:top-[176px]"];
              return (
                <div
                  key={p.n}
                  className={`w-full lg:absolute lg:w-[46%] ${offsets[i]}`}
                  style={{ zIndex: active ? 20 : 10 - i }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className={`w-full rounded-[26px] text-left transition-all duration-500 ${
                      active ? "bg-surface text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)]" : "bg-white/10 text-inverse"
                    }`}
                  >
                    <div className="flex items-center gap-4 p-3">
                      <span
                        className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-[19px] font-semibold ${
                          active
                            ? "bg-accent text-inverse shadow-[0_10px_30px_rgba(255,75,54,0.5)]"
                            : "bg-accent text-inverse"
                        }`}
                      >
                        {p.n}
                      </span>
                      <span className="label-xs text-[15px]">{p.title}</span>
                      <span
                        className={`ml-auto grid h-9 w-9 place-items-center rounded-full ${
                          active ? "bg-ink text-inverse" : "bg-white/15 text-inverse"
                        }`}
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className={`h-3 w-3 transition-transform ${active ? "rotate-180" : ""}`}
                          fill="none"
                        >
                          <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </div>
                    <div className={`grid transition-all duration-500 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-[15px] leading-[1.55] text-ink-soft">{p.body}</p>
                      </div>
                    </div>
                  </button>
                  {active ? (
                    <span className="mt-4 ml-6 inline-block rounded-full bg-accent px-5 py-2 text-[15px] text-inverse shadow-[0_10px_30px_rgba(255,75,54,0.5)]">
                      {p.chip}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <MetaBar right="SELECTED CLIENTS" tone="dark" />

        {/* Testimonials */}
        <div className="grid gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-2">
          <Reveal>
            <div
              className="overflow-hidden rounded-[26px]"
              style={{ backgroundImage: `url(${IMG.testimonialDots})`, backgroundSize: "cover" }}
            >
              <img src={tm.image} alt={tm.name} loading="lazy" className="h-[480px] w-full object-cover md:h-[620px]" />
            </div>
          </Reveal>

          <Reveal delay={80} className="flex flex-col">
            <Badge
              tone="dark"
              icon={
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M7 16.5 9.5 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              }
            >
              Testimonials
            </Badge>
            <h2 className="display mt-8 text-[clamp(42px,6vw,78px)] text-inverse">
              Trusted by
              <br />
              Clients
            </h2>

            <div className="mt-10 rounded-[26px] bg-white/6 p-7">
              <span className="block h-3 w-3 rounded-full bg-accent" />
              <p className="mt-6 text-[clamp(19px,2.2vw,26px)] leading-[1.35] text-inverse">"{tm.quote}"</p>
              <div className="mt-7 flex items-center gap-4 border-t border-white/12 pt-6">
                <img src={tm.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                <span>
                  <span className="label-xs block text-inverse">{tm.name}</span>
                  <span className="block text-[15px] text-white/55">{tm.role}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setT((v) => (v + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}
                className="grid h-14 w-[108px] place-items-center rounded-full bg-surface text-ink"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setT((v) => (v + 1) % TESTIMONIALS.length)}
                className="grid h-14 w-[108px] place-items-center rounded-full bg-accent text-inverse shadow-[0_10px_34px_rgba(255,75,54,0.45)]"
              >
                →
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="page py-16 md:py-24">
      <Reveal className="flex flex-col items-center text-center">
        <Badge
          icon={
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <circle cx="7.5" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="13.5" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M3.5 15c.8-2 2.4-3 4-3s3.2 1 4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          }
        >
          Who We Are
        </Badge>
        <SectionHeading first="The Faces of" accent="Agencux" className="mt-8 text-center" />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <div className="group relative overflow-hidden rounded-[26px] bg-muted">
              <span className="display absolute right-6 top-4 z-10 text-[64px] text-white/60">{m.n}</span>
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[470px]"
              />
              <div className="absolute inset-x-4 bottom-4 translate-y-6 rounded-[20px] bg-surface p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-start justify-between">
                  <span>
                    <span className="label-xs block">{m.name}</span>
                    <span className="mt-1 block text-[15px] text-ink-soft">{m.role}</span>
                  </span>
                  <img src={IMG.teamMonogram} alt="" className="h-6 w-6" />
                </div>
                <div className="mt-4 flex gap-2 border-t border-[color:var(--line)] pt-4">
                  {["X", "IG", "DR"].map((s) => (
                    <span
                      key={s}
                      className="grid h-9 w-9 place-items-center rounded-full bg-muted text-[12px] text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="page py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="flex flex-col">
          <Badge
            icon={
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="m13 13 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          >
            Quick Guidance
          </Badge>
          <SectionHeading first="Clarifying the" accent="Details" className="mt-8" />
          <div className="mt-auto pt-14">
            <p className="text-[17px] text-ink-soft">Do you have any more questions?</p>
            <div className="mt-5">
              <ActionButton label="CALL US" href="https://cal.com/" tone="accent" />
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const active = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : i)}
                  className={`w-full rounded-[22px] px-6 py-5 text-left transition-colors ${
                    active ? "bg-surface shadow-[0_10px_30px_rgba(0,0,0,0.06)]" : "bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-accent" />
                    <span className="text-[clamp(16px,1.7vw,20px)]">{f.q}</span>
                    <span className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-inverse">
                      <svg
                        viewBox="0 0 12 12"
                        className={`h-3 w-3 transition-transform duration-300 ${active ? "rotate-180" : ""}`}
                        fill="none"
                      >
                        <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <div className={`grid transition-all duration-500 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="pl-6 pr-10 pt-4 text-[15px] leading-[1.55] text-ink-soft">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="page py-16 md:py-24">
      <Reveal className="flex flex-col items-center text-center">
        <Badge
          icon={
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M3 9V4h5l9 9-5 5-9-9Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          }
        >
          Our Pricing
        </Badge>
        <SectionHeading first="Pricing Made" accent="Simple" className="mt-8 text-center" />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className="overflow-hidden rounded-[30px] bg-ink">
              <div
                className={`px-7 py-9 ${
                  p.featured
                    ? "bg-[linear-gradient(120deg,#8f1a10_0%,#ff4b36_45%,#7d1409_100%)]"
                    : "bg-ink"
                }`}
              >
                <span className="label-xs flex items-center gap-3 text-inverse">
                  <span className="h-[7px] w-[7px] rounded-full bg-accent" />
                  {p.name}
                </span>
                <p className="mt-3 text-[16px] text-white/70">{p.sub}</p>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                  <p className="display flex items-start text-[clamp(52px,8vw,88px)] text-inverse">
                    <span className="mt-6 mr-1 text-[24px]">$</span>
                    {p.price}
                  </p>
                  <p className="text-[16px] text-inverse">
                    One-time payment
                    <span className="block text-white/60">plus local taxes</span>
                  </p>
                </div>

                <div className="mt-8">
                  <ActionButton
                    label="START PROJECT"
                    to="/contact"
                    tone={p.featured ? "light" : "accent"}
                    className="w-full [&>span:nth-child(2)]:mx-auto"
                  />
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-3 px-7 py-8 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[16px] text-white/85">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#8fe36a]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function GlobalReach() {
  return (
    <section className="page py-16 md:py-24">
      <Reveal className="flex flex-col items-center text-center">
        <Badge
          icon={
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
              <path d="M3 10h14M10 3c2 2.4 2 11.6 0 14M10 3c-2 2.4-2 11.6 0 14" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          }
        >
          Worldwide Presence
        </Badge>
        <SectionHeading first="Our Global" accent="Reach" className="mt-8 text-center" />
      </Reveal>

      <div className="relative mt-10">
        <img src={IMG.worldMap} alt="World map" className="w-full" />
        {LOCATIONS.map((l) => (
          <div key={l.city} className="absolute" style={{ left: `${l.x}%`, top: `${l.y}%` }}>
            <span className="flex items-center gap-2 rounded-full bg-surface py-[5px] pl-[5px] pr-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
              <img src={l.flag} alt="" className="h-7 w-7 rounded-full object-cover" />
              <span className="label-xs">{l.city}</span>
            </span>
            <span className="absolute left-6 top-[52px] h-[10px] w-[10px] rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <MetaBar right="LIVE IN DETAILS" />
      <Services />
      <BrandMarquee />
      <Awards />
      <Impact />
      <DarkBlock />
      <MetaBar right="TEAM MEMBERS" />
      <TeamSection />
      <MetaBar right="FAQ" />
      <FaqSection />
      <MetaBar right="PRICING $ PLAN" />
      <Pricing />
      <MetaBar right="LOCATION" />
      <GlobalReach />
      <ContactSection />
    </>
  );
}
