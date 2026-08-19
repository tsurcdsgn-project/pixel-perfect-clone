import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { WORKS } from "@/lib/agencux-data";
import { ContactSection } from "@/components/agencux/ContactSection";
import { ActionButton, Badge, Reveal } from "@/components/agencux/ui";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const work = WORKS.find((w) => w.slug === params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Agencux" }, { name: "robots", content: "noindex" }] };
    }
    const { work } = loaderData;
    return {
      meta: [
        { title: `${work.title} — Agencux Case Study` },
        { name: "description", content: work.body },
        { property: "og:title", content: `${work.title} — Agencux Case Study` },
        { property: "og:description", content: work.body },
        { property: "og:image", content: work.image },
        { name: "twitter:image", content: work.image },
      ],
    };
  },
  component: WorkDetail,
});

function WorkDetail() {
  const { work } = Route.useLoaderData();
  const others = WORKS.filter((w) => w.slug !== work.slug).slice(0, 2);

  return (
    <>
      <section className="page pt-6">
        <Reveal className="flex flex-col items-center text-center">
          <Badge>{work.tags[0]}</Badge>
          <h1 className="display mt-8 text-[clamp(48px,9vw,120px)]">{work.title}</h1>
          <p className="mt-6 max-w-[620px] text-[17px] leading-[1.55] text-ink-soft">{work.body}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-[36px]">
          <img src={work.image} alt={work.title} className="h-[340px] w-full object-cover md:h-[620px]" />
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-[color:var(--line)] pt-10 lg:grid-cols-[320px_1fr]">
          <div className="space-y-6">
            {[
              { k: "Services", v: work.tags.join(", ") },
              { k: "Year", v: "2025" },
              { k: "Studio", v: "Agencux" },
            ].map((m) => (
              <div key={m.k}>
                <span className="label-xs text-ink-faint">{m.k}</span>
                <p className="mt-1 text-[18px]">{m.v}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[720px] space-y-5 text-[17px] leading-[1.65] text-ink-soft">
            <p>
              {work.body} The engagement started with a positioning sprint, moved through art direction, and ended with
              a production-ready design system delivered to the client's team.
            </p>
            <p>
              Every surface — from the identity to the motion language — was built on the same grid, type scale, and
              colour logic, so the brand stays recognisable wherever it appears.
            </p>
            <ActionButton label="START A PROJECT" to="/contact" tone="accent" className="mt-4" />
          </div>
        </div>
      </section>

      <section className="page py-16">
        <h2 className="display text-[clamp(30px,4vw,52px)]">Next projects</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} to="/work/$slug" params={{ slug: o.slug }} className="group block">
              <div className="overflow-hidden rounded-[26px]">
                <img
                  src={o.image}
                  alt={o.title}
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[380px]"
                />
              </div>
              <p className="display mt-4 text-[24px]">{o.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
