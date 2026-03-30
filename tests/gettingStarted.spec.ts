import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test.describe('Playwright.dev Get Started Guide', () => {
  test('homepage has correct title and Get Started link', async ({ page }) => {
    const homePage = new PlaywrightHomePage(page);

    await homePage.goto();

    await expect(page).toHaveTitle(/Playwright/);
    await expect(homePage.getStartedLink).toBeVisible();
  });

  test('Get Started link navigates to Installation page', async ({ page }) => {
    const homePage = new PlaywrightHomePage(page);

    await homePage.goto();
    await homePage.clickGetStarted();

    await expect(page).toHaveURL(/.*intro/);
    await expect(homePage.installHeading).toBeVisible();
  });
});
