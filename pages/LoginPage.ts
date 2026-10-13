import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    
    readonly usernameinput: Locator;
    readonly passwordinput: Locator;
    readonly loginbutton: Locator;
    readonly securepageheading: Locator;


    constructor(page : Page) {
        this.page = page;
        this.usernameinput = page.getByLabel('Username' );
        this.passwordinput = page.getByLabel('Password' );
        this.loginbutton = page.getByRole('button', {name: 'Login'});
        this.securepageheading = page.getByRole('heading', { name: 'Secure Area page for Automation Testing Practice'});
    }

    async open() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        await this.usernameinput.fill(username);
        await this.passwordinput.fill(password);
        await this.loginbutton.click();
    }   
}