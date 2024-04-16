import { type Locator, type Page } from "@playwright/test";

export default class LogInPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly logInBtn: Locator;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator("#loginusername");
    this.passwordInput = page.locator("#loginpassword");
    this.logInBtn = page.getByRole("button", { name: "Log in" });
  }

  async enterUserCredentials( user : string, password : string ) {
    await this.userNameInput.click();
    await this.userNameInput.fill(user);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async clickLogIn() {
    await this.logInBtn.click();
  }
}
