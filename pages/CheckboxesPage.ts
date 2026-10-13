import {Locator, Page  } from '@playwright/test';   

export class CheckboxesPage {  
    readonly page: Page;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.checkbox1 = page.getByLabel('checkbox 1');
        this.checkbox2 = page.getByLabel('checkbox 2');
    }
    async open() {
        await this.page.goto('/checkboxes');
    }   
    async checkCheckbox1() { 
        await this.checkbox1.check();
    };
    async checkCheckbox2() {
        await this.checkbox2.uncheck();
    }
}