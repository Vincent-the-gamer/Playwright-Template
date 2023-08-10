const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    viewport: {
      height: 720,
      width: 1280
    }
  });

  const page = await context.newPage();
  await page.goto('https://www.bilibili.com/read/cv624179');

  for (let i = 1; i <= 4; i++) {
    const result = await page.locator('#read-article-holder').getByRole('img').nth(i)
                             .evaluate(el => el.src)
    console.log(
      result.substring(0, result.indexOf("@"))
    )
  }

  await context.close();
  await browser.close();
})();