import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage.js';
import { ProductPage } from '../src/pages/productPage.js';
import { CartPage } from '../src/pages/cartPage.js';
import { createOrderData } from '../src/utils/data-generator.js';
import product from '../src/fixtures/productData.json' assert { type: 'json' };

test.describe('@e2e @checkout', () => {
    test('El usuario completa una compra y ve confirmación', async ({ page }) => {
        const home   = new HomePage(page);
        const prod   = new ProductPage(page);
        const cart   = new CartPage(page);

        // 1) Add product
        await home.goto('/');
        await home.selectProductByName(product.productName);
        await prod.addToCart();

        // 2) Checkout
        await cart.goto();
        const modal = await cart.placeOrder();
        const order = createOrderData();
        await modal.completeForm(order);

        // 3) Confirmation
        await expect(modal.confirmation).toContainText('Thank you');
        await expect(modal.confirmation).toContainText(String(product.expectedPrice));
        await modal.okBtn.click();
    });
});
