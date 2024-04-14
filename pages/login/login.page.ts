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

  async enterUserCredentials() {
    await this.userNameInput.click();
    await this.userNameInput.fill("admin");
    await this.passwordInput.click();
    await this.passwordInput.fill("admin");
  }

  async clickLogIn() {
    await this.logInBtn.click();
  }
}
