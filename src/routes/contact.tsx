import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/agencux-data";
import { PageHero } from "@/components/agencux/PageHero";
import { ContactSection } from "@/components/agencux/ContactSection";
import { Marquee } from "@/components/agencux/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Say Hello to Agencux" },
      {
        name: "description",
        content: "Start a project with Agencux. Email info@agencux.com or send the form and we reply within a day.",
      },
      { property: "og:title", content: "Contact — Say Hello to Agencux" },
      { property: "og:description", content: "Start a project with Agencux — branding, visual design and UI/UX." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact Form" first="SAY" second="HELLO" />
      <ContactSection />
      <section className="pb-10">
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
    </>
  );
}
