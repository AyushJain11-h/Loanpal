const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.text());
  });
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.toString());
  });
  page.on('response', response => {
    if (response.status() >= 400) {
      console.error('HTTP error', response.status(), response.url());
    }
  });

  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot.png' });
  console.log('screenshot taken');
  await browser.close();
})();