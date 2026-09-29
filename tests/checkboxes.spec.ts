import {test, expect} from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

test ('checkboxes1 marks checkbox1 as checked', async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.open();
    await checkboxesPage.checkCheckbox1();
    await expect(checkboxesPage.checkbox1).toBeChecked();
});

test ('checkboxes2 marks it unchecked', async ({ page }) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.open();
    await checkboxesPage.checkCheckbox2();
    await expect (checkboxesPage.checkbox2).not.toBeChecked();
});