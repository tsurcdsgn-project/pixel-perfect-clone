import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { POSTS } from "@/lib/agencux-data";
import { ContactSection } from "@/components/agencux/ContactSection";
import { Badge, Reveal } from "@/components/agencux/ui";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Agencux" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Agencux Blog` },
        { name: "description", content: post.body[0].slice(0, 150) },
        { property: "og:title", content: `${post.title} — Agencux Blog` },
        { property: "og:description", content: post.body[0].slice(0, 150) },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="page pt-6">
        <Reveal className="flex flex-col items-center text-center">
          <Badge>{post.kicker}</Badge>
          <h1 className="display mt-8 max-w-[900px] text-[clamp(38px,6vw,84px)]">{post.title}</h1>
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-[36px]">
          <img src={post.image} alt={post.title} className="h-[320px] w-full object-cover md:h-[600px]" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-[760px] space-y-6 text-[18px] leading-[1.7] text-ink-soft">
          {post.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </article>

      <section className="page py-16">
        <h2 className="display text-[clamp(30px,4vw,52px)]">More stories</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/blog/$slug" params={{ slug: o.slug }} className="group block">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={o.image}
                  alt={o.title}
                  loading="lazy"
                  className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="label-xs mt-4 block text-ink-faint">{o.kicker}</span>
              <p className="display mt-1 text-[21px]">{o.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
