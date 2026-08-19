import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/agencux/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Agencux Studio" },
      { name: "description", content: "The terms that govern the use of the Agencux studio website and services." },
      { property: "og:title", content: "Terms of Use — Agencux Studio" },
      { property: "og:description", content: "Terms governing use of the Agencux website and services." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" first="TERMS" second="OF USE" />
      <section className="page mx-auto max-w-[820px] space-y-6 py-12 text-[17px] leading-[1.7] text-ink-soft">
        <p>
          By accessing this website you agree to these terms. Content, layout, and visual system are provided for
          informational purposes and may change without notice.
        </p>
        <p>
          All project imagery is presented as portfolio material. Reproduction of the studio's work without written
          consent is not permitted.
        </p>
        <p>Questions about these terms can be sent to info@agencux.com.</p>
      </section>
    </>
  );
}
