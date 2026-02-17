// playwright.config.ts

//to reivew HTML report: npx playwright show-report

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  timeout: 30000,
  use: {
    headless: false,          // for seeing the browser
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 500             // slow down actions by 500ms
    },
    screenshot: 'only-on-failure',  // takes screenshots only when a test fails
    video: 'retain-on-failure',     // record videos only if test fails
    trace: 'on-first-retry',        // captures detailed traces for failed tests
  },
  reporter: [['html', { open: 'never' }]], // generates an HTML report
});
