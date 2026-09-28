# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Simunye Netball Community — a fully static React site (Phase 1 of 3) for a mixed corporate social netball team in Sandton, deployed to GitHub Pages. `brief.md` is the product spec (pages, user stories, acceptance criteria, and an explicit out-of-scope list); read it before adding features. `example.html` is the standalone visual design reference that the React app's styling is derived from.

Hard constraints from the brief:
- No backend, auth, database, or CMS. Don't add placeholder login screens or buttons implying backend functionality — if a feature isn't real in Phase 1 it shouldn't appear in the UI. See brief §8 for what's out of scope (player portal, polls, dashboards, booking workflows, payments, etc.).
- Forms submit directly to Formspree from the client (`FORMSPREE_ENDPOINT` in `src/pages/Contact.jsx` is still a placeholder).
- Mobile-first; the site is shared with prospective sponsors via WhatsApp/LinkedIn, so `index.html` meta/OG tags matter.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the built dist/
npm run deploy    # build + publish dist/ to the gh-pages branch
npx oxlint        # lint (config in .oxlintrc.json; no npm script)
```

There is no test suite.

## Architecture

- **Stack:** React 19, Vite, Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config.js`), `react-router-dom` v7, `react-markdown` + `remark-gfm`, `yet-another-react-lightbox` for the gallery. Plain JSX, no TypeScript.
- **Routing:** `HashRouter` in `src/App.jsx` (required for GitHub Pages — don't switch to `BrowserRouter`). All routes are declared there, including dynamic `/news/:slug` and `/corporate-hub/wellness/:slug`.
- **Content lives in JS data modules, not Markdown files.** `src/data/*.js` export arrays/objects; news and wellness posts keep their Markdown body in a `content` template string rendered by `ReactMarkdown` inside a `.prose` container. (The brief suggests `src/content/**.md` files; the implementation deliberately uses `src/data/` instead.) Placeholder entries are flagged `isSample: true` with `// TODO` comments.
- **Shared stats:** `src/data/teamStats.js` is the single source for numbers shown on Home and Sponsors — update it there rather than hardcoding.
- **Feature flags:** `src/config/features.js` hides unfinished sections. `SHOW_CORPORATE_HUB = false` removes the Corporate Hub (and its wellness posts) from the header, footer and routes; the page files are kept for later.
- **Contact deep links:** CTAs link to `/contact?type=join|sponsor|...`; `Contact.jsx` reads the `type` search param to pre-select the enquiry type and conditionally render extra fields.
- **Static assets** live in `public/` (not `src/assets/`) and must be referenced with `import.meta.env.BASE_URL` as a prefix (see `src/data/gallery.js`) so paths survive a non-root `base`.
- **`vite.config.js` `base`:** the committed value is `'/simunye/'` (the GitHub repo name, needed for Pages); it's currently modified locally to `'/'`. Keep this in mind before running `deploy`.

## Content source

Real content comes from the team's Instagram, [@simunye_community](https://www.instagram.com/simunye_community/). Write in the collective "we" voice and keep the story about the community — don't centre the founder or any individual.

Photos: full-resolution originals go in `photo-originals/` (gitignored, outside `public/` so they aren't deployed). Web versions are in `public/images/photos/` (max 1400px, ~350 KB) with 600px copies in `photos/small/`. Convert with e.g. `sips -s format jpeg -s formatOptions 65 -Z 1400 <src> --out public/images/photos/<yyyy-mm-name>.jpg` (also handles HEIC).

## Styling

- Design tokens are defined twice in `src/index.css`: as CSS variables in `:root` (`--cobalt`, `--accent`, `--ink`, …) and as Tailwind theme colors in `@theme` (`cobalt`, `cobalt-deep`, `accent`, `ink`, `ink-dim`, `surface-tint`). Keep them in sync. Despite the `cobalt` names, the palette is plum from the team logo (`#6B2D5C`, deep `#3B1633`, mid `#8C4A7A`) with a gold accent (`#E0A43A`) on an off-white background — this supersedes the green in the brief. Gold backgrounds take deep-plum text, not white.
- Fonts (loaded in `index.html`): Archivo Black for `h1–h3` (globally uppercased), Inter for body, Space Mono via the `.mono` utility. Use `.card-heading` to opt card titles out of the Archivo Black heading style.
- Components frequently use inline `style={{ color: '#...' }}` hex values alongside Tailwind classes; follow the surrounding file's convention.
- Custom CSS classes for the Home page photo stack (`.photo-stack`, `.photo-card`) and `.transverse-line` are in `index.css`, ported from `example.html`.
