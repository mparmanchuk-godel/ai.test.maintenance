import { type Page, type Locator } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly installHeading: Locator;
  readonly pageTitle: Locator;
  readonly docsLink: Locator;
  readonly apiLink: Locator;
  readonly communityLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installHeading = page.getByRole('heading', { name: 'Installation' });
    this.pageTitle = page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing' });
    this.docsLink = page.getByRole('link', { name: 'Docs' });
    this.apiLink = page.getByRole('link', { name: 'API' });
    this.communityLink = page.getByRole('link', { name: 'Community' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  docsLink() {
    return this.docsLink;
  }

  apiLink() {
    return this.apiLink;
  }

  communityLink() {
    return this.communityLink;
  }

  async clickDocs() {
    await this.docsLink.click();
  }

  async clickApi() {
    await this.apiLink.click();
  }

  async clickCommunity() {
    await this.communityLink.click();
  }
}
