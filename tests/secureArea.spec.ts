import {test, expect } from '@playwright/test';

test('secure area is accessible with saved auth state', {tag: '@auth' }, async ({ page }) => {
  await page.goto('/secure');
  await expect(page.getByRole('heading', { name: 'Secure Area page for Automation Testing Practice', exact: true })).toBeVisible();
});
