import { logInCreds, userDetails } from "../../tests-data/login-creds.json";
import { expect, test } from "../testBase";

test("Successful log in", async ({ pageFactory }) => {

  const textExpected = "Welcome " + userDetails.userName;

  //await page.getByRole("link", { name: "Log in" }).click();
  await pageFactory.headerPage.openTheLogInModal();
  //await page.locator("#loginusername").click();
  //await page.locator("#loginusername").fill("admin");
  //await page.locator("#loginpassword").click();
  //await page.locator("#loginpassword").fill("admin");
  await pageFactory.logInPage.enterUserCredentials(logInCreds.user, logInCreds.correct_password);
  //await page.getByRole("button", { name: "Log in" }).click();
  await pageFactory.logInPage.clickLogIn();
  //await page.getByRole("link", { name: "Welcome admin" }).click();
  await expect(pageFactory.headerPage.userNameLink).toHaveText(textExpected);

});
