# Copilot Instructions

## Project overview

- This is a Next.js 16 App Router portfolio site for Code With Ram.
- The project uses strict TypeScript, React 19, Tailwind CSS v4, shadcn/ui, and Lucide icons.
- `app/page.tsx` contains the main portfolio page, project links, responsive sections, and footer.
- `app/layout.tsx` owns global metadata, fonts, theme providers, and the root document layout.
- `app/globals.css` contains the global design tokens and base styles.
- `public/` contains the logo, favicon set, and other static assets.

## Code conventions

- Follow the existing Prettier style: four-space indentation, double quotes, no semicolons, and trailing commas where supported.
- Use `@/*` aliases for imports from the repository root.
- Prefer Server Components. Add `"use client"` only for interactive browser behavior such as theme switching.
- Reuse existing components and utilities before creating new abstractions.
- Use Tailwind utility classes and the existing design tokens instead of introducing ad hoc CSS.
- Keep external links secure with `rel="noopener noreferrer"` and `target="_blank"` where appropriate.
- Preserve accessible names, semantic HTML, keyboard behavior, visible focus states, and sufficient color contrast.

## UI and content guidance

- Preserve the site's visual language: curiosity-driven engineering, calm typography, responsive layouts, light/dark theme support, and restrained use of primary color.
- Keep project descriptions concise, specific, and consistent with the linked projects.
- The Thirukkural project links to the related API at `https://kural.codewithram.dev/` and its source repository at `https://github.com/nramc/thirukkural-api`.
- Use the existing Code With Ram logo from `public/` rather than adding duplicate branding assets.
- Keep the copyright year dynamic; do not hard-code a year in the footer.
- Update `README.md` when project setup, scripts, architecture, or user-visible behavior changes.

## Development workflow

- Read the relevant Next.js guidance in `node_modules/next/dist/docs/` before changing Next.js-specific behavior.
- Install dependencies with `npm install`.
- Use `npm run dev` for local development.
- Use `npm run lint`, `npm run typecheck`, and `npm run build` to validate code changes.
- `npm run format` formats the project with Prettier; `npm run format:check` currently also writes formatting changes despite its name.
- `npm run security:check` runs the high-severity npm audit check.
- `npm run prepare:commit` runs housekeeping, type checking, and a production build.
- `npm run test` is currently a placeholder that exits unsuccessfully because no test suite is wired in. Do not treat that as a product failure or silently change the script without user intent.
- Avoid unrelated formatting or generated changes in a focused change.

## Security and repository hygiene

- Never commit `.env` files, credentials, API keys, certificates, or other secrets.
- Keep third-party external links explicit and do not introduce untrusted HTML or unsafe URL handling.
- Do not modify generated `.next/` output or dependency files unless the dependency manifest intentionally changes.
- When adding dependencies, update `package.json` and `package-lock.json` together and explain why the dependency is needed.
- Preserve the MIT license and copyright attribution.
