import {test, expect} from '@playwright/test';

import {ContextMenuPage} from '../pages/ContextMenuPage';

test('opens context menu and performs right click', async ({page}) => {
    const contextMenuPage = new ContextMenuPage(page);
    await contextMenuPage.openContextMenu();
    await contextMenuPage.rightClickOnContextMenu();
});