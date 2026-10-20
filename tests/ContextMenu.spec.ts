import {test, expect} from '@playwright/test';

import {ContextMenuPage} from '../pages/ContextMenuPage';

test('Right clicks on hot spot and asserts alert message', async ({page}) => {
    const contextMenuPage = new ContextMenuPage(page);
    await contextMenuPage.open();
    let alertMessage = '';

    page.on('dialog', async dialog => {
        alertMessage = dialog.message();
        await dialog.accept();
    });
    await contextMenuPage.rightClickOnHotSpot();
    expect(alertMessage).toBe('You selected a context menu');
});