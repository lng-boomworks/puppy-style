# Puppy Style — Outstanding Items

_Last updated: 2026-04-21. This is a living punch list; see `HANDOVER.md` for the full scaffold report and `research/research_summary.md` for research context._

---

## 0. Blocked on you

- [ ] **Enable GitHub Pages** — https://github.com/lng-boomworks/puppy-style/settings/pages → Source: **GitHub Actions**. Until flipped, the site won't deploy. Nothing else in this list changes that.
- [ ] **Opening hours** — `{{OPENING_HOURS}}` token lives in `src/components/Navbar.tsx` (2×). Supply them and I'll wire through.
- [ ] **FB review harvest** — paste 5–10 verbatim Facebook review snippets so `research/research_summary.md` §2 (Customer Insight) can be filled and a testimonial strip can go on Home + About.
- [ ] **Real photography** — `public/images/placeholder.jpg` and `placeholder-team.jpg` are zero-byte stand-ins. Need: hero shot, 3× team, 8× gallery, 3× before/after pairs, and a 1200×630 `og-default.jpg`.

---

## 1. Content tokens awaiting real copy

All live as `{{TOKEN_NAME}}` — grep regex: `\{\{[A-Z0-9_]+\}\}`.

### Home (`src/content/pages/home.md`)
- `{{HERO_HEADLINE}}` — research proposed _"The grooming salon your dog will drag you to."_
- `{{HERO_SUBTEXT}}` — proposed _"Grooming, daycare & treats in La Marina — cheerful humans, happy pups, wag-worthy results."_
- `{{PRIMARY_CTA_LABEL}}` / `{{PRIMARY_CTA_HREF}}` — proposed "Book on WhatsApp" → `https://wa.me/34650708896`
- `{{FOUNDER_HEADING}}` / `{{FOUNDER_BIO}}` / `{{FOUNDER_QUOTE}}`
- `{{HOME_CTA_HEADING}}` / `{{HOME_CTA_TEXT}}`

### Hero blocks across the other six pages
- `about.md` → `{{ABOUT_HERO_HEADING}}`, `{{ABOUT_HERO_SUBHEADING}}`
- `services.md` → `{{SERVICES_HERO_HEADING}}`, `{{SERVICES_HERO_SUBHEADING}}`
- `team.md` → `{{TEAM_HERO_HEADING}}`, `{{TEAM_INTRO}}`
- `gallery.md` → `{{GALLERY_HERO_HEADING}}`, `{{GALLERY_INTRO}}`
- `blog.md` → `{{BLOG_HERO_HEADING}}`, `{{BLOG_INTRO}}`
- `contact.md` → `{{CONTACT_HERO_HEADING}}`, `{{CONTACT_HERO_SUBHEADING}}`

### Team page (`src/pages/team.astro`) — 3 members
- `{{TEAM_MEMBER_{1..3}_NAME}}`, `{{..}_ROLE}}`, `{{..}_BIO}}`, `{{..}_PHOTO_ALT}}`
- `{{TEAM_CREDENTIALS_HEADING}}`, `{{TEAM_CREDENTIALS_BODY}}`
- `{{TEAM_CTA_HEADING}}`, `{{TEAM_CTA_TEXT}}`, `{{TEAM_CTA_LABEL}}`

### Gallery page (`src/pages/gallery.astro`)
- `{{GALLERY_IMAGE_{1..8}_ALT}}` (8 grid images)
- `{{BEFORE_AFTER_HEADING}}` + 3× `_BEFORE_ALT` / `_AFTER_ALT` / `_PUP_NAME` / `_NOTE`
- `{{GALLERY_CTA_HEADING}}`, `{{GALLERY_CTA_TEXT}}`, `{{GALLERY_CTA_LABEL}}`

### Blog page (`src/pages/blog.astro`) — 3 placeholder posts
- `{{BLOG_POST_{1..3}_IMAGE_ALT}}`, `{{..}_CATEGORY}}`, `{{..}_TITLE}}`, `{{..}_EXCERPT}}`, `{{..}_DATE}}`
- `{{BLOG_CTA_HEADING}}`, `{{BLOG_CTA_TEXT}}`, `{{BLOG_CTA_LABEL}}`

### Footer (`src/components/Footer.tsx`)
- `{{FOOTER_TAGLINE}}`

### Navbar (`src/components/Navbar.tsx`)
- `{{OPENING_HOURS}}` (2×)

---

## 2. Starter lorem still inside React components (bypasses content collection)

These strings are hard-coded — filling in the markdown won't replace them. Either swap the literal strings or convert them to props driven from the page's markdown (pattern already used by `ContactPage` for email/phone/address).

| File | What to fix |
|---|---|
| `src/components/home/Services.tsx` | 4 cards: "Service One/Two/Three/Four" → **Grooming / Daycare / Boutique / Add-ons**; intro "Services tailored to your needs" + blurb |
| `src/components/home/HomeHero.tsx` | Trust pills: "Professional · Experienced · Trusted · Insured" → **Bilingual EN/ES · Dog-led · 5★ on Facebook · WhatsApp bookings** (or similar); "Free initial consultation" microcopy; secondary "Contact us" button label |
| `src/components/pages/AboutPage.tsx` | All body copy (starter's "About us" narrative) |
| `src/components/pages/ServicesPage.tsx` | 3× "Service One/Two/Three" cards with 4-bullet lists; header "Not sure which service you need?" |
| `src/components/pages/ContactPage.tsx` | "Serving [Your Area]" line in the Location box; "Schedule a chat / Book a free call" labels (third contact card) — probably rename to "Book on WhatsApp" to match brand |

**Recommended refactor pattern for the content pass:** extend `src/content/pages/home.md` with structured fields (e.g. `services: [{title, desc, icon}]`), add matching props on `HomePage.tsx` / `Services.tsx`, pass through in `index.astro`. Same shape for `services.md` → `ServicesPage.tsx`.

---

## 3. Known-good decisions baked into this project

Read before making architectural changes.

- **Tailwind token names lie**. `teal-deep` renders coral, `sage` renders teal, `lavender` renders plum — names preserved to avoid refactoring every component class. See the comment at the top of `src/styles/global.css`. Rename pass is deferred; if you touch components, keep using the existing class names.
- **`base: /puppy-style`** is set in `astro.config.mjs`. Every internal `<a>` / `<img>` / `<link rel="icon">` must go through `withBase()` from `src/utils/url.ts`, or it will 404 on GitHub Pages. `<Button>` resolves internal hrefs automatically; raw `<a>`/`<link>`/`<img src="/...">` don't. Verify with: `grep -rhoE 'href="/[^"#?]*"' dist | sort -u` — every result should start with `/puppy-style/` or be external.
- **Content-collection pattern**. The 4 starter React pages (`HomePage`, `AboutPage`, `ServicesPage`, `ContactPage`) pull from `src/content/pages/*.md` via `getEntry()` and receive values as props. The 3 scaffolded Astro pages (`team.astro`, `gallery.astro`, `blog.astro`) render markup inline — their content collection entries exist but only supply SEO meta + hero copy today.
- **WhatsApp is the primary CTA**. `https://wa.me/34650708896`. Replacing that URL with a Calendly/form link would regress the research direction.

---

## 4. Next opportunities (from research summary)

1. **Google Business Profile** — none found in research. Open one + link from footer for compound SEO.
2. **Bilingual EN/ES** — Costa Blanca expat + local market expects it. Use Astro's built-in i18n (`astro:i18n`) to mirror every page.
3. **Service depth** — research recommends framing as three equal pillars (grooming · daycare · boutique), with transparent size-based pricing (S/M/L/XL). No local competitor does this.
4. **Accessibility + performance pass** — Lighthouse once real content lands.
5. **npm audit** — install reported 1 high severity. Run `npm audit` to identify before `npm audit fix`.

---

## 5. Session end-state (for future me)

- **Repo**: https://github.com/lng-boomworks/puppy-style · branch `main` at commit `cf59f55`
- **Last build**: green (7 pages, 0 base-path leaks, 0 old contact strings)
- **Contact**: wired — phone `+34 650 70 88 96`, email `puppystyle2019@gmail.com`, address `C/ Mediterráneo 8, C.C. Bahía de las Dunas, La Marina, 03177`, WhatsApp `https://wa.me/34650708896`
- **Deployed**: _not yet_ — Pages toggle still to be flipped by user
