import { useEffect, useRef, useState, type CSSProperties } from "react";
import { GARDEN_STYLES, type GardenStyle } from "@/data/content";
import { scrollToId } from "@/lib/motion";
import {
  ArrowRight,
  ArrowUpRight,
  Img,
  SectionLabel,
  SplitHeading,
} from "@/components/ui";
import { cn } from "@/utils/cn";

/* Asymmetric collage recipe: span + aspect per tile */
const LAYOUT = [
  { span: "md:col-span-7", ratio: "aspect-[4/5] md:aspect-[16/13]", r: 1.2 },
  { span: "md:col-span-5", ratio: "aspect-[4/5] md:aspect-[4/5]", r: 0.8 },
  { span: "md:col-span-4", ratio: "aspect-[4/5] md:aspect-[3/4]", r: 0.75 },
  { span: "md:col-span-4", ratio: "aspect-[4/5] md:aspect-[3/4] md:mt-12", r: 0.75 },
  { span: "md:col-span-4", ratio: "aspect-[4/5] md:aspect-[3/4] md:mt-24", r: 0.75 },
  { span: "md:col-span-12", ratio: "aspect-[4/5] md:aspect-[21/8] md:mt-6", r: 2.3 },
];

function GardenModal({
  style,
  onClose,
}: {
  style: GardenStyle;
  onClose: () => void;
}) {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sheetRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && sheetRef.current) {
        const focusables = sheetRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop grid place-items-center p-4 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="garden-modal-title"
        tabIndex={-1}
        className="modal-sheet grid max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[26px] bg-cream md:grid-cols-2"
      >
        <div className="media aspect-[4/3] md:aspect-auto md:h-full">
          <Img photo={style.photo} ratio={0.85} sizes="(max-width: 768px) 96vw, 44vw" />
        </div>

        <div className="relative p-7 md:p-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close garden style details"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-forest/15 text-forest transition-colors duration-400 hover:bg-forest hover:text-ivory"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <span className="label text-terracotta">Garden Style</span>
          <h3
            id="garden-modal-title"
            className="display-md mt-4 pr-10 text-forest"
          >
            {style.name}
          </h3>
          <p className="accent-italic mt-2">{style.summary}</p>
          <p className="lede mt-5 text-[0.98rem]">{style.detail}</p>

          <ul className="mt-6 space-y-2 border-t border-forest/12 pt-5">
            {style.notes.map((n) => (
              <li key={n} className="flex items-center gap-3 text-[0.92rem] text-forest/75">
                <span aria-hidden="true" className="text-terracotta">
                  ✻
                </span>
                {n}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                window.setTimeout(() => scrollToId("visit"), 120);
              }}
            >
              Enquire About This Style
              <ArrowRight />
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                onClose();
                window.setTimeout(() => scrollToId("transformation"), 120);
              }}
            >
              See a Transformation
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GardenArt() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const active = GARDEN_STYLES.find((g) => g.key === openKey) ?? null;
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setOpenKey(null);
    lastTrigger.current?.focus();
  };

  return (
    <section id="gardens" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionLabel>The Art of Garden Design</SectionLabel>
            <SplitHeading
              lines={["Designed by Nature.", "Refined by *Design*."]}
              delay={80}
              className="display-lg mt-7 text-forest"
            />
          </div>
          <p
            data-reveal="up"
            style={{ "--d": "200ms" } as CSSProperties}
            className="max-w-sm text-[0.95rem] leading-relaxed text-forest/65"
          >
            Six directions we return to again and again. Select any style to read
            how it is planted, built and kept.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-12 md:gap-6">
          {GARDEN_STYLES.map((style, i) => {
            const l = LAYOUT[i];
            return (
              <div
                key={style.key}
                data-reveal="up"
                style={{ "--d": `${(i % 3) * 120}ms` } as CSSProperties}
                className={cn(l.span)}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    setOpenKey(style.key);
                  }}
                  aria-haspopup="dialog"
                  className={cn("tile text-left", l.ratio)}
                >
                  <Img
                    photo={style.photo}
                    ratio={l.r}
                    sizes="(max-width: 768px) 92vw, 42vw"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 md:p-6">
                    <span className="block">
                      <span className="label block text-ivory/65">
                        {style.summary}
                      </span>
                      <span className="mt-2 block font-display text-[1.4rem] leading-tight text-ivory md:text-[1.7rem]">
                        {style.name}
                      </span>
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ivory/90 text-forest">
                      <ArrowUpRight />
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {active && <GardenModal style={active} onClose={close} />}
    </section>
  );
}
