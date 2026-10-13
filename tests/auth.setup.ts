import {test as setup, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('Authenticate', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.open();
    await loginpage.login('practice', 'SuperSecretPassword!');
    await expect(page).toHaveURL('/secure');
    await expect(loginpage.securepageheading).toBeVisible();
    await page.context().storageState({path: authFile});
});