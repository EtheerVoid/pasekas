# greatest.local

A meme site for the group, built like a system. Each person is a `fastfetch` card.
Catppuccin Latte/Mocha (auto + toggle) · raw WebGL hero shader · GSAP scroll reveals · Astro.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ (you have Arch — `sudo pacman -S nodejs npm`).

```bash
npm install      # once
npm run dev      # → http://localhost:4321  (live reload)
npm run build    # → outputs static site to dist/
```

## Edit the content

**Everything is in one file: `src/data/members.ts`.**

- `SITE.name` / `SITE.tagline` → the big hero text.
- `MEMBERS[]` → one object per person:
  - `handle`, `host` → the `user@host` line.
  - `accent` → glow color: `mauve | blue | pink | peach | green | red`.
  - `sigil` → the ASCII logo (left of the card). Keep it ~4 lines.
  - `specs` → `[label, value]` pairs — the actual jokes.
  - `quote` → optional line for the scrolling joke wall.

No other file needs touching for content.

## Deploy on Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Save & Deploy. Every `git push` redeploys automatically.

## Add a 3D model later (v2)

The hero is a raw-WebGL shader on purpose (zero dependencies, tiny). When you want a
basement.studio-style 3D model too, add `three` and load it as a separate component
that only mounts when scrolled into view — so it never slows the first paint.

## Structure

```
src/
  data/members.ts        ← edit content here
  layouts/Layout.astro   ← <head>, fonts, no-flash theme init
  components/
    Hero.astro           ← WebGL2 shader (no libraries)
    Nav.astro            ← theme toggle
    FetchCard.astro      ← one member card
    Roster.astro         ← card grid + GSAP reveal
    QuoteWall.astro      ← CSS marquee of quotes
  pages/index.astro      ← page composition
  styles/global.css      ← catppuccin palettes + type scale
```
