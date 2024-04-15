import { type Locator, type Page } from '@playwright/test';

export default class LandingPage {
  readonly page: Page;
  readonly logInLink: Locator;
  readonly userNameLink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.logInLink = page.getByRole('link', { name: 'Log in' });
    this.userNameLink = page.locator('#nameofuser');
  }

  async openTheLogInModal() {
    await this.logInLink.click();
  }

}