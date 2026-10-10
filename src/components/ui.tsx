import type { CSSProperties, ReactNode } from "react";
import type { Photo } from "@/data/content";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------
   Responsive photo. Builds a Pexels srcSet at sensible widths so the
   browser never downloads more pixels than the layout needs.
------------------------------------------------------------------- */
const WIDTHS = [480, 760, 1100, 1600];

function url(photo: Photo, w: number, ratio: number) {
  const h = Math.round(w / ratio);
  const ext = photo.ext ?? "jpeg";
  return `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.${ext}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
}

export function Img({
  photo,
  ratio = 0.75,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  priority = false,
  style,
  parallax,
  scale,
}: {
  photo: Photo;
  /** width / height */
  ratio?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
  /** rAF parallax strength, e.g. "0.06" */
  parallax?: string;
  /** rAF scroll-scale amount, e.g. "0.1" */
  scale?: string;
}) {
  return (
    <img
      data-parallax={parallax}
      data-scale={scale}
      src={url(photo, 1100, ratio)}
      srcSet={WIDTHS.map((w) => `${url(photo, w, ratio)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={photo.alt}
      width={1100}
      height={Math.round(1100 / ratio)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fetchPriority={priority ? "high" : "auto"}
      className={cn("h-full w-full object-cover", className)}
      style={style}
    />
  );
}

/* ------------------------------------------------------------------
   Eyebrow label with an animated rule
------------------------------------------------------------------- */
export function SectionLabel({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      data-reveal="fade"
      className={cn(
        "label inline-flex items-center gap-3",
        tone === "dark" ? "text-earth" : "text-sage",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-px w-8 origin-left",
          tone === "dark" ? "bg-earth/50" : "bg-sage/50",
        )}
      />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   Headline that reveals word by word. `*word*` renders as an italic
   accent in earth brown.
------------------------------------------------------------------- */
export function SplitHeading({
  lines,
  as: Tag = "h2",
  className,
  delay = 0,
  step = 55,
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  step?: number;
}) {
  let i = 0;
  return (
    <Tag data-reveal="fade" className={cn("block", className)}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          <span key={li} className="block">
            {words.map((raw, wi) => {
              // `*word*` or `*word.*` or `*word*.` → italic accent
              const m = raw.match(/^\*(.+?)\*([.,!?;:]*)$/);
              const d = delay + i++ * step;
              return (
                <span key={wi} className="word-mask">
                  <span style={{ "--d": `${d}ms` } as CSSProperties}>
                    {m ? (
                      <>
                        <span className="accent-italic">{m[1]}</span>
                        {m[2]}
                      </>
                    ) : (
                      raw
                    )}
                  </span>
                  {wi < words.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}

/* ------------------------------------------------------------------
   Arrow glyphs
------------------------------------------------------------------- */
export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={cn("ico", className)}
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={cn("ico", className)}
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 11.5l7-7M5.5 4.5h6v6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Botanical icon set (leaf, sun, water, growth)
------------------------------------------------------------------- */
export function BotanicalIcon({
  name,
  className = "",
}: {
  name: "leaf" | "sun" | "drop" | "sprout";
  className?: string;
}) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className,
  };
  if (name === "leaf")
    return (
      <svg {...common}>
        <path d="M26 5C13 5 6 11 6 19a7 7 0 0 0 7 7c8 0 13-7 13-21Z" />
        <path d="M22 9C16 13 12 18 10 27" />
      </svg>
    );
  if (name === "sun")
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="6" />
        <path d="M16 3v3M16 26v3M3 16h3M26 16h3M7 7l2 2M23 23l2 2M25 7l-2 2M9 23l-2 2" />
      </svg>
    );
  if (name === "drop")
    return (
      <svg {...common}>
        <path d="M16 4s8 9 8 14a8 8 0 1 1-16 0c0-5 8-14 8-14Z" />
        <path d="M12 19a4 4 0 0 0 4 4" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M16 28V13" />
      <path d="M16 17c-6 0-9-3-9-9 6 0 9 3 9 9Z" />
      <path d="M16 15c0-5 3-8 9-8 0 5-3 8-9 8Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Decorative leaf used as ambient hero / section ornament
------------------------------------------------------------------- */
export function LeafOrnament({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 120 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 4C20 44 4 92 20 140c10 30 28 50 40 56 12-6 30-26 40-56C116 92 100 44 60 4Z"
        fill="currentColor"
        fillOpacity="0.17"
      />
      <path
        d="M60 10v180M60 60 26 92M60 60l34 32M60 104l-28 28M60 104l28 28"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
