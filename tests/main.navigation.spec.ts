import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test.describe('Main Navigation', () => {
  test('Navigation buttons are visible on main page', async ({ page }) => {
    // Initialization
    const homePage = new PlaywrightHomePage(page);

    // User actions
    await homePage.goto();

    // Verification
    await expect(homePage.docsLink()).toBeVisible();
    await expect(homePage.apiLink()).toBeVisible();
    await expect(homePage.communityLink()).toBeVisible();
  });

  test('Navigation links work correctly', async ({ page }) => {
    // Initialization
    const homePage = new PlaywrightHomePage(page);

    // User actions
    await homePage.goto();
    await homePage.clickDocs();
    await page.waitForTimeout(2000);

    // Verification
    await expect(page).toHaveURL(/.*docs/);

    // User actions
    await page.goto('/'); await homePage.clickApi();

    // Verification
    await expect(page).toHaveURL(/.*api/);

    // User actions
    await page.goto('/'); await homePage.clickCommunity();

    // Verification
    await expect(page).toHaveURL(/.*community/);
  });
});