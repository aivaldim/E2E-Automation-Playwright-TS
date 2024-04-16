import { test as setup } from '@playwright/test';

setup('Before All', async ({ page }) => {
  console.log('Executing the @BeforeAll...');
});