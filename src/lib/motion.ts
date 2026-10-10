/* ------------------------------------------------------------------
   motion.ts — lightweight scroll choreography
   - Intersection Observer reveals (no scroll handlers)
   - rAF-driven parallax / scroll scaling / progress bar
   - Animated counters
   Everything is a no-op when the user prefers reduced motion.
------------------------------------------------------------------- */

const REDUCE = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------- reveal on scroll */
let revealObserver: IntersectionObserver | null = null;

function ensureRevealObserver() {
  if (revealObserver) return revealObserver;
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  return revealObserver;
}

/** Register every (new) [data-reveal] node. Safe to call repeatedly. */
export function refreshReveals() {
  const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (REDUCE()) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }
  const io = ensureRevealObserver();
  nodes.forEach((n) => {
    if (n.dataset.revealBound === "1") return;
    n.dataset.revealBound = "1";
    // Already past? Reveal immediately so returning users never see gaps.
    const r = n.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
      n.classList.add("is-visible");
      return;
    }
    io.observe(n);
  });
}

/* ------------------------------------------------- counters */
function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count || "0");
  const duration = Number(el.dataset.duration || "1700");
  const prefix = el.dataset.prefix ?? "";
  const suffix = el.dataset.suffix ?? "";
  if (REDUCE()) {
    el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
    return;
  }
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${prefix}${Math.round(target * eased).toLocaleString()}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const nodes = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!nodes.length) return () => {};
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  nodes.forEach((n) => io.observe(n));
  return () => io.disconnect();
}

/* --------------------------- rAF loop: parallax, scale, progress */
function initRaf() {
  const progress = document.querySelector<HTMLElement>(".scroll-progress");
  const reduce = REDUCE();
  let ticking = false;
  let frame = 0;

  // Cache the animated nodes once — no DOM queries inside the frame loop.
  let parallaxNodes: HTMLElement[] = [];
  let scaleNodes: HTMLElement[] = [];
  const collect = () => {
    parallaxNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    scaleNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-scale]"));
  };
  collect();

  const read = () => {
    const vh = window.innerHeight || 1;

    if (progress) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - vh;
      progress.style.setProperty(
        "--p",
        String(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0),
      );
    }

    if (!reduce) {
      parallaxNodes.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -240 || r.top > vh + 240) return;
        const speed = parseFloat(el.dataset.parallax || "0.08");
        const centred = (r.top + r.height / 2 - vh / 2) / vh; // -1 → 1
        el.style.setProperty("--py", `${(-centred * speed * 100).toFixed(2)}px`);
      });

      scaleNodes.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -240 || r.top > vh + 240) return;
        const amount = parseFloat(el.dataset.scale || "0.08");
        const p = Math.min(1, Math.max(0, 1 - (r.top + r.height / 2) / (vh * 1.5)));
        el.style.setProperty("--sc", (1 + amount * p).toFixed(4));
      });
    }

    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    frame = requestAnimationFrame(read);
  };

  const onResize = () => {
    collect();
    onScroll();
  };

  read();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
  };
}

/* ------------------------------------------- active section spy */
function initSectionSpy(onChange: (id: string) => void) {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  if (!sections.length) return () => {};
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) onChange(visible.target.id);
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
  );
  sections.forEach((s) => io.observe(s));
  return () => io.disconnect();
}

/* ------------------------------------------------------- public */
export function initMotion(onSection?: (id: string) => void) {
  refreshReveals();
  const stopCounters = initCounters();
  const stopRaf = initRaf();
  const stopSpy = onSection ? initSectionSpy(onSection) : () => {};

  return () => {
    stopCounters();
    stopRaf();
    stopSpy();
    revealObserver?.disconnect();
    revealObserver = null;
    document
      .querySelectorAll<HTMLElement>("[data-reveal-bound]")
      .forEach((n) => delete n.dataset.revealBound);
  };
}

/** Smooth-scroll to a section id, accounting for the sticky header. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerH =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
    ) || 80;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH + 2;
  window.scrollTo({
    top,
    behavior: REDUCE() ? "auto" : "smooth",
  });
}
