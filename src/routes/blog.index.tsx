import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/agencux-data";
import { PageHero } from "@/components/agencux/PageHero";
import { ContactSection } from "@/components/agencux/ContactSection";
import { Reveal } from "@/components/agencux/ui";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Agencux Studio" },
      {
        name: "description",
        content: "Essays on branding, minimalism, motion and design that drives measurable business results.",
      },
      { property: "og:title", content: "Blog & Insights — Agencux Studio" },
      { property: "og:description", content: "Essays on branding, minimalism, motion and design that performs." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero eyebrow="Blog Insights" first="CREATIVE" second="BLOG STORIES" />
      <section className="page py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden rounded-[26px] bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[420px]"
                  />
                </div>
                <span className="label-xs mt-5 block text-ink-faint">{p.kicker}</span>
                <p className="display mt-2 text-[clamp(22px,2.4vw,30px)]">{p.title}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
