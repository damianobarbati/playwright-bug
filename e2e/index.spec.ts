import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('https://google.com');
  await expect(page).toHaveURL(/\/$/);

  await page.fill('input[name=q]', 'kromin');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/$/);
});
