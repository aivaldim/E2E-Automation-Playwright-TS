import { test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

test('log in test', async ({page}) => {
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Welcome admin' }).click();
});