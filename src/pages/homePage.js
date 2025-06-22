import { BasePage } from '../pages/basePage.js';

export class HomePage extends BasePage {
    async selectProductByName(name) {
        await this.locator('.card:has-text("' + name + '")').click();
    }
}
