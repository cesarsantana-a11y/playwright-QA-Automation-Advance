import {Page, Locator } from 'playwright/test';

export class FlakyTestPage {
readonly page: Page;
readonly status: Locator;

constructor(page: Page) {
    this.page = page;
    this.status = page.locator('#status');
}

    async open() {
        await this.page.goto('/flaky-test');
    }
}
