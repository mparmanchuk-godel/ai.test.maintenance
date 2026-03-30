# AI Test Maintenance

This project contains automated end-to-end tests for the Playwright website (https://playwright.dev) using Playwright and the Page Object Model (POM) pattern.

## Project Structure

- `pages/`: Page Object classes (e.g., PlaywrightHomePage.ts)
- `tests/`: Test specification files
- `Test-cases/`: Manual test cases
- `playwright.config.ts`: Playwright configuration
- `package.json`: Project dependencies and scripts

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

View test report:
```bash
npm run test:report
```

## Test Structure

Tests follow the Page Object Model pattern with clear sections:
- Initialization
- User actions
- Verification

## Contributing

- Use TypeScript for new code
- Follow Playwright best practices
- Add manual test cases for new features
- Update Page Objects as needed