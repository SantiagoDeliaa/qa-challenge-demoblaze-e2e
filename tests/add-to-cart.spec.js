import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage.js';
import { ProductPage } from '../src/pages/productPage.js';
import { CartPage } from '../src/pages/cartPage.js';
import product from '../src/fixtures/productData.json' assert { type: 'json' };

test.describe('@smoke @addToCart', () => {
    test('El usuario agrega un producto y lo ve en el carrito', async ({ page }) => {
        const home   = new HomePage(page);
        const prod   = new ProductPage(page);
        const cart   = new CartPage(page);

        // Home
        await home.goto('/');
        await home.selectProductByName(product.productName);

        // Product detail
        await prod.addToCart();

        // Cart
        await cart.goto();
        await expect(cart.rowFor(product.productName)).toBeVisible();
        await expect(cart.totalPrice).toHaveText(String(product.expectedPrice));
    });
});


