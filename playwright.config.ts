import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

// ref: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  timeout: 30 * 1000, // timeout per test
  testDir: './e2e', // test directory
  retries: 0, // if a test fails, retry it additional 2 times
  outputDir: 'test-results/', // artifacts folder where screenshots, videos, and traces are stored.

  use: {
    baseURL: `http://localhost`,
    headless: true,

    // ref: https://playwright.dev/docs/trace-viewer
    trace: 'retry-with-trace',

    // ref: https://playwright.dev/docs/api/class-browser#browser-new-context
    contextOptions: {
      ignoreHTTPSErrors: true,
    },
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
};

export default config;