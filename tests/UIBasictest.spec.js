const { test, expect } = require("@playwright/test");

test.only("First playwright test", async ({ browser }) => {
  //playwrightcode
  //step1: open url
  //step2: enter u/p
  //step3: click
  //chrome - plugins / cookies
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  const password = page.locator("#password");
  const signIn = page.locator("#signInBtn");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //css     fill, type

  await userName.fill("rahulshettyacademy");
  await password.type("learning");
  await signIn.click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await password.type("learning");
  await signIn.click();
  console.log(await page.locator(".card-body a").first.textContent());
  console.log(await page.locator(".card-body a").nth(1).textContent());
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
