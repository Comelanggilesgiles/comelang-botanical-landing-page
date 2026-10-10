import { useState, type CSSProperties } from "react";
import {
  LOCATION,
  MAP_DIRECTIONS_HREF,
  MAP_EMBED_SRC,
  MAP_LARGE_HREF,
  VISIT,
} from "@/data/content";
import {
  ArrowRight,
  ArrowUpRight,
  Img,
  SectionLabel,
  SplitHeading,
} from "@/components/ui";

/* ------------------------------------------------------------------
   Embedded studio map (Google Maps, keyless `output=embed`).
   Change the pin in LOCATION — src/data/content.ts.
------------------------------------------------------------------- */
function StudioMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      data-reveal="up"
      className="group relative overflow-hidden rounded-[26px] border border-forest/12 bg-sagesoft shadow-[0_40px_80px_-52px_rgba(36,61,45,0.6)]"
    >
      {/* Map frame ------------------------------------------------ */}
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]">
        {/* Botanical skeleton shown until the tiles arrive */}
        <div
          aria-hidden="true"
          className={[
            "absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(45deg,rgba(168,180,155,0.3)_0_14px,rgba(252,249,242,0.92)_14px_28px)] transition-opacity duration-700",
            loaded ? "pointer-events-none opacity-0" : "opacity-100",
          ].join(" ")}
        >
          <span className="label text-forest/50">Loading map…</span>
        </div>

        <iframe
          title={`Map showing ${LOCATION.placeLabel}, ${LOCATION.searchQuery}`}
          src={MAP_EMBED_SRC}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0 saturate-[0.88] transition-[filter] duration-700 group-hover:saturate-100 group-focus-within:saturate-100"
        />
      </div>

      {/* Floating studio card ------------------------------------ */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:inset-y-0 lg:right-auto lg:left-0 lg:flex lg:max-w-[22rem] lg:items-center lg:p-7">
        <div className="pointer-events-auto rounded-[20px] border border-forest/10 bg-cream/95 p-5 shadow-[0_26px_50px_-30px_rgba(36,61,45,0.7)] backdrop-blur-md sm:p-6">
          <span className="label block text-terracotta">You&apos;ll find us here</span>

          <p className="mt-3 font-display text-[1.3rem] leading-tight text-forest">
            {LOCATION.placeLabel}
          </p>

          <address className="mt-2 not-italic text-[0.9rem] leading-relaxed text-forest/65">
            Kadungganan, Brgy. Sagkahan
            <br />
            Tacloban City, Leyte 6500
          </address>

          <p className="mt-3 font-mono text-[0.72rem] tracking-wide text-forest/40">
            {LOCATION.lat.toFixed(5)}° N, {LOCATION.lng.toFixed(5)}° E
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={MAP_DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow link-underline text-earth transition-colors duration-500 hover:text-terracotta"
            >
              Get Directions
              <ArrowRight />
            </a>
            <a
              href={MAP_LARGE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[0.78rem] text-forest/50 hover:text-forest"
            >
              View larger map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-sagesoft py-24 md:py-32">
      <div className="shell">
        {/* Photo + practical information -------------------------- */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            data-reveal="mask"
            className="media aspect-[4/5] overflow-hidden rounded-[26px] rounded-br-[120px] sm:aspect-[4/3] lg:aspect-[5/6]"
          >
            <div className="h-full w-full">
              <Img
                photo={VISIT.photo}
                ratio={1.1}
                sizes="(max-width: 1024px) 92vw, 46vw"
                scale="0.06"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <SectionLabel>Visit Our Garden Studio</SectionLabel>
            <SplitHeading
              lines={["Come Find Your Little", "Piece of *Green*."]}
              delay={80}
              className="display-lg mt-7 text-forest"
            />

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div data-reveal="up" style={{ "--d": "120ms" } as CSSProperties}>
                <h3 className="label text-earth">Address</h3>
                <address className="mt-4 not-italic text-[0.95rem] leading-relaxed text-forest/75">
                  {VISIT.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div data-reveal="up" style={{ "--d": "220ms" } as CSSProperties}>
                <h3 className="label text-earth">Opening Hours</h3>
                <dl className="mt-4 space-y-2 text-[0.92rem] text-forest/75">
                  {VISIT.hours.map((h) => (
                    <div key={h.d} className="flex items-baseline justify-between gap-4">
                      <dt>{h.d}</dt>
                      <dd className="text-forest/55">{h.t}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div
                data-reveal="up"
                style={{ "--d": "320ms" } as CSSProperties}
                className="sm:col-span-2"
              >
                <h3 className="label text-earth">Contact</h3>
                <ul className="mt-4 space-y-2 text-[0.95rem] text-forest/75">
                  <li>
                    <a
                      href={`tel:${VISIT.phone.replace(/\s/g, "")}`}
                      className="link-underline hover:text-forest"
                    >
                      {VISIT.phone}
                    </a>
                    <span className="ml-2 text-[0.75rem] text-forest/45">
                      (placeholder number)
                    </span>
                  </li>
                  <li>
                    <a
                      href={`mailto:${VISIT.email}`}
                      className="link-underline hover:text-forest"
                    >
                      {VISIT.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              data-reveal="up"
              style={{ "--d": "420ms" } as CSSProperties}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                className="btn btn-primary"
                href={MAP_DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
                <ArrowRight />
              </a>
              <a className="btn btn-outline" href={`mailto:${VISIT.email}`}>
                Contact Us
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Live map ------------------------------------------------ */}
        <div className="mt-14 md:mt-20">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <SectionLabel>Find the Studio</SectionLabel>
            <p className="text-[0.82rem] text-forest/50">
              Sagkahan, Tacloban City — Leyte 6500
            </p>
          </div>

          <StudioMap />
        </div>
      </div>
    </section>
  );
}
