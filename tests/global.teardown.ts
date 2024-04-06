import { test as teardown } from '@playwright/test';

teardown('After Each', async ({ }) => {
  console.log('Executing the @AfterEach...');
});