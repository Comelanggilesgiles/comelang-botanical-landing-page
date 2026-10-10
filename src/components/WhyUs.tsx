import type { CSSProperties } from "react";
import { BENEFITS } from "@/data/content";
import { BotanicalIcon, SectionLabel, SplitHeading } from "@/components/ui";

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-sagesoft py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[760px] -translate-x-1/2 rounded-full bg-cream/60 blur-[120px]"
      />

      <div className="shell relative">
        <div className="max-w-3xl">
          <SectionLabel>Why Choose Us</SectionLabel>
          <SplitHeading
            lines={["Rooted in Care.", "Grown With *Purpose*."]}
            delay={80}
            className="display-lg mt-7 text-forest"
          />
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[26px] border border-forest/12 bg-forest/12 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <li
              key={b.title}
              data-reveal="up"
              style={{ "--d": `${i * 120}ms` } as CSSProperties}
              className="group relative bg-cream p-7 transition-colors duration-700 hover:bg-ivory md:p-8"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-forest/12 text-forest transition-all duration-700 group-hover:-translate-y-1 group-hover:border-terracotta/50 group-hover:text-terracotta">
                <BotanicalIcon name={b.icon} />
              </span>

              <h3 className="mt-7 font-display text-[1.35rem] leading-tight text-forest">
                {b.title}
              </h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-forest/65">
                {b.text}
              </p>

              <span
                aria-hidden="true"
                className="label mt-8 block text-forest/25"
              >
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
