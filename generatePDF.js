const puppeteer = require("puppeteer");

async function generatePDF({ url }) {
  const browser = await puppeteer.launch({
    handless: true,
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  await page.emulateMediaType("screen");
  const pdf = await page.pdf({
    format: "A2",
    printBackground: true,
    margin: { left: "0.5cm", top: "2cm", right: "0.5cm", bottom: "2cm" },
  });
  await browser.close();
  return pdf;
}

module.exports = {
  generatePDF,
};
