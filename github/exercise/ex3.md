Act as a Senior SDET refactoring a Playwright test based on an existing diagnostic report.

Context:
- Original degraded file: tests/main.navigation.spec.ts
- Analysis report: docs/legacy-test-analysis.md
- Stack: TypeScript + Playwright

Manual test case (source of truth):
"Main Page Navigation Buttons: Docs, API, Community"
Requirements:
- Buttons are visible
- Accessible via role + name
- Navigate to correct pages

Task:
Refactor and repair the test to a clean, maintainable, production-quality version.

Requirements:
1. Fix selector quality
   - Replace brittle selectors with role/label-based locators (getByRole, getByLabel, etc.)

2. Fix synchronization
   - Remove all fixed waits (e.g., waitForTimeout)
   - Use Playwright expect assertions for implicit waiting

3. Improve test structure
   - Use clear test steps (test.step)
   - Improve naming readability
   - Reduce duplication

4. Improve validation
   - Assert visibility of navigation buttons
   - Assert correct navigation (URL or page content)
   - Include at least one accessibility-related assertion

5. Apply basic Page Object Model principles
   - Extract repeated navigation logic into a reusable helper or Page Object

Output:
1. Refactored test file:

// path: tests/main.navigation.refactored.spec.ts

2. The code must:
- Be clean and readable
- Follow Playwright best practices
- Be runnable without additional explanation