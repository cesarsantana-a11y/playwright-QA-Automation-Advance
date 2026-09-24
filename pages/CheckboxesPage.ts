import {Locator, Page  } from '@playwright/test';   

export class CheckboxesPage {  
    readonly page: Page;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.checkbox1 = page.locator('input[type="checkbox"]').first();
        this.checkbox2 = page.locator('input[type="checkbox"]').last();
    }
    async open() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }   
    async checkCheckbox1() { 
        await this.checkbox1.check();
    };
    async checkCheckbox2() {
        await this.checkbox2.uncheck();
    }
}