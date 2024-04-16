import { type Page } from "@playwright/test";
import HeaderPage from "./header/header.page";
import LogInPage from "./login/login.page";

export default class PageFactory {
  readonly page: Page;
  readonly logInPage: LogInPage;
  readonly headerPage: HeaderPage;

  constructor(page: Page) {
    this.page = page;
    this.logInPage = new LogInPage(page);
    this.headerPage = new HeaderPage(page);
  }
}
