# Copilot / AI Agent Instructions — Mahar-Milhama (static build)

Quick context
- This repository contains a production build (static site) of a frontend app: top-level HTML files (`index.html`, `about.html`, `programs.html`) plus the `static/` folder with hashed JS/CSS bundles and media.
- There is no source (React/TS/JSX/etc.) in this repo — these files are build artifacts. For functional changes, locate and modify the original source repository (this repo is intended to be deployed as-is).

Key files & commands
- Serve locally: use `npm run serve` (alias: `npx serve -s . -l 8000`) or `npm run http-serve` (`python3 -m http.server 8000`). See `package.json` `scripts`.
- Headless smoke test: `npm run headless-check` → runs `python3 tools/headless_check.py`. Install Playwright (see README.md) before running.
- See `package.json` for convenience scripts: `serve`, `http-serve`, `headless-check`, `asset-sizes`.
- Deploy config: `netlify.toml` publishes the repository root and redirects all routes to `/index.html` (single-page-app pattern).

What agents should know (actionable)
- Treat this repo as immutable build output: avoid editing `static/js/*.js` or compiled CSS unless you are performing an emergency patch and understand bundle consequences. Prefer editing source repo.
- Small content edits (copy/text/SEO/meta) can be made in `index.html`, `about.html`, and `programs.html` — but understand any changes here will be overwritten by the next full build from source.
- Hashing pattern: JS/CSS filenames contain build hashes (e.g. `static/js/main.b2520711.js`). When updating HTML references manually, update the exact filename referenced in the HTML that maps to the file in `static/`.

Testing & verification
- Quick manual serve: run `npm run serve`, open `http://localhost:8000`.
- Headless check: run `npm run headless-check` from repo root — it uses `tools/headless_check.py` and saves `headless_check.png`. Install Playwright first (README shows exact commands).
- Asset inspection: `npm run asset-sizes` prints size + gzip size for `static/js/*.js` and `static/css/*.css`.

Conventions and patterns discovered here
- This is a static SPA build output placed in repository root. Deploys to Netlify with `publish = "."` and an SPA fallback redirect (`/* -> /index.html`).
- Static assets grouped under `static/` with subfolders `js`, `css`, `media`.
- The project keeps a small `tools/` folder (currently `tools/headless_check.py`) for lightweight QA checks.

Integration points
- Netlify: `netlify.toml` (deployment settings / redirect). Changes here affect routing/deploy behavior.
- Local smoke-test tooling: `tools/headless_check.py` (depends on Playwright). Use `npm run headless-check` wrapper.
- CI/Secrets: nothing CI-specific in repo, but the workspace may use Netlify site tokens (the environment used during our session included Netlify secrets). Check repository settings for deployment keys if needed.

How to handle common requests
- Edit copy/SEO/meta in `index.html` when you need quick text changes. Note: these edits are transient until the upstream source is rebuilt.
- If asked to change app behavior, locate the upstream source repository (this folder is not the source). If you cannot find it, ask the maintainers for the source repo location.
- For performance regressions, run `npm run asset-sizes` and eyeball large bundles in `static/js/`.

Examples (explicit)
- Serve locally (node): `npm run serve` then open `http://localhost:8000`.
- Run headless smoke test (after installing Playwright): `npm run headless-check`.
- Inspect production bundles: `ls -lh static/js` and `npm run asset-sizes`.

When in doubt
- Ask maintainers whether you should patch built files here or update the upstream source repository.
- Always run the headless smoke-test after edits to catch console/runtime errors.

End.
