// npx playwright test src/tests/navbar.e2e.ts --headed
// npm run test:e2e
import { test, expect, type Page } from '@playwright/test';


test.describe("Navbar UI Navigation", () => {

  test('Home page loads by default', async ({ page }: { page: Page }) => {
    await page.goto('http://localhost:5173');

    // Pause here to interact with the browser manually
    //await page.pause();

    await expect(page.locator('h1')).toHaveText('Home Page');
  });

});
