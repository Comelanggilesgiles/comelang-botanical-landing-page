import type { CSSProperties } from "react";
import { INTRO } from "@/data/content";
import { Img, SectionLabel, SplitHeading } from "@/components/ui";

export default function Intro() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>A Connection With Nature</SectionLabel>
            <SplitHeading
              lines={["Nature Has a Way", "of Making *Everything*", "Better."]}
              delay={100}
              className="display-lg mt-7 text-forest"
            />
          </div>

          <div className="lg:pt-16">
            <p
              data-reveal="up"
              style={{ "--d": "120ms" } as CSSProperties}
              className="font-display text-[1.35rem] leading-[1.42] tracking-[-0.02em] text-forest/90 md:text-[1.6rem]"
            >
              {INTRO.body}
            </p>
            <p
              data-reveal="up"
              style={{ "--d": "240ms" } as CSSProperties}
              className="lede mt-6"
            >
              {INTRO.paragraph}
            </p>
          </div>
        </div>

        {/* Editorial two-column ------------------------------------- */}
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div className="relative">
            <div
              data-reveal="mask"
              className="media aspect-[4/3] overflow-hidden rounded-[26px] md:aspect-[16/10]"
            >
              <div className="h-full w-full">
                <Img
                  photo={INTRO.photo}
                  ratio={1.5}
                  sizes="(max-width: 1024px) 92vw, 58vw"
                  parallax="0.06"
                />
              </div>
            </div>

            <div
              data-reveal="up"
              style={{ "--d": "260ms" } as CSSProperties}
              className="absolute -bottom-10 right-4 hidden w-44 overflow-hidden rounded-2xl border-[6px] border-cream shadow-[0_30px_60px_-36px_rgba(36,61,45,0.75)] md:block lg:-right-10 lg:w-56"
            >
              <div className="media aspect-[4/3]">
                <Img photo={INTRO.photoSmall} ratio={1.33} sizes="240px" />
              </div>
            </div>
          </div>

          <ul className="space-y-0 lg:pb-2">
            {INTRO.highlights.map((h, i) => (
              <li
                key={h.title}
                data-reveal="up"
                style={{ "--d": `${i * 140}ms` } as CSSProperties}
                className="group border-t border-forest/12 py-6 first:border-t-0 lg:py-7"
              >
                <div className="flex items-baseline gap-5">
                  <span className="label text-terracotta">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-[1.45rem] leading-tight text-forest transition-colors duration-500 group-hover:text-earth">
                      {h.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-forest/65">
                      {h.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Counters -------------------------------------------------- */}
        <dl className="mt-20 grid gap-8 border-t border-forest/12 pt-10 sm:grid-cols-3 lg:mt-28">
          {INTRO.stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal="up"
              style={{ "--d": `${i * 120}ms` } as CSSProperties}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span
                  className="block font-display text-[2.6rem] leading-none tracking-[-0.04em] text-forest md:text-[3.4rem]"
                  data-count={s.value}
                  data-suffix={s.suffix}
                >
                  0{s.suffix}
                </span>
                <span className="label mt-3 block text-earth/80">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
