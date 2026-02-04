import { expect } from '@playwright/test';

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.cart = page.locator('#cartur');

    }

    async details() {
        await this.page.locator('#name').fill('Aaron');
        await this.page.locator('#country').fill('India');
        await this.page.locator('#city').fill('Kottayam');
        await this.page.locator('#card').fill('123456789012');
        await this.page.locator('#month').fill('February');
        await this.page.locator('#year').fill('2026');
    }

    async addProdToCart(prodName) {
        const prodCount = await this.page.locator('.row .card-block').count();
        for(let i=0; i<prodCount;i++) 
        {
            let contents = await this.page.locator('.card-title').nth(i).textContent()
            if(contents.trim()  === prodName)
            {
                await this.page.getByRole('link', {name: `${prodName}`}).click();
                await this.page.getByRole('link', {name: 'Add to cart'}).click(); //adding prod to cart

                this.page.on('dialog', async(dialog) => {
                    console.log(dialog.message());   //to print the message shown in pop up
                    expect(dialog.message()).toBe('Product added.');
                    await dialog.accept();
                })
                break
            }
        }
    }

    async prodPurchase(prodName) {
        await this.addProdToCart(prodName);
        await this.cart.click();
        const cartProd = await this.page.locator('.success td').nth(1).textContent();
        console.log(cartProd);
        expect(cartProd).toBe(prodName);

        await this.page.getByRole('button', {name: 'Place Order'}).click();

        await this.details();
        await this.page.getByRole('button', {name: 'Purchase'}).click();
    }

    async prodInMonitor() {

        await this.page.getByRole('link', {name: 'Monitors'}).click(); 
        await this.page.locator('.hrefch', { hasText: 'Apple monitor 24' }).waitFor();
        const product = await this.page.locator('.hrefch').last().textContent();
        await this.page.locator('.hrefch').last().click();
        await this.page.getByRole('link', {name: 'Add to cart'}).click();
        this.page.on('dialog', async(dialog) => {
            console.log(dialog.message());   //to print the message shown in pop up
            expect(dialog.message()).toBe('Product added.');
            await dialog.accept();
        })
        await this.cart.click();
        const cartProd = await this.page.locator('.success td').nth(1).textContent();
        console.log(cartProd);
        expect(cartProd).toBe(product);

        await this.page.getByRole('button', {name: 'Place Order'}).click();

        await this.details();
        await this.page.getByRole('button', {name: 'Purchase'}).click();

    }
}