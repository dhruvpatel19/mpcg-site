import { chromium } from "playwright";

const baseUrl = process.env.APP_URL || "http://127.0.0.1:4173";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const results = [];

const check = async (name, fn) => {
  try {
    await fn();
    results.push({ name, ok: true });
  } catch (error) {
    results.push({ name, ok: false, error: String(error) });
  }
};

await check("Grid sections render on Start Here", async () => {
  await page.goto(`${baseUrl}/start-here`, { waitUntil: "networkidle" });
  await page.waitForSelector("#first-decisions");
  const cards = await page.locator("#first-decisions .rounded-3xl").count();
  if (cards < 6) {
    throw new Error(`Expected at least 6 cards, found ${cards}`);
  }
});

await check("Hash links land on FAQ scenarios", async () => {
  await page.goto(`${baseUrl}/faq#scenarios`, { waitUntil: "networkidle" });
  await page.waitForSelector("#scenarios");
  const data = await page.evaluate(() => {
    const element = document.getElementById("scenarios");
    const rect = element.getBoundingClientRect();
    return {
      hash: window.location.hash,
      top: rect.top,
      viewport: window.innerHeight,
    };
  });
  if (data.hash !== "#scenarios") {
    throw new Error(`Hash was ${data.hash}`);
  }
  if (data.top > data.viewport) {
    throw new Error(`Section top ${data.top} was below viewport ${data.viewport}`);
  }
});

await check("Directory category deep link works", async () => {
  await page.goto(`${baseUrl}/local-services?category=labs-imaging`, {
    waitUntil: "networkidle",
  });
  await page.waitForSelector("article");
  const text = await page.locator("article").first().innerText();
  if (!/lab|imaging|blood/i.test(text)) {
    throw new Error("Filtered results did not look like labs or imaging");
  }
});

await check("Privacy anchor exists on About page", async () => {
  await page.goto(`${baseUrl}/about#privacy`, { waitUntil: "networkidle" });
  await page.waitForSelector("#privacy");
  const hash = await page.evaluate(() => window.location.hash);
  if (hash !== "#privacy") {
    throw new Error(`Hash was ${hash}`);
  }
});

await check("Language dialog opens and closes with Escape", async () => {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.click('button:has-text("Language help")');
  await page.waitForSelector('[role="dialog"]');
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  const count = await page.locator('[role="dialog"]').count();
  if (count !== 0) {
    throw new Error("Dialog did not close");
  }
});

await check("Service permalink works", async () => {
  await page.goto(`${baseUrl}/local-services/health811`, {
    waitUntil: "networkidle",
  });
  await page.waitForSelector("h1");
  const heading = await page.locator("h1").innerText();
  if (!/Health811/i.test(heading)) {
    throw new Error(`Unexpected heading: ${heading}`);
  }
});

await check("Print styles hide header", async () => {
  await page.goto(`${baseUrl}/about`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  const headerDisplay = await page.evaluate(
    () => getComputedStyle(document.querySelector("header")).display,
  );
  if (headerDisplay !== "none") {
    throw new Error(`Header display was ${headerDisplay}`);
  }
  await page.emulateMedia({ media: "screen" });
});

console.log(JSON.stringify(results, null, 2));

await browser.close();

const failed = results.some((result) => !result.ok);
if (failed) {
  process.exit(1);
}
