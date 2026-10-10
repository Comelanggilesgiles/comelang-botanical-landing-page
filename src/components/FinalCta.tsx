import type { CSSProperties } from "react";
import { FINAL_CTA } from "@/data/content";
import { scrollToId } from "@/lib/motion";
import {
  ArrowRight,
  ArrowUpRight,
  Img,
  LeafOrnament,
  SplitHeading,
} from "@/components/ui";

export default function FinalCta() {
  return (
    <section id="start" className="relative overflow-hidden bg-ivory py-24 md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full bg-sage/30 blur-[110px] anim-breathe" />
        <div className="absolute right-0 top-10 h-[280px] w-[280px] rounded-full bg-terracotta/12 blur-[100px] anim-breathe [animation-delay:4s]" />
        <LeafOrnament
          className="anim-sway absolute left-[6%] top-[14%] hidden w-20 text-forest lg:block"
          style={{ "--rot": "-22deg" } as CSSProperties}
        />
        <LeafOrnament
          className="anim-drift absolute right-[8%] bottom-[12%] hidden w-24 text-earth lg:block"
        />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <span data-reveal="fade" className="label block text-earth">
            Let&apos;s Begin
          </span>

          <SplitHeading
            lines={["Let's Make Room", "for *Nature*."]}
            delay={120}
            className="display-xl mt-7 text-forest"
          />

          <p
            data-reveal="up"
            style={{ "--d": "520ms" } as CSSProperties}
            className="lede mx-auto mt-8 max-w-xl"
          >
            {FINAL_CTA.body}
          </p>

          <div
            data-reveal="up"
            style={{ "--d": "650ms" } as CSSProperties}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToId("visit")}
            >
              Start Your Garden Journey
              <ArrowRight />
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => scrollToId("services")}
            >
              Talk to Our Team
              <ArrowUpRight />
            </button>
          </div>
        </div>

        {/* Slow image reveal band ---------------------------------- */}
        <div
          data-reveal="mask"
          className="media mt-16 aspect-[16/9] overflow-hidden rounded-[28px] md:mt-20 md:aspect-[21/8]"
        >
          <div className="h-full w-full">
            <Img
              photo={FINAL_CTA.photo}
              ratio={2.4}
              sizes="94vw"
              scale="0.08"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
