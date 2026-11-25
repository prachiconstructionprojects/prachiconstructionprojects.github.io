# Technical SEO & AI-search QA report

Date: 25 November 2026
Scope: 27 indexable URLs (`index.html` + 12 original/service pages + 5 Gujarati pages + 9 guide pages) plus `404.html`, `projects/_template.html`, `sitemap.xml`, `robots.txt`, `llms.txt`, CSS, JS and local assets. The Google verification file is intentionally excluded. `404.html` and the case-study template are `noindex` and are not in the sitemap.

## Pass 1 — original technical SEO fixes

- Rewrote `sitemap.xml` with all 13 original content URLs, `lastmod` `2026-11-25`, sensible priorities and well-formed XML.
- Kept `Allow: /` and the sitemap line in `robots.txt`, and explicitly allowed GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended and Applebot-Extended.
- Created `llms.txt` with the business summary, NAP, services, service areas and key page links.
- Added a factual first-answer paragraph, consistent NAP, visible `Last updated: 25 November 2026`, breadcrumbs and hero preloads to all original content pages.
- Added intrinsic `width`/`height` and `loading="lazy"` to images, fixed heading jumps in footers/testimonials/modals, and shortened over-length titles/descriptions while keeping OG/Twitter titles in sync.
- Added the `.last-updated` style using the existing dark-banner light-text treatment.

## Pass 2 — `/info4.md` implementation

### Gujarati site

- Created `/gu/index.html`, `/gu/textile-construction-surat.html`, `/gu/textile-gala-construction-surat.html`, `/gu/airjet-waterjet-loom-shed-construction-surat.html` and `/gu/contact.html`.
- Each page uses `<html lang="gu">`, natural Gujarati copy, Gujarati title/meta/H1/FAQ, `FAQPage` JSON-LD with `inLanguage: "gu-IN"`, breadcrumbs, last-updated date and the `EN | ગુજરાતી` switch.
- Noto Sans Gujarati is loaded only on `/gu/` pages with `display=swap`.
- Added Hinglish FAQ blocks answering "Textile gala banane ka kharcha Surat" and "loom shed construction Surat" style questions to both `/gu/index.html` and `index.html`, with visible text matching `FAQPage` JSON-LD.
- The combined Gujarati loom-shed page has reciprocal `en-IN` alternates to both the airjet and waterjet English pages.

### Hreflang and navigation

- Added `en-IN`, `gu-IN` and `x-default` alternates to the 6 English pages with Gujarati counterparts and to the 5 Gujarati pages.
- All 11 paired pages have the language switch; reciprocity checks pass for all 6 English↔Gujarati pairs.
- `sitemap.xml` now has 27 URLs with `xmlns:xhtml`, 34 `xhtml:link` alternates, `lastmod` `2026-11-25` and no missing or extra URLs.

### Guides

- Created `/guides/index.html` plus 8 guides. Article word counts: gala 1031, airjet 1099, waterjet 1195, foundation 1137, cost factors 1069, labour vs turnkey 971, approvals 988, contractor checklist 969 — all within 900–1500.
- Each guide has a direct answer in the first paragraph, a table of contents, logical H2/H3 sections, breadcrumbs, internal links to matching service pages, a visible FAQ, `Article` JSON-LD (author: Prachi Construction Projects; publisher linked to the `GeneralContractor` `@id`; `datePublished`/`dateModified` `2026-11-25`) and matching `FAQPage` JSON-LD.
- Guide links were added to the footer of all 12 root content pages and contextually to the relevant service/contact pages.

### Case studies, 404 and assets

- Created `projects/_template.html` with all required fields, placeholder photo sections, placeholder client-quote guidance, `CreativeWork` JSON-LD, breadcrumb and CTA. It is `noindex` and not in the sitemap.
- No real case-study pages were created. All 9 sample project cards on `projects.html` are clearly labelled as illustrative samples, nonexistent case-study links were removed, and a verification note was added.
- Created `404.html` with the same design, main-page links and WhatsApp CTA. It is `noindex` and not in the sitemap.
- Converted all `assets/*.jpg` to WebP, backed up originals in `assets-original/`, resized large images, updated every reference, added `fetchpriority="high"` to hero preloads and kept `width`/`height`/lazy loading. Originals: 7.97 MB; WebP: 4.48 MB. Zero live `.jpg` asset references remain.

### Analytics and performance

- Added the GA4 snippet with placeholder `G-XXXXXXXXXX` to every HTML page, loaded `analytics.js` async, and wired `whatsapp_click`, `phone_click`, `brochure_click` and `enquiry_form_submit` events.
- Added preconnect hints for `https://cdn.jsdelivr.net` and `https://cdnjs.cloudflare.com`, and deferred non-critical scripts without reordering essential libraries.
- Removed the placeholder `CNAME` file that contained `your-domain.example`; keeping it would make GitHub Pages redirect the site to an invalid custom domain. Documented custom-domain/HTTPS steps in `README.md` for when a real domain is supplied.
- Core Web Vitals risk check: all images have intrinsic dimensions and below-fold images are lazy; `/gu/` pages are the only pages loading the Gujarati font, using `display=swap`; no layout-shift-prone inline image sizing issues were found.

## Final scan after `/info4.md`

| Check | Result |
|---|---|
| HTML files scanned | 29 (27 indexable + 404 + template) |
| Errors / warnings | 0 / 0 |
| Broken internal links | 0 |
| Absolute-internal links that could break on Pages | 0 |
| Live `.jpg` asset references | 0 |
| Images missing `alt` / `loading` / `width` / `height` | 0 |
| Missing titles / descriptions / canonicals | 0 |
| Titles over 70 chars / descriptions over 170 chars | 0 |
| Multiple H1s / heading-level jumps | 0 / 0 |
| JSON-LD blocks parsed / syntax errors | 129 / 0 |
| Visible FAQ vs `FAQPage` JSON-LD mismatches | 0 |
| Guide pages missing `Article` or publisher `@id` | 0 |
| Guide word-count failures | 0 |
| Missing hreflang/language switches | 0 |
| Hreflang reciprocity failures | 0 |
| Pages missing GA4 / analytics.js / CDN preconnects / hero preload | 0 |
| Sitemap URLs missing / extra / bad dates | 0 / 0 / 0 |
| Sitemap `<url>` open/close tags | 27 / 27 |
| Robots `Allow: /`, sitemap line, AI crawler rules | all present |
| Real case-study pages / template noindex / 404 noindex | 0 / yes / yes |
| Sample project labels on `projects.html` | 36 mentions across 9 cards |

## Needs the owner

These cannot be safely resolved without real information. All are tracked in `TODO-OWNER.md`.

- Replace all `[CONFIRM WITH OWNER: ...]` placeholders, especially rates, timelines, technical loads/tolerances, service areas, opening hours and geo coordinates.
- Replace `G-XXXXXXXXXX` in every page with the real GA4 measurement ID before launch.
- If a real custom domain is later supplied, add a `CNAME` file with that domain and configure DNS/HTTPS as documented in `README.md`; do not re-add the `your-domain.example` placeholder.
- Supply real project details and publication-cleared before/during/after photos before any case-study page is created from `projects/_template.html`.
- Confirm or replace the sample projects and duplicated testimonials, and supply written permission for any real quotes.
- Confirm real project counts, built-up area totals and the `10+ years` experience claim; counters currently conflict between pages.
- Have a native Gujarati speaker review the `/gu/` copy and a qualified local consultant verify the approvals guide before publication.

## Notes

- No build, lint or typecheck command exists in this plain HTML/CSS/JS repository; verification was done with direct file scans, link resolution and JSON parsing of every JSON-LD block.
- Existing brand colours and library loading/initialisation were not changed.
- The sitemap/GA4/CNAME values above are placeholders by design and must be replaced before launch.
