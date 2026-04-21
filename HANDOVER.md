# Puppy Style — Handover

_Scaffold completed: 2026-04-21 · Built with the Boomworks `new-website` skill._

---

## 1. Key URLs & paths

| What | Where |
|---|---|
| Local project | `~/Development/websites/puppy-style` |
| GitHub repo | https://github.com/lng-boomworks/puppy-style |
| Deployment URL (after Pages is enabled) | https://lng-boomworks.github.io/puppy-style/ |
| Primary domain | none (GitHub Pages project path) |
| Local dev | `cd ~/Development/websites/puppy-style && npm run dev` |
| Production build | `npm run build && npm run preview` |
| Research summary | `research/research_summary.md` |

## 2. Final step you need to do (I can't)

**Enable GitHub Pages:**
1. Open https://github.com/lng-boomworks/puppy-style/settings/pages
2. Under **Source**, choose **GitHub Actions**
3. The first deploy will run automatically on the next push. (`.github/workflows/deploy.yml` is already committed.)

## 3. What's in the box

- **Seven standard routes** — `/`, `/services`, `/about`, `/team`, `/gallery`, `/blog`, `/contact`
- **Design system** — coral/teal/cream/sunshine/plum palette; Fraunces + Nunito + Caveat fonts; CSS vars in `src/styles/global.css`
- **Base-path safety** — `base: /puppy-style` is live in `astro.config.mjs`; every internal `<a>`/`<img>` uses `withBase()` (confirmed by grepping the built `dist/`)
- **SEO** — per-page meta titles/descriptions, canonical URLs, Open Graph, sitemap, PetStore JSON-LD scoped to La Marina, ES
- **Branded nav/footer** — 7-route order, "Puppy Style" brand, "Book on WhatsApp" CTA, bilingual/fun/WhatsApp badges

## 4. Outstanding content tokens

Expected — these are the empty spots waiting for real copy. Regex to find them: `\{\{[A-Z0-9_]+\}\}`.

**Contact block** (`src/content/pages/contact.md`, `src/components/Footer.tsx`, `src/layouts/Base.astro`)
- `{{CONTACT_PHONE}}`, `{{CONTACT_EMAIL}}`, `{{WHATSAPP_URL}}`
- `{{ADDRESS_LINE_1}}`, `{{CITY}}`, `{{POSTCODE}}`
- `{{CONTACT_HERO_HEADING}}`, `{{CONTACT_HERO_SUBHEADING}}`

**Home hero & CTA** (`src/content/pages/home.md`)
- `{{HERO_HEADLINE}}`, `{{HERO_SUBTEXT}}`
- `{{PRIMARY_CTA_LABEL}}`, `{{PRIMARY_CTA_HREF}}`
- `{{FOUNDER_HEADING}}`, `{{FOUNDER_BIO}}`, `{{FOUNDER_QUOTE}}`
- `{{HOME_CTA_HEADING}}`, `{{HOME_CTA_TEXT}}`

**About / Services / Team / Gallery / Blog hero blocks** (their respective `src/content/pages/*.md`)
- `{{ABOUT_HERO_HEADING}}`, `{{ABOUT_HERO_SUBHEADING}}`
- `{{SERVICES_HERO_HEADING}}`, `{{SERVICES_HERO_SUBHEADING}}`
- `{{TEAM_HERO_HEADING}}`, `{{TEAM_INTRO}}`
- `{{GALLERY_HERO_HEADING}}`, `{{GALLERY_INTRO}}`
- `{{BLOG_HERO_HEADING}}`, `{{BLOG_INTRO}}`

**Team page** (`src/pages/team.astro`) — placeholder for 3 members
- `{{TEAM_MEMBER_{1..3}_NAME}}`, `{{TEAM_MEMBER_{1..3}_ROLE}}`, `{{TEAM_MEMBER_{1..3}_BIO}}`, `{{TEAM_MEMBER_{1..3}_PHOTO_ALT}}`
- `{{TEAM_CREDENTIALS_HEADING}}`, `{{TEAM_CREDENTIALS_BODY}}`
- `{{TEAM_CTA_HEADING}}`, `{{TEAM_CTA_TEXT}}`, `{{TEAM_CTA_LABEL}}`

**Gallery page** (`src/pages/gallery.astro`) — 8 grid images + 3 before/after
- `{{GALLERY_IMAGE_{1..8}_ALT}}`
- `{{BEFORE_AFTER_HEADING}}`
- `{{BEFORE_AFTER_{1..3}_BEFORE_ALT}}`, `{{BEFORE_AFTER_{1..3}_AFTER_ALT}}`, `{{BEFORE_AFTER_{1..3}_PUP_NAME}}`, `{{BEFORE_AFTER_{1..3}_NOTE}}`
- `{{GALLERY_CTA_HEADING}}`, `{{GALLERY_CTA_TEXT}}`, `{{GALLERY_CTA_LABEL}}`

**Blog page** (`src/pages/blog.astro`) — 3 placeholder posts
- `{{BLOG_POST_{1..3}_IMAGE_ALT}}`, `{{BLOG_POST_{1..3}_CATEGORY}}`, `{{BLOG_POST_{1..3}_TITLE}}`, `{{BLOG_POST_{1..3}_EXCERPT}}`, `{{BLOG_POST_{1..3}_DATE}}`
- `{{BLOG_CTA_HEADING}}`, `{{BLOG_CTA_TEXT}}`, `{{BLOG_CTA_LABEL}}`

**Footer** (`src/components/Footer.tsx`)
- `{{FOOTER_TAGLINE}}`

## 5. Heads-up: starter lorem ipsum still inside React components

The 4 React-driven pages (`HomePage`, `AboutPage`, `ServicesPage`, `ContactPage`) and some of their children render **hard-coded starter copy** that didn't get tokenised because the starter's content schema doesn't cover every string. These should be replaced during the content pass:

| File | What to replace |
|---|---|
| `src/components/Navbar.tsx` | Phone link `01234 567890` (+ "Lines open 9am-5pm" line) |
| `src/components/home/Services.tsx` | 4 cards: "Service One/Two/Three/Four" + generic descriptions — swap to Grooming / Daycare / Boutique / Add-ons |
| `src/components/home/FinalCTA.tsx` | "Call 01234 567890" |
| `src/components/home/HomeHero.tsx` | Trust pills ("Professional / Experienced / Trusted / Insured"), secondary "Contact us" button, "Free initial consultation" microcopy |
| `src/components/pages/AboutPage.tsx` | All starter "About" body copy + "Call 01234 567890" |
| `src/components/pages/ServicesPage.tsx` | 3× "Service One/Two/Three" cards with bullet lists + phone |
| `src/components/pages/ContactPage.tsx` | Default props `hello@example.com`, `01234 567890`, `Your Town, County, Postcode` (overridden via `contact.md` if you fill it in) |

**Recommended quick fix**: when you do the first content pass, convert these component strings into props driven from each page's markdown content collection — same pattern the existing `ContactPage` already uses for email/phone/address.

## 6. Known build warning

- `npm install` reported **1 high severity vulnerability**. Run `npm audit` to identify; run `npm audit fix` only after reading the diff (Astro deps turnover fast — may be a transitive only).

## 7. Next suggested actions

1. **Content pass** — fill the `{{TOKENS}}` in the seven `src/content/pages/*.md` files and replace the component lorem in the table above.
2. **Photography** — replace `public/images/placeholder.jpg` and `placeholder-team.jpg` with real salon / pup / team shots (the files are currently zero-byte placeholders).
3. **WhatsApp CTA wiring** — replace all `href="/contact"` primary CTAs with a live `https://wa.me/<country+number>` URL once you have it.
4. **Google Business Profile** — research turned up no GBP listing for Puppystyle. Opening one + linking it in the footer will compound SEO wins.
5. **Bilingual ES** — the research recommended EN/ES parity; the starter renders a single English locale. Phase 2 of work: add i18n (Astro's built-in `astro:i18n`) and mirror each page.
6. **FB review harvest** — research section 2 has blank verbatim-quote blocks waiting on 5–10 pasted FB snippets. Once you supply them, I can inline them on Home + About as a testimonial strip.
7. **Accessibility + performance pass** — Lighthouse once real content is in.
8. **OG image** — replace the default `public/images/og-default.jpg` (not present in this scaffold; add one sized 1200×630).
