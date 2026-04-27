const { test, expect } = require("@playwright/test");

test("First playwright test", async ({ browser }) => {
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
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const password = page.locator("#password");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();

  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  // await page.pause();
});

test.only("Child window test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    documentLink.click(),
  ]);
  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  // console.log(domain);
  await page.locator("#username").fill(domain);
  // await page.pause();
  console.log(await page.locator("#username").inputValue());
});
