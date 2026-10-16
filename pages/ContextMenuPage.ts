import {Page, Locator} from '@playwright/test';

export class ContextMenuPage {
    readonly page: Page;
    readonly contextMenu: Locator;

    constructor (page: Page) {
        this.page = page;
        this.contextMenu = page.locator('#hot-spot');
    }

    async openContextMenu() {
        await this.page.goto('/context-menu');
    }
    async rightClickOnContextMenu() {
        await this.contextMenu.click({button: 'right'});
    }
};