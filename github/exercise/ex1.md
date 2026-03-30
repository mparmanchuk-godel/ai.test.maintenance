Act as a Senior SDET working with TypeScript + Playwright using Page Object Model.

Task:
1. Create a manual test case for:
   "The main page should display navigation buttons: Docs, API, Community."

2. Then create an automated Playwright test.

Requirements:

Manual test case:
- Save in a new file:
  // path: ai.test.maintenance/Test-cases/main.navigation.md
- Include:
  - Title
  - Preconditions
  - Test steps (step-by-step)
  - Expected results

Automation:
- Create new test file:
  // path: ai.test.maintenance/tests/main.navigation.spec.ts
- Use existing Page Object pattern (based on PlaywrightHomePage if suitable, or create MainPage if needed)

Page Object:
- Add methods:
  - docsLink()
  - apiLink()
  - communityLink()

Test:
- Use structure:
  // Initialization
  // User actions
  // Verification

- Verify:
  - All 3 navigation elements are visible
- Use role-based locators (e.g., getByRole('link', { name: 'Docs' }))
- Do NOT check navigation yet (only presence + visibility)

Output:
1. Manual test case file
2. Page Object (new or updated)
3. Test file