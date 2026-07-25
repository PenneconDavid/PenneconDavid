const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "../assets");
const bannerSvg = path.resolve(outDir, "hero-banner.svg");

const targets = [
  { name: "ballknower", url: "https://ballknower.vercel.app/", wait: 4000 },
  { name: "oddscout", url: "https://odd-scout.vercel.app/", wait: 4000 },
  { name: "portfolio", url: "https://daveyrockets.me", wait: 3000 },
  {
    name: "dao-gas",
    url: "https://dao-gas-reimbursement-paymaster.vercel.app/",
    wait: 3000,
  },
  {
    name: "hedera-notary",
    url: "https://hedera-notary-log.vercel.app/",
    wait: 3000,
  },
  {
    name: "solana-forge",
    url: "https://solana-nft-forge.vercel.app/",
    wait: 3000,
  },
  { name: "dishswap", url: "https://dishswap.vercel.app/", wait: 3000 },
];

async function renderBanner(page) {
  const svgMarkup = fs.readFileSync(bannerSvg, "utf8");
  await page.setViewportSize({ width: 1200, height: 320 });
  await page.setContent(
    `<!DOCTYPE html><html><body style="margin:0;background:#111;">${svgMarkup}</body></html>`,
    { waitUntil: "load" }
  );
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.join(outDir, "hero-banner.png"),
    fullPage: false,
  });
  console.log("Saved hero-banner.png");
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  await renderBanner(page);

  for (const target of targets) {
    try {
      console.log(`Capturing ${target.name} -> ${target.url}`);
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(target.url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(target.wait);
      await page.screenshot({
        path: path.join(outDir, `${target.name}.png`),
        fullPage: false,
      });
      console.log(`Saved ${target.name}.png`);
    } catch (error) {
      console.error(`Failed ${target.name}: ${error.message}`);
      process.exitCode = 1;
    }
  }

  await browser.close();
})();
