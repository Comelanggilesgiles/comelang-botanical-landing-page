import { useState, type CSSProperties, type FormEvent } from "react";
import { BRAND, FOOTER, VISIT } from "@/data/content";
import { scrollToId } from "@/lib/motion";
import { ArrowRight } from "@/components/ui";
import { cn } from "@/utils/cn";

type Status = { type: "idle" | "error" | "success"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = email.trim();

    if (!value) {
      setStatus({ type: "error", message: "Please enter an email address." });
      return;
    }
    if (!EMAIL_RE.test(value)) {
      setStatus({
        type: "error",
        message: "That email doesn't look right — check the format.",
      });
      return;
    }

    // No backend is connected: we validate only and say so plainly.
    setStatus({
      type: "success",
      message:
        "Email looks valid. This demo has no mailing list connected, so nothing was saved yet.",
    });
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6">
      <label htmlFor="newsletter-email" className="label block text-sage/70">
        Seasonal letter
      </label>

      <div className="mt-4 flex items-center gap-3">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="your@email.com"
          className="field text-ivory"
          value={email}
          aria-invalid={status.type === "error"}
          aria-describedby="newsletter-status"
          onChange={(e) => {
            setEmail(e.target.value);
            if (status.type !== "idle") setStatus({ type: "idle", message: "" });
          }}
        />
        <button
          type="submit"
          className="btn btn-terra shrink-0 px-5"
          aria-label="Subscribe to the seasonal letter"
        >
          Join
          <ArrowRight />
        </button>
      </div>

      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={cn(
          "mt-3 min-h-[1.25rem] text-[0.8rem]",
          status.type === "error" && "text-[#E6B07A]",
          status.type === "success" && "text-sage",
          status.type === "idle" && "text-ivory/40",
        )}
      >
        {status.message ||
          "One short note each season. No spam, unsubscribe anytime."}
      </p>
    </form>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-ivory">
      <div className="shell py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1.1fr] lg:gap-10">
          {/* Brand ------------------------------------------------- */}
          <div data-reveal="up">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("home");
              }}
              className="font-display text-[1.45rem] leading-none tracking-[-0.03em] text-ivory"
            >
              {BRAND.wordmark}
            </a>
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-ivory/55">
              {FOOTER.blurb}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.85rem] text-ivory/70 transition-colors duration-500 hover:text-terracotta"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore ----------------------------------------------- */}
          <nav data-reveal="up" style={{ "--d": "100ms" } as CSSProperties} aria-label="Footer">
            <h2 className="label text-sage/70">Explore</h2>
            <ul className="mt-5 space-y-2.5">
              {FOOTER.explore.map((l) => (
                <li key={l.label}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(l.id);
                    }}
                    className="link-underline text-[0.92rem] text-ivory/65 transition-colors duration-500 hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources --------------------------------------------- */}
          <nav data-reveal="up" style={{ "--d": "180ms" } as CSSProperties} aria-label="Gardening resources">
            <h2 className="label text-sage/70">Resources</h2>
            <ul className="mt-5 space-y-2.5">
              {FOOTER.resources.map((l) => (
                <li key={l.label}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(l.id);
                    }}
                    className="link-underline text-[0.92rem] text-ivory/65 transition-colors duration-500 hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + newsletter ---------------------------------- */}
          <div data-reveal="up" style={{ "--d": "260ms" } as CSSProperties}>
            <h2 className="label text-sage/70">Contact</h2>
            <ul className="mt-5 space-y-2 text-[0.92rem] text-ivory/65">
              <li>
                <a
                  href={`mailto:${VISIT.email}`}
                  className="link-underline hover:text-ivory"
                >
                  {VISIT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${VISIT.phone.replace(/\s/g, "")}`}
                  className="link-underline hover:text-ivory"
                >
                  {VISIT.phone}
                </a>
              </li>
              <li className="text-ivory/45">{VISIT.address[2]}</li>
            </ul>

            <Newsletter />
          </div>
        </div>

        {/* Oversized wordmark ------------------------------------- */}
        <div
          aria-hidden="true"
          data-reveal="fade"
          className="mt-16 select-none overflow-hidden border-t border-ivory/10 pt-10"
        >
          <span className="block whitespace-nowrap font-display text-[clamp(3rem,14vw,12rem)] leading-[0.82] tracking-[-0.05em] text-ivory/[0.07]">
            {BRAND.wordmark}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[0.78rem] text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {BRAND.name} {BRAND.tagline}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>Photography: Pexels — replace with brand imagery.</span>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("home");
              }}
              className="link-underline hover:text-ivory"
            >
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
