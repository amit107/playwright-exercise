import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo Login Tests', () => {

  test('Login with valid credentials', async ({ page }) => {

    // Create page object
    const loginPage = new LoginPage(page);

    // Navigate to application
    await loginPage.goto();

    // Login
    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    // Verification
    await loginPage.verifySuccessfulLogin();

    // Screenshot
    await loginPage.takeScreenshot();
  });

});