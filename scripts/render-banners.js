const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const assetsDir = path.resolve(__dirname, "../assets");
const banners = [
  { file: "hero-banner.svg", w: 1280, h: 360 },
  { file: "banner-editorial.svg", w: 1280, h: 360 },
  { file: "banner-orbit.svg", w: 1280, h: 360 },
  { file: "banner-terminal.svg", w: 1280, h: 360 },
  { file: "banner-statement.svg", w: 1280, h: 360 },
  { file: "banner-split.svg", w: 1280, h: 360 },
];

(async () => {
  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  const page = await browser.newPage({ deviceScaleFactor: 2 });

  for (const banner of banners) {
    const svgPath = path.join(assetsDir, banner.file);
    if (!fs.existsSync(svgPath)) continue;
    const svgMarkup = fs.readFileSync(svgPath, "utf8");
    await page.setViewportSize({ width: banner.w, height: banner.h });
    await page.setContent(
      `<!DOCTYPE html>
       <html>
         <head>
           <style>
             html, body { margin: 0; padding: 0; overflow: hidden; background: #111; }
             svg { display: block; }
           </style>
         </head>
         <body>${svgMarkup}</body>
       </html>`,
      { waitUntil: "load" }
    );
    await page.waitForTimeout(400);
    const pngPath = svgPath.replace(/\.svg$/i, ".png");
    await page.screenshot({ path: pngPath, fullPage: false, type: "png" });
    console.log(`Saved ${path.basename(pngPath)}`);
  }

  await browser.close();
})();
