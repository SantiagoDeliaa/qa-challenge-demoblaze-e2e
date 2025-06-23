import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: process.env.CI ? 2 : 0,
    timeout: 60_000,
    reporter: [
        ['list'],
        ['allure-playwright', { detail: true, outputFolder: 'allure-results' }],
    ],
    use: {
        baseURL: 'https://www.demoblaze.com',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        viewport: { width: 1280, height: 720 },
        launchOptions: {
            slowMo: 200,   
        },
    },
    projects: [
        {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
        },
    ],
});



