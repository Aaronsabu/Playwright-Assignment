import {test, expect} from '@playwright/test'

export class Login{
    constructor(page) {
        this.page=page;
        this.loginButton = page.locator('#login2')
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.login = page.getByRole('button', {name: 'Log in'})
        this.logout = page.locator('#logout2');
        this.nameOfUser = page.locator('#nameofuser')
    }

    async successfulLogin(username,password) {
        await this.loginButton.click()
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
        await expect(this.nameOfUser).toContainText(`Welcome ${username}`); //checking the username is displaying after logging in
    }

    async invalidUsername(password) {
        await this.loginButton.click()
        await this.username.fill('a1');
        await this.password.fill(password);
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.login.click();
        const dialog = await dialogPromise;
        expect(dialog.message()).toBe('Wrong username.');
        await dialog.accept();
    }

    async inValidPassword(username) {
        await this.loginButton.click()
        await this.username.fill(username);
        await this.password.fill('1');
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.login.click();
        const dialog = await dialogPromise;
        expect(dialog.message()).toBe('Wrong password.');
        await dialog.accept();
    }

    async invalidUserAndPassword() {
        await this.loginButton.click()
        await this.username.fill('a1');
        await this.password.fill('1');
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.login.click();
        const dialog = await dialogPromise;
        expect(dialog.message()).toBe('Wrong password.');
        await dialog.accept();

        // this.page.on('dialog', async (dialog)=>{
        //     console.log(dialog.message());   //to print the message shown in pop up
        //     expect(dialog.message()).toBe('Wrong username and password');
        //     await dialog.accept();
        // })
    }

    async loginLogout(username,password) {
        await this.loginButton.click() //login
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
        await this.logout.click(); //log out
    }
}