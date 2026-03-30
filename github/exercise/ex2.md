Act as a Senior SDET performing a diagnostic review of a Playwright test.

Context:
- File under review: tests/main.navigation.spec.ts
- Stack: TypeScript + Playwright
- Source of truth: manual test case
  "Main Page Navigation Buttons: Docs, API, Community"
  Requirements:
  - Buttons are visible
  - Accessible via role + name
  - Navigate to correct pages

Task:
Analyze the test and identify all issues that increase flakiness, maintenance cost, or reduce test quality.

IMPORTANT:
- Do NOT fix the code
- Do NOT rewrite the test
- Only analyze and report issues

Focus areas:
1. Selector quality
   - Role-based vs brittle selectors
2. Synchronization
   - Fixed waits vs assertion-based waits
3. Accessibility validation
   - Missing role/name checks
4. Test coverage
   - Missing navigation validation
5. Readability & structure
6. Duplication / maintainability risks

Output:
Generate a report file:

// path: docs/legacy-test-analysis.md

Include:

## Summary
- High-level assessment

## Prioritized Issues
- Categorized list:
  - High / Medium / Low
  - With category (e.g., Selector, Sync, Coverage)

## Impact
- Short notes per issue (e.g., "fixed waits → flakiness")

## Additional Findings
- Issues not explicitly introduced but still present:
  - Missing navigation checks
  - Missing accessibility validation
  - Potential duplication risks

## Conclusion
- Overall quality assessment

Final note (MANDATORY):
- Include line: "No code changes applied in Chapter 2."