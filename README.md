# AI Test Maintenance

This project contains automated end-to-end tests for the Playwright website (https://playwright.dev) using Playwright and the Page Object Model (POM) pattern. It demonstrates best practices in test automation, including refactoring, maintenance audits, and professional code quality.

## Project Structure

- `docs/`: Documentation and reports
  - `audit-report.md`: Professional audit findings
  - `legacy-test-analysis.md`: Analysis of degraded test code
  - `maintenance-audit.md`: Suite maintenance review
  - `navigation-improvement.patch`: Unified diff for test improvements
  - `refactoring-summary.md`: Before/after comparison
  - `suite-maintenance-summary.md`: Overall maintenance status
- `github/exercise/`: Exercise instructions and prompts
- `pages/`: Page Object classes (e.g., PlaywrightHomePage.ts)
- `tests/`: Test specification files
  - `gettingStarted.spec.ts`: Basic getting started tests
  - `main.navigation.refactored.spec.ts`: Professional navigation tests
  - `main.navigation.spec.ts`: Legacy test (for comparison)
- `Test-cases/`: Manual test cases
- `playwright.config.ts`: Playwright configuration (Chromium only)
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

Run specific test:
```bash
npx playwright test tests/main.navigation.refactored.spec.ts
```

View test report:
```bash
npm run test:report
```

## Test Structure

Tests follow the Page Object Model with clear sections:
- Initialization
- User actions
- Verification

## Documentation

- **Audit Reports**: Detailed analysis of test quality and maintenance issues
- **Refactoring Summary**: Comparison of legacy vs. professional test code
- **Patches**: Unified diffs for code improvements

## Best Practices Demonstrated

- Role-based locators for accessibility
- Page Object Model for maintainability
- Test.step for clear test structure
- Strong assertions with auto-waiting
- Traceability with test case IDs
- Comprehensive documentation

## Contributing

- Follow TypeScript best practices
- Use POM for new tests
- Add manual test cases for features
- Update documentation for changes