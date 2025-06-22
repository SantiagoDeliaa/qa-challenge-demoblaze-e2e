import { BasePage } from '../pages/basePage.js';

export class CheckoutModal extends BasePage {
    get nameInput()     { return this.locator('#name'); }
    get countryInput()  { return this.locator('#country'); }
    get cityInput()     { return this.locator('#city'); }
    get cardInput()     { return this.locator('#card'); }
    get monthInput()    { return this.locator('#month'); }
    get yearInput()     { return this.locator('#year'); }
    get purchaseBtn()   { return this.locator('button:has-text("Purchase")'); }
    get confirmation()  { return this.locator('.sweet-alert.showSweetAlert'); }
    get okBtn()         { return this.locator('button:has-text("OK")'); }

    async completeForm(order) {
        await this.nameInput.fill(order.name);
        await this.countryInput.fill(order.country);
        await this.cityInput.fill(order.city);
        await this.cardInput.fill(order.card);
        await this.monthInput.fill(order.month);
        await this.yearInput.fill(order.year);
        await this.purchaseBtn.click();
    }
}