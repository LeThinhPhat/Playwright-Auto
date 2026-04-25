const { test, expect } = require("@playwright/test");

test("First playwright test", async ({ browser }) => {
  //playwrightcode
  //step1: open url
  //step2: enter u/p
  //step3: click
  //chrome - plugins / cookies
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/login/?locale=vi_VN");
  //css     fill, type
  // await page.locator("#email").fill("lethinhphat");
  await page.getByPlaceholder("Email hoặc số di động").fill("lethinhphat");
  // await page.getByLabel("Password").fill("123456");
  await page.locator("[type='Mật khẩu']").fill("123456");
  await page.locator("text=Đăng nhập").click();
});

test("Page playwright test", async ({ page }) => {
  //playwrightcode
  //step1: open url
  //step2: enter u/p
  //step3: click
  //chrome - plugins / cookies
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
