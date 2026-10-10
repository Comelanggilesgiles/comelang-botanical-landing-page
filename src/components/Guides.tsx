import type { CSSProperties } from "react";
import { GUIDES } from "@/data/content";
import { ArrowRight, Img, SectionLabel, SplitHeading } from "@/components/ui";

export default function Guides() {
  return (
    <section id="guides" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Seasonal Garden Guide</SectionLabel>
            <SplitHeading
              lines={["Grow Something", "*Beautiful* This Season."]}
              delay={80}
              className="display-lg mt-7 text-forest"
            />
          </div>
          <p
            data-reveal="up"
            style={{ "--d": "180ms" } as CSSProperties}
            className="max-w-sm text-[0.95rem] leading-relaxed text-forest/65"
          >
            Short, practical notes from the nursery bench. No jargon, no
            thirty-step routines — just what actually matters this month.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((g, i) => (
            <article
              key={g.title}
              data-reveal="up"
              style={{ "--d": `${i * 120}ms` } as CSSProperties}
              className="card group flex flex-col bg-cream"
            >
              <div className="media media-zoom aspect-[5/4] overflow-hidden">
                <Img
                  photo={g.photo}
                  ratio={1.25}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                />
                <span className="chip absolute left-4 top-4 bg-cream/85 backdrop-blur-sm">
                  {g.kicker}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[1.35rem] leading-tight text-forest">
                  {g.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-forest/65">
                  {g.text}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-forest/10 pt-5">
                  <a
                    href="#guides"
                    className="link-arrow link-underline text-earth"
                    aria-label={`Read the guide: ${g.title}`}
                  >
                    Read Guide
                    <ArrowRight />
                  </a>
                  <span className="text-[0.75rem] text-forest/40">{g.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
