import {test, expect} from '@playwright/test';

import {FlakyTestPage} from '../pages/FlakyTestPage';

test('status becomes Ready after reloading', async ({page}) => {
const flakyTestPage = new FlakyTestPage(page);

await expect(async () => {
    await flakyTestPage.open();                                   // a fresh load each attempt
    await expect(flakyTestPage.status).toHaveText('Ready', { timeout: 1000 });
}).toPass({ timeout: 15_000 });
});
