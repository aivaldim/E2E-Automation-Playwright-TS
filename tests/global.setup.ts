import { test as setup, type Page } from '@playwright/test';

setup('Before All', async ({ page }) => {
  console.log('Executing the @BeforeAll...');
});