import { createFileRoute, Link } from "@tanstack/react-router";
import { WORKS } from "@/lib/agencux-data";
import { PageHero } from "@/components/agencux/PageHero";
import { ContactSection } from "@/components/agencux/ContactSection";
import { Reveal } from "@/components/agencux/ui";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Our Work — Agencux Creative Studio" },
      {
        name: "description",
        content: "Selected branding, visual direction and UI/UX case studies from the Agencux studio.",
      },
      { property: "og:title", content: "Our Work — Agencux Creative Studio" },
      { property: "og:description", content: "Selected branding, visual direction and UI/UX case studies." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <PageHero eyebrow="Apexus Collective" first="OUR WORK" second="THAT SPEAKS" />
      <section className="page py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {WORKS.map((w, i) => (
            <Reveal key={w.slug} delay={i * 60}>
              <Link to="/work/$slug" params={{ slug: w.slug }} className="group block">
                <div className="relative overflow-hidden rounded-[26px] bg-muted">
                  <img
                    src={w.image}
                    alt={w.title}
                    loading="lazy"
                    className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[460px]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="display text-[26px]">{w.title}</p>
                    <p className="mt-2 max-w-[420px] text-[15px] text-ink-soft">{w.body}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-4 py-2 text-[14px] text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
