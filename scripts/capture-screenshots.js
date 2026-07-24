const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "../assets");

const targets = [
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

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  for (const target of targets) {
    try {
      console.log(`Capturing ${target.name} -> ${target.url}`);
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
