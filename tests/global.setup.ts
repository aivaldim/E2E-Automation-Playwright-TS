import { test as setup } from '@playwright/test';

setup('Before Each', async ({ }) => {
  console.log('Executing the @BeforeEach...');
});