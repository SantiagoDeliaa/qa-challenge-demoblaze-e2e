import { BasePage } from '../pages/basePage.js';

export class LoginPage extends BasePage {
    get signUpNav() { return this.locator('#signin2'); }
    get loginNav()  { return this.locator('#login2'); }

    // -------------- Sign-up modal -------------
    get signUpUser() { return this.locator('#sign-username'); }
    get signUpPass() { return this.locator('#sign-password'); }
    get signUpBtn()  { return this.locator('button:has-text("Sign up")'); }

    // -------------- Login modal ---------------
    get loginUser() { return this.locator('#loginusername'); }
    get loginPass() { return this.locator('#loginpassword'); }
    get loginBtn()  { return this.locator('button:has-text("Log in")'); }

    // ---------------- Logged UI ----------------
    get welcomeMsg() { return this.locator('#nameofuser'); }

    async signUp(user) {
        await this.signUpNav.click();
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.signUpUser.fill(user.username).then(
                () => this.signUpPass.fill(user.password)
            ).then(
                () => this.signUpBtn.click()
            ),
        ]);
        await dialog.accept();          
    }

    async login(user) {
        await this.loginNav.click();
        await this.loginUser.fill(user.username);
        await this.loginPass.fill(user.password);

        const dialogPromise = this.page
            .waitForEvent('dialog', { timeout: 3_000 }) 
            .catch(() => null);                         

        await Promise.all([ this.loginBtn.click(), dialogPromise ]);
        if (await dialogPromise) (await dialogPromise).accept();
    }
}
