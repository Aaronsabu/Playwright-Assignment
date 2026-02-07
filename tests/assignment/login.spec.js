import test from '@playwright/test';
import {ObjManager} from '../pageObject/assignment/ObjManager.js';
import { data } from '../../utils/assignmentData';


test.describe('Login tests', () => {
    test.beforeEach(async({page}) => {
        await page.goto(data.url);
    })

    test('login with successful ids', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.successfulLogin(data.username,data.password);
    })

    test('login with invalid uName', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.invalidUsername(data.password);
    })

    test('login with valid uName and invalid password', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.inValidPassword(data.username);
    })

    test('login with invalid uName and invalid password', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.invalidUserAndPassword();
    })

    test('login and logout', async({page})=> {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        await login.loginLogout(data.username,data.password);
    })
});