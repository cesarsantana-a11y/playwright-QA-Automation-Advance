import {test, expect } from '@playwright/test';

test('secure area is accessible with saved auth state', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
});
