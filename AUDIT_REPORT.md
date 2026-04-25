# DepoDart Website Audit — Benchmark vs. VRIFY

**Date:** 2026-04-24
**Site audited:** depodart.com (repo: `/Users/vlad/Desktop/Depodart/DepoDart.ai`, branch `main`)
**Benchmark:** vrify.com — B2B mining/geoscience SaaS (DORA prospectivity mapping + VRIFY Present)
**Auditor:** read-only competitive assessment; no code was modified.

> **One-line deployment note.** The task brief said the site is on Netlify, but `CLAUDE.md` and `package.json` show it is migrating from GitHub Pages to Cloudflare Pages (`pnpm deploy:cf`). This audit is deployment-agnostic.

---

## Section A — Score Card

| # | Category | Score /100 | Weight | Weighted |
|---|---|---:|---:|---:|
| 1 | Hero Section | **35** | 15% | 5.25 |
| 2 | Social Proof / Logo Bar | **0** | 10% | 0.00 |
| 3 | Product / Service Explanation | **40** | 15% | 6.00 |
| 4 | Process / How It Works | **25** | 10% | 2.50 |
| 5 | Stats / Numbers | **10** | 8% | 0.80 |
| 6 | Persona-Based Targeting | **0** | 8% | 0.00 |
| 7 | Visual Design & Brand Identity | **55** | 10% | 5.50 |
| 8 | Navigation & Information Architecture | **40** | 7% | 2.80 |
| 9 | CTAs & Conversion | **30** | 7% | 2.10 |
| 10 | SEO & Meta | **15** | 5% | 0.75 |
| 11 | Mobile Responsive | **70** | 5% | 3.50 |
| | **WEIGHTED TOTAL** | | | **29 / 100** |

### What 29 / 100 means

The site is **functional, not persuasive.** It ships a credible React + Vite stack with distinctive 3D globe visualizations and a cohesive dark-brown/orange/gold palette — a technical foundation ahead of many seed-stage peers. But as a commercial instrument, it under-performs on every dimension that B2B mining buyers use to decide whether to book a call: there is no headline value proposition, no client logos, no quantified proof, no persona-specific messaging, and no prominent "Book a Demo" CTA. A VP of Exploration landing on depodart.com today cannot tell in 10 seconds what product they are buying, who else uses it, or how to start. VRIFY answers all three before the fold. The fix is not design — the bones are good — it is **content architecture and conversion scaffolding**.

---

## Section B — Gap Analysis (categories scoring below 60)

### 1. Hero Section — 35 / 100 🔴

**Current state (depodart.com):**
- `src/pages/spa/1_Hero.jsx` renders the brand word "Depo" + "Dart" as the visual H1, with the subheadline `"AI-Powered Mineral Exploration"` (`src/constants/index.js` → `HERO_TEXT`).
- Below the subheadline, 8 capabilities cycle every 1.5s via a typewriter (`"AI-Powered Geological Mapping"`, `"Predictive Mineral Targeting"`, etc.).
- Visual: `GlobeComponentCanvas` (globe.gl sphere with particles) — this is strong.
- **No CTA button.** Only a scroll indicator.
- The logo tagline `"Where big data meets big discoveries"` lives in Navbar, not hero.

**VRIFY benchmark:**
- Headline: *"The Mining Industry's Only Exploration Intelligence Software"* (a positioning claim, 9 words).
- Sub: *"Our software empowers geoscience teams to get the most out of their data, maximize geological insight, and ensure no valuable information is left behind."*
- Primary CTA: **"Learn More"** → `/product`, plus a persistent **"Book a Demo"** in nav.
- Hero visual: laptop mock-up showing the DORA product UI.

**What to build:**
- Replace brand-word headline with a value-prop headline (≤12 words). See Section C for 3 drafts.
- Add a short sub (≤25 words) that says what DepoDart *does*, not what it *is*.
- Add **two CTAs**: primary `"Book a Demo"` (opens Calendly or scrolls to #contact) and secondary `"See the Platform"` (scrolls to How-It-Works).
- Keep the globe — it is the best asset on the page — but render a product-UI screenshot beside it on desktop so the visitor sees *what they are buying*, not just *that it's 3D*.
- Files: `src/pages/spa/1_Hero.jsx`, `src/constants/index.js`.

**Priority:** 🔴 Critical. This is the single highest-leverage change on the site.

---

### 2. Social Proof / Logo Bar — 0 / 100 🔴

**Current state:** Nothing. Search for "trusted by", `logos`, `testimonials` across the repo returns zero user-facing results.

**VRIFY benchmark:** A dark strip with 11 client logos (Equinox, Skeena, Southern Cross Gold, Bunker Hill, Newcore, Horizon Gold, RUA Gold, Cartier, Canterra Minerals, ValOre Metals, Algo Grande) + a stats block claiming *"185+ forward-thinking clients"*.

**What to build:**
- New section component `src/pages/spa/2_LogoBar.jsx`, inserted between Hero and About in `src/pages/spa/Sap.jsx`.
- New constants group `LOGO_BAR` in `src/constants/index.js` — array of `{ name, src }` entries. Ship with placeholder monochrome SVGs until real logos land.
- New `src/components/TestimonialCard.jsx` + `TESTIMONIALS` constant for a second, quote-based section lower on the page.

**Priority:** 🔴 Critical. The absence of any named client is the single biggest credibility signal missing. Even one named pilot (Hemlo Mining Corporation) + three "research partners" placeholder logos is a 10× improvement over zero.

---

### 3. Product / Service Explanation — 40 / 100 🔴

**Current state:**
- `src/pages/spa/2_About.jsx` renders a 4-card services grid driven by `services` in constants, titled "Overview".
- `src/pages/spa/4_Services.jsx` renders 2 projects ("Geochemical 2D maps", "3D orebody model" — one flagged as under development) under the heading `"Why DepoDart?"`.
- Copy has **four confirmed typos** in `src/constants/index.js`:
  - `"Asisted"` → "Assisted" (`experiences[0].title`)
  - `"Descovery"` → "Discovery" (`experiences[1].title`)
  - `"predicted predicted"` → "predicted" (`WORKS_TEXT.description`)
  - `"Createe"` → "Create" (`experiences[3].points[1]`)
- No product screenshots. The only product visuals are the 3D globes.

**VRIFY benchmark:** Two clear product cards (VRIFY Predict w/ DORA, VRIFY Present) under the eyebrow *"Software for Explorers"* and heading *"Our Products"*, each with a laptop screenshot, a 2-sentence description, and a CTA.

**What to build:**
- Fix the typos (atomic XS edit to `src/constants/index.js`).
- Consolidate the 4 "services" and 2 "projects" into **one Products section** with 2 cards (Predict and Explore, or whatever branding the team wants) — each with screenshot, 2-sentence description, CTA. The current 4-service + 2-project duplication is confusing to buyers.
- Source product UI screenshots. Even one real screenshot of a prospectivity map beats a generic stock globe for buyer intent.
- Files: merge/rework `src/pages/spa/2_About.jsx` + `src/pages/spa/4_Services.jsx` into a single "Products" section; retire or repurpose the other. Update `services` and `projects` arrays in constants.

**Priority:** 🔴 Critical (typos XS, product consolidation M).

---

### 4. Process / How It Works — 25 / 100 🔴

**Current state:** `src/pages/spa/3_Experience.jsx` is a `react-vertical-timeline-component` under the heading `"OUR SERVICES"`. Each timeline node lists a service offering (AI-assisted discovery, autonomous discovery, outsourcing, mine planning) with bullet points. This is **service-menu content presented as a process**, which confuses buyers — a timeline implies temporal flow.

**VRIFY benchmark:** A 4-step horizontal flow (Assemble Data → Enhance & Augment Inputs → Target & Plan → Present & Repeat), each step with a photo and a one-paragraph description. Clear WHO-DOES-WHAT at each step.

**What to build:**
- Rename and restructure `3_Experience.jsx` → `3_Process.jsx` (or keep filename, retitle in code).
- Replace the vertical timeline with a 4-step grid using existing project data:
  1. **Assemble** — intake geological, geophysical, geochemical data
  2. **Model** — AI fusion (autoencoders + semi-supervised learning at 50-m resolution)
  3. **Target** — 2D prospectivity maps identifying high-concentration zones
  4. **Deliver** — reports, 3D orebody models, API access
- Each step needs a visual: stock photo (drill core, field geologist, map UI, report) or original render.
- Remove the confusing `react-vertical-timeline-component` dependency if no other page uses it (search confirms only `3_Experience.jsx` uses it — safe to remove).

**Priority:** 🔴 Critical. This section is the single best place to demonstrate differentiation: *how you integrate multi-source data*.

---

### 5. Stats / Numbers — 10 / 100 🟡

**Current state:** Quantified claims exist in prose (`"one every four zones predicted predicted as mineralized is correct"`, `"50-meter resolution"`, `"200 to 1000 meters in diameter"`) but are buried in `WORKS_TEXT.description` and project descriptions. There is no dedicated stats component.

**VRIFY benchmark:** Three oversized serif numbers on a light band:
- *"9 Proprietary Data Fusion Models"*
- *"35+ industry-leading geoscience and AI experts"*
- *"185+ forward-thinking clients"*

**What to build:**
- New section component `src/pages/spa/_Stats.jsx` placed after How-It-Works.
- New `STATS` constant — array of `{ value, unit, label, caption }`.
- Typography uses a new large-display size (e.g., 80–120px) — add to `src/style/index.js`.
- Optional: count-up animation on scroll using Framer Motion's `useInView` + `useMotionValue`.

**Stats the team needs to verify** (see Section C for draft phrasing): datasets trained on, regions covered, accuracy in high-concentration zones, spatial resolution, models shipped, team geoscientists, team AI researchers, client pilots to date.

**Priority:** 🟡 Important. Depends on team providing real numbers; do not ship with fake ones.

---

### 6. Persona-Based Targeting — 0 / 100 🟡

**Current state:** Zero persona-oriented sections. The site speaks to one generic reader.

**VRIFY benchmark:** A "How we help" block with numbered persona cards — `[1] CEOs & Exploration Leaders`, `[2] Geologists` — each with a field photo, headline, and copy addressing that role's specific pain.

**What to build:**
- New section `src/pages/spa/_Personas.jsx` with 3 cards (the brief identifies 3 target buyers: VP Exploration, Chief Geologists, CEOs).
- New `PERSONAS` constant — array of `{ eyebrow, name, pain, outcome, cta, image }`.
- Optional: tabs-based UI instead of static cards (HeadlessUI `<Tab.Group>` — already installed).
- Section should anchor at `#who-we-help` to support future deep-links from email outreach.

**Priority:** 🟡 Important — highest ROI once the Phase 1 foundation is in place.

---

### 7. Visual Design & Brand Identity — 55 / 100 🟡

**Current state:**
- Palette is distinctive and coherent: `primary-dark #110A07`, `secondary-dark #D23B0C` (burnt orange), text accents `#FFC409` (gold). Light theme tokens exist but are unused on the landing page.
- `src/style/index.js` exposes named groups (`heroHeadText`, `sectionHeadText`, `sectionSubText`, `cardTitle`, `cardSubtitle`, `defaultSectionStyles`).
- `sectionSubText` acts as an eyebrow/label (uppercase, tracking-wider) — pattern is there, just under-used.
- **No serif font** — VRIFY uses a bold serif for hero headlines and numbers, creating an editorial "authoritative" feel. DepoDart is all sans-serif, which reads as "tech startup" not "mining-industry reference platform".
- **No dark/light section rhythm** — the whole landing page is dark. VRIFY alternates dark hero → light products → dark process, creating visual chapters.

**VRIFY benchmark:** Bold serif-ish headlines, monospaced uppercase eyebrows with "+++" dividers, dark/light section alternation, orange-dot section marker.

**What to build:**
- Add a serif display font for headlines (e.g., GT Sectra, Editorial New, or free alternative like Fraunces). Define a `heroDisplay` token in `src/style/index.js`.
- Add a `sectionLabel` utility with a leading accent dot (use `secondary-dark #D23B0C` — already the brand color).
- Introduce at least one light-background section (proposed: the Products section + Stats band).
- Files: `src/style/index.js`, `tailwind.config.js` (if custom font needs loading), `index.html` (font preload).

**Priority:** 🟡 Important (visible impact, but blocked by Phase 1 content work).

---

### 8. Navigation & IA — 40 / 100 🔴

**Current state:**
- `navLinks.main` in constants has **2 items**: `"Services"` → `/services/1/details`, `"Explore with us"` → `/contact`.
- No persistent primary CTA in the nav (no "Book a Demo", no "Sign In").
- Footer (`src/components/Footer.jsx`) has 4 groups with 1 link each: Technology, About, Resources (2 sub-links: Knowledge, FAQ), Contact.
- Mobile nav: hamburger (menu.svg / close.svg) with dropdown — works, but also has only 2 links.

**VRIFY benchmark:** Product (with submenu) | Resources | Solutions (with submenu: by Company Type, by Role) | Company (submenu) | Log In | Join Meeting | **Book a Demo** (persistent orange button).

**What to build:**
- Expand `navLinks.main` to 4 top-level items: **Product**, **Solutions** (persona router), **Resources**, **Company**. Each opens a mega-menu or submenu using HeadlessUI's `Menu`/`Popover` (already installed).
- Add a persistent `"Book a Demo"` button in `src/components/Navbar.jsx` (right-aligned, brand orange).
- Optionally add `"Customer Login"` even if it is currently a no-op placeholder — it signals "we have customers".
- Footer: fold Technology+About+Contact into a `Company` group; add `Solutions` group (persona links); add `Resources` (articles, FAQ, future blog); add `Legal` (privacy, terms, cookie) — currently missing.

**Priority:** 🔴 Critical for the Book-a-Demo button (Phase 1); 🟡 Important for the expanded IA (Phase 2).

---

### 9. CTAs & Conversion — 30 / 100 🔴

**Current state (inventory of every CTA on the site):**

| CTA text | Location | Type |
|---|---|---|
| `"Services"` | Navbar | Nav link |
| `"Explore with us"` | Navbar | Nav link (confusingly positioned as a CTA but styled as a link) |
| `"Learn More"` | Service cards (on hover only) | Link |
| `"Let's talk"` | Contact form submit | Form button |
| `"Learn More About Our Company"` | `/about` footer | Link to /contact |
| `"Learn More About Our Technology"` | `/technology/saige` footer | Link to /contact |
| `"Read More →"` | `/resources/knowledge` articles | External PDF link |
| `"Get In Touch"` | Footer | Link to /contact |

**Problems:**
- Hero has **zero CTAs**.
- No `"Book a Demo"` anywhere (highest-intent B2B action).
- `"Learn More"` hover-only on service cards = invisible on touch devices.
- `"Explore with us"` as a top-nav CTA is vague and undifferentiated from a nav link.
- Contact = form only. No calendar embed (Calendly, Cal.com), no direct-booking option.

**VRIFY benchmark:** Persistent `"Book a Demo"` in nav + `"Join Meeting"` in nav + `"Learn More"` in hero + `"Learn More"` under each product card. Multiple conversion paths for different intents.

**What to build:**
- Primary CTA `"Book a Demo"` in Navbar (persistent, brand orange) → opens Calendly-style modal or scrolls to calendar embed.
- Secondary CTA in Hero `"See the Platform"` → scrolls to How-It-Works.
- Per-section CTAs: `"See product details"` under each product card (visible, not hover-only); `"Meet the team"` in Personas; `"Read the research"` in Resources teaser.
- Final-CTA band just above footer: single full-width dark section, single headline, single CTA — see Section C for draft copy.
- Add Cal.com or Calendly embed (or a simple modal with a scheduling link). EmailJS form stays as a fallback but should not be the *only* conversion path.

**Priority:** 🔴 Critical.

---

### 10. SEO & Meta — 15 / 100 🔴

**Current state (`index.html`):**
- `<title>DepoDart</title>` — brand-only, zero keywords.
- **No meta description.**
- **No Open Graph tags** (og:title, og:description, og:image, og:url, og:type).
- **No Twitter card tags.**
- **No JSON-LD structured data.**
- Favicons are correctly set.
- Cloudflare Web Analytics is installed via env-injected token.
- **No `react-helmet-async`** (or similar) in `package.json` → per-route meta tags are impossible right now.
- `lang="en"` is present (good).

**Heading hierarchy problems:**
- Multiple `<h1>` tags on some pages (e.g., `src/pages/about/About.jsx:70`, `src/pages/contact/Contact.jsx:9`, `src/pages/technology/Technology.jsx:80`).
- Some pages skip levels (h1 → h3 without h2).

**Image alt text:**
- ~75% of `<img>` tags in `src/**/*.jsx` have empty or missing `alt`. Sampled: `ServicesPage.jsx`, `Team.jsx`, `4_Services.jsx`, `3_Experience.jsx` — all `alt=""`. `Navbar.jsx` is one of the few with meaningful alt.

**VRIFY benchmark:** Title + description + full OG set + structured data + per-page meta (they manage this server-side; SPA equivalent is react-helmet).

**What to build:**
- Phase 1 minimum: hand-write `<title>`, `<meta name="description">`, and the OG/Twitter set directly into `index.html`. This covers the landing page.
- Phase 2: install `react-helmet-async`, wrap `<App>` with `<HelmetProvider>`, add `<Helmet>` per page under `src/pages/**`.
- Phase 3: JSON-LD `Organization` + `SoftwareApplication` in `index.html`.
- Alt-text sweep: grep `<img` across `src/**/*.jsx`, add meaningful alt to each. A simple script can list the file:line offenders.
- Fix heading hierarchy: one `<h1>` per page, no skipped levels.

**Priority:** 🔴 Critical for the landing-page meta; 🟡 Important for helmet + JSON-LD.

---

### 11. Mobile Responsive — 70 / 100 🟢

**Current state:**
- 40+ uses of Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) across `src/**/*.jsx`.
- Custom `xs: 450px` breakpoint in `tailwind.config.js`.
- Globe hidden on mobile in `5_Contact.jsx` (responsive bandwidth-aware pattern — good).
- `heroHeadText`, `sectionHeadText` in `src/style/index.js` scale across `xs/sm/md/lg`.
- Mobile navbar uses hamburger + dropdown.

**Gaps:**
- Some canvas/overlay components (Loader, CanvasLoader, pieces of Terrain) do not declare responsive modifiers.
- No evidence of touch-friendly target sizing audit (min 44×44px) — some hover-only CTAs mean touch users can't reveal "Learn More" on service cards.

**Priority:** 🟢 Nice-to-have polish after foundation is in place.

---

## Section C — Content Inventory (with draft copy)

All draft copy is written in a **refreshed B2B SaaS voice** — shorter, more specific, outcome-led. Every string references the existing `src/constants/index.js` pattern so updates are single-file.

### C.1 Hero — draft

**Eyebrow (add to `HERO_TEXT` as `eyebrow`):**
> `AI-Powered Mineral Exploration`

**Headline options (pick one, ≤12 words):**
1. *"Turn geoscience data into drill-ready targets."* (7 words, action-led — recommended)
2. *"AI prospectivity mapping for junior and mid-tier miners."* (8 words, literal)
3. *"Every dataset you own, unified into one mineral system."* (9 words, integration-led)

**Sub (≤25 words):**
> *"DepoDart fuses geological, geophysical, and geochemical data into AI-driven prospectivity maps — so your exploration team drills where minerals actually are."*

**Primary CTA:** `"Book a Demo"` → opens booking modal / `/contact#book`
**Secondary CTA:** `"See the Platform"` → scrolls to `#how-it-works`

**Retire:** the cycling capabilities typewriter. It moves focus away from the CTA and adds cognitive load. Move those capabilities into the How-It-Works step descriptions.

---

### C.2 Logo Bar — draft

**Eyebrow:** `TRUSTED BY`

**Team to source (required):** at least 3 real logos. Priority order:
1. Hemlo Mining Corporation (engagement underway per project brief)
2. Any completed / ongoing client pilots
3. Research partners (universities, geological surveys)

**Placeholder strategy:** ship a monochrome SVG placeholder array of 6 boxes with team names in small caps (e.g., "HEMLO", "UNIVERSITY OF TORONTO", "GSC", "QUEEN'S GEOLOGY") until real logos arrive. Hide the section entirely if fewer than 3 logos are available.

**Constant:**
```js
export const LOGO_BAR = {
  eyebrow: "TRUSTED BY",
  logos: [
    { name: "Hemlo Mining Corporation", src: "/logos/hemlo.svg" },
    // ...
  ],
};
```

---

### C.3 Products / Services — draft

Replace the current 4-service grid + 2-project grid with **one consolidated Products section, 2 cards.**

**Eyebrow:** `THE PLATFORM`
**Heading:** *"Software built for exploration teams"*

**Card 1 — Prospectivity Maps (live product)**
- *Draft description:* *"Generate 2D prospectivity maps at 50-meter resolution across gold, cobalt, silver, and strategic minerals. One in four predicted high-concentration zones in Abitibi contains mineralization — vs. industry-standard drilling hit rates of roughly 1-in-10."*
- CTA: `"See a map →"` → `/services/1/details`

**Card 2 — 3D Orebody Models (in development — label as "Coming soon")**
- *Draft description:* *"Integrate drill-hole data, geological mapping, and geophysical surveys into spatially resolved orebody models. Understand grade distribution before you plan the next drill program."*
- CTA: `"Join the beta →"` → `/contact?interest=3d-model`

**Retire:** the current `services` array titled like consulting offerings (`"Potential Deposits Identification"`, `"Exploration Cost Reduction"`, `"Mineral Resource & Reserve Evaluation"`, `"Data Collection & Integration"`). These belong under How-It-Works or the Solutions/Personas section, not as "products".

---

### C.4 How It Works — draft

Replace `3_Experience.jsx` vertical timeline with a 4-step horizontal grid.

**Eyebrow:** `HOW DEPODART WORKS`
**Heading:** *"Four steps from data to drill target"*

| # | Step | 1-sentence description | Visual |
|---|---|---|---|
| 1 | **Assemble** | *"Upload or pull geological maps, geochemical sampling, and geophysical survey data — tabular, image, or text."* | Stack of map layers, data-pipe icon |
| 2 | **Model** | *"Our autoencoder + semi-supervised ensemble fuses dozens of mineral concentrations into a unified mineral system."* | Abstract neural-net or grid render |
| 3 | **Target** | *"Receive 2D prospectivity maps at 50-m resolution with predicted zones spanning 200–1000 m in diameter."* | Map screenshot with prediction overlay |
| 4 | **Deliver** | *"Export reports, 3D orebody models (beta), and API access so your geologists can act on predictions immediately."* | Report/deck or laptop mock |

New constant:
```js
export const HOW_IT_WORKS = {
  eyebrow: "HOW DEPODART WORKS",
  heading: "Four steps from data to drill target",
  steps: [ { title, description, image }, ... ],
};
```

**Images required:** 4 step images — can be stock photography (drilling, geologist in field, map, report) or ideally a screenshot of each actual product stage.

---

### C.5 Stats — draft (team must verify numbers)

**Eyebrow:** `BY THE NUMBERS`
**Heading:** *"Geoscience at resolution, at scale"*

Draft stat structure (team fills real numbers):

| Draft value | Label | Notes |
|---|---|---|
| **50 m** | resolution per prediction zone | ✅ sourced from `WORKS_TEXT.description` |
| **200–1000 m** | predicted deposit span | ✅ sourced from `WORKS_TEXT.description` |
| **1 in 4** | high-concentration predictions confirmed | ✅ sourced from Abitibi result (re-phrased from typo-ridden original) |
| **?** | datasets in training corpus | ⚠️ team to provide |
| **?** | regions / provinces covered | ⚠️ team to provide |
| **?** | concentration of minerals predicted simultaneously | ⚠️ team to provide (constants say "dozens") |
| **?** | client pilots to date | ⚠️ team to provide |

**Pick 3 stats for the homepage** (VRIFY uses 3). Suggested trio: **50 m / 1 in 4 / [client count]**.

---

### C.6 Persona blocks — draft

**Eyebrow:** `WHO WE HELP`
**Heading:** *"Built for the teams making capex decisions"*

**Persona 1 — CEOs & VPs of Exploration**
- *Pain:* *"You're under pressure to justify every drill meter to the board."*
- *Outcome:* *"DepoDart converts hundreds of historical datasets into a ranked target list — so the next drill program is defensible before it's funded."*
- CTA: `"For exploration leaders →"` → `/solutions/leaders`

**Persona 2 — Chief Geologists & Exploration Geologists**
- *Pain:* *"Integrating multi-source datasets is manual, slow, and error-prone."*
- *Outcome:* *"Our models ingest geological, geophysical, and geochemical layers at 50 m resolution — you review predictions, not preprocess CSVs."*
- CTA: `"For geologists →"` → `/solutions/geologists`

**Persona 3 — Investors & JV Partners**
- *Pain:* *"You need a credible, technical read on a junior's asset before you fund the next round."*
- *Outcome:* *"Share an interactive prospectivity map. Let the data do the diligence."*
- CTA: `"For investors →"` → `/solutions/investors`

**Images required:** one field / office photo per persona.

---

### C.7 Testimonials — draft prompts for the team

The team needs to send a 3-question request to the Hemlo engagement and any advisors/beta users. Prompts:

1. *"In one sentence, what problem did you hire DepoDart to solve?"*
2. *"What's one outcome you couldn't get from your existing tools?"*
3. *"Would you describe the work as research, engineering, or both — and why does that matter?"*

Ship the site with **one placeholder quote** from a founder / advisor if no client quote is available yet. Do not fabricate quotes.

Suggested placeholder quote (flag as FROM FOUNDER until replaced):
> *"We built DepoDart because running 20 spreadsheets against a single drill target isn't science — it's hope. We wanted geology teams to ship predictions, not reconcile file formats."* — [Founder name], DepoDart

---

### C.8 Resources teaser — draft

**Eyebrow:** `RESEARCH & INSIGHTS`
**Heading:** *"From our lab to your team"*

Surface the 3 existing PDFs from `src/pages/resources/Knowledge.jsx` on the homepage (currently they live only at `/resources/knowledge`):

1. *AI in Mineral Exploration* — AI & Industry — 5 min read
2. *Big Data, New Frontiers in Mineral Exploration* — AI & Industry — 8 min read
3. *New Technologies in Prospectivity Mapping* — Industry — 10 min read

CTA under the strip: `"Browse all resources →"` → `/resources/knowledge`.

---

### C.9 Final-CTA band — draft

Full-width dark section just above the footer.

**Headline:** *"Your next discovery is in your data. Let's find it."*
**Sub:** *"Book a 30-minute working session. Bring a deposit or region you're evaluating — we'll run it through DORA and share the prospectivity map live."*
*(Note: "DORA" is VRIFY's product name, not DepoDart's — rename this in final copy to DepoDart's model name, whatever the team calls it internally.)*
**CTA:** `"Book a Demo"` (primary brand color)

---

### C.10 Content-quality fixes (strict editorial)

**Typos to fix in `src/constants/index.js`:**

| Line content (approx) | Current | Fix |
|---|---|---|
| `experiences[0].title` | `"New Deposit Discovery Asisted by AI specialists..."` | `"...Assisted by..."` |
| `experiences[1].title` | `"Autonomous Solution for Deposit Descovery"` | `"...Discovery"` |
| `WORKS_TEXT.description` | `"one every four zones predicted predicted as mineralized"` | `"one in every four predicted zones"` (remove duplicate + awkward phrasing) |
| `experiences[3].points[1]` | `"Createe 3D orebody model"` | `"Create a 3D orebody model"` |

**Empty placeholder fields to fill or remove:**
- `ABOUT_TEXT.sectionSubText = ""` — add an eyebrow such as `"OVERVIEW"` or remove the empty prop.
- `EXPERIENCE_TEXT.sectionSubText = ""` — same treatment (TODO comment is present in code).

**Voice/tone editorial passes (non-typo):**
- `"Where big data meets big discoveries"` (Navbar tagline) — replace with positioning line tied to outcomes. Draft: *"AI prospectivity mapping for mineral explorers."*
- `WORKS_TEXT.description` — currently technical and dense. Splitting it into 2–3 separate stats (see C.5) reads better than one paragraph.

---

### C.11 Assets required (flag for team)

| Asset | Purpose | Priority | Notes |
|---|---|---|---|
| Product UI screenshot — prospectivity map | Hero + Product Card 1 | 🔴 | Highest-value asset on the site once shipped |
| Product UI screenshot — 3D orebody model | Product Card 2 | 🟡 | Fine to use a render / concept if product is pre-beta |
| 4 process-step images | How It Works | 🟡 | Stock OK; originals better |
| 3 client / partner logos (SVG, mono) | Logo bar | 🔴 | At least Hemlo + 2 others |
| 3 persona photos (field/office) | Personas section | 🟡 | Stock OK; diverse subjects |
| 1 team portrait | About page refresh | 🟢 | |
| OG image (1200×630) | Meta tags | 🔴 | Branded image with logo + tagline |

---

## Section D — Implementation Roadmap

Complexity scale: **XS** (<1h) · **S** (1–4h) · **M** (0.5–1.5 days) · **L** (2+ days)

### Phase 1 — Foundation · Week 1 · 🔴 Critical

Goal: site stops actively confusing buyers.

| # | Change | Files | Complexity | Draft content |
|---|---|---|---:|---|
| 1.1 | Fix 4 typos in constants | `src/constants/index.js` | XS | See C.10 table |
| 1.2 | Rewrite hero headline + sub + add 2 CTAs | `src/pages/spa/1_Hero.jsx`, `src/constants/index.js` (`HERO_TEXT`) | S | C.1 drafts |
| 1.3 | Add persistent "Book a Demo" button to Navbar | `src/components/Navbar.jsx`, `src/constants/index.js` (add `primaryCta`) | S | Button: `"Book a Demo"`, target `/contact#book` |
| 1.4 | New Logo Bar section between Hero and About | new `src/pages/spa/2_LogoBar.jsx`, `src/pages/spa/Sap.jsx` (wire up), `src/constants/index.js` (`LOGO_BAR`), `src/style/index.js` (optional `logoBarStyles`) | S | C.2 |
| 1.5 | Add meta description + full OG/Twitter tags | `index.html` | XS | Draft: `description="AI prospectivity mapping for mineral explorers. DepoDart fuses geological, geophysical, and geochemical data into drill-ready targets."`; `og:image` needs creation |
| 1.6 | Fix `services` vs. `projects` confusion — consolidate into single Products section | `src/pages/spa/2_About.jsx` (retire grid or rework as Products), `src/pages/spa/4_Services.jsx`, `src/constants/index.js` | M | C.3 |
| 1.7 | Add `"Book a Demo"` final-CTA band above footer | new `src/pages/spa/_FinalCta.jsx`, wire into `Sap.jsx` | S | C.9 |

**Exit criteria:** landing-page score moves from 29 → ~50. Buyer can answer "what is this, who uses it, how do I start" in <10 seconds.

---

### Phase 2 — Credibility · Week 2–3 · 🟡 Important

Goal: the site *proves* what it claims.

| # | Change | Files | Complexity | Draft content |
|---|---|---|---:|---|
| 2.1 | Rework Experience section → How It Works (4 steps) | `src/pages/spa/3_Experience.jsx` (rename to `3_Process.jsx`), `src/constants/index.js` (`HOW_IT_WORKS`), remove `react-vertical-timeline-component` from `package.json` if no other page uses it | M | C.4 |
| 2.2 | New Stats section | new `src/pages/spa/_Stats.jsx`, wire into `Sap.jsx`, `src/constants/index.js` (`STATS`), add large-display text token to `src/style/index.js` | S | C.5 — team fills numbers |
| 2.3 | Add Testimonials component (1 quote minimum) | new `src/components/TestimonialCard.jsx`, new `src/pages/spa/_Testimonials.jsx`, `src/constants/index.js` (`TESTIMONIALS`) | M | C.7 |
| 2.4 | Alt-text sweep on all `<img>` tags | `src/**/*.jsx` — audit every `<img>` | S | Use image context to describe: map screenshots, logos, team photos |
| 2.5 | Heading-hierarchy fix: one `<h1>` per page | `src/pages/about/About.jsx`, `src/pages/contact/Contact.jsx`, `src/pages/technology/Technology.jsx` | S | Demote extra `<h1>` to `<h2>` |
| 2.6 | Install `react-helmet-async`, add per-page meta | `package.json`, `src/App.jsx` (wrap in `HelmetProvider`), each page under `src/pages/**/*.jsx` | M | Per-page: title, description, og |
| 2.7 | Expand Navbar to 4 top-level items (Product, Solutions, Resources, Company) | `src/components/Navbar.jsx`, `src/constants/index.js` (`navLinks.main`) | M | Use `@headlessui/react` `Menu` / `Popover` — already installed |

**Exit criteria:** landing-page score moves from ~50 → ~70. Credibility deltas (logos, stats, quotes, process) address the social-proof vacuum.

---

### Phase 3 — Polish · Week 4 · 🟢 Nice

Goal: competitive with VRIFY on presentation quality.

| # | Change | Files | Complexity | Draft content |
|---|---|---|---:|---|
| 3.1 | Persona-based targeting section | new `src/pages/spa/_Personas.jsx`, `src/constants/index.js` (`PERSONAS`), optionally new routes `/solutions/leaders`, `/solutions/geologists`, `/solutions/investors` | L | C.6 |
| 3.2 | Resources teaser strip on homepage | new `src/pages/spa/_Resources.jsx`, wire into `Sap.jsx`, reuse `src/pages/resources/Knowledge.jsx` data source | S | C.8 |
| 3.3 | JSON-LD structured data (Organization + SoftwareApplication) | `index.html` | S | Standard JSON-LD blocks; use depodart.com canonical URL |
| 3.4 | Add section-label / eyebrow utility with accent dot | `src/style/index.js`, apply across all sections | S | `sectionLabel: "flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-secondary-dark"` + leading `<span className="w-1.5 h-1.5 rounded-full bg-secondary-dark"/>` |
| 3.5 | Serif display font for hero + stat headlines | `src/style/index.js`, `tailwind.config.js`, `index.html` (font preload) | S | Recommended: Fraunces (Google Fonts, free) or Editorial New (licensed) |
| 3.6 | Dark/light section rhythm | `src/style/index.js`, apply alternating `bg-primary-light` to Products + Stats sections | S | Improves visual chaptering |
| 3.7 | Micro-interactions: stat count-up, scroll reveals on step cards | `src/pages/spa/_Stats.jsx`, `src/pages/spa/3_Process.jsx` | S | Use `useInView` + `useMotionValue` from framer-motion |
| 3.8 | Accessibility sweep: aria-expanded on Navbar dropdown, aria-current on active nav link | `src/components/Navbar.jsx` | S | |
| 3.9 | Add Calendly / Cal.com embed to replace form-only conversion | `src/pages/contact/Contact.jsx` or new `src/components/BookingModal.jsx` | M | |

**Exit criteria:** landing-page score ~85. The remaining 15 points are content velocity (real case studies, more stats as the product matures) and video — not site work.

---

## Summary — what to start with Monday

If the team can only do **three things** before Friday, do these:

1. **Fix the 4 typos** in `src/constants/index.js`. (15 min, zero risk, immediate credibility win.)
2. **Rewrite the hero** — headline, sub, two CTAs including `"Book a Demo"` wired to a Calendly / contact-form anchor. (~3 hours for a junior engineer; higher-order impact than anything else on the list.)
3. **Add `<meta name="description">` and OG tags to `index.html`.** (30 min, affects every inbound link shared on LinkedIn / email / Slack.)

Those three changes alone will move the site out of the "unfinished" impression and into the "early but intentional" band, which is the minimum bar for a $235K conversation with Hemlo Mining Corporation.

— End of report —
