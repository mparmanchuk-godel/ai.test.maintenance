Act as a Senior SDET performing a maintenance audit of a Playwright test suite.

Context:
- Folder: tests/
- Reference: tests/main.navigation.professional.spec.ts (gold standard)

Task:
1. Review ALL specs in the tests/ folder
2. Identify:
   - Broken or brittle selectors
   - Redundant or duplicate scenarios
   - Obsolete or irrelevant logic
   - Inconsistent structure vs reference test

3. Suggest a consolidation plan

Output:

## Findings
- File-by-file analysis
- For each file:
  - Issues found
  - Severity (High / Medium / Low)

## Consolidation Plan
- Which tests can be merged
- Which should be removed
- Which should be refactored

## Recommended Target Structure
- Proposed final structure of the test suite
- Naming conventions
- Reuse strategy (POM, helpers)