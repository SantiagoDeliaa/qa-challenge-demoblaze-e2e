import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage.js';
import { createUser } from '../src/utils/data-generator.js';

test.describe('@e2e @auth', () => {
    test('El usuario se registra y luego inicia sesión', async ({ page }) => {
        const auth = new LoginPage(page);
        const user = createUser();

        await auth.goto('/');
        await auth.signUp(user);
        await auth.page.waitForTimeout(500);
        await auth.login(user);

        // Validate welcome message
        await expect(auth.welcomeMsg).toContainText(user.username);
    });
});
