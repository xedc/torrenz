const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://daftsex.com/watch/-171457258_456241419');
  await page.screenshot({path: 'screen.png'});

  await browser.close();
})();
