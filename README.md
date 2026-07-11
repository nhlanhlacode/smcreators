# SM Creator Studio

A single-page marketing site for SM Creator Studio, built with React, Vite, and Tailwind CSS.

## Getting started in VS Code

1. Unzip this project and open the folder in VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## ⭐ Add the founder's photo (do this first)

The hero section is already wired up to show a photo next to the headline
— it just needs the image file:

1. Drop the photo into `public/images/founder.jpg` (portrait orientation,
   1000×1250px or larger looks best).
2. That's it — the site automatically swaps the placeholder monogram for
   the real photo. No code changes needed.

Until the file exists, visitors see a soft "sm" monogram in its place, so
the layout never looks broken.

## Project structure

```
src/
  App.jsx                 — composes the full page
  index.css                — Tailwind + base styles
  hooks/
    useReveal.js             — IntersectionObserver hook for scroll-reveal
  components/
    Reveal.jsx                — wraps content in fade/slide-in-on-scroll animation
    Navbar.jsx                 — sticky nav, scroll-aware, animated underline, mobile menu
    Hero.jsx                    — headline, founder photo, staggered entrance animation
    Marquee.jsx                  — infinite scrolling service ticker
    Founder.jsx                   — "Meet the founder" section
    Services.jsx                   — 8 service pillars, staggered reveal
    Process.jsx                     — "How it works" 3-step section
    Packages.jsx                     — 3-tier pricing cards, mouse-tilt hover
    FAQ.jsx                           — accordion
    Footer.jsx                         — contact form, email, Instagram
    Logo.jsx                            — "sm" wordmark
tailwind.config.js       — design tokens (color, type, spacing, animation)
```

## What's animated

- **Hero:** headline lines and CTA fade/slide in on load, in sequence; the
  founder photo gently floats and its accent glow slowly morphs shape.
- **Scroll reveals:** services, the founder section, the process steps, the
  package cards, and the FAQ all fade/slide into place as you scroll,
  staggered so groups of items don't all animate at once (`Reveal.jsx`).
- **Marquee:** an infinite-scrolling ticker of service keywords under the
  hero; pauses on hover.
- **Package cards:** tilt gently to follow the cursor, and the "Most
  chosen" badge has a soft pulsing ring.
- **Nav links:** underline draws in on hover; the bar itself goes solid
  once you scroll past the hero.
- All animation respects `prefers-reduced-motion` — anyone with that
  setting on sees content appear instantly, no motion.

## Design notes

- **Palette:** warm taupe (`taupe-700`) as the primary brand surface, a
  deep taupe (`taupe-800`) and near-black (`taupe-900`) for contrast
  sections, and a cream card surface for content that needs to pop against
  the taupe. A single brass accent (`brass`) carries all emphasis.
- **Type:** Playfair Display (italic serif) for headlines and the
  wordmark, Inter for everything else — mirrors the swash "sm" logotype.
- **Content:** copy is adapted from the package descriptions and services
  list provided, plus a founder introduction, a 3-step process, and an FAQ
  for clarity on which package fits which creator.

## Before going live

- Add the founder photo (see above) — this is the one manual step.
- Swap the `mailto:` contact form for a real form handler (e.g. Formspree,
  Resend, or a small serverless function) if you want submissions
  delivered without opening the visitor's email client.
- Update the Instagram link if the handle changes.
