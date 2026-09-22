import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

test ('homepage POM', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open();
  await expect(homePage.welcomeHeading).toBeVisible();

});