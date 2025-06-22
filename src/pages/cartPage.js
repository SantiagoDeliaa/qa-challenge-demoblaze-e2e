import { BasePage } from '../pages/basePage.js';
import { CheckoutModal } from '../pages/checkoutModalPage.js';

export class CartPage extends BasePage {
    async goto() {
        await super.goto('/cart.html');
    } 

    get cartTable() {
        return this.locator('#tbodyid');
    }

    get totalPrice() {
        return this.locator('#totalp');
    }

    rowFor(productName) {
        return this.locator(`#tbodyid tr:has-text("${productName}")`);
    }

    get placeOrderBtn() {
        return this.locator('button:has-text("Place Order")');
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
        return new CheckoutModal(this.page);
    }
}
