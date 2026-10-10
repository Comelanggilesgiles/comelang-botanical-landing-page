import { useEffect, useRef, useState, type CSSProperties } from "react";
import { BRAND, NAV } from "@/data/content";
import { scrollToId } from "@/lib/motion";
import { ArrowUpRight } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function Header({ active }: { active: string }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  /* Sticky state without a scroll listener — a sentinel at the very top */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Lock the page + close on Escape while the mobile panel is open */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // let the panel start closing before the scroll begins
    window.setTimeout(() => scrollToId(id), open ? 180 : 0);
  };

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 h-6 w-full"
      />

      <header className={cn("site-header", stuck && "is-stuck")}>
        <div className="shell flex items-center justify-between gap-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="group relative z-[110] font-display text-[1.32rem] leading-none tracking-[-0.03em] text-forest"
          >
            {BRAND.wordmark}
            <span className="sr-only"> — home</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                    className={cn("nav-link", active === item.id && "is-active")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#visit"
              onClick={(e) => {
                e.preventDefault();
                go("visit");
              }}
              className="btn btn-primary hidden sm:inline-flex"
            >
              Let's Grow Together
              <ArrowUpRight />
            </a>

            <button
              ref={burgerRef}
              type="button"
              className="burger relative z-[110] grid h-11 w-11 place-items-center rounded-full border border-forest/15 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile panel --------------------------------------------------- */}
      <div
        id="mobile-nav"
        className={cn("mobile-panel lg:hidden", open && "is-open")}
        inert={!open}
      >
        <div className="shell flex h-full flex-col justify-between pt-28 pb-10">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map((item, i) => (
                <li key={item.label} style={{ "--d": `${120 + i * 70}ms` } as CSSProperties}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                    className="flex items-baseline gap-4 border-b border-forest/10 py-4 font-display text-[2rem] leading-none tracking-[-0.03em] text-forest"
                  >
                    <span className="label text-[0.6rem] text-earth/70">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="space-y-5"
            style={{ "--d": "520ms" } as CSSProperties}
          >
            <a
              href="#visit"
              onClick={(e) => {
                e.preventDefault();
                go("visit");
              }}
              className="btn btn-primary w-full justify-center"
            >
              Let's Grow Together
              <ArrowUpRight />
            </a>
            <p className="text-sm text-forest/60">
              {BRAND.name} {BRAND.tagline} — Quezon City
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
