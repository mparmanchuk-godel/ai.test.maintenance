Act as a Senior SDET enhancing an existing GitHub Actions workflow with robust failure notifications.

Context:
- Existing file: .github/workflows/playwright-tests.yml
- The workflow is already production-ready and must NOT be altered except for adding notifications

Task:
Update the workflow to add Microsoft Teams failure notifications.

Requirements:

Notification Behavior
- Send notification ONLY when the workflow fails:
  if: failure()
- Must run regardless of previous step results (placed at the end of the job)

Message Content (MANDATORY)
Include:
- Pull Request title
- PR author
- Branch name
- Direct link to the failed workflow run

Secrets
- Use GitHub secret:
  TEAMS_WEBHOOK_URL

Implementation Details
- Add a SINGLE final step in the existing job
- Use a standard HTTP POST (e.g., curl) to send JSON payload to Teams webhook
- Format message clearly (simple text or JSON MessageCard is acceptable)
- Ensure all required GitHub context variables are correctly referenced:
  - github.event.pull_request.title
  - github.event.pull_request.user.login
  - github.head_ref
  - github.run_url

STRICT CONSTRAINTS
- Do NOT modify any existing steps
- Do NOT reorder steps
- Do NOT remove anything
- Only append the notification step at the end

Output format (STRICT)
- Return ONLY the full updated YAML file
- No explanations
- No markdown text outside YAML