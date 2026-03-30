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
- `.github/workflows/`: CI/CD pipelines
  - `playwright-tests.yml`: Complete CI pipeline with testing, security scanning, notifications, and GitHub Pages publishing
- `pages/`: Page Object classes (e.g., PlaywrightHomePage.ts)
- `tests/`: Test specification files
  - `gettingStarted.spec.ts`: Basic getting started tests
  - `main.navigation.refactored.spec.ts`: Professional navigation tests
  - `main.navigation.spec.ts`: Legacy test (for comparison)
- `Test-cases/`: Manual test cases
- `playwright.config.ts`: Playwright configuration (Chromium only, with CI workers)
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

## CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow (`.github/workflows/playwright-tests.yml`) that:

- Runs tests on pull requests to main branch
- Performs parallel test execution with 3 workers in CI
- Includes security vulnerability scanning
- Publishes HTML test reports to GitHub Pages with historical data
- Sends Microsoft Teams notifications on test failures
- Cancels in-progress runs for the same PR

### GitHub Pages

Test reports are automatically published to GitHub Pages on successful main branch runs, including:
- HTML test reports with interactive dashboards
- Historical test run data in `history.json`
- Trace files for debugging

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
- Comprehensive CI/CD with security and reporting
- GitHub Pages integration for test analytics

## Contributing

- Follow TypeScript best practices
- Use POM for new tests
- Add manual test cases for features
- Update documentation for changes
- Ensure tests pass in CI before merging