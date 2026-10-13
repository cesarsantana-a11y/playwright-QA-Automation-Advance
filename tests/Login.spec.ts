import {test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test.use ({ storageState: { cookies: [], origins: [] } });

test('verify login successful with valid credentials', async ({ page }) => {
    
    const loginpage = new LoginPage(page);
    await loginpage.open();
    await loginpage.login('practice', 'SuperSecretPassword!');
    await expect(page).toHaveURL('/secure');
    await expect(loginpage.securepageheading).toBeVisible();
});