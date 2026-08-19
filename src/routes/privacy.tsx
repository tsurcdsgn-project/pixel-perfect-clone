import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/agencux/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Agencux Studio" },
      { name: "description", content: "How Agencux collects, uses, and protects the information you share with us." },
      { property: "og:title", content: "Privacy Policy — Agencux Studio" },
      { property: "og:description", content: "How Agencux handles the information you share with the studio." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" first="PRIVACY" second="POLICY" />
      <section className="page mx-auto max-w-[820px] space-y-6 py-12 text-[17px] leading-[1.7] text-ink-soft">
        <p>
          We only collect the details you submit through the contact form — email, phone, and message — and use them to
          reply to your enquiry.
        </p>
        <p>We never sell your data. Records are kept only as long as needed to answer and follow up on a request.</p>
        <p>To request deletion of your data, write to info@agencux.com.</p>
      </section>
    </>
  );
}
