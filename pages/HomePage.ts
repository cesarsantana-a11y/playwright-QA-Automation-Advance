import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly welcomeHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeHeading = page.getByRole('heading', {
      name: 'Welcome to the-internet',
    });
  }

  async open() {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }
}
