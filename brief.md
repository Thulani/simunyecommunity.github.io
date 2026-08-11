# Simunye Netball Hub — Phase 1 development brief

**For: GitHub Copilot / Junie**
**Project type:** Static React frontend, GitHub Pages deployment
**Phase:** 1 of 3 — Public showcase site (no backend, no auth, no database)

---

## 1. Project context

Simunye is a mixed corporate social netball team based in Sandton, Gauteng, drawing players from companies across the area. The team has approved a phased website rollout. This brief covers **Phase 1 only**: a fully static, visually polished public website that establishes Simunye's digital presence, supports an active sponsorship conversation, and is cheap enough to run that it requires **zero ongoing budget**.

There is no backend, no database, and no authentication in this phase. Every later feature (player portal, sponsor financial dashboard, admin CMS) is explicitly out of scope and will be layered on in a future phase once budget is secured. Do not build placeholder login screens, dummy databases, or non-functional buttons that imply backend functionality — if a feature isn't real in Phase 1, it should not appear in the UI at all.

---

## 2. Technical constraints — read this first

- **Framework:** React (Vite recommended over Create React App for faster builds and easier GitHub Pages config).
- **Hosting:** GitHub Pages. This means:
    - No server-side rendering, no API routes, no serverless functions.
    - All routing must work as a static single-page app — use `HashRouter` from `react-router-dom`, or configure `BrowserRouter` with the correct `basename` and a `404.html` redirect trick for GitHub Pages. `HashRouter` is simpler and safer for this context; use it unless told otherwise.
    - All content (news posts, gallery images, education articles) must be stored as static local data — JSON or Markdown files imported at build time, or hardcoded JS data files. No CMS, no live database.
    - The `vite.config.js` `base` path must be set to match the GitHub repository name for correct asset paths on Pages.
- **No backend means no real form submission.** Any "Contact us", "Request a friendly match," or "Join the team" form must submit via a static-friendly method — either a `mailto:` link, or integration with a free-tier third-party form service (e.g. Formspree, Getform) that accepts POST requests directly from the static frontend with no server of our own. Default to **Formspree free tier** unless told otherwise, and clearly mark the form action endpoint as a placeholder to be replaced with our real Formspree endpoint.
- **No images or media should be committed if they don't exist yet.** Use clearly labelled placeholder images (a placeholder service like `https://placehold.co` or local SVG placeholders) so the layout is visibly correct, and leave clear `// TODO: replace with real photo` comments.
- **Performance and SEO matter.** This site will be shared with a prospective sponsor — it must load fast, be mobile-responsive, and have correct meta tags (title, description, Open Graph image) for link previews when shared on WhatsApp/LinkedIn.

---

## 3. Design direction

The tone should feel premium, modern, and credible — closer to a polished startup product site than a typical amateur sports club page. This is being used to win a corporate sponsor, so it must look like it was built by a professional digital team, not a hobby project.

- **Colour palette:** Primary deep green (suggest `#085041` / `#1D9E75` range) paired with clean white space, with a secondary accent colour (purple or amber) used sparingly for highlights and call-to-action buttons. Avoid generic sports clichés (no stock action-shot hero backgrounds with heavy gradients, no neon).
- **Typography:** Clean sans-serif throughout, generous line height, confident heading sizes. Avoid cramped layouts.
- **Layout principles:** Generous whitespace, card-based content blocks, smooth section transitions, subtle scroll-triggered fade-ins are welcome but should never block content or harm load time.
- **Responsiveness:** Mobile-first. Most visitors — especially prospective players and sponsors viewing a shared link — will open this on a phone.
- **Imagery:** Confident use of photography placeholders for now, with the team's brand colour as an overlay accent where needed.

---

## 4. Information architecture — Phase 1 pages

Only the following pages/sections are in scope for Phase 1. Do not build any others.

| # | Page | Purpose |
|---|------|---------|
| 1 | Home | First impression, mission, highlights, calls to action |
| 2 | About | Team story, values, the Sandton corporate angle |
| 3 | Schedule | Static display of upcoming practices, clinics, and friendlies |
| 4 | Gallery | Static photo gallery |
| 5 | News | Static blog/news feed (Markdown-driven) |
| 6 | Education centre | Rules, positions, tactics, fitness, injury prevention |
| 7 | Sandton Corporate Networking Hub | Player directory (static) + corporate wellness blog |
| 8 | Sponsors | Static sponsor showcase + sponsorship pitch page |
| 9 | Contact | Player enquiries, friendly match requests, sponsor enquiries, general contact |

---

## 5. User stories

Each story includes acceptance criteria. Build these as individual, cleanly separated React components/pages so future phases can extend them without a rewrite.

### 5.1 Home page

> **As a** visitor landing on the site for the first time,
> **I want** an immediate, confident first impression of who Simunye is and what they stand for,
> **so that** I understand the team's identity within seconds, whether I'm a prospective player, a rival team, or a sponsor.

**Acceptance criteria**
- Hero section with team name, tagline, and a strong one-line mission statement.
- Two clear calls to action: "Join the team" and "Become a sponsor" (both link to the Contact page with the relevant enquiry type pre-selected, see 5.9).
- A short highlights strip: number of active players, number of companies represented, founding year — pulled from a static config file (`src/data/teamStats.js`) so it's easy to update without touching layout code.
- A teaser section linking to the three flagship areas: Education Centre, Corporate Networking Hub, and Sponsors.
- Fully responsive hero (no overlapping text on mobile).

---

### 5.2 About page

> **As a** visitor curious about who Simunye actually is,
> **I want** to read the team's story and values,
> **so that** I understand this is a credible, organised, community-driven initiative — not a casual WhatsApp group.

**Acceptance criteria**
- Section explaining the "Simunye" name and meaning ("we are one").
- Section describing the social initiative — mixed corporate netball, no league play, rotated positions, practices/clinics/friendlies only.
- A visual list or logo strip of represented companies (static array in `src/data/companies.js`, with logo placeholders).
- A short "Our values" section (3–4 value cards, e.g. Unity, Inclusion, Professionalism, Community).

---

### 5.3 Schedule page

> **As a** visitor or player,
> **I want** to see upcoming practices, clinics, and friendlies at a glance,
> **so that** I know what's happening without needing to ask anyone.

**Acceptance criteria**
- Static, admin-edited list of upcoming events pulled from `src/data/events.js` (date, time, type — practice/clinic/friendly, venue, short description).
- Events displayed in a clean upcoming-first list or simple calendar-style view — no interactive booking, no live calendar integration.
- Past events may optionally be visually distinguished (greyed out) but are not required in Phase 1.
- Clear note that this calendar is updated manually until the live platform launches (small text disclaimer is fine, but should not look like an apology — frame it positively, e.g. "Updated weekly by team admin").

---

### 5.4 Gallery page

> **As a** visitor,
> **I want** to see photos of the team in action,
> **so that** I get a feel for the culture and energy of Simunye.

**Acceptance criteria**
- Responsive image grid/masonry layout.
- Images sourced from a local `src/assets/gallery/` folder and a static manifest file (`src/data/gallery.js`) listing filename + caption, so new photos can be added by dropping a file in and updating one array.
- Lightbox/expand-on-click behaviour for viewing full-size images (a lightweight client-side library like `yet-another-react-lightbox` is acceptable; nothing requiring a backend).
- Use placeholder images until real photography is supplied.

---

### 5.5 News page

> **As a** visitor or sponsor,
> **I want** to read team news, match recaps, and milestones,
> **so that** I see Simunye as an active, well-run organisation worth taking seriously.

**Acceptance criteria**
- News posts authored as individual Markdown files in `src/content/news/` with frontmatter (title, date, summary, cover image).
- Posts rendered via a Markdown parser (`react-markdown` or build-time processing — `vite-plugin-md` is acceptable) — no backend CMS.
- News index page lists posts newest-first with title, date, and summary excerpt.
- Individual post page with clean article typography, using `react-router-dom` dynamic routes (`/news/:slug`).
- Include 2–3 example placeholder posts so the layout can be reviewed immediately (clearly marked as sample content).

---

### 5.6 Education centre

> **As a** new player or curious member of the public,
> **I want** to learn the rules, positions, and basic tactics of netball,
> **so that** I can understand and enjoy the game even if I've never played before.

**Acceptance criteria**
- Sub-sections, each its own page or expandable panel: Rules & laws of the game, Positions explained, Tactics & strategies, Fitness & drills, Injury prevention & wellness.
- Positions section includes a visual court diagram (static SVG component is fine) with labelled zones.
- Content authored as static Markdown or structured JS data, consistent with the News page's content approach for maintainability.
- Clean, readable long-form typography — this is reference content, prioritise legibility over flashy layout.

---

### 5.7 Sandton Corporate Networking Hub

> **As a** Sandton professional considering joining Simunye, or a sponsor evaluating the team,
> **I want** to see that this team connects real professionals across real companies,
> **so that** I understand the genuine B2B networking value the team offers.

**Acceptance criteria**
- **Player directory (static, opt-in only):** a card grid of players who have agreed to be listed, showing name, company, industry tag (Finance, Law, Tech, Marketing, etc.), and an external link icon to their LinkedIn profile. Data lives in `src/data/playerDirectory.js`. Only include real entries once players have explicitly opted in — ship with 2–3 clearly marked sample/placeholder cards for layout review.
- Filterable by industry using a simple client-side filter (no backend search needed — array filtering in React state is sufficient).
- **Corporate wellness blog:** reuse the same Markdown content pattern as the News page, but in a separate `src/content/wellness/` directory and a distinct route (`/corporate-hub/wellness`), so it can be linked and shared independently for LinkedIn-style distribution.
- Clear section intro copy explaining why this hub exists (the B2B networking value proposition), written in a confident, professional tone.

---

### 5.8 Sponsors page

> **As a** prospective sponsor evaluating Simunye,
> **I want** to see the team's reach, professionalism, and value proposition clearly laid out,
> **so that** I feel confident this is a credible partnership opportunity.

**Acceptance criteria**
- A clear, well-designed value proposition section (reach, demographics, the corporate networking angle, community impact).
- Static stat cards (member count, companies represented, sessions per month) — sourced from the same `teamStats.js` config used on the homepage, so numbers stay consistent across the site without duplication.
- A "Current sponsor" placeholder section, structured so a logo and short blurb can be dropped in once a sponsor is confirmed — but not visible/active until real data exists.
- A clear call-to-action button linking to the Contact page with the sponsorship enquiry type pre-selected.
- Optional: a downloadable PDF sponsorship one-pager link (static file in `public/`, e.g. `public/Simunye_Sponsorship_OnePager.pdf`) — link it but don't worry about generating the file itself in this phase.

---

### 5.9 Contact page

> **As a** prospective player, rival team captain, sponsor, or member of the press,
> **I want** a clear, simple way to get in touch with the right enquiry type,
> **so that** my message reaches the team admin without needing to know an email address.

**Acceptance criteria**
- A single contact form with an "enquiry type" selector: Join the team / Request a friendly match / Sponsorship enquiry / General enquiry.
- Form fields adapt slightly based on enquiry type where useful (e.g. friendly match requests show optional date and venue fields) — this can be done with simple conditional rendering in React state, no backend needed.
- Form submits via Formspree (or equivalent static-friendly form service) — placeholder endpoint clearly marked with a `// TODO` comment for the real endpoint to be added later.
- On successful submission, show a clean confirmation state (no page reload, handled client-side).
- The "Join the team" and "Sponsorship enquiry" CTAs elsewhere on the site should deep-link here with the correct enquiry type pre-selected (e.g. via a query param or route state).

---

## 6. Suggested project structure

```
simunye-netball-hub/
├── public/
│   ├── favicon.ico
│   └── Simunye_Sponsorship_OnePager.pdf
├── src/
│   ├── assets/
│   │   └── gallery/
│   ├── components/
│   │   ├── layout/        (Header, Footer, Nav)
│   │   ├── ui/             (Button, Card, Badge, SectionHeading, etc.)
│   ├── content/
│   │   ├── news/           (Markdown files)
│   │   └── wellness/       (Markdown files)
│   ├── data/
│   │   ├── teamStats.js
│   │   ├── companies.js
│   │   ├── events.js
│   │   ├── gallery.js
│   │   └── playerDirectory.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Schedule.jsx
│   │   ├── Gallery.jsx
│   │   ├── News.jsx
│   │   ├── NewsPost.jsx
│   │   ├── EducationCentre.jsx
│   │   ├── CorporateHub.jsx
│   │   ├── Sponsors.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── package.json
```

---

## 7. Deployment checklist (GitHub Pages)

- [ ] `vite.config.js` has `base: '/<repo-name>/'` set correctly.
- [ ] `react-router-dom` configured with `HashRouter` to avoid GitHub Pages 404 issues on refresh/direct links.
- [ ] `gh-pages` npm package added as a dev dependency, with a `deploy` script in `package.json` (`"deploy": "gh-pages -d dist"`).
- [ ] GitHub repository Pages settings point to the `gh-pages` branch.
- [ ] Meta tags (title, description, Open Graph image) set in `index.html` for clean link previews.
- [ ] Site tested on mobile viewport widths before considered "done."
- [ ] Lighthouse performance check run — flag anything scoring below 85 on performance or accessibility.

---

## 8. Explicitly out of scope for Phase 1

To avoid scope creep, do **not** build any of the following — they belong to a future phase once a backend and budget are in place:

- Player login / authentication
- Practice availability polling (interactive)
- Financial dashboard / contribution tracking
- Admin CMS or dashboard of any kind
- Live match-day scoring
- Friendly match booking workflow with accept/decline logic
- Merchandise store / payment processing
- Real-time sponsor metrics dashboard

If asked to "stub out" any of the above, decline and instead leave it out entirely — a missing feature looks intentional and forward-looking; a broken or fake one looks unfinished.