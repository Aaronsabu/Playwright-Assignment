import test from '@playwright/test';
import {ObjManager} from '../pageObject/assignment/ObjManager.js';
import { data } from '../../utils/assignmentData';

test.describe('Adding products', () => {
    test.beforeEach(async({page}) => {
        await page.goto(data.url);
    })
    test('adding prod to cart', async({page}) => {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        const prod = objManager.getProd();
        await login.successfulLogin(data.username,data.password);
        await prod.addProdToCart(data.prodName);
    })

    test('Product purchasing', async({page}) => {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        const prod = objManager.getProd();
        const thank = objManager.getThankyou();
        await login.successfulLogin(data.username,data.password);
        await prod.prodPurchase(data.prodName);
        await thank.thanks(data.thankMsg);
    })

    test('Product in Monitor', async({page}) => {
        const objManager = new ObjManager(page);
        const login = objManager.getLogin();
        const prod = objManager.getProd();
        const thank = objManager.getThankyou();
        await login.successfulLogin(data.username,data.password);
        await prod.prodInMonitor();
        await thank.thanks(data.thankMsg);
    })
})