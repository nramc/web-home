<div align="center">
  <img src="./public/CodeWithRam-512x512.png" alt="Code With Ram logo" width="120" />

  <h1>Code With Ram</h1>

  <p><strong>Curiosity-driven engineering for useful software.</strong></p>

  <p>
    <a href="https://codewithram.dev"><img src="https://img.shields.io/badge/website-codewithram.dev-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-16a34a?style=for-the-badge" alt="MIT License" /></a>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" /></a>
  </p>
</div>

The source for [codewithram.dev](https://codewithram.dev), a personal home
page for Ram's full-stack engineering work, products, APIs, and open-source
projects. The site includes a landing page plus dedicated `/about`,
`/resume`, `/projects`, and `/contact` routes — this consolidates what used
to be a separate MkDocs-based portfolio (formerly
`myprofile.codewithram.dev`) into a single Next.js codebase.

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide](https://lucide.dev/) icons

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command                  | Description                                                       |
| ------------------------ | ----------------------------------------------------------------- |
| `npm run dev`            | Start the development server                                      |
| `npm run build`          | Create a production build                                         |
| `npm run start`          | Start the production server                                       |
| `npm run test`           | Run the current test command placeholder                          |
| `npm run lint`           | Run ESLint                                                        |
| `npm run lint:fix`       | Automatically fix ESLint issues                                   |
| `npm run format:check`   | Format TypeScript files with Prettier                             |
| `npm run format`         | Format the project with Prettier                                  |
| `npm run typecheck`      | Run the TypeScript compiler without emitting files                |
| `npm run security:check` | Run the high-severity npm audit check                             |
| `npm run housekeeping`   | Fix lint issues and format the project                            |
| `npm run prepare:commit` | Run housekeeping, type checking, and a production build           |
| `npm run verify`         | Run formatting, linting, type checking, security, and test checks |

## Project structure

- `app/` - Next.js routes (`/`, `/about`, `/resume`, `/projects`, `/contact`),
  layout, and global styles
- `components/` - Reusable UI, layout (`site-header`, `site-footer`), and
  theme components
- `public/` - Static assets, site icons, résumé PDF, certificates, and project
  logos
- `lib/` - Shared utilities and content data modules (`projects.ts`,
  `resume.ts`, `about.ts`, `social.ts`) — update these files to change
  portfolio content instead of editing page markup directly

## Editing content

Portfolio content lives as typed data in `lib/`, not as page markup or
Markdown:

- `lib/profile/projects.ts` - project cards shown on the landing page and `/projects`
- `lib/profile/resume.ts` - experience, skills, education, certifications, and awards
  shown on `/resume`
- `lib/profile/about.ts` - capabilities, highlights, passions, hobbies, and
  inspirations shown on `/about`
- `lib/profile/social.ts` - social/contact links shown in the footer and on `/contact`

Update the relevant data file and the corresponding page will pick up the
change automatically.

## License

This project is licensed under the [MIT License](./LICENSE).

Copyright (c) 2026 Ram
