# Portable project instructions

This project is standalone. These instructions apply in Codex and Cursor without access to the original toolkit.

## Project architecture

- Keep all source, configuration, dependencies, and instructions inside this repository. Never import from a parent toolkit or private unpublished package.
- Before adding UI, inspect local source and any local component catalog. Reuse or adapt existing code before creating new components. Record copied source origin, revision, adaptations, and licenses locally.
- Use the local package lockfile and scripts. Do not add speculative libraries or backend services.

## Web platform

- Use Next.js App Router, React, strict TypeScript, and Tailwind CSS. Routes live in src/app; reusable components and pure utilities live outside route files.
- Default to Server Components; use client boundaries only where browser interaction requires them. Do not add backend services or invent API integrations.
- Run npm run check and npm run build before delivery. The typecheck script generates Next route types on a clean checkout.

## Implementation standards

- Inspect local source and any local component catalog before creating UI. Reuse or adapt suitable code; register useful new patterns with source, dependencies, usage, accessibility, and verification notes.
- Use strict TypeScript, explicit public props, semantic tokens, focused components, and clear names. Avoid `any`, speculative abstractions, duplicate state, and unexplained lint/type suppressions.
- Keep reusable code free of KAIROS/client branding, assets, credentials, and hardcoded business rules. Configure through props, variants, and semantic tokens.
- Implement fluid layouts, content-driven breakpoints, text scaling, and safe areas. Check narrow/wide screens, long content, and empty/error/loading states where relevant.
- Use semantic web elements and native accessibility roles, labels, contrast, keyboard/focus behavior, and appropriate touch targets. Do not treat compilation as accessibility verification.
- Analyze supplied designs, reuse patterns, clarify missing interactions, and compare rendered output at reference sizes. Document responsive assumptions; do not invent backend behavior.
- Keep animation purposeful and lightweight. Prefer CSS/native capabilities first, animate transform/opacity where suitable, respect reduced motion, and avoid invisible content when motion is disabled.
- Add dependencies only for demonstrated needs; explain tradeoffs. Keep lockfiles current, use Expo's compatibility installer for native packages, and review third-party licenses. Never run force upgrades blindly.

## Verification, security, and delivery

- Run relevant formatting, lint, type, and build/export checks in this project. Add behavior tests when meaningful; no tests that merely mirror implementation. Report actual results and unexecuted checks.
- Never ship secrets in source, public environment variables, client bundles, logs, or fixtures. Environment examples contain placeholders only; ignore local env files and signing material.
- Keep API contracts and mocked integrations explicit. Backend authorization, validation, data storage, and secrets belong to the responsible backend; frontend guards are not security boundaries.
- Inspect Git diffs/status before delivery. Do not overwrite unrelated work, auto-commit, push, create remotes, deploy, or change credentials without authorization. Never commit build output or node_modules.
- Client repositories must work without the toolkit. Do not transfer client-confidential code/assets back. Suggest general improvements for approval.
- Explain significant architecture/library decisions briefly, including their practical tradeoffs and one useful learning concept.

## Mandatory completion report

Every completed development task ends with these exact sections, concise but informative:

1. **Summary** — implemented changes.
2. **Files Changed** — important created, modified, removed files.
3. **Components Reused** — existing code reused/adapted, or none.
4. **New Components** — new components and purpose, or none.
5. **Dependencies** — added/removed/updated packages and justification.
6. **Tests and Verification** — passed, failed, and unexecuted checks. Never claim a pass without execution.
7. **Functionality** — working, mocked, and incomplete behavior.
8. **Manual Review** — specific user checks still needed.
9. **Learning Notes** — brief relevant concepts and tradeoffs.
10. **Toolkit Improvements** — approval-based reusable suggestions, or none.
11. **Git Status** — current branch, commit and working-tree status when available.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
