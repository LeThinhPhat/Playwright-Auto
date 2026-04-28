const { test, except } = require("@playwright/test");

test("Calender validate", async ({ page }) => {
  const monnth = "6";
  const year = "2027";
  const date = "20";

  const expectedList = ["month,date,year"];
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  await page.locator(".react-date-picker__inputGroup").click();
  await page.locator(".react-calendar__navigation__label").click();
  await page.locator(".react-calendar__navigation__label").click();
  await page.getByText(year).click();
  await page
    .locator(".react-calendar__year-view__months__month")
    .nth(monnth - 1)
    .click();
  await page.locator("//abbr[text()='" + date + "']").click();

  const inputs = await page.locator(".react-date-picker__inputGroup__input");
  for (let i = 0; i < expectedList.length; i++) {
    const value = await inputs.nth(i).inputValue();
    except(value).equal(expectedList[i]);
  }
});
