# SEO & Content Plan — Prachi Construction Projects (Textile / Industrial Repositioning)

**Status: IMPLEMENTED FOR THIS SCOPE (2026-11-24).** Homepage (`index.html`), the eight new service pages and the four existing pages (`services.html`, `projects.html`, `about.html`, `contact.html`) now carry textile/industrial copy. Real project entries, testimonials, numbers and owner confirmations remain open in section D and `TODO-OWNER.md`.

**Base URL:** `https://prachiconstructionprojects.github.io/` (taken from the existing canonical tags).

## Ground rules applied

- No invented facts. Anything not supplied by the owner is marked `[CONFIRM WITH OWNER: ...]` and listed in `TODO-OWNER.md`.
- Keep the existing design, colours, fonts and layout; reuse existing CSS classes and components. No new CSS/JS was added for the new pages.
- Plain HTML/CSS/JS only. No framework, no build step.
- Every page has: a unique `<title>` under 60 chars, a unique meta description under 160 chars, a canonical URL, exactly one `<h1>`, logical `<h2>/<h3>`, Open Graph + Twitter tags, JSON-LD, descriptive image alt text, and the same header/footer/sticky bar/scripts as `services.html`.
- Phone `+91 76004 90851`, email, address, WhatsApp links and the WhatsApp-based forms stay exactly as they are.
- Content is written for real customers (factory owners, textile unit owners, machine owners in Surat), in simple professional English. No keyword stuffing, no duplicated copy between pages.
- New page status: 7 spoke pages are ~800–1000 words each; the pillar page is ~1500 words. Real project photos/details are still required before launch.

---

## (A) Final page list

### Implemented in this repo

| # | File | Action | Target keyword (primary) | Title (chars) | Meta desc (chars) | H1 |
|---|------|--------|--------------------------|---------------|-------------------|----|
| 1 | `index.html` | Updated | textile construction company in Surat | `Textile & Industrial Construction Company in Surat \| Prachi` (59) | 155 | Textile & Industrial Construction Company in Surat — Built for Production |
| 2 | `textile-construction-company-surat.html` | Created — PILLAR | textile construction company in Surat | `Textile Construction Company in Surat \| Prachi` (46) | 149 | Textile Construction Company in Surat for Working Factories |
| 3 | `textile-gala-unit-construction-surat.html` | Created | textile gala construction Surat | `Textile Gala Unit Construction in Surat \| Prachi` (48) | 154 | Textile Gala Unit Construction in Surat |
| 4 | `airjet-loom-shed-construction-surat.html` | Created | airjet loom shed construction Surat | `Airjet Loom Shed Construction in Surat \| Prachi` (47) | 150 | Airjet Loom Shed Construction in Surat |
| 5 | `waterjet-loom-shed-construction-surat.html` | Created | waterjet loom shed construction Surat | `Waterjet Loom Shed Construction in Surat \| Prachi` (49) | 150 | Waterjet Loom Shed Construction in Surat |
| 6 | `loom-machine-foundation-construction-surat.html` | Created | loom machine foundation Surat | `Loom Machine Foundation in Surat \| Prachi` (41) | 159 | Loom Machine Foundation Construction in Surat |
| 7 | `textile-processing-house-construction-surat.html` | Created | textile processing house construction Surat | `Textile Processing House Construction in Surat \| Prachi` (55) | 149 | Textile Processing House Construction in Surat |
| 8 | `industrial-shed-pre-engineered-building-surat.html` | Created | industrial shed construction Surat; PEB Surat | `Industrial Shed & PEB Construction in Surat \| Prachi` (52) | 143 | Industrial Shed and PEB Construction in Surat |
| 9 | `textile-construction-cost-surat.html` | Created | textile construction cost Surat | `Textile Construction Cost in Surat: Guide \| Prachi` (50) | 158 | Textile Construction Cost in Surat: What Affects It |

**Retired planning filenames:** `textile-construction-surat.html`, `textile-gala-construction-surat.html`, `textile-factory-construction-surat.html`, `loom-shed-construction-surat.html`, `loom-machine-foundation-surat.html`, `industrial-shed-construction-surat.html`, `textile-processing-unit-civil-work-surat.html`. All links in `index.html` now point to the implemented files above. The separate factory-building intent is covered by the pillar page and the PEB page; airjet and waterjet loom sheds now have separate pages.

### Updated in this pass

| # | File | Title | H1 | Notes |
|---|------|-------|----|-------|
| 1 | `about.html` | About Textile & Industrial Construction in Surat \| Prachi | About Prachi — Textile & Industrial Construction in Surat | Story, vision, mission, values, inventory, workflow and footer rewritten around textile/industrial work. "Licensed & Insured" removed; other unverified claims flagged. |
| 2 | `services.html` | Industrial & Textile Construction Services in Surat \| Prachi | Industrial & Textile Construction Services in Surat | New "Textile & Industrial Construction" card group links to all eight new service pages; 16 service cards and JSON-LD updated. |
| 3 | `projects.html` | Textile & Industrial Projects in Surat \| Prachi | Textile & Industrial Construction Projects in Surat | Industrial and Textile filters added; all nine sample entries flagged in HTML. No new projects invented. |
| 4 | `contact.html` | Contact Textile & Industrial Construction Company in Surat | Contact Textile & Industrial Construction Company in Surat | Project type dropdown added and included in the WhatsApp message; FAQ and JSON-LD updated. Contact details unchanged. |

### Purpose and content scope

- **`index.html`** — broad "construction company in Surat" entry point; hero, stats, textile service cards, why-us, areas and FAQs now lead with textile/industrial work.
- **`textile-construction-company-surat.html` (pillar)** — full range: gala units, airjet/waterjet sheds, foundations, processing houses, PEB sheds and cost planning. Links to all seven spokes. This is the page to cite in AI answers.
- **`textile-gala-unit-construction-surat.html`** — gala layout, column grid, clear height, light, ventilation, row spacing, floor flatness, loading, drainage and expansion.
- **`airjet-loom-shed-construction-surat.html`** — clean environment, compressed-air planning, level floors, ventilation, power and orderly machine rows.
- **`waterjet-loom-shed-construction-surat.html`** — water supply, floor falls, drainage, wet/dry separation and corrosion-aware detailing.
- **`loom-machine-foundation-construction-surat.html`** — foundations for airjet, waterjet, rapier, circular knitting and embroidery machines; drawings, anchors, grout, levels and vibration checks.
- **`textile-processing-house-construction-surat.html`** — dyeing, printing and finishing areas; water routes, drainage and ETP-related civil work only.
- **`industrial-shed-pre-engineered-building-surat.html`** — PEB vs RCC, warehouses/godowns, clear span, loading, truck access and fire-safety coordination.
- **`textile-construction-cost-surat.html`** — cost drivers and quote-comparison guide; no rates or figures until the owner confirms them.

---

## (B) Internal linking plan

**Global on the new pages:** header, footer, enquiry modal, sticky mobile action bar and scripts are copied exactly from `services.html`. The new pages' footer remains the five-link services footer; `index.html` has the expanded textile footer.

**Pillar and spokes:**
- Pillar → all seven spokes with varied anchor text.
- Every spoke → pillar (breadcrumb + in-body link), two or three related spokes, `projects.html` and `contact.html`.
- Suggested sibling links: gala ↔ airjet ↔ waterjet; airjet/waterjet ↔ foundation; waterjet ↔ processing house; gala/foundation ↔ PEB; every spoke → cost guide.
- `index.html`: seven service cards point to spokes and the "Explore Textile Construction" button points to the pillar.

**Completed on existing pages in this pass:**
- `about.html`: story and working-flow sections now link to the pillar and `projects.html`.
- `services.html`: textile/industrial block links to the pillar and all seven spokes with page-specific copy.
- `projects.html`: Industrial and Textile filters added; invented project cards remain flagged until owner-confirmed work is supplied.
- `contact.html`: intro FAQ answer links to the pillar; project type dropdown feeds the WhatsApp message.

**Breadcrumbs:** new pages use Home → Services → [Page], matching both the visible breadcrumb and BreadcrumbList JSON-LD. Existing pages keep Home → [Page].

**Anchor text:** vary it; do not repeat the exact-match keyword on every link. Avoid linking to project-detail pages until real projects exist.

**Discovery:** all eight new URLs and the updated homepage are in `sitemap.xml` with `lastmod` `2026-11-19`. `robots.txt` still points at the sitemap; verify the deployed sitemap URL after publishing.

---

## (C) Schema (JSON-LD) plan and implemented state

**Shared entity on every new page:** `GeneralContractor`, `@id: https://prachiconstructionprojects.github.io/#organization`, with the updated textile/industrial description, expanded `areaServed`, `sameAs` social links, `hasMap`, `contactPoint`, and no `priceRange`. Geo coordinates are still `[CONFIRM WITH OWNER: correct office latitude/longitude]` in `TODO-OWNER.md`.

**Per new page:** `WebPage` with unique `@id`, `isPartOf: { "@id": .../#website }`, `about: { "@id": .../#organization }`, `BreadcrumbList`, one `Service` node with `provider` linked to the GeneralContractor `@id`, and one `FAQPage`. Visible FAQ text matches JSON-LD exactly (verified 4–5 FAQs per page).

**Homepage:** `GeneralContractor` + `WebSite` + `WebPage` + `BreadcrumbList` + `FAQPage` with 10 textile FAQs, synced with visible copy; no ratings/reviews/price claims.

**Rules:** one fact, one place. NAP and hours identical in visible footer and JSON-LD on every page. Visible FAQ content must exist on the page if `FAQPage` markup is used. No `aggregateRating`/`Review`/`Offer` with prices or testimonials until real, verifiable data is supplied.

---

## (D) Issues still open on the rest of the site

- **D1 — RESOLVED** — All four existing page titles are now unique and within 60 chars.
- **D2 — OPEN, SAMPLES EXPLICITLY FLAGGED** — All nine existing project entries on `index.html` and `projects.html` are sample/placeholder entries, not owner-confirmed work. Do not present them as real projects. On `projects.html` every card now carries an HTML comment and a visible `[CONFIRM WITH OWNER: replace with real project]` marker. Replace with owner-confirmed work before launch.

  | # | Sample / placeholder entry | Current category | Status |
  |---|----------------------------|------------------|--------|
  | 1 | Skyline Residence | Residential | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 2 | Meridian Business Tower | Commercial | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 3 | Vertex Industrial Park | Industrial | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 4 | Green Valley Villas | Residential | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 5 | MediCore Hospital Wing | Commercial | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 6 | SteelCraft Warehouse | Industrial | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 7 | Riverbend Township Phase I | Residential | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 8 | NovaTech IT Park | Commercial | SAMPLE / PLACEHOLDER — not owner-confirmed |
  | 9 | Kheda Pharma Facility | Industrial | SAMPLE / PLACEHOLDER — not owner-confirmed |

  The `Industrial` filter matches the three existing sample industrial cards; the new `Textile` filter has no cards until real textile projects are supplied and approved.
- **D3** — Duplicated five-star testimonials on `about.html` and `projects.html`; verify or remove. Check ownership of the external Netlify "Review" button.
- **D4 — RESOLVED** — "Licensed & Insured" removed from `about.html`; similar ownership, safety and performance claims either reworded as process or flagged with `[CONFIRM WITH OWNER: ...]`.
- **D5** — Conflicting client/project/sq-ft counters across homepage, projects and about pages.
- **D6** — Unconfirmed price claims on `index.html` and `priceRange: "₹₹"` on other pages. Remove or confirm.
- **D7** — Opening-hours contradiction between schema and footers; conflicting response-time promises on `contact.html`.
- **D8** — Verify geo coordinates, postal code and service-area list.
- **D9** — Add Google Business Profile URL when supplied; keep `sameAs` socials consistent.
- **D10 — RESOLVED** — Industrial/textile focus is now present on `index.html`, the new pages and all four updated existing pages.
- **D11** — Duplicate service cards, workflow and FAQs across `index.html`, `services.html`, `about.html` and `contact.html`.
- **D12** — `WebPage.isPartOf` still points to an undefined `#website` node on subpages; add or repeat a minimal identical `WebSite` node.
- **D13** — Sitemap has been updated; verify deployment and `lastmod` after future edits.
- **D14 — RESOLVED** — The four updated pages have textile/industrial H1s; `contact.html` FAQ questions are now `<h3>` to match the new service pages.
- **D15** — Generic stock photo alt text overstates location on existing pages; replace with real captions.
- **D16** — "Own equipment" / "no third parties" claims conflict with rented machinery wording; confirm.
- **D17** — Meta keywords tags are harmless but outdated; no change required to `script.js` or `style.css`.
