import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly productsTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.productsTitle = page.locator('.title');
  }

  // Navigate to application
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Perform login
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Verify successful login
  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.productsTitle).toHaveText('Products');
  }

  // Capture screenshot
  async takeScreenshot() {
    await this.page.screenshot({
      path: 'screenshots/successful-login.png',
      fullPage: true
    });
  }
}