# Agent instructions

These instructions apply to the repository rooted at this file. Follow them
unless a more-specific instruction file applies to the files you are changing.

## Repository overview

This is the Next.js 16 App Router source for
[codewithram.dev](https://codewithram.dev), a personal portfolio site.

- `app/page.tsx` - main portfolio page and user-visible content
- `app/layout.tsx` - root layout, metadata, fonts, and providers
- `app/globals.css` - global styles and design tokens
- `components/` - reusable UI and theme components
- `public/` - static assets, logos, and icons
- `lib/` - shared utilities, when present
- `.github/copilot-instructions.md` - additional project context
- `README.md` - setup, scripts, structure, and user-facing project documentation

The stack is strict TypeScript, React 19, Next.js 16, Tailwind CSS 4,
shadcn/ui, and Lucide icons.

## Before changing code

1. Read the relevant source files and nearby tests before editing.
2. Check `git status` and preserve unrelated user changes.
3. Search for an existing component, utility, or pattern before adding one.
4. For Next.js-specific work, read the applicable documentation under
   `node_modules/next/dist/docs/`; this project may use APIs that differ from
   older Next.js versions.
5. Keep the change focused. Do not modify generated output in `.next/`.

## Implementation conventions

- Prefer Server Components. Add `"use client"` only when browser interactivity
  requires it.
- Use the `@/*` path alias for imports from the repository root.
- Follow the existing formatting: four-space indentation, double quotes, no
  semicolons, and trailing commas where supported.
- Prefer Tailwind utilities and existing design tokens over ad hoc CSS.
- Reuse existing components and utilities before introducing abstractions.
- Preserve semantic HTML, accessible names, keyboard behavior, visible focus
  states, and sufficient color contrast.
- External links should use `target="_blank"` with
  `rel="noopener noreferrer"` when they open a new tab.
- Preserve the site's calm, curiosity-driven visual language, responsive layout,
  light/dark theme support, and restrained use of the primary color.
- Keep the copyright year dynamic.
- Use the existing Code With Ram branding assets; do not add duplicate logos.

## Development and validation

Install dependencies with `npm install`, then use:

```bash
npm run dev          # local development
npm run lint         # ESLint
npm run typecheck    # TypeScript without emitting files
npm run build        # production build
npm run security:check
```

`npm run format` formats the project with Prettier. Despite its name,
`npm run format:check` currently writes formatting changes, so do not use it
when a read-only check is required.

`npm run test` is a placeholder that exits unsuccessfully because no test suite
is configured. Do not treat that placeholder failure as a product regression or
silently change the script without explicit user intent. For a normal code
change, run the smallest relevant validation commands; use
`npm run prepare:commit` when a full pre-commit check is appropriate.

If validation cannot be run, report the exact command and reason. Do not claim
that an unrun check passed.

## Content and documentation

Keep project descriptions concise, specific, and consistent with their linked
projects. The Thirukkural project links to
`https://kural.codewithram.dev/` and
`https://github.com/nramc/thirukkural-api`.

Update `README.md` when setup, scripts, architecture, or user-visible behavior
changes. Do not create planning or status files unless requested.

## Security and repository hygiene

- Never commit secrets, `.env` files, credentials, API keys, certificates, or
  private data.
- Do not introduce unsafe HTML, untrusted URL handling, or weakened security
  controls.
- When adding a dependency, update `package.json` and `package-lock.json`
  together and explain why it is needed.
- Preserve the MIT license and copyright attribution.
- Review `git diff` before finishing and ensure only intended files changed.
- Do not commit, push, reset, or rewrite history unless explicitly requested.

## Completion requirements

Before reporting completion:

1. Confirm the requested behavior or documentation is present.
2. Run appropriate validation for the files changed.
3. Review the final diff for accidental changes.
4. Summarize what changed and mention any validation that could not be run.
