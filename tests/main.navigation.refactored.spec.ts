// path: tests/main.navigation.refactored.spec.ts

import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test.describe('Main Navigation', () => {
  test('Navigation buttons are visible and accessible', async ({ page }) => {
    const homePage = new PlaywrightHomePage(page);

    await test.step('Navigate to homepage', async () => {
      await homePage.goto();
    });

    await test.step('Verify navigation buttons are visible', async () => {
      await expect(homePage.docsLink()).toBeVisible();
      await expect(homePage.apiLink()).toBeVisible();
      await expect(homePage.communityLink()).toBeVisible();
    });

    await test.step('Verify accessibility attributes', async () => {
      await expect(homePage.docsLink()).toHaveAttribute('role', 'link');
      await expect(homePage.apiLink()).toHaveAttribute('role', 'link');
      await expect(homePage.communityLink()).toHaveAttribute('role', 'link');
    });
  });

  test('Navigation links navigate to correct pages', async ({ page }) => {
    const homePage = new PlaywrightHomePage(page);

    await test.step('Navigate to homepage', async () => {
      await homePage.goto();
    });

    await test.step('Click Docs and verify navigation', async () => {
      await homePage.clickDocs();
      await expect(page).toHaveURL(/.*docs/);
    });

    await test.step('Return to homepage and click API', async () => {
      await page.goto('/');
      await homePage.clickApi();
      await expect(page).toHaveURL(/.*api/);
    });

    await test.step('Return to homepage and click Community', async () => {
      await page.goto('/');
      await homePage.clickCommunity();
      await expect(page).toHaveURL(/.*community/);
    });
  });
});