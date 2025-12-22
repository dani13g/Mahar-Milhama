# Local run & smoke-test instructions

This folder contains the production build output. Use the commands below to run and perform quick checks locally.

## Serve the build (quick)

Start a simple static server (Python):

```bash
cd /Users/dani/Downloads/drive-download-20251222T182659Z-3-001/build
python3 -m http.server 8000
# open in browser (macOS)
open http://localhost:8000
```

Stop the server with `Ctrl+C` in the terminal.

If you prefer a Node-based static server (single-command):

```bash
# using npx (no global install required)
npx serve -s . -l 8000
open http://localhost:8000
```

## Headless smoke test (captures console/page errors + screenshot)

This repo includes a small helper `tools/headless_check.py` which uses Playwright.

Install Playwright and browsers (one-time):

```bash
python3 -m pip install --user playwright
# install chromium for Playwright
/Users/$(whoami)/Library/Python/3.12/bin/playwright install chromium
```

Run the headless check from the `build` folder:

```bash
cd /Users/dani/Downloads/drive-download-20251222T182659Z-3-001/build
python3 tools/headless_check.py

# Output includes a summary and saves a screenshot at:
# headless_check.png
```

If the script reports `SUMMARY: NO_ERRORS_DETECTED` the page loaded without console or page errors during the check.

## Quick manual checks

- Open browser DevTools (Console, Network) and browse the app to surface runtime issues.
- Run Lighthouse (Chrome) for performance/accessibility/SEO suggestions.
- Use `pa11y` or axe DevTools for deeper accessibility scanning.

## Troubleshooting

- If port 8000 is in use, change the port and update the URL.
- To kill a hung server on macOS:

```bash
# find process using port 8000
lsof -i :8000
# kill <pid>
kill <pid>
```

## Next steps (suggested)

- Add CI checks: linting, Playwright smoke test, and accessibility audit.
- If you want, I can add a minimal `package.json` and npm scripts to standardize these commands.
