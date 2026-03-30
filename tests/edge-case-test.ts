test('Navigation edge case: link accessibility and enabled state (TC-NAV-001)', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await test.step('Navigate to homepage', async () => {
    await homePage.goto();
  });

  await test.step('Verify Docs link is enabled and accessible', async () => {
    await expect(homePage.docsLink()).toBeEnabled();
    await expect(homePage.docsLink()).toHaveAttribute('aria-label', 'Documentation');
  });

  await test.step('Verify link does not have disabled attributes', async () => {
    await expect(homePage.docsLink()).not.toHaveAttribute('aria-disabled', 'true');
    await expect(homePage.docsLink()).not.toHaveAttribute('disabled');
  });
});