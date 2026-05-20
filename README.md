# Playwright TypeScript Automation Framework (POM)

This project is an automated UI testing framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.  
It automates the login functionality of the SauceDemo application.

---

## 🚀 Tech Stack

- Playwright Test Runner
- TypeScript
- Node.js
- Page Object Model (POM)

---

## 📌 Application Under Test

- URL: https://www.saucedemo.com/
- Username: `standard_user`
- Password: `secret_sauce`

project-root/
│
├── pages/
│ └── LoginPage.ts
│
├── tests/
│ └── login.spec.ts
│
├── screenshots/
│ └── successful-login.png
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
2. Install Playwright browsers
npx playwright install
▶️ Running Tests
Run all tests
npx playwright test
Run tests in headed mode
npx playwright test --headed
Run a specific test file
npx playwright test tests/login.spec.ts
View HTML report
npx playwright show-report
🧪 Test Scenario
Login Flow

This automation test performs the following steps:

Launch browser
Navigate to SauceDemo website
Enter valid username and password
Click Login button
Verify successful login:
URL contains /inventory.html
"Products" page is displayed
Capture screenshot after successful login
🧱 Page Object Model (POM)

This framework follows POM design pattern:

LoginPage.ts contains:
Locators
Actions (login, navigation)
Assertions

This improves:

Code reusability
Maintainability
Readability
📸 Screenshots

Screenshots are saved in:

screenshots/successful-login.png
📊 Reports

Playwright generates HTML reports automatically.

To view report:

npx playwright show-report
🔧 Configuration

Key settings in playwright.config.ts:

Browser: Chromium
Headless: false
Screenshot: only-on-failure
Video: retain-on-failure
Trace: on retry
📌 Best Practices Used
Page Object Model (POM)
TypeScript strict typing
Stable selectors (ID-based)
Proper assertions using expect
Clean project structure
Playwright auto-waiting features
🚀 Future Enhancements
Add more pages (Cart, Checkout, Inventory)
Data-driven testing
Environment configuration (.env support)
CI/CD integration (GitHub Actions / Jenkins)
Allure reporting
Parallel execution
API + UI hybrid testing
👨‍💻 Author

Playwright Automation Framework created for Assessment practice.
---

## 📂 Project Structure
