# Repository Guidelines

## Product Context
Theresia is "Autonomous Research by Isar Innovations". This repository is the new Theresia.ai codebase and rebrand of the technical product currently visible at `rsrx.de`. Prioritize a polished landing page and a production-ready research product foundation.

## Landing Page & Design Direction
The visual reference is `https://search-party-next.vercel.app/`. Use it for direction: confident SaaS hero, clear CTA, modular feature sections, agent/workflow storytelling, and polished footer. Do not copy Search Party branding, copy, images, or layout. Theresia should feel premium, research-oriented, credible, and tied to Isar Innovations.

## Project Structure & Module Organization
This repository is newly initialized. Use this structure as it grows:

- `src/app/`: Next.js App Router routes, layouts, and page-level UI.
- `src/components/`: reusable React components, grouped by domain or feature.
- `src/lib/`: shared TypeScript utilities, clients, and configuration helpers.
- `src/server/`: server-side services, data access, and API logic.
- `src/styles/`: global styles and design tokens.
- `public/`: static assets such as logos, screenshots, fonts, and Open Graph images.
- `tests/` or `*.test.ts(x)`: unit and integration tests near the relevant code.
- `db/` or `prisma/`: Postgres schema, migrations, and seed scripts.

## Build, Test, and Development Commands
Keep these commands available once `package.json` exists:

- `npm install`: install project dependencies.
- `npm run dev`: start local Next.js development.
- `npm run build`: create a production build.
- `npm run lint`: run ESLint checks.
- `npm run typecheck`: run TypeScript without emitting files.
- `npm test`: run the test suite.
- `npm run db:migrate`: apply Postgres migrations.

## Coding Style & Naming Conventions
Use TypeScript throughout. Prefer function components, explicit server/client boundaries, and typed data access. Name React components in `PascalCase`, hooks as `useThing`, utilities in `camelCase`, and route folders in lowercase kebab-case. Use Prettier and ESLint.

## Testing Guidelines
Test research workflows, data access, and public landing page behavior. Prefer colocated files such as `ResearchCard.test.tsx` or feature tests under `tests/`. Add integration coverage before changing Postgres schema or query logic.

## Commit & Pull Request Guidelines
There is no commit history yet. Use concise imperative commits such as `Add landing page hero` or `Set up Postgres migrations`. PRs should include summary, test results, linked task when available, and screenshots for UI changes.

## Security & Configuration Tips
Keep secrets out of git. Store local values in `.env.local` and document required variables in `.env.example`. Treat database credentials, API keys, and research-source tokens as sensitive.
