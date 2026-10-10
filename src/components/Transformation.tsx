import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { TRANSFORMATION as T } from "@/data/content";
import { scrollToId } from "@/lib/motion";
import { ArrowRight, Img, SectionLabel, SplitHeading } from "@/components/ui";

export default function Transformation() {
  const [x, setX] = useState(52);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setX(Math.min(100, Math.max(0, Number(pct.toFixed(2)))));
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const stop = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setX((v) => Math.max(0, v - step));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setX((v) => Math.min(100, v + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setX(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setX(100);
    }
  };

  return (
    <section
      id="transformation"
      className="relative overflow-hidden bg-cream py-24 md:py-32"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <SectionLabel>Garden Transformation</SectionLabel>
            <SplitHeading
              lines={["From Empty Space", "to *Living* Sanctuary."]}
              delay={80}
              className="display-lg mt-7 text-forest"
            />
          </div>
          <p
            data-reveal="up"
            style={{ "--d": "180ms" } as CSSProperties}
            className="max-w-md text-[0.95rem] leading-relaxed text-forest/65"
          >
            Drag the handle, or focus it and use the arrow keys, to move between
            the original space and the finished garden.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          {/* Comparison slider ------------------------------------- */}
          <div data-reveal="up" className="relative">
            <div
              ref={wrapRef}
              className="compare aspect-[4/3] md:aspect-[16/10]"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={stop}
              onPointerCancel={stop}
            >
              {/* BEFORE (base layer) — replace with project photography */}
              <div className="absolute inset-0">
                <Img
                  photo={T.before}
                  ratio={1.6}
                  sizes="(max-width: 1024px) 92vw, 62vw"
                />
              </div>

              {/* AFTER (clipped layer) */}
              <div className="compare-after" style={{ "--x": `${x}%` } as CSSProperties}>
                <Img
                  photo={T.after}
                  ratio={1.6}
                  sizes="(max-width: 1024px) 92vw, 62vw"
                />
              </div>

              <span className="label pointer-events-none absolute left-4 top-4 rounded-full bg-forest/75 px-3 py-2 text-[0.58rem] text-ivory backdrop-blur-sm">
                After
              </span>
              <span className="label pointer-events-none absolute right-4 top-4 rounded-full bg-cream/85 px-3 py-2 text-[0.58rem] text-forest backdrop-blur-sm">
                Before
              </span>

              <div
                className="compare-handle pointer-events-none"
                style={{ "--x": `${x}%` } as CSSProperties}
              >
                <button
                  type="button"
                  className="compare-knob pointer-events-auto"
                  role="slider"
                  aria-label="Compare before and after the garden transformation"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(x)}
                  aria-valuetext={`${Math.round(x)}% finished garden visible`}
                  tabIndex={0}
                  onKeyDown={onKeyDown}
                >
                  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
                    <path
                      d="M8 2L3 7l5 5M14 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p className="mt-3 text-[0.78rem] text-forest/45">
              Image placeholders — swap <code>TRANSFORMATION.before</code> /{" "}
              <code>after</code> in <code>src/data/content.ts</code> with real
              project photography.
            </p>
          </div>

          {/* Project detail ---------------------------------------- */}
          <div className="lg:pb-10">
            <span data-reveal="fade" className="label block text-terracotta">
              Project
            </span>
            <h3
              data-reveal="up"
              style={{ "--d": "90ms" } as CSSProperties}
              className="display-md mt-4 text-forest"
            >
              {T.project}
            </h3>
            <p
              data-reveal="up"
              style={{ "--d": "170ms" } as CSSProperties}
              className="accent-italic mt-2"
            >
              {T.style}
            </p>
            <p
              data-reveal="up"
              style={{ "--d": "250ms" } as CSSProperties}
              className="lede mt-5 text-[0.97rem]"
            >
              {T.text}
            </p>

            <dl
              data-reveal="up"
              style={{ "--d": "330ms" } as CSSProperties}
              className="mt-8 grid grid-cols-3 gap-4 border-y border-forest/12 py-5"
            >
              {T.facts.map((f) => (
                <div key={f.k}>
                  <dt className="label text-[0.58rem] text-forest/45">{f.k}</dt>
                  <dd className="mt-2 font-display text-[1.25rem] leading-none text-forest">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>

            <button
              type="button"
              data-reveal="up"
              style={{ "--d": "410ms" } as CSSProperties}
              onClick={() => scrollToId("gardens")}
              className="btn btn-primary mt-8"
            >
              View the Project
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
