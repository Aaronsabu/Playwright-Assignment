import test, { expect } from '@playwright/test';
import { ObjManager } from './pageObject/assignment/objManager';

const url = 'https://www.demoblaze.com/'
const username ='aaronsabu';
const password = 'aaron123';
const prodName = 'Nexus 6';
const thankMsg = 'Thank you for your purchase!'


test('sign up', async({page})=> {
    const objManager = new ObjManager(page);
    const signUp = objManager.getSignUp();
    await signUp.goToSignUp();
    await signUp.signingUp();
})

test('sign up and close', async({page})=> {
    const objManager = new ObjManager(page);
    const signUp = objManager.getSignUp();
    await signUp.goToSignUp();
    await signUp.signupAndClose(username,password);
})

test.describe('Login tests', () => {
    test.beforeEach(async({page}) => {
        await page.goto(url);
    })

    test('login with successful ids', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.successfulLogin(username,password);
    })

    test('login with invalid uName', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.invalidUsername(password);
    })

    test('login with valid uName and invalid password', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.inValidPassword(username);
    })

    test('login with invalid uName and invalid password', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.invalidUserAndPassword();
    })

    test('login and logout', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.loginLogout(username,password);
    })
});

test.describe('Adding products', () => {
    test.beforeEach(async({page}) => {
        await page.goto(url);
    })
    test('adding prod to cart', async({page}) => {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        const prod = objManager.getProd();
        await login.successfulLogin(username,password);
        await prod.addProdToCart(prodName);
    })

    test('Product purchasing', async({page}) => {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        const prod = objManager.getProd();
        const thank = objManager.getThankyou();
        await login.successfulLogin(username,password);
        await prod.prodPurchase(prodName);
        await thank.thanks(thankMsg);
    })

    test('Product in Monitor', async({page}) => {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        const prod = objManager.getProd();
        const thank = objManager.getThankyou();
        await login.successfulLogin(username,password);
        await prod.prodInMonitor();
        await thank.thanks(thankMsg);
    })
})