import type { CSSProperties } from "react";
import { BRAND, PLANTS, type Plant } from "@/data/content";
import {
  ArrowRight,
  BotanicalIcon,
  Img,
  SectionLabel,
  SplitHeading,
} from "@/components/ui";

function PlantCard({ plant, index }: { plant: Plant; index: number }) {
  return (
    <article
      data-reveal="up"
      style={{ "--d": `${(index % 3) * 130}ms` } as CSSProperties}
      className="card group flex flex-col"
    >
      <div className="media media-zoom aspect-[4/5] overflow-hidden">
        <Img
          photo={plant.photo}
          ratio={0.8}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
        />
        <span className="chip absolute left-4 top-4 bg-cream/85 backdrop-blur-sm">
          {plant.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[1.5rem] leading-tight text-forest">
              {plant.name}
            </h3>
            <p className="accent-italic mt-1 text-[0.9rem]">{plant.latin}</p>
          </div>
          <p className="shrink-0 font-display text-[1.25rem] leading-none text-earth">
            {BRAND.currency}
            {plant.price.toLocaleString()}
          </p>
        </div>

        <p className="mt-4 text-[0.95rem] leading-relaxed text-forest/65">
          {plant.blurb}
        </p>

        {/* Care details reveal on hover / focus, always shown on touch */}
        <div className="plant-meta">
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-forest/10 pt-5">
            <div className="flex items-start gap-2.5">
              <BotanicalIcon name="sun" className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <div>
                <dt className="label text-[0.58rem] text-forest/45">Sunlight</dt>
                <dd className="mt-1 text-[0.85rem] text-forest/80">{plant.light}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <BotanicalIcon name="drop" className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              <div>
                <dt className="label text-[0.58rem] text-forest/45">Watering</dt>
                <dd className="mt-1 text-[0.85rem] text-forest/80">{plant.water}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 pt-1">
          <a
            href="#visit"
            className="link-arrow link-underline text-earth"
            aria-label={`Discover ${plant.name}`}
          >
            Discover Plant
            <ArrowRight />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Plants() {
  return (
    <section
      id="plants"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-ivory/60 to-cream py-24 md:py-32"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Featured Plants</SectionLabel>
            <SplitHeading
              lines={["Find Your Perfect", "*Green* Companion."]}
              delay={80}
              className="display-lg mt-7 text-forest"
            />
          </div>
          <p
            data-reveal="up"
            style={{ "--d": "200ms" } as CSSProperties}
            className="max-w-sm text-[0.95rem] leading-relaxed text-forest/65"
          >
            Every plant is grown, hardened and hand-checked at the nursery. Prices
            include the nursery pot, soil mix and a printed care card.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {PLANTS.map((plant, i) => (
            <PlantCard key={plant.name} plant={plant} index={i} />
          ))}
        </div>

        <p
          data-reveal="fade"
          className="mt-10 text-center text-[0.82rem] text-forest/45"
        >
          Prices shown in Philippine pesos ({BRAND.currency}) — sample pricing for
          development.
        </p>
      </div>
    </section>
  );
}
