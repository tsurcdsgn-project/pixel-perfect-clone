import { Badge } from "./ui";

export function PageHero({ eyebrow, first, second }: { eyebrow: string; first: string; second: string }) {
  return (
    <section className="page pb-6 pt-6 md:pb-12 md:pt-10">
      <div className="flex flex-col items-center text-center">
        <Badge>{eyebrow}</Badge>
        <h1 className="display mt-8 text-[clamp(56px,12vw,168px)] font-bold leading-[0.86]">
          <span className="relative inline-block">
            {first}
            <sup className="absolute -right-14 top-2 text-[clamp(14px,1.6vw,24px)] font-semibold text-ink-soft">
              ('25)
            </sup>
          </span>
          <br />
          {second}
        </h1>
      </div>
    </section>
  );
}
