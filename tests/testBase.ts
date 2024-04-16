import { test as base } from "@playwright/test";
import PageFactory from "../pages/pageFactory";

type Fixtures = {
  pageFactory: PageFactory;
};

export const test = base.extend<Fixtures>({
  pageFactory: async ({ page }, use) => {
    const pageFactory = new PageFactory(page);
    await pageFactory.page.goto('/');
    await use(pageFactory);
  },
});

export { expect } from "@playwright/test";
