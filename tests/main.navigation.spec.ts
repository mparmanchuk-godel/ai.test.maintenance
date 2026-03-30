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
});