# Prachi Construction Projects website

Static marketing website for Prachi Construction Projects, hosted with GitHub Pages at `https://prachiconstructionprojects.github.io/`. The site targets textile and industrial construction work in Surat, Gujarat. There is no build step or framework: plain HTML, CSS and JavaScript, with Bootstrap 5, jQuery, Swiper and AOS loaded from CDNs. Do not change how those libraries are loaded or initialised unless a separate task asks for it.

## Project structure

- `index.html` — homepage; hero, stats, project samples, textile service cards, about, areas and FAQ.
- `textile-construction-company-surat.html` — pillar guide to textile construction in Surat; links to all service pages.
- `textile-gala-unit-construction-surat.html` — gala unit construction page.
- `airjet-loom-shed-construction-surat.html` — airjet loom shed page.
- `waterjet-loom-shed-construction-surat.html` — waterjet loom shed page.
- `loom-machine-foundation-construction-surat.html` — loom machine foundation page.
- `textile-processing-house-construction-surat.html` — processing/dyeing/printing unit civil work page.
- `industrial-shed-pre-engineered-building-surat.html` — industrial shed, PEB, warehouse and godown page.
- `textile-construction-cost-surat.html` — cost-factors guide; deliberately contains no unverified rates.
- `services.html`, `projects.html`, `about.html`, `contact.html` — original site pages, updated for textile/industrial positioning.
- `google7772d8ae0d5e698a.html` — Google Search Console verification file; leave unchanged and do not add it to the sitemap.
- `style.css` — all site styles, including shared page banner, breadcrumb, last-updated, footer and modal styles.
- `script.js` — counters, Swiper/AOS/jQuery/Bootstrap behaviour and the WhatsApp enquiry form. Keep unchanged unless functionality is being changed.
- `assets/` — WebP images used by the live pages. Add real, permission-cleared textile/industrial photos here, convert them to WebP and keep the originals in `assets-original/`.
- `assets-original/` — untouched JPEG originals kept as backup; not linked by any page.
- `gu/` — Gujarati versions of the homepage, pillar page, gala page, combined loom-shed page and contact page.
- `guides/` — index plus eight practical guides for textile and industrial unit owners.
- `projects/_template.html` — reusable case-study template. Do not publish or fill with invented data; wait for owner-supplied real projects.
- `404.html` — custom not-found page with main links and WhatsApp CTA.
- `analytics.js` — GA4 event helper for WhatsApp, phone, brochure and enquiry-form clicks. The measurement ID is a placeholder in every HTML head.
- `CNAME` — placeholder custom-domain file. Delete it or replace it only when the owner has a real domain; see below.
- `sitemap.xml` — all English, Gujarati and guide URLs with `lastmod` dates, priorities and hreflang alternates.
- `robots.txt` — crawl permissions for all crawlers plus explicit AI crawler rules and the sitemap URL.
- `llms.txt` — plain-text business summary, NAP, services, areas and key page links for AI tools.
- `SEO-PLAN.md` — original page, schema and internal-linking plan.
- `TODO-OWNER.md` — owner checklist and placeholder register.
- `SEO-QA-REPORT.md` — latest technical SEO/AI-search QA results and open owner items.

## How to update content

1. **Business details (NAP):** use `Prachi Construction Projects`, `Green Plaza, 129, near D Mart Road, Mota Varachha, Surat, Gujarat 394101`, `+91 76004 90851` and `prachiconstructionprojects@gmail.com` exactly. Update the visible footer and every JSON-LD block together.
2. **A page:** keep one H1, a factual first paragraph, logical H2/H3 order, visible breadcrumb and `Last updated` date, unique title and meta description, canonical URL, Open Graph/Twitter tags and matching JSON-LD. Keep the header, footer, sticky action bar and scripts identical to the other pages.
3. **FAQ:** edit the visible question and answer and the matching `FAQPage` JSON-LD entry together. Keep answers short and direct, ideally one or two sentences, so they can be quoted by AI tools.
4. **Images:** use descriptive `alt` text, real intrinsic `width` and `height`, and `loading="lazy"`. For a new hero or page-banner background, add a matching `<link rel="preload" as="image" ...>` in the head. Do not add render-blocking resources.
5. **Internal links:** link related service pages, `projects.html` and `contact.html` with descriptive anchor text. Check that every internal link points to a file that exists.
6. **Discovery:** after any content change, update that page's `lastmod` in `sitemap.xml`, the visible `Last updated` date, and the relevant description/link in `llms.txt` if the page scope changed.
7. **Placeholders:** do not invent projects, clients, testimonials, rates, certifications or machine specifications. Replace `[CONFIRM WITH OWNER: ...]` only with owner-supplied facts and tick the matching item in `TODO-OWNER.md`.

## Checks before publishing

- Validate `sitemap.xml` as XML and confirm every URL matches a canonical tag.
- Confirm `robots.txt` still has `Allow: /`, the sitemap line and the AI crawler rules.
- Scan all HTML for duplicate titles/descriptions, missing canonicals, multiple H1s, broken internal links and invalid JSON-LD.
- Confirm FAQ visible text matches `FAQPage` JSON-LD exactly.
- Review `SEO-QA-REPORT.md` and resolve owner items before presenting sample projects or testimonials as real.

## Deploying

Push the repository to the configured GitHub Pages branch. No local build or package install is required.

## Connecting a custom domain

1. Do not publish the current `CNAME` placeholder while the live site is still using `prachiconstructionprojects.github.io`. It contains `your-domain.example` only as a reminder.
2. When the owner supplies a real domain, replace the contents of `CNAME` with that domain (no `https://` and no trailing slash), for example `www.example.com`.
3. In the GitHub repository, open **Settings → Pages → Custom domain**, enter the same domain and save. GitHub will create or update the `CNAME` file and add the DNS records it expects.
4. Add the DNS records at the domain registrar: an `A` record to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` for the apex, or a `CNAME` record to `prachiconstructionprojects.github.io` for `www`. Follow the exact records GitHub shows for the chosen domain.
5. Tick **Enforce HTTPS** in GitHub Pages settings once DNS has propagated and the certificate is active. Update `sitemap.xml`, canonical tags, Open Graph URLs, Twitter URLs, `llms.txt`, JSON-LD IDs and hreflang tags from `https://prachiconstructionprojects.github.io/` to the new domain before announcing the change.
6. If the custom-domain plan is cancelled, delete `CNAME` from the repository and remove the custom domain in Pages settings so the `github.io` URL keeps working.

## Analytics placeholder

Every HTML head loads GA4 with `G-XXXXXXXXXX`. Replace that ID in all pages with the real measurement ID before launch. `analytics.js` sends `whatsapp_click`, `phone_click`, `brochure_click` and `enquiry_form_submit` events without modifying the site's existing form behaviour.
