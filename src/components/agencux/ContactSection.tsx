import { useState } from "react";
import { IMG } from "@/lib/agencux-data";
import { ArrowIcon, Reveal } from "./ui";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="page py-16 md:py-24">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[40px] bg-ink px-5 py-12 md:px-12 md:py-20"
          style={{
            backgroundImage: `url(${IMG.contactBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <form
              className="rounded-[28px] bg-surface p-6 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {[
                { id: "email", label: "YOUR EMAIL", type: "email", placeholder: "hello@company.com" },
                { id: "phone", label: "YOUR PHONE", type: "tel", placeholder: "+1 (000) 000 0000" },
              ].map((f) => (
                <div key={f.id} className="mb-5">
                  <label htmlFor={f.id} className="label-xs mb-3 flex items-center gap-2">
                    <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="w-full rounded-2xl bg-muted px-5 py-4 text-[15px] outline-none transition focus:ring-2 focus:ring-accent/40"
                  />
                </div>
              ))}
              <div className="mb-6">
                <label htmlFor="message" className="label-xs mb-3 flex items-center gap-2">
                  <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about the project…"
                  className="w-full resize-y rounded-2xl bg-muted px-5 py-4 text-[15px] outline-none transition focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-accent py-[7px] pl-5 pr-[7px] text-inverse shadow-[0_10px_34px_rgba(21,94,239,0.30)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="h-[7px] w-[7px] rounded-full bg-inverse" />
                <span className="label-xs">{sent ? "REQUEST SENT" : "SEND REQUEST"}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-surface text-ink transition-transform duration-300 group-hover:rotate-45">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </button>
            </form>

            <div className="text-inverse lg:pl-6 lg:pt-6">
              <span className="label-xs text-white/60">Contact Form</span>
              <h2 className="display mt-4 text-[clamp(40px,6vw,72px)]">
                Fill the
                <br />
                <span className="text-accent">form</span>
              </h2>

              <div className="mt-10 space-y-4">
                {[
                  { label: "E-mail Address", value: "info@agencux.com", href: "mailto:info@agencux.com" },
                  { label: "Office Address", value: "22 Norman, NY, USA", href: "#" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20">
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[13px] text-white/55">{c.label}</span>
                      <span className="block text-[17px]">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
