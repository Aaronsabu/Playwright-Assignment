import test, { expect } from '@playwright/test';

export class SignupPage {
    constructor(page) {
        this.page=page;
        this.signup = page.locator('#signin2');
        this.username = page.locator('#sign-username')
        this.password = page.locator('#sign-password')
    }

    async goToSignUp() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async signingUp() {
        await this.signup.click();  //clicking signup
        await this.username.fill('aarsabu');
        await this.password.fill('aar1234');
        await this.page.getByRole('button', {name: 'Sign up'}).click();
    }

    async signupAndClose(username,password) {
        await this.signup.click();  //clicking signup
        await this.username.fill(username);
        await this.password.fill(password);
        await this.page.on('dialog', dialog=>dialog.dismiss());
    }
}



