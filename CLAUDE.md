# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`). Scripts also work with npm.

- `pnpm dev` — start Vite dev server on port 3000 (host exposed)
- `pnpm build` — production build to `dist/`
- `pnpm preview` — serve the built `dist/` locally
- `pnpm lint` — ESLint over `src/**/*.{js,jsx}`, fails on any warning (`--max-warnings 0`)
- `pnpm deploy` — legacy GitHub Pages deploy (`gh-pages -d dist`, runs `build` via `predeploy`)
- `pnpm deploy:cf` — Cloudflare Pages deploy via Wrangler (`wrangler pages deploy dist --project-name=depodart --branch=main`)

There is no test runner configured.

## Architecture

Single-page marketing/product site for depodart.com. Stack: **React 18 + Vite 6 + React Router 7 + Tailwind + Framer Motion + react-three-fiber + globe.gl**.

### Routing and page composition

`src/App.jsx` is the router root. Every page and the Navbar/Footer are `React.lazy`-imported and wrapped in a single top-level `<Suspense fallback={<Loader />}>`. When adding a route, keep it lazy to preserve first-paint budget — the bundle is heavy due to three.js / globe.gl.

The landing route `/` renders `src/pages/spa/Sap.jsx`, which is itself a composition of numbered section components (`1_Hero`, `2_About`, `3_Experience`, `4_Services`, `5_Contact`, `6_Contacts`) — each also lazy-loaded inside its own nested `Suspense`. Other routes (`/services/:id/details`, `/technology/saige`, `/about`, `/resources/*`, `/contact`) are full pages under `src/pages/`. Several routes in `App.jsx` are currently commented out (careers, use-cases, team) — don't reintroduce them without checking whether the underlying pages still exist.

### Section wrapper HOC

`src/hoc/SectionWrapper.jsx` (exported as `SectionWrapper`) wraps a component in a `motion.section` with `staggerContainer` variants and applies `defaultSectionStyles.padding` + `sectionStyles.section`. Most SPA sections are exported via this HOC so they share scroll-reveal animation and an anchor `id`. Reuse it for any new full-width section rather than rebuilding motion/padding inline.

### Styling system

All class-name composition lives in `src/style/index.js`. It exports a `themes` object (dark/light color tokens) plus grouped style objects like `appStyles`, `sectionStyles`, `defaultSectionStyles`, etc., built with `classnames`. Components import these groups instead of hardcoding Tailwind strings. When adjusting visual tokens, edit `src/style/index.js` — don't sprinkle Tailwind constants in components. `tailwind.config.js` extends the theme and scans `index.html` + `src/**/*.{js,jsx,ts,tsx}`.

### Constants and content

`src/constants/index.js` is the content catalog — nav links, services, experience timeline, FAQ, etc. — imported by section components. Edit copy/content here rather than in the JSX.

### 3D / canvas

`src/components/canvas/` holds react-three-fiber and globe.gl components (`Stars`, `GlobeComponent`, `GlobeElevatedPolygons`) plus a shared `CanvasLoader`. `src/pages/terrain/` and `src/components/Terrain/` use `three-geo`. These are the expensive bits — keep them lazy and behind `Suspense` with `CanvasLoader` as fallback.

### Motion utilities

`src/utils/motion.js` exports the Framer Motion variant factories (`staggerContainer`, etc.) used by `SectionWrapper` and section components. Use these instead of inlining variants to keep motion consistent.

### Assets and public files

- `src/assets/` — imported through `src/assets/index.js` barrel; images referenced from `constants/index.js`.
- `public/` — static passthrough (favicon, robots, etc.).
- `CNAME` at repo root pins the GitHub Pages custom domain (`depodart.com`).

### Deployment

The site is migrating from GitHub Pages to Cloudflare Pages. `deploy` (gh-pages) is the legacy path; `deploy:cf` is the current target. `homepage` in `package.json` and `base: "/"` in `vite.config.js` assume the site is served at the domain root — don't change `base` without updating both.
