# Project knowledge

## What this is
`off-self-frontend` — a frontend-only React (v19) + Vite (v8) web app for the **OFF SELF** brand. Currently has a fixed sticky header (logo, nav links, search/account/bag icon buttons) and a footer with navigation/social/legal columns, rendered from `src/components/Header.jsx` and `src/components/Footer.jsx`; page content goes in the `<main>` of `src/App.jsx`.

## Commands (npm)
- Install: `npm install`
- Dev server: `npm run dev` (Vite, HMR enabled)
- Build: `npm run build` (outputs to `dist/`)
- Lint: `npm run lint` (ESLint flat config)
- Preview production build: `npm run preview`
- No test script is configured yet.

## Where code lives
- `index.html` — HTML entry point, loads `/src/main.jsx`
- `src/main.jsx` — React root, renders `<App />` inside `<StrictMode>`
- `src/App.jsx` — top-level layout: `<Header />`, `<main>` page slot, `<Footer />`
- `src/components/Header.jsx`, `src/components/Footer.jsx` — header/footer components; keep nav-link and icon data in the arrays at the top of each file
- `src/index.css` — only stylesheet: Tailwind import, `@theme` design tokens, base layer
- `public/` — static public assets (e.g. icons.svg, favicon.svg)

## Conventions & gotchas
- **Tailwind CSS v4** (CSS-first config) via `@tailwindcss/vite`; the design system lives in `src/index.css` under `@theme` — MD3 color tokens (`surface`, `on-surface-variant`, `outline-variant`, …), Playfair Display + Inter font families/sizes, and custom spacing (`margin-mobile`, `margin-desktop`, `section-gap`, `container-max`). `@custom-variant dark` enables class-based dark mode later.
- ESM throughout (`"type": "module"`); JSX components live in `.jsx` files, not `.tsx`.
- React 19; uses the new JSX transform (no `import React` needed).
- ESLint uses flat config (`eslint.config.js`) with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`; the react-refresh rule warns on files that export non-components, so keep component files component-only.
- Icons use Google's Material Symbols Outlined font (loaded in `index.html`, class `material-symbols-outlined`); nav links carry `data-path` attributes (currently `#` hrefs) ready to hook into routing.
- JavaScript, not TypeScript — no typecheck script.
- Package manager is npm (package-lock.json committed); don't switch to yarn/pnpm without reason.
- `.gitignore` excludes `node_modules`, `dist`, logs, and editor dirs.
