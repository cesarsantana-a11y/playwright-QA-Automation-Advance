import {Page, Locator} from '@playwright/test';

export class ContextMenuPage {
    readonly page: Page;
    readonly hotSpot: Locator;

    constructor (page: Page) {
        this.page = page;
        this.hotSpot = page.locator('#hot-spot');
    }

    async open() {
        await this.page.goto('/context-menu');
    }
    async rightClickOnHotSpot() {
        await this.hotSpot.click({button: 'right'});
    }
};