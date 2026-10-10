# Comelang Botanical Landing Page

A premium, single-page landing site for a botanical studio and plant nursery, built with React, Vite and Tailwind CSS.

---

## Description

Comelang is a fully designed landing page for a garden studio and plant nursery. It shows how to build a polished, editorial-style website with React and Tailwind CSS v4, using a hand-written design system and scroll animations that need no animation library.

The page is responsive, keyboard accessible, respects "reduced motion" settings, and builds into one self-contained `index.html` file that is easy to host anywhere.

This project is also a learning reference: every piece of text, price and image lives in one data file, so you can re-brand the whole site by editing a single place.

---

## Screenshot

![Comelang landing page](/pic/plants.jpeg)

---

## Key Features

- Full-screen hero with an asymmetric layout and a scrolling marquee
- Thirteen page sections: hero, intro, featured plants, services, garden styles, benefits, before/after, guides, testimonials, visit, call to action and footer
- Draggable before/after comparison slider (mouse, touch and keyboard)
- Scroll animations: fade, mask reveal, parallax, animated counters and a progress bar
- Sticky header with a mobile menu and active-section highlighting
- Garden style detail modal with focus trapping and Escape to close
- Embedded keyless Google Map with directions buttons
- Newsletter form with client-side email validation (no backend connected)
- Accessibility: skip link, semantic landmarks, ARIA labels, visible focus rings, reduced-motion support
- Performance: lazy-loaded images, responsive `srcSet`, inline SVG icons, no animation or icon libraries
- Builds to a single `dist/index.html` file

---

## Tech Stack

| Tool | Purpose |
| --- | --- |
| React 19 | User interface |
| TypeScript | Type-safe code |
| Vite 7 | Dev server and build tool |
| Tailwind CSS 4 | Styling and design tokens |
| vite-plugin-singlefile | Bundles the build into one HTML file |
| clsx + tailwind-merge | Clean class name handling |
| Google Fonts (Fraunces, Inter) | Typography |
| Pexels | Royalty-free photography |

---

## Requirements

- Node.js version 20.19 or newer (download from https://nodejs.org, choose the LTS version)
- npm (installed together with Node.js)
- Git (optional, only needed to clone the project)
- An internet connection (images, fonts and the map load from the web)

Check your versions:

```bash
node -v
npm -v
```

---

## Install and Run (about 5 minutes)

**Step 1. Get the code**

```bash
git clone https://github.com/Comelanggilesgiles/comelang-botanical-landing-page.git
cd comelang-botanical-landing-page
```

If you do not use Git, download the ZIP from the green **Code** button on GitHub, unzip it, and open a terminal inside the folder.

**Step 2. Install dependencies**

```bash
npm install
```

**Step 3. Start the development server**

```bash
npm run dev
```

**Step 4. Open the site**

The terminal prints a local address, usually `http://localhost:5173`. Open it in your browser. Edits you save appear instantly.

---

## Usage

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |

After `npm run build`, the finished website is the single file `dist/index.html`. Upload that file to any static host (GitHub Pages, Netlify, Vercel or your own server).

---

## Customize It

1. **Name, tagline and currency**: edit `BRAND` in `src/data/content.ts`.
2. **Text, prices and images**: edit the other exports in `src/data/content.ts`. Photos are Pexels ids.
3. **Colors**: edit the `@theme` block in `src/index.css`.

   | Token | Value | Role |
   | --- | --- | --- |
   | `--color-forest` | `#243D2D` | Primary brand |
   | `--color-sage` | `#A8B49B` | Secondary accent |
   | `--color-sagesoft` | `#D9DDCC` | Hero background |
   | `--color-ivory` | `#F1E5D2` | Main background |
   | `--color-earth` | `#75513B` | Supporting text |
   | `--color-terracotta` | `#C98246` | Accent |
   | `--color-cream` | `#FCF9F2` | Content sections |

4. **Map location**: change `lat`, `lng` and `searchQuery` in the `LOCATION` object in `src/data/content.ts`. The embed and all direction links update automatically.

Replace these placeholders before going live:

- Before/after project photos (`TRANSFORMATION`)
- Sample testimonials (`TESTIMONIALS`), which are not real customers
- Phone number and email (`VISIT`)

---

## Project Structure

```text
.
|-- index.html                # Page shell, fonts, title, meta tags
|-- package.json              # Scripts and dependencies
|-- vite.config.ts            # Vite, React, Tailwind and single-file plugins
|-- tsconfig.json             # TypeScript settings
`-- src/
    |-- main.tsx              # App entry point
    |-- App.tsx               # Page composition and motion setup
    |-- index.css             # Tailwind import and design tokens
    |-- components/           # One file per page section, plus ui.tsx
    |-- data/content.ts       # All copy, prices, images and map location
    |-- lib/motion.ts         # Scroll reveals, parallax, counters, progress bar
    |-- styles/               # base.css, animations.css, components.css
    `-- utils/cn.ts           # Class name helper
```

---

## How It Works (for learners)

- **Data-driven content**: components read from `src/data/content.ts`, so changing text never means touching layout code.
- **Scroll animation without a library**: `src/lib/motion.ts` uses the browser's Intersection Observer to add a "visible" state to elements marked with `data-reveal`, and one passive, throttled scroll listener for parallax.
- **Design tokens**: Tailwind v4 reads colors, fonts and shadows from the `@theme` block, so one change updates the whole site.
- **Reduced motion**: a CSS media query turns off movement for visitors who ask their device for less animation.

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `npm: command not found` | Install Node.js from https://nodejs.org and reopen the terminal |
| Vite complains about the Node version | Upgrade to Node 20.19 or newer |
| Port 5173 already in use | Vite picks the next free port and prints it |
| Images or map do not appear | Check your internet connection |
| Blank page after build | Open `dist/index.html` from a web server (`npm run preview`) |

---

## Credits

- Photography from [Pexels](https://www.pexels.com) (royalty free). Replace with your own brand photos for production.
- Typefaces: Fraunces and Inter via Google Fonts.

## License

Add a license of your choice (for example MIT) before sharing publicly.
