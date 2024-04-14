import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 30000,
  use: {
    baseURL: 'https://www.demoblaze.com',
    headless: false,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  projects: [
    {name: 'BeforeAll',
      testDir: './utils',
      testMatch: 'global.setup.ts'
    },
    {name: 'AfterAll',
      testDir: './utils',
      testMatch: 'global.teardown.ts'
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['BeforeAll'],
      teardown: 'AfterAll'
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['BeforeAll'],
      teardown: 'AfterAll'
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['BeforeAll'],
      teardown: 'AfterAll'
    },
  ]
});
