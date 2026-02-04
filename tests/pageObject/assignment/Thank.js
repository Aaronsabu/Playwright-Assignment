import {expect} from '@playwright/test';

export class Thank {
    constructor(page) {
        this.page=page
        this.msg = page.locator('.sweet-alert h2')
    }

    async thankYou(thankyou) {
        await expect(this.msg).toHaveText(thankyou); //checking that text is present or not
    }
}

