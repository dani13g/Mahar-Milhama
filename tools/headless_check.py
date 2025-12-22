from playwright.sync_api import sync_playwright
import sys

URL = "http://localhost:8000"

def main():
    results = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        def on_console(msg):
            results.append(("console", msg.type, msg.text))

        def on_page_error(err):
            results.append(("pageerror", str(err)))

        page.on("console", on_console)
        page.on("pageerror", on_page_error)

        try:
            page.goto(URL, wait_until="networkidle", timeout=30000)
        except Exception as e:
            print("PAGE_LOAD_ERROR", e)
            browser.close()
            sys.exit(2)

        page.screenshot(path="headless_check.png", full_page=True)
        browser.close()

    # Summarize
    errors = [r for r in results if r[0] in ("pageerror",) or (r[0]=="console" and r[1]=="error")]
    print("TOTAL_MESSAGES", len(results))
    for r in results:
        if r[0] == "console":
            print(f"CONSOLE {r[1].upper()}: {r[2]}")
        else:
            print(f"PAGEERROR: {r[1]}")

    print("SCREENSHOT: headless_check.png")
    if errors:
        print("SUMMARY: ERRORS_DETECTED", len(errors))
        sys.exit(2)
    else:
        print("SUMMARY: NO_ERRORS_DETECTED")
        sys.exit(0)

if __name__ == '__main__':
    main()
