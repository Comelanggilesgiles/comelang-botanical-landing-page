import type { CSSProperties } from "react";
import { HERO, MARQUEE, BRAND } from "@/data/content";
import { scrollToId } from "@/lib/motion";
import {
  ArrowRight,
  ArrowUpRight,
  Img,
  LeafOrnament,
  SectionLabel,
  SplitHeading,
} from "@/components/ui";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sagesoft via-sagesoft/70 to-ivory"
    >
      {/* Ambient botanical ornaments ------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-[420px] w-[420px] rounded-full bg-sage/35 blur-[110px] anim-breathe" />
        <div className="absolute right-[34%] -top-10 h-[260px] w-[260px] rounded-full bg-terracotta/15 blur-[90px] anim-breathe [animation-delay:3s]" />
        <LeafOrnament
          className="anim-sway absolute -left-10 top-[22%] hidden w-28 text-forest md:block"
          style={{ "--rot": "-18deg" } as CSSProperties}
        />
        <LeafOrnament
          className="anim-sway absolute left-[12%] bottom-[12%] hidden w-16 text-earth lg:block"
          style={{ "--rot": "28deg", animationDelay: "2.5s" } as CSSProperties}
        />
        <LeafOrnament
          className="anim-drift absolute right-[4%] bottom-[26%] w-20 text-forest/70 md:w-24"
          style={{ animationDelay: "1.2s" } as CSSProperties}
        />
      </div>

      <div className="shell relative grid gap-12 pt-32 pb-16 md:pt-40 lg:min-h-[86vh] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:pt-44 lg:pb-24">
        {/* Copy ---------------------------------------------------- */}
        <div className="relative max-w-[640px]">
          <SectionLabel>{HERO.eyebrow}</SectionLabel>

          <SplitHeading
            as="h1"
            lines={HERO.headline}
            delay={160}
            className="display-xl mt-7 text-forest"
          />

          <p
            data-reveal="up"
            style={{ "--d": "620ms" } as CSSProperties}
            className="lede mt-7 max-w-[30rem]"
          >
            {HERO.body}
          </p>

          <div
            data-reveal="up"
            style={{ "--d": "760ms" } as CSSProperties}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToId("gardens")}
            >
              Explore Our Garden
              <ArrowRight />
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => scrollToId("story")}
            >
              Discover Our Story
              <ArrowUpRight />
            </button>
          </div>

          {/* Small botanical label card --------------------------- */}
          <div
            data-reveal="up"
            style={{ "--d": "900ms" } as CSSProperties}
            className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-forest/12 bg-cream/70 px-5 py-4 backdrop-blur-sm"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-ivory">
              <LeafOrnament className="h-6 w-4" />
            </span>
            <span className="block">
              <span className="label block text-earth">Specimen No. 014</span>
              <span className="mt-1 block font-display text-[1.05rem] leading-tight text-forest">
                Monstera deliciosa{" "}
                <span className="accent-italic text-[0.95rem]">· propagated in-house</span>
              </span>
            </span>
          </div>
        </div>

        {/* Imagery ------------------------------------------------- */}
        <div className="relative">
          <div
            data-reveal="mask"
            className="media relative aspect-[4/5] overflow-hidden rounded-[28px] rounded-tl-[140px] shadow-[0_50px_90px_-50px_rgba(36,61,45,0.65)] sm:aspect-[5/6] lg:aspect-[4/5]"
          >
            <div className="h-full w-full">
              <Img
                photo={HERO.photo}
                ratio={0.8}
                priority
                sizes="(max-width: 1024px) 92vw, 48vw"
                parallax="0.05"
              />
            </div>
          </div>

          {/* Floating inset photo */}
          <div
            data-reveal="up"
            style={{ "--d": "700ms" } as CSSProperties}
            className="absolute -bottom-8 -left-2 hidden w-40 overflow-hidden rounded-2xl border-[6px] border-cream shadow-[0_30px_60px_-34px_rgba(36,61,45,0.8)] sm:block lg:-left-12 lg:w-52"
          >
            <div className="media aspect-square">
              <Img photo={HERO.inset} ratio={1} sizes="220px" />
            </div>
          </div>

          {/* Vertical caption */}
          <span
            aria-hidden="true"
            className="label absolute -right-3 top-8 hidden rotate-90 origin-top-right text-forest/45 xl:block"
          >
            {BRAND.tagline}
          </span>
        </div>
      </div>

      {/* Scroll cue --------------------------------------------------- */}
      <div className="shell relative flex items-center justify-between pb-10">
        <span className="label hidden text-forest/45 md:block">Scroll to explore</span>
        <span
          aria-hidden="true"
          className="relative hidden h-14 w-px overflow-hidden bg-forest/15 md:block"
        >
          <span className="absolute inset-x-0 top-0 h-1/2 bg-forest/70 [animation:scrollCue_2.6s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
        </span>
      </div>

      {/* Marquee band ------------------------------------------------- */}
      <div className="marquee-wrap relative overflow-hidden border-y border-forest/10 bg-forest py-4 text-ivory">
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-10 pr-10">
              {MARQUEE.map((word) => (
                <span key={word} className="flex items-center gap-10">
                  <span className="label whitespace-nowrap text-ivory/85">{word}</span>
                  <span aria-hidden="true" className="text-sage/70">
                    ✻
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
