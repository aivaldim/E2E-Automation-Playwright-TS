import { logInCreds, userDetails } from "../../tests-data/testsdata.json";
import { expect, test } from "../testBase";

test.describe("Log In Tests",{ tag: ['@regression'] }, () => {

  test("Successful log in",{ tag: ['@smoke'] }, async ({ pageFactory }) => {

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
});
