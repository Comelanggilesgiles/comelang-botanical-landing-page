import type { CSSProperties } from "react";
import { TESTIMONIALS } from "@/data/content";
import { Img, SectionLabel, SplitHeading } from "@/components/ui";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-ivory to-sagesoft py-24 md:py-32"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Customer Testimonials</SectionLabel>
            <SplitHeading
              lines={["Growing *Happier* Spaces."]}
              delay={80}
              className="display-lg mt-7 text-forest"
            />
          </div>
          <p
            data-reveal="up"
            style={{ "--d": "180ms" } as CSSProperties}
            className="max-w-xs text-[0.85rem] leading-relaxed text-forest/55"
          >
            Sample testimonials shown for development. Replace the{" "}
            <code className="text-earth">TESTIMONIALS</code> array with verified,
            attributed customer reviews before launch.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-reveal="up"
              style={{ "--d": `${i * 140}ms` } as CSSProperties}
              className="card group flex flex-col bg-cream p-7 md:p-8"
            >
              <span
                aria-hidden="true"
                className="block font-display text-[3.6rem] leading-[0.6] text-sage"
              >
                &ldquo;
              </span>

              <blockquote className="mt-5 flex-1">
                <p className="font-display text-[1.18rem] leading-[1.5] tracking-[-0.015em] text-forest/90">
                  {t.quote}
                </p>
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-forest/10 pt-6">
                <span className="media h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Img photo={t.photo} ratio={1} sizes="56px" />
                </span>
                <span className="block">
                  <span className="block text-[0.95rem] font-medium text-forest">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block text-[0.8rem] text-forest/55">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
