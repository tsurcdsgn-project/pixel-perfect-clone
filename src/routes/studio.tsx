import { createFileRoute } from "@tanstack/react-router";
import { IMG, SERVICES, TEAM } from "@/lib/agencux-data";
import { PageHero } from "@/components/agencux/PageHero";
import { ContactSection } from "@/components/agencux/ContactSection";
import { ActionButton, Badge, MetaBar, Reveal, SectionHeading } from "@/components/agencux/ui";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Inside Agencux Creative Agency" },
      {
        name: "description",
        content:
          "Agencux is a creative studio established in 2021. Meet the team, the motto and the services behind the work.",
      },
      { property: "og:title", content: "Studio — Inside Agencux Creative Agency" },
      { property: "og:description", content: "Meet the team, the motto and the services behind the work." },
    ],
  }),
  component: Studio,
});

const FACTS = [
  { k: "Studio Type", v: "CREATIVE AGENCY" },
  { k: "Established In", v: "2021" },
  { k: "Our Motto", v: "THINK, CREATE, IMPACT" },
];

function Studio() {
  return (
    <>
      <PageHero eyebrow="About Us" first="OUR STORY" second="AGENCUX" />

      <section className="page pb-10">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="flex items-center gap-3 text-[16px]">
              <span className="h-[8px] w-[8px] rounded-full bg-accent" />
              (ABOUT)
            </span>
            <p className="mt-4 max-w-[520px] text-[clamp(18px,2vw,24px)] leading-[1.4]">
              Budling stunning website that every drive income forward Creative Edge began as a visual exploration how
              minimal design still carry powerful
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img src={IMG.avatar} alt="Johnny Orwell" className="h-14 w-14 rounded-full object-cover" />
              <span>
                <span className="label-xs block">JOHNNY ORWELL</span>
                <span className="block text-[15px] text-ink-soft">Founder</span>
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:pl-10">
            {FACTS.map((f) => (
              <div key={f.k} className="border-t border-[color:var(--line)] pt-4">
                <span className="label-xs block">{f.v}</span>
                <span className="mt-1 block text-[15px] text-ink-faint">{f.k}</span>
              </div>
            ))}
            <div className="sm:col-span-3">
              <ActionButton label="VIEW WORKS" to="/work" tone="accent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-12 overflow-hidden rounded-[36px]">
          <img src={IMG.building} alt="Agencux studio" className="h-[300px] w-full object-cover md:h-[560px]" />
        </Reveal>
      </section>

      <MetaBar right="SERVICES" />

      <section className="page py-16 md:py-24">
        <Reveal className="grid items-start gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
          <Badge>Creativity Meets Tech</Badge>
          <SectionHeading first="Designed For" accent="Growth" className="lg:pl-6" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <div className="h-full overflow-hidden rounded-[26px] bg-ink p-4 text-inverse">
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    src={s.image}
                    alt={s.title.replace("\n", " ")}
                    loading="lazy"
                    className="h-[260px] w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/14 px-3 py-1.5 text-[13px] backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="label-xs mt-6 block text-white/50">{s.n}</span>
                <h3 className="display mt-2 text-[26px]">{s.title.replace("\n", " ")}</h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-white/65">{s.body}</p>
                <div className="mt-6">
                  <ActionButton label="VIEW MORE" to="/work" tone="light" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <MetaBar right="TEAM MEMBERS" />

      <section className="page py-16 md:py-24">
        <Reveal className="flex flex-col items-center text-center">
          <Badge>Who We Are</Badge>
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
                  className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 translate-y-6 rounded-[20px] bg-surface p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="label-xs block">{m.name}</span>
                  <span className="mt-1 block text-[15px] text-ink-soft">{m.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
