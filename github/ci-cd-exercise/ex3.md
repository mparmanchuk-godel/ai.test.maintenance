Act as a Senior SDET extending a production-ready GitHub Actions workflow.

Context:
- Existing file: .github/workflows/playwright-tests.yml
- The workflow already contains a job: playwright-tests

Task:
Add a NEW job named: security-scan

Requirements:

Purpose
- Perform dependency vulnerability scanning using yarn audit

Execution
- Must run in parallel with playwright-tests (no needs/dependencies)

Behavior
- Fail the job if HIGH or CRITICAL vulnerabilities are found
- Use strict failure handling (continue-on-error: false)
- Ensure the job blocks PR merge if vulnerabilities exist

Implementation Details
- Use ubuntu-latest
- Use actions/setup-node@v4 with:
  - Node.js LTS
  - cache: yarn
- Include steps (in order):
  1. checkout
  2. setup-node
  3. install dependencies (yarn install --immutable --immutable-cache --check-cache)
  4. run yarn audit with severity filtering (high/critical)

Reporting
- Generate a concise vulnerability summary
- Output it to GitHub Actions summary using:
  $GITHUB_STEP_SUMMARY

Formatting
- Keep YAML consistent with existing workflow
- Use clean, production-ready structure

STRICT CONSTRAINTS
- Do NOT modify existing playwright-tests job
- Only ADD the new job
- No restructuring of existing jobs

Output format (STRICT)
- Return ONLY the full updated YAML file
- No explanations
- No extra text