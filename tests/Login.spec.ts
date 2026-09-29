import {test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test('verify login successful with valid credentials', async ({ page }) => {
    
    const loginpage = new LoginPage(page);
    await loginpage.open();
    await loginpage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    await expect(loginpage.securepageheading).toBeVisible();
});