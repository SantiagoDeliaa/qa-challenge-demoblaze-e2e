import { BasePage } from '../pages/basePage.js';

export class ProductPage extends BasePage {
    get addToCartBtn() {
        return this.locator('a.btn.btn-success:has-text("Add to cart")');
    }

    async addToCart() {
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.addToCartBtn.click(),
        ]);
        await dialog.accept();          
    }
}