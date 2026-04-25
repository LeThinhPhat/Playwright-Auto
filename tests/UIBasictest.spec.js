const { test, expect } = require("@playwright/test");

test.only("First playwright test", async ({ browser }) => {
  //playwrightcode
  //step1: open url
  //step2: enter u/p
  //step3: click
  //chrome - plugins / cookies
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.thegioididong.com");
  //css     fill, type
  // await page.locator("#txtPhoneNumber").fill("0909898177");
  // await page.getByRole("button", { name: "Tiếp tục" }).click();
  // const text = await page.locator("#dlding").textContent();
  // console.log("TEXT =", text); listsearch item2020 listproduc itemcat42

  await page.locator("#skw").fill("iphone 16");
  await page.getByLabel("button suggest search").click();
  console.log(
    await page.locator(".listsearch .item.cat42").nth(0).textContent(),
  );
  console.log(
    await page.locator(".listsearch .item.cat42").nth(1).textContent(),
  );
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
