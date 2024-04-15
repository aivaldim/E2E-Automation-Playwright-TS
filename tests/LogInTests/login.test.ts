import { expect, test } from "../testBase";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Successful log in", async ({ pageFactory }) => {

  //await page.getByRole("link", { name: "Log in" }).click();
  await pageFactory.headerPage.openTheLogInModal();
  //await page.locator("#loginusername").click();
  //await page.locator("#loginusername").fill("admin");
  //await page.locator("#loginpassword").click();
  //await page.locator("#loginpassword").fill("admin");
  await pageFactory.logInPage.enterUserCredentials();
  //await page.getByRole("button", { name: "Log in" }).click();
  await pageFactory.logInPage.clickLogIn();
  //await page.getByRole("link", { name: "Welcome admin" }).click();
  await expect(pageFactory.headerPage.userNameLink).toHaveText('Welcome admin');

});
