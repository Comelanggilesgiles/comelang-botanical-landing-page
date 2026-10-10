import type { CSSProperties } from "react";
import { SERVICES } from "@/data/content";
import { scrollToId } from "@/lib/motion";
import { ArrowRight, Img, SectionLabel, SplitHeading } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-forest py-24 text-ivory md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[460px] w-[460px] rounded-full bg-sage/10 blur-[120px]"
      />

      <div className="shell relative">
        <div className="max-w-3xl">
          <SectionLabel tone="light">Garden Design Services</SectionLabel>
          <SplitHeading
            lines={["Spaces That", "*Grow* With You."]}
            delay={80}
            className="display-lg mt-7 text-ivory"
          />
          <p
            data-reveal="up"
            style={{ "--d": "220ms" } as CSSProperties}
            className="mt-7 max-w-xl text-[1rem] leading-relaxed text-ivory/65"
          >
            Three ways we work — from a single styled room to a fully drawn
            landscape. Each project starts with a site visit and an honest
            conversation about light, time and budget.
          </p>
        </div>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {SERVICES.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={service.title}
                className="group grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <div
                  data-reveal="mask"
                  className={cn(
                    "media aspect-[16/11] overflow-hidden rounded-[26px]",
                    flip && "md:order-2",
                  )}
                >
                  <div className="h-full w-full">
                    <Img
                      photo={service.photo}
                      ratio={1.45}
                      sizes="(max-width: 768px) 92vw, 46vw"
                      parallax={flip ? "0.07" : "-0.07"}
                    />
                  </div>
                </div>

                <div className={cn(flip && "md:order-1")}>
                  <span
                    data-reveal="fade"
                    className="label block text-sage/70"
                  >
                    {String(i + 1).padStart(2, "0")} / Service
                  </span>

                  <h3
                    data-reveal="up"
                    style={{ "--d": "90ms" } as CSSProperties}
                    className="display-md mt-5 text-ivory"
                  >
                    {service.title}
                  </h3>

                  <p
                    data-reveal="up"
                    style={{ "--d": "170ms" } as CSSProperties}
                    className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ivory/75"
                  >
                    {service.text}
                  </p>

                  <p
                    data-reveal="up"
                    style={{ "--d": "250ms" } as CSSProperties}
                    className="mt-3 max-w-md text-[0.92rem] leading-relaxed text-ivory/50"
                  >
                    {service.detail}
                  </p>

                  <ul
                    data-reveal="up"
                    style={{ "--d": "330ms" } as CSSProperties}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {service.meta.map((m) => (
                      <li
                        key={m}
                        className="chip border border-ivory/15 bg-ivory/5 text-ivory/75"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    data-reveal="up"
                    style={{ "--d": "410ms" } as CSSProperties}
                    onClick={() => scrollToId("visit")}
                    className="link-arrow link-underline mt-8 text-sage transition-colors duration-500 hover:text-terracotta"
                  >
                    Explore Service
                    <ArrowRight />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
